import { useState } from 'react';
import { Search, Plus, Download, FileText, Video, Image as ImageIcon, BookOpen, Utensils, Pill, FlaskConical, Heart, ClipboardList, ArrowLeft, Pencil, Trash2, Save } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';

type FileType = 'PDF' | 'Video' | 'Image' | 'Document';
type DietType = 'All Diets' | 'Mediterranean' | 'Paleo' | 'Keto' | 'Plant-Based';
type ProgramType = 'All Programs' | '3 Month Wellness' | 'Advanced Wellness' | '60 Day Detox';

interface Resource {
  id: string;
  name: string;
  description: string;
  fileType: FileType;
  size: string;
  category: string;
  programs: ProgramType[];
  diets: DietType[];
  url: string;
}

interface CategoryCard {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  iconColor: string;
}

const categories: CategoryCard[] = [
  {
    id: 'Getting Started',
    title: 'Getting Started',
    description: 'Welcome materials and program orientation',
    icon: BookOpen,
    color: 'bg-[rgba(94,9,169,0.1)]',
    iconColor: 'text-[#5e09a9]'
  },
  {
    id: 'Meal Plans & Recipes',
    title: 'Meal Plans & Recipes',
    description: 'Diet-specific meal plans and recipes',
    icon: Utensils,
    color: 'bg-[rgba(230,81,0,0.1)]',
    iconColor: 'text-[#e65100]'
  },
  {
    id: 'Supplement Guides',
    title: 'Supplement Guides',
    description: 'Protocols and supplement information',
    icon: Pill,
    color: 'bg-[rgba(46,125,50,0.1)]',
    iconColor: 'text-[#2e7d32]'
  },
  {
    id: 'Lab Testing',
    title: 'Lab Testing',
    description: 'Preparation guides and result interpretation',
    icon: FlaskConical,
    color: 'bg-[rgba(2,136,209,0.1)]',
    iconColor: 'text-[#0288d1]'
  },
  {
    id: 'Lifestyle & Wellness',
    title: 'Lifestyle & Wellness',
    description: 'Stress, sleep, and movement resources',
    icon: Heart,
    color: 'bg-[rgba(216,27,96,0.1)]',
    iconColor: 'text-[#d81b60]'
  },
  {
    id: 'Forms & Trackers',
    title: 'Forms & Trackers',
    description: 'Assessment forms and tracking tools',
    icon: ClipboardList,
    color: 'bg-[rgba(69,90,100,0.1)]',
    iconColor: 'text-[#455a64]'
  }
];

