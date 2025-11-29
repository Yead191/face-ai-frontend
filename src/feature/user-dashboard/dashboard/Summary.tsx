import { statsCards } from '@/constants/dashboard-data';
import React from 'react';

const Summary = () => {
    return (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {statsCards.map((card, i) => (
                        <div
                            key={i}
                            className="bg-black/40 border border-purple-500/40 rounded-3xl p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div
                                    className={`w-12 h-12 rounded-2xl bg-linear-to-br ${card.gradient} flex items-center justify-center`}
                                >
                                    <card.icon className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-2xl font-medium text-white">{card.number}</span>
                            </div>
                            <h3 className="text-white font-semibold mb-1">{card.title}</h3>
                            <p className="text-sm text-[#D8D8D8]">{card.subtitle}</p>
                        </div>
                    ))}
                </div>
    );
};

export default Summary;