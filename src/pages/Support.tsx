import { useState } from 'react';
import { PlayCircle, Search, BookOpen, Video, FileText, Lightbulb } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';

interface SupportArticle {
  id: number;
  title: string;
  description: string;
  type: 'video' | 'article';
  duration?: string;
  category: string;
  thumbnail?: string;
}

export function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Topics', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'getting-started', label: 'Getting Started', icon: <Lightbulb className="w-4 h-4" /> },
    { id: 'plan-builder', label: 'Plan Builder', icon: <Video className="w-4 h-4" /> },
    { id: 'components', label: 'Components', icon: <FileText className="w-4 h-4" /> },
    { id: 'registration', label: 'Registration', icon: <FileText className="w-4 h-4" /> },
  ];

  const supportArticles: SupportArticle[] = [
    {
      id: 1,
      title: 'Platform Overview',
      description: 'Learn the basics of the Functional Medicine Curriculum Platform and how to navigate the interface.',
      type: 'video',
      duration: '5:30',
      category: 'getting-started',
    },
    {
      id: 2,
      title: 'Creating Your First Plan',
      description: 'Step-by-step guide to building your first functional medicine plan from scratch.',
      type: 'video',
      duration: '8:45',
      category: 'getting-started',
    },
    {
      id: 3,
      title: 'Using the Plan Builder',
      description: 'Master the drag-and-drop interface to create customized curriculum plans for your patients.',
      type: 'video',
      duration: '12:20',
      category: 'plan-builder',
    },
    {
      id: 4,
      title: 'Organizing Components with Folders',
      description: 'Learn how to create and manage folder structures for your educational components.',
      type: 'article',
      category: 'components',
    },
    {
      id: 5,
      title: 'Adding Custom Components',
      description: 'How to create and upload your own videos, lessons, and resources to your library.',
      type: 'video',
      duration: '6:15',
      category: 'components',
    },
    {
      id: 6,
      title: 'Managing Week Boxes',
      description: 'Understanding how to structure your plan timeline and adjust week durations.',
      type: 'video',
      duration: '7:00',
      category: 'plan-builder',
    },
    {
      id: 7,
      title: 'Filtering and Searching Components',
      description: 'Use metadata tags to quickly find the right educational materials for your program.',
      type: 'article',
      category: 'components',
    },
    {
      id: 8,
      title: 'Registering New Patients',
      description: 'Complete guide to patient registration, plan assignment, and customization options.',
      type: 'video',
      duration: '10:30',
      category: 'registration',
    },
    {
      id: 9,
      title: 'Global vs Provider Library',
      description: 'Understanding the difference between shared content and your personal component library.',
      type: 'article',
      category: 'components',
    },
    {
      id: 10,
      title: 'Setting Up Diet Protocols',
      description: 'How to configure diet options and supplement protocols for patient programs.',
      type: 'video',
      duration: '9:15',
      category: 'registration',
    },
    {
      id: 11,
      title: 'Adjusting Program Length',
      description: 'Learn how to customize program duration from 4 to 16 weeks based on patient needs.',
      type: 'article',
      category: 'program-builder',
    },
    {
      id: 12,
      title: 'Visibility Coaching Options',
      description: 'Configure 1:1 and group coaching settings for your patient programs.',
      type: 'video',
      duration: '5:45',
      category: 'registration',
    },
  ];

  const filteredArticles = supportArticles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex-1 bg-[#f8f8fa] overflow-auto">
      <div className="max-w-[1400px] mx-auto p-8">
        <div className="mb-8">
          <h1 className="font-['Inter',_sans-serif] font-semibold text-[22px] text-[#221b28] tracking-[-0.84px] mb-2">
            Support Library
          </h1>
          <p className="text-[15px] text-[rgba(34,20,46,0.62)]">
            Everything you need to master the Functional Medicine Curriculum Platform
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-[600px]">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[rgba(34,20,46,0.62)]" />
            <Input
              type="text"
              placeholder="Search tutorials and guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 rounded-lg border-[rgba(0,0,0,0.1)] bg-white"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="bg-white border border-[rgba(0,0,0,0.1)] p-1 rounded-lg">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2 data-[state=active]:bg-[#5e09a9] data-[state=active]:text-white rounded-md"
              >
                {category.icon}
                <span>{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-[13px] text-[rgba(34,20,46,0.62)]">
            {filteredArticles.length} {filteredArticles.length === 1 ? 'result' : 'results'} found
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl border border-[rgba(0,0,0,0.1)] overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
            >
              {/* Thumbnail */}
              <div className="relative bg-gradient-to-br from-[#5e09a9] to-[#8b1bc4] h-48 flex items-center justify-center">
                {article.type === 'video' ? (
                  <div className="relative">
                    <PlayCircle className="w-16 h-16 text-white opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    {article.duration && (
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[11px] px-2 py-1 rounded">
                        {article.duration}
                      </div>
                    )}
                  </div>
                ) : (
                  <FileText className="w-16 h-16 text-white opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge
                    className={
                      article.type === 'video'
                        ? 'bg-purple-100 text-purple-800 hover:bg-purple-100'
                        : 'bg-blue-100 text-blue-800 hover:bg-blue-100'
                    }
                  >
                    {article.type === 'video' ? (
                      <>
                        <Video className="w-3 h-3 mr-1" />
                        Video
                      </>
                    ) : (
                      <>
                        <FileText className="w-3 h-3 mr-1" />
                        Article
                      </>
                    )}
                  </Badge>
                </div>

                <h3 className="font-['Inter',_sans-serif] font-medium text-[#221b28] mb-2">
                  {article.title}
                </h3>
                <p className="text-[13px] text-[rgba(34,20,46,0.62)] line-clamp-2">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-[rgba(34,20,46,0.3)] mx-auto mb-4" />
            <h3 className="font-['Inter',_sans-serif] font-medium text-[#221b28] mb-2">
              No results found
            </h3>
            <p className="text-[15px] text-[rgba(34,20,46,0.62)]">
              Try adjusting your search or browse all topics
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
