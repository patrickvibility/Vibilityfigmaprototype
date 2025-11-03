import { useState } from 'react';
import { Search, Send, Paperclip, MoreVertical, Bot, UserCircle, Stethoscope, Circle, CheckCheck, Filter } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Badge } from '../components/ui/badge';
import { Textarea } from '../components/ui/textarea';
import { ScrollArea } from '../components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderType: 'patient' | 'provider' | 'ai' | 'coach';
  content: string;
  timestamp: string;
  read: boolean;
}

interface Conversation {
  id: string;
  patientId: string;
  patientName: string;
  patientAvatar?: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  planName: string;
  messages: Message[];
  activeResponders: ('provider' | 'ai' | 'coach')[];
}

const mockConversations: Conversation[] = [
  {
    id: '1',
    patientId: 'p1',
    patientName: 'Sarah Johnson',
    lastMessage: 'Thank you both! This is really helpful.',
    lastMessageTime: '2 min ago',
    unreadCount: 2,
    planName: 'Hormone Balance Plan',
    activeResponders: ['provider', 'coach'],
    messages: [
      {
        id: 'm1',
        senderId: 'p1',
        senderName: 'Sarah Johnson',
        senderType: 'patient',
        content: 'I have some questions about my supplements and sleep routine. Should I take the magnesium in the morning or evening? Also, I\'m still having trouble falling asleep.',
        timestamp: '10:30 AM',
        read: true,
      },
      {
        id: 'm2',
        senderId: 'provider',
        senderName: 'Dr. Martinez',
        senderType: 'provider',
        content: 'Hi Sarah! For the magnesium - I recommend taking it in the evening, about 30 minutes before bed. It can help with relaxation and sleep quality.',
        timestamp: '10:35 AM',
        read: true,
      },
      {
        id: 'm3',
        senderId: 'coach',
        senderName: 'Health Coach Lisa',
        senderType: 'coach',
        content: 'Hey Sarah! On the sleep side - have you been following the wind-down routine we discussed? Try dimming lights 1 hour before bed and avoiding screens. This can really help with your magnesium working more effectively.',
        timestamp: '10:38 AM',
        read: true,
      },
      {
        id: 'm4',
        senderId: 'p1',
        senderName: 'Sarah Johnson',
        senderType: 'patient',
        content: 'Can I take the magnesium with food? And yes, I\'ve been trying the routine but still struggling some nights.',
        timestamp: '10:42 AM',
        read: true,
      },
      {
        id: 'm5',
        senderId: 'provider',
        senderName: 'Dr. Martinez',
        senderType: 'provider',
        content: 'Yes, absolutely! Taking it with a small snack can help with absorption. A handful of nuts or some yogurt would work well.',
        timestamp: '10:45 AM',
        read: true,
      },
      {
        id: 'm6',
        senderId: 'p1',
        senderName: 'Sarah Johnson',
        senderType: 'patient',
        content: 'Thank you both! This is really helpful.',
        timestamp: '10:48 AM',
        read: false,
      },
    ],
  },
  {
    id: '2',
    patientId: 'p2',
    patientName: 'Michael Chen',
    lastMessage: 'Perfect, thanks everyone!',
    lastMessageTime: '15 min ago',
    unreadCount: 1,
    planName: 'Gut Health Protocol',
    activeResponders: ['ai', 'provider'],
    messages: [
      {
        id: 'm1',
        senderId: 'p2',
        senderName: 'Michael Chen',
        senderType: 'patient',
        content: 'Can someone explain the difference between probiotics and prebiotics? I see both in my plan and I\'m confused about when to take each one.',
        timestamp: '9:45 AM',
        read: true,
      },
      {
        id: 'm2',
        senderId: 'ai',
        senderName: 'Vibility AI',
        senderType: 'ai',
        content: 'Great question! Probiotics are live beneficial bacteria that you consume, while prebiotics are types of fiber that feed the good bacteria already in your gut. Think of probiotics as the "soldiers" and prebiotics as the "food" for those soldiers.',
        timestamp: '9:46 AM',
        read: true,
      },
      {
        id: 'm3',
        senderId: 'p2',
        senderName: 'Michael Chen',
        senderType: 'patient',
        content: 'So I should take both every day? Are there any interactions I should worry about?',
        timestamp: '9:50 AM',
        read: true,
      },
      {
        id: 'm4',
        senderId: 'ai',
        senderName: 'Vibility AI',
        senderType: 'ai',
        content: 'Yes, take both daily. They work synergistically with no negative interactions. In fact, they enhance each other\'s effectiveness!',
        timestamp: '9:51 AM',
        read: true,
      },
      {
        id: 'm5',
        senderId: 'provider',
        senderName: 'Dr. Martinez',
        senderType: 'provider',
        content: 'Just to add - take your probiotic on an empty stomach first thing in the morning, and the prebiotic fiber can be taken with meals. This timing optimizes absorption.',
        timestamp: '9:55 AM',
        read: true,
      },
      {
        id: 'm6',
        senderId: 'p2',
        senderName: 'Michael Chen',
        senderType: 'patient',
        content: 'Perfect, thanks everyone!',
        timestamp: '9:58 AM',
        read: false,
      },
    ],
  },
  {
    id: '3',
    patientId: 'p3',
    patientName: 'Emily Davis',
    lastMessage: 'Definitely! I\'ll keep at it.',
    lastMessageTime: '1 hour ago',
    unreadCount: 0,
    planName: 'Metabolic Health Plan',
    activeResponders: ['coach'],
    messages: [
      {
        id: 'm1',
        senderId: 'p3',
        senderName: 'Emily Davis',
        senderType: 'patient',
        content: 'I completed all my exercises this week! Three strength sessions and two yoga classes. Feeling great!',
        timestamp: 'Yesterday 4:30 PM',
        read: true,
      },
      {
        id: 'm2',
        senderId: 'coach',
        senderName: 'Health Coach Lisa',
        senderType: 'coach',
        content: 'That\'s wonderful, Emily! I\'m so proud of your consistency. How are you feeling energy-wise?',
        timestamp: 'Yesterday 4:45 PM',
        read: true,
      },
      {
        id: 'm3',
        senderId: 'p3',
        senderName: 'Emily Davis',
        senderType: 'patient',
        content: 'Yes! I feel so much more energized. The afternoon slump is completely gone.',
        timestamp: 'Yesterday 5:00 PM',
        read: true,
      },
      {
        id: 'm4',
        senderId: 'coach',
        senderName: 'Health Coach Lisa',
        senderType: 'coach',
        content: 'That\'s exactly what we want to see! Your metabolic health is clearly improving. Keep up the amazing work!',
        timestamp: '10:15 AM',
        read: true,
      },
      {
        id: 'm5',
        senderId: 'p3',
        senderName: 'Emily Davis',
        senderType: 'patient',
        content: 'Definitely! I\'ll keep at it.',
        timestamp: '10:20 AM',
        read: true,
      },
    ],
  },
  {
    id: '4',
    patientId: 'p4',
    patientName: 'Robert Wilson',
    lastMessage: 'Nothing to worry about. Keep following...',
    lastMessageTime: '3 hours ago',
    unreadCount: 0,
    planName: 'Cardiovascular Wellness',
    activeResponders: ['provider'],
    messages: [
      {
        id: 'm1',
        senderId: 'p4',
        senderName: 'Robert Wilson',
        senderType: 'patient',
        content: 'My lab results are in from last week\'s appointment. Can you review them?',
        timestamp: '8:00 AM',
        read: true,
      },
      {
        id: 'm2',
        senderId: 'provider',
        senderName: 'Dr. Martinez',
        senderType: 'provider',
        content: 'Thanks for letting me know, Robert. I\'ve reviewed them and overall they look good. Your cholesterol levels have improved since starting the plan.',
        timestamp: '8:15 AM',
        read: true,
      },
      {
        id: 'm3',
        senderId: 'p4',
        senderName: 'Robert Wilson',
        senderType: 'patient',
        content: 'That\'s great! Should I be concerned about anything?',
        timestamp: '8:20 AM',
        read: true,
      },
      {
        id: 'm4',
        senderId: 'provider',
        senderName: 'Dr. Martinez',
        senderType: 'provider',
        content: 'Nothing to worry about. Keep following your current plan and we\'ll recheck in 3 months.',
        timestamp: '8:25 AM',
        read: true,
      },
    ],
  },
  {
    id: '5',
    patientId: 'p5',
    patientName: 'Amanda Torres',
    lastMessage: 'I\'d recommend prepping 3-4 Buddha bowls...',
    lastMessageTime: '5 hours ago',
    unreadCount: 0,
    planName: 'Weight Management Plan',
    activeResponders: ['coach'],
    messages: [
      {
        id: 'm1',
        senderId: 'p5',
        senderName: 'Amanda Torres',
        senderType: 'patient',
        content: 'I tried the Buddha bowl recipe from my meal plan and it was delicious! I felt really satisfied and didn\'t have my usual afternoon slump. Any tips for meal prep for next week?',
        timestamp: '7:00 AM',
        read: true,
      },
      {
        id: 'm2',
        senderId: 'coach',
        senderName: 'Health Coach Lisa',
        senderType: 'coach',
        content: 'I\'m so glad you enjoyed it! That\'s one of my favorites too. The fact that you didn\'t have an afternoon slump is a great sign - your blood sugar is stabilizing!',
        timestamp: '7:15 AM',
        read: true,
      },
      {
        id: 'm3',
        senderId: 'coach',
        senderName: 'Health Coach Lisa',
        senderType: 'coach',
        content: 'I\'d recommend prepping 3-4 Buddha bowls at once on Sunday. You can mix up the proteins and toppings to keep it interesting!',
        timestamp: '7:16 AM',
        read: true,
      },
    ],
  },
  {
    id: '6',
    patientId: 'p6',
    patientName: 'James Martinez',
    lastMessage: 'Perfect! I\'ll try the band version.',
    lastMessageTime: '6 hours ago',
    unreadCount: 0,
    planName: 'Joint Health & Mobility',
    activeResponders: ['ai', 'coach'],
    messages: [
      {
        id: 'm1',
        senderId: 'p6',
        senderName: 'James Martinez',
        senderType: 'patient',
        content: 'I\'m looking at week 3 of my plan and there\'s a module called "Resistance Training Basics". Can I do these exercises at home or do I need a gym membership?',
        timestamp: '6:00 AM',
        read: true,
      },
      {
        id: 'm2',
        senderId: 'ai',
        senderName: 'Vibility AI',
        senderType: 'ai',
        content: 'You can definitely do resistance training at home! The exercises can be modified using resistance bands, dumbbells, or even bodyweight. What equipment do you have available?',
        timestamp: '6:01 AM',
        read: true,
      },
      {
        id: 'm3',
        senderId: 'p6',
        senderName: 'James Martinez',
        senderType: 'patient',
        content: 'I have resistance bands but no dumbbells. Will that work?',
        timestamp: '6:05 AM',
        read: true,
      },
      {
        id: 'm4',
        senderId: 'coach',
        senderName: 'Health Coach Mike',
        senderType: 'coach',
        content: 'Hi James! Resistance bands are perfect. I can send you a modified version of the workout that uses bands exclusively. They\'re actually great for joint health because they provide variable resistance throughout the movement.',
        timestamp: '6:30 AM',
        read: true,
      },
      {
        id: 'm5',
        senderId: 'p6',
        senderName: 'James Martinez',
        senderType: 'patient',
        content: 'Perfect! I\'ll try the band version.',
        timestamp: '6:35 AM',
        read: true,
      },
    ],
  },
];

