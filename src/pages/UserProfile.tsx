import {
  ArrowLeft,
  User,
  Calendar,
  Mail,
  Phone,
  Target,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Clock,
  Activity,
  FileText,
  MessageSquare,
  FlaskConical,
  DollarSign,
  Users,
  Video,
  ChevronDown,
  Plus,
  Pause,
  X,
  Edit,
  Pill,
  ExternalLink,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../components/ui/alert-dialog';
import { globalPrograms } from '../data/programs';
import { useState } from 'react';
import { Textarea } from '../components/ui/textarea';
import { Input } from '../components/ui/input';
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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';

interface UserProfileProps {
  userId: number;
  onBack: () => void;
}

// Mock user data - in a real app, this would be fetched based on userId
const getUserData = (userId: number) => {
  const users = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '(555) 123-4567',
      program: 'Functional Medicine Foundation',
      startDate: 'Aug 15, 2025',
      percentComplete: 68,
      lastModule: 'Gut Health Basics',
      sentiment: 4.8,
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.chen@email.com',
      phone: '(555) 234-5678',
      program: 'Hormone Balance Program',
      startDate: 'Sep 1, 2025',
      percentComplete: 45,
      lastModule: 'Thyroid Function',
      sentiment: 4.5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@email.com',
      phone: '(555) 345-6789',
      program: 'Metabolic Reset',
      startDate: 'Jul 20, 2025',
      percentComplete: 82,
      lastModule: 'Insulin Sensitivity',
      sentiment: 4.9,
    },
    {
      id: 4,
      name: 'James Wilson',
      email: 'james.wilson@email.com',
      phone: '(555) 456-7890',
      program: 'Gut Health Intensive',
      startDate: 'Sep 10, 2025',
      percentComplete: 34,
      lastModule: 'Microbiome Analysis',
      sentiment: 3.8,
    },
    {
      id: 5,
      name: 'Lisa Martinez',
      email: 'lisa.martinez@email.com',
      phone: '(555) 567-8901',
      program: 'Autoimmune Protocol',
      startDate: 'Jul 1, 2025',
      percentComplete: 91,
      lastModule: 'Food Sensitivities',
      sentiment: 5.0,
    },
    {
      id: 6,
      name: 'David Thompson',
      email: 'david.thompson@email.com',
      phone: '(555) 678-9012',
      program: 'Detox & Cleanse',
      startDate: 'Aug 25, 2025',
      percentComplete: 56,
      lastModule: 'Liver Support',
      sentiment: 4.2,
    },
    {
      id: 7,
      name: 'Amanda Foster',
      email: 'amanda.foster@email.com',
      phone: '(555) 789-0123',
      program: 'Functional Medicine Foundation',
      startDate: 'Sep 15, 2025',
      percentComplete: 23,
      lastModule: 'Stress Management',
      sentiment: 3.5,
    },
    {
      id: 8,
      name: 'Ryan Patterson',
      email: 'ryan.patterson@email.com',
      phone: '(555) 890-1234',
      program: 'Hormone Balance Program',
      startDate: 'Aug 5, 2025',
      percentComplete: 72,
      lastModule: 'Adrenal Health',
      sentiment: 4.7,
    },
    {
      id: 9,
      name: 'Jennifer Lee',
      email: 'jennifer.lee@email.com',
      phone: '(555) 901-2345',
      program: 'Metabolic Reset',
      startDate: 'Sep 20, 2025',
      percentComplete: 15,
      lastModule: 'Mitochondrial Health',
      sentiment: 3.2,
    },
    {
      id: 10,
      name: 'Christopher Davis',
      email: 'christopher.davis@email.com',
      phone: '(555) 012-3456',
      program: 'Gut Health Intensive',
      startDate: 'Jul 15, 2025',
      percentComplete: 88,
      lastModule: 'Probiotic Protocol',
      sentiment: 4.9,
    },
  ];

  return users.find((u) => u.id === userId) || users[0];
};

const progressData = [
  { week: 'Week 1', progress: 12 },
  { week: 'Week 2', progress: 24 },
  { week: 'Week 3', progress: 35 },
  { week: 'Week 4', progress: 42 },
  { week: 'Week 5', progress: 51 },
  { week: 'Week 6', progress: 58 },
  { week: 'Week 7', progress: 64 },
  { week: 'Week 8', progress: 68 },
];

const sentimentData = [
  { week: 'Week 1', score: 4.2 },
  { week: 'Week 2', score: 4.4 },
  { week: 'Week 3', score: 4.5 },
  { week: 'Week 4', score: 4.3 },
  { week: 'Week 5', score: 4.6 },
  { week: 'Week 6', score: 4.7 },
  { week: 'Week 7', score: 4.8 },
  { week: 'Week 8', score: 4.8 },
];

const healthMetrics = [
  { category: 'Energy', value: 85 },
  { category: 'Sleep', value: 78 },
  { category: 'Digestion', value: 72 },
  { category: 'Mood', value: 88 },
  { category: 'Pain Level', value: 65 },
  { category: 'Stress', value: 70 },
];

// Weight loss data over time
const weightData = [
  { week: 'Week 1', weight: 185, target: 175 },
  { week: 'Week 2', weight: 183, target: 175 },
  { week: 'Week 3', weight: 181, target: 175 },
  { week: 'Week 4', weight: 179, target: 175 },
  { week: 'Week 5', weight: 177, target: 175 },
  { week: 'Week 6', weight: 176, target: 175 },
  { week: 'Week 7', weight: 174, target: 175 },
  { week: 'Week 8', weight: 172, target: 175 },
];

// MSQ (Medical Symptoms Questionnaire) scores
const msqData = [
  { week: 'Week 1', score: 98 },
  { week: 'Week 2', score: 92 },
  { week: 'Week 3', score: 85 },
  { week: 'Week 4', score: 78 },
  { week: 'Week 5', score: 71 },
  { week: 'Week 6', score: 65 },
  { week: 'Week 7', score: 58 },
  { week: 'Week 8', score: 52 },
];

// PROMIS-29 scores (Patient-Reported Outcomes Measurement Information System)
const promis29Data = [
  { week: 'Week 1', score: 32 },
  { week: 'Week 2', score: 36 },
  { week: 'Week 3', score: 41 },
  { week: 'Week 4', score: 45 },
  { week: 'Week 5', score: 50 },
  { week: 'Week 6', score: 54 },
  { week: 'Week 7', score: 58 },
  { week: 'Week 8', score: 62 },
];

// HbA1c data
const hba1cData = [
  { month: 'Baseline', value: 6.8 },
  { month: 'Week 4', value: 6.5 },
  { month: 'Week 8', value: 6.2 },
];

// Blood pressure data
const bloodPressureData = [
  { week: 'Week 1', systolic: 142, diastolic: 88 },
  { week: 'Week 2', systolic: 138, diastolic: 86 },
  { week: 'Week 3', systolic: 136, diastolic: 84 },
  { week: 'Week 4', systolic: 134, diastolic: 83 },
  { week: 'Week 5', systolic: 132, diastolic: 82 },
  { week: 'Week 6', systolic: 130, diastolic: 81 },
  { week: 'Week 7', systolic: 128, diastolic: 80 },
  { week: 'Week 8', systolic: 126, diastolic: 80 },
];

// Energy levels over time
const energyData = [
  { week: 'Week 1', score: 4.2 },
  { week: 'Week 2', score: 5.1 },
  { week: 'Week 3', score: 5.8 },
  { week: 'Week 4', score: 6.5 },
  { week: 'Week 5', score: 7.2 },
  { week: 'Week 6', score: 7.6 },
  { week: 'Week 7', score: 8.1 },
  { week: 'Week 8', score: 8.4 },
];

// Detailed health tracking
const detailedHealthData = [
  { week: 'Week 1', energy: 42, sleep: 58, digestion: 45, mood: 65, pain: 35, stress: 40 },
  { week: 'Week 2', energy: 50, sleep: 62, digestion: 52, mood: 70, pain: 40, stress: 45 },
  { week: 'Week 3', energy: 58, sleep: 68, digestion: 60, mood: 75, pain: 50, stress: 52 },
  { week: 'Week 4', energy: 65, sleep: 72, digestion: 65, mood: 78, pain: 55, stress: 58 },
  { week: 'Week 5', energy: 72, sleep: 75, digestion: 68, mood: 82, pain: 60, stress: 62 },
  { week: 'Week 6', energy: 78, sleep: 78, digestion: 70, mood: 85, pain: 62, stress: 65 },
  { week: 'Week 7', energy: 82, sleep: 78, digestion: 72, mood: 88, pain: 65, stress: 68 },
  { week: 'Week 8', energy: 85, sleep: 78, digestion: 72, mood: 88, pain: 65, stress: 70 },
];

