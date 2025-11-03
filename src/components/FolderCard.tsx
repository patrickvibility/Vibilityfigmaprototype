import { useState } from 'react';
import { ComponentFolder, CurriculumComponent } from '../types/curriculum';
import { ModuleCard } from './ModuleCard';
import { ChevronDown, ChevronRight, Folder, Video, BookOpen, FileText, Beaker, Book, Stethoscope, FlaskConical, Pill } from 'lucide-react';

interface FolderCardProps {
  folder: ComponentFolder;
  onPreview?: (component: CurriculumComponent) => void;
}

const typeIcons = {
  video: Video,
  lesson: BookOpen,
  form: FileText,
  resource: Beaker,
  reading: Book,
  visit: Stethoscope,
  panel: FlaskConical,
  protocol: Pill,
};

const difficultyColors = {
  beginner: 'bg-[#10b981]',
  intermediate: 'bg-[#f59e0b]',
  advanced: 'bg-[#ef4444]',
};

export function FolderCard({ folder, onPreview }: FolderCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = typeIcons[folder.type];

  return (
    <div className="bg-white rounded-lg border border-[rgba(93,73,110,0.2)] overflow-hidden">
      {/* Folder Header */}
      <div
        className="p-3 flex items-start gap-3 cursor-pointer hover:bg-[rgba(79,95,237,0.05)] transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-shrink-0 pt-0.5">
          {isExpanded ? (
            <ChevronDown className="w-5 h-5 text-[#4F5FED]" />
          ) : (
            <ChevronRight className="w-5 h-5 text-[#4F5FED]" />
          )}
        </div>
        
        <Folder className="w-5 h-5 text-[#4F5FED] flex-shrink-0 mt-0.5" />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-['Inter',_sans-serif] font-semibold text-[#221b28] text-[15px] leading-tight">
              {folder.title}
            </h3>
            <div className={`w-2 h-2 rounded-full ${difficultyColors[folder.difficulty]} flex-shrink-0 mt-1`} />
          </div>
          
          <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mb-2 line-clamp-2">
            {folder.description}
          </p>
          
          <div className="font-['Inter',_sans-serif] flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1 text-[12px] text-[rgba(34,20,46,0.62)]">
              <Icon className="w-3.5 h-3.5" />
              <span className="capitalize">{folder.type}</span>
            </div>
            <span className="text-[rgba(34,20,46,0.3)]">•</span>
            <span className="text-[12px] text-[rgba(34,20,46,0.62)] capitalize">
              {folder.topic.replace('-', ' ')}
            </span>
            <span className="text-[rgba(34,20,46,0.3)]">•</span>
            <span className="text-[12px] text-[rgba(34,20,46,0.62)]">
              {folder.items.length} variant{folder.items.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </div>

      {/* Folder Contents */}
      {isExpanded && (
        <div className="border-t border-[rgba(93,73,110,0.15)] bg-[rgba(79,95,237,0.02)] p-3 space-y-2">
          {folder.items.map((item) => (
            <div key={item.id} className="ml-8">
              <ModuleCard component={item} isNested onPreview={onPreview} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
