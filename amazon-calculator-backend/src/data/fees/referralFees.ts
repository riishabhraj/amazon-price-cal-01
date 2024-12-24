export const referralFeeStructures: Record<string, Array<{ minPrice?: number; maxPrice?: number; percentage: number }>> = {
    'Automotive - Helmets & Riding Gloves': [
        { maxPrice: 500, percentage: 6.5 },
        { minPrice: 500, percentage: 8.5 }
    ],
    'Automotive - Tyres & Rims': [
        { maxPrice: 500, percentage: 5.0 },
        { minPrice: 500, percentage: 7.0 }
    ],
    'Automotive Vehicles - 2-Wheelers 4-Wheelers and Electric Vehicles': [
        { percentage: 5.0 }
    ],
    'Automotive – Car and Bike parts': [
        { maxPrice: 500, percentage: 13.0 },
        { minPrice: 500, percentage: 14.0 }
    ],
    'Automotive – Cleaning kits': [
        { maxPrice: 500, percentage: 9.0 },
        { minPrice: 500, percentage: 12.0 }
    ],
    'Automotive Accessories': [
        { maxPrice: 1000, percentage: 14.0 },
        { minPrice: 1000, percentage: 15.5 }
    ],
    'Vehicle Tools and Appliances': [
        { maxPrice: 300, percentage: 6.5 },
        { minPrice: 300, maxPrice: 500, percentage: 7.5 },
        { minPrice: 500, percentage: 8.5 }
    ],
    'Oils Lubricants': [
        { percentage: 8.5 }
    ],
    'Automotive – Batteries and air fresheners': [
        { maxPrice: 500, percentage: 6.5 },
        { minPrice: 500, maxPrice: 1000, percentage: 7.5 },
        { minPrice: 1000, percentage: 8.5 }
    ],
    'Car Electronics Devices': [
        { maxPrice: 500, percentage: 7.5 },
        { minPrice: 500, maxPrice: 1000, percentage: 9.5 },
        { minPrice: 1000, percentage: 10.0 }
    ],
    'Car Electronics Accessories': [
        { maxPrice: 500, percentage: 10.5 },
        { minPrice: 500, maxPrice: 1000, percentage: 11.0 },
        { minPrice: 1000, percentage: 13.0 }
    ],
    'Baby Hardlines': [
        { maxPrice: 300, percentage: 6.0 },
        { minPrice: 300, maxPrice: 500, percentage: 8.5 },
        { minPrice: 500, maxPrice: 1000, percentage: 6.0 },
        { minPrice: 1000, percentage: 7.5 }
    ],
    'Baby Strollers': [
        { maxPrice: 300, percentage: 4.0 },
        { minPrice: 300, maxPrice: 1000, percentage: 6.0 },
        { minPrice: 1000, percentage: 10.0 }
    ],
    'Baby diapers': [
        { maxPrice: 300, percentage: 5.0 },
        { minPrice: 300, maxPrice: 500, percentage: 5.5 },
        { minPrice: 500, percentage: 9.5 }
    ],
    'Books': [
        { maxPrice: 250, percentage: 3.0 },
        { minPrice: 250, maxPrice: 500, percentage: 4.5 },
        { minPrice: 500, maxPrice: 1000, percentage: 9.0 },
        { minPrice: 1000, percentage: 13.5 }
    ],
    'Movies': [
        { percentage: 6.5 }
    ],
    'Music': [
        { percentage: 6.5 }
    ],
    'Musical Instruments - Guitars': [
        { percentage: 10.0 }
    ],
    'Musical Instruments - Keyboards': [
        { maxPrice: 500, percentage: 8.0 },
        { minPrice: 500, percentage: 12.0 }
    ],
    'Musical Instruments - Microphones': [
        { percentage: 9.5 }
    ],
    'Musical Instruments - Others': [
        { maxPrice: 300, percentage: 10.0 },
        { minPrice: 300, maxPrice: 500, percentage: 7.0 },
        { minPrice: 500, maxPrice: 1000, percentage: 10.5 },
        { minPrice: 1000, percentage: 11.0 }
    ],
    'Video Games - Online game services': [
        { maxPrice: 500, percentage: 2.0 },
        { minPrice: 500, percentage: 3.5 }
    ],
    'Video Games - Accessories': [
        { maxPrice: 500, percentage: 10.5 },
        { minPrice: 500, percentage: 13.5 }
    ],
    'Video Games - Consoles': [
        { maxPrice: 1000, percentage: 7.0 },
        { minPrice: 1000, percentage: 9.0 }
    ],
    'Video Games': [
        { maxPrice: 500, percentage: 9.0 },
        { minPrice: 500, maxPrice: 1000, percentage: 10.0 },
        { minPrice: 1000, percentage: 12.0 }
    ],
    // Electronics & Accessories
    'Cables and Adapters': [
        { maxPrice: 300, percentage: 21.5 },
        { minPrice: 300, maxPrice: 500, percentage: 17.0 },
        { minPrice: 500, percentage: 20.0 }
    ],
    'Camera Accessories': [
        { maxPrice: 500, percentage: 11.0 },
        { minPrice: 500, maxPrice: 1000, percentage: 12.5 },
        { minPrice: 1000, percentage: 13.5 }
    ],
    'Camera Lenses': [
        { percentage: 7.0 }
    ],
    'Camera and Camcorder': [
        { percentage: 5.0 }
    ],
    'Cases Covers Skins Screen Guards': [
        { maxPrice: 150, percentage: 3.0 },
        { minPrice: 150, maxPrice: 300, percentage: 15.0 },
        { minPrice: 300, maxPrice: 500, percentage: 22.0 },
        { minPrice: 500, percentage: 25.0 }
    ],
    'Desktops': [
        { percentage: 8.0 }
    ],
    'Electronic Accessories': [
        { percentage: 17.0 }
    ],
    'Electronic Devices': [
        { percentage: 9.0 }
    ],
    'Hard Disks': [
        { maxPrice: 1000, percentage: 9.5 },
        { minPrice: 1000, percentage: 11.5 }
    ],
    'Headsets Headphones and Earphones': [
        { maxPrice: 500, percentage: 18.0 },
        { minPrice: 500, maxPrice: 1000, percentage: 17.5 },
        { minPrice: 1000, percentage: 18.0 }
    ],
    'Keyboards and Mouse': [
        { maxPrice: 500, percentage: 14.0 },
        { minPrice: 500, maxPrice: 1000, percentage: 14.5 },
        { minPrice: 1000, percentage: 17.0 }
    ],
    'Kindle Accessories': [
        { percentage: 25.0 }
    ],
    'Laptops': [
        { maxPrice: 70000, percentage: 6.0 },
        { minPrice: 70000, percentage: 7.0 }
    ],
    'Memory Cards': [
        { percentage: 16.0 }
    ],
    'Mobile phones': [
        { percentage: 5.5 }
    ],
    'Tablets': [
        { maxPrice: 12000, percentage: 6.0 },
        { minPrice: 12000, percentage: 9.0 }
    ],

    // Fashion & Apparel
    'Apparel - Accessories': [
        { maxPrice: 500, percentage: 13.0 },
        { minPrice: 500, percentage: 19.0 }
    ],
    'Apparel - Sweat Shirts and Jackets': [
        { maxPrice: 500, percentage: 8.0 },
        { minPrice: 500, percentage: 12.0 }
    ],
    'Apparel - Shorts': [
        { maxPrice: 300, percentage: 16.5 },
        { minPrice: 300, maxPrice: 500, percentage: 13.5 },
        { minPrice: 500, maxPrice: 1000, percentage: 23.5 },
        { minPrice: 1000, percentage: 24.0 }
    ],
    'Apparel - Baby': [
        { maxPrice: 300, percentage: 6.0 },
        { minPrice: 300, maxPrice: 500, percentage: 7.5 },
        { minPrice: 500, maxPrice: 1000, percentage: 14.0 },
        { minPrice: 1000, percentage: 20.0 }
    ],
    'Apparel - Ethnic wear': [
        { maxPrice: 300, percentage: 6.5 },
        { minPrice: 300, maxPrice: 500, percentage: 4.0 },
        { minPrice: 500, maxPrice: 1000, percentage: 8.0 },
        { minPrice: 1000, percentage: 17.5 }
    ],

    // Jewelry & Watches
    'Fashion Jewellery': [
        { maxPrice: 500, percentage: 17.5 },
        { minPrice: 500, percentage: 22.5 }
    ],
    'Fine Jewellery - Gold Coins': [
        { percentage: 5.0 }
    ],
    'Fine Jewellery - studded': [
        { percentage: 13.0 }
    ],
    'Fine Jewellery - unstudded and solitaire': [
        { percentage: 5.0 }
    ],
    'Silver Jewellery': [
        { maxPrice: 1000, percentage: 10.5 },
        { minPrice: 1000, percentage: 13.0 }
    ],
    'Watches': [
        { percentage: 14.0 }
    ],

    // Beauty & Personal Care
    'Beauty - Fragrance': [
        { maxPrice: 300, percentage: 13.5 },
        { minPrice: 300, maxPrice: 500, percentage: 12.5 },
        { minPrice: 500, percentage: 14.0 }
    ],
    'Beauty - Haircare Bath and Shower': [
        { maxPrice: 300, percentage: 7.5 },
        { minPrice: 300, maxPrice: 500, percentage: 5.0 },
        { minPrice: 500, percentage: 8.0 }
    ],
    'Beauty - Makeup': [
        { maxPrice: 300, percentage: 6.0 },
        { minPrice: 300, maxPrice: 500, percentage: 4.5 },
        { minPrice: 500, maxPrice: 1000, percentage: 7.5 },
        { minPrice: 1000, percentage: 7.0 }
    ],

    // Home & Kitchen
    'Home Storage': [
        { maxPrice: 300, percentage: 5.5 },
        { minPrice: 300, maxPrice: 1000, percentage: 11.0 },
        { minPrice: 1000, percentage: 15.0 }
    ],
    'Home Decor Products': [
        { maxPrice: 300, percentage: 6.0 },
        { minPrice: 300, maxPrice: 1000, percentage: 12.0 },
        { minPrice: 1000, percentage: 17.0 }
    ],
    'Kitchen - Non Appliances': [
        { maxPrice: 300, percentage: 6.0 },
        { minPrice: 300, percentage: 11.5 }
    ],
    'Large Appliances': [
        { percentage: 5.5 }
    ],
    'Large Appliances - Accessories': [
        { percentage: 16.0 }
    ],

    // Health & Personal Care
    'Health & Personal Care - Medical Equipment & Contact Lens': [
        { percentage: 8.0 }
    ],
    'Health and Personal Care - Ayurvedic products': [
        { maxPrice: 500, percentage: 6.0 },
        { minPrice: 500, maxPrice: 1000, percentage: 7.0 },
        { minPrice: 1000, percentage: 8.0 }
    ],
    'Health & Household - Sports Nutrition': [
        { percentage: 9.0 }
    ],

    // Adding missing categories:
    'Business and Industrial Supplies - Scientific Supplies': [
        { maxPrice: 300, percentage: 11 },
        { minPrice: 300, maxPrice: 15000, percentage: 11.5 },
        { minPrice: 15000, percentage: 7 }
    ],
    'OTC Medicine': [
        { maxPrice: 500, percentage: 12 },
        { minPrice: 500, percentage: 15 }
    ],
    'Masks': [
        { percentage: 7 }
    ],
    'Weighing Scales & Fat Analyzers': [
        { maxPrice: 300, percentage: 11 },
        { minPrice: 300, maxPrice: 500, percentage: 10.5 },
        { minPrice: 500, percentage: 13.5 }
    ],
    '3D Printers': [
        { percentage: 11 }
    ],
    'Business and Industrial Supplies - Material Handling Equipment': [
        { percentage: 5.5 }
    ],
    'Business and Industrial Supplies - Electrical Testing': [
        { percentage: 5 }
    ],
    'Business and Industrial Supplies - Power tools & accessories': [
        { percentage: 10 }
    ],
    'Occupational Safety Supplies': [
        { percentage: 5 }
    ],
    'Stethoscopes': [
        { percentage: 9.5 }
    ],
    'Packing materials': [
        { percentage: 5 }
    ],

    // Adding more missing categories
    'Entertainment Collectibles': [
        { maxPrice: 300, percentage: 13 },
        { minPrice: 300, percentage: 17 }
    ],
    'Fashion Smartwatches': [
        { percentage: 15.5 }
    ],
    'GPS Devices': [
        { percentage: 13.5 }
    ],
    // Warranty Services
    'Warranty Services': [
        { percentage: 30.0 }
    ],
};

// Add type for the fee structure
export interface ReferralFee {
    minPrice?: number;
    maxPrice?: number;
    percentage: number;
}

export type ReferralFeeStructures = Record<string, ReferralFee[]>; 