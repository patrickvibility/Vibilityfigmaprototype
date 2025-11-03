import { useState, useMemo } from 'react';
import { ModuleCard } from './ModuleCard';
import { FolderCard } from './FolderCard';
import { LibraryItem, ComponentType, Topic, Difficulty, isFolder, CurriculumComponent } from '../types/curriculum';
import { globalComponents } from '../data/globalComponents';
import { providerComponents } from '../data/providerComponents';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { Search, Globe, User } from 'lucide-react';

interface ModuleLibraryProps {
  onPreview?: (component: CurriculumComponent) => void;
}

export function ModuleLibrary({ onPreview }: ModuleLibraryProps = {}) {
  const [activeLibrary, setActiveLibrary] = useState<'global' | 'provider'>('global');
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<ComponentType | 'all'>('all');
  const [topicFilter, setTopicFilter] = useState<Topic | 'all'>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty | 'all'>('all');

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

  return (
    <div className="bg-[#fdfaff] h-full flex flex-col border-r border-[rgba(93,73,110,0.2)]">
      <div className="px-6 py-4 border-b border-[rgba(93,73,110,0.2)]">
        <h2 className="font-['Inter',_sans-serif] font-semibold text-[#221b28] text-[20px] mb-4">
          Module Library
        </h2>

        {/* Library Tabs */}
        <Tabs value={activeLibrary} onValueChange={(value) => setActiveLibrary(value as 'global' | 'provider')} className="mb-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="global" className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Global
            </TabsTrigger>
            <TabsTrigger value="provider" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              My Library
            </TabsTrigger>
          </TabsList>
        </Tabs>
        
        {/* Search */}
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[rgba(34,20,46,0.62)]" />
          <Input
            placeholder="Search modules..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-white"
          />
        </div>

        {/* Filters */}
        <div className="space-y-2">
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
            </SelectContent>
          </Select>

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
      </div>

      {/* Module List */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {filteredComponents.length === 0 ? (
          <div className="font-['Inter',_sans-serif] text-center py-8 text-[rgba(34,20,46,0.62)]">
            No modules found
          </div>
        ) : (
          filteredComponents.map((item) =>
            isFolder(item) ? (
              <FolderCard key={item.id} folder={item} onPreview={onPreview} />
            ) : (
              <ModuleCard key={item.id} component={item} onPreview={onPreview} />
            )
          )
        )}
      </div>

      <div className="font-['Inter',_sans-serif] px-6 py-3 border-t border-[rgba(93,73,110,0.2)] text-[13px] text-[rgba(34,20,46,0.62)]">
        {filteredComponents.length} item{filteredComponents.length !== 1 ? 's' : ''}
      </div>
    </div>
  );
}
