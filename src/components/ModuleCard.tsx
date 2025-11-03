import { useDrag } from 'react-dnd';
import { CurriculumComponent } from '../types/curriculum';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Video, BookOpen, FileText, FolderOpen, Book, Stethoscope, FlaskConical, Pill, Eye } from 'lucide-react';

interface ModuleCardProps {
  component: CurriculumComponent;
  isNested?: boolean;
  onPreview?: (component: CurriculumComponent) => void;
}

const iconMap = {
  video: Video,
  lesson: BookOpen,
  form: FileText,
  resource: FolderOpen,
  reading: Book,
  visit: Stethoscope,
  panel: FlaskConical,
  protocol: Pill,
};

const typeColorMap = {
  video: 'bg-purple-100 text-purple-700',
  lesson: 'bg-blue-100 text-blue-700',
  form: 'bg-green-100 text-green-700',
  resource: 'bg-orange-100 text-orange-700',
  reading: 'bg-pink-100 text-pink-700',
  visit: 'bg-teal-100 text-teal-700',
  panel: 'bg-indigo-100 text-indigo-700',
  protocol: 'bg-rose-100 text-rose-700',
};

const dietTypeLabels = {
  mediterranean: 'Mediterranean',
  paleo: 'Paleo',
  keto: 'Ketogenic',
  'plant-based': 'Plant-Based',
};

export function ModuleCard({ component, isNested = false, onPreview }: ModuleCardProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'component',
    item: component,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const Icon = iconMap[component.type];

  const handlePreviewClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onPreview?.(component);
  };

  return (
    <div
      ref={drag}
      className={`bg-white border border-[rgba(93,73,110,0.2)] rounded-[18px] p-4 cursor-move transition-all hover:shadow-md ${
        isDragging ? 'opacity-50' : 'opacity-100'
      } ${isNested ? 'text-[14px]' : ''}`}
    >
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-[12px] ${typeColorMap[component.type]}`}>
          <Icon className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-['Inter',_sans-serif] font-medium text-[#221b28] mb-1">
            {component.title}
          </p>
          <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mb-2 line-clamp-2">
            {component.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="secondary" className="text-[11px] px-2 py-0.5">
              {component.type}
            </Badge>
            {component.dietType && (
              <Badge className="text-[11px] px-2 py-0.5 bg-[#4F5FED] hover:bg-[#3D4ED9]">
                {dietTypeLabels[component.dietType]}
              </Badge>
            )}
            <Badge variant="outline" className="text-[11px] px-2 py-0.5">
              {component.topic}
            </Badge>
            <Badge variant="outline" className="text-[11px] px-2 py-0.5">
              {component.duration}
            </Badge>
          </div>
        </div>
        {onPreview && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handlePreviewClick}
            className="p-1 h-auto hover:bg-[rgba(79,95,237,0.1)] text-[#4F5FED]"
          >
            <Eye className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
