export type ComponentType = 'video' | 'lesson' | 'form' | 'resource' | 'reading' | 'visit' | 'panel' | 'protocol';

export type Topic = 'diet' | 'lifestyle' | 'supplements' | 'lab-testing' | 'patient-care' | 'general';

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export type DietType = 'mediterranean' | 'paleo' | 'keto' | 'plant-based';

export interface CurriculumComponent {
  id: string;
  title: string;
  type: ComponentType;
  topic: Topic;
  difficulty: Difficulty;
  duration: string; // e.g., "30 min", "1 hour"
  description: string;
  dietType?: DietType; // Optional diet variant
  isCustom?: boolean; // For custom modules
  createdDate?: string; // For custom modules
}

export interface ComponentFolder {
  id: string;
  title: string;
  type: ComponentType;
  topic: Topic;
  difficulty: Difficulty;
  description: string;
  items: CurriculumComponent[]; // Variants or sub-items
}

export type LibraryItem = CurriculumComponent | ComponentFolder;

export function isFolder(item: LibraryItem): item is ComponentFolder {
  return 'items' in item;
}

export interface WeekContent {
  weekNumber: number;
  title: string;
  components: CurriculumComponent[];
  resources?: CurriculumComponent[];
}

export interface CurriculumState {
  weeks: WeekContent[];
  curriculumLength: number; // number of weeks
}

export interface Program {
  id: string;
  name: string;
  description: string;
  duration: number; // number of weeks
  isGlobal: boolean;
  difficulty: Difficulty;
  category: string;
  weeks: WeekContent[];
  createdBy?: string;
  createdDate?: string;
}
