export const weightHandlingFees = {
    easyShip: {
        standard: {
            first500g: {
                local: 43,
                regional: 54.5,
                national: 76
            },
            additional500gUpTo1kg: {
                local: 13,
                regional: 21,
                national: 38
            },
            additionalKgAfter1kg: {
                local: 21,
                regional: 33,
                national: 47
            }
        },
        heavyBulky: {
            first12kg: {
                local: 140,
                regional: 165,
                national: 190
            },
            additionalKgAfter12kg: {
                local: 11.5,
                regional: 13.5,
                national: 15.5
            }
        }
    },
    fba: {
        standard: {
            premium: {
                first500g: 29,
                additional500gUpTo1kg: 13,
                additionalKgAfter1kg: 21
            },
            standard: {
                first500g: 35,
                additional500gUpTo1kg: 13,
                additionalKgAfter1kg: 21
            },
            basic: {
                first500g: 41,
                additional500gUpTo1kg: 13,
                additionalKgAfter1kg: 21
            }
        }
    }
}; 