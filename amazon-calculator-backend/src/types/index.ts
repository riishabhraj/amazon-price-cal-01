export type ShippingMode = 'Easy Ship' | 'FBA' | 'Self Ship';
export type ServiceLevel = 'Premium' | 'Standard' | 'Basic' | 'Advanced';
export type ProductSize = 'standard' | 'heavyBulky';
export type Location = 'local' | 'regional' | 'national' | 'ixd';

export interface WeightFees {
    local: number;
    regional: number;
    national: number;
}

export interface EasyShipStandardFees {
    first500g: WeightFees;
    additional500gUpTo1kg: WeightFees;
    additionalKgAfter1kg: WeightFees;
}

export interface EasyShipHeavyBulkyFees {
    first12kg: WeightFees;
    additionalKgAfter12kg: WeightFees;
}

export interface FBAServiceLevelFees {
    first500g: number;
    additional500gUpTo1kg: number;
    additionalKgAfter1kg: number;
}

export interface WeightHandlingFeeStructure {
    easyShip: {
        standard: EasyShipStandardFees;
        heavyBulky: EasyShipHeavyBulkyFees;
    };
    fba: {
        standard: {
            premium: FBAServiceLevelFees;
            standard: FBAServiceLevelFees;
            basic: FBAServiceLevelFees;
        };
    };
}

export interface CalculationData {
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

export interface PriceRange {
    minPrice?: number;
    maxPrice?: number;
    percentage: number;
} 