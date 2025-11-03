import { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Filter, Download, Plus } from 'lucide-react';

export function Reports() {
  const [reportPractitioner, setReportPractitioner] = useState('all');
  const [reportProgram, setReportProgram] = useState('all');
  const [reportMetric, setReportMetric] = useState('all');
  const [reportTimeframe, setReportTimeframe] = useState('30days');

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Header */}
      <div className="bg-white border-b border-[rgba(0,0,0,0.1)] px-8 py-6">
        <h1 className="font-['Inter',_sans-serif] font-semibold text-[22px] text-[#221b28] mb-2">Custom Reports</h1>
        <p className="font-['Inter',_sans-serif] text-[rgba(34,20,46,0.62)]">Build and export custom reports with advanced filtering</p>
      </div>

      <div className="p-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[rgba(94,9,169,0.1)] flex items-center justify-center">
                <Filter className="w-5 h-5 text-[#5e09a9]" />
              </div>
              <div>
                <h2 className="font-['Inter',_sans-serif] font-semibold text-[#221b28] text-[18px]">Custom Report Builder</h2>
                <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mt-0.5">
                  Build custom reports with advanced filtering
                </p>
              </div>
            </div>
            <Button className="bg-[#5e09a9] hover:bg-[#4a0888]">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <div>
              <label className="font-['Inter',_sans-serif] block text-[13px] text-[#221b28] mb-2 font-medium">
                Practitioner
              </label>
              <Select value={reportPractitioner} onValueChange={setReportPractitioner}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Practitioners</SelectItem>
                  <SelectItem value="chen">Dr. Sarah Chen</SelectItem>
                  <SelectItem value="torres">Dr. Michael Torres</SelectItem>
                  <SelectItem value="rodriguez">Dr. Emily Rodriguez</SelectItem>
                  <SelectItem value="liu">Dr. James Liu</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="font-['Inter',_sans-serif] block text-[13px] text-[#221b28] mb-2 font-medium">
                Program
              </label>
              <Select value={reportProgram} onValueChange={setReportProgram}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Programs</SelectItem>
                  <SelectItem value="metabolic">Metabolic Reset</SelectItem>
                  <SelectItem value="gut">Gut Health Protocol</SelectItem>
                  <SelectItem value="hormone">Hormone Balance</SelectItem>
                  <SelectItem value="autoimmune">Autoimmune Support</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="font-['Inter',_sans-serif] block text-[13px] text-[#221b28] mb-2 font-medium">
                Metric Type
              </label>
              <Select value={reportMetric} onValueChange={setReportMetric}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Metrics</SelectItem>
                  <SelectItem value="outcomes">Patient Outcomes</SelectItem>
                  <SelectItem value="engagement">Engagement</SelectItem>
                  <SelectItem value="operational">Operational</SelectItem>
                  <SelectItem value="population">Population Health</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="font-['Inter',_sans-serif] block text-[13px] text-[#221b28] mb-2 font-medium">
                Timeframe
              </label>
              <Select value={reportTimeframe} onValueChange={setReportTimeframe}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">Last 7 Days</SelectItem>
                  <SelectItem value="30days">Last 30 Days</SelectItem>
                  <SelectItem value="90days">Last 90 Days</SelectItem>
                  <SelectItem value="6months">Last 6 Months</SelectItem>
                  <SelectItem value="1year">Last Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="flex-1">
              <Plus className="w-4 h-4 mr-2" />
              Add Filter
            </Button>
            <Button className="flex-1 bg-[#5e09a9] hover:bg-[#4a0888]">
              Generate Report
            </Button>
          </div>
        </Card>

        {/* Recent Reports */}
        <Card className="p-6 mt-6">
          <h3 className="font-['Inter',_sans-serif] font-semibold text-[#221b28] text-[16px] mb-4">Recent Reports</h3>
          <div className="space-y-3">
            {[
              { name: 'Q2 Patient Outcomes - All Practitioners', date: '2025-10-10', type: 'Outcomes' },
              { name: 'Monthly Engagement Metrics - September', date: '2025-10-01', type: 'Engagement' },
              { name: 'Operational Summary - Last 30 Days', date: '2025-09-28', type: 'Operational' },
              { name: 'Population Health - Metabolic Program', date: '2025-09-25', type: 'Population' },
            ].map((report, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-[#f8f8fa] rounded-lg">
                <div>
                  <p className="font-['Inter',_sans-serif] text-[14px] text-[#221b28]">{report.name}</p>
                  <p className="font-['Inter',_sans-serif] text-[12px] text-[rgba(34,20,46,0.62)] mt-1">
                    Generated: {report.date} • Type: {report.type}
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
