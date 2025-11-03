import { LibraryItem } from '../types/curriculum';

export const providerComponents: LibraryItem[] = [
  // My Custom Protocols Folder
  {
    id: 'folder-custom-protocols',
    title: 'My Custom Protocols',
    type: 'lesson',
    topic: 'general',
    difficulty: 'intermediate',
    description: 'Your personalized treatment protocols and workflows',
    items: [
      {
        id: 'custom-p1',
        title: 'My 30-Day Reset Protocol',
        type: 'lesson',
        topic: 'diet',
        difficulty: 'intermediate',
        duration: '10 min',
        description: 'Your custom 30-day protocol combining diet, lifestyle, and supplements'
      },
      {
        id: 'custom-p2',
        title: 'Autoimmune Support Protocol',
        type: 'lesson',
        topic: 'diet',
        difficulty: 'advanced',
        duration: '9 min',
        description: 'Your specialized autoimmune protocol with elimination diet framework'
      },
      {
        id: 'custom-p3',
        title: 'Hormone Balance Approach',
        type: 'lesson',
        topic: 'supplements',
        difficulty: 'advanced',
        duration: '8 min',
        description: 'Your hormone optimization protocol with testing and supplement recommendations'
      }
    ]
  },

  // My Patient Resources Folder
  {
    id: 'folder-my-resources',
    title: 'My Patient Resources',
    type: 'resource',
    topic: 'patient-care',
    difficulty: 'beginner',
    description: 'Custom handouts and resources for your practice',
    items: [
      {
        id: 'custom-r1',
        title: 'Welcome Packet',
        type: 'resource',
        topic: 'patient-care',
        difficulty: 'beginner',
        duration: '10 min',
        description: 'Your practice welcome packet and onboarding materials'
      },
      {
        id: 'custom-r2',
        title: 'Shopping List Template',
        type: 'resource',
        topic: 'diet',
        difficulty: 'beginner',
        duration: '5 min',
        description: 'Your customized shopping list for patients'
      },
      {
        id: 'custom-r3',
        title: 'Lab Prep Instructions',
        type: 'resource',
        topic: 'lab-testing',
        difficulty: 'beginner',
        duration: '8 min',
        description: 'Your custom lab preparation guide for patients'
      }
    ]
  },

  // My Video Content Folder
  {
    id: 'folder-my-videos',
    title: 'My Video Content',
    type: 'video',
    topic: 'general',
    difficulty: 'beginner',
    description: 'Your recorded patient education videos',
    items: [
      {
        id: 'custom-v1',
        title: 'Welcome to My Practice',
        type: 'video',
        topic: 'general',
        difficulty: 'beginner',
        duration: '5 min',
        description: 'Your personalized welcome video for new patients'
      },
      {
        id: 'custom-v2',
        title: 'Understanding Your Lab Results',
        type: 'video',
        topic: 'lab-testing',
        difficulty: 'intermediate',
        duration: '10 min',
        description: 'Your guide to interpreting common functional medicine labs'
      },
      {
        id: 'custom-v3',
        title: 'Kitchen Makeover Guide',
        type: 'video',
        topic: 'diet',
        difficulty: 'beginner',
        duration: '8 min',
        description: 'Your step-by-step pantry and kitchen transformation video'
      }
    ]
  },

  // My Forms & Assessments Folder
  {
    id: 'folder-my-forms',
    title: 'My Forms & Assessments',
    type: 'form',
    topic: 'patient-care',
    difficulty: 'beginner',
    description: 'Custom intake forms and patient assessments',
    items: [
      {
        id: 'custom-f1',
        title: 'Initial Health Questionnaire',
        type: 'form',
        topic: 'patient-care',
        difficulty: 'beginner',
        duration: '10 min',
        description: 'Your comprehensive intake form for new patients'
      },
      {
        id: 'custom-f2',
        title: 'Weekly Progress Check-In',
        type: 'form',
        topic: 'patient-care',
        difficulty: 'beginner',
        duration: '3 min',
        description: 'Your weekly patient progress tracking form'
      },
      {
        id: 'custom-f3',
        title: 'Symptom Tracker',
        type: 'form',
        topic: 'patient-care',
        difficulty: 'beginner',
        duration: '5 min',
        description: 'Your detailed symptom tracking worksheet'
      }
    ]
  },

  // My Supplement Plans Folder
  {
    id: 'folder-my-supplements',
    title: 'My Supplement Plans',
    type: 'resource',
    topic: 'supplements',
    difficulty: 'intermediate',
    description: 'Your curated supplement protocols and recommendations',
    items: [
      {
        id: 'custom-s1',
        title: 'Foundation Protocol',
        type: 'resource',
        topic: 'supplements',
        difficulty: 'beginner',
        duration: '15 min',
        description: 'Your baseline supplement recommendations for all patients'
      },
      {
        id: 'custom-s2',
        title: 'Gut Healing Stack',
        type: 'resource',
        topic: 'supplements',
        difficulty: 'intermediate',
        duration: '20 min',
        description: 'Your gut restoration supplement protocol'
      },
      {
        id: 'custom-s3',
        title: 'Detox Support Protocol',
        type: 'resource',
        topic: 'supplements',
        difficulty: 'advanced',
        duration: '25 min',
        description: 'Your liver and detox pathway support recommendations'
      }
    ]
  }
];
