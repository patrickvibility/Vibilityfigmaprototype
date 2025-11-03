import { useState, useCallback, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ModuleLibrary } from '../components/ModuleLibrary';
import { WeekBox } from '../components/WeekBox';
import { CurriculumComponent, WeekContent } from '../types/curriculum';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';
import { Save, MoreHorizontal, BookTemplate, Video, BookOpen, ClipboardList, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { globalPrograms } from '../data/programs';

export function PlanBuilder() {
  const defaultPlan = globalPrograms[0] || {
    id: 'default',
    name: 'New Plan',
    duration: 8,
    weeks: Array.from({ length: 8 }, (_, i) => ({
      weekNumber: i + 1,
      title: `Week ${i + 1}`,
      components: [],
      resources: [],
    }))
  };

  const [selectedPlanId, setSelectedPlanId] = useState<string>(defaultPlan.id);
  const [planTitle, setPlanTitle] = useState(defaultPlan.name);
  const [curriculumLength, setCurriculumLength] = useState(defaultPlan.duration);
  const [weeks, setWeeks] = useState<WeekContent[]>(JSON.parse(JSON.stringify(defaultPlan.weeks)));
  const [previewModule, setPreviewModule] = useState<CurriculumComponent | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const selectedPlan = globalPrograms.find(p => p.id === selectedPlanId);
    if (selectedPlan) {
      setPlanTitle(selectedPlan.name);
      setCurriculumLength(selectedPlan.duration);
      // Deep clone to avoid reference issues and ensure resources arrays exist
      const clonedWeeks = JSON.parse(JSON.stringify(selectedPlan.weeks)).map((week: WeekContent) => ({
        ...week,
        resources: week.resources || []
      }));
      setWeeks(clonedWeeks);
    }
  }, [selectedPlanId]);

  const handlePlanChange = (planId: string) => {
    setSelectedPlanId(planId);
  };

  const handleCurriculumLengthChange = (newLength: number) => {
    setCurriculumLength(newLength);
    setWeeks((prevWeeks) => {
      if (newLength > prevWeeks.length) {
        const newWeeks = Array.from({ length: newLength - prevWeeks.length }, (_, i) => ({
          weekNumber: prevWeeks.length + i + 1,
          title: `Week ${prevWeeks.length + i + 1}`,
          components: [],
          resources: [],
        }));
        return [...prevWeeks, ...newWeeks];
      } else {
        return prevWeeks.slice(0, newLength);
      }
    });
  };

  const handleDrop = useCallback((weekNumber: number, component: CurriculumComponent, section: 'components' | 'resources') => {
    setWeeks((prevWeeks) =>
      prevWeeks.map((week) =>
        week.weekNumber === weekNumber
          ? { ...week, [section]: [...week[section], component] }
          : week
      )
    );
  }, []);

  const handleRemoveComponent = useCallback((weekNumber: number, componentId: string, section: 'components' | 'resources') => {
    setWeeks((prevWeeks) =>
      prevWeeks.map((week) =>
        week.weekNumber === weekNumber
          ? { ...week, [section]: week[section].filter(c => c.id !== componentId) }
          : week
      )
    );
  }, []);

  const handleUpdateWeekTitle = useCallback((weekNumber: number, newTitle: string) => {
    setWeeks((prevWeeks) =>
      prevWeeks.map((week) =>
        week.weekNumber === weekNumber
          ? { ...week, title: newTitle }
          : week
      )
    );
  }, []);

  const handleSave = () => {
    toast.success('Plan saved successfully!');
  };

  const handlePreviewModule = (module: CurriculumComponent) => {
    setPreviewModule(module);
    setCurrentCardIndex(0);
  };

  const closePreview = () => {
    setPreviewModule(null);
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

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex-1 flex overflow-hidden h-full">
        {/* Left Content Area */}
        <div className="flex-1 overflow-y-auto bg-[#fdfaff] h-full">
          <div className="p-8">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <Input
                    value={planTitle}
                    onChange={(e) => setPlanTitle(e.target.value)}
                    className="font-['Inter',_sans-serif] font-semibold text-[#221b28] tracking-[-0.84px] border-none shadow-none px-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent w-[500px]"
                    style={{ fontSize: '22px' }}
                    placeholder="Enter plan title..."
                  />
                  <div className="bg-[rgba(85,37,126,0.09)] px-3 py-1 rounded-full flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#46087C]" />
                    <span className="font-['Inter',_sans-serif] font-medium text-[#221b28] text-[15px]">
                      Active
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button 
                    onClick={handleSave}
                    className="bg-[#5e09a9] hover:bg-[#4a0787] text-white rounded-[18px] px-4"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" className="rounded-[18px] px-3">
                    <MoreHorizontal className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Template Selector and Curriculum Length */}
              <div className="flex flex-col gap-4 mb-4">
                {/* Plan Template Selector */}
                <div>
                  <label className="font-['Inter',_sans-serif] font-medium text-[#221b28] text-[13px] mb-2 flex items-center gap-2">
                    <BookTemplate className="w-4 h-4 text-[#592784]" />
                    Load from Template
                  </label>
                  <Select value={selectedPlanId} onValueChange={handlePlanChange}>
                    <SelectTrigger className="w-full max-w-md bg-white">
                      <SelectValue placeholder="Select a plan template" />
                    </SelectTrigger>
                    <SelectContent>
                      {globalPrograms && globalPrograms.length > 0 ? (
                        globalPrograms.map((plan) => (
                          <SelectItem key={plan.id} value={plan.id}>
                            <div className="flex flex-col">
                              <span className="font-medium">{plan.name}</span>
                              <span className="text-[11px] text-[rgba(34,20,46,0.5)]">
                                {plan.duration} weeks · {plan.difficulty} · {plan.category}
                              </span>
                            </div>
                          </SelectItem>
                        ))
                      ) : (
                        <SelectItem value="none" disabled>No templates available</SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                </div>

                {/* Curriculum Length Selector */}
                <div className="flex items-center gap-4">
                  <label className="font-['Inter',_sans-serif] font-medium text-[#221b28] text-[15px]">
                    Curriculum Length:
                  </label>
                  <Select
                    value={curriculumLength.toString()}
                    onValueChange={(value) => handleCurriculumLengthChange(parseInt(value))}
                  >
                    <SelectTrigger className="w-[180px] bg-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4">4 Weeks</SelectItem>
                      <SelectItem value="6">6 Weeks</SelectItem>
                      <SelectItem value="8">8 Weeks</SelectItem>
                      <SelectItem value="10">10 Weeks</SelectItem>
                      <SelectItem value="12">12 Weeks</SelectItem>
                      <SelectItem value="16">16 Weeks</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Week Boxes Grid */}
            <div className="flex flex-col gap-6">
              {weeks.map((week) => (
                <WeekBox
                  key={week.weekNumber}
                  week={week}
                  onDrop={handleDrop}
                  onRemoveComponent={handleRemoveComponent}
                  onUpdateTitle={handleUpdateWeekTitle}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar - Component Library */}
        <div className="w-[400px] flex-shrink-0">
          <ModuleLibrary onPreview={handlePreviewModule} />
        </div>
      </div>

      {/* Preview Modal */}
      <Dialog open={!!previewModule} onOpenChange={closePreview}>
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
    </DndProvider>
  );
}
