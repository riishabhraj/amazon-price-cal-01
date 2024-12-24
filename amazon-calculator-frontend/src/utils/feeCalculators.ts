import { PricingFormData, CalculationResult } from '../types';
import { calculateTotalFees as calculateLocalTotalFees } from './pricing';

const API_BASE_URL = 'http://localhost:5000/api/v1';

const calculateLocalFees = (data: PricingFormData): CalculationResult => {
  const result = calculateLocalTotalFees(data);
  return {
    breakdown: {
      referralFee: result.breakdown.referralFee,
      weightHandlingFee: result.breakdown.weightHandlingFee || 0,
      closingFee: result.breakdown.closingFee || 0,
      pickAndPackFee: result.breakdown.pickAndPackFee || 0
    },
    totalFees: result.totalFees,
    netEarnings: result.netEarnings
  };
};

export const calculateTotalFees = async (data: PricingFormData): Promise<CalculationResult> => {
  try {
    const response = await fetch(`${API_BASE_URL}/profitability-calculator`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to calculate fees');
    }

    const result = await response.json();
    return {
      breakdown: {
        referralFee: result.breakdown.referralFee,
        weightHandlingFee: result.breakdown.weightHandlingFee,
        closingFee: result.breakdown.closingFee,
        pickAndPackFee: result.breakdown.pickAndPackFee
      },
      totalFees: result.totalFees,
      netEarnings: result.netEarnings
    };
  } catch (error) {
    console.error('Error calculating fees:', error);
    return calculateLocalFees(data);
  }
};