const coachingVisits = [
  { date: 'Oct 5, 2025', type: '1:1 Coaching', status: 'attended', notes: 'Great progress on diet compliance' },
  { date: 'Sep 28, 2025', type: '1:1 Coaching', status: 'attended', notes: 'Discussed supplement protocol adjustments' },
  { date: 'Sep 21, 2025', type: 'Group Session', status: 'attended', notes: 'Participated in stress management workshop' },
  { date: 'Sep 14, 2025', type: '1:1 Coaching', status: 'attended', notes: 'Reviewed lab results and next steps' },
  { date: 'Sep 7, 2025', type: '1:1 Coaching', status: 'missed', notes: 'Rescheduled to next week' },
];

// Active supplements
const activeSupplements = [
  { 
    id: 'sup-1',
    name: 'Probiotic Complex',
    dosage: '1 capsule daily',
    instructions: 'Take on empty stomach in the morning',
    startDate: 'Aug 15, 2025',
    protocolId: 'gut-health-foundation',
    protocolName: 'Gut Health Foundation Protocol',
  },
  { 
    id: 'sup-2',
    name: 'Omega-3 EPA/DHA',
    dosage: '2 softgels daily',
    instructions: 'Take with meals',
    startDate: 'Aug 15, 2025',
    protocolId: 'anti-inflammatory',
    protocolName: 'Anti-Inflammatory Protocol',
  },
  { 
    id: 'sup-3',
    name: 'Vitamin D3 + K2',
    dosage: '5000 IU daily',
    instructions: 'Take with breakfast',
    startDate: 'Aug 20, 2025',
    protocolId: null,
    protocolName: null,
  },
  { 
    id: 'sup-4',
    name: 'Magnesium Glycinate',
    dosage: '400mg before bed',
    instructions: 'Take 30 minutes before sleep',
    startDate: 'Aug 22, 2025',
    protocolId: 'sleep-support',
    protocolName: 'Sleep Support Protocol',
  },
];

// All visits - coaching calls, lab reviews, and practitioner visits
const allVisits = [
  { 
    id: 'visit-future-1',
    date: 'Nov 12, 2025',
    time: '10:00 AM',
    type: 'Practitioner Visit',
    provider: 'Dr. Smith',
    category: 'practitioner',
    status: 'scheduled',
  },
  { 
    id: 'visit-future-2',
    date: 'Nov 5, 2025',
    time: '2:00 PM',
    type: '1:1 Coaching',
    provider: 'Jane Miller',
    category: 'coaching',
    status: 'scheduled',
  },
  { 
    id: 'visit-future-3',
    date: 'Oct 29, 2025',
    time: '2:00 PM',
    type: '1:1 Coaching',
    provider: 'Jane Miller',
    category: 'coaching',
    status: 'scheduled',
  },
  { 
    id: 'visit-past-1',
    date: 'Oct 22, 2025',
    time: null,
    type: 'Lab Review',
    provider: 'Dr. Smith',
    category: 'lab',
    status: 'completed',
  },
  { 
    id: 'visit-past-2',
    date: 'Oct 8, 2025',
    time: '2:00 PM',
    type: '1:1 Coaching',
    provider: 'Jane Miller',
    category: 'coaching',
    status: 'completed',
  },
  { 
    id: 'visit-past-3',
    date: 'Oct 1, 2025',
    time: '2:00 PM',
    type: '1:1 Coaching',
    provider: 'Jane Miller',
    category: 'coaching',
    status: 'completed',
  },
  { 
    id: 'visit-past-4',
    date: 'Sep 24, 2025',
    time: '2:00 PM',
    type: '1:1 Coaching',
    provider: 'Jane Miller',
    category: 'coaching',
    status: 'completed',
  },
  { 
    id: 'visit-past-5',
    date: 'Sep 17, 2025',
    time: '2:00 PM',
    type: 'Group Session',
    provider: 'Jane Miller',
    category: 'coaching',
    status: 'completed',
  },
  { 
    id: 'visit-past-6',
    date: 'Sep 15, 2025',
    time: '10:30 AM',
    type: 'Follow-up Visit',
    provider: 'Dr. Smith',
    category: 'practitioner',
    status: 'completed',
  },
  { 
    id: 'visit-past-7',
    date: 'Sep 10, 2025',
    time: '2:00 PM',
    type: '1:1 Coaching',
    provider: 'Jane Miller',
    category: 'coaching',
    status: 'missed',
  },
  { 
    id: 'visit-past-8',
    date: 'Sep 3, 2025',
    time: '2:00 PM',
    type: '1:1 Coaching',
    provider: 'Jane Miller',
    category: 'coaching',
    status: 'completed',
  },
  { 
    id: 'visit-past-9',
    date: 'Aug 20, 2025',
    time: null,
    type: 'Lab Review',
    provider: 'Dr. Smith',
    category: 'lab',
    status: 'completed',
  },
  { 
    id: 'visit-past-10',
    date: 'Aug 15, 2025',
    time: '10:00 AM',
    type: 'Initial Consultation',
    provider: 'Dr. Smith',
    category: 'practitioner',
    status: 'completed',
  },
];

// All notes - both session notes and general coaching notes
const allNotes = [
  {
    id: 'note-session-1',
    date: 'Oct 22, 2025',
    visitId: 'visit-past-1',
    type: 'session',
    sessionType: 'Lab Review',
    title: 'Lab Results Review - October',
    notes: 'Reviewed comprehensive labs from Oct 1. Vitamin D improved from 28 to 52 ng/mL. HbA1c down from 6.2% to 5.8%. LDL decreased from 145 to 105. Patient showing excellent response to protocol. Continue current supplement regimen.',
    author: 'Dr. Smith',
  },
  {
    id: 'note-general-1',
    date: 'Oct 15, 2025',
    visitId: null,
    type: 'general',
    sessionType: null,
    title: 'Follow-up: Supplement Compliance',
    notes: 'Patient reports taking all supplements consistently. Mentioned mild digestive upset with probiotic - recommended taking with food instead of empty stomach.',
    author: 'Jane Miller',
  },
  {
    id: 'note-session-2',
    date: 'Oct 8, 2025',
    visitId: 'visit-past-2',
    type: 'session',
    sessionType: '1:1 Coaching',
    title: null,
    notes: 'Discussed meal prep strategies and reviewed weekly food log. Patient is doing well with Mediterranean diet adherence. Averaging 85% compliance. Identified some challenges with dinner preparation - provided quick recipe resources.',
    author: 'Jane Miller',
  },
  {
    id: 'note-session-3',
    date: 'Oct 1, 2025',
    visitId: 'visit-past-3',
    type: 'session',
    sessionType: '1:1 Coaching',
    title: null,
    notes: 'Lab review and next steps. HbA1c improving, discussed continuing current supplement protocol. Patient feels more energetic and reports better sleep quality.',
    author: 'Jane Miller',
  },
  {
    id: 'note-general-2',
    date: 'Sep 28, 2025',
    visitId: null,
    type: 'general',
    sessionType: null,
    title: 'Diet Progress Check-in',
    notes: 'Patient sent photos of meal prep. Excellent adherence to Mediterranean diet. Suggested adding more variety of vegetables, especially cruciferous vegetables for liver support.',
    author: 'Jane Miller',
  },
  {
    id: 'note-session-4',
    date: 'Sep 24, 2025',
    visitId: 'visit-past-4',
    type: 'session',
    sessionType: '1:1 Coaching',
    title: null,
    notes: 'Sleep optimization techniques. Recommended magnesium glycinate before bed and screen-free hour. Discussed sleep hygiene practices and importance of consistent sleep schedule.',
    author: 'Jane Miller',
  },
  {
    id: 'note-session-5',
    date: 'Sep 17, 2025',
    visitId: 'visit-past-5',
    type: 'session',
    sessionType: 'Group Session',
    title: null,
    notes: 'Stress management and mindfulness workshop. Patient participated actively in breathing exercises. Showed interest in continuing daily meditation practice.',
    author: 'Jane Miller',
  },
  {
    id: 'note-session-6',
    date: 'Sep 15, 2025',
    visitId: 'visit-past-6',
    type: 'session',
    sessionType: 'Follow-up Visit',
    title: null,
    notes: 'Reviewed progress, adjusted supplement protocol. Added magnesium glycinate for sleep support. Patient reports significant improvement in energy levels and digestion. Continue current plan.',
    author: 'Dr. Smith',
  },
  {
    id: 'note-session-7',
    date: 'Sep 10, 2025',
    visitId: 'visit-past-7',
    type: 'session',
    sessionType: '1:1 Coaching',
    title: null,
    notes: 'Patient rescheduled due to work conflict. Will follow up next week.',
    author: 'Jane Miller',
  },
  {
    id: 'note-session-8',
    date: 'Sep 3, 2025',
    visitId: 'visit-past-8',
    type: 'session',
    sessionType: '1:1 Coaching',
    title: null,
    notes: 'Program onboarding and goal setting. Established baseline metrics and discussed expectations. Patient goals: improve energy, optimize weight, reduce inflammation markers.',
    author: 'Jane Miller',
  },
  {
    id: 'note-session-9',
    date: 'Aug 20, 2025',
    visitId: 'visit-past-9',
    type: 'session',
    sessionType: 'Lab Review',
    title: 'Baseline Lab Review',
    notes: 'Baseline comprehensive labs ordered. Notable findings: Vitamin D low at 28 ng/mL, HbA1c elevated at 6.2%, LDL 145, CRP 4.2. Started on foundational supplement protocol including Vitamin D3+K2, Omega-3, and probiotic.',
    author: 'Dr. Smith',
  },
  {
    id: 'note-session-10',
    date: 'Aug 15, 2025',
    visitId: 'visit-past-10',
    type: 'session',
    sessionType: 'Initial Consultation',
    title: null,
    notes: 'Initial consultation completed. Comprehensive health history taken. Chief complaints: low energy, brain fog, digestive issues. Ordered baseline labs. Starting Functional Medicine Foundation program.',
    author: 'Dr. Smith',
  },
];

