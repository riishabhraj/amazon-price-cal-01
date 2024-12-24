import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';
import { PricingFormData, CalculationResult } from '../types';
import { ApiService } from '../services/api.service';

export default function PricingCalculator() {
  const [formData, setFormData] = useState<PricingFormData>({
    productCategory: '',
    sellingPrice: 0,
    weight: 0.5,
    shippingMode: 'Easy Ship',
    serviceLevel: 'Standard',
    productSize: 'Standard',
    location: 'Local'
  });

  const [categories, setCategories] = useState<string[]>([]);
  const [results, setResults] = useState<CalculationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeeStructure = async () => {
      try {
        const feeStructure = await ApiService.getFeeStructure();
        const availableCategories = feeStructure.map((fee: any) => fee.category);
        setCategories(availableCategories);
        if (availableCategories.length > 0) {
          setFormData(prev => ({ ...prev, productCategory: availableCategories[0] }));
        }
      } catch (error) {
        console.error('Error fetching fee structure:', error);
        setError('Failed to load product categories');
      }
    };

    fetchFeeStructure();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'sellingPrice' || name === 'weight' ? parseFloat(value) || 0 : value
    }));
  };

  const handleCalculate = async () => {
    setLoading(true);
    setError(null);
    try {
      const calculatedFees = await ApiService.calculateFees(formData);
      setResults(calculatedFees);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to calculate fees');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount: number | null | undefined): string => {
    if (typeof amount !== 'number') return '₹0.00';
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-[800px] bg-white rounded-3xl shadow-lg p-8">
        <div className="flex items-center gap-2 mb-8">
          <Calculator className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-bold">Amazon Pricing Calculator</h1>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <label className="block text-gray-600 mb-2">Product Category</label>
              <select
                name="productCategory"
                value={formData.productCategory}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Selling Price (₹)</label>
              <input
                type="number"
                name="sellingPrice"
                value={formData.sellingPrice}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg"
                min="0"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Weight (kg)</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg"
                min="0"
                step="0.1"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 mb-2">Shipping Mode</label>
                <select
                  name="shippingMode"
                  value={formData.shippingMode}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg"
                >
                  <option value="Easy Ship">Easy Ship</option>
                  <option value="FBA">FBA</option>
                  <option value="Self Ship">Self Ship</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-600 mb-2">Service Level</label>
                <select
                  name="serviceLevel"
                  value={formData.serviceLevel}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg"
                >
                  <option value="Standard">Standard</option>
                  <option value="Premium">Premium</option>
                  <option value="Basic">Basic</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 mb-2">Product Size</label>
                <select
                  name="productSize"
                  value={formData.productSize}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg"
                >
                  <option value="Standard">Standard</option>
                  <option value="Heavy & Bulky">Heavy & Bulky</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-600 mb-2">Location</label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg"
                >
                  <option value="Local">Local</option>
                  <option value="Regional">Regional</option>
                  <option value="National">National</option>
                  <option value="IXD">IXD</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleCalculate}
              disabled={loading}
              className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300"
            >
              {loading ? 'Calculating...' : 'Calculate Fees'}
            </button>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-6">Fee Breakdown</h2>
            {error && (
              <div className="text-red-500 mb-4">
                {error}
              </div>
            )}

            {results && (
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Referral Fee:</span>
                    <span>{formatCurrency(results.breakdown.referralFee)}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Weight Handling Fee:</span>
                    <span>{formatCurrency(results.breakdown.weightHandlingFee)}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Closing Fee:</span>
                    <span>{formatCurrency(results.breakdown.closingFee)}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Pick & Pack Fee:</span>
                    <span>{formatCurrency(results.breakdown.pickAndPackFee)}</span>
                  </div>

                  <div className="h-px bg-gray-200 my-4"></div>

                  <div className="flex justify-between items-center font-semibold">
                    <span>Total Fees:</span>
                    <span className="text-blue-600">{formatCurrency(results.totalFees)}</span>
                  </div>

                  <div className="flex justify-between items-center font-semibold">
                    <span>Net Earnings:</span>
                    <span className="text-green-600">{formatCurrency(results.netEarnings)}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}