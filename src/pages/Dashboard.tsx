import { useState } from 'react';
import {
  Users,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  Smile,
  ThumbsUp,
  Calendar,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import { Card } from '../components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Mock data for metrics over time
const activeMembersData = [
  { month: 'Apr', count: 42 },
  { month: 'May', count: 48 },
  { month: 'Jun', count: 52 },
  { month: 'Jul', count: 58 },
  { month: 'Aug', count: 64 },
  { month: 'Sep', count: 67 },
  { month: 'Oct', count: 72 },
];

const satisfactionData = [
  { month: 'Apr', score: 4.2 },
  { month: 'May', score: 4.3 },
  { month: 'Jun', score: 4.5 },
  { month: 'Jul', score: 4.4 },
  { month: 'Aug', score: 4.6 },
  { month: 'Sep', score: 4.7 },
  { month: 'Oct', score: 4.8 },
];

const npsData = [
  { month: 'Apr', score: 45 },
  { month: 'May', score: 52 },
  { month: 'Jun', score: 58 },
  { month: 'Jul', score: 61 },
  { month: 'Aug', score: 65 },
  { month: 'Sep', score: 68 },
  { month: 'Oct', score: 72 },
];

// Mock member data
const members = [
  {
    id: 1,
    name: 'Sarah Johnson',
    program: 'Functional Medicine Foundation',
    lastModule: 'Gut Health Basics',
    percentComplete: 68,
    coachingVisit: { status: 'attended', date: 'Oct 5, 2025' },
    sentiment: 4.8,
  },
  {
    id: 2,
    name: 'Michael Chen',
    program: 'Hormone Balance Program',
    lastModule: 'Thyroid Function',
    percentComplete: 45,
    coachingVisit: { status: 'attended', date: 'Oct 7, 2025' },
    sentiment: 4.5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    program: 'Metabolic Reset',
    lastModule: 'Insulin Sensitivity',
    percentComplete: 82,
    coachingVisit: { status: 'attended', date: 'Oct 8, 2025' },
    sentiment: 4.9,
  },
  {
    id: 4,
    name: 'James Wilson',
    program: 'Gut Health Intensive',
    lastModule: 'Microbiome Analysis',
    percentComplete: 34,
    coachingVisit: { status: 'missed', date: 'Oct 3, 2025' },
    sentiment: 3.8,
  },
  {
    id: 5,
    name: 'Lisa Martinez',
    program: 'Autoimmune Protocol',
    lastModule: 'Food Sensitivities',
    percentComplete: 91,
    coachingVisit: { status: 'attended', date: 'Oct 9, 2025' },
    sentiment: 5.0,
  },
  {
    id: 6,
    name: 'David Thompson',
    program: 'Detox & Cleanse',
    lastModule: 'Liver Support',
    percentComplete: 56,
    coachingVisit: { status: 'attended', date: 'Oct 6, 2025' },
    sentiment: 4.2,
  },
  {
    id: 7,
    name: 'Amanda Foster',
    program: 'Functional Medicine Foundation',
    lastModule: 'Stress Management',
    percentComplete: 23,
    coachingVisit: { status: 'missed', date: 'Oct 2, 2025' },
    sentiment: 3.5,
  },
  {
    id: 8,
    name: 'Ryan Patterson',
    program: 'Hormone Balance Program',
    lastModule: 'Adrenal Health',
    percentComplete: 72,
    coachingVisit: { status: 'attended', date: 'Oct 8, 2025' },
    sentiment: 4.7,
  },
  {
    id: 9,
    name: 'Jennifer Lee',
    program: 'Metabolic Reset',
    lastModule: 'Mitochondrial Health',
    percentComplete: 15,
    coachingVisit: { status: 'missed', date: 'Oct 1, 2025' },
    sentiment: 3.2,
  },
  {
    id: 10,
    name: 'Christopher Davis',
    program: 'Gut Health Intensive',
    lastModule: 'Probiotic Protocol',
    percentComplete: 88,
    coachingVisit: { status: 'attended', date: 'Oct 9, 2025' },
    sentiment: 4.9,
  },
];

interface DashboardProps {
  onUserClick: (userId: number) => void;
}

export function Dashboard({ onUserClick }: DashboardProps) {
  const activeMembers = 72;
  const membersBehind = members.filter((m) => m.percentComplete < 40).length;
  const avgSatisfaction = 4.8;
  const npsScore = 72;

  const getSentimentColor = (score: number) => {
    if (score >= 4.5) return 'text-green-600';
    if (score >= 3.5) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getSentimentBadge = (score: number) => {
    if (score >= 4.5) return 'bg-green-100 text-green-700';
    if (score >= 3.5) return 'bg-yellow-100 text-yellow-700';
    return 'bg-red-100 text-red-700';
  };

  return (
    <div className="flex-1 bg-[#f8f8fa] overflow-auto">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="font-['Inter',_sans-serif] font-semibold text-[22px] text-[#221b28] tracking-[-0.84px] mb-2">
            Practice Dashboard
          </h1>
          <p className="text-[15px] text-[rgba(34,20,46,0.62)]">
            Monitor your practice performance and member progress
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {/* Active Members Card */}
          <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mb-1">
                  Active Members
                </p>
                <p className="font-['Inter',_sans-serif] text-[#221b28] tracking-[-0.84px]">
                  {activeMembers}
                </p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-[rgba(94,9,169,0.1)] flex items-center justify-center">
                <Users className="w-5 h-5 text-[#5e09a9]" />
              </div>
            </div>
            <div className="h-[80px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={activeMembersData}>
                  <defs>
                    <linearGradient id="colorMembers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#5e09a9" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#5e09a9" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="count"
                    stroke="#5e09a9"
                    strokeWidth={2}
                    fill="url(#colorMembers)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="font-['Inter',_sans-serif] text-[13px] text-green-600">+12% this month</span>
            </div>
          </Card>

          {/* Members Behind Card */}
          <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mb-1">
                  Members Behind
                </p>
                <p className="font-['Inter',_sans-serif] text-[#221b28] tracking-[-0.84px]">
                  {membersBehind}
                </p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-[rgba(239,68,68,0.1)] flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-red-500" />
              </div>
            </div>
            <div className="h-[80px] flex items-center justify-center">
              <div className="text-center">
                <div className="text-[32px] font-['Inter',_sans-serif] text-[rgba(34,20,46,0.3)]">
                  {Math.round((membersBehind / activeMembers) * 100)}%
                </div>
                <p className="font-['Inter',_sans-serif] text-[11px] text-[rgba(34,20,46,0.62)]">of total members</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <TrendingDown className="w-4 h-4 text-green-600" />
              <span className="font-['Inter',_sans-serif] text-[13px] text-green-600">-8% vs last month</span>
            </div>
          </Card>

          {/* Member Satisfaction Card */}
          <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mb-1">
                  Member Satisfaction
                </p>
                <p className="font-['Inter',_sans-serif] text-[#221b28] tracking-[-0.84px]">
                  {avgSatisfaction}/5.0
                </p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-[rgba(34,197,94,0.1)] flex items-center justify-center">
                <Smile className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="h-[80px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={satisfactionData}>
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#10b981"
                    strokeWidth={2}
                    dot={{ fill: '#10b981', r: 3 }}
                  />
                  <YAxis domain={[0, 5]} hide />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="font-['Inter',_sans-serif] text-[13px] text-green-600">+0.3 from last month</span>
            </div>
          </Card>

          {/* NPS Score Card */}
          <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mb-1">
                  NPS Score
                </p>
                <p className="font-['Inter',_sans-serif] text-[#221b28] tracking-[-0.84px]">
                  {npsScore}
                </p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-[rgba(59,130,246,0.1)] flex items-center justify-center">
                <ThumbsUp className="w-5 h-5 text-blue-500" />
              </div>
            </div>
            <div className="h-[80px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={npsData}>
                  <Bar dataKey="score" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <YAxis domain={[0, 100]} hide />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="font-['Inter',_sans-serif] text-[13px] text-green-600">+7 points this month</span>
            </div>
          </Card>
        </div>

        {/* Patient Health Overview */}
        <div className="mb-8">
          <div className="mb-4">
            <h2 className="font-['Inter',_sans-serif] font-medium text-[#221b28] mb-1">
              Patient Health Overview
            </h2>
            <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)]">
              Key health metrics across your patient population
            </p>
          </div>
          <div className="grid grid-cols-5 gap-6">
            {/* Average Weight Loss Card */}
            <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
              <div className="text-center">
                <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mb-2">
                  Avg Weight Loss
                </p>
                <p className="font-['Inter',_sans-serif] text-[32px] text-[#221b28] tracking-[-1px] mb-1">
                  14.2<span className="text-[20px]">lbs</span>
                </p>
                <div className="flex items-center justify-center gap-1 text-green-600">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span className="font-['Inter',_sans-serif] text-[12px]">+2.3 lbs vs last month</span>
                </div>
              </div>
            </Card>

            {/* MSQ Improvement Card */}
            <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
              <div className="text-center">
                <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mb-2">
                  MSQ Improvement
                </p>
                <p className="font-['Inter',_sans-serif] text-[32px] text-[#221b28] tracking-[-1px] mb-1">
                  -42<span className="text-[20px]">pts</span>
                </p>
                <div className="flex items-center justify-center gap-1 text-green-600">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span className="font-['Inter',_sans-serif] text-[12px]">-8 points improvement</span>
                </div>
              </div>
            </Card>

            {/* HbA1c Reduction Card */}
            <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
              <div className="text-center">
                <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mb-2">
                  Avg HbA1c Change
                </p>
                <p className="font-['Inter',_sans-serif] text-[32px] text-[#221b28] tracking-[-1px] mb-1">
                  -0.8<span className="text-[20px]">%</span>
                </p>
                <div className="flex items-center justify-center gap-1 text-green-600">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span className="font-['Inter',_sans-serif] text-[12px]">Excellent reduction</span>
                </div>
              </div>
            </Card>

            {/* Blood Pressure Card */}
            <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
              <div className="text-center">
                <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mb-2">
                  Avg BP Reduction
                </p>
                <p className="font-['Inter',_sans-serif] text-[32px] text-[#221b28] tracking-[-1px] mb-1">
                  -12<span className="text-[20px]">/8</span>
                </p>
                <div className="flex items-center justify-center gap-1 text-green-600">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span className="font-['Inter',_sans-serif] text-[12px]">mmHg improvement</span>
                </div>
              </div>
            </Card>

            {/* Energy Score Card */}
            <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
              <div className="text-center">
                <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mb-2">
                  Energy Score
                </p>
                <p className="font-['Inter',_sans-serif] text-[32px] text-[#221b28] tracking-[-1px] mb-1">
                  7.8<span className="text-[20px]">/10</span>
                </p>
                <div className="flex items-center justify-center gap-1 text-green-600">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span className="font-['Inter',_sans-serif] text-[12px]">+1.2 point increase</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Active Members Table */}
        <Card className="border border-[rgba(0,0,0,0.1)]">
          <div className="p-6 border-b border-[rgba(0,0,0,0.1)]">
            <h2 className="font-['Inter',_sans-serif] font-medium text-[#221b28]">
              Active Members
            </h2>
            <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mt-1">
              Track member progress and engagement
            </p>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-[rgba(0,0,0,0.1)]">
                  <TableHead className="font-['Inter',_sans-serif] text-[#221b28]">Member Name</TableHead>
                  <TableHead className="font-['Inter',_sans-serif] text-[#221b28]">Program</TableHead>
                  <TableHead className="font-['Inter',_sans-serif] text-[#221b28]">Last Module</TableHead>
                  <TableHead className="font-['Inter',_sans-serif] text-[#221b28]">Progress</TableHead>
                  <TableHead className="font-['Inter',_sans-serif] text-[#221b28]">Coaching Visit</TableHead>
                  <TableHead className="font-['Inter',_sans-serif] text-[#221b28] text-right">Sentiment</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {members.map((member) => (
                  <TableRow
                    key={member.id}
                    onClick={() => onUserClick(member.id)}
                    className="border-b border-[rgba(0,0,0,0.05)] hover:bg-[rgba(94,9,169,0.02)] cursor-pointer"
                  >
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[rgba(94,9,169,0.1)] flex items-center justify-center">
                          <span className="font-['Inter',_sans-serif] text-[13px] font-medium text-[#5e09a9]">
                            {member.name.split(' ').map((n) => n[0]).join('')}
                          </span>
                        </div>
                        <span className="font-['Inter',_sans-serif] font-medium text-[#221b28]">{member.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="font-['Inter',_sans-serif] text-[14px] text-[rgba(34,20,46,0.8)]">
                        {member.program}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="font-['Inter',_sans-serif] text-[14px] text-[rgba(34,20,46,0.8)]">
                        {member.lastModule}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3 min-w-[150px]">
                        <Progress
                          value={member.percentComplete}
                          className="h-2 flex-1"
                        />
                        <span className="font-['Inter',_sans-serif] text-[13px] font-medium text-[rgba(34,20,46,0.8)] min-w-[40px] text-right">
                          {member.percentComplete}%
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {member.coachingVisit.status === 'attended' ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            <span className="font-['Inter',_sans-serif] text-[13px] text-green-600">
                              {member.coachingVisit.date}
                            </span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-4 h-4 text-red-500" />
                            <span className="font-['Inter',_sans-serif] text-[13px] text-red-500">
                              {member.coachingVisit.date}
                            </span>
                          </>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge
                        variant="secondary"
                        className={`${getSentimentBadge(member.sentiment)} border-0`}
                      >
                        {member.sentiment.toFixed(1)}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </div>
  );
}
