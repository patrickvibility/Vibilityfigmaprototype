import { Card } from '../../components/ui/card';
import { Users } from 'lucide-react';

export function TeamAnalytics() {
  const workloadData = [
    { name: 'Dr. Sarah Chen', visits: 45, messages: 234, programs: 28, utilization: 92 },
    { name: 'Dr. Michael Torres', visits: 38, messages: 198, programs: 24, utilization: 85 },
    { name: 'Dr. Emily Rodriguez', visits: 42, messages: 256, programs: 31, utilization: 88 },
    { name: 'Dr. James Liu', visits: 35, messages: 176, programs: 22, utilization: 78 },
  ];

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Header */}
      <div className="bg-white border-b border-[rgba(0,0,0,0.1)] px-8 py-6">
        <h1 className="font-['Inter',_sans-serif] font-semibold text-[22px] text-[#221b28] mb-2">Team Analytics</h1>
        <p className="font-['Inter',_sans-serif] text-[rgba(34,20,46,0.62)]">Track capacity and balance across team members</p>
      </div>

      <div className="p-8">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[rgba(94,9,169,0.1)] flex items-center justify-center">
              <Users className="w-5 h-5 text-[#5e09a9]" />
            </div>
            <div>
              <h2 className="font-['Inter',_sans-serif] font-semibold text-[#221b28] text-[18px]">Practitioner Workload Distribution</h2>
              <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mt-0.5">
                Track capacity and balance across team members
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[rgba(0,0,0,0.1)]">
                  <th className="font-['Inter',_sans-serif] text-left py-3 px-4 text-[13px] text-[rgba(34,20,46,0.62)]">
                    Practitioner
                  </th>
                  <th className="font-['Inter',_sans-serif] text-right py-3 px-4 text-[13px] text-[rgba(34,20,46,0.62)]">
                    Visits
                  </th>
                  <th className="font-['Inter',_sans-serif] text-right py-3 px-4 text-[13px] text-[rgba(34,20,46,0.62)]">
                    Messages
                  </th>
                  <th className="font-['Inter',_sans-serif] text-right py-3 px-4 text-[13px] text-[rgba(34,20,46,0.62)]">
                    Active Programs
                  </th>
                  <th className="font-['Inter',_sans-serif] text-right py-3 px-4 text-[13px] text-[rgba(34,20,46,0.62)]">
                    Utilization
                  </th>
                </tr>
              </thead>
              <tbody>
                {workloadData.map((practitioner, index) => (
                  <tr key={index} className="border-b border-[rgba(0,0,0,0.05)]">
                    <td className="font-['Inter',_sans-serif] py-3 px-4 text-[14px] text-[#221b28]">
                      {practitioner.name}
                    </td>
                    <td className="font-['Inter',_sans-serif] py-3 px-4 text-right text-[14px] text-[#221b28]">
                      {practitioner.visits}
                    </td>
                    <td className="font-['Inter',_sans-serif] py-3 px-4 text-right text-[14px] text-[#221b28]">
                      {practitioner.messages}
                    </td>
                    <td className="font-['Inter',_sans-serif] py-3 px-4 text-right text-[14px] text-[#221b28]">
                      {practitioner.programs}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-24 h-2 bg-[#f0f0f0] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#5e09a9] rounded-full"
                            style={{ width: `${practitioner.utilization}%` }}
                          />
                        </div>
                        <span className="font-['Inter',_sans-serif] text-[14px] text-[#221b28] w-10 text-right">
                          {practitioner.utilization}%
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-[#f8f8fa] rounded-lg">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mb-1">Average Utilization</p>
                <p className="font-['Inter',_sans-serif] text-[20px] text-[#221b28]">86%</p>
              </div>
              <div>
                <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mb-1">Total Active Programs</p>
                <p className="font-['Inter',_sans-serif] text-[20px] text-[#221b28]">105</p>
              </div>
              <div>
                <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mb-1">Messages This Month</p>
                <p className="font-['Inter',_sans-serif] text-[20px] text-[#221b28]">864</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
