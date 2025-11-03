import { useState, useMemo } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ComponentType, Topic, Difficulty, LibraryItem, CurriculumComponent, isFolder } from '../types/curriculum';
import { globalComponents } from '../data/globalComponents';
import { providerComponents } from '../data/providerComponents';
import { FolderCard } from '../components/FolderCard';
import { ModuleCard } from '../components/ModuleCard';
import { Button } from '../components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';
import { 
  Search, 
  Globe, 
  User,
  ChevronLeft,
  ChevronRight,
  Video,
  BookOpen,
  ClipboardList
} from 'lucide-react';

export function ModuleLibraryPage() {
  const [activeLibrary, setActiveLibrary] = useState<'global' | 'provider'>('global');
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<ComponentType | 'all'>('all');
  const [topicFilter, setTopicFilter] = useState<Topic | 'all'>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty | 'all'>('all');
  const [previewModule, setPreviewModule] = useState<CurriculumComponent | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const currentComponents = activeLibrary === 'global' ? globalComponents : providerComponents;

  const filteredComponents = useMemo(() => {
    return currentComponents.filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = typeFilter === 'all' || item.type === typeFilter;
      const matchesTopic = topicFilter === 'all' || item.topic === topicFilter;
      const matchesDifficulty = difficultyFilter === 'all' || item.difficulty === difficultyFilter;

      return matchesSearch && matchesType && matchesTopic && matchesDifficulty;
    });
  }, [currentComponents, searchQuery, typeFilter, topicFilter, difficultyFilter]);

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
      <div className="flex-1 overflow-y-auto bg-gradient-to-br from-[#fdfaff] via-[#f8f4fc] to-[#fdfaff] p-8">
        <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-['Inter',_sans-serif] font-semibold text-[22px] text-[#221b28] mb-2">
            Module Library
          </h1>
          <p className="font-['Inter',_sans-serif] text-[rgba(34,20,46,0.62)] text-[16px]">
            Browse and manage your educational modules
          </p>
        </div>

        {/* Library Tabs */}
        <div className="mb-6">
          <Tabs 
            value={activeLibrary} 
            onValueChange={(value) => setActiveLibrary(value as 'global' | 'provider')}
            className="w-full"
          >
            <TabsList className="grid w-full md:w-[400px] grid-cols-2">
              <TabsTrigger value="global" className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Global Library
              </TabsTrigger>
              <TabsTrigger value="provider" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                My Library
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Search & Filters */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative md:col-span-2 lg:col-span-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[rgba(34,20,46,0.4)] w-4 h-4" />
            <Input
              type="text"
              placeholder="Search modules..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>

          {/* Type Filter */}
          <Select value={typeFilter} onValueChange={(value) => setTypeFilter(value as ComponentType | 'all')}>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="video">Videos</SelectItem>
              <SelectItem value="lesson">Lessons</SelectItem>
              <SelectItem value="form">Forms</SelectItem>
              <SelectItem value="resource">Resources</SelectItem>
              <SelectItem value="reading">Reading Materials</SelectItem>
              <SelectItem value="visit">Visits</SelectItem>
              <SelectItem value="panel">Lab Panels</SelectItem>
              <SelectItem value="protocol">Protocols</SelectItem>
            </SelectContent>
          </Select>

          {/* Topic Filter */}
          <Select value={topicFilter} onValueChange={(value) => setTopicFilter(value as Topic | 'all')}>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Topic" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Topics</SelectItem>
              <SelectItem value="diet">Diet</SelectItem>
              <SelectItem value="lifestyle">Lifestyle</SelectItem>
              <SelectItem value="supplements">Supplements</SelectItem>
              <SelectItem value="lab-testing">Lab Testing</SelectItem>
              <SelectItem value="patient-care">Patient Care</SelectItem>
              <SelectItem value="general">General</SelectItem>
            </SelectContent>
          </Select>

          {/* Difficulty Filter */}
          <Select value={difficultyFilter} onValueChange={(value) => setDifficultyFilter(value as Difficulty | 'all')}>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="font-['Inter',_sans-serif] text-[13px] text-[rgba(34,20,46,0.62)]">
            {filteredComponents.length} item{filteredComponents.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Module List */}
        {filteredComponents.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-['Inter',_sans-serif] text-[rgba(34,20,46,0.62)] text-[18px]">
              {searchQuery || typeFilter !== 'all' || topicFilter !== 'all' || difficultyFilter !== 'all'
                ? 'No modules found matching your filters.'
                : 'No modules available.'}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredComponents.map((item) =>
              isFolder(item) ? (
                <FolderCard key={item.id} folder={item} onPreview={handlePreviewModule} />
              ) : (
                <ModuleCard key={item.id} component={item} onPreview={handlePreviewModule} />
              )
            )}
          </div>
        )}
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
