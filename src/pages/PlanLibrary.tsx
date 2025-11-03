import { useState } from 'react';
import { Program } from '../types/curriculum';
import { globalPrograms, customPrograms as initialCustomPrograms } from '../data/programs';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Input } from '../components/ui/input';
import { 
  Search, 
  Globe, 
  User, 
  Clock, 
  TrendingUp, 
  GitBranch, 
  Trash2,
  Calendar,
  Award,
  Eye,
  Video,
  BookOpen,
  FileText,
  FolderOpen,
  Book,
  Stethoscope,
  FlaskConical,
  Pill,
  Download,
  ChevronLeft,
  ChevronRight,
  ClipboardList
} from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../components/ui/alert-dialog';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';
import { CurriculumComponent } from '../types/curriculum';

export function PlanLibrary() {
  const [activeLibrary, setActiveLibrary] = useState<'global' | 'custom'>('global');
  const [searchQuery, setSearchQuery] = useState('');
  const [customPlans, setCustomPlans] = useState<Program[]>(initialCustomPrograms);
  const [planToDelete, setPlanToDelete] = useState<Program | null>(null);
  const [previewPlan, setPreviewPlan] = useState<Program | null>(null);
  const [previewModule, setPreviewModule] = useState<CurriculumComponent | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const currentPlans = activeLibrary === 'global' ? globalPrograms : customPlans;

  const filteredPlans = currentPlans.filter((plan) => {
    const matchesSearch = plan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         plan.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         plan.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const handleBranchPlan = (plan: Program) => {
    const branchedPlan: Program = {
      ...plan,
      id: `custom-${Date.now()}`,
      name: `${plan.name} (Custom)`,
      isGlobal: false,
      createdBy: 'Current User',
      createdDate: new Date().toISOString().split('T')[0],
    };
    setCustomPlans([...customPlans, branchedPlan]);
    setActiveLibrary('custom');
  };

  const handleDeletePlan = (plan: Program) => {
    setCustomPlans(customPlans.filter(p => p.id !== plan.id));
    setPlanToDelete(null);
  };

  const difficultyColors = {
    beginner: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    intermediate: 'bg-amber-100 text-amber-700 border-amber-200',
    advanced: 'bg-rose-100 text-rose-700 border-rose-200',
  };

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

  const handleModulePreview = (module: CurriculumComponent) => {
    setPreviewModule(module);
    setCurrentCardIndex(0);
  };

  const closeModulePreview = () => {
    setPreviewModule(null);
    setCurrentCardIndex(0);
  };

  const nextCard = () => {
    const moduleCards = previewModule ? getModuleCards(previewModule) : [];
    if (currentCardIndex < moduleCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const getModuleCards = (module: CurriculumComponent) => {
    if (module.type === 'lesson') {
      return [
        {
          type: 'video',
          title: 'Introduction to ' + module.title,
        },
        {
          type: 'text',
          title: 'Core Concepts',
          content: 'This section covers the fundamental principles and methodology that form the foundation of this lesson.',
        },
        {
          type: 'question',
          title: 'Knowledge Check',
          content: 'Based on what you\'ve learned, how would you apply these concepts in your practice?',
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
    <div className="min-h-screen bg-gradient-to-br from-[#fdfaff] via-[#f8f4fc] to-[#fdfaff] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-['Inter',_sans-serif] font-semibold text-[22px] text-[#221b28] mb-2">
            Plan Library
          </h1>
          <p className="text-[rgba(34,20,46,0.62)] text-[16px]">
            Browse and manage your functional medicine plan templates
          </p>
        </div>

        {/* Library Tabs & Search */}
        <div className="mb-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <Tabs 
            value={activeLibrary} 
            onValueChange={(value) => setActiveLibrary(value as 'global' | 'custom')}
            className="w-full md:w-auto"
          >
            <TabsList className="grid w-full md:w-[400px] grid-cols-2">
              <TabsTrigger value="global" className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Global Plans
              </TabsTrigger>
              <TabsTrigger value="custom" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                My Custom Plans ({customPlans.length})
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[rgba(34,20,46,0.4)] w-4 h-4" />
            <Input
              type="text"
              placeholder="Search plans..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Plans Grid */}
        {filteredPlans.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-[rgba(34,20,46,0.62)] text-[18px]">
              {searchQuery ? 'No plans found matching your search.' : 
               activeLibrary === 'custom' ? 'No custom plans yet. Branch a global plan to get started.' :
               'No plans available.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredPlans.map((plan) => (
              <Card key={plan.id} className="p-6 hover:shadow-lg transition-all border-[rgba(93,73,110,0.2)] bg-white">
                {/* Plan Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-['Inter',_sans-serif] font-semibold text-[#221b28] text-[18px] mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge className={`text-[11px] capitalize ${difficultyColors[plan.difficulty]}`}>
                        {plan.difficulty}
                      </Badge>
                      <Badge variant="outline" className="text-[11px]">
                        {plan.category}
                      </Badge>
                      {plan.isGlobal && (
                        <Badge variant="secondary" className="text-[11px] flex items-center gap-1">
                          <Globe className="w-3 h-3" />
                          Global
                        </Badge>
                      )}
                    </div>
                  </div>
                  {!plan.isGlobal && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setPlanToDelete(plan)}
                      className="text-rose-600 hover:text-rose-700 hover:bg-rose-50 ml-2"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>

                {/* Description */}
                <p className="text-[14px] text-[rgba(34,20,46,0.62)] mb-4 line-clamp-3">
                  {plan.description}
                </p>

                {/* Plan Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-[rgba(93,73,110,0.1)]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#592784]" />
                    <div>
                      <p className="text-[11px] text-[rgba(34,20,46,0.5)]">Duration</p>
                      <p className="text-[13px] font-medium text-[#221b28]">{plan.duration} weeks</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#592784]" />
                    <div>
                      <p className="text-[11px] text-[rgba(34,20,46,0.5)]">Components</p>
                      <p className="text-[13px] font-medium text-[#221b28]">
                        {plan.weeks.reduce((acc, week) => acc + week.components.length, 0)} items
                      </p>
                    </div>
                  </div>
                </div>

                {/* Week Preview */}
                <div className="mb-4">
                  <p className="text-[12px] text-[rgba(34,20,46,0.5)] mb-2 flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    Plan Highlights
                  </p>
                  <div className="space-y-1">
                    {plan.weeks.slice(0, 3).map((week) => (
                      <div key={week.weekNumber} className="text-[12px] text-[rgba(34,20,46,0.62)]">
                        <span className="font-medium">Week {week.weekNumber}:</span> {week.title}
                      </div>
                    ))}
                    {plan.weeks.length > 3 && (
                      <p className="text-[11px] text-[rgba(34,20,46,0.4)] italic">
                        +{plan.weeks.length - 3} more weeks...
                      </p>
                    )}
                  </div>
                </div>

                {/* Meta Info */}
                {!plan.isGlobal && plan.createdDate && (
                  <div className="mb-4 flex items-center gap-2 text-[11px] text-[rgba(34,20,46,0.5)]">
                    <Calendar className="w-3 h-3" />
                    Created {new Date(plan.createdDate).toLocaleDateString()}
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    className="flex-1 bg-[#592784] hover:bg-[#46087C] text-white"
                    onClick={() => {
                      // TODO: Navigate to Plan Builder with this plan loaded
                      console.log('Open in builder:', plan.id);
                    }}
                  >
                    Open in Builder
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setPreviewPlan(plan)}
                    className="border-[#592784] text-[#592784] hover:bg-[rgba(89,39,132,0.05)]"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                  {plan.isGlobal && (
                    <Button
                      variant="outline"
                      onClick={() => handleBranchPlan(plan)}
                      className="border-[#592784] text-[#592784] hover:bg-[rgba(89,39,132,0.05)]"
                    >
                      <GitBranch className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!planToDelete} onOpenChange={() => setPlanToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Custom Plan</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete "{planToDelete?.name}"? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => planToDelete && handleDeletePlan(planToDelete)}
              className="bg-rose-600 hover:bg-rose-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Plan Preview Modal */}
      <Dialog open={!!previewPlan} onOpenChange={() => setPreviewPlan(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden flex flex-col p-0">
          <DialogHeader className="p-6 pb-4 pr-14 border-b border-[rgba(0,0,0,0.1)] flex-shrink-0">
            <div className="flex flex-col gap-3">
              <div>
                <DialogTitle className="font-['Inter',_sans-serif] text-[24px] text-[#221b28] mb-2">
                  {previewPlan?.name}
                </DialogTitle>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className={`text-[11px] capitalize ${previewPlan && difficultyColors[previewPlan.difficulty]}`}>
                    {previewPlan?.difficulty}
                  </Badge>
                  <Badge variant="outline" className="text-[11px]">
                    {previewPlan?.category}
                  </Badge>
                </div>
                <DialogDescription className="font-['Inter',_sans-serif] text-[14px] text-[rgba(34,20,46,0.62)]">
                  {previewPlan?.description}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          {/* Plan Journey Content */}
          <div className="flex-1 overflow-y-auto p-6" style={{ maxHeight: 'calc(90vh - 200px)' }}>
            {previewPlan && (
              <div className="space-y-6">
                {/* Plan Overview */}
                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-[rgba(0,0,0,0.1)]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[rgba(79,95,237,0.1)] flex items-center justify-center">
                      <Clock className="w-6 h-6 text-[#4F5FED]" />
                    </div>
                    <div>
                      <p className="text-[12px] text-[rgba(34,20,46,0.5)]">Duration</p>
                      <p className="font-['Inter',_sans-serif] font-semibold text-[16px] text-[#221b28]">
                        {previewPlan.duration} Weeks
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[rgba(79,95,237,0.1)] flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-[#4F5FED]" />
                    </div>
                    <div>
                      <p className="text-[12px] text-[rgba(34,20,46,0.5)]">Curriculum Modules</p>
                      <p className="font-['Inter',_sans-serif] font-semibold text-[16px] text-[#221b28]">
                        {previewPlan.weeks.reduce((acc, week) => acc + week.components.length, 0)} Items
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[rgba(79,95,237,0.1)] flex items-center justify-center">
                      <Download className="w-6 h-6 text-[#4F5FED]" />
                    </div>
                    <div>
                      <p className="text-[12px] text-[rgba(34,20,46,0.5)]">Resources</p>
                      <p className="font-['Inter',_sans-serif] font-semibold text-[16px] text-[#221b28]">
                        {previewPlan.weeks.reduce((acc, week) => acc + (week.resources?.length || 0), 0)} Items
                      </p>
                    </div>
                  </div>
                </div>

                {/* Week-by-Week Journey */}
                <div className="space-y-6">
                  <h3 className="font-['Inter',_sans-serif] font-semibold text-[18px] text-[#221b28] flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#592784]" />
                    Plan Journey
                  </h3>
                  
                  {previewPlan.weeks.map((week, index) => (
                    <div key={week.weekNumber} className="relative">
                      {/* Connector Line */}
                      {index < previewPlan.weeks.length - 1 && (
                        <div className="absolute left-[19px] top-[60px] w-[2px] h-[calc(100%+24px)] bg-gradient-to-b from-[#4F5FED] to-[rgba(79,95,237,0.2)]" />
                      )}
                      
                      {/* Week Card */}
                      <div className="bg-gradient-to-br from-white to-[#fdfaff] border-2 border-[rgba(79,95,237,0.2)] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                        {/* Week Header */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4F5FED] to-[#592784] text-white flex items-center justify-center font-['Inter',_sans-serif] font-semibold text-[16px] shadow-md flex-shrink-0">
                            {week.weekNumber}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-['Inter',_sans-serif] font-semibold text-[16px] text-[#221b28] mb-1">
                              Week {week.weekNumber}: {week.title}
                            </h4>
                            <p className="text-[13px] text-[rgba(34,20,46,0.5)]">
                              {week.components.length} curriculum module{week.components.length !== 1 ? 's' : ''}
                              {week.resources && week.resources.length > 0 && ` • ${week.resources.length} resource${week.resources.length !== 1 ? 's' : ''}`}
                            </p>
                          </div>
                        </div>

                        {/* Curriculum Modules */}
                        {week.components.length > 0 && (
                          <div className="mb-3">
                            <div className="flex items-center gap-2 mb-2 ml-14">
                              <BookOpen className="w-4 h-4 text-[#4F5FED]" />
                              <span className="font-['Inter',_sans-serif] font-medium text-[12px] text-[#4F5FED] uppercase">
                                Curriculum
                              </span>
                            </div>
                            <div className="space-y-2 ml-14">
                              {week.components.map((component) => {
                                const Icon = iconMap[component.type] || FileText;
                                return (
                                  <div
                                    key={component.id}
                                    className="bg-white border border-[rgba(93,73,110,0.15)] rounded-lg p-3 flex items-start gap-3 hover:border-[#4F5FED] hover:shadow-sm transition-all cursor-pointer group"
                                    onClick={() => handleModulePreview(component)}
                                  >
                                    <div className={`p-2 rounded-lg ${typeColorMap[component.type]} flex-shrink-0`}>
                                      <Icon className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <p className="font-['Inter',_sans-serif] font-medium text-[14px] text-[#221b28]">
                                        {component.title}
                                      </p>
                                      <p className="text-[12px] text-[rgba(34,20,46,0.62)] line-clamp-1 mb-1">
                                        {component.description}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5">
                                        <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                                          {component.type}
                                        </Badge>
                                        <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                                          {component.duration}
                                        </Badge>
                                      </div>
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                      <Eye className="w-4 h-4 text-[#4F5FED]" />
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Resources */}
                        {week.resources && week.resources.length > 0 && (
                          <div className="ml-14">
                            <div className="flex items-center gap-2 mb-2">
                              <Download className="w-4 h-4 text-[#4F5FED]" />
                              <span className="font-['Inter',_sans-serif] font-medium text-[12px] text-[#4F5FED] uppercase">
                                Resources
                              </span>
                            </div>
                            <div className="space-y-2">
                              {week.resources.map((resource) => {
                                const Icon = iconMap[resource.type] || FileText;
                                return (
                                  <div
                                    key={resource.id}
                                    className="bg-white border border-[rgba(93,73,110,0.15)] rounded-lg p-3 flex items-start gap-3 hover:border-[#4F5FED] hover:shadow-sm transition-all cursor-pointer group"
                                    onClick={() => handleModulePreview(resource)}
                                  >
                                    <div className={`p-2 rounded-lg ${typeColorMap[resource.type]} flex-shrink-0`}>
                                      <Icon className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <p className="font-['Inter',_sans-serif] font-medium text-[14px] text-[#221b28]">
                                        {resource.title}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 mt-1">
                                        <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                                          {resource.type}
                                        </Badge>
                                        <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                                          {resource.duration}
                                        </Badge>
                                      </div>
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                      <Eye className="w-4 h-4 text-[#4F5FED]" />
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-6 pt-4 border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-shrink-0">
            <div className="text-[13px] text-[rgba(34,20,46,0.62)]">
              Complete plan journey from start to finish
            </div>
            <div className="flex gap-2">
              {previewPlan?.isGlobal && (
                <Button
                  variant="outline"
                  onClick={() => {
                    if (previewPlan) {
                      handleBranchPlan(previewPlan);
                      setPreviewPlan(null);
                    }
                  }}
                  className="border-[#592784] text-[#592784] hover:bg-[rgba(89,39,132,0.05)]"
                >
                  <GitBranch className="w-4 h-4 mr-2" />
                  Branch Plan
                </Button>
              )}
              <Button
                onClick={() => {
                  // TODO: Navigate to Plan Builder with this plan loaded
                  console.log('Open in builder:', previewPlan?.id);
                  setPreviewPlan(null);
                }}
                className="bg-[#592784] hover:bg-[#46087C] text-white"
              >
                Open in Builder
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Module Preview Modal */}
      <Dialog open={!!previewModule} onOpenChange={closeModulePreview}>
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
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentCardIndex ? 'bg-[#4F5FED]' : 'bg-[rgba(79,95,237,0.2)]'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              onClick={nextCard}
              disabled={currentCardIndex === moduleCards.length - 1}
              className="font-['Inter',_sans-serif]"
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
