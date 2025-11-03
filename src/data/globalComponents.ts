import { LibraryItem } from '../types/curriculum';

export const globalComponents: LibraryItem[] = [
  // Foundational Content Folder
  {
    id: 'folder-foundational',
    title: 'Foundational Content',
    type: 'video',
    topic: 'general',
    difficulty: 'beginner',
    description: 'Core functional medicine principles and introduction',
    items: [
      {
        id: 'v1',
        title: 'Introduction to Functional Medicine',
        type: 'video',
        topic: 'general',
        difficulty: 'beginner',
        duration: '8 min',
        description: 'Overview of functional medicine principles and patient-centered care'
      },
      {
        id: 'rd1',
        title: 'The Institute for Functional Medicine Textbook',
        type: 'reading',
        topic: 'general',
        difficulty: 'intermediate',
        duration: '8 hours',
        description: 'Core functional medicine textbook chapters'
      }
    ]
  },

  // Diet & Nutrition Folder
  {
    id: 'folder-diet-nutrition',
    title: 'Diet & Nutrition',
    type: 'lesson',
    topic: 'diet',
    difficulty: 'beginner',
    description: 'Comprehensive nutrition education and diet protocols',
    items: [
      {
        id: 'v2',
        title: 'Nutrition Fundamentals',
        type: 'video',
        topic: 'diet',
        difficulty: 'beginner',
        duration: '10 min',
        description: 'Core principles of nutrition in functional medicine'
      },
      {
        id: 'v3',
        title: 'Advanced Gut Health',
        type: 'video',
        topic: 'diet',
        difficulty: 'advanced',
        duration: '10 min',
        description: 'Deep dive into microbiome and digestive health'
      },
      {
        id: 'l2',
        title: 'Elimination Diet Protocol',
        type: 'lesson',
        topic: 'diet',
        difficulty: 'intermediate',
        duration: '8 min',
        description: 'How to implement and monitor elimination diets'
      },
      {
        id: 'f2',
        title: 'Food Diary Template',
        type: 'form',
        topic: 'diet',
        difficulty: 'beginner',
        duration: '10 min',
        description: 'Daily food and symptom tracking form'
      },
      {
        id: 'rd2',
        title: 'Anti-Inflammatory Diet Research',
        type: 'reading',
        topic: 'diet',
        difficulty: 'advanced',
        duration: '2 hours',
        description: 'Latest research on anti-inflammatory nutrition'
      }
    ]
  },

  // Week 1 Transitions Folder
  {
    id: 'folder-week1-transitions',
    title: 'Week 1 Transitions',
    type: 'lesson',
    topic: 'diet',
    difficulty: 'beginner',
    description: 'Transitioning patients to therapeutic diets - 4 diet variants',
    items: [
      {
        id: 'l-w1t-mediterranean',
        title: 'Week 1 Transitions - Mediterranean Diet',
        type: 'lesson',
        topic: 'diet',
        difficulty: 'beginner',
        duration: '7 min',
        description: 'Mediterranean diet transition protocol with meal plans and patient education',
        dietType: 'mediterranean'
      },
      {
        id: 'l-w1t-paleo',
        title: 'Week 1 Transitions - Paleo Diet',
        type: 'lesson',
        topic: 'diet',
        difficulty: 'beginner',
        duration: '7 min',
        description: 'Paleo diet transition protocol with meal plans and patient education',
        dietType: 'paleo'
      },
      {
        id: 'l-w1t-keto',
        title: 'Week 1 Transitions - Ketogenic Diet',
        type: 'lesson',
        topic: 'diet',
        difficulty: 'intermediate',
        duration: '8 min',
        description: 'Ketogenic diet transition protocol with meal plans and patient education',
        dietType: 'keto'
      },
      {
        id: 'l-w1t-plant-based',
        title: 'Week 1 Transitions - Plant-Based Diet',
        type: 'lesson',
        topic: 'diet',
        difficulty: 'beginner',
        duration: '7 min',
        description: 'Plant-based diet transition protocol with meal plans and patient education',
        dietType: 'plant-based'
      }
    ]
  },

  // Lifestyle Medicine Folder
  {
    id: 'folder-lifestyle',
    title: 'Lifestyle Medicine',
    type: 'video',
    topic: 'lifestyle',
    difficulty: 'beginner',
    description: 'Sleep, stress, and movement protocols',
    items: [
      {
        id: 'v4',
        title: 'Lifestyle Medicine Basics',
        type: 'video',
        topic: 'lifestyle',
        difficulty: 'beginner',
        duration: '9 min',
        description: 'Sleep, stress, and movement in patient care'
      },
      {
        id: 'l3',
        title: 'Stress Management Techniques',
        type: 'lesson',
        topic: 'lifestyle',
        difficulty: 'beginner',
        duration: '10 min',
        description: 'Evidence-based stress reduction for patients'
      },
      {
        id: 'rd3',
        title: 'Circadian Rhythm & Health',
        type: 'reading',
        topic: 'lifestyle',
        difficulty: 'intermediate',
        duration: '90 min',
        description: 'Scientific literature on sleep and health outcomes'
      }
    ]
  },

  // Patient Care Folder
  {
    id: 'folder-patient-care',
    title: 'Patient Care',
    type: 'lesson',
    topic: 'patient-care',
    difficulty: 'beginner',
    description: 'Assessment, intake, and patient education resources',
    items: [
      {
        id: 'l1',
        title: 'Patient Assessment Framework',
        type: 'lesson',
        topic: 'patient-care',
        difficulty: 'intermediate',
        duration: '10 min',
        description: 'Comprehensive patient intake and assessment methods'
      },
      {
        id: 'f1',
        title: 'Patient Intake Form',
        type: 'form',
        topic: 'patient-care',
        difficulty: 'beginner',
        duration: '5 min',
        description: 'Initial patient health history questionnaire'
      },
      {
        id: 'r3',
        title: 'Patient Handout Library',
        type: 'resource',
        topic: 'patient-care',
        difficulty: 'beginner',
        duration: '20 min',
        description: 'Educational materials for patients'
      }
    ]
  },

  // Lab Testing Folder
  {
    id: 'folder-lab-testing',
    title: 'Lab Testing',
    type: 'panel',
    topic: 'lab-testing',
    difficulty: 'advanced',
    description: 'Comprehensive functional medicine lab testing protocols',
    items: [
      {
        id: 'r1',
        title: 'Lab Testing Guide',
        type: 'resource',
        topic: 'lab-testing',
        difficulty: 'advanced',
        duration: '30 min',
        description: 'Comprehensive guide to functional medicine lab tests'
      },
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
        id: 'lab-2',
        title: 'Complete Blood Count (CBC)',
        type: 'panel',
        topic: 'lab-testing',
        difficulty: 'beginner',
        duration: '20 min',
        description: 'Full blood count analysis for general health screening'
      },
      {
        id: 'lab-3',
        title: 'Lipid Panel',
        type: 'panel',
        topic: 'lab-testing',
        difficulty: 'intermediate',
        duration: '25 min',
        description: 'Cardiovascular risk assessment through cholesterol and triglyceride levels'
      },
      {
        id: 'lab-4',
        title: 'Thyroid Function Panel',
        type: 'panel',
        topic: 'lab-testing',
        difficulty: 'intermediate',
        duration: '30 min',
        description: 'Complete thyroid assessment including TSH, T3, T4, and antibodies'
      },
      {
        id: 'lab-5',
        title: 'GI-MAP Stool Analysis',
        type: 'panel',
        topic: 'lab-testing',
        difficulty: 'advanced',
        duration: '45 min',
        description: 'Comprehensive gut microbiome and digestive health assessment'
      },
      {
        id: 'lab-6',
        title: 'DUTCH Hormone Panel',
        type: 'panel',
        topic: 'lab-testing',
        difficulty: 'advanced',
        duration: '40 min',
        description: 'Complete hormone analysis including sex hormones and cortisol patterns'
      },
      {
        id: 'lab-7',
        title: 'Organic Acids Test',
        type: 'panel',
        topic: 'lab-testing',
        difficulty: 'advanced',
        duration: '35 min',
        description: 'Metabolic function and nutritional status assessment'
      },
      {
        id: 'lab-8',
        title: 'Food Sensitivity Panel',
        type: 'panel',
        topic: 'lab-testing',
        difficulty: 'intermediate',
        duration: '30 min',
        description: 'IgG and IgA food sensitivity testing for common allergens'
      },
      {
        id: 'lab-9',
        title: 'Heavy Metals Panel',
        type: 'panel',
        topic: 'lab-testing',
        difficulty: 'advanced',
        duration: '30 min',
        description: 'Toxic metal burden assessment for detoxification planning'
      },
      {
        id: 'lab-10',
        title: 'Vitamin D Panel',
        type: 'panel',
        topic: 'lab-testing',
        difficulty: 'beginner',
        duration: '15 min',
        description: '25-OH Vitamin D levels for immune and bone health'
      },
      {
        id: 'lab-11',
        title: 'Micronutrient Panel',
        type: 'panel',
        topic: 'lab-testing',
        difficulty: 'intermediate',
        duration: '35 min',
        description: 'Comprehensive vitamin and mineral status assessment'
      }
    ]
  },

  // Visits Folder
  {
    id: 'folder-visits',
    title: 'Visits',
    type: 'visit',
    topic: 'patient-care',
    difficulty: 'beginner',
    description: 'Patient visit templates and appointment schedules',
    items: [
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
        id: 'visit-2',
        title: 'Initial Consultation - 90 min',
        type: 'visit',
        topic: 'patient-care',
        difficulty: 'beginner',
        duration: '90 min',
        description: 'Extended initial consultation with detailed assessment'
      },
      {
        id: 'visit-3',
        title: 'Report of Findings - 30 min',
        type: 'visit',
        topic: 'patient-care',
        difficulty: 'intermediate',
        duration: '30 min',
        description: 'Review lab results and present treatment plan'
      },
      {
        id: 'visit-4',
        title: 'Report of Findings - 45 min',
        type: 'visit',
        topic: 'patient-care',
        difficulty: 'intermediate',
        duration: '45 min',
        description: 'Detailed report of findings with comprehensive treatment discussion'
      },
      {
        id: 'visit-5',
        title: 'Report of Findings - 60 min',
        type: 'visit',
        topic: 'patient-care',
        difficulty: 'intermediate',
        duration: '60 min',
        description: 'Extended report of findings for complex cases'
      },
      {
        id: 'visit-6',
        title: 'Follow-Up Visit - 15 min',
        type: 'visit',
        topic: 'patient-care',
        difficulty: 'beginner',
        duration: '15 min',
        description: 'Brief check-in and progress monitoring'
      },
      {
        id: 'visit-7',
        title: 'Follow-Up Visit - 30 min',
        type: 'visit',
        topic: 'patient-care',
        difficulty: 'beginner',
        duration: '30 min',
        description: 'Standard follow-up for symptom review and plan adjustment'
      },
      {
        id: 'visit-8',
        title: 'Follow-Up Visit - 45 min',
        type: 'visit',
        topic: 'patient-care',
        difficulty: 'beginner',
        duration: '45 min',
        description: 'Extended follow-up for detailed progress review'
      }
    ]
  },

  // Form Feedback Folder
  {
    id: 'folder-form-feedback',
    title: 'Form Feedback',
    type: 'form',
    topic: 'patient-care',
    difficulty: 'beginner',
    description: 'Patient assessment forms and progress tracking tools',
    items: [
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
        id: 'feedback-2',
        title: 'Mid-Program Progress Report',
        type: 'form',
        topic: 'patient-care',
        difficulty: 'beginner',
        duration: '20 min',
        description: 'Mid-point evaluation of symptoms, compliance, and treatment response'
      },
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
        id: 'feedback-4',
        title: 'Nutrition Module Progress Report',
        type: 'form',
        topic: 'patient-care',
        difficulty: 'beginner',
        duration: '5 min',
        description: 'Progress tracking for nutrition and dietary intervention module'
      },
      {
        id: 'feedback-5',
        title: 'Lifestyle Module Progress Report',
        type: 'form',
        topic: 'patient-care',
        difficulty: 'beginner',
        duration: '5 min',
        description: 'Progress tracking for sleep, stress, and movement interventions'
      },
      {
        id: 'feedback-6',
        title: 'Supplement Module Progress Report',
        type: 'form',
        topic: 'patient-care',
        difficulty: 'beginner',
        duration: '5 min',
        description: 'Compliance and response tracking for supplement protocols'
      },
      {
        id: 'feedback-7',
        title: 'Gut Health Module Progress Report',
        type: 'form',
        topic: 'patient-care',
        difficulty: 'beginner',
        duration: '5 min',
        description: 'Digestive symptom tracking and gut health intervention response'
      },
      {
        id: 'feedback-8',
        title: 'MSQ (Medical Symptoms Questionnaire)',
        type: 'form',
        topic: 'patient-care',
        difficulty: 'beginner',
        duration: '20 min',
        description: 'Comprehensive symptom burden assessment across all body systems'
      },
      {
        id: 'feedback-9',
        title: 'PROMIS-29 Health Profile',
        type: 'form',
        topic: 'patient-care',
        difficulty: 'beginner',
        duration: '10 min',
        description: 'Standardized quality of life and functional status assessment'
      }
    ]
  },

  // Supplements Folder
  {
    id: 'folder-supplements',
    title: 'Supplements',
    type: 'protocol',
    topic: 'supplements',
    difficulty: 'intermediate',
    description: 'Evidence-based supplement protocols and recommendations',
    items: [
      {
        id: 'r2',
        title: 'Supplement Protocols Guide',
        type: 'resource',
        topic: 'supplements',
        difficulty: 'intermediate',
        duration: '45 min',
        description: 'Evidence-based supplement recommendations and guidelines'
      },
      {
        id: 'supp-1',
        title: 'Foundation Protocol',
        type: 'protocol',
        topic: 'supplements',
        difficulty: 'beginner',
        duration: '20 min',
        description: 'Basic multivitamin, omega-3, vitamin D, and probiotic foundation'
      },
      {
        id: 'supp-2',
        title: 'Gut Healing Protocol',
        type: 'protocol',
        topic: 'supplements',
        difficulty: 'intermediate',
        duration: '30 min',
        description: 'L-glutamine, zinc carnosine, DGL, and digestive enzymes for gut repair'
      },
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
        id: 'supp-4',
        title: 'Adrenal Support Protocol',
        type: 'protocol',
        topic: 'supplements',
        difficulty: 'intermediate',
        duration: '25 min',
        description: 'Adaptogenic herbs, B-complex, vitamin C, and magnesium for stress response'
      },
      {
        id: 'supp-5',
        title: 'Thyroid Support Protocol',
        type: 'protocol',
        topic: 'supplements',
        difficulty: 'intermediate',
        duration: '30 min',
        description: 'Selenium, zinc, iodine, and tyrosine for optimal thyroid function'
      },
      {
        id: 'supp-6',
        title: 'Inflammation Reduction Protocol',
        type: 'protocol',
        topic: 'supplements',
        difficulty: 'intermediate',
        duration: '25 min',
        description: 'Curcumin, omega-3, resveratrol, and SPMs for systemic inflammation'
      },
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
        id: 'supp-8',
        title: 'Cardiovascular Support Protocol',
        type: 'protocol',
        topic: 'supplements',
        difficulty: 'intermediate',
        duration: '25 min',
        description: 'CoQ10, magnesium, hawthorn, and bergamot for heart health'
      },
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
        id: 'supp-10',
        title: 'Immune Support Protocol',
        type: 'protocol',
        topic: 'supplements',
        difficulty: 'beginner',
        duration: '20 min',
        description: 'Vitamin C, zinc, vitamin D, and elderberry for immune function'
      },
      {
        id: 'supp-11',
        title: 'Brain Health Protocol',
        type: 'protocol',
        topic: 'supplements',
        difficulty: 'intermediate',
        duration: '30 min',
        description: 'Omega-3 DHA, phosphatidylserine, lion\'s mane, and B-vitamins for cognitive support'
      },
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

  // Resources Folder
  {
    id: 'folder-resources',
    title: 'Resources',
    type: 'resource',
    topic: 'general',
    difficulty: 'beginner',
    description: 'Downloadable guides, handouts, and reference materials',
    items: [
      {
        id: 'res-1',
        title: 'Functional Medicine Overview Guide',
        type: 'resource',
        topic: 'general',
        difficulty: 'beginner',
        duration: '15 min',
        description: 'Patient-friendly introduction to functional medicine principles and approach'
      },
      {
        id: 'res-2',
        title: 'Program Welcome Packet',
        type: 'resource',
        topic: 'general',
        difficulty: 'beginner',
        duration: '10 min',
        description: 'Getting started guide with program overview and expectations'
      },
      {
        id: 'res-3',
        title: 'Meal Planning Template',
        type: 'resource',
        topic: 'diet',
        difficulty: 'beginner',
        duration: '5 min',
        description: 'Weekly meal planning worksheet with shopping list'
      },
      {
        id: 'res-4',
        title: 'Food Reintroduction Guide',
        type: 'resource',
        topic: 'diet',
        difficulty: 'intermediate',
        duration: '20 min',
        description: 'Step-by-step guide for reintroducing foods after elimination diet'
      },
      {
        id: 'res-5',
        title: 'Anti-Inflammatory Foods Chart',
        type: 'resource',
        topic: 'diet',
        difficulty: 'beginner',
        duration: '5 min',
        description: 'Visual reference guide for anti-inflammatory food choices'
      },
      {
        id: 'res-6',
        title: 'Supplement Tracking Sheet',
        type: 'resource',
        topic: 'supplements',
        difficulty: 'beginner',
        duration: '5 min',
        description: 'Daily supplement schedule and compliance tracker'
      },
      {
        id: 'res-7',
        title: 'Lab Preparation Instructions',
        type: 'resource',
        topic: 'lab-testing',
        difficulty: 'beginner',
        duration: '10 min',
        description: 'How to prepare for various functional medicine lab tests'
      },
      {
        id: 'res-8',
        title: 'Understanding Your Lab Results',
        type: 'resource',
        topic: 'lab-testing',
        difficulty: 'intermediate',
        duration: '30 min',
        description: 'Patient guide to interpreting common functional medicine lab markers'
      },
      {
        id: 'res-9',
        title: 'Stress Reduction Techniques',
        type: 'resource',
        topic: 'lifestyle',
        difficulty: 'beginner',
        duration: '15 min',
        description: 'Practical exercises for managing stress and improving resilience'
      },
      {
        id: 'res-10',
        title: 'Sleep Hygiene Guide',
        type: 'resource',
        topic: 'lifestyle',
        difficulty: 'beginner',
        duration: '10 min',
        description: 'Evidence-based strategies for improving sleep quality'
      },
      {
        id: 'res-11',
        title: 'Movement & Exercise Guidelines',
        type: 'resource',
        topic: 'lifestyle',
        difficulty: 'beginner',
        duration: '15 min',
        description: 'Personalized exercise recommendations based on health status'
      },
      {
        id: 'res-12',
        title: 'Gut Health Food Guide',
        type: 'resource',
        topic: 'diet',
        difficulty: 'intermediate',
        duration: '20 min',
        description: 'Foods to support gut healing and microbiome diversity'
      },
      {
        id: 'res-13',
        title: 'Symptom Tracking Journal',
        type: 'resource',
        topic: 'patient-care',
        difficulty: 'beginner',
        duration: '5 min',
        description: 'Daily symptom and wellness journal template'
      },
      {
        id: 'res-14',
        title: 'Detox Support Guide',
        type: 'resource',
        topic: 'general',
        difficulty: 'intermediate',
        duration: '25 min',
        description: 'Supporting your body\'s natural detoxification pathways'
      },
      {
        id: 'res-15',
        title: 'Mindfulness & Meditation Starter',
        type: 'resource',
        topic: 'lifestyle',
        difficulty: 'beginner',
        duration: '15 min',
        description: 'Introduction to mindfulness practices for health and wellness'
      }
    ]
  }
];
