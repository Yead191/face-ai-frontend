import pricingPlans from '@/constants/home/pricingPlan';
import PlanCard from '@/feature/home/sections/pricing/PlanCard';
import React from 'react';

const Subscription = () => {
    return (
        <div>
            <div className='w-[90%] bg-[#0C0C0D] rounded-[30px] drop-shadow-[#9333EA4D] p-10'>
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="section-title">Choose Your Plan</h2>
                        <p className="section-subtitle">
                            Select the package that matches your goals
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                        {pricingPlans?.map((plan, index) => (
                            <PlanCard key={index} plan={plan} index={index} />
                        ))}
                    </div>  
            </div>
        </div>
    );
};

export default Subscription;