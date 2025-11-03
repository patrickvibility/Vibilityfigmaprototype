import { useState } from 'react';
import { Bell, Check, X, AlertCircle, CheckCircle2, Info, TrendingUp, UserPlus, Calendar, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from './ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export interface Notification {
  id: string;
  type: 'success' | 'info' | 'warning' | 'alert';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  category: 'system' | 'patient' | 'plan' | 'team';
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'success',
    title: 'Plan Completed',
    message: 'Sarah Johnson completed the Hormone Balance Plan',
    timestamp: '5 min ago',
    read: false,
    category: 'patient',
  },
  {
    id: '2',
    type: 'info',
    title: 'New Patient Registered',
    message: 'Michael Chen has been added to your practice',
    timestamp: '1 hour ago',
    read: false,
    category: 'patient',
  },
  {
    id: '3',
    type: 'alert',
    title: 'Lab Results Available',
    message: 'New lab results ready for review - Emily Davis',
    timestamp: '2 hours ago',
    read: false,
    category: 'patient',
  },
  {
    id: '4',
    type: 'info',
    title: 'Module Published',
    message: 'Your "Gut Health Fundamentals" module is now live',
    timestamp: '3 hours ago',
    read: true,
    category: 'plan',
  },
  {
    id: '5',
    type: 'success',
    title: 'Team Member Added',
    message: 'Dr. Lisa Martinez joined your practice team',
    timestamp: 'Yesterday',
    read: true,
    category: 'team',
  },
  {
    id: '6',
    type: 'warning',
    title: 'Upcoming Appointment',
    message: 'Coaching session with Robert Wilson in 30 minutes',
    timestamp: 'Yesterday',
    read: true,
    category: 'system',
  },
  {
    id: '7',
    type: 'info',
    title: 'Plan Template Updated',
    message: 'Metabolic Health Plan template has been updated',
    timestamp: '2 days ago',
    read: true,
    category: 'plan',
  },
  {
    id: '8',
    type: 'success',
    title: 'Patient Progress Milestone',
    message: 'James Anderson reached 75% plan completion',
    timestamp: '2 days ago',
    read: true,
    category: 'patient',
  },
];

export function NotificationCenter() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [isOpen, setIsOpen] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const deleteNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      case 'info':
        return <Info className="w-5 h-5 text-blue-600" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-orange-600" />;
      case 'alert':
        return <AlertCircle className="w-5 h-5 text-red-600" />;
    }
  };

  const getNotificationBgColor = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return 'bg-green-100';
      case 'info':
        return 'bg-blue-100';
      case 'warning':
        return 'bg-orange-100';
      case 'alert':
        return 'bg-red-100';
    }
  };

  const filterByCategory = (category: string) => {
    if (category === 'all') return notifications;
    return notifications.filter((n) => n.category === category);
  };

  const NotificationList = ({ notifs }: { notifs: Notification[] }) => (
    <div className="divide-y divide-[rgba(0,0,0,0.05)]">
      {notifs.length === 0 ? (
        <div className="py-12 text-center">
          <Bell className="w-12 h-12 text-[rgba(34,20,46,0.2)] mx-auto mb-3" />
          <p className="text-[14px] text-[rgba(34,20,46,0.62)]">No notifications</p>
        </div>
      ) : (
        notifs.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 hover:bg-[rgba(79,95,237,0.02)] transition-colors ${
              !notification.read ? 'bg-[rgba(79,95,237,0.03)]' : ''
            }`}
          >
            <div className="flex gap-3">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${getNotificationBgColor(
                  notification.type
                )}`}
              >
                {getNotificationIcon(notification.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="font-medium text-[#221b28] text-[14px]">
                    {notification.title}
                  </p>
                  {!notification.read && (
                    <div className="w-2 h-2 rounded-full bg-[#4F5FED] shrink-0 mt-1.5" />
                  )}
                </div>
                <p className="text-[13px] text-[rgba(34,20,46,0.62)] mb-2">
                  {notification.message}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-[12px] text-[rgba(34,20,46,0.5)]">
                    {notification.timestamp}
                  </p>
                  <div className="flex gap-1">
                    {!notification.read && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 hover:bg-[rgba(79,95,237,0.1)] hover:text-[#4F5FED]"
                        onClick={() => markAsRead(notification.id)}
                      >
                        <Check className="w-3.5 h-3.5" />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 hover:bg-[rgba(239,68,68,0.1)] hover:text-red-600"
                      onClick={() => deleteNotification(notification.id)}
                    >
                      <X className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative h-9 w-9 hover:bg-[rgba(79,95,237,0.1)] hover:text-[#4F5FED]"
        >
          <Bell className="w-5 h-5" />
          {unreadCount > 0 && (
            <Badge
              className="absolute -top-1 -right-1 h-5 min-w-[20px] px-1 bg-[#4F5FED] hover:bg-[#4F5FED] border-2 border-white text-[11px]"
            >
              {unreadCount > 9 ? '9+' : unreadCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-[480px] p-0">
        <SheetHeader className="p-6 pb-4 border-b border-[rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-['Inter',_sans-serif]">Notifications</SheetTitle>
            {unreadCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={markAllAsRead}
                className="text-[#4F5FED] hover:bg-[rgba(79,95,237,0.1)] h-8"
              >
                Mark all as read
              </Button>
            )}
          </div>
          <SheetDescription className="sr-only">
            View and manage your practice notifications
          </SheetDescription>
        </SheetHeader>
        <Tabs defaultValue="all" className="w-full">
          <div className="px-6 pt-4">
            <TabsList className="grid w-full grid-cols-5 h-9">
              <TabsTrigger value="all" className="text-[12px]">
                All
              </TabsTrigger>
              <TabsTrigger value="patient" className="text-[12px]">
                Patients
              </TabsTrigger>
              <TabsTrigger value="plan" className="text-[12px]">
                Plans
              </TabsTrigger>
              <TabsTrigger value="team" className="text-[12px]">
                Team
              </TabsTrigger>
              <TabsTrigger value="system" className="text-[12px]">
                System
              </TabsTrigger>
            </TabsList>
          </div>
          <ScrollArea className="h-[calc(100vh-180px)]">
            <TabsContent value="all" className="m-0 mt-4">
              <NotificationList notifs={filterByCategory('all')} />
            </TabsContent>
            <TabsContent value="patient" className="m-0 mt-4">
              <NotificationList notifs={filterByCategory('patient')} />
            </TabsContent>
            <TabsContent value="plan" className="m-0 mt-4">
              <NotificationList notifs={filterByCategory('plan')} />
            </TabsContent>
            <TabsContent value="team" className="m-0 mt-4">
              <NotificationList notifs={filterByCategory('team')} />
            </TabsContent>
            <TabsContent value="system" className="m-0 mt-4">
              <NotificationList notifs={filterByCategory('system')} />
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