export function Messages() {
  const [selectedConversation, setSelectedConversation] = useState<Conversation>(mockConversations[0]);
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'unread'>('all');

  const filteredConversations = mockConversations.filter((conv) => {
    const matchesSearch = conv.patientName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          conv.planName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || (filterType === 'unread' && conv.unreadCount > 0);
    return matchesSearch && matchesFilter;
  });

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // In a real app, this would send the message to the backend
      console.log('Sending message:', messageInput);
      setMessageInput('');
    }
  };

  const getRecipientIcon = (type: string) => {
    switch (type) {
      case 'ai':
        return <Bot className="w-4 h-4" />;
      case 'coach':
        return <UserCircle className="w-4 h-4" />;
      case 'provider':
        return <Stethoscope className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getRecipientLabel = (type: string) => {
    switch (type) {
      case 'ai':
        return 'AI Assistant';
      case 'coach':
        return 'Health Coach';
      case 'provider':
        return 'Provider';
      default:
        return '';
    }
  };

  const getRecipientBadgeColor = (type: string) => {
    switch (type) {
      case 'ai':
        return 'bg-purple-100 text-purple-700';
      case 'coach':
        return 'bg-blue-100 text-blue-700';
      case 'provider':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-white">
      <div className="border-b border-[rgba(0,0,0,0.1)] px-8 py-4">
        <h1 className="font-['Inter',_sans-serif] text-[22px] text-[#221b28] tracking-[-0.84px]">
          Messages
        </h1>
        <p className="text-[14px] text-[rgba(34,20,46,0.62)] mt-1">
          Communicate with your patients through AI, health coaches, or direct messaging
        </p>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Conversations List */}
        <div className="w-[380px] border-r border-[rgba(0,0,0,0.1)] flex flex-col">
          {/* Search and Filter */}
          <div className="p-4 border-b border-[rgba(0,0,0,0.1)] space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[rgba(34,20,46,0.5)]" />
              <Input
                placeholder="Search patients or plans..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 h-9"
              />
            </div>
            <Tabs value={filterType} onValueChange={(v) => setFilterType(v as any)} className="w-full">
              <TabsList className="grid w-full grid-cols-2 h-9">
                <TabsTrigger value="all" className="text-[12px]">All Messages</TabsTrigger>
                <TabsTrigger value="unread" className="text-[12px]">Unread</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Conversations */}
          <ScrollArea className="flex-1">
            <div className="divide-y divide-[rgba(0,0,0,0.05)]">
              {filteredConversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation)}
                  className={`w-full p-4 text-left hover:bg-[rgba(79,95,237,0.03)] transition-colors ${
                    selectedConversation.id === conversation.id ? 'bg-[rgba(79,95,237,0.05)]' : ''
                  }`}
                >
                  <div className="flex gap-3">
                    <Avatar className="w-12 h-12 shrink-0">
                      <AvatarImage src={conversation.patientAvatar} />
                      <AvatarFallback className="bg-[rgba(79,95,237,0.1)] text-[#4F5FED]">
                        {conversation.patientName.split(' ').map((n) => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <p className="font-medium text-[14px] text-[#221b28] truncate">
                          {conversation.patientName}
                        </p>
                        <span className="text-[11px] text-[rgba(34,20,46,0.5)] shrink-0">
                          {conversation.lastMessageTime}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
                        {conversation.activeResponders.map((responder) => (
                          <Badge key={responder} className={`text-[10px] h-5 px-1.5 ${getRecipientBadgeColor(responder)}`}>
                            {getRecipientIcon(responder)}
                          </Badge>
                        ))}
                        <span className="text-[11px] text-[rgba(34,20,46,0.5)]">
                          {conversation.planName}
                        </span>
                      </div>
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-[13px] text-[rgba(34,20,46,0.62)] truncate flex-1 line-clamp-1">
                          {conversation.lastMessage}
                        </p>
                        {conversation.unreadCount > 0 && (
                          <Badge className="bg-[#4F5FED] hover:bg-[#4F5FED] h-5 min-w-[20px] px-1.5 text-[11px] shrink-0">
                            {conversation.unreadCount}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Message Thread */}
        <div className="flex-1 flex flex-col">
          {/* Thread Header */}
          <div className="px-6 py-4 border-b border-[rgba(0,0,0,0.1)] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={selectedConversation.patientAvatar} />
                <AvatarFallback className="bg-[rgba(79,95,237,0.1)] text-[#4F5FED]">
                  {selectedConversation.patientName.split(' ').map((n) => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-[15px] text-[#221b28]">
                  {selectedConversation.patientName}
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[12px] text-[rgba(34,20,46,0.5)]">
                    {selectedConversation.planName}
                  </span>
                  <div className="flex items-center gap-1">
                    {selectedConversation.activeResponders.map((responder) => (
                      <Badge key={responder} className={`text-[10px] h-5 px-1.5 ${getRecipientBadgeColor(responder)}`}>
                        {getRecipientIcon(responder)}
                        <span className="ml-1">{getRecipientLabel(responder)}</span>
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View Patient Profile</DropdownMenuItem>
                <DropdownMenuItem>Mark as Unread</DropdownMenuItem>
                <DropdownMenuItem>Archive Conversation</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-6">
            <div className="space-y-4 max-w-4xl mx-auto">
              {selectedConversation.messages.map((message, index) => {
                const isProvider = message.senderType === 'provider';
                const isAI = message.senderType === 'ai';
                const isCoach = message.senderType === 'coach';
                const isFromTeam = isProvider || isAI || isCoach;

                return (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${isFromTeam ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    {!isFromTeam && (
                      <Avatar className="w-8 h-8 shrink-0">
                        <AvatarFallback className="bg-[rgba(79,95,237,0.1)] text-[#4F5FED] text-[12px]">
                          {message.senderName.split(' ').map((n) => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    )}
                    {isFromTeam && (
                      <Avatar className="w-8 h-8 shrink-0">
                        <AvatarFallback className={`text-[12px] ${
                          isAI ? 'bg-purple-100 text-purple-700' :
                          isCoach ? 'bg-blue-100 text-blue-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {isAI ? <Bot className="w-4 h-4" /> :
                           isCoach ? <UserCircle className="w-4 h-4" /> :
                           <Stethoscope className="w-4 h-4" />}
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div className={`flex-1 ${isFromTeam ? 'items-end' : 'items-start'} flex flex-col`}>
                      <div
                        className={`px-4 py-3 rounded-2xl max-w-[70%] ${
                          isFromTeam
                            ? 'bg-[#4F5FED] text-white'
                            : 'bg-[rgba(0,0,0,0.05)] text-[#221b28]'
                        }`}
                      >
                        <p className="text-[14px] leading-relaxed whitespace-pre-wrap">
                          {message.content}
                        </p>
                      </div>
                      <div className={`flex items-center gap-1.5 mt-1 px-1 ${isFromTeam ? 'flex-row-reverse' : 'flex-row'}`}>
                        <span className="text-[11px] text-[rgba(34,20,46,0.5)]">
                          {message.timestamp}
                        </span>
                        {isFromTeam && (
                          <CheckCheck className={`w-3.5 h-3.5 ${message.read ? 'text-[#4F5FED]' : 'text-[rgba(34,20,46,0.3)]'}`} />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>

          {/* Message Input */}
          <div className="p-4 border-t border-[rgba(0,0,0,0.1)]">
            <div className="flex gap-2 items-end max-w-4xl mx-auto">
              <Button variant="ghost" size="icon" className="h-10 w-10 shrink-0">
                <Paperclip className="w-5 h-5" />
              </Button>
              <div className="flex-1 relative">
                <Textarea
                  placeholder="Type your message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  className="min-h-[44px] max-h-[120px] resize-none pr-12"
                  rows={1}
                />
              </div>
              <Button
                onClick={handleSendMessage}
                disabled={!messageInput.trim()}
                className="h-10 w-10 shrink-0 bg-[#4F5FED] hover:bg-[#3d4bc7] p-0"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-[11px] text-[rgba(34,20,46,0.5)] text-center mt-2">
              Press Enter to send, Shift + Enter for new line
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
