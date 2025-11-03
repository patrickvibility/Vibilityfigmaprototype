import { useState } from 'react';
import { 
  Search, 
  Plus, 
  Pencil, 
  Trash2, 
  Save, 
  X, 
  PlayCircle, 
  Pill, 
  FlaskConical, 
  Salad, 
  Calendar, 
  HelpCircle,
  ArrowLeft,
  FolderPlus
} from 'lucide-react';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Label } from '../components/ui/label';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface CategoryCard {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  iconColor: string;
}

const initialFAQs: FAQItem[] = [
  // Getting Started
  {
    id: '1',
    question: 'How do I access my program materials?',
    answer: 'After logging in, you\'ll see your personalized dashboard with your current week\'s materials. Click on any lesson, video, or resource card to access the content. All materials are organized by week to make it easy to follow along.',
    category: 'Getting Started'
  },
  {
    id: '2',
    question: 'What should I do in my first week?',
    answer: 'Start by watching the welcome video and completing your initial health assessment forms. Review your personalized program overview to understand the journey ahead. Don\'t forget to schedule your first practitioner consultation if you haven\'t already.',
    category: 'Getting Started'
  },
  {
    id: '3',
    question: 'Can I go at my own pace or do I need to follow a strict timeline?',
    answer: 'While the program is designed with a weekly structure, you can move through materials at your own pace. However, we recommend following the suggested timeline for optimal results, as each week builds on the previous one.',
    category: 'Getting Started'
  },
  {
    id: '4',
    question: 'How do I track my progress?',
    answer: 'Your dashboard displays your completion progress for each week. As you complete videos, readings, and assessments, you\'ll see your progress bar update. You can also view your overall program completion percentage.',
    category: 'Getting Started'
  },

  // Diet & Nutrition
  {
    id: '5',
    question: 'Which diet protocol is right for me?',
    answer: 'Your practitioner will recommend a specific diet protocol (Mediterranean, Paleo, Keto, or Plant-Based) based on your health goals and lab results. Each protocol includes detailed guidelines, meal plans, and recipes to support your journey.',
    category: 'Diet & Nutrition'
  },
  {
    id: '6',
    question: 'Where can I find meal plans and recipes?',
    answer: 'Meal plans and recipes are included in your weekly materials. Look for the nutrition resources in your current week\'s modules. You can also download printable meal planning guides and shopping lists from the resources section.',
    category: 'Diet & Nutrition'
  },
  {
    id: '7',
    question: 'What if I have food allergies or dietary restrictions?',
    answer: 'Make sure to note any allergies or restrictions in your intake form. Your practitioner will customize your protocol accordingly. Many recipes include substitution suggestions to accommodate common allergies and preferences.',
    category: 'Diet & Nutrition'
  },
  {
    id: '8',
    question: 'Can I eat out while on the program?',
    answer: 'Yes! Each diet protocol includes a guide for making healthy choices when dining out. Focus on whole foods, ask about ingredients, and don\'t be afraid to request modifications to meet your dietary needs.',
    category: 'Diet & Nutrition'
  },

  // Supplements
  {
    id: '9',
    question: 'When should I take my supplements?',
    answer: 'Your supplement protocol will specify the timing for each product. Generally, some supplements are best with food, while others should be taken on an empty stomach. Check your personalized supplement guide for detailed instructions.',
    category: 'Supplements'
  },
  {
    id: '10',
    question: 'Where can I purchase recommended supplements?',
    answer: 'Your practitioner may provide links to purchase professional-grade supplements. Look for the supplement recommendations in your program materials, which often include direct ordering links to ensure you get the exact products prescribed.',
    category: 'Supplements'
  },
  {
    id: '11',
    question: 'What if I experience side effects from a supplement?',
    answer: 'Stop taking the supplement immediately and contact your practitioner. Some initial digestive changes can be normal, but any concerning symptoms should be reported. Never continue a supplement that causes discomfort.',
    category: 'Supplements'
  },
  {
    id: '12',
    question: 'Do I need to take all the supplements at once?',
    answer: 'Not necessarily. Your practitioner may recommend starting with a foundation protocol and adding supplements gradually. This approach helps you monitor how each supplement affects you and reduces the chance of side effects.',
    category: 'Supplements'
  },

  // Lab Testing
  {
    id: '13',
    question: 'How do I prepare for lab testing?',
    answer: 'Preparation instructions are included with each lab order. Common requirements include fasting for 12 hours, avoiding certain supplements before testing, and collecting samples at specific times. Read your lab prep guide carefully.',
    category: 'Lab Testing'
  },
  {
    id: '14',
    question: 'When will I get my lab results?',
    answer: 'Most lab results are available within 7-14 days, though some specialized tests may take longer. You\'ll receive a notification when results are ready, and your practitioner will review them with you during your follow-up appointment.',
    category: 'Lab Testing'
  },
  {
    id: '15',
    question: 'What happens if my labs show abnormal results?',
    answer: 'Your practitioner will review any abnormal findings with you and adjust your treatment protocol accordingly. Many functional medicine markers show areas for optimization even if they\'re not in the "disease" range.',
    category: 'Lab Testing'
  },
  {
    id: '16',
    question: 'How often will I need lab testing?',
    answer: 'Initial comprehensive testing is typically done at the start of your program. Follow-up testing is usually scheduled at 3-6 month intervals to track your progress, though timing may vary based on your specific protocol.',
    category: 'Lab Testing'
  },

  // Appointments & Visits
  {
    id: '17',
    question: 'How do I schedule an appointment with my practitioner?',
    answer: 'Visit appointments are often pre-scheduled as part of your program timeline. You can also use the scheduling link provided in your welcome email. If you need to reschedule, contact support at least 24 hours in advance.',
    category: 'Appointments & Visits'
  },
  {
    id: '18',
    question: 'What should I prepare before my appointment?',
    answer: 'Complete any assigned assessment forms, review your symptom tracker, and write down questions you want to discuss. Having your supplement bottles and food diary handy can also be helpful during consultations.',
    category: 'Appointments & Visits'
  },
  {
    id: '19',
    question: 'Are appointments virtual or in-person?',
    answer: 'Most appointments are conducted via secure video conferencing for your convenience. Some practitioners also offer in-person visits. Check your appointment confirmation for details and the video link.',
    category: 'Appointments & Visits'
  },
  {
    id: '20',
    question: 'What if I need to contact my practitioner between appointments?',
    answer: 'Use the messaging feature in your patient portal for non-urgent questions. Your practitioner typically responds within 1-2 business days. For urgent medical concerns, contact your primary care physician or emergency services.',
    category: 'Appointments & Visits'
  },

  // Platform & Technical
  {
    id: '21',
    question: 'I forgot my password. How do I reset it?',
    answer: 'Click the "Forgot Password" link on the login page. Enter your email address and you\'ll receive a password reset link. If you don\'t receive the email within a few minutes, check your spam folder.',
    category: 'Platform & Technical'
  },
  {
    id: '22',
    question: 'Can I access the platform on my phone or tablet?',
    answer: 'Yes! The platform is fully responsive and works on all devices. You can watch videos, read materials, and complete forms on your smartphone or tablet. We recommend using the latest version of your browser for the best experience.',
    category: 'Platform & Technical'
  },
  {
    id: '23',
    question: 'How do I download resources and handouts?',
    answer: 'Most resources have a download button or link. Click it to save PDFs, meal plans, and other materials to your device. Downloaded materials can be accessed offline for your convenience.',
    category: 'Platform & Technical'
  },
  {
    id: '24',
    question: 'Who can I contact if I have technical issues?',
    answer: 'Contact technical support through the Support page or email support@yourpractice.com. Include details about the issue and what device/browser you\'re using. Most technical issues are resolved within 24 hours.',
    category: 'Platform & Technical'
  }
];