const initialResources: Resource[] = [
  // Getting Started
  {
    id: 'gs-1',
    name: 'Welcome to Your Functional Medicine Journey',
    description: 'Comprehensive guide introducing you to functional medicine principles, what to expect during your program, and how to get the most from your experience.',
    fileType: 'PDF',
    size: '2.8 MB',
    category: 'Getting Started',
    programs: ['All Programs'],
    diets: ['All Diets'],
    url: '#'
  },
  {
    id: 'gs-2',
    name: 'Program Orientation Video',
    description: 'Welcome video walking you through the platform, how to access materials, schedule appointments, and connect with your practitioner.',
    fileType: 'Video',
    size: '125 MB',
    category: 'Getting Started',
    programs: ['All Programs'],
    diets: ['All Diets'],
    url: '#'
  },
  {
    id: 'gs-3',
    name: 'Your First Week Checklist',
    description: 'Step-by-step checklist for your first week including forms to complete, videos to watch, and how to prepare for your initial consultation.',
    fileType: 'PDF',
    size: '1.2 MB',
    category: 'Getting Started',
    programs: ['All Programs'],
    diets: ['All Diets'],
    url: '#'
  },

  // Meal Plans & Recipes - Mediterranean
  {
    id: 'mp-1',
    name: 'Mediterranean Diet 4-Week Meal Plan',
    description: 'Complete 28-day meal plan with breakfast, lunch, dinner, and snacks following Mediterranean diet principles. Includes shopping lists and prep guides.',
    fileType: 'PDF',
    size: '5.4 MB',
    category: 'Meal Plans & Recipes',
    programs: ['3 Month Wellness', 'Advanced Wellness'],
    diets: ['Mediterranean'],
    url: '#'
  },
  {
    id: 'mp-2',
    name: 'Mediterranean Quick Start Guide',
    description: 'Simple guide to transitioning to a Mediterranean diet including food lists, portion guides, and 20 easy recipes to get you started.',
    fileType: 'PDF',
    size: '3.1 MB',
    category: 'Meal Plans & Recipes',
    programs: ['All Programs'],
    diets: ['Mediterranean'],
    url: '#'
  },
  
  // Meal Plans & Recipes - Paleo
  {
    id: 'mp-3',
    name: 'Paleo Diet 4-Week Meal Plan',
    description: 'Complete 28-day Paleo meal plan focused on whole foods, quality proteins, and nutrient-dense vegetables. Includes shopping lists and batch cooking tips.',
    fileType: 'PDF',
    size: '5.1 MB',
    category: 'Meal Plans & Recipes',
    programs: ['3 Month Wellness', 'Advanced Wellness'],
    diets: ['Paleo'],
    url: '#'
  },
  {
    id: 'mp-4',
    name: 'Paleo Recipes Collection',
    description: '50 delicious Paleo-friendly recipes including breakfast bowls, main dishes, sides, and desserts. All grain-free and dairy-free.',
    fileType: 'PDF',
    size: '4.2 MB',
    category: 'Meal Plans & Recipes',
    programs: ['All Programs'],
    diets: ['Paleo'],
    url: '#'
  },

  // Meal Plans & Recipes - Keto
  {
    id: 'mp-5',
    name: 'Therapeutic Ketogenic Diet Guide',
    description: 'Comprehensive guide to implementing a ketogenic diet including macro calculations, food lists, and troubleshooting common challenges.',
    fileType: 'PDF',
    size: '4.8 MB',
    category: 'Meal Plans & Recipes',
    programs: ['Advanced Wellness', '60 Day Detox'],
    diets: ['Keto'],
    url: '#'
  },
  {
    id: 'mp-6',
    name: 'Keto Meal Prep Masterclass',
    description: 'Video guide to meal prepping keto-friendly foods for the week. Includes time-saving strategies and storage tips.',
    fileType: 'Video',
    size: '380 MB',
    category: 'Meal Plans & Recipes',
    programs: ['Advanced Wellness'],
    diets: ['Keto'],
    url: '#'
  },

  // Meal Plans & Recipes - Plant-Based
  {
    id: 'mp-7',
    name: 'Plant-Based Nutrition Guide',
    description: 'Complete guide to plant-based eating including protein sources, B12 supplementation, and ensuring nutritional adequacy.',
    fileType: 'PDF',
    size: '3.9 MB',
    category: 'Meal Plans & Recipes',
    programs: ['All Programs'],
    diets: ['Plant-Based'],
    url: '#'
  },
  {
    id: 'mp-8',
    name: 'Plant-Based Recipe Collection',
    description: '60 whole food plant-based recipes rich in fiber, antioxidants, and phytonutrients to support optimal health.',
    fileType: 'PDF',
    size: '5.6 MB',
    category: 'Meal Plans & Recipes',
    programs: ['3 Month Wellness'],
    diets: ['Plant-Based'],
    url: '#'
  },

  // Meal Plans & Recipes - General
  {
    id: 'mp-9',
    name: 'Anti-Inflammatory Foods Chart',
    description: 'Visual reference guide showing the best anti-inflammatory foods to include in your diet, plus foods to avoid.',
    fileType: 'Image',
    size: '2.1 MB',
    category: 'Meal Plans & Recipes',
    programs: ['All Programs'],
    diets: ['All Diets'],
    url: '#'
  },
  {
    id: 'mp-10',
    name: 'Dining Out Guide',
    description: 'Tips and strategies for making healthy choices when eating out, including questions to ask and menu navigation for all diet types.',
    fileType: 'PDF',
    size: '1.8 MB',
    category: 'Meal Plans & Recipes',
    programs: ['All Programs'],
    diets: ['All Diets'],
    url: '#'
  },

  // Supplement Guides
  {
    id: 'sg-1',
    name: 'Foundation Supplement Protocol',
    description: 'Detailed guide to core foundation supplements including multivitamin, omega-3, vitamin D, and probiotics with dosing and timing.',
    fileType: 'PDF',
    size: '2.4 MB',
    category: 'Supplement Guides',
    programs: ['All Programs'],
    diets: ['All Diets'],
    url: '#'
  },
  {
    id: 'sg-2',
    name: 'Supplement Timing & Absorption Guide',
    description: 'Learn when to take your supplements for optimal absorption, which ones to take with food, and potential interactions to avoid.',
    fileType: 'PDF',
    size: '1.9 MB',
    category: 'Supplement Guides',
    programs: ['All Programs'],
    diets: ['All Diets'],
    url: '#'
  },
  {
    id: 'sg-3',
    name: 'Gut Healing Protocol Guide',
    description: 'Comprehensive guide to supplements that support gut healing including L-glutamine, zinc carnosine, and digestive enzymes.',
    fileType: 'PDF',
    size: '3.2 MB',
    category: 'Supplement Guides',
    programs: ['Advanced Wellness', '60 Day Detox'],
    diets: ['All Diets'],
    url: '#'
  },
  {
    id: 'sg-4',
    name: 'Detox Support Supplements',
    description: 'Guide to supplements that support natural detoxification including NAC, glutathione, milk thistle, and methylation support.',
    fileType: 'PDF',
    size: '2.7 MB',
    category: 'Supplement Guides',
    programs: ['60 Day Detox'],
    diets: ['All Diets'],
    url: '#'
  },

  // Lab Testing
  {
    id: 'lt-1',
    name: 'Lab Test Preparation Instructions',
    description: 'Detailed instructions for preparing for your lab tests including fasting requirements, supplement holds, and timing guidelines.',
    fileType: 'PDF',
    size: '1.5 MB',
    category: 'Lab Testing',
    programs: ['All Programs'],
    diets: ['All Diets'],
    url: '#'
  },
  {
    id: 'lt-2',
    name: 'Understanding Your Lab Results',
    description: 'Patient-friendly guide to interpreting common functional medicine lab markers and what optimal ranges mean for your health.',
    fileType: 'PDF',
    size: '4.1 MB',
    category: 'Lab Testing',
    programs: ['Advanced Wellness'],
    diets: ['All Diets'],
    url: '#'
  },
  {
    id: 'lt-3',
    name: 'GI-MAP Stool Test Guide',
    description: 'Everything you need to know about the GI-MAP test including collection instructions, what it measures, and interpreting results.',
    fileType: 'PDF',
    size: '3.3 MB',
    category: 'Lab Testing',
    programs: ['Advanced Wellness', '60 Day Detox'],
    diets: ['All Diets'],
    url: '#'
  },
  {
    id: 'lt-4',
    name: 'Hormone Testing Overview',
    description: 'Comprehensive guide to DUTCH hormone testing, what hormones are measured, and how results guide your treatment plan.',
    fileType: 'PDF',
    size: '2.9 MB',
    category: 'Lab Testing',
    programs: ['Advanced Wellness'],
    diets: ['All Diets'],
    url: '#'
  },

  // Lifestyle & Wellness
  {
    id: 'lw-1',
    name: 'Sleep Optimization Guide',
    description: 'Evidence-based strategies for improving sleep quality including sleep hygiene practices, circadian rhythm support, and relaxation techniques.',
    fileType: 'PDF',
    size: '2.6 MB',
    category: 'Lifestyle & Wellness',
    programs: ['All Programs'],
    diets: ['All Diets'],
    url: '#'
  },
  {
    id: 'lw-2',
    name: 'Stress Reduction Techniques',
    description: 'Practical exercises and techniques for managing stress including breathing exercises, meditation, and progressive muscle relaxation.',
    fileType: 'PDF',
    size: '2.2 MB',
    category: 'Lifestyle & Wellness',
    programs: ['All Programs'],
    diets: ['All Diets'],
    url: '#'
  },
  {
    id: 'lw-3',
    name: 'Guided Meditation Series',
    description: 'Collection of 10 guided meditation videos ranging from 5-20 minutes for stress relief, better sleep, and mindful awareness.',
    fileType: 'Video',
    size: '450 MB',
    category: 'Lifestyle & Wellness',
    programs: ['All Programs'],
    diets: ['All Diets'],
    url: '#'
  },
  {
    id: 'lw-4',
    name: 'Movement & Exercise Guidelines',
    description: 'Personalized exercise recommendations based on your health status, including strength training, cardio, and flexibility work.',
    fileType: 'PDF',
    size: '3.4 MB',
    category: 'Lifestyle & Wellness',
    programs: ['3 Month Wellness', 'Advanced Wellness'],
    diets: ['All Diets'],
    url: '#'
  },
  {
    id: 'lw-5',
    name: 'Detox Support Practices',
    description: 'Lifestyle practices to support detoxification including dry brushing, sauna use, Epsom salt baths, and castor oil packs.',
    fileType: 'PDF',
    size: '2.1 MB',
    category: 'Lifestyle & Wellness',
    programs: ['60 Day Detox'],
    diets: ['All Diets'],
    url: '#'
  },

  // Forms & Trackers
  {
    id: 'ft-1',
    name: 'Daily Food & Symptom Journal',
    description: 'Track your daily food intake and symptoms to identify patterns and triggers. Essential for elimination diet protocols.',
    fileType: 'PDF',
    size: '800 KB',
    category: 'Forms & Trackers',
    programs: ['All Programs'],
    diets: ['All Diets'],
    url: '#'
  },
  {
    id: 'ft-2',
    name: 'Weekly Meal Planning Template',
    description: 'Plan your weekly meals with this easy-to-use template including shopping list sections and prep notes.',
    fileType: 'PDF',
    size: '600 KB',
    category: 'Forms & Trackers',
    programs: ['All Programs'],
    diets: ['All Diets'],
    url: '#'
  },
  {
    id: 'ft-3',
    name: 'Supplement Tracking Sheet',
    description: 'Keep track of your daily supplements, timing, and any effects noticed. Helps ensure compliance and identify benefits.',
    fileType: 'PDF',
    size: '500 KB',
    category: 'Forms & Trackers',
    programs: ['All Programs'],
    diets: ['All Diets'],
    url: '#'
  },
  {
    id: 'ft-4',
    name: 'Sleep Quality Tracker',
    description: 'Monitor your sleep patterns, quality, and factors affecting sleep to optimize your sleep hygiene protocol.',
    fileType: 'PDF',
    size: '700 KB',
    category: 'Forms & Trackers',
    programs: ['All Programs'],
    diets: ['All Diets'],
    url: '#'
  },
  {
    id: 'ft-5',
    name: 'Detox Symptom Tracker',
    description: 'Track detox-related symptoms and your response to the protocol. Helps identify healing reactions vs. true side effects.',
    fileType: 'PDF',
    size: '650 KB',
    category: 'Forms & Trackers',
    programs: ['60 Day Detox'],
    diets: ['All Diets'],
    url: '#'
  }
];

