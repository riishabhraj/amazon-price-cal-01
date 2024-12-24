import axios from 'axios';
import { PricingFormData, CalculationResult } from '../types';

const API_BASE_URL = 'http://localhost:5000/api/v1';

export class ApiService {
    static async calculateFees(data: PricingFormData): Promise<CalculationResult> {
        try {
            const response = await axios.post(`${API_BASE_URL}/calculate`, data);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(error.response?.data?.error || 'Failed to calculate fees');
            }
            throw error;
        }
    }

    static async getFeeStructure() {
        try {
            const response = await axios.get(`${API_BASE_URL}/fee-structure`);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(error.response?.data?.error || 'Failed to fetch fee structure');
            }
            throw error;
        }
    }
} 