const initialCategories: CategoryCard[] = [
  {
    id: 'Getting Started',
    title: 'Getting Started',
    description: 'Learn the basics of navigating your program',
    icon: PlayCircle,
    color: 'bg-[rgba(94,9,169,0.1)]',
    iconColor: 'text-[#5e09a9]'
  },
  {
    id: 'Diet & Nutrition',
    title: 'Diet & Nutrition',
    description: 'Questions about your therapeutic diet protocol',
    icon: Salad,
    color: 'bg-[rgba(230,81,0,0.1)]',
    iconColor: 'text-[#e65100]'
  },
  {
    id: 'Supplements',
    title: 'Supplements',
    description: 'Understanding your supplement protocol',
    icon: Pill,
    color: 'bg-[rgba(46,125,50,0.1)]',
    iconColor: 'text-[#2e7d32]'
  },
  {
    id: 'Lab Testing',
    title: 'Lab Testing',
    description: 'Information about labs and test results',
    icon: FlaskConical,
    color: 'bg-[rgba(2,136,209,0.1)]',
    iconColor: 'text-[#0288d1]'
  },
  {
    id: 'Appointments & Visits',
    title: 'Appointments & Visits',
    description: 'Scheduling and appointment information',
    icon: Calendar,
    color: 'bg-[rgba(216,27,96,0.1)]',
    iconColor: 'text-[#d81b60]'
  },
  {
    id: 'Platform & Technical',
    title: 'Platform & Technical',
    description: 'Help with accessing and using the platform',
    icon: HelpCircle,
    color: 'bg-[rgba(69,90,100,0.1)]',
    iconColor: 'text-[#455a64]'
  }
];

