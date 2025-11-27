import { TrendingUp, Calendar, Target, ScanLine } from 'lucide-react';
import MetricRow from './MetricRow';
import StatCard from './StatCard';
import { detailedMetrics } from '@/constants/progress-data';
import ScoreHistory from './ScoreHistory';

const Progress = () => {
  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-[87%] mx-auto space-y-4">
        <div className="grid grid-cols-4 gap-4">
          <StatCard
            icon={<TrendingUp className="w-5 h-5" />}
            value="+3.5"
            label="Total Improvement"
            sublabel="Since Sep 8"
            gradient="from-purple-500 to-pink-500"
          />
          <StatCard
            icon={<Calendar className="w-5 h-5" />}
            value="34"
            label="Days Active"
            sublabel="Since oct 8"
            gradient="from-purple-500 to-pink-500"
          />
          <StatCard
            icon={<Target className="w-5 h-5" />}
            value="6.5/9"
            label="Goal Score"
            sublabel="+3 this month"
            gradient="from-purple-500 to-pink-500"
          />
          <StatCard
            icon={<ScanLine className="w-5 h-5" />}
            value="1"
            label="Today Scan"
            sublabel="Today's insights"
            gradient="from-purple-500 to-pink-500"
          />
        </div>

        <div className="bg-black/40 backdrop-blur-sm  rounded-2xl p-6 border border-[#9810FA85]">
          <h2 className="text-white text-2xl font-medium mb-6">Score History</h2>
          <ScoreHistory />
        </div>

        <div className='grid grid-cols-2'>
          <div className="bg-black/40 backdrop-blur-sm  rounded-2xl p-6 border border-[#9810FA85] col-span-1">
            <h2 className="text-white text-2xl font-medium mb-6">Detailed Metrics</h2>
            <div className="space-y-6">
              {detailedMetrics.map((metric, index) => (
                <MetricRow key={index} {...metric} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Progress;