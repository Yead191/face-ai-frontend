import React from 'react';

const MetricRow = ({ name, percentage, change }: {
  name: string;
  percentage: number;
  change: string;
}) => {
    return (
          <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-white text-sm font-normal">{name}</span>
        <span className="text-pink-400 text-xs font-medium">{change}</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1.5 bg-purple-950/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-purple-500 to-pink-500 rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="text-gray-200 text-xs w-8 text-right">{percentage}%</span>
      </div>
    </div>
    );
};

export default MetricRow;