export function Resources() {
  const [resources, setResources] = useState<Resource[]>(initialResources);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [programFilter, setProgramFilter] = useState<ProgramType>('All Programs');
  const [dietFilter, setDietFilter] = useState<DietType>('All Diets');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingResource, setEditingResource] = useState<Resource | null>(null);
  const [newResource, setNewResource] = useState<Partial<Resource>>({
    name: '',
    description: '',
    fileType: 'PDF',
    size: '',
    category: 'Getting Started',
    programs: ['All Programs'],
    diets: ['All Diets'],
    url: '#'
  });

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || resource.category === selectedCategory;
    const matchesProgram = programFilter === 'All Programs' || 
                          resource.programs.includes('All Programs') || 
                          resource.programs.includes(programFilter);
    const matchesDiet = dietFilter === 'All Diets' || 
                       resource.diets.includes('All Diets') || 
                       resource.diets.includes(dietFilter);
    
    return matchesSearch && matchesCategory && matchesProgram && matchesDiet;
  });

  const showCardView = !selectedCategory && !searchQuery;

  const getCategoryCount = (category: string) => {
    return resources.filter(r => {
      const matchesCategory = r.category === category;
      const matchesProgram = programFilter === 'All Programs' || 
                            r.programs.includes('All Programs') || 
                            r.programs.includes(programFilter);
      const matchesDiet = dietFilter === 'All Diets' || 
                         r.diets.includes('All Diets') || 
                         r.diets.includes(dietFilter);
      return matchesCategory && matchesProgram && matchesDiet;
    }).length;
  };

  const getFileIcon = (fileType: FileType) => {
    switch (fileType) {
      case 'Video': return <Video className="w-5 h-5" />;
      case 'Image': return <ImageIcon className="w-5 h-5" />;
      case 'PDF': return <FileText className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const handleAddResource = () => {
    if (newResource.name && newResource.description && newResource.category) {
      const resourceToAdd: Resource = {
        id: Date.now().toString(),
        name: newResource.name,
        description: newResource.description,
        fileType: newResource.fileType || 'PDF',
        size: newResource.size || '1.0 MB',
        category: newResource.category,
        programs: newResource.programs || ['All Programs'],
        diets: newResource.diets || ['All Diets'],
        url: newResource.url || '#'
      };
      setResources([...resources, resourceToAdd]);
      setNewResource({
        name: '',
        description: '',
        fileType: 'PDF',
        size: '',
        category: 'Getting Started',
        programs: ['All Programs'],
        diets: ['All Diets'],
        url: '#'
      });
      setIsAddDialogOpen(false);
    }
  };

  const handleUpdateResource = () => {
    if (editingResource && editingResource.name && editingResource.description) {
      setResources(resources.map(r => r.id === editingResource.id ? editingResource : r));
      setEditingResource(null);
    }
  };

  const handleDeleteResource = (id: string) => {
    setResources(resources.filter(r => r.id !== id));
  };

  return (
    <div className="flex-1 bg-[#f8f8fa] overflow-auto">
      <div className="max-w-[1200px] mx-auto">
        {/* Hero Section */}
        <div className="bg-[#ebe8ed] px-8 py-16 text-center">
          <h1 className="font-['Inter',_sans-serif] font-semibold text-[22px] text-[#221b28] mb-3">
            Resource Library
          </h1>
          <p className="text-[15px] text-[rgba(34,20,46,0.62)] mb-8">
            Downloadable guides, meal plans, trackers, and educational materials for your program
          </p>
          <div className="max-w-[600px] mx-auto relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[rgba(34,20,46,0.62)]" />
            <Input
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 rounded-full h-12 bg-white border-[rgba(0,0,0,0.15)] text-[15px]"
            />
          </div>
        </div>

        <div className="p-8">
          {/* Filters */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            {(selectedCategory || searchQuery) && (
              <Button
                variant="ghost"
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery('');
                }}
                className="rounded-[18px]"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Categories
              </Button>
            )}
            
            <div className="flex gap-2 ml-auto">
              <Select value={programFilter} onValueChange={(value) => setProgramFilter(value as ProgramType)}>
                <SelectTrigger className="w-[200px] rounded-[18px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Programs">All Programs</SelectItem>
                  <SelectItem value="3 Month Wellness">3 Month Wellness</SelectItem>
                  <SelectItem value="Advanced Wellness">Advanced Wellness</SelectItem>
                  <SelectItem value="60 Day Detox">60 Day Detox</SelectItem>
                </SelectContent>
              </Select>

              <Select value={dietFilter} onValueChange={(value) => setDietFilter(value as DietType)}>
                <SelectTrigger className="w-[180px] rounded-[18px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Diets">All Diets</SelectItem>
                  <SelectItem value="Mediterranean">Mediterranean</SelectItem>
                  <SelectItem value="Paleo">Paleo</SelectItem>
                  <SelectItem value="Keto">Keto</SelectItem>
                  <SelectItem value="Plant-Based">Plant-Based</SelectItem>
                </SelectContent>
              </Select>

              <Button
                onClick={() => setIsAddDialogOpen(true)}
                className="bg-[#5e09a9] hover:bg-[#4a0787] text-white rounded-[18px]"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Resource
              </Button>
            </div>
          </div>

          {/* Card View - Category Cards */}
          {showCardView ? (
            <>
              <div className="mb-6">
                <h2 className="text-[11px] tracking-[0.5px] uppercase text-[rgba(34,20,46,0.62)] font-medium">
                  RESOURCE CATEGORIES
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => {
                  const count = getCategoryCount(category.id);
                  if (count === 0 && (programFilter !== 'All Programs' || dietFilter !== 'All Diets')) {
                    return null;
                  }
                  return (
                    <Card
                      key={category.id}
                      className="p-8 border border-[rgba(0,0,0,0.1)] bg-white hover:shadow-lg transition-all cursor-pointer"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <div className="text-center">
                        <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl ${category.color} flex items-center justify-center hover:scale-110 transition-transform`}>
                          <category.icon className={`w-10 h-10 ${category.iconColor}`} />
                        </div>
                        <h3 className="font-medium text-[#221b28] mb-2">
                          {category.title}
                        </h3>
                        <p className="text-[13px] text-[rgba(34,20,46,0.62)] mb-3">
                          {category.description}
                        </p>
                        <Badge variant="outline" className="text-[11px]">
                          {count} {count === 1 ? 'resource' : 'resources'}
                        </Badge>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </>
          ) : (
            /* Resource List View */
            <>
              {selectedCategory && (
                <div className="mb-6">
                  <h2 className="text-[#221b28] mb-2">
                    {selectedCategory}
                  </h2>
                  <p className="text-[15px] text-[rgba(34,20,46,0.62)]">
                    {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'} found
                  </p>
                </div>
              )}

              {filteredResources.length === 0 ? (
                <Card className="p-12 text-center border-[rgba(0,0,0,0.1)]">
                  <p className="text-[rgba(34,20,46,0.62)]">
                    No resources found matching your criteria.
                  </p>
                </Card>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {filteredResources.map((resource) => (
                    <Card
                      key={resource.id}
                      className="p-6 border border-[rgba(0,0,0,0.1)] bg-white hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="w-14 h-14 rounded-xl bg-[rgba(85,37,126,0.09)] flex items-center justify-center text-[#5e09a9] shrink-0">
                            {getFileIcon(resource.fileType)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-[#221b28] mb-2">
                              {resource.name}
                            </h3>
                            <p className="text-[13px] text-[rgba(34,20,46,0.62)] mb-3 leading-relaxed">
                              {resource.description}
                            </p>
                            <div className="flex flex-wrap items-center gap-2">
                              <Badge variant="secondary" className="text-[11px] px-2 py-0.5">
                                {resource.fileType}
                              </Badge>
                              <Badge variant="outline" className="text-[11px] px-2 py-0.5">
                                {resource.size}
                              </Badge>
                              {resource.programs.map((program, idx) => (
                                <Badge key={idx} variant="outline" className="text-[11px] px-2 py-0.5 bg-[rgba(94,9,169,0.05)]">
                                  {program}
                                </Badge>
                              ))}
                              {resource.diets.filter(d => d !== 'All Diets').map((diet, idx) => (
                                <Badge key={idx} variant="outline" className="text-[11px] px-2 py-0.5 bg-[rgba(230,81,0,0.05)]">
                                  {diet}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 shrink-0">
                          <Button
                            variant="default"
                            size="sm"
                            className="bg-[#5e09a9] hover:bg-[#4a0787] text-white rounded-[12px]"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setEditingResource({ ...resource })}
                            className="rounded-[12px]"
                          >
                            <Pencil className="w-3 h-3" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeleteResource(resource.id)}
                            className="rounded-[12px] text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Add Resource Dialog */}
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogContent className="max-w-[700px]">
            <DialogHeader>
              <DialogTitle>Add New Resource</DialogTitle>
              <DialogDescription>
                Upload a new resource for patients in your programs.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4 max-h-[60vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Label htmlFor="new-name" className="text-[#221b28] mb-2 block">
                    Resource Name
                  </Label>
                  <Input
                    id="new-name"
                    placeholder="e.g., Mediterranean Diet Meal Plan"
                    value={newResource.name}
                    onChange={(e) => setNewResource({ ...newResource, name: e.target.value })}
                    className="rounded-[18px]"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="new-description" className="text-[#221b28] mb-2 block">
                    Description
                  </Label>
                  <Textarea
                    id="new-description"
                    placeholder="Brief description of what this resource contains..."
                    value={newResource.description}
                    onChange={(e) => setNewResource({ ...newResource, description: e.target.value })}
                    className="rounded-[18px] min-h-[80px]"
                  />
                </div>
                <div>
                  <Label htmlFor="new-category" className="text-[#221b28] mb-2 block">
                    Category
                  </Label>
                  <Select
                    value={newResource.category}
                    onValueChange={(value) => setNewResource({ ...newResource, category: value })}
                  >
                    <SelectTrigger id="new-category" className="rounded-[18px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(cat => (
                        <SelectItem key={cat.id} value={cat.id}>{cat.title}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="new-filetype" className="text-[#221b28] mb-2 block">
                    File Type
                  </Label>
                  <Select
                    value={newResource.fileType}
                    onValueChange={(value) => setNewResource({ ...newResource, fileType: value as FileType })}
                  >
                    <SelectTrigger id="new-filetype" className="rounded-[18px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PDF">PDF</SelectItem>
                      <SelectItem value="Video">Video</SelectItem>
                      <SelectItem value="Image">Image</SelectItem>
                      <SelectItem value="Document">Document</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="new-size" className="text-[#221b28] mb-2 block">
                    File Size
                  </Label>
                  <Input
                    id="new-size"
                    placeholder="e.g., 2.4 MB"
                    value={newResource.size}
                    onChange={(e) => setNewResource({ ...newResource, size: e.target.value })}
                    className="rounded-[18px]"
                  />
                </div>
                <div>
                  <Label htmlFor="new-url" className="text-[#221b28] mb-2 block">
                    File URL
                  </Label>
                  <Input
                    id="new-url"
                    placeholder="https://..."
                    value={newResource.url}
                    onChange={(e) => setNewResource({ ...newResource, url: e.target.value })}
                    className="rounded-[18px]"
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setIsAddDialogOpen(false);
                  setNewResource({
                    name: '',
                    description: '',
                    fileType: 'PDF',
                    size: '',
                    category: 'Getting Started',
                    programs: ['All Programs'],
                    diets: ['All Diets'],
                    url: '#'
                  });
                }}
                className="rounded-[18px]"
              >
                Cancel
              </Button>
              <Button
                onClick={handleAddResource}
                disabled={!newResource.name || !newResource.description}
                className="bg-[#5e09a9] hover:bg-[#4a0787] text-white rounded-[18px]"
              >
                <Save className="w-4 h-4 mr-2" />
                Add Resource
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Edit Resource Dialog */}
        <Dialog open={!!editingResource} onOpenChange={(open) => !open && setEditingResource(null)}>
          <DialogContent className="max-w-[700px]">
            <DialogHeader>
              <DialogTitle>Edit Resource</DialogTitle>
              <DialogDescription>
                Update resource information and metadata.
              </DialogDescription>
            </DialogHeader>
            {editingResource && (
              <div className="space-y-4 py-4 max-h-[60vh] overflow-y-auto">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <Label htmlFor="edit-name" className="text-[#221b28] mb-2 block">
                      Resource Name
                    </Label>
                    <Input
                      id="edit-name"
                      value={editingResource.name}
                      onChange={(e) => setEditingResource({ ...editingResource, name: e.target.value })}
                      className="rounded-[18px]"
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="edit-description" className="text-[#221b28] mb-2 block">
                      Description
                    </Label>
                    <Textarea
                      id="edit-description"
                      value={editingResource.description}
                      onChange={(e) => setEditingResource({ ...editingResource, description: e.target.value })}
                      className="rounded-[18px] min-h-[80px]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="edit-category" className="text-[#221b28] mb-2 block">
                      Category
                    </Label>
                    <Select
                      value={editingResource.category}
                      onValueChange={(value) => setEditingResource({ ...editingResource, category: value })}
                    >
                      <SelectTrigger id="edit-category" className="rounded-[18px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(cat => (
                          <SelectItem key={cat.id} value={cat.id}>{cat.title}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="edit-filetype" className="text-[#221b28] mb-2 block">
                      File Type
                    </Label>
                    <Select
                      value={editingResource.fileType}
                      onValueChange={(value) => setEditingResource({ ...editingResource, fileType: value as FileType })}
                    >
                      <SelectTrigger id="edit-filetype" className="rounded-[18px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="PDF">PDF</SelectItem>
                        <SelectItem value="Video">Video</SelectItem>
                        <SelectItem value="Image">Image</SelectItem>
                        <SelectItem value="Document">Document</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="edit-size" className="text-[#221b28] mb-2 block">
                      File Size
                    </Label>
                    <Input
                      id="edit-size"
                      value={editingResource.size}
                      onChange={(e) => setEditingResource({ ...editingResource, size: e.target.value })}
                      className="rounded-[18px]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="edit-url" className="text-[#221b28] mb-2 block">
                      File URL
                    </Label>
                    <Input
                      id="edit-url"
                      value={editingResource.url}
                      onChange={(e) => setEditingResource({ ...editingResource, url: e.target.value })}
                      className="rounded-[18px]"
                    />
                  </div>
                </div>
              </div>
            )}
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setEditingResource(null)}
                className="rounded-[18px]"
              >
                Cancel
              </Button>
              <Button
                onClick={handleUpdateResource}
                disabled={!editingResource?.name || !editingResource?.description}
                className="bg-[#5e09a9] hover:bg-[#4a0787] text-white rounded-[18px]"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
