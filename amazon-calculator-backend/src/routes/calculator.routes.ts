import { Router } from 'express';
import { CalculatorController } from '../controllers/calculator.controller';

const router = Router();
const calculatorController = new CalculatorController();

router.post('/calculate', calculatorController.calculateProfitability);
router.get('/fee-structure', calculatorController.getFeeStructure);

export default router; 