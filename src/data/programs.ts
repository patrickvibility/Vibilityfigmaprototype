import { Program } from '../types/curriculum';

export const globalPrograms: Program[] = [
  {
    id: 'global-3month-wellness',
    name: '3 Month Wellness Program',
    description: 'Comprehensive 12-week foundational wellness program focusing on nutrition, lifestyle optimization, and sustainable health habits',
    duration: 12,
    isGlobal: true,
    difficulty: 'beginner',
    category: 'Wellness',
    createdDate: '2024-01-15',
    weeks: [
      {
        weekNumber: 1,
        title: 'Program Introduction & Assessment',
        components: [
          {
            id: 'v1',
            title: 'Introduction to Functional Medicine',
            type: 'video',
            topic: 'general',
            difficulty: 'beginner',
            duration: '45 min',
            description: 'Overview of functional medicine principles and patient-centered care'
          },
          {
            id: 'visit-1',
            title: 'Initial Consultation - 60 min',
            type: 'visit',
            topic: 'patient-care',
            difficulty: 'beginner',
            duration: '60 min',
            description: 'Comprehensive initial patient consultation and health history'
          },
          {
            id: 'feedback-1',
            title: 'Initial Health Assessment Report',
            type: 'form',
            topic: 'patient-care',
            difficulty: 'beginner',
            duration: '30 min',
            description: 'Comprehensive baseline health assessment and symptom evaluation'
          }
        ]
      },
      {
        weekNumber: 2,
        title: 'Nutrition Foundations',
        components: [
          {
            id: 'v2',
            title: 'Nutrition Fundamentals',
            type: 'video',
            topic: 'diet',
            difficulty: 'beginner',
            duration: '60 min',
            description: 'Core principles of nutrition in functional medicine'
          },
          {
            id: 'l-w1t-mediterranean',
            title: 'Week 1 Transitions - Mediterranean Diet',
            type: 'lesson',
            topic: 'diet',
            difficulty: 'beginner',
            duration: '75 min',
            description: 'Mediterranean diet transition protocol with meal plans and patient education',
            dietType: 'mediterranean'
          }
        ]
      },
      {
        weekNumber: 3,
        title: 'Lifestyle Integration',
        components: [
          {
            id: 'v4',
            title: 'Lifestyle Medicine Basics',
            type: 'video',
            topic: 'lifestyle',
            difficulty: 'beginner',
            duration: '40 min',
            description: 'Sleep, stress, and movement in patient care'
          },
          {
            id: 'l3',
            title: 'Stress Management Techniques',
            type: 'lesson',
            topic: 'lifestyle',
            difficulty: 'beginner',
            duration: '60 min',
            description: 'Evidence-based stress reduction for patients'
          }
        ]
      },
      {
        weekNumber: 4,
        title: 'Lab Testing & Assessment',
        components: [
          {
            id: 'lab-1',
            title: 'Comprehensive Metabolic Panel',
            type: 'panel',
            topic: 'lab-testing',
            difficulty: 'intermediate',
            duration: '30 min',
            description: 'Complete metabolic panel including glucose, electrolytes, and kidney function'
          },
          {
            id: 'lab-3',
            title: 'Lipid Panel',
            type: 'panel',
            topic: 'lab-testing',
            difficulty: 'intermediate',
            duration: '25 min',
            description: 'Cardiovascular risk assessment through cholesterol and triglyceride levels'
          }
        ]
      },
      {
        weekNumber: 5,
        title: 'Report of Findings',
        components: [
          {
            id: 'visit-4',
            title: 'Report of Findings - 45 min',
            type: 'visit',
            topic: 'patient-care',
            difficulty: 'intermediate',
            duration: '45 min',
            description: 'Detailed report of findings with comprehensive treatment discussion'
          }
        ]
      },
      {
        weekNumber: 6,
        title: 'Mid-Program Assessment',
        components: [
          {
            id: 'feedback-2',
            title: 'Mid-Program Progress Report',
            type: 'form',
            topic: 'patient-care',
            difficulty: 'beginner',
            duration: '20 min',
            description: 'Mid-point evaluation of symptoms, compliance, and treatment response'
          },
          {
            id: 'visit-7',
            title: 'Follow-Up Visit - 30 min',
            type: 'visit',
            topic: 'patient-care',
            difficulty: 'beginner',
            duration: '30 min',
            description: 'Standard follow-up for symptom review and plan adjustment'
          }
        ]
      },
      {
        weekNumber: 7,
        title: 'Advanced Nutrition',
        components: [
          {
            id: 'v3',
            title: 'Advanced Gut Health',
            type: 'video',
            topic: 'diet',
            difficulty: 'advanced',
            duration: '90 min',
            description: 'Deep dive into microbiome and digestive health'
          },
          {
            id: 'supp-2',
            title: 'Gut Healing Protocol',
            type: 'protocol',
            topic: 'supplements',
            difficulty: 'intermediate',
            duration: '30 min',
            description: 'L-glutamine, zinc carnosine, DGL, and digestive enzymes for gut repair'
          }
        ]
      },
      {
        weekNumber: 8,
        title: 'Inflammation Management',
        components: [
          {
            id: 'supp-6',
            title: 'Inflammation Reduction Protocol',
            type: 'protocol',
            topic: 'supplements',
            difficulty: 'intermediate',
            duration: '25 min',
            description: 'Curcumin, omega-3, resveratrol, and SPMs for systemic inflammation'
          }
        ]
      },
      {
        weekNumber: 9,
        title: 'Energy & Vitality',
        components: [
          {
            id: 'supp-7',
            title: 'Mitochondrial Support Protocol',
            type: 'protocol',
            topic: 'supplements',
            difficulty: 'advanced',
            duration: '30 min',
            description: 'CoQ10, PQQ, alpha-lipoic acid, and carnitine for energy production'
          }
        ]
      },
      {
        weekNumber: 10,
        title: 'Sleep & Recovery',
        components: [
          {
            id: 'supp-12',
            title: 'Sleep Support Protocol',
            type: 'protocol',
            topic: 'supplements',
            difficulty: 'beginner',
            duration: '20 min',
            description: 'Magnesium glycinate, L-theanine, melatonin, and glycine for sleep quality'
          }
        ]
      },
      {
        weekNumber: 11,
        title: 'Final Assessment',
        components: [
          {
            id: 'feedback-3',
            title: 'Final Program Assessment Report',
            type: 'form',
            topic: 'patient-care',
            difficulty: 'beginner',
            duration: '25 min',
            description: 'Comprehensive end-of-program evaluation and outcomes measurement'
          }
        ]
      },
      {
        weekNumber: 12,
        title: 'Program Completion & Maintenance',
        components: [
          {
            id: 'visit-7',
            title: 'Follow-Up Visit - 30 min',
            type: 'visit',
            topic: 'patient-care',
            difficulty: 'beginner',
            duration: '30 min',
            description: 'Standard follow-up for symptom review and plan adjustment'
          }
        ]
      }
    ]
  },
  {
    id: 'global-advanced-wellness',
    name: 'Advanced Wellness Program',
    description: 'Comprehensive 12-week advanced wellness program with hormone optimization, metabolic health, and specialized protocols',
    duration: 12,
    isGlobal: true,
    difficulty: 'intermediate',
    category: 'Wellness',
    createdDate: '2024-01-15',
    weeks: [
      {
        weekNumber: 1,
        title: 'Comprehensive Assessment',
        components: [
          {
            id: 'visit-2',
            title: 'Initial Consultation - 90 min',
            type: 'visit',
            topic: 'patient-care',
            difficulty: 'beginner',
            duration: '90 min',
            description: 'Extended initial consultation with detailed assessment'
          },
          {
            id: 'feedback-1',
            title: 'Initial Health Assessment Report',
            type: 'form',
            topic: 'patient-care',
            difficulty: 'beginner',
            duration: '30 min',
            description: 'Comprehensive baseline health assessment and symptom evaluation'
          }
        ]
      },
      {
        weekNumber: 2,
        title: 'Baseline Lab Testing',
        components: [
          {
            id: 'lab-1',
            title: 'Comprehensive Metabolic Panel',
            type: 'panel',
            topic: 'lab-testing',
            difficulty: 'intermediate',
            duration: '30 min',
            description: 'Complete metabolic panel including glucose, electrolytes, and kidney function'
          },
          {
            id: 'lab-4',
            title: 'Thyroid Function Panel',
            type: 'panel',
            topic: 'lab-testing',
            difficulty: 'intermediate',
            duration: '30 min',
            description: 'Complete thyroid assessment including TSH, T3, T4, and antibodies'
          }
        ]
      },
      {
        weekNumber: 3,
        title: 'Nutrition Foundation',
        components: [
          {
            id: 'v2',
            title: 'Nutrition Fundamentals',
            type: 'video',
            topic: 'diet',
            difficulty: 'beginner',
            duration: '60 min',
            description: 'Core principles of nutrition in functional medicine'
          },
          {
            id: 'supp-1',
            title: 'Foundation Protocol',
            type: 'protocol',
            topic: 'supplements',
            difficulty: 'beginner',
            duration: '20 min',
            description: 'Basic multivitamin, omega-3, vitamin D, and probiotic foundation'
          }
        ]
      },
      {
        weekNumber: 4,
        title: 'Report of Findings',
        components: [
          {
            id: 'visit-5',
            title: 'Report of Findings - 60 min',
            type: 'visit',
            topic: 'patient-care',
            difficulty: 'intermediate',
            duration: '60 min',
            description: 'Extended report of findings for complex cases'
          }
        ]
      },
      {
        weekNumber: 5,
        title: 'Gut Health',
        components: [
          {
            id: 'v3',
            title: 'Advanced Gut Health',
            type: 'video',
            topic: 'diet',
            difficulty: 'advanced',
            duration: '90 min',
            description: 'Deep dive into microbiome and digestive health'
          },
          {
            id: 'lab-5',
            title: 'GI-MAP Stool Analysis',
            type: 'panel',
            topic: 'lab-testing',
            difficulty: 'advanced',
            duration: '45 min',
            description: 'Comprehensive gut microbiome and digestive health assessment'
          }
        ]
      },
      {
        weekNumber: 6,
        title: 'Gut Healing',
        components: [
          {
            id: 'supp-2',
            title: 'Gut Healing Protocol',
            type: 'protocol',
            topic: 'supplements',
            difficulty: 'intermediate',
            duration: '30 min',
            description: 'L-glutamine, zinc carnosine, DGL, and digestive enzymes for gut repair'
          }
        ]
      },
      {
        weekNumber: 7,
        title: 'Lifestyle Optimization',
        components: [
          {
            id: 'v4',
            title: 'Lifestyle Medicine Basics',
            type: 'video',
            topic: 'lifestyle',
            difficulty: 'beginner',
            duration: '40 min',
            description: 'Sleep, stress, and movement in patient care'
          },
          {
            id: 'l3',
            title: 'Stress Management Techniques',
            type: 'lesson',
            topic: 'lifestyle',
            difficulty: 'beginner',
            duration: '60 min',
            description: 'Evidence-based stress reduction for patients'
          }
        ]
      },
      {
        weekNumber: 8,
        title: 'Adrenal Support',
        components: [
          {
            id: 'supp-4',
            title: 'Adrenal Support Protocol',
            type: 'protocol',
            topic: 'supplements',
            difficulty: 'intermediate',
            duration: '25 min',
            description: 'Adaptogenic herbs, B-complex, vitamin C, and magnesium for stress response'
          }
        ]
      },
      {
        weekNumber: 9,
        title: 'Mid-Program Assessment',
        components: [
          {
            id: 'feedback-2',
            title: 'Mid-Program Progress Report',
            type: 'form',
            topic: 'patient-care',
            difficulty: 'beginner',
            duration: '20 min',
            description: 'Mid-point evaluation of symptoms, compliance, and treatment response'
          },
          {
            id: 'visit-7',
            title: 'Follow-Up Visit - 30 min',
            type: 'visit',
            topic: 'patient-care',
            difficulty: 'beginner',
            duration: '30 min',
            description: 'Standard follow-up for symptom review and plan adjustment'
          }
        ]
      },
      {
        weekNumber: 10,
        title: 'Metabolic Optimization',
        components: [
          {
            id: 'supp-9',
            title: 'Blood Sugar Balance Protocol',
            type: 'protocol',
            topic: 'supplements',
            difficulty: 'intermediate',
            duration: '25 min',
            description: 'Chromium, berberine, alpha-lipoic acid, and cinnamon for glucose metabolism'
          },
          {
            id: 'supp-7',
            title: 'Mitochondrial Support Protocol',
            type: 'protocol',
            topic: 'supplements',
            difficulty: 'advanced',
            duration: '30 min',
            description: 'CoQ10, PQQ, alpha-lipoic acid, and carnitine for energy production'
          }
        ]
      },
      {
        weekNumber: 11,
        title: 'Cardiovascular Health',
        components: [
          {
            id: 'supp-8',
            title: 'Cardiovascular Support Protocol',
            type: 'protocol',
            topic: 'supplements',
            difficulty: 'intermediate',
            duration: '25 min',
            description: 'CoQ10, magnesium, hawthorn, and bergamot for heart health'
          }
        ]
      },
      {
        weekNumber: 12,
        title: 'Program Completion',
        components: [
          {
            id: 'visit-8',
            title: 'Follow-Up Visit - 45 min',
            type: 'visit',
            topic: 'patient-care',
            difficulty: 'beginner',
            duration: '45 min',
            description: 'Extended follow-up for detailed progress review'
          },
          {
            id: 'feedback-3',
            title: 'Final Program Assessment Report',
            type: 'form',
            topic: 'patient-care',
            difficulty: 'beginner',
            duration: '25 min',
            description: 'Comprehensive end-of-program evaluation and outcomes measurement'
          }
        ]
      }
    ]
  },
  {
    id: 'global-60day-detox',
    name: '60 Day Detox Program',
    description: 'Intensive 8-week detoxification program focusing on liver support, heavy metal chelation, and comprehensive cleansing protocols',
    duration: 8,
    isGlobal: true,
    difficulty: 'advanced',
    category: 'Detox',
    createdDate: '2024-01-15',
    weeks: [
      {
        weekNumber: 1,
        title: 'Detox Introduction & Assessment',
        components: [
          {
            id: 'visit-1',
            title: 'Initial Consultation - 60 min',
            type: 'visit',
            topic: 'patient-care',
            difficulty: 'beginner',
            duration: '60 min',
            description: 'Comprehensive initial patient consultation and health history'
          },
          {
            id: 'feedback-1',
            title: 'Initial Health Assessment Report',
            type: 'form',
            topic: 'patient-care',
            difficulty: 'beginner',
            duration: '30 min',
            description: 'Comprehensive baseline health assessment and symptom evaluation'
          },
          {
            id: 'lab-9',
            title: 'Heavy Metals Panel',
            type: 'panel',
            topic: 'lab-testing',
            difficulty: 'advanced',
            duration: '30 min',
            description: 'Toxic metal burden assessment for detoxification planning'
          }
        ]
      },
      {
        weekNumber: 2,
        title: 'Pre-Detox Preparation',
        components: [
          {
            id: 'v2',
            title: 'Nutrition Fundamentals',
            type: 'video',
            topic: 'diet',
            difficulty: 'beginner',
            duration: '60 min',
            description: 'Core principles of nutrition in functional medicine'
          },
          {
            id: 'l2',
            title: 'Elimination Diet Protocol',
            type: 'lesson',
            topic: 'diet',
            difficulty: 'intermediate',
            duration: '90 min',
            description: 'How to implement and monitor elimination diets'
          }
        ]
      },
      {
        weekNumber: 3,
        title: 'Gut Preparation',
        components: [
          {
            id: 'v3',
            title: 'Advanced Gut Health',
            type: 'video',
            topic: 'diet',
            difficulty: 'advanced',
            duration: '90 min',
            description: 'Deep dive into microbiome and digestive health'
          },
          {
            id: 'supp-2',
            title: 'Gut Healing Protocol',
            type: 'protocol',
            topic: 'supplements',
            difficulty: 'intermediate',
            duration: '30 min',
            description: 'L-glutamine, zinc carnosine, DGL, and digestive enzymes for gut repair'
          }
        ]
      },
      {
        weekNumber: 4,
        title: 'Active Detoxification Phase 1',
        components: [
          {
            id: 'supp-3',
            title: 'Detoxification Support Protocol',
            type: 'protocol',
            topic: 'supplements',
            difficulty: 'advanced',
            duration: '35 min',
            description: 'NAC, glutathione, milk thistle, and methylation support for detox pathways'
          },
          {
            id: 'visit-7',
            title: 'Follow-Up Visit - 30 min',
            type: 'visit',
            topic: 'patient-care',
            difficulty: 'beginner',
            duration: '30 min',
            description: 'Standard follow-up for symptom review and plan adjustment'
          }
        ]
      },
      {
        weekNumber: 5,
        title: 'Active Detoxification Phase 2',
        components: [
          {
            id: 'supp-3',
            title: 'Detoxification Support Protocol',
            type: 'protocol',
            topic: 'supplements',
            difficulty: 'advanced',
            duration: '35 min',
            description: 'NAC, glutathione, milk thistle, and methylation support for detox pathways'
          },
          {
            id: 'supp-6',
            title: 'Inflammation Reduction Protocol',
            type: 'protocol',
            topic: 'supplements',
            difficulty: 'intermediate',
            duration: '25 min',
            description: 'Curcumin, omega-3, resveratrol, and SPMs for systemic inflammation'
          }
        ]
      },
      {
        weekNumber: 6,
        title: 'Mitochondrial Support',
        components: [
          {
            id: 'supp-7',
            title: 'Mitochondrial Support Protocol',
            type: 'protocol',
            topic: 'supplements',
            difficulty: 'advanced',
            duration: '30 min',
            description: 'CoQ10, PQQ, alpha-lipoic acid, and carnitine for energy production'
          },
          {
            id: 'feedback-2',
            title: 'Mid-Program Progress Report',
            type: 'form',
            topic: 'patient-care',
            difficulty: 'beginner',
            duration: '20 min',
            description: 'Mid-point evaluation of symptoms, compliance, and treatment response'
          }
        ]
      },
      {
        weekNumber: 7,
        title: 'Final Detox Phase',
        components: [
          {
            id: 'supp-3',
            title: 'Detoxification Support Protocol',
            type: 'protocol',
            topic: 'supplements',
            difficulty: 'advanced',
            duration: '35 min',
            description: 'NAC, glutathione, milk thistle, and methylation support for detox pathways'
          },
          {
            id: 'lab-9',
            title: 'Heavy Metals Panel',
            type: 'panel',
            topic: 'lab-testing',
            difficulty: 'advanced',
            duration: '30 min',
            description: 'Toxic metal burden assessment for detoxification planning'
          }
        ]
      },
      {
        weekNumber: 8,
        title: 'Completion & Maintenance',
        components: [
          {
            id: 'feedback-3',
            title: 'Final Program Assessment Report',
            type: 'form',
            topic: 'patient-care',
            difficulty: 'beginner',
            duration: '25 min',
            description: 'Comprehensive end-of-program evaluation and outcomes measurement'
          },
          {
            id: 'visit-4',
            title: 'Report of Findings - 45 min',
            type: 'visit',
            topic: 'patient-care',
            difficulty: 'intermediate',
            duration: '45 min',
            description: 'Detailed report of findings with comprehensive treatment discussion'
          }
        ]
      }
    ]
  }
];

// Initialize with empty custom programs array
export const customPrograms: Program[] = [];
