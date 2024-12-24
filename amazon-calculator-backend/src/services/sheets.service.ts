import { FeeStructure } from '../models/feeStructure.model';
import { referralFeeStructures } from '../data/fees/referralFees';
import { weightHandlingFees } from '../data/fees/weightHandlingFees';
import { closingFees } from '../data/fees/closingFees';
import { pickAndPackFees } from '../data/fees/pickAndPackFees';

export class SheetsService {
  public async syncFeeStructure(): Promise<boolean> {
    try {
      console.log('Starting fee structure sync...');

      // Clear existing fee structures
      await FeeStructure.deleteMany({});
      console.log('Cleared existing fee structures');

      // Convert our static fee data into database structure
      const feeStructures = Object.entries(referralFeeStructures).map(([category, fees]) => ({
        category,
        referralFees: fees,
        weightHandlingFees: {
          easyShip: weightHandlingFees.easyShip,
          fba: weightHandlingFees.fba
        },
        closingFees: {
          easyShip: closingFees.easyShip,
          fba: closingFees.fba,
          selfShip: closingFees.selfShip
        },
        pickAndPackFees: pickAndPackFees.fba
      }));

      // Insert the new fee structures
      const result = await FeeStructure.insertMany(feeStructures);
      console.log(`Inserted ${result.length} fee structures`);

      // Log available categories
      const categories = await FeeStructure.distinct('category');
      console.log('Available categories:', categories);

      return true;
    } catch (error) {
      console.error('Error in syncFeeStructure:', error);
      throw error;
    }
  }
} 