export function FAQ() {
  const [faqs, setFaqs] = useState<FAQItem[]>(initialFAQs);
  const [categories, setCategories] = useState<CategoryCard[]>(initialCategories);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isAddCategoryDialogOpen, setIsAddCategoryDialogOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState<FAQItem | null>(null);
  const [editingCategory, setEditingCategory] = useState<CategoryCard | null>(null);
  const [newFaq, setNewFaq] = useState<Partial<FAQItem>>({
    question: '',
    answer: '',
    category: 'Getting Started'
  });
  const [newCategory, setNewCategory] = useState<Partial<CategoryCard>>({
    title: '',
    description: '',
    color: 'bg-[rgba(94,9,169,0.1)]',
    iconColor: 'text-[#5e09a9]'
  });

  const iconOptions = [
    { name: 'Play Circle', component: PlayCircle },
    { name: 'Salad', component: Salad },
    { name: 'Pill', component: Pill },
    { name: 'Flask', component: FlaskConical },
    { name: 'Calendar', component: Calendar },
    { name: 'Help Circle', component: HelpCircle }
  ];

  const colorOptions = [
    { label: 'Purple', bg: 'bg-[rgba(94,9,169,0.1)]', text: 'text-[#5e09a9]' },
    { label: 'Orange', bg: 'bg-[rgba(230,81,0,0.1)]', text: 'text-[#e65100]' },
    { label: 'Green', bg: 'bg-[rgba(46,125,50,0.1)]', text: 'text-[#2e7d32]' },
    { label: 'Blue', bg: 'bg-[rgba(2,136,209,0.1)]', text: 'text-[#0288d1]' },
    { label: 'Pink', bg: 'bg-[rgba(216,27,96,0.1)]', text: 'text-[#d81b60]' },
    { label: 'Gray', bg: 'bg-[rgba(69,90,100,0.1)]', text: 'text-[#455a64]' }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Show card view when no category is selected and no search query
  const showCardView = !selectedCategory && !searchQuery;

  const handleAddFaq = () => {
    if (newFaq.question && newFaq.answer && newFaq.category) {
      const faqToAdd: FAQItem = {
        id: Date.now().toString(),
        question: newFaq.question,
        answer: newFaq.answer,
        category: newFaq.category
      };
      setFaqs([...faqs, faqToAdd]);
      setNewFaq({ question: '', answer: '', category: 'Getting Started' });
      setIsAddDialogOpen(false);
    }
  };

  const handleAddCategory = () => {
    if (newCategory.title && newCategory.description) {
      const categoryToAdd: CategoryCard = {
        id: newCategory.title,
        title: newCategory.title,
        description: newCategory.description,
        icon: iconOptions[0].component, // Default to first icon
        color: newCategory.color || 'bg-[rgba(94,9,169,0.1)]',
        iconColor: newCategory.iconColor || 'text-[#5e09a9]'
      };
      setCategories([...categories, categoryToAdd]);
      setNewCategory({ title: '', description: '', color: 'bg-[rgba(94,9,169,0.1)]', iconColor: 'text-[#5e09a9]' });
      setIsAddCategoryDialogOpen(false);
    }
  };

  const handleUpdateFaq = () => {
    if (editingFaq && editingFaq.question && editingFaq.answer) {
      setFaqs(faqs.map(faq => faq.id === editingFaq.id ? editingFaq : faq));
      setEditingFaq(null);
    }
  };

  const handleDeleteFaq = (id: string) => {
    setFaqs(faqs.filter(faq => faq.id !== id));
  };

  const handleDeleteCategory = (id: string) => {
    // Don't delete if there are FAQs in this category
    const hasRelatedFaqs = faqs.some(faq => faq.category === id);
    if (hasRelatedFaqs) {
      alert('Cannot delete category with existing FAQs. Please reassign or delete the FAQs first.');
      return;
    }
    setCategories(categories.filter(cat => cat.id !== id));
  };

  const getCategoryCount = (category: string) => {
    return faqs.filter(faq => faq.category === category).length;
  };

  return (
    <div className="flex-1 bg-[#f8f8fa] overflow-auto">
      <div className="max-w-[1200px] mx-auto">
        {/* Hero Section */}
        <div className="bg-[#ebe8ed] px-8 py-16 text-center">
          <h1 className="font-['Inter',_sans-serif] font-semibold text-[22px] text-[#221b28] mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-[15px] text-[rgba(34,20,46,0.62)] mb-8">
            Find answers to common questions about your functional medicine program
          </p>
          <div className="max-w-[600px] mx-auto relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[rgba(34,20,46,0.62)]" />
            <Input
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 rounded-full h-12 bg-white border-[rgba(0,0,0,0.15)] text-[15px]"
            />
          </div>
        </div>

        <div className="p-8">
          {/* Admin Controls */}
          <div className="mb-6 flex items-center justify-between gap-3">
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
              <Button
                onClick={() => setIsAddCategoryDialogOpen(true)}
                variant="outline"
                className="rounded-[18px]"
              >
                <FolderPlus className="w-4 h-4 mr-2" />
                Add Category
              </Button>
              <Button
                onClick={() => setIsAddDialogOpen(true)}
                className="bg-[#5e09a9] hover:bg-[#4a0787] text-white rounded-[18px]"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add FAQ
              </Button>
            </div>
          </div>

          {/* Card View - Category Cards */}
          {showCardView ? (
            <>
              <div className="mb-6">
                <h2 className="text-[11px] tracking-[0.5px] uppercase text-[rgba(34,20,46,0.62)] font-medium">
                  HELP TOPICS
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                  <Card
                    key={category.id}
                    className="p-8 border border-[rgba(0,0,0,0.1)] bg-white hover:shadow-lg transition-all group relative"
                  >
                    <div 
                      className="text-center cursor-pointer"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <category.icon className={`w-10 h-10 ${category.iconColor}`} />
                      </div>
                      <h3 className="font-medium text-[#221b28] mb-2">
                        {category.title}
                      </h3>
                      <p className="text-[13px] text-[rgba(34,20,46,0.62)] mb-3">
                        {category.description}
                      </p>
                      <Badge variant="outline" className="text-[11px]">
                        {getCategoryCount(category.id)} articles
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteCategory(category.id);
                        }}
                        className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            /* FAQ List View */
            <>
              {selectedCategory && (
                <div className="mb-6">
                  <h2 className="text-[#221b28] mb-2">
                    {selectedCategory}
                  </h2>
                  <p className="text-[15px] text-[rgba(34,20,46,0.62)]">
                    {filteredFaqs.length} {filteredFaqs.length === 1 ? 'question' : 'questions'} found
                  </p>
                </div>
              )}

              {filteredFaqs.length === 0 ? (
                <Card className="p-12 text-center border-[rgba(0,0,0,0.1)]">
                  <p className="text-[rgba(34,20,46,0.62)]">
                    No FAQs found matching your search criteria.
                  </p>
                </Card>
              ) : (
                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.1)] overflow-hidden">
                  <Accordion type="single" collapsible className="w-full">
                    {filteredFaqs.map((faq, index) => (
                      <AccordionItem 
                        key={faq.id} 
                        value={`item-${faq.id}`} 
                        className="border-b border-[rgba(0,0,0,0.1)] last:border-0"
                      >
                        <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-[#f8f8fa]">
                          <div className="flex items-start justify-between flex-1 mr-4">
                            <div className="text-left flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <Badge variant="outline" className="text-[10px] px-2 py-0.5">
                                  {faq.category}
                                </Badge>
                              </div>
                              <span className="font-medium text-[#221b28]">
                                {faq.question}
                              </span>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <p className="text-[15px] text-[rgba(34,20,46,0.62)] leading-relaxed mb-4">
                            {faq.answer}
                          </p>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setEditingFaq({ ...faq })}
                              className="rounded-[12px]"
                            >
                              <Pencil className="w-3 h-3 mr-1.5" />
                              Edit
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDeleteFaq(faq.id)}
                              className="rounded-[12px] text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="w-3 h-3 mr-1.5" />
                              Delete
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}
            </>
          )}
        </div>

        {/* Add FAQ Dialog */}
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogContent className="max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New FAQ</DialogTitle>
              <DialogDescription>
                Create a new frequently asked question for patients.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <Label htmlFor="new-category" className="text-[#221b28] mb-2 block">
                  Category
                </Label>
                <Select
                  value={newFaq.category}
                  onValueChange={(value) => setNewFaq({ ...newFaq, category: value })}
                >
                  <SelectTrigger id="new-category" className="rounded-[18px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category.id} value={category.id}>{category.title}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="new-question" className="text-[#221b28] mb-2 block">
                  Question
                </Label>
                <Input
                  id="new-question"
                  placeholder="Enter the question..."
                  value={newFaq.question}
                  onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
                  className="rounded-[18px]"
                />
              </div>
              <div>
                <Label htmlFor="new-answer" className="text-[#221b28] mb-2 block">
                  Answer
                </Label>
                <Textarea
                  id="new-answer"
                  placeholder="Enter the answer..."
                  value={newFaq.answer}
                  onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
                  className="rounded-[18px] min-h-[150px]"
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setIsAddDialogOpen(false);
                  setNewFaq({ question: '', answer: '', category: 'Getting Started' });
                }}
                className="rounded-[18px]"
              >
                Cancel
              </Button>
              <Button
                onClick={handleAddFaq}
                disabled={!newFaq.question || !newFaq.answer}
                className="bg-[#5e09a9] hover:bg-[#4a0787] text-white rounded-[18px]"
              >
                <Save className="w-4 h-4 mr-2" />
                Add FAQ
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Edit FAQ Dialog */}
        <Dialog open={!!editingFaq} onOpenChange={(open) => !open && setEditingFaq(null)}>
          <DialogContent className="max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Edit FAQ</DialogTitle>
              <DialogDescription>
                Make changes to the question and answer for this FAQ.
              </DialogDescription>
            </DialogHeader>
            {editingFaq && (
              <div className="space-y-4 py-4">
                <div>
                  <Label htmlFor="edit-category" className="text-[#221b28] mb-2 block">
                    Category
                  </Label>
                  <Select
                    value={editingFaq.category}
                    onValueChange={(value) => setEditingFaq({ ...editingFaq, category: value })}
                  >
                    <SelectTrigger id="edit-category" className="rounded-[18px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category.id} value={category.id}>{category.title}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="edit-question" className="text-[#221b28] mb-2 block">
                    Question
                  </Label>
                  <Input
                    id="edit-question"
                    value={editingFaq.question}
                    onChange={(e) => setEditingFaq({ ...editingFaq, question: e.target.value })}
                    className="rounded-[18px]"
                  />
                </div>
                <div>
                  <Label htmlFor="edit-answer" className="text-[#221b28] mb-2 block">
                    Answer
                  </Label>
                  <Textarea
                    id="edit-answer"
                    value={editingFaq.answer}
                    onChange={(e) => setEditingFaq({ ...editingFaq, answer: e.target.value })}
                    className="rounded-[18px] min-h-[150px]"
                  />
                </div>
              </div>
            )}
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setEditingFaq(null)}
                className="rounded-[18px]"
              >
                Cancel
              </Button>
              <Button
                onClick={handleUpdateFaq}
                disabled={!editingFaq?.question || !editingFaq?.answer}
                className="bg-[#5e09a9] hover:bg-[#4a0787] text-white rounded-[18px]"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Add Category Dialog */}
        <Dialog open={isAddCategoryDialogOpen} onOpenChange={setIsAddCategoryDialogOpen}>
          <DialogContent className="max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Category</DialogTitle>
              <DialogDescription>
                Create a new FAQ category to organize questions.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <Label htmlFor="category-title" className="text-[#221b28] mb-2 block">
                  Category Title
                </Label>
                <Input
                  id="category-title"
                  placeholder="e.g., Billing & Insurance"
                  value={newCategory.title}
                  onChange={(e) => setNewCategory({ ...newCategory, title: e.target.value })}
                  className="rounded-[18px]"
                />
              </div>
              <div>
                <Label htmlFor="category-description" className="text-[#221b28] mb-2 block">
                  Description
                </Label>
                <Input
                  id="category-description"
                  placeholder="Brief description of this category"
                  value={newCategory.description}
                  onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                  className="rounded-[18px]"
                />
              </div>
              <div>
                <Label className="text-[#221b28] mb-2 block">
                  Color Theme
                </Label>
                <div className="grid grid-cols-3 gap-2">
                  {colorOptions.map((color) => (
                    <button
                      key={color.label}
                      onClick={() => setNewCategory({ 
                        ...newCategory, 
                        color: color.bg,
                        iconColor: color.text 
                      })}
                      className={`p-3 rounded-xl border-2 transition-all ${
                        newCategory.color === color.bg 
                          ? 'border-[#5e09a9] ring-2 ring-[rgba(94,9,169,0.2)]' 
                          : 'border-[rgba(0,0,0,0.1)]'
                      }`}
                    >
                      <div className={`w-10 h-10 mx-auto rounded-lg ${color.bg} flex items-center justify-center`}>
                        <HelpCircle className={`w-6 h-6 ${color.text}`} />
                      </div>
                      <p className="text-[11px] mt-2 text-[rgba(34,20,46,0.62)]">{color.label}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setIsAddCategoryDialogOpen(false);
                  setNewCategory({ title: '', description: '', color: 'bg-[rgba(94,9,169,0.1)]', iconColor: 'text-[#5e09a9]' });
                }}
                className="rounded-[18px]"
              >
                Cancel
              </Button>
              <Button
                onClick={handleAddCategory}
                disabled={!newCategory.title || !newCategory.description}
                className="bg-[#5e09a9] hover:bg-[#4a0787] text-white rounded-[18px]"
              >
                <Save className="w-4 h-4 mr-2" />
                Add Category
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
