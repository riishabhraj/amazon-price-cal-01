import { Request, Response } from 'express';
import { CalculatorService } from '../services/calculator.service';
import { FeeStructure } from '../models/feeStructure.model';
import { SheetsService } from '../services/sheets.service';

export class CalculatorController {
    private calculatorService: CalculatorService;
    private sheetsService: SheetsService;

    constructor() {
        this.calculatorService = new CalculatorService();
        this.sheetsService = new SheetsService();
    }

    public calculateProfitability = async (req: Request, res: Response): Promise<void> => {
        try {
            console.log('Received calculation request:', req.body);

            // Validate request body
            if (!this.isValidCalculationRequest(req.body)) {
                res.status(400).json({ error: 'Invalid request body' });
                return;
            }

            const calculatedFees = await this.calculatorService.calculateTotalFees(req.body);
            console.log('Calculated fees:', calculatedFees);
            res.json(calculatedFees);
        } catch (error) {
            console.error('Error in calculateProfitability:', error);
            res.status(500).json({
                error: error instanceof Error ? error.message : 'Error calculating fees'
            });
        }
    };

    public getFeeStructure = async (req: Request, res: Response): Promise<void> => {
        try {
            console.log('Fetching fee structure...');

            // First, try to sync with Google Sheets
            await this.sheetsService.syncFeeStructure();
            console.log('Synced with Google Sheets');

            // Then fetch from database
            const feeStructure = await FeeStructure.find();
            console.log('Found fee structures:', feeStructure.length);

            if (!feeStructure.length) {
                console.log('No fee structures found');
                res.status(404).json({ error: 'No fee structures found' });
                return;
            }

            res.json(feeStructure);
        } catch (error) {
            console.error('Error in getFeeStructure:', error);
            res.status(500).json({
                error: error instanceof Error ? error.message : 'Error fetching fee structure'
            });
        }
    };

    private isValidCalculationRequest(body: any): boolean {
        const requiredFields = [
            'productCategory',
            'sellingPrice',
            'weight',
            'shippingMode',
            'serviceLevel',
            'productSize',
            'location'
        ];

        return requiredFields.every(field => body[field] !== undefined);
    }
} 