// User's assigned plans with module progress
const userAssignedPlans = [
  {
    planId: 'global-3month-wellness',
    startDate: 'Aug 15, 2025',
    status: 'active',
    currentWeek: 8,
    moduleProgress: [
      { moduleId: 'v1', status: 'completed', completedDate: 'Aug 20, 2025', score: 95 },
      { moduleId: 'visit-1', status: 'completed', completedDate: 'Aug 22, 2025', score: null },
      { moduleId: 'feedback-1', status: 'completed', completedDate: 'Aug 23, 2025', score: null },
      { moduleId: 'v2', status: 'completed', completedDate: 'Aug 28, 2025', score: 88 },
      { moduleId: 'l-w1t-mediterranean', status: 'completed', completedDate: 'Aug 30, 2025', score: 92 },
      { moduleId: 'v4', status: 'completed', completedDate: 'Sep 5, 2025', score: 85 },
      { moduleId: 'l3', status: 'in-progress', completedDate: null, score: null },
      { moduleId: 'lab-1', status: 'not-started', completedDate: null, score: null },
      { moduleId: 'lab-3', status: 'not-started', completedDate: null, score: null },
    ]
  },
  {
    planId: 'global-gut-health',
    startDate: 'Sep 1, 2025',
    status: 'active',
    currentWeek: 3,
    moduleProgress: [
      { moduleId: 'v1', status: 'completed', completedDate: 'Sep 3, 2025', score: 90 },
      { moduleId: 'v2', status: 'in-progress', completedDate: null, score: null },
      { moduleId: 'l-w1t-mediterranean', status: 'not-started', completedDate: null, score: null },
    ]
  }
];

// Lab results data
const labResults = [
  {
    date: 'Oct 1, 2025',
    markers: [
      { name: 'Vitamin D', value: '52', unit: 'ng/mL', range: '30-100', status: 'normal', baseline: '28' },
      { name: 'HbA1c', value: '5.8', unit: '%', range: '<5.7', status: 'borderline', baseline: '6.2' },
      { name: 'Total Cholesterol', value: '185', unit: 'mg/dL', range: '<200', status: 'normal', baseline: '220' },
      { name: 'LDL', value: '105', unit: 'mg/dL', range: '<100', status: 'borderline', baseline: '145' },
      { name: 'HDL', value: '58', unit: 'mg/dL', range: '>40', status: 'normal', baseline: '42' },
      { name: 'Triglycerides', value: '110', unit: 'mg/dL', range: '<150', status: 'normal', baseline: '175' },
      { name: 'TSH', value: '2.1', unit: 'mIU/L', range: '0.5-5.0', status: 'normal', baseline: '3.8' },
      { name: 'Free T3', value: '3.2', unit: 'pg/mL', range: '2.3-4.2', status: 'normal', baseline: '2.5' },
      { name: 'CRP', value: '0.8', unit: 'mg/L', range: '<3.0', status: 'normal', baseline: '4.2' },
      { name: 'Homocysteine', value: '8.5', unit: 'µmol/L', range: '<10', status: 'normal', baseline: '12.3' },
    ]
  },
  {
    date: 'Aug 15, 2025',
    markers: [
      { name: 'Vitamin D', value: '28', unit: 'ng/mL', range: '30-100', status: 'low', baseline: '28' },
      { name: 'HbA1c', value: '6.2', unit: '%', range: '<5.7', status: 'high', baseline: '6.2' },
      { name: 'Total Cholesterol', value: '220', unit: 'mg/dL', range: '<200', status: 'high', baseline: '220' },
      { name: 'LDL', value: '145', unit: 'mg/dL', range: '<100', status: 'high', baseline: '145' },
      { name: 'HDL', value: '42', unit: 'mg/dL', range: '>40', status: 'normal', baseline: '42' },
      { name: 'Triglycerides', value: '175', unit: 'mg/dL', range: '<150', status: 'high', baseline: '175' },
      { name: 'TSH', value: '3.8', unit: 'mIU/L', range: '0.5-5.0', status: 'normal', baseline: '3.8' },
      { name: 'Free T3', value: '2.5', unit: 'pg/mL', range: '2.3-4.2', status: 'normal', baseline: '2.5' },
      { name: 'CRP', value: '4.2', unit: 'mg/L', range: '<3.0', status: 'high', baseline: '4.2' },
      { name: 'Homocysteine', value: '12.3', unit: 'µmol/L', range: '<10', status: 'high', baseline: '12.3' },
    ]
  }
];

// Program details data
const totalOfficeVisits = 6;
const officeVisits = [
  { date: 'Sep 15, 2025', type: 'Follow-up', provider: 'Dr. Smith', notes: 'Reviewed progress, adjusted supplements' },
  { date: 'Aug 15, 2025', type: 'Initial Consultation', provider: 'Dr. Smith', notes: 'Baseline labs ordered, program overview' },
];

const totalCoachingCalls = 12;
const coachingCalls = [
  { date: 'Oct 8, 2025', duration: '30 min', type: 'Health Coaching', coach: 'Jane Miller', notes: 'Discussed meal prep strategies' },
  { date: 'Oct 1, 2025', duration: '30 min', type: 'Health Coaching', coach: 'Jane Miller', notes: 'Lab review and next steps' },
  { date: 'Sep 24, 2025', duration: '30 min', type: 'Health Coaching', coach: 'Jane Miller', notes: 'Sleep optimization techniques' },
  { date: 'Sep 17, 2025', duration: '30 min', type: 'Health Coaching', coach: 'Jane Miller', notes: 'Stress management and mindfulness' },
  { date: 'Sep 10, 2025', duration: '30 min', type: 'Health Coaching', coach: 'Jane Miller', notes: 'Nutrition fundamentals review' },
  { date: 'Sep 3, 2025', duration: '30 min', type: 'Health Coaching', coach: 'Jane Miller', notes: 'Program onboarding and goal setting' },
];

const bankHistory = [
  { date: 'Oct 5, 2025', type: 'supplement', description: 'Probiotic Complex', amount: -85, balance: 350 },
  { date: 'Oct 1, 2025', type: 'diagnostic', description: 'Comprehensive Stool Analysis', amount: -125, balance: 125 },
  { date: 'Sep 20, 2025', type: 'supplement', description: 'Omega-3 EPA/DHA', amount: -65, balance: 435 },
  { date: 'Aug 15, 2025', type: 'supplement', description: 'Initial allocation', amount: 500, balance: 500 },
  { date: 'Aug 15, 2025', type: 'diagnostic', description: 'Initial allocation', amount: 300, balance: 300 },
];

