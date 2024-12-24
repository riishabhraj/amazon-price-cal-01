export type ShippingMode = 'Easy Ship' | 'FBA' | 'Self Ship';
export type ServiceLevel = 'Premium' | 'Advanced' | 'Standard' | 'Basic';
export type ProductSize = 'Standard' | 'Heavy & Bulky';
export type Location = 'Local' | 'Regional' | 'National' | 'IXD';

export interface PricingFormData {
  productCategory: string;
  sellingPrice: number;
  weight: number;
  shippingMode: ShippingMode;
  serviceLevel: ServiceLevel;
  productSize: ProductSize;
  location: Location;
}

export interface FeeBreakdown {
  referralFee: number;
  weightHandlingFee: number;
  closingFee: number;
  pickAndPackFee: number;
}

export interface CalculationResult {
  breakdown: FeeBreakdown;
  totalFees: number;
  netEarnings: number;
}