import React, { useState } from 'react';
import TotalSalesByCategoryChart from './categorie/TotalSalesByCategoryChart ';
import AverageSalesPriceByCategoryChart from './categorie/AverageSalesPriceByCategoryChart ';
import SalesDistributionByCategoryChart from './categorie/SalesDistributionByCategoryChart ';
import RevenueContributionByCategoryChart from './categorie/RevenueContributionByCategoryChart ';
import NumberOfProductsByCategoryChart from './categorie/NumberOfProductsByCategoryChart ';
import ProductPredictionForm from '../product/ProductPredictionForm';

const ProductsSection = () => {
    const [frequencyPeriod, setFrequencyPeriod] = useState('daily');
    const [selectedCategoryChart, setSelectedCategoryChart] = useState('totalSalesByCategory');

    const chartsCategories = {
        totalSalesByCategory: { component: <TotalSalesByCategoryChart period={frequencyPeriod} />, title: 'Total Sales by Category' },
        averageSalesPriceByCategory: { component: <AverageSalesPriceByCategoryChart period={frequencyPeriod} />, title: 'Average Sales Price by Category' },
        salesDistributionByCategory: { component: <SalesDistributionByCategoryChart period={frequencyPeriod} />, title: 'Sales Distribution by Category' },
        revenueContributionByCategory: { component: <RevenueContributionByCategoryChart period={frequencyPeriod} />, title: 'Revenue Contribution by Category' },
    };

    return (
        <div className="performance-overview">
            <div className="row">
                <div className="col-6">
                    <select
                        value={frequencyPeriod}
                        onChange={(e) => setFrequencyPeriod(e.target.value)}
                        style={{ marginBottom: '20px' }}
                    >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                    {Object.keys(chartsCategories).map((chartKey) => (
                        <label key={chartKey}>
                            <input
                                type="radio"
                                value={chartKey}
                                checked={selectedCategoryChart === chartKey}
                                onChange={() => setSelectedCategoryChart(chartKey)}
                            />
                            {chartsCategories[chartKey].title}
                        </label>
                    ))}
                    <h2>{chartsCategories[selectedCategoryChart]?.title}</h2>
                    {chartsCategories[selectedCategoryChart]?.component}
                </div>
                <div className="col-4">
                    <NumberOfProductsByCategoryChart />
                </div>
                <ProductPredictionForm />
            </div>
        </div>
    );
};

export default ProductsSection;
