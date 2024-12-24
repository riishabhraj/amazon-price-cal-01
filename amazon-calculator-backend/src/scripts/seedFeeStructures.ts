import mongoose from 'mongoose';
import { FeeStructure } from '../models/feeStructure.model';
import { referralFees, weightHandlingFees, closingFees, otherFees } from '../data/fees';

const seedFeeStructures = async () => {
    try {
        // Clear existing fee structures
        await FeeStructure.deleteMany({});

        // Create fee structures for automotive categories
        await FeeStructure.create({
            category: 'Automotive - Helmets & Riding Gloves',
            referralFees: referralFees.automotive.helmetsAndGloves,
            weightHandlingFees,
            closingFees,
            pickAndPackFees: otherFees.pickAndPack
        });

        await FeeStructure.create({
            category: 'Automotive - Tyres & Rims',
            referralFees: referralFees.automotive.tyresAndRims,
            weightHandlingFees,
            closingFees,
            pickAndPackFees: otherFees.pickAndPack
        });

        await FeeStructure.create({
            category: 'Automotive Vehicles',
            referralFees: [{ percentage: referralFees.automotive.vehicles.percentage }],
            weightHandlingFees,
            closingFees,
            pickAndPackFees: otherFees.pickAndPack
        });

        // Create fee structures for baby categories
        await FeeStructure.create({
            category: 'Baby - Hardlines',
            referralFees: referralFees.baby.hardlines,
            weightHandlingFees,
            closingFees,
            pickAndPackFees: otherFees.pickAndPack
        });

        await FeeStructure.create({
            category: 'Baby - Strollers',
            referralFees: referralFees.baby.strollers,
            weightHandlingFees,
            closingFees,
            pickAndPackFees: otherFees.pickAndPack
        });

        await FeeStructure.create({
            category: 'Baby - Diapers',
            referralFees: referralFees.baby.diapers,
            weightHandlingFees,
            closingFees,
            pickAndPackFees: otherFees.pickAndPack
        });

        // Create fee structure for books
        await FeeStructure.create({
            category: 'Books',
            referralFees: referralFees.books,
            weightHandlingFees,
            closingFees,
            pickAndPackFees: otherFees.pickAndPack
        });

        console.log('Fee structures seeded successfully');
    } catch (error) {
        console.error('Error seeding fee structures:', error);
    }
};

// Run the seed function if this script is executed directly
if (require.main === module) {
    mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/amazon-calculator')
        .then(() => {
            console.log('Connected to MongoDB');
            return seedFeeStructures();
        })
        .then(() => {
            console.log('Seeding completed');
            process.exit(0);
        })
        .catch((error) => {
            console.error('Error:', error);
            process.exit(1);
        });
}

export { seedFeeStructures }; 