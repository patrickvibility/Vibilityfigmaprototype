import { useState } from 'react';
import { useDrop } from 'react-dnd';
import { CurriculumComponent, WeekContent } from '../types/curriculum';
import { Badge } from './ui/badge';
import { X, Video, BookOpen, FileText, FolderOpen, Book, Stethoscope, FlaskConical, Pill, Download, Eye, ChevronLeft, ChevronRight, ClipboardList } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface WeekBoxProps {
  week: WeekContent;
  onDrop: (weekNumber: number, component: CurriculumComponent, section: 'components' | 'resources') => void;
  onRemoveComponent: (weekNumber: number, componentId: string, section: 'components' | 'resources') => void;
  onUpdateTitle: (weekNumber: number, title: string) => void;
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

export function WeekBox({ week, onDrop, onRemoveComponent, onUpdateTitle }: WeekBoxProps) {
  const [previewModule, setPreviewModule] = useState<CurriculumComponent | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  
  const [{ isOver: isOverComponents, canDrop: canDropComponents }, dropComponents] = useDrop(() => ({
    accept: 'component',
    drop: (item: CurriculumComponent) => onDrop(week.weekNumber, item, 'components'),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }), [week.weekNumber]);

  const [{ isOver: isOverResources, canDrop: canDropResources }, dropResources] = useDrop(() => ({
    accept: 'component',
    drop: (item: CurriculumComponent) => onDrop(week.weekNumber, item, 'resources'),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }), [week.weekNumber]);

  const isActiveComponents = isOverComponents && canDropComponents;
  const isActiveResources = isOverResources && canDropResources;

  const handlePreview = (component: CurriculumComponent) => {
    setPreviewModule(component);
    setIsPreviewOpen(true);
    setCurrentCardIndex(0);
  };

  const closePreview = () => {
    setPreviewModule(null);
    setIsPreviewOpen(false);
    setCurrentCardIndex(0);
  };

  const nextCard = () => {
    if (currentCardIndex < moduleCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  // Mock card content for preview based on module type
  const getModuleCards = (module: CurriculumComponent) => {
    if (module.type === 'video') {
      return [
        {
          type: 'video',
          title: module.title,
          content: 'Video player would be displayed here',
        },
        {
          type: 'takeaway',
          title: 'Key Takeaways',
          content: `• Understanding ${module.topic} fundamentals\n• Practical applications in patient care\n• Evidence-based protocols\n• Implementation strategies`,
        },
        {
          type: 'question',
          title: 'Reflection Question',
          content: `How will you apply these ${module.topic} principles in your practice?`,
        },
      ];
    } else if (module.type === 'lesson') {
      return [
        {
          type: 'text',
          title: module.title,
          content: `This lesson covers important aspects of ${module.topic}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        },
        {
          type: 'text',
          title: 'Core Concepts',
          content: `• Fundamental principles\n• Clinical applications\n• Research evidence\n• Patient outcomes`,
        },
        {
          type: 'takeaway',
          title: 'Summary',
          content: 'This lesson provided comprehensive coverage of key concepts and their practical applications in patient care.',
        },
      ];
    } else {
      return [
        {
          type: 'text',
          title: module.title,
          content: module.description || 'Module content would be displayed here.',
        },
      ];
    }
  };

  const moduleCards = previewModule ? getModuleCards(previewModule) : [];

  const renderComponentItem = (component: CurriculumComponent, index: number, section: 'components' | 'resources') => {
    const Icon = iconMap[component.type] || FileText;
    return (
      <div
        key={`week-${week.weekNumber}-${section}-${index}-${component.id}`}
        className="bg-[#fdfaff] border border-[rgba(93,73,110,0.2)] rounded-[14px] p-3 group hover:shadow-sm transition-all"
      >
        <div className="flex items-start gap-2">
          <div className="p-1.5 bg-[rgba(79,95,237,0.08)] rounded-[8px] shrink-0">
            {Icon && <Icon className="w-3.5 h-3.5 text-[#4F5FED]" />}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-['Inter',_sans-serif] font-medium text-[#221b28] text-[14px] mb-0.5">
              {component.title}
            </p>
            <div className="flex flex-wrap gap-1">
              <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                {component.type}
              </Badge>
              <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                {component.duration}
              </Badge>
            </div>
          </div>
          <div className="flex gap-1">
            <button
              onClick={() => handlePreview(component)}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-[#4F5FED]/10 rounded-[8px]"
              title="Preview module"
            >
              <Eye className="w-4 h-4 text-[#4F5FED]" />
            </button>
            <button
              onClick={() => onRemoveComponent(week.weekNumber, component.id, section)}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-50 rounded-[8px]"
            >
              <X className="w-4 h-4 text-red-600" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="bg-white border-2 rounded-[20px] p-6 transition-all border-[rgba(93,73,110,0.2)]"
    >
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-['Inter',_sans-serif] font-medium text-[#4F5FED] text-[13px]">
            Week {week.weekNumber}
          </span>
        </div>
        <input
          type="text"
          value={week.title}
          onChange={(e) => onUpdateTitle(week.weekNumber, e.target.value)}
          className="w-full font-['Inter',_sans-serif] font-semibold text-[#221b28] text-[18px] bg-transparent border-none outline-none focus:ring-2 focus:ring-[#4F5FED] focus:ring-opacity-20 rounded px-2 -mx-2"
          placeholder={`Week ${week.weekNumber} Title`}
        />
      </div>

      {/* Main Components Section */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="w-4 h-4 text-[#4F5FED]" />
          <span className="font-['Inter',_sans-serif] font-medium text-[#4F5FED] text-[12px]">
            CURRICULUM
          </span>
        </div>
        <div
          ref={dropComponents}
          className={`min-h-[150px] space-y-2 rounded-[12px] transition-all ${
            isActiveComponents
              ? 'border-2 border-[#4F5FED] bg-[rgba(79,95,237,0.05)]'
              : canDropComponents
              ? 'border-2 border-dashed border-[rgba(93,73,110,0.3)]'
              : ''
          } ${
            week.components.length === 0
              ? 'flex items-center justify-center border-2 border-dashed border-[rgba(93,73,110,0.2)]'
              : 'p-2'
          }`}
        >
          {week.components.length === 0 ? (
            <p className="text-[rgba(34,20,46,0.4)] text-[13px] text-center">
              Drag lessons, videos, and forms here
            </p>
          ) : (
            week.components.map((component, index) => 
              renderComponentItem(component, index, 'components')
            )
          )}
        </div>
      </div>

      {/* Resources Section */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Download className="w-4 h-4 text-[#4F5FED]" />
          <span className="font-['Inter',_sans-serif] font-medium text-[#4F5FED] text-[12px]">
            RESOURCES
          </span>
        </div>
        <div
          ref={dropResources}
          className={`min-h-[100px] space-y-2 rounded-[12px] transition-all ${
            isActiveResources
              ? 'border-2 border-[#4F5FED] bg-[rgba(79,95,237,0.05)]'
              : canDropResources
              ? 'border-2 border-dashed border-[rgba(93,73,110,0.3)]'
              : ''
          } ${
            (!week.resources || week.resources.length === 0)
              ? 'flex items-center justify-center border-2 border-dashed border-[rgba(93,73,110,0.2)]'
              : 'p-2'
          }`}
        >
          {(!week.resources || week.resources.length === 0) ? (
            <p className="text-[rgba(34,20,46,0.4)] text-[13px] text-center">
              Drag downloadable resources here
            </p>
          ) : (
            week.resources.map((resource, index) => 
              renderComponentItem(resource, index, 'resources')
            )
          )}
        </div>
      </div>

      {/* Preview Modal */}
      <Dialog open={isPreviewOpen} onOpenChange={closePreview}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden flex flex-col p-0">
          <DialogHeader className="p-6 pb-4 border-b border-[rgba(0,0,0,0.1)]">
            <DialogTitle className="font-['Inter',_sans-serif] text-[20px] text-[#221b28]">
              {previewModule?.title}
            </DialogTitle>
            <DialogDescription className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)] mt-1">
              Module Preview • Card {currentCardIndex + 1} of {moduleCards.length}
            </DialogDescription>
          </DialogHeader>

          {/* Card Preview Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {moduleCards.length > 0 && currentCardIndex < moduleCards.length && (
              <div className="space-y-4">
                {moduleCards[currentCardIndex].type === 'video' && (
                  <div className="space-y-4">
                    <div className="w-full aspect-video bg-[#1a1a1a] rounded-lg flex items-center justify-center">
                      <div className="text-center text-white">
                        <Video className="w-16 h-16 mx-auto mb-3 opacity-50" />
                        <p className="font-['Inter',_sans-serif] text-[14px] opacity-70">Video Player</p>
                      </div>
                    </div>
                    <h3 className="font-['Inter',_sans-serif] font-semibold text-[18px] text-[#221b28]">
                      {moduleCards[currentCardIndex].title}
                    </h3>
                  </div>
                )}

                {moduleCards[currentCardIndex].type === 'text' && (
                  <div className="space-y-3">
                    <h3 className="font-['Inter',_sans-serif] font-semibold text-[18px] text-[#221b28]">
                      {moduleCards[currentCardIndex].title}
                    </h3>
                    <div className="font-['Inter',_sans-serif] text-[15px] text-[rgba(34,20,46,0.8)] leading-relaxed whitespace-pre-line">
                      {moduleCards[currentCardIndex].content}
                    </div>
                  </div>
                )}

                {moduleCards[currentCardIndex].type === 'takeaway' && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[rgba(79,95,237,0.1)] flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-[#4F5FED]" />
                      </div>
                      <h3 className="font-['Inter',_sans-serif] font-semibold text-[18px] text-[#221b28]">
                        {moduleCards[currentCardIndex].title}
                      </h3>
                    </div>
                    <div className="bg-[#f8f8fa] rounded-lg p-6">
                      <div className="font-['Inter',_sans-serif] text-[15px] text-[rgba(34,20,46,0.8)] leading-relaxed whitespace-pre-line">
                        {moduleCards[currentCardIndex].content}
                      </div>
                    </div>
                  </div>
                )}

                {moduleCards[currentCardIndex].type === 'question' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[rgba(79,95,237,0.1)] flex items-center justify-center">
                        <ClipboardList className="w-5 h-5 text-[#4F5FED]" />
                      </div>
                      <h3 className="font-['Inter',_sans-serif] font-semibold text-[18px] text-[#221b28]">
                        {moduleCards[currentCardIndex].title}
                      </h3>
                    </div>
                    <p className="font-['Inter',_sans-serif] text-[15px] text-[#221b28] mb-4">
                      {moduleCards[currentCardIndex].content}
                    </p>
                    <div className="space-y-3">
                      <Input 
                        placeholder="Type your answer here..." 
                        className="font-['Inter',_sans-serif]"
                        disabled
                      />
                      <p className="font-['Inter',_sans-serif] text-[12px] text-[rgba(34,20,46,0.5)] italic">
                        Preview mode - interactions disabled
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Navigation Footer */}
          <div className="p-6 pt-4 border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between">
            <Button
              variant="outline"
              onClick={prevCard}
              disabled={currentCardIndex === 0}
              className="font-['Inter',_sans-serif]"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <div className="flex gap-2">
              {moduleCards.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentCardIndex 
                      ? 'bg-[#4F5FED] w-6' 
                      : 'bg-[rgba(79,95,237,0.2)]'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextCard}
              disabled={currentCardIndex === moduleCards.length - 1}
              className="bg-[#4F5FED] hover:bg-[#3D4FDB] text-white font-['Inter',_sans-serif]"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
