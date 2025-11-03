import { LibraryItem } from '../types/curriculum';

export const mockComponents: LibraryItem[] = [
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
    type: 'resource',
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
      }
    ]
  },

  // Supplements Folder
  {
    id: 'folder-supplements',
    title: 'Supplements',
    type: 'resource',
    topic: 'supplements',
    difficulty: 'intermediate',
    description: 'Evidence-based supplement protocols and recommendations',
    items: [
      {
        id: 'r2',
        title: 'Supplement Protocols',
        type: 'resource',
        topic: 'supplements',
        difficulty: 'intermediate',
        duration: '45 min',
        description: 'Evidence-based supplement recommendations'
      }
    ]
  }
];
