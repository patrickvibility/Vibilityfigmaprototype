import { useState } from 'react';
import { 
  Save, 
  Plus, 
  Video, 
  FileText, 
  ClipboardList, 
  ArrowLeft, 
  Trash2, 
  GripVertical,
  Play,
  CheckSquare,
  ListChecks,
  X,
  Tag
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

interface ComponentCard {
  id: string;
  type: 'video' | 'text' | 'question' | 'takeaway';
  content: {
    title?: string;
    videoUrl?: string;
    summary?: string;
    takeaways?: string;
    text?: string;
    question?: string;
    questionType?: 'text' | 'multipleChoice' | 'scale';
    options?: string[];
    placeholder?: string;
  };
}

interface ComponentTemplate {
  id: string;
  name: string;
  description: string;
  icon: any;
  cards: ComponentCard[];
}

const templates: ComponentTemplate[] = [
  {
    id: 'video',
    name: 'Video Lesson',
    description: 'Video with key takeaways',
    icon: Video,
    cards: [
      {
        id: '1',
        type: 'video',
        content: {
          title: '',
          videoUrl: ''
        }
      },
      {
        id: '2',
        type: 'takeaway',
        content: {
          title: 'Key Takeaways',
          text: ''
        }
      }
    ]
  },
  {
    id: 'reading',
    name: 'Reading Material',
    description: 'Text-based content with sections',
    icon: FileText,
    cards: [
      {
        id: '1',
        type: 'text',
        content: {
          title: '',
          text: ''
        }
      }
    ]
  },
  {
    id: 'form',
    name: 'Form/Assessment',
    description: 'Series of questions',
    icon: ClipboardList,
    cards: [
      {
        id: '1',
        type: 'question',
        content: {
          question: '',
          questionType: 'text',
          placeholder: 'Type your answer...'
        }
      }
    ]
  },
  {
    id: 'checklist',
    name: 'Action Checklist',
    description: 'List of actionable items',
    icon: ListChecks,
    cards: [
      {
        id: '1',
        type: 'text',
        content: {
          title: 'Action Items',
          text: ''
        }
      }
    ]
  }
];

export function ModuleBuilder() {
  const [step, setStep] = useState<'template' | 'details' | 'cards'>('template');
  const [selectedTemplate, setSelectedTemplate] = useState<ComponentTemplate | null>(null);
  const [componentDetails, setComponentDetails] = useState({
    title: '',
    type: 'lesson',
    topic: '',
    difficulty: '',
    duration: '',
    description: '',
    tags: [] as string[]
  });

  // Available component types from the library
  const componentTypes = [
    'video',
    'lesson',
    'form',
    'resource',
    'reading',
    'visit',
    'panel',
    'protocol'
  ];

  // Available topics from the library
  const topicTags = [
    'diet',
    'lifestyle',
    'supplements',
    'lab-testing',
    'patient-care',
    'general'
  ];

  // Available diet types
  const dietTypeTags = [
    'mediterranean',
    'paleo',
    'keto',
    'plant-based'
  ];

  // Combine all available tags
  const availableTags = [
    ...componentTypes.map(t => t.charAt(0).toUpperCase() + t.slice(1)),
    ...topicTags.map(t => t.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')),
    ...dietTypeTags.map(t => t.charAt(0).toUpperCase() + t.slice(1))
  ];
  const [cards, setCards] = useState<ComponentCard[]>([]);

  const handleTemplateSelect = (template: ComponentTemplate) => {
    setSelectedTemplate(template);
    setCards(template.cards);
    setStep('details');
  };

  const handleAddCard = (type: 'video' | 'text' | 'question' | 'takeaway') => {
    const newCard: ComponentCard = {
      id: Date.now().toString(),
      type,
      content: 
        type === 'video' ? { title: '', videoUrl: '' } :
        type === 'text' ? { title: '', text: '' } :
        type === 'takeaway' ? { title: 'Key Takeaways', text: '' } :
        { question: '', questionType: 'text', placeholder: 'Type your answer...' }
    };
    setCards([...cards, newCard]);
  };

  const handleDeleteCard = (cardId: string) => {
    setCards(cards.filter(card => card.id !== cardId));
  };

  const handleUpdateCard = (cardId: string, content: any) => {
    setCards(cards.map(card => 
      card.id === cardId ? { ...card, content: { ...card.content, ...content } } : card
    ));
  };

  const renderCardEditor = (card: ComponentCard, index: number) => {
    return (
      <Card key={card.id} className="p-6 border border-[rgba(0,0,0,0.1)] bg-white">
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center gap-2 mt-2">
            <GripVertical className="w-5 h-5 text-[rgba(34,20,46,0.4)] cursor-move" />
            <span className="text-[12px] text-[rgba(34,20,46,0.62)]">Card {index + 1}</span>
          </div>
          
          <div className="flex-1 space-y-4">
            {/* Card Type Badge */}
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="text-[11px]">
                {card.type === 'video' ? '📹 Video' :
                 card.type === 'text' ? '📄 Text' :
                 card.type === 'takeaway' ? '💡 Takeaway' :
                 '❓ Question'}
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleDeleteCard(card.id)}
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            {/* Video Card */}
            {card.type === 'video' && (
              <>
                <div>
                  <Label className="text-[#221b28] mb-2 block text-[13px]">Video Title</Label>
                  <Input
                    placeholder="Enter video title..."
                    value={card.content.title || ''}
                    onChange={(e) => handleUpdateCard(card.id, { title: e.target.value })}
                    className="rounded-[18px]"
                  />
                </div>
                <div>
                  <Label className="text-[#221b28] mb-2 block text-[13px]">Video URL</Label>
                  <Input
                    placeholder="https://youtube.com/..."
                    value={card.content.videoUrl || ''}
                    onChange={(e) => handleUpdateCard(card.id, { videoUrl: e.target.value })}
                    className="rounded-[18px]"
                  />
                </div>
                {card.content.videoUrl && (
                  <div className="bg-[#f8f8fa] rounded-lg p-4 border border-[rgba(0,0,0,0.1)]">
                    <div className="aspect-video bg-[rgba(94,9,169,0.1)] rounded-lg flex items-center justify-center">
                      <Play className="w-12 h-12 text-[#5e09a9]" />
                    </div>
                    <p className="text-[12px] text-[rgba(34,20,46,0.62)] mt-2 text-center">
                      Video Preview
                    </p>
                  </div>
                )}
                <div>
                  <Label className="text-[#221b28] mb-2 block text-[13px]">Summary</Label>
                  <Textarea
                    placeholder="Brief summary of the video content..."
                    value={card.content.summary || ''}
                    onChange={(e) => handleUpdateCard(card.id, { summary: e.target.value })}
                    className="rounded-[18px] min-h-[100px]"
                  />
                </div>
                <div>
                  <Label className="text-[#221b28] mb-2 block text-[13px]">Key Takeaways</Label>
                  <Textarea
                    placeholder="• Key takeaway 1&#10;• Key takeaway 2&#10;• Key takeaway 3"
                    value={card.content.takeaways || ''}
                    onChange={(e) => handleUpdateCard(card.id, { takeaways: e.target.value })}
                    className="rounded-[18px] min-h-[120px]"
                  />
                </div>
              </>
            )}

            {/* Text/Takeaway Card */}
            {(card.type === 'text' || card.type === 'takeaway') && (
              <>
                <div>
                  <Label className="text-[#221b28] mb-2 block text-[13px]">
                    {card.type === 'takeaway' ? 'Section Title' : 'Content Title'}
                  </Label>
                  <Input
                    placeholder="Enter title..."
                    value={card.content.title || ''}
                    onChange={(e) => handleUpdateCard(card.id, { title: e.target.value })}
                    className="rounded-[18px]"
                  />
                </div>
                <div>
                  <Label className="text-[#221b28] mb-2 block text-[13px]">Content</Label>
                  <Textarea
                    placeholder={card.type === 'takeaway' 
                      ? "• Key takeaway 1\n• Key takeaway 2\n• Key takeaway 3" 
                      : "Enter your content here..."}
                    value={card.content.text || ''}
                    onChange={(e) => handleUpdateCard(card.id, { text: e.target.value })}
                    className="rounded-[18px] min-h-[150px]"
                  />
                </div>
              </>
            )}

            {/* Question Card */}
            {card.type === 'question' && (
              <>
                <div>
                  <Label className="text-[#221b28] mb-2 block text-[13px]">Question</Label>
                  <Textarea
                    placeholder="Enter your question..."
                    value={card.content.question || ''}
                    onChange={(e) => handleUpdateCard(card.id, { question: e.target.value })}
                    className="rounded-[18px] min-h-[80px]"
                  />
                </div>
                <div>
                  <Label className="text-[#221b28] mb-2 block text-[13px]">Question Type</Label>
                  <Select
                    value={card.content.questionType || 'text'}
                    onValueChange={(value) => handleUpdateCard(card.id, { questionType: value })}
                  >
                    <SelectTrigger className="rounded-[18px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="text">Text Response</SelectItem>
                      <SelectItem value="multipleChoice">Multiple Choice</SelectItem>
                      <SelectItem value="scale">Scale (1-10)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {card.content.questionType === 'text' && (
                  <div>
                    <Label className="text-[#221b28] mb-2 block text-[13px]">Placeholder Text</Label>
                    <Input
                      placeholder="Type your answer..."
                      value={card.content.placeholder || ''}
                      onChange={(e) => handleUpdateCard(card.id, { placeholder: e.target.value })}
                      className="rounded-[18px]"
                    />
                  </div>
                )}
                {card.content.questionType === 'multipleChoice' && (
                  <div>
                    <Label className="text-[#221b28] mb-2 block text-[13px]">Answer Options</Label>
                    <Textarea
                      placeholder="Option 1&#10;Option 2&#10;Option 3&#10;Option 4"
                      value={card.content.options?.join('\n') || ''}
                      onChange={(e) => handleUpdateCard(card.id, { 
                        options: e.target.value.split('\n').filter(o => o.trim()) 
                      })}
                      className="rounded-[18px] min-h-[100px]"
                    />
                    <p className="text-[11px] text-[rgba(34,20,46,0.62)] mt-1">
                      Enter one option per line
                    </p>
                  </div>
                )}
                {/* Preview */}
                <div className="bg-[#f8f8fa] rounded-lg p-4 border border-[rgba(0,0,0,0.1)]">
                  <p className="text-[12px] text-[rgba(34,20,46,0.62)] mb-3">Preview:</p>
                  <p className="text-[14px] text-[#221b28] mb-3">
                    {card.content.question || 'Your question will appear here...'}
                  </p>
                  {card.content.questionType === 'text' && (
                    <Input 
                      placeholder={card.content.placeholder || 'Type your answer...'} 
                      className="rounded-[18px]"
                      disabled
                    />
                  )}
                  {card.content.questionType === 'multipleChoice' && (
                    <div className="space-y-2">
                      {(card.content.options || ['Option 1', 'Option 2', 'Option 3']).map((option, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 border border-[rgba(0,0,0,0.1)] rounded-lg">
                          <div className="w-4 h-4 rounded-full border-2 border-[#5e09a9]" />
                          <span className="text-[13px] text-[#221b28]">{option}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {card.content.questionType === 'scale' && (
                    <div className="flex items-center justify-between gap-2">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <button
                          key={num}
                          className="w-10 h-10 rounded-full border-2 border-[rgba(0,0,0,0.1)] text-[13px] hover:border-[#5e09a9]"
                          disabled
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div className="flex-1 bg-[#f8f8fa] overflow-auto">
      <div className="max-w-[1200px] mx-auto p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            {step !== 'template' && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setStep(step === 'cards' ? 'details' : 'template')}
                className="hover:bg-[rgba(85,37,126,0.05)]"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}
            <div>
              <h1 className="font-['Inter',_sans-serif] font-semibold text-[22px] text-[#221b28] tracking-[-0.84px] mb-1">
                Module Builder
              </h1>
              <p className="text-[15px] text-[rgba(34,20,46,0.62)]">
                {step === 'template' && 'Choose a template to get started'}
                {step === 'details' && 'Add module details'}
                {step === 'cards' && 'Build your module cards'}
              </p>
            </div>
          </div>
          {step === 'cards' && (
            <Button className="bg-[#5e09a9] hover:bg-[#4a0787] text-white rounded-[18px] px-6">
              <Save className="w-4 h-4 mr-2" />
              Save Module
            </Button>
          )}
        </div>

        {/* Step Indicator */}
        <div className="flex items-center gap-2 mb-8">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
            step === 'template' 
              ? 'bg-[#5e09a9] text-white' 
              : 'bg-white border border-[rgba(0,0,0,0.1)] text-[rgba(34,20,46,0.62)]'
          }`}>
            <span className="text-[13px]">1. Choose Template</span>
          </div>
          <div className="h-[1px] w-8 bg-[rgba(0,0,0,0.1)]" />
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
            step === 'details' 
              ? 'bg-[#5e09a9] text-white' 
              : 'bg-white border border-[rgba(0,0,0,0.1)] text-[rgba(34,20,46,0.62)]'
          }`}>
            <span className="text-[13px]">2. Module Details</span>
          </div>
          <div className="h-[1px] w-8 bg-[rgba(0,0,0,0.1)]" />
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
            step === 'cards' 
              ? 'bg-[#5e09a9] text-white' 
              : 'bg-white border border-[rgba(0,0,0,0.1)] text-[rgba(34,20,46,0.62)]'
          }`}>
            <span className="text-[13px]">3. Build Cards</span>
          </div>
        </div>

        {/* Step 1: Template Selection */}
        {step === 'template' && (
          <div className="grid grid-cols-2 gap-6">
            {templates.map((template) => (
              <Card
                key={template.id}
                className="p-6 border border-[rgba(0,0,0,0.1)] bg-white hover:border-[#5e09a9] cursor-pointer transition-colors"
                onClick={() => handleTemplateSelect(template)}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(94,9,169,0.1)] flex items-center justify-center flex-shrink-0">
                    <template.icon className="w-6 h-6 text-[#5e09a9]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-[#221b28] mb-1">{template.name}</h3>
                    <p className="text-[13px] text-[rgba(34,20,46,0.62)] mb-3">
                      {template.description}
                    </p>
                    <Badge variant="outline" className="text-[11px]">
                      {template.cards.length} {template.cards.length === 1 ? 'card' : 'cards'} included
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Step 2: Component Details */}
        {step === 'details' && (
          <Card className="p-8 border border-[rgba(0,0,0,0.1)] bg-white">
            <div className="space-y-6">
              <div>
                <Label htmlFor="module-title" className="text-[#221b28] mb-2 block">
                  Module Title *
                </Label>
                <Input
                  id="module-title"
                  placeholder="e.g., Introduction to Gut Health"
                  value={componentDetails.title}
                  onChange={(e) => setComponentDetails({ ...componentDetails, title: e.target.value })}
                  className="rounded-[18px]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="topic" className="text-[#221b28] mb-2 block">
                    Topic *
                  </Label>
                  <Select
                    value={componentDetails.topic}
                    onValueChange={(value) => setComponentDetails({ ...componentDetails, topic: value })}
                  >
                    <SelectTrigger id="topic" className="rounded-[18px]">
                      <SelectValue placeholder="Select topic..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gut-health">Gut Health</SelectItem>
                      <SelectItem value="hormones">Hormones</SelectItem>
                      <SelectItem value="nutrition">Nutrition</SelectItem>
                      <SelectItem value="inflammation">Inflammation</SelectItem>
                      <SelectItem value="detoxification">Detoxification</SelectItem>
                      <SelectItem value="sleep">Sleep</SelectItem>
                      <SelectItem value="stress">Stress Management</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="difficulty" className="text-[#221b28] mb-2 block">
                    Difficulty *
                  </Label>
                  <Select
                    value={componentDetails.difficulty}
                    onValueChange={(value) => setComponentDetails({ ...componentDetails, difficulty: value })}
                  >
                    <SelectTrigger id="difficulty" className="rounded-[18px]">
                      <SelectValue placeholder="Select difficulty..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="type" className="text-[#221b28] mb-2 block">
                    Module Type *
                  </Label>
                  <Select
                    value={componentDetails.type}
                    onValueChange={(value) => setComponentDetails({ ...componentDetails, type: value })}
                  >
                    <SelectTrigger id="type" className="rounded-[18px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="video">Video</SelectItem>
                      <SelectItem value="lesson">Lesson</SelectItem>
                      <SelectItem value="reading">Reading</SelectItem>
                      <SelectItem value="assessment">Assessment</SelectItem>
                      <SelectItem value="quiz">Quiz</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="duration" className="text-[#221b28] mb-2 block">
                    Duration (minutes) *
                  </Label>
                  <Input
                    id="duration"
                    type="number"
                    placeholder="30"
                    value={componentDetails.duration}
                    onChange={(e) => setComponentDetails({ ...componentDetails, duration: e.target.value })}
                    className="rounded-[18px]"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description" className="text-[#221b28] mb-2 block">
                  Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Brief description of what this module covers..."
                  value={componentDetails.description}
                  onChange={(e) => setComponentDetails({ ...componentDetails, description: e.target.value })}
                  className="rounded-[18px] min-h-[120px]"
                />
              </div>

              <div>
                <Label className="text-[#221b28] mb-2 block">
                  Metadata Tags
                </Label>
                <p className="text-[13px] text-[rgba(34,20,46,0.62)] mb-3">
                  Add tags to help categorize and filter this module
                </p>
                
                {/* Selected Tags */}
                {componentDetails.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {componentDetails.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-[#5e09a9] text-white hover:bg-[#4a0787] pl-3 pr-2 py-1.5 gap-1.5"
                      >
                        {tag}
                        <button
                          onClick={() => {
                            setComponentDetails({
                              ...componentDetails,
                              tags: componentDetails.tags.filter(t => t !== tag)
                            });
                          }}
                          className="hover:bg-[rgba(255,255,255,0.2)] rounded-full p-0.5"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Available Tags */}
                <div className="border border-[rgba(0,0,0,0.1)] rounded-[18px] p-4 bg-[#f8f8fa]">
                  <div className="flex flex-wrap gap-2">
                    {availableTags
                      .filter(tag => !componentDetails.tags.includes(tag))
                      .map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="cursor-pointer hover:bg-[rgba(94,9,169,0.1)] hover:border-[#5e09a9] transition-colors"
                          onClick={() => {
                            setComponentDetails({
                              ...componentDetails,
                              tags: [...componentDetails.tags, tag]
                            });
                          }}
                        >
                          <Plus className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                  </div>
                  {availableTags.filter(tag => !componentDetails.tags.includes(tag)).length === 0 && (
                    <p className="text-[13px] text-[rgba(34,20,46,0.62)] text-center">
                      All tags have been added
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <Button
                onClick={() => setStep('cards')}
                disabled={!componentDetails.title || !componentDetails.topic || !componentDetails.difficulty}
                className="bg-[#5e09a9] hover:bg-[#4a0787] text-white rounded-[18px] px-6"
              >
                Continue to Card Builder
              </Button>
            </div>
          </Card>
        )}

        {/* Step 3: Card Builder */}
        {step === 'cards' && (
          <div className="space-y-6">
            {/* Component Info */}
            <Card className="p-6 border border-[rgba(0,0,0,0.1)] bg-white">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="font-medium text-[#221b28] mb-2">{componentDetails.title}</h2>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-[11px]">
                      {componentDetails.topic}
                    </Badge>
                    <Badge variant="outline" className="text-[11px]">
                      {componentDetails.difficulty}
                    </Badge>
                    <Badge variant="outline" className="text-[11px]">
                      {componentDetails.duration} min
                    </Badge>
                    <Badge variant="outline" className="text-[11px]">
                      {cards.length} {cards.length === 1 ? 'card' : 'cards'}
                    </Badge>
                  </div>
                  {componentDetails.tags.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5">
                      <Tag className="w-3 h-3 text-[rgba(34,20,46,0.62)]" />
                      {componentDetails.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className="bg-[rgba(94,9,169,0.1)] text-[#5e09a9] hover:bg-[rgba(94,9,169,0.1)] border-0 text-[10px] px-2 py-0.5"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Card>

            {/* Cards */}
            <div className="space-y-4">
              {cards.map((card, index) => renderCardEditor(card, index))}
            </div>

            {/* Add Card Button */}
            <Card className="p-6 border-2 border-dashed border-[rgba(0,0,0,0.2)] bg-transparent hover:bg-white transition-colors">
              <div className="flex items-center justify-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => handleAddCard('video')}
                  className="flex-col h-auto py-4 px-6 rounded-xl border-[rgba(0,0,0,0.1)]"
                >
                  <Video className="w-6 h-6 mb-2 text-[#5e09a9]" />
                  <span className="text-[13px]">Add Video</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleAddCard('text')}
                  className="flex-col h-auto py-4 px-6 rounded-xl border-[rgba(0,0,0,0.1)]"
                >
                  <FileText className="w-6 h-6 mb-2 text-[#5e09a9]" />
                  <span className="text-[13px]">Add Text</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleAddCard('question')}
                  className="flex-col h-auto py-4 px-6 rounded-xl border-[rgba(0,0,0,0.1)]"
                >
                  <ClipboardList className="w-6 h-6 mb-2 text-[#5e09a9]" />
                  <span className="text-[13px]">Add Question</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleAddCard('takeaway')}
                  className="flex-col h-auto py-4 px-6 rounded-xl border-[rgba(0,0,0,0.1)]"
                >
                  <CheckSquare className="w-6 h-6 mb-2 text-[#5e09a9]" />
                  <span className="text-[13px]">Add Takeaway</span>
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
