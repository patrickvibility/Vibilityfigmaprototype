import { Card } from '../../components/ui/card';
import { TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function PatientOutcomes() {
  const outcomesData = [
    { month: 'Jan', avgImprovement: 65, patientsTracked: 45 },
    { month: 'Feb', avgImprovement: 68, patientsTracked: 52 },
    { month: 'Mar', avgImprovement: 72, patientsTracked: 58 },
    { month: 'Apr', avgImprovement: 75, patientsTracked: 61 },
    { month: 'May', avgImprovement: 78, patientsTracked: 67 },
    { month: 'Jun', avgImprovement: 82, patientsTracked: 72 },
  ];

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Header */}
      <div className="bg-white border-b border-[rgba(0,0,0,0.1)] px-8 py-6">
        <h1 className="font-['Inter',_sans-serif] font-semibold text-[22px] text-[#221b28] mb-2">Patient Outcomes</h1>
        <p className="font-['Inter',_sans-serif] text-[rgba(34,20,46,0.62)]">Track health improvements and treatment effectiveness</p>
      </div>

      <div className="p-8">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[rgba(94,9,169,0.1)] flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-[#5e09a9]" />
            </div>
            <div>
              <h2 className="font-['Inter',_sans-serif] font-semibold text-[#221b28] text-[18px]">Patient Outcomes</h2>
              <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mt-0.5">
                Track health improvements and treatment effectiveness
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-[#f8f8fa] rounded-lg p-4">
              <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mb-1">Average Improvement</p>
              <div className="flex items-center gap-2">
                <span className="font-['Inter',_sans-serif] text-[28px] text-[#221b28]">82%</span>
                <div className="font-['Inter',_sans-serif] flex items-center text-green-600 text-[13px]">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +12%
                </div>
              </div>
            </div>

            <div className="bg-[#f8f8fa] rounded-lg p-4">
              <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mb-1">Patients Tracked</p>
              <div className="flex items-center gap-2">
                <span className="font-['Inter',_sans-serif] text-[28px] text-[#221b28]">72</span>
                <div className="font-['Inter',_sans-serif] flex items-center text-green-600 text-[13px]">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +8
                </div>
              </div>
            </div>

            <div className="bg-[#f8f8fa] rounded-lg p-4">
              <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mb-1">Goal Achievement</p>
              <div className="flex items-center gap-2">
                <span className="font-['Inter',_sans-serif] text-[28px] text-[#221b28]">78%</span>
                <div className="font-['Inter',_sans-serif] flex items-center text-green-600 text-[13px]">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +5%
                </div>
              </div>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={outcomesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="avgImprovement" stroke="#5e09a9" strokeWidth={2} name="Avg Improvement %" />
              <Line type="monotone" dataKey="patientsTracked" stroke="#8b4ec9" strokeWidth={2} name="Patients Tracked" />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}
