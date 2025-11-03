import { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Activity, TrendingUp, TrendingDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function EngagementMetrics() {
  const [engagementMetric, setEngagementMetric] = useState('dau');

  const engagementMetrics = {
    dau: {
      name: 'Daily Active Users (DAU)',
      data: [
        { date: 'Jan 1', value: 245 },
        { date: 'Jan 8', value: 258 },
        { date: 'Jan 15', value: 273 },
        { date: 'Jan 22', value: 281 },
        { date: 'Jan 29', value: 296 },
        { date: 'Feb 5', value: 312 },
        { date: 'Feb 12', value: 328 },
        { date: 'Feb 19', value: 341 },
      ],
      unit: 'users',
      current: 341,
      change: '+39%',
      isPercentage: false
    },
    wau: {
      name: 'Weekly Active Users (WAU)',
      data: [
        { date: 'Week 1', value: 512 },
        { date: 'Week 2', value: 534 },
        { date: 'Week 3', value: 558 },
        { date: 'Week 4', value: 571 },
        { date: 'Week 5', value: 593 },
        { date: 'Week 6', value: 618 },
        { date: 'Week 7', value: 641 },
        { date: 'Week 8', value: 668 },
      ],
      unit: 'users',
      current: 668,
      change: '+30%',
      isPercentage: false
    },
    stickiness: {
      name: 'Stickiness (DAU/MAU)',
      data: [
        { date: 'Week 1', value: 42 },
        { date: 'Week 2', value: 45 },
        { date: 'Week 3', value: 48 },
        { date: 'Week 4', value: 46 },
        { date: 'Week 5', value: 51 },
        { date: 'Week 6', value: 53 },
        { date: 'Week 7', value: 56 },
        { date: 'Week 8', value: 58 },
      ],
      unit: '%',
      current: 58,
      change: '+16%',
      isPercentage: true
    },
    sessionDuration: {
      name: 'Avg. Session Duration',
      data: [
        { date: 'Week 1', value: 12.4 },
        { date: 'Week 2', value: 13.1 },
        { date: 'Week 3', value: 14.2 },
        { date: 'Week 4', value: 13.8 },
        { date: 'Week 5', value: 15.3 },
        { date: 'Week 6', value: 16.1 },
        { date: 'Week 7', value: 16.8 },
        { date: 'Week 8', value: 17.5 },
      ],
      unit: 'min',
      current: 17.5,
      change: '+41%',
      isPercentage: false
    },
    contentCompletion: {
      name: 'Content Completion Rate',
      data: [
        { date: 'Week 1', value: 68 },
        { date: 'Week 2', value: 71 },
        { date: 'Week 3', value: 74 },
        { date: 'Week 4', value: 73 },
        { date: 'Week 5', value: 77 },
        { date: 'Week 6', value: 79 },
        { date: 'Week 7', value: 82 },
        { date: 'Week 8', value: 85 },
      ],
      unit: '%',
      current: 85,
      change: '+25%',
      isPercentage: true
    },
    retention7day: {
      name: '7-Day Retention Rate',
      data: [
        { date: 'Week 1', value: 76 },
        { date: 'Week 2', value: 78 },
        { date: 'Week 3', value: 81 },
        { date: 'Week 4', value: 79 },
        { date: 'Week 5', value: 83 },
        { date: 'Week 6', value: 85 },
        { date: 'Week 7', value: 87 },
        { date: 'Week 8', value: 89 },
      ],
      unit: '%',
      current: 89,
      change: '+17%',
      isPercentage: true
    },
    featureAdoption: {
      name: 'Feature Adoption Rate',
      data: [
        { date: 'Week 1', value: 54 },
        { date: 'Week 2', value: 58 },
        { date: 'Week 3', value: 62 },
        { date: 'Week 4', value: 61 },
        { date: 'Week 5', value: 66 },
        { date: 'Week 6', value: 69 },
        { date: 'Week 7', value: 73 },
        { date: 'Week 8', value: 76 },
      ],
      unit: '%',
      current: 76,
      change: '+41%',
      isPercentage: true
    },
    churnRate: {
      name: 'Monthly Churn Rate',
      data: [
        { date: 'Jan', value: 5.2 },
        { date: 'Feb', value: 4.8 },
        { date: 'Mar', value: 4.3 },
        { date: 'Apr', value: 4.1 },
        { date: 'May', value: 3.6 },
        { date: 'Jun', value: 3.2 },
        { date: 'Jul', value: 2.9 },
        { date: 'Aug', value: 2.5 },
      ],
      unit: '%',
      current: 2.5,
      change: '-52%',
      isPercentage: true
    }
  };

  const selectedMetric = engagementMetrics[engagementMetric as keyof typeof engagementMetrics];

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Header */}
      <div className="bg-white border-b border-[rgba(0,0,0,0.1)] px-8 py-6">
        <h1 className="font-['Inter',_sans-serif] font-semibold text-[22px] text-[#221b28] mb-2">Engagement Metrics</h1>
        <p className="font-['Inter',_sans-serif] text-[rgba(34,20,46,0.62)]">Track user activity, retention, and platform adoption</p>
      </div>

      <div className="p-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[rgba(94,9,169,0.1)] flex items-center justify-center">
                <Activity className="w-5 h-5 text-[#5e09a9]" />
              </div>
              <div>
                <h2 className="font-['Inter',_sans-serif] font-semibold text-[#221b28] text-[18px]">Patient Engagement Metrics</h2>
                <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mt-0.5">
                  Track user activity, retention, and platform adoption
                </p>
              </div>
            </div>
            <div className="w-64">
              <Select value={engagementMetric} onValueChange={setEngagementMetric}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dau">Daily Active Users</SelectItem>
                  <SelectItem value="wau">Weekly Active Users</SelectItem>
                  <SelectItem value="stickiness">Stickiness (DAU/MAU)</SelectItem>
                  <SelectItem value="sessionDuration">Session Duration</SelectItem>
                  <SelectItem value="contentCompletion">Content Completion</SelectItem>
                  <SelectItem value="retention7day">7-Day Retention</SelectItem>
                  <SelectItem value="featureAdoption">Feature Adoption</SelectItem>
                  <SelectItem value="churnRate">Churn Rate</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-[#f8f8fa] rounded-lg p-4">
              <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mb-1">Current Value</p>
              <div className="flex items-center gap-2">
                <span className="font-['Inter',_sans-serif] text-[28px] text-[#221b28]">
                  {selectedMetric.current}{selectedMetric.unit}
                </span>
                <div className={`font-['Inter',_sans-serif] flex items-center text-[13px] ${
                  engagementMetric === 'churnRate' 
                    ? selectedMetric.change.startsWith('-') ? 'text-green-600' : 'text-red-600'
                    : selectedMetric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {engagementMetric === 'churnRate' 
                    ? selectedMetric.change.startsWith('-') ? <TrendingDown className="w-4 h-4 mr-1" /> : <TrendingUp className="w-4 h-4 mr-1" />
                    : selectedMetric.change.startsWith('+') ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />
                  }
                  {selectedMetric.change}
                </div>
              </div>
            </div>

            <div className="bg-[#f8f8fa] rounded-lg p-4">
              <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mb-1">Metric Type</p>
              <div className="flex items-center gap-2">
                <span className="font-['Inter',_sans-serif] text-[14px] text-[#221b28]">{selectedMetric.name}</span>
              </div>
            </div>

            <div className="bg-[#f8f8fa] rounded-lg p-4">
              <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mb-1">Trend</p>
              <div className="flex items-center gap-2">
                <span className="font-['Inter',_sans-serif] text-[14px] text-[#221b28]">
                  {engagementMetric === 'churnRate' 
                    ? selectedMetric.change.startsWith('-') ? 'Improving' : 'Declining'
                    : selectedMetric.change.startsWith('+') ? 'Growing' : 'Declining'
                  }
                </span>
              </div>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={selectedMetric.data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis 
                dataKey="date" 
                stroke="#888"
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                stroke="#888"
                tick={{ fontSize: 12 }}
                label={{ 
                  value: selectedMetric.unit, 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { fontSize: 12, fill: '#888' }
                }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  padding: '8px 12px'
                }}
                formatter={(value: number) => [
                  `${value}${selectedMetric.unit}`,
                  selectedMetric.name
                ]}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#5e09a9" 
                strokeWidth={3}
                dot={{ fill: '#5e09a9', r: 5 }}
                activeDot={{ r: 7 }}
                name={selectedMetric.name}
              />
            </LineChart>
          </ResponsiveContainer>

          <div className="mt-6 pt-6 border-t border-[rgba(0,0,0,0.1)]">
            <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mb-3">Quick Stats Overview</p>
            <div className="grid grid-cols-4 gap-3">
              <div className="bg-[#f8f8fa] rounded-lg p-3">
                <p className="font-['Inter',_sans-serif] text-[11px] text-[rgba(34,20,46,0.62)] mb-1">DAU</p>
                <p className="font-['Inter',_sans-serif] text-[16px] text-[#221b28]">{engagementMetrics.dau.current}</p>
              </div>
              <div className="bg-[#f8f8fa] rounded-lg p-3">
                <p className="font-['Inter',_sans-serif] text-[11px] text-[rgba(34,20,46,0.62)] mb-1">Stickiness</p>
                <p className="font-['Inter',_sans-serif] text-[16px] text-[#221b28]">{engagementMetrics.stickiness.current}%</p>
              </div>
              <div className="bg-[#f8f8fa] rounded-lg p-3">
                <p className="font-['Inter',_sans-serif] text-[11px] text-[rgba(34,20,46,0.62)] mb-1">Retention</p>
                <p className="font-['Inter',_sans-serif] text-[16px] text-[#221b28]">{engagementMetrics.retention7day.current}%</p>
              </div>
              <div className="bg-[#f8f8fa] rounded-lg p-3">
                <p className="font-['Inter',_sans-serif] text-[11px] text-[rgba(34,20,46,0.62)] mb-1">Churn</p>
                <p className="font-['Inter',_sans-serif] text-[16px] text-[#221b28]">{engagementMetrics.churnRate.current}%</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
