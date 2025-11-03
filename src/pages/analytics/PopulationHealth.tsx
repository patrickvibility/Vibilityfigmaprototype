import { Card } from '../../components/ui/card';
import { Activity, TrendingUp } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

export function PopulationHealth() {
  const conditionsData = [
    { name: 'Metabolic Syndrome', value: 28, improvement: 72 },
    { name: 'Chronic Fatigue', value: 24, improvement: 68 },
    { name: 'Autoimmune', value: 18, improvement: 65 },
    { name: 'Digestive Issues', value: 16, improvement: 78 },
    { name: 'Hormonal Imbalance', value: 14, improvement: 70 },
  ];

  const symptomData = [
    { symptom: 'Fatigue', beforeAvg: 7.2, afterAvg: 3.1, improvement: 57 },
    { symptom: 'Brain Fog', beforeAvg: 6.8, afterAvg: 2.8, improvement: 59 },
    { symptom: 'Digestive Issues', beforeAvg: 6.5, afterAvg: 2.4, improvement: 63 },
    { symptom: 'Joint Pain', beforeAvg: 7.0, afterAvg: 3.5, improvement: 50 },
    { symptom: 'Sleep Quality', beforeAvg: 6.9, afterAvg: 2.6, improvement: 62 },
    { symptom: 'Mood/Anxiety', beforeAvg: 6.3, afterAvg: 3.2, improvement: 49 },
  ];

  const COLORS = ['#5e09a9', '#8b4ec9', '#b47edd', '#d4abe8', '#e8d0f5'];

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Header */}
      <div className="bg-white border-b border-[rgba(0,0,0,0.1)] px-8 py-6">
        <h1 className="font-['Inter',_sans-serif] font-semibold text-[22px] text-[#221b28] mb-2">Population Health</h1>
        <p className="font-['Inter',_sans-serif] text-[rgba(34,20,46,0.62)]">Track top conditions and symptom improvements across your patient population</p>
      </div>

      <div className="p-8 space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[rgba(94,9,169,0.1)] flex items-center justify-center">
                <Activity className="w-5 h-5 text-[#5e09a9]" />
              </div>
              <div>
                <h2 className="font-['Inter',_sans-serif] font-semibold text-[#221b28] text-[18px]">Top Conditions</h2>
                <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mt-0.5">
                  Most common health conditions
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center mb-4">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={conditionsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {conditionsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-2 pt-4 border-t border-[rgba(0,0,0,0.1)]">
              {conditionsData.map((condition, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="font-['Inter',_sans-serif] text-[13px] text-[#221b28]">{condition.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)]">
                      {condition.improvement}% improvement
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[rgba(94,9,169,0.1)] flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#5e09a9]" />
              </div>
              <div>
                <h2 className="font-['Inter',_sans-serif] font-semibold text-[#221b28] text-[18px]">Symptom Improvements</h2>
                <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mt-0.5">
                  Before and after severity scores (0-10 scale)
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {symptomData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-['Inter',_sans-serif] text-[14px] text-[#221b28]">{item.symptom}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)]">
                        {item.beforeAvg} → {item.afterAvg}
                      </span>
                      <div className="font-['Inter',_sans-serif] flex items-center text-green-600 text-[13px] font-medium">
                        <TrendingUp className="w-3.5 h-3.5 mr-1" />
                        {item.improvement}%
                      </div>
                    </div>
                  </div>
                  <div className="relative h-2 bg-[#f0f0f0] rounded-full overflow-hidden">
                    <div
                      className="absolute h-full bg-[#5e09a9] rounded-full transition-all"
                      style={{ width: `${item.improvement}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-[rgba(0,0,0,0.1)]">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#f8f8fa] rounded-lg p-3">
                  <p className="font-['Inter',_sans-serif] text-[11px] text-[rgba(34,20,46,0.62)] mb-1">Average Before</p>
                  <p className="font-['Inter',_sans-serif] text-[20px] text-[#221b28]">
                    {(symptomData.reduce((acc, s) => acc + s.beforeAvg, 0) / symptomData.length).toFixed(1)}
                  </p>
                </div>
                <div className="bg-[#f8f8fa] rounded-lg p-3">
                  <p className="font-['Inter',_sans-serif] text-[11px] text-[rgba(34,20,46,0.62)] mb-1">Average After</p>
                  <p className="font-['Inter',_sans-serif] text-[20px] text-[#221b28]">
                    {(symptomData.reduce((acc, s) => acc + s.afterAvg, 0) / symptomData.length).toFixed(1)}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