export function UserProfile({ userId, onBack }: UserProfileProps) {
  const user = getUserData(userId);
  const [isAssignPlanOpen, setIsAssignPlanOpen] = useState(false);
  const [selectedPlanToAssign, setSelectedPlanToAssign] = useState<string | null>(null);
  const [visits, setVisits] = useState(allVisits);
  const [notes, setNotes] = useState(allNotes);
  const [isLogVisitOpen, setIsLogVisitOpen] = useState(false);
  const [isAddNoteOpen, setIsAddNoteOpen] = useState(false);
  const [selectedVisit, setSelectedVisit] = useState<any>(null);
  const [visitNotes, setVisitNotes] = useState('');
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteContent, setNewNoteContent] = useState('');

  const handleLogVisit = () => {
    if (selectedVisit && visitNotes.trim()) {
      // Update visit status
      setVisits(prev => 
        prev.map(visit => 
          visit.id === selectedVisit.id 
            ? { ...visit, status: 'completed' }
            : visit
        )
      );
      
      // Add note for this visit
      const newNote = {
        id: `note-session-${Date.now()}`,
        date: selectedVisit.date,
        visitId: selectedVisit.id,
        type: 'session',
        sessionType: selectedVisit.type,
        title: null,
        notes: visitNotes.trim(),
        author: selectedVisit.provider,
      };
      setNotes(prev => [newNote, ...prev]);
      
      setIsLogVisitOpen(false);
      setSelectedVisit(null);
      setVisitNotes('');
    }
  };

  const openLogVisitDialog = (visit: any) => {
    setSelectedVisit(visit);
    // Find existing note for this visit if any
    const existingNote = notes.find(n => n.visitId === visit.id);
    setVisitNotes(existingNote?.notes || '');
    setIsLogVisitOpen(true);
  };

  const handleAddNote = () => {
    if (newNoteContent.trim()) {
      const newNote = {
        id: `note-general-${Date.now()}`,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        visitId: null,
        type: 'general',
        sessionType: null,
        title: newNoteTitle.trim() || 'General Note',
        notes: newNoteContent.trim(),
        author: 'Jane Miller',
      };
      setNotes(prev => [newNote, ...prev]);
      setIsAddNoteOpen(false);
      setNewNoteTitle('');
      setNewNoteContent('');
    }
  };

  return (
    <div className="flex-1 bg-[#f8f8fa] overflow-auto">
      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-4 -ml-3 hover:bg-[rgba(85,37,126,0.05)]"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-[rgba(94,9,169,0.1)] flex items-center justify-center">
                <span className="text-[24px] font-medium text-[#5e09a9]">
                  {user.name.split(' ').map((n) => n[0]).join('')}
                </span>
              </div>
              <div>
                <h1 className="font-['Inter',_sans-serif] font-semibold text-[22px] text-[#221b28] tracking-[-0.84px] mb-1">
                  {user.name}
                </h1>
                <p className="text-[15px] text-[rgba(34,20,46,0.62)] mb-3">
                  {user.program}
                </p>
                <div className="flex items-center gap-4 text-[13px] text-[rgba(34,20,46,0.62)]">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {user.email}
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {user.phone}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Started {user.startDate}
                  </div>
                </div>
              </div>
            </div>
            <Badge
              variant="secondary"
              className={`text-[15px] px-4 py-2 ${
                user.sentiment >= 4.5
                  ? 'bg-green-100 text-green-700'
                  : user.sentiment >= 3.5
                  ? 'bg-yellow-100 text-yellow-700'
                  : 'bg-red-100 text-red-700'
              } border-0`}
            >
              Sentiment: {user.sentiment.toFixed(1)}/5.0
            </Badge>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          <div className="bg-[#f8f8fa] rounded-lg p-4 border border-[rgba(0,0,0,0.1)]">
            <p className="text-[11px] text-[rgba(34,20,46,0.62)] mb-1">Program</p>
            <p className="font-medium text-[#221b28] text-[14px]">{user.program}</p>
          </div>

          <Card className="p-4 border border-[rgba(0,0,0,0.1)] bg-white">
            <p className="text-[11px] text-[rgba(34,20,46,0.62)] mb-1">Progress</p>
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="text-[11px] text-[rgba(34,20,46,0.62)]">Complete</span>
                <span className="font-medium text-[12px]">{user.percentComplete}%</span>
              </div>
              <Progress value={user.percentComplete} className="h-1.5" />
              <div className="flex justify-between items-center">
                <span className="text-[11px] text-[rgba(34,20,46,0.62)]">Status</span>
                <Badge 
                  className={`text-[10px] px-1.5 py-0 ${
                    user.percentComplete >= 60
                      ? 'bg-green-100 text-green-700 border-0'
                      : user.percentComplete >= 30
                      ? 'bg-yellow-100 text-yellow-700 border-0'
                      : 'bg-red-100 text-red-700 border-0'
                  }`}
                >
                  {user.percentComplete >= 60 ? 'Current' : user.percentComplete >= 30 ? 'Behind' : 'Inactive'}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[11px] text-[rgba(34,20,46,0.62)]">Last Module</span>
                <span className="font-medium text-[12px]">Module 4</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[11px] text-[rgba(34,20,46,0.62)]">Next Module</span>
                <span className="font-medium text-[12px]">Module 5</span>
              </div>
            </div>
          </Card>

          <Card className="p-4 border border-[rgba(0,0,0,0.1)] bg-white">
            <p className="text-[11px] text-[rgba(34,20,46,0.62)] mb-1">Engagement</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[11px] text-[rgba(34,20,46,0.62)]">Daily Streak</span>
                <span className="font-medium text-[12px]">12 days 🔥</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[11px] text-[rgba(34,20,46,0.62)]">Total Logins</span>
                <span className="font-medium text-[12px]">47</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[11px] text-[rgba(34,20,46,0.62)]">Last Login</span>
                <span className="font-medium text-[12px]">Today 9:14am</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[11px] text-[rgba(34,20,46,0.62)]">Avg Session</span>
                <span className="font-medium text-[12px]">18 mins</span>
              </div>
            </div>
          </Card>

          <div className="bg-[#f8f8fa] rounded-lg p-4 border border-[rgba(0,0,0,0.1)]">
            <p className="text-[11px] text-[rgba(34,20,46,0.62)] mb-1">Appointments</p>
            <div className="space-y-2">
              <div>
                <p className="text-[10px] text-[rgba(34,20,46,0.62)] mb-0.5">Office Visit</p>
                <p className="font-medium text-[#221b28] text-[11px]">Last: Sep 15 | Next: Nov 12</p>
              </div>
              <div>
                <p className="text-[10px] text-[rgba(34,20,46,0.62)] mb-0.5">Health Coaching</p>
                <p className="font-medium text-[#221b28] text-[11px]">Last: Oct 8 | Next: Oct 15</p>
              </div>
            </div>
          </div>

          <Card className="p-4 border border-[rgba(0,0,0,0.1)] bg-white">
            <p className="text-[11px] text-[rgba(34,20,46,0.62)] mb-1">Benefits</p>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] text-[rgba(34,20,46,0.62)]">Supplement Bank</span>
                  <span className="font-medium text-[11px]">$350 / $500</span>
                </div>
                <Progress value={70} className="h-1.5" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] text-[rgba(34,20,46,0.62)]">Diagnostic Bank</span>
                  <span className="font-medium text-[11px]">$125 / $300</span>
                </div>
                <Progress value={41.67} className="h-1.5" />
              </div>
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-white border border-[rgba(0,0,0,0.1)]">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="plans">Plans</TabsTrigger>
            <TabsTrigger value="coaching">Visits & Notes</TabsTrigger>
            <TabsTrigger value="supplements">Supplements</TabsTrigger>
            <TabsTrigger value="health">Health Metrics</TabsTrigger>
            <TabsTrigger value="labs">Key Markers</TabsTrigger>
            <TabsTrigger value="program">Plan Details</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Health Metrics Row 1 */}
            <div className="grid grid-cols-3 gap-6">
              {/* Weight Loss */}
              <Card className="p-5 border border-[rgba(0,0,0,0.1)]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-['Inter',_sans-serif] font-medium text-[#221b28] text-[14px]">
                    Weight Loss
                  </h3>
                  <div className="text-right">
                    <p className="text-[12px] text-green-600">-13 lbs</p>
                  </div>
                </div>
                <div className="h-[180px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={weightData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                      <XAxis
                        dataKey="week"
                        tick={{ fontSize: 11, fill: 'rgba(34,20,46,0.62)' }}
                      />
                      <YAxis
                        tick={{ fontSize: 11, fill: 'rgba(34,20,46,0.62)' }}
                        domain={[165, 190]}
                      />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="weight"
                        stroke="#10b981"
                        strokeWidth={2}
                        dot={{ fill: '#10b981', r: 3 }}
                        name="Actual Weight"
                      />
                      <Line
                        type="monotone"
                        dataKey="target"
                        stroke="#5e09a9"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        dot={false}
                        name="Target Weight"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              {/* MSQ Score */}
              <Card className="p-5 border border-[rgba(0,0,0,0.1)]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-['Inter',_sans-serif] font-medium text-[#221b28] text-[14px]">
                    MSQ Score
                  </h3>
                  <div className="text-right">
                    <p className="text-[12px] text-green-600">-46 pts</p>
                  </div>
                </div>
                <div className="h-[180px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={msqData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                      <XAxis
                        dataKey="week"
                        tick={{ fontSize: 11, fill: 'rgba(34,20,46,0.62)' }}
                      />
                      <YAxis
                        tick={{ fontSize: 11, fill: 'rgba(34,20,46,0.62)' }}
                        domain={[0, 120]}
                      />
                      <Tooltip />
                      <defs>
                        <linearGradient id="colorMSQ" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        dataKey="score"
                        stroke="#ef4444"
                        strokeWidth={2}
                        fill="url(#colorMSQ)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              {/* PROMIS-29 Score */}
              <Card className="p-5 border border-[rgba(0,0,0,0.1)]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-['Inter',_sans-serif] font-medium text-[#221b28] text-[14px]">
                    PROMIS-29
                  </h3>
                  <div className="text-right">
                    <p className="text-[12px] text-green-600">+30 pts</p>
                  </div>
                </div>
                <div className="h-[180px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={promis29Data}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                      <XAxis
                        dataKey="week"
                        tick={{ fontSize: 11, fill: 'rgba(34,20,46,0.62)' }}
                      />
                      <YAxis
                        tick={{ fontSize: 11, fill: 'rgba(34,20,46,0.62)' }}
                        domain={[0, 80]}
                      />
                      <Tooltip />
                      <defs>
                        <linearGradient id="colorPROMIS" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        dataKey="score"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        fill="url(#colorPROMIS)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>

            {/* Health Metrics Row 2 */}
            <div className="grid grid-cols-3 gap-6">
              {/* Blood Pressure */}
              <Card className="p-5 border border-[rgba(0,0,0,0.1)]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-['Inter',_sans-serif] font-medium text-[#221b28] text-[14px]">
                    Blood Pressure
                  </h3>
                  <div className="text-right">
                    <p className="text-[12px] text-green-600">-16/8</p>
                  </div>
                </div>
                <div className="h-[180px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={bloodPressureData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                      <XAxis
                        dataKey="week"
                        tick={{ fontSize: 11, fill: 'rgba(34,20,46,0.62)' }}
                      />
                      <YAxis
                        tick={{ fontSize: 11, fill: 'rgba(34,20,46,0.62)' }}
                        domain={[75, 150]}
                      />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="systolic"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={{ fill: '#3b82f6', r: 3 }}
                        name="Systolic"
                      />
                      <Line
                        type="monotone"
                        dataKey="diastolic"
                        stroke="#8b5cf6"
                        strokeWidth={2}
                        dot={{ fill: '#8b5cf6', r: 3 }}
                        name="Diastolic"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              {/* Energy Score */}
              <Card className="p-5 border border-[rgba(0,0,0,0.1)]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-['Inter',_sans-serif] font-medium text-[#221b28] text-[14px]">
                    Energy Level
                  </h3>
                  <div className="text-right">
                    <p className="text-[12px] text-green-600">+4.2</p>
                  </div>
                </div>
                <div className="h-[180px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={energyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                      <XAxis
                        dataKey="week"
                        tick={{ fontSize: 11, fill: 'rgba(34,20,46,0.62)' }}
                      />
                      <YAxis
                        tick={{ fontSize: 11, fill: 'rgba(34,20,46,0.62)' }}
                        domain={[0, 10]}
                      />
                      <Tooltip />
                      <defs>
                        <linearGradient id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        dataKey="score"
                        stroke="#f59e0b"
                        strokeWidth={2}
                        fill="url(#colorEnergy)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              {/* HbA1c */}
              <Card className="p-5 border border-[rgba(0,0,0,0.1)]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-['Inter',_sans-serif] font-medium text-[#221b28] text-[14px]">
                    HbA1c
                  </h3>
                  <div className="text-right">
                    <p className="text-[12px] text-green-600">-0.6%</p>
                  </div>
                </div>
                <div className="h-[180px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={hba1cData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                      <XAxis
                        dataKey="month"
                        tick={{ fontSize: 11, fill: 'rgba(34,20,46,0.62)' }}
                      />
                      <YAxis
                        tick={{ fontSize: 11, fill: 'rgba(34,20,46,0.62)' }}
                        domain={[5, 8]}
                      />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#5e09a9"
                        strokeWidth={2}
                        dot={{ fill: '#5e09a9', r: 4 }}
                        name="HbA1c %"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>

            {/* Sentiment Trend - Moved Down */}
            <Card className="p-5 border border-[rgba(0,0,0,0.1)]">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-['Inter',_sans-serif] font-medium text-[#221b28]">
                  Sentiment Trend
                </h3>
                <div className="text-right">
                  <p className="text-[12px] text-green-600">+0.6 points</p>
                </div>
              </div>
              <div className="h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={sentimentData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                    <XAxis
                      dataKey="week"
                      tick={{ fontSize: 11, fill: 'rgba(34,20,46,0.62)' }}
                    />
                    <YAxis
                      tick={{ fontSize: 11, fill: 'rgba(34,20,46,0.62)' }}
                      domain={[0, 5]}
                    />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="score"
                      stroke="#10b981"
                      strokeWidth={2}
                      dot={{ fill: '#10b981', r: 3 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </TabsContent>

          {/* Plans Tab */}
          <TabsContent value="plans">
            <Card className="border border-[rgba(0,0,0,0.1)]">
              <div className="p-6 border-b border-[rgba(0,0,0,0.1)] flex items-center justify-between">
                <h3 className="font-['Inter',_sans-serif] font-medium text-[#221b28]">
                  Assigned Plans & Module Progress
                </h3>
                <Dialog open={isAssignPlanOpen} onOpenChange={setIsAssignPlanOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-[#4F5FED] hover:bg-[#3d4dd9] text-white">
                      <Plus className="w-4 h-4 mr-2" />
                      Assign Plan
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Assign New Plan</DialogTitle>
                      <DialogDescription>
                        Select a plan to assign to {user.name}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-3 max-h-[500px] overflow-y-auto">
                      {globalPrograms.map((program) => (
                        <div
                          key={program.id}
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${
                            selectedPlanToAssign === program.id
                              ? 'border-[#4F5FED] bg-[rgba(79,95,237,0.05)]'
                              : 'border-[rgba(0,0,0,0.1)] hover:border-[rgba(79,95,237,0.3)]'
                          }`}
                          onClick={() => setSelectedPlanToAssign(program.id)}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-medium text-[#221b28] mb-1">{program.name}</h4>
                              <p className="text-[13px] text-[rgba(34,20,46,0.62)] mb-2">
                                {program.description}
                              </p>
                              <div className="flex items-center gap-3">
                                <Badge variant="outline" className="text-[11px]">
                                  {program.duration} weeks
                                </Badge>
                                <Badge variant="outline" className="text-[11px]">
                                  {program.difficulty}
                                </Badge>
                                <Badge variant="outline" className="text-[11px]">
                                  {program.category}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-end gap-3 mt-4">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setIsAssignPlanOpen(false);
                          setSelectedPlanToAssign(null);
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        className="bg-[#4F5FED] hover:bg-[#3d4dd9] text-white"
                        disabled={!selectedPlanToAssign}
                        onClick={() => {
                          // Handle plan assignment logic here
                          setIsAssignPlanOpen(false);
                          setSelectedPlanToAssign(null);
                        }}
                      >
                        Assign Plan
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <Accordion type="single" collapsible className="space-y-0">
                  {userAssignedPlans.map((assignedPlan) => {
                    const plan = globalPrograms.find(p => p.id === assignedPlan.planId);
                    if (!plan) return null;
                    
                    // Calculate overall progress
                    const totalModules = plan.weeks.reduce((acc, week) => acc + week.components.length, 0);
                    const completedModules = assignedPlan.moduleProgress.filter(m => m.status === 'completed').length;
                    const progressPercent = Math.round((completedModules / totalModules) * 100);

                    return (
                      <AccordionItem key={assignedPlan.planId} value={assignedPlan.planId} className="border border-[rgba(0,0,0,0.1)] rounded-lg mx-6 my-4 first:mt-6 last:mb-6">
                        <AccordionTrigger className="hover:no-underline py-4 px-6">
                          <div className="flex items-center gap-6 flex-1 pr-2">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-lg bg-[rgba(94,9,169,0.1)] flex items-center justify-center">
                                <Activity className="w-5 h-5 text-[#5e09a9]" />
                              </div>
                              <div className="text-left">
                                <p className="font-medium text-[#221b28]">{plan.name}</p>
                                <p className="text-[13px] text-[rgba(34,20,46,0.62)]">
                                  Started {assignedPlan.startDate} • Week {assignedPlan.currentWeek} of {plan.duration}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 ml-auto">
                              <div className="text-right">
                                <p className="text-[13px] text-[rgba(34,20,46,0.62)]">{completedModules} of {totalModules} modules</p>
                                <div className="flex items-center gap-2 mt-1">
                                  <Progress value={progressPercent} className="h-1.5 w-24" />
                                  <span className="text-[12px] font-medium">{progressPercent}%</span>
                                </div>
                              </div>
                              <Badge 
                                variant="secondary"
                                className={`${
                                  assignedPlan.status === 'active' 
                                    ? 'bg-green-100 text-green-700' 
                                    : 'bg-gray-100 text-gray-700'
                                } border-0`}
                              >
                                {assignedPlan.status}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 hover:bg-[rgba(79,95,237,0.1)] hover:text-[#4F5FED]"
                              onClick={() => {
                                // Handle edit logic
                              }}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 hover:bg-[rgba(255,193,7,0.1)] hover:text-[#ff9800]"
                              onClick={() => {
                                // Handle pause logic
                              }}
                            >
                              <Pause className="w-4 h-4" />
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 hover:bg-[rgba(239,68,68,0.1)] hover:text-red-600"
                                >
                                  <X className="w-4 h-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Cancel Plan Assignment</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to cancel the "{plan.name}" plan for {user.name}? 
                                    This action cannot be undone and all progress will be lost.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>No, Keep Plan</AlertDialogCancel>
                                  <AlertDialogAction 
                                    className="bg-red-600 hover:bg-red-700"
                                    onClick={() => {
                                      // Handle cancel plan logic
                                    }}
                                  >
                                    Yes, Cancel Plan
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pt-2 pb-4 px-6">
                            <div className="divide-y divide-[rgba(0,0,0,0.05)]">
                              {plan.weeks.map((week) => (
                                <div key={week.weekNumber} className="py-4">
                                  <p className="text-[13px] font-medium text-[rgba(34,20,46,0.8)] mb-3">
                                    Week {week.weekNumber}: {week.title}
                                  </p>
                                  <div className="space-y-2 ml-4">
                                    {week.components.map((component) => {
                                      const progress = assignedPlan.moduleProgress.find(m => m.moduleId === component.id);
                                      const status = progress?.status || 'not-started';
                                      
                                      return (
                                        <div key={component.id} className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-[rgba(94,9,169,0.02)]">
                                          <div className="flex items-center gap-3 flex-1">
                                            <div
                                              className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                                status === 'completed'
                                                  ? 'bg-green-100'
                                                  : status === 'in-progress'
                                                  ? 'bg-blue-100'
                                                  : 'bg-gray-100'
                                              }`}
                                            >
                                              {status === 'completed' ? (
                                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                              ) : status === 'in-progress' ? (
                                                <Clock className="w-4 h-4 text-blue-500" />
                                              ) : (
                                                <FileText className="w-4 h-4 text-gray-400" />
                                              )}
                                            </div>
                                            <div className="flex-1">
                                              <p className="text-[14px] text-[#221b28]">{component.title}</p>
                                              <p className="text-[12px] text-[rgba(34,20,46,0.62)]">
                                                {status === 'completed' && progress?.completedDate && `Completed on ${progress.completedDate}`}
                                                {status === 'in-progress' && 'In Progress'}
                                                {status === 'not-started' && 'Not Started'}
                                              </p>
                                            </div>
                                          </div>
                                          <div className="flex items-center gap-2">
                                            <Badge variant="outline" className="text-[10px]">
                                              {component.type}
                                            </Badge>
                                            {progress?.score && (
                                              <Badge variant="secondary" className="bg-green-100 text-green-700 border-0 text-[11px]">
                                                {progress.score}%
                                              </Badge>
                                            )}
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
            </Card>
          </TabsContent>

          {/* Visits & Notes Tab */}
          <TabsContent value="coaching" className="space-y-6">
            {/* Two Column Layout: Visit History & Notes */}
            <div className="grid grid-cols-2 gap-6">
              {/* Left: Visit History */}
              <Card className="border border-[rgba(0,0,0,0.1)]">
                <div className="p-6 border-b border-[rgba(0,0,0,0.1)]">
                  <h3 className="font-['Inter',_sans-serif] font-medium text-[#221b28]">
                    Visit History
                  </h3>
                  <p className="text-[12px] text-[rgba(34,20,46,0.62)] mt-1">
                    Coaching calls, practitioner visits, and lab reviews
                  </p>
                </div>
                <div className="divide-y divide-[rgba(0,0,0,0.05)] max-h-[800px] overflow-y-auto">
                  {visits.map((visit) => {
                    const visitIcon = visit.category === 'coaching' 
                      ? Video 
                      : visit.category === 'practitioner' 
                      ? Users 
                      : FlaskConical;
                    
                    const IconComponent = visitIcon;
                    
                    return (
                      <div key={visit.id} className="p-5 hover:bg-[rgba(94,9,169,0.02)]">
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                              visit.status === 'scheduled'
                                ? 'bg-blue-100'
                                : visit.status === 'completed'
                                ? 'bg-green-100'
                                : 'bg-red-100'
                            }`}
                          >
                            {visit.status === 'scheduled' ? (
                              <Clock className="w-5 h-5 text-blue-600" />
                            ) : visit.status === 'completed' ? (
                              <CheckCircle2 className="w-5 h-5 text-green-600" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-500" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <IconComponent className="w-3.5 h-3.5 text-[rgba(34,20,46,0.5)]" />
                                  <p className="font-medium text-[#221b28] text-[14px]">{visit.type}</p>
                                </div>
                                <p className="text-[12px] text-[rgba(34,20,46,0.62)]">
                                  {visit.date}{visit.time && ` · ${visit.time}`}
                                </p>
                              </div>
                              {visit.status === 'scheduled' && (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => openLogVisitDialog(visit)}
                                  className="text-[11px] h-7 px-2 shrink-0"
                                >
                                  <CheckCircle2 className="w-3 h-3 mr-1" />
                                  Log
                                </Button>
                              )}
                              {visit.status === 'completed' && (
                                <Badge className="bg-green-100 text-green-700 border-0 text-[10px] shrink-0">
                                  Completed
                                </Badge>
                              )}
                              {visit.status === 'missed' && (
                                <Badge className="bg-red-100 text-red-700 border-0 text-[10px] shrink-0">
                                  Missed
                                </Badge>
                              )}
                            </div>
                            <p className="text-[12px] text-[rgba(34,20,46,0.62)]">
                              {visit.provider}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Right: All Notes */}
              <Card className="border border-[rgba(0,0,0,0.1)]">
                <div className="p-6 border-b border-[rgba(0,0,0,0.1)] flex items-center justify-between">
                  <div>
                    <h3 className="font-['Inter',_sans-serif] font-medium text-[#221b28]">
                      Coaching Notes
                    </h3>
                    <p className="text-[12px] text-[rgba(34,20,46,0.62)] mt-1">
                      Session notes and general observations
                    </p>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => setIsAddNoteOpen(true)}
                    className="bg-[#4F5FED] hover:bg-[#3d4dd9] text-white"
                  >
                    <Plus className="w-4 h-4 mr-1.5" />
                    Add Note
                  </Button>
                </div>
                <div className="divide-y divide-[rgba(0,0,0,0.05)] max-h-[800px] overflow-y-auto">
                  {notes.length > 0 ? (
                    notes.map((note) => (
                      <div key={note.id} className="p-5 hover:bg-[rgba(94,9,169,0.02)]">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[rgba(79,95,237,0.1)] flex items-center justify-center shrink-0">
                            <MessageSquare className="w-5 h-5 text-[#4F5FED]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <div className="flex-1 min-w-0">
                                {note.title && (
                                  <p className="font-medium text-[#221b28] text-[14px] mb-0.5">{note.title}</p>
                                )}
                                {note.sessionType && (
                                  <Badge variant="outline" className="text-[10px] mb-1">
                                    {note.sessionType}
                                  </Badge>
                                )}
                                <p className="text-[12px] text-[rgba(34,20,46,0.62)]">
                                  {note.date} · {note.author}
                                </p>
                              </div>
                            </div>
                            <p className="text-[13px] text-[rgba(34,20,46,0.8)] leading-relaxed">
                              {note.notes}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-8 text-center text-[rgba(34,20,46,0.62)]">
                      No notes yet
                    </div>
                  )}
                </div>
              </Card>
            </div>

            {/* Log Visit Dialog */}
            <Dialog open={isLogVisitOpen} onOpenChange={setIsLogVisitOpen}>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Log Visit</DialogTitle>
                  <DialogDescription>
                    Add notes for {selectedVisit?.type} on {selectedVisit?.date}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <label className="text-[13px] font-medium text-[#221b28]">
                      Visit Notes
                    </label>
                    <Textarea
                      placeholder="Enter notes about this visit..."
                      value={visitNotes}
                      onChange={(e) => setVisitNotes(e.target.value)}
                      rows={6}
                      className="resize-none"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsLogVisitOpen(false);
                      setSelectedVisit(null);
                      setVisitNotes('');
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleLogVisit}
                    disabled={!visitNotes.trim()}
                    className="bg-[#4F5FED] hover:bg-[#3d4dd9] text-white"
                  >
                    Save & Complete
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Add Note Dialog */}
            <Dialog open={isAddNoteOpen} onOpenChange={setIsAddNoteOpen}>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Add Coaching Note</DialogTitle>
                  <DialogDescription>
                    Add a general coaching note for {user.name}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <label className="text-[13px] font-medium text-[#221b28]">
                      Note Title (Optional)
                    </label>
                    <Input
                      placeholder="e.g., Follow-up: Diet Progress"
                      value={newNoteTitle}
                      onChange={(e) => setNewNoteTitle(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] font-medium text-[#221b28]">
                      Note Content
                    </label>
                    <Textarea
                      placeholder="Enter your coaching notes..."
                      value={newNoteContent}
                      onChange={(e) => setNewNoteContent(e.target.value)}
                      rows={6}
                      className="resize-none"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsAddNoteOpen(false);
                      setNewNoteTitle('');
                      setNewNoteContent('');
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleAddNote}
                    disabled={!newNoteContent.trim()}
                    className="bg-[#4F5FED] hover:bg-[#3d4dd9] text-white"
                  >
                    Save Note
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </TabsContent>

          {/* Supplements Tab */}
          <TabsContent value="supplements" className="space-y-6">
            {/* Active Supplements */}
            <Card className="border border-[rgba(0,0,0,0.1)]">
              <div className="p-6 border-b border-[rgba(0,0,0,0.1)]">
                <h3 className="font-['Inter',_sans-serif] font-medium text-[#221b28]">
                  Active Supplements
                </h3>
                <p className="text-[12px] text-[rgba(34,20,46,0.62)] mt-1">
                  Current supplement regimen and protocols
                </p>
              </div>
              <div className="divide-y divide-[rgba(0,0,0,0.05)]">
                {activeSupplements.map((supplement) => (
                  <div key={supplement.id} className="p-6 hover:bg-[rgba(94,9,169,0.02)]">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[rgba(79,95,237,0.1)] flex items-center justify-center">
                        <Pill className="w-5 h-5 text-[#4F5FED]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="font-medium text-[#221b28]">{supplement.name}</p>
                            <p className="text-[13px] text-[rgba(34,20,46,0.62)] mt-0.5">
                              {supplement.dosage}
                            </p>
                          </div>
                          <Badge variant="outline" className="text-[11px]">
                            Started {supplement.startDate}
                          </Badge>
                        </div>
                        <p className="text-[13px] text-[rgba(34,20,46,0.8)] mb-2">
                          {supplement.instructions}
                        </p>
                        {supplement.protocolId && (
                          <Button
                            variant="ghost"
                            className="h-8 px-3 text-[12px] text-[#4F5FED] hover:text-[#3d4dd9] hover:bg-[rgba(79,95,237,0.05)] -ml-3"
                            onClick={() => {
                              // Navigate to supplement protocol
                              console.log('View protocol:', supplement.protocolId);
                            }}
                          >
                            <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                            View {supplement.protocolName}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Health Metrics Tab */}
          <TabsContent value="health" className="space-y-6">
            {/* Current Health Snapshot */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
                <h3 className="font-['Inter',_sans-serif] font-medium text-[#221b28] mb-6">
                  Current Health Snapshot
                </h3>
                <div className="flex items-center justify-center">
                  <div className="h-[350px] w-full max-w-[450px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={healthMetrics}>
                        <PolarGrid stroke="rgba(0,0,0,0.1)" />
                        <PolarAngleAxis
                          dataKey="category"
                          tick={{ fontSize: 12, fill: 'rgba(34,20,46,0.8)' }}
                        />
                        <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 11 }} />
                        <Radar
                          name="Health Score"
                          dataKey="value"
                          stroke="#5e09a9"
                          fill="#5e09a9"
                          fillOpacity={0.3}
                          strokeWidth={2}
                        />
                        <Tooltip />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
                <h3 className="font-['Inter',_sans-serif] font-medium text-[#221b28] mb-6">
                  Individual Health Scores
                </h3>
                <div className="space-y-4">
                  {healthMetrics.map((metric, index) => (
                    <div key={index} className="bg-[#f8f8fa] rounded-lg p-4 border border-[rgba(0,0,0,0.1)]">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[14px] font-medium text-[#221b28]">{metric.category}</p>
                        <span className="text-[14px] font-medium text-[#221b28]">
                          {metric.value}%
                        </span>
                      </div>
                      <Progress value={metric.value} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Health Metrics Over Time */}
            <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
              <h3 className="font-['Inter',_sans-serif] font-medium text-[#221b28] mb-6">
                Health Metrics Progress Over Time
              </h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={detailedHealthData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                    <XAxis
                      dataKey="week"
                      tick={{ fontSize: 12, fill: 'rgba(34,20,46,0.62)' }}
                    />
                    <YAxis
                      tick={{ fontSize: 12, fill: 'rgba(34,20,46,0.62)' }}
                      domain={[0, 100]}
                    />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="energy"
                      stroke="#f59e0b"
                      strokeWidth={2}
                      dot={{ fill: '#f59e0b', r: 3 }}
                      name="Energy"
                    />
                    <Line
                      type="monotone"
                      dataKey="sleep"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={{ fill: '#3b82f6', r: 3 }}
                      name="Sleep"
                    />
                    <Line
                      type="monotone"
                      dataKey="digestion"
                      stroke="#10b981"
                      strokeWidth={2}
                      dot={{ fill: '#10b981', r: 3 }}
                      name="Digestion"
                    />
                    <Line
                      type="monotone"
                      dataKey="mood"
                      stroke="#8b5cf6"
                      strokeWidth={2}
                      dot={{ fill: '#8b5cf6', r: 3 }}
                      name="Mood"
                    />
                    <Line
                      type="monotone"
                      dataKey="pain"
                      stroke="#ef4444"
                      strokeWidth={2}
                      dot={{ fill: '#ef4444', r: 3 }}
                      name="Pain Level"
                    />
                    <Line
                      type="monotone"
                      dataKey="stress"
                      stroke="#ec4899"
                      strokeWidth={2}
                      dot={{ fill: '#ec4899', r: 3 }}
                      name="Stress"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-6 gap-3 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
                  <span className="text-[12px] text-[rgba(34,20,46,0.8)]">Energy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#3b82f6]"></div>
                  <span className="text-[12px] text-[rgba(34,20,46,0.8)]">Sleep</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
                  <span className="text-[12px] text-[rgba(34,20,46,0.8)]">Digestion</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#8b5cf6]"></div>
                  <span className="text-[12px] text-[rgba(34,20,46,0.8)]">Mood</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
                  <span className="text-[12px] text-[rgba(34,20,46,0.8)]">Pain Level</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ec4899]"></div>
                  <span className="text-[12px] text-[rgba(34,20,46,0.8)]">Stress</span>
                </div>
              </div>
            </Card>

            {/* Biomarkers Summary */}
            <div className="grid grid-cols-3 gap-6">
              <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
                <div className="text-center">
                  <p className="text-[13px] text-[rgba(34,20,46,0.62)] mb-2">Current Weight</p>
                  <p className="font-['Inter',_sans-serif] font-semibold text-[32px] text-[#221b28] tracking-[-1px] mb-1">
                    172<span className="text-[18px]">lbs</span>
                  </p>
                  <div className="flex items-center justify-center gap-1 text-green-600">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span className="text-[12px]">-13 lbs from start</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
                <div className="text-center">
                  <p className="text-[13px] text-[rgba(34,20,46,0.62)] mb-2">Blood Pressure</p>
                  <p className="font-['Inter',_sans-serif] font-semibold text-[32px] text-[#221b28] tracking-[-1px] mb-1">
                    126<span className="text-[18px]">/80</span>
                  </p>
                  <div className="flex items-center justify-center gap-1 text-green-600">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span className="text-[12px]">Within normal range</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
                <div className="text-center">
                  <p className="text-[13px] text-[rgba(34,20,46,0.62)] mb-2">Latest HbA1c</p>
                  <p className="font-['Inter',_sans-serif] font-semibold text-[32px] text-[#221b28] tracking-[-1px] mb-1">
                    6.2<span className="text-[18px]">%</span>
                  </p>
                  <div className="flex items-center justify-center gap-1 text-green-600">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span className="text-[12px]">-0.6% improvement</span>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Key Markers Tab */}
          <TabsContent value="labs" className="space-y-6">
            {labResults.map((labPanel, panelIndex) => (
              <Card key={panelIndex} className="p-6 border border-[rgba(0,0,0,0.1)]">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <FlaskConical className="w-5 h-5 text-[#5e09a9]" />
                    <h3 className="font-['Inter',_sans-serif] font-medium text-[#221b28]">
                      Lab Results - {labPanel.date}
                    </h3>
                  </div>
                  <Badge variant="outline" className="text-[12px]">
                    {panelIndex === 0 ? 'Most Recent' : 'Baseline'}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {labPanel.markers.map((marker, index) => {
                    const isImproved = panelIndex === 0 && parseFloat(marker.value) !== parseFloat(marker.baseline);
                    const statusColor = 
                      marker.status === 'normal' ? 'text-green-600' :
                      marker.status === 'borderline' ? 'text-yellow-600' :
                      marker.status === 'high' || marker.status === 'low' ? 'text-red-600' : 'text-gray-600';
                    
                    return (
                      <div key={index} className="bg-[#f8f8fa] rounded-lg p-4 border border-[rgba(0,0,0,0.1)]">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="text-[14px] font-medium text-[#221b28]">{marker.name}</p>
                            <p className="text-[11px] text-[rgba(34,20,46,0.62)] mt-0.5">
                              Range: {marker.range}
                            </p>
                          </div>
                          <Badge 
                            className={`text-[10px] px-2 py-0.5 ${
                              marker.status === 'normal' 
                                ? 'bg-green-100 text-green-700 border-0' 
                                : marker.status === 'borderline'
                                ? 'bg-yellow-100 text-yellow-700 border-0'
                                : 'bg-red-100 text-red-700 border-0'
                            }`}
                          >
                            {marker.status}
                          </Badge>
                        </div>
                        <div className="flex items-baseline gap-1 mt-3">
                          <span className={`font-medium ${statusColor}`}>
                            {marker.value}
                          </span>
                          <span className="text-[12px] text-[rgba(34,20,46,0.62)]">
                            {marker.unit}
                          </span>
                          {isImproved && (
                            <span className="text-[11px] text-[rgba(34,20,46,0.62)] ml-2">
                              (was {marker.baseline})
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Plan Details Tab */}
          <TabsContent value="program" className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-4 gap-4">
              <Card className="p-5 border border-[rgba(0,0,0,0.1)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[rgba(94,9,169,0.1)] flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#5e09a9]" />
                  </div>
                  <p className="text-[12px] text-[rgba(34,20,46,0.62)]">Office Visits</p>
                </div>
                <p className="font-medium text-[24px] text-[#221b28]">{officeVisits.length} of {totalOfficeVisits}</p>
                <p className="text-[11px] text-[rgba(34,20,46,0.62)] mt-1">Completed</p>
              </Card>

              <Card className="p-5 border border-[rgba(0,0,0,0.1)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[rgba(94,9,169,0.1)] flex items-center justify-center">
                    <Video className="w-5 h-5 text-[#5e09a9]" />
                  </div>
                  <p className="text-[12px] text-[rgba(34,20,46,0.62)]">Coaching Calls</p>
                </div>
                <p className="font-medium text-[24px] text-[#221b28]">{coachingCalls.length} of {totalCoachingCalls}</p>
                <p className="text-[11px] text-[rgba(34,20,46,0.62)] mt-1">Completed</p>
              </Card>

              <Card className="p-5 border border-[rgba(0,0,0,0.1)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[rgba(16,185,129,0.1)] flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-[#10b981]" />
                  </div>
                  <p className="text-[12px] text-[rgba(34,20,46,0.62)]">Supplement Bank</p>
                </div>
                <p className="font-medium text-[24px] text-[#221b28]">$350</p>
                <p className="text-[11px] text-[rgba(34,20,46,0.62)] mt-1">of $500 remaining</p>
              </Card>

              <Card className="p-5 border border-[rgba(0,0,0,0.1)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[rgba(16,185,129,0.1)] flex items-center justify-center">
                    <FlaskConical className="w-5 h-5 text-[#10b981]" />
                  </div>
                  <p className="text-[12px] text-[rgba(34,20,46,0.62)]">Diagnostic Bank</p>
                </div>
                <p className="font-medium text-[24px] text-[#221b28]">$125</p>
                <p className="text-[11px] text-[rgba(34,20,46,0.62)] mt-1">of $300 remaining</p>
              </Card>
            </div>

            {/* Office Visits */}
            <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
              <h3 className="font-['Inter',_sans-serif] font-medium text-[#221b28] mb-4">
                Office Visits ({officeVisits.length} of {totalOfficeVisits})
              </h3>
              <div className="space-y-3">
                {officeVisits.map((visit, index) => (
                  <div key={index} className="bg-[#f8f8fa] rounded-lg p-4 border border-[rgba(0,0,0,0.1)]">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <p className="text-[14px] font-medium text-[#221b28]">{visit.type}</p>
                          <Badge variant="outline" className="text-[11px]">{visit.date}</Badge>
                        </div>
                        <p className="text-[12px] text-[rgba(34,20,46,0.62)] mb-1">
                          Provider: {visit.provider}
                        </p>
                        <p className="text-[13px] text-[#221b28]">{visit.notes}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Coaching Calls */}
            <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
              <h3 className="font-['Inter',_sans-serif] font-medium text-[#221b28] mb-4">
                Coaching Calls ({coachingCalls.length} of {totalCoachingCalls})
              </h3>
              <div className="space-y-3">
                {coachingCalls.map((call, index) => (
                  <div key={index} className="bg-[#f8f8fa] rounded-lg p-4 border border-[rgba(0,0,0,0.1)]">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <p className="text-[14px] font-medium text-[#221b28]">{call.type}</p>
                          <Badge variant="outline" className="text-[11px]">{call.date}</Badge>
                          <Badge variant="secondary" className="text-[11px] bg-[rgba(94,9,169,0.1)] text-[#5e09a9] border-0">
                            {call.duration}
                          </Badge>
                        </div>
                        <p className="text-[12px] text-[rgba(34,20,46,0.62)] mb-1">
                          Coach: {call.coach}
                        </p>
                        <p className="text-[13px] text-[#221b28]">{call.notes}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Bank History */}
            <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
              <h3 className="font-['Inter',_sans-serif] font-medium text-[#221b28] mb-4">
                Bank Transaction History
              </h3>
              <div className="space-y-2">
                {bankHistory.map((transaction, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between py-3 border-b border-[rgba(0,0,0,0.1)] last:border-0"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.type === 'supplement' 
                          ? 'bg-[rgba(94,9,169,0.1)]' 
                          : 'bg-[rgba(59,130,246,0.1)]'
                      }`}>
                        {transaction.type === 'supplement' ? (
                          <DollarSign className={`w-5 h-5 ${
                            transaction.amount > 0 ? 'text-[#10b981]' : 'text-[#5e09a9]'
                          }`} />
                        ) : (
                          <FlaskConical className={`w-5 h-5 ${
                            transaction.amount > 0 ? 'text-[#10b981]' : 'text-[#3b82f6]'
                          }`} />
                        )}
                      </div>
                      <div>
                        <p className="text-[14px] font-medium text-[#221b28]">
                          {transaction.description}
                        </p>
                        <p className="text-[12px] text-[rgba(34,20,46,0.62)]">
                          {transaction.date} · {transaction.type === 'supplement' ? 'Supplement Bank' : 'Diagnostic Bank'}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-[14px] font-medium ${
                        transaction.amount > 0 ? 'text-green-600' : 'text-[#221b28]'
                      }`}>
                        {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount)}
                      </p>
                      <p className="text-[12px] text-[rgba(34,20,46,0.62)]">
                        Balance: ${transaction.balance}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
