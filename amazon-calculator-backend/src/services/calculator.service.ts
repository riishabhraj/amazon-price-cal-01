import {
  CalculationData,
  CalculationResult,
  ShippingMode,
  ServiceLevel,
  ProductSize,
  Location
} from '../types';
import { referralFeeStructures } from '../data/fees/referralFees';
import { weightHandlingFees } from '../data/fees/weightHandlingFees';
import { closingFees } from '../data/fees/closingFees';
import { pickAndPackFees } from '../data/fees/pickAndPackFees';

export class CalculatorService {
  public async calculateTotalFees(data: CalculationData): Promise<CalculationResult> {
    try {
      console.log('Calculating fees for:', data);

      const referralFee = this.calculateReferralFee(data.productCategory, data.sellingPrice);
      const weightHandlingFee = this.calculateWeightHandlingFee(data);
      const closingFee = this.calculateClosingFee(data.shippingMode, data.sellingPrice);
      const pickAndPackFee = this.calculatePickAndPackFee(data.shippingMode, data.productSize);

      const totalFees = Number(referralFee) +
        Number(weightHandlingFee) +
        Number(closingFee) +
        Number(pickAndPackFee);

      const result: CalculationResult = {
        breakdown: {
          referralFee: Number(referralFee.toFixed(2)),
          weightHandlingFee: Number(weightHandlingFee.toFixed(2)),
          closingFee: Number(closingFee.toFixed(2)),
          pickAndPackFee: Number(pickAndPackFee.toFixed(2))
        },
        totalFees: Number(totalFees.toFixed(2)),
        netEarnings: Number((data.sellingPrice - totalFees).toFixed(2))
      };

      console.log('Calculated fees:', result);
      return result;
    } catch (error) {
      console.error('Error in calculateTotalFees:', error);
      throw error;
    }
  }

  private calculateReferralFee(category: string, price: number): number {
    const feeStructure = referralFeeStructures[category];
    if (!feeStructure) {
      console.warn(`No fee structure found for category: ${category}`);
      return 0;
    }

    const applicableRange = feeStructure.find(range =>
      (!range.minPrice || price > range.minPrice) &&
      (!range.maxPrice || price <= range.maxPrice)
    );

    if (!applicableRange) {
      console.warn(`No applicable price range found for category ${category} and price ${price}`);
      return 0;
    }

    return (price * applicableRange.percentage) / 100;
  }

  private calculateWeightHandlingFee(data: CalculationData): number {
    const { shippingMode, weight, serviceLevel, location, productSize } = data;

    if (shippingMode === 'Easy Ship') {
      const sizeKey = productSize.toLowerCase() as 'standard' | 'heavyBulky';
      const locationKey = location.toLowerCase() as 'local' | 'regional' | 'national';
      const easyShipFees = weightHandlingFees.easyShip[sizeKey];

      if (!easyShipFees) {
        console.warn(`No Easy Ship fees found for size: ${sizeKey}`);
        return 0;
      }

      if (sizeKey === 'standard') {
        const standardFees = easyShipFees as {
          first500g: Record<string, number>;
          additional500gUpTo1kg: Record<string, number>;
          additionalKgAfter1kg: Record<string, number>;
        };

        if (weight <= 0.5) {
          return standardFees.first500g[locationKey];
        } else if (weight <= 1) {
          return standardFees.first500g[locationKey] +
            standardFees.additional500gUpTo1kg[locationKey];
        } else {
          const additionalKg = Math.ceil(weight - 1);
          return standardFees.first500g[locationKey] +
            standardFees.additional500gUpTo1kg[locationKey] +
            (additionalKg * standardFees.additionalKgAfter1kg[locationKey]);
        }
      } else { // heavyBulky
        const heavyBulkyFees = easyShipFees as {
          first12kg: Record<string, number>;
          additionalKgAfter12kg: Record<string, number>;
        };

        if (weight <= 12) {
          return heavyBulkyFees.first12kg[locationKey];
        } else {
          const additionalKg = Math.ceil(weight - 12);
          return heavyBulkyFees.first12kg[locationKey] +
            (additionalKg * heavyBulkyFees.additionalKgAfter12kg[locationKey]);
        }
      }
    }

    if (shippingMode === 'FBA') {
      const serviceLevelKey = serviceLevel.toLowerCase() as 'premium' | 'standard' | 'basic';
      const fbaFees = weightHandlingFees.fba.standard[serviceLevelKey];

      if (!fbaFees) {
        console.warn(`No FBA fees found for service level: ${serviceLevelKey}`);
        return 0;
      }

      if (weight <= 0.5) {
        return fbaFees.first500g;
      } else if (weight <= 1) {
        return fbaFees.first500g + fbaFees.additional500gUpTo1kg;
      } else {
        const additionalKg = Math.ceil(weight - 1);
        return fbaFees.first500g +
          fbaFees.additional500gUpTo1kg +
          (additionalKg * fbaFees.additionalKgAfter1kg);
      }
    }

    return 0;
  }

  private calculateClosingFee(mode: ShippingMode, price: number): number {
    const modeKey = mode.toLowerCase().replace(' ', '') as keyof typeof closingFees;
    const fees = closingFees[modeKey];

    if (!fees) {
      console.warn(`No closing fees found for mode: ${modeKey}`);
      return 0;
    }

    if (price <= 250) return fees.upTo250;
    if (price <= 500) return fees.upTo500;
    if (price <= 1000) return fees.upTo1000;
    return fees.above1000;
  }

  private calculatePickAndPackFee(mode: ShippingMode, size: ProductSize): number {
    if (mode === 'FBA') {
      const sizeKey = size.toLowerCase() as ProductSize;
      return pickAndPackFees.fba[sizeKey] || 0;
    }
    return 0;
  }
} 