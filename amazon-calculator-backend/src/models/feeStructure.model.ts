import mongoose from 'mongoose';

const referralFeeSchema = new mongoose.Schema({
  minPrice: { type: Number },
  maxPrice: { type: Number },
  percentage: { type: Number, required: true }
});

const weightHandlingFeesSchema = new mongoose.Schema({
  easyShip: {
    standard: {
      first500g: {
        local: Number,
        regional: Number,
        national: Number
      },
      additional500gUpTo1kg: {
        local: Number,
        regional: Number,
        national: Number
      },
      additionalKgAfter1kg: {
        local: Number,
        regional: Number,
        national: Number
      }
    },
    heavyBulky: {
      first12kg: {
        local: Number,
        regional: Number,
        national: Number
      },
      additionalKgAfter12kg: {
        local: Number,
        regional: Number,
        national: Number
      }
    }
  },
  fba: {
    standard: {
      premium: {
        first500g: Number,
        additional500gUpTo1kg: Number,
        additionalKgAfter1kg: Number
      },
      standard: {
        first500g: Number,
        additional500gUpTo1kg: Number,
        additionalKgAfter1kg: Number
      },
      basic: {
        first500g: Number,
        additional500gUpTo1kg: Number,
        additionalKgAfter1kg: Number
      }
    }
  }
});

const closingFeesSchema = new mongoose.Schema({
  easyShip: {
    upTo250: Number,
    upTo500: Number,
    upTo1000: Number,
    above1000: Number
  },
  fba: {
    upTo250: Number,
    upTo500: Number,
    upTo1000: Number,
    above1000: Number
  },
  selfShip: {
    upTo250: Number,
    upTo500: Number,
    upTo1000: Number,
    above1000: Number
  }
});

const pickAndPackFeesSchema = new mongoose.Schema({
  standard: Number,
  heavyBulky: Number
});

const feeStructureSchema = new mongoose.Schema({
  category: { type: String, required: true, unique: true },
  referralFees: [referralFeeSchema],
  weightHandlingFees: weightHandlingFeesSchema,
  closingFees: closingFeesSchema,
  pickAndPackFees: pickAndPackFeesSchema
});

export const FeeStructure = mongoose.model('FeeStructure', feeStructureSchema); 