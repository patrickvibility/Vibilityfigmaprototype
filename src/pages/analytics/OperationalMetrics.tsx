import { Card } from '../../components/ui/card';
import { BarChart3, Calendar, Package, MessageSquare, Users, TrendingUp } from 'lucide-react';

export function OperationalMetrics() {
  return (
    <div className="flex-1 overflow-y-auto">
      {/* Header */}
      <div className="bg-white border-b border-[rgba(0,0,0,0.1)] px-8 py-6">
        <h1 className="font-['Inter',_sans-serif] font-semibold text-[22px] text-[#221b28] mb-2">Operational Metrics</h1>
        <p className="font-['Inter',_sans-serif] text-[rgba(34,20,46,0.62)]">Track visits, supplement orders, coaching sessions, and more</p>
      </div>

      <div className="p-8">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[rgba(94,9,169,0.1)] flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-[#5e09a9]" />
            </div>
            <div>
              <h2 className="font-['Inter',_sans-serif] font-semibold text-[#221b28] text-[18px]">Operational Metrics</h2>
              <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mt-0.5">
                Track visits, supplement orders, coaching sessions, and more
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="bg-[#f8f8fa] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-5 h-5 text-[#5e09a9]" />
                <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)]">Total Visits</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-['Inter',_sans-serif] text-[28px] text-[#221b28]">160</span>
                <div className="font-['Inter',_sans-serif] flex items-center text-green-600 text-[13px]">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +18
                </div>
              </div>
              <p className="font-['Inter',_sans-serif] text-[11px] text-[rgba(34,20,46,0.62)] mt-1">This month</p>
            </div>

            <div className="bg-[#f8f8fa] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Package className="w-5 h-5 text-[#5e09a9]" />
                <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)]">Supplement Orders</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-['Inter',_sans-serif] text-[28px] text-[#221b28]">124</span>
                <div className="font-['Inter',_sans-serif] flex items-center text-green-600 text-[13px]">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +22
                </div>
              </div>
              <p className="font-['Inter',_sans-serif] text-[11px] text-[rgba(34,20,46,0.62)] mt-1">This month</p>
            </div>

            <div className="bg-[#f8f8fa] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare className="w-5 h-5 text-[#5e09a9]" />
                <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)]">Coaching Sessions</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-['Inter',_sans-serif] text-[28px] text-[#221b28]">87</span>
                <div className="font-['Inter',_sans-serif] flex items-center text-green-600 text-[13px]">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +12
                </div>
              </div>
              <p className="font-['Inter',_sans-serif] text-[11px] text-[rgba(34,20,46,0.62)] mt-1">This month</p>
            </div>

            <div className="bg-[#f8f8fa] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-[#5e09a9]" />
                <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)]">Utilization Rate</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-['Inter',_sans-serif] text-[28px] text-[#221b28]">86%</span>
                <div className="font-['Inter',_sans-serif] flex items-center text-green-600 text-[13px]">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +3%
                </div>
              </div>
              <p className="font-['Inter',_sans-serif] text-[11px] text-[rgba(34,20,46,0.62)] mt-1">Overall</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
