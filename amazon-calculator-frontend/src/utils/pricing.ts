import { PricingFormData, CalculationResult } from '../types';

export const calculateReferralFee = (category: string, price: number): number => {
  // Automotive category example
  if (category.startsWith('Automotive')) {
    if (category === 'Automotive - Helmets & Riding Gloves') {
      return price <= 500 ? price * 0.065 : price * 0.085;
    }
    if (category === 'Automotive - Tyres & Rims') {
      return price <= 500 ? price * 0.05 : price * 0.07;
    }
  }

  // Default rate for other categories
  return price * 0.15;
};

export const calculateShippingFee = (
  mode: string,
  weight: number,
  serviceLevel: string,
  location: string,
  size: string
): number => {
  if (mode === 'Easy Ship') {
    if (size === 'Standard') {
      if (weight <= 0.5) {
        switch (location) {
          case 'Local': return 43;
          case 'Regional': return 54.5;
          case 'National': return 76;
          default: return 0;
        }
      }
    }
  }

  if (mode === 'FBA') {
    if (size === 'Standard') {
      if (weight <= 0.5) {
        if (serviceLevel === 'Premium' || serviceLevel === 'Advanced') {
          return 29;
        }
        if (serviceLevel === 'Standard') {
          return 35;
        }
        return 41; // Basic
      }
    }
  }

  return 0; // Default case
};

export const calculatePickAndPackFee = (size: string): number => {
  return size === 'Standard' ? 14 : 26;
};

export const calculateClosingFee = (mode: string, price: number): number => {
  if (mode === 'Easy Ship') {
    if (price <= 250) return 4;
    if (price <= 500) return 9;
    if (price <= 1000) return 30;
    return 61;
  }
  if (mode === 'FBA') {
    if (price <= 250) return 25;
    if (price <= 500) return 20;
    if (price <= 1000) return 25;
    return 50;
  }
  // Self Ship
  if (price <= 250) return 7;
  if (price <= 500) return 20;
  if (price <= 1000) return 41;
  return 80;
};

export const calculateTotalFees = (data: PricingFormData): CalculationResult => {
  const referralFee = calculateReferralFee(data.productCategory, data.sellingPrice);
  const weightHandlingFee = calculateShippingFee(
    data.shippingMode,
    data.weight,
    data.serviceLevel,
    data.location,
    data.productSize
  );
  const closingFee = calculateClosingFee(data.shippingMode, data.sellingPrice);
  const pickAndPackFee = calculatePickAndPackFee(data.productSize);

  const totalFees = referralFee + weightHandlingFee + closingFee + pickAndPackFee;
  const netEarnings = data.sellingPrice - totalFees;

  return {
    breakdown: {
      referralFee,
      weightHandlingFee,
      closingFee,
      pickAndPackFee
    },
    totalFees,
    netEarnings
  };
};