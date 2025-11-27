import pricingPlans from '@/constants/home/pricingPlan';
import PlanCard from '@/feature/main-layout/home/sections/pricing/PlanCard';
import React from 'react';

const Subscription = () => {
    return (
        <div className='w-full min-h-[80vh] flex justify-center items-center '>
            <div className='w-[90%] bg-[#0C0C0D] rounded-[30px]    shadow-[0_0_20px_10px_rgba(147,51,234,0.4)]  py-7 px-10'>
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl lg:text-4xl font-medium mb-2 text-[#FFFFFF]">Choose Your Plan</h2>
                        <p className="section-subtitle">
                            Select the package that matches your goals
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 ">
                        {pricingPlans?.map((plan, index) => (
                            <PlanCard key={index} plan={plan} index={index} />
                        ))}
                    </div>  
            </div>
        </div>
    );
};

export default Subscription;