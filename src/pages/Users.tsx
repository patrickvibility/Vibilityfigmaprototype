import { useState } from 'react';
import { Search, Plus, Filter, Mail, MoreVertical, Eye } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';

interface UsersProps {
  onUserClick?: (userId: number) => void;
}

export function Users({ onUserClick }: UsersProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'past'>('all');
  const [typeFilter, setTypeFilter] = useState<'all' | 'staff' | 'members'>('all');

  const allUsers = [
    // Staff Members
    {
      id: 101,
      name: 'Dr. Patricia Reynolds',
      email: 'patricia.reynolds@practice.com',
      phone: '(555) 100-0001',
      role: 'owner',
      userType: 'staff',
      status: 'active',
      joinDate: 'Jan 1, 2024',
      department: 'Leadership',
    },
    {
      id: 102,
      name: 'Marcus Anderson',
      email: 'marcus.anderson@practice.com',
      phone: '(555) 100-0002',
      role: 'admin',
      userType: 'staff',
      status: 'active',
      joinDate: 'Mar 15, 2024',
      department: 'Administration',
    },
    {
      id: 103,
      name: 'Dr. Elena Martinez',
      email: 'elena.martinez@practice.com',
      phone: '(555) 100-0003',
      role: 'coach',
      userType: 'staff',
      status: 'active',
      joinDate: 'Feb 10, 2024',
      department: 'Coaching',
      activeClients: 12,
    },
    // Patient Members
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '(555) 123-4567',
      program: 'Functional Medicine Foundation',
      startDate: 'Aug 15, 2025',
      percentComplete: 68,
      status: 'active',
      sentiment: 4.8,
      userType: 'member',
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.chen@email.com',
      phone: '(555) 234-5678',
      program: 'Hormone Balance Program',
      startDate: 'Sep 1, 2025',
      percentComplete: 45,
      status: 'active',
      sentiment: 4.5,
      userType: 'member',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@email.com',
      phone: '(555) 345-6789',
      program: 'Metabolic Reset',
      startDate: 'Jul 20, 2025',
      percentComplete: 82,
      status: 'active',
      sentiment: 4.9,
      userType: 'member',
    },
    {
      id: 4,
      name: 'James Wilson',
      email: 'james.wilson@email.com',
      phone: '(555) 456-7890',
      program: 'Gut Health Intensive',
      startDate: 'Sep 10, 2025',
      percentComplete: 34,
      status: 'active',
      sentiment: 3.8,
      userType: 'member',
    },
    {
      id: 5,
      name: 'Lisa Martinez',
      email: 'lisa.martinez@email.com',
      phone: '(555) 567-8901',
      program: 'Autoimmune Protocol',
      startDate: 'Jul 1, 2025',
      percentComplete: 91,
      status: 'active',
      sentiment: 5.0,
      userType: 'member',
    },
    {
      id: 6,
      name: 'David Thompson',
      email: 'david.thompson@email.com',
      phone: '(555) 678-9012',
      program: 'Detox & Cleanse',
      startDate: 'Aug 25, 2025',
      percentComplete: 56,
      status: 'active',
      sentiment: 4.2,
      userType: 'member',
    },
    {
      id: 7,
      name: 'Amanda Foster',
      email: 'amanda.foster@email.com',
      phone: '(555) 789-0123',
      program: 'Functional Medicine Foundation',
      startDate: 'Sep 15, 2025',
      percentComplete: 23,
      status: 'active',
      sentiment: 3.5,
      userType: 'member',
    },
    {
      id: 8,
      name: 'Ryan Patterson',
      email: 'ryan.patterson@email.com',
      phone: '(555) 890-1234',
      program: 'Hormone Balance Program',
      startDate: 'Aug 5, 2025',
      percentComplete: 72,
      status: 'active',
      sentiment: 4.7,
      userType: 'member',
    },
    {
      id: 9,
      name: 'Jennifer Lee',
      email: 'jennifer.lee@email.com',
      phone: '(555) 901-2345',
      program: 'Metabolic Reset',
      startDate: 'Sep 20, 2025',
      percentComplete: 15,
      status: 'active',
      sentiment: 3.2,
      userType: 'member',
    },
    {
      id: 10,
      name: 'Christopher Davis',
      email: 'christopher.davis@email.com',
      phone: '(555) 012-3456',
      program: 'Gut Health Intensive',
      startDate: 'Jul 15, 2025',
      percentComplete: 88,
      status: 'active',
      sentiment: 4.9,
      userType: 'member',
    },
    {
      id: 11,
      name: 'Robert Anderson',
      email: 'robert.anderson@email.com',
      phone: '(555) 111-2222',
      program: 'Functional Medicine Foundation',
      startDate: 'Mar 10, 2025',
      percentComplete: 100,
      status: 'past',
      sentiment: 4.6,
      userType: 'member',
    },
    {
      id: 12,
      name: 'Michelle Taylor',
      email: 'michelle.taylor@email.com',
      phone: '(555) 222-3333',
      program: 'Hormone Balance Program',
      startDate: 'Feb 5, 2025',
      percentComplete: 100,
      status: 'past',
      sentiment: 4.8,
      userType: 'member',
    },
    {
      id: 13,
      name: 'Thomas Brown',
      email: 'thomas.brown@email.com',
      phone: '(555) 333-4444',
      program: 'Metabolic Reset',
      startDate: 'Apr 12, 2025',
      percentComplete: 100,
      status: 'past',
      sentiment: 4.4,
      userType: 'member',
    },
    {
      id: 14,
      name: 'Karen White',
      email: 'karen.white@email.com',
      phone: '(555) 444-5555',
      program: 'Autoimmune Protocol',
      startDate: 'Jan 20, 2025',
      percentComplete: 100,
      status: 'past',
      sentiment: 4.9,
      userType: 'member',
    },
    {
      id: 15,
      name: 'Daniel Garcia',
      email: 'daniel.garcia@email.com',
      phone: '(555) 555-6666',
      program: 'Detox & Cleanse',
      startDate: 'May 8, 2025',
      percentComplete: 100,
      status: 'past',
      sentiment: 4.3,
      userType: 'member',
    },
  ];

  const filteredUsers = allUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (user.userType === 'member' && user.program?.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         (user.userType === 'staff' && user.role?.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    const matchesType = typeFilter === 'all' || 
                       (typeFilter === 'staff' && user.userType === 'staff') ||
                       (typeFilter === 'members' && user.userType === 'member');
    return matchesSearch && matchesStatus && matchesType;
  });

  const staffCount = allUsers.filter(u => u.userType === 'staff').length;
  const memberCount = allUsers.filter(u => u.userType === 'member').length;
  const activeCount = allUsers.filter(u => u.status === 'active' && u.userType === 'member').length;
  const pastCount = allUsers.filter(u => u.status === 'past' && u.userType === 'member').length;

  return (
    <div className="flex-1 bg-[#f8f8fa] overflow-auto">
      <div className="max-w-[1400px] mx-auto p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-['Inter',_sans-serif] font-semibold text-[22px] text-[#221b28] tracking-[-0.84px] mb-2">
              Users
            </h1>
            <p className="text-[15px] text-[rgba(34,20,46,0.62)]">
              {allUsers.length} total users ({staffCount} staff, {memberCount} members)
            </p>
          </div>
          <Button className="bg-[#5e09a9] hover:bg-[#4a0787] text-white rounded-[18px] px-4">
            <Plus className="w-4 h-4 mr-2" />
            Add User
          </Button>
        </div>

        {/* Type Filter Tabs */}
        <div className="flex items-center gap-2 mb-4">
          <Button
            variant={typeFilter === 'all' ? 'default' : 'outline'}
            onClick={() => {
              setTypeFilter('all');
              setStatusFilter('all');
            }}
            className={`rounded-[18px] ${
              typeFilter === 'all' 
                ? 'bg-[#5e09a9] hover:bg-[#4a0787] text-white' 
                : ''
            }`}
          >
            All Users ({allUsers.length})
          </Button>
          <Button
            variant={typeFilter === 'staff' ? 'default' : 'outline'}
            onClick={() => {
              setTypeFilter('staff');
              setStatusFilter('all');
            }}
            className={`rounded-[18px] ${
              typeFilter === 'staff' 
                ? 'bg-[#5e09a9] hover:bg-[#4a0787] text-white' 
                : ''
            }`}
          >
            Staff ({staffCount})
          </Button>
          <Button
            variant={typeFilter === 'members' ? 'default' : 'outline'}
            onClick={() => setTypeFilter('members')}
            className={`rounded-[18px] ${
              typeFilter === 'members' 
                ? 'bg-[#5e09a9] hover:bg-[#4a0787] text-white' 
                : ''
            }`}
          >
            Members ({memberCount})
          </Button>
        </div>

        {/* Status Filter Tabs (only shown for members) */}
        {typeFilter === 'members' && (
          <div className="flex items-center gap-2 mb-6">
            <Button
              variant={statusFilter === 'all' ? 'default' : 'outline'}
              onClick={() => setStatusFilter('all')}
              className={`rounded-[18px] ${
                statusFilter === 'all' 
                  ? 'bg-[#5e09a9] hover:bg-[#4a0787] text-white' 
                  : ''
              }`}
            >
              All Members ({memberCount})
            </Button>
            <Button
              variant={statusFilter === 'active' ? 'default' : 'outline'}
              onClick={() => setStatusFilter('active')}
              className={`rounded-[18px] ${
                statusFilter === 'active' 
                  ? 'bg-[#5e09a9] hover:bg-[#4a0787] text-white' 
                  : ''
              }`}
            >
              Active ({activeCount})
            </Button>
            <Button
              variant={statusFilter === 'past' ? 'default' : 'outline'}
              onClick={() => setStatusFilter('past')}
              className={`rounded-[18px] ${
                statusFilter === 'past' 
                  ? 'bg-[#5e09a9] hover:bg-[#4a0787] text-white' 
                  : ''
              }`}
            >
              Past Members ({pastCount})
            </Button>
          </div>
        )}

        {typeFilter !== 'members' && <div className="mb-6" />}

        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-[rgba(34,20,46,0.62)]" />
            <Input
              placeholder="Search by name, email, or program..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-[18px]"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.1)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#f8f8fa] border-b border-[rgba(0,0,0,0.1)]">
                <tr>
                  <th className="text-left px-6 py-4 text-[13px] font-['Inter',_sans-serif] font-medium text-[rgba(34,20,46,0.62)] uppercase tracking-wider">
                    {typeFilter === 'staff' ? 'Staff Member' : typeFilter === 'members' ? 'Member' : 'Name'}
                  </th>
                  <th className="text-left px-6 py-4 text-[13px] font-['Inter',_sans-serif] font-medium text-[rgba(34,20,46,0.62)] uppercase tracking-wider">
                    {typeFilter === 'staff' ? 'Role / Department' : 'Program'}
                  </th>
                  {typeFilter !== 'staff' && (
                    <th className="text-left px-6 py-4 text-[13px] font-['Inter',_sans-serif] font-medium text-[rgba(34,20,46,0.62)] uppercase tracking-wider">
                      Progress
                    </th>
                  )}
                  <th className="text-left px-6 py-4 text-[13px] font-['Inter',_sans-serif] font-medium text-[rgba(34,20,46,0.62)] uppercase tracking-wider">
                    {typeFilter === 'staff' ? 'Join Date' : 'Start Date'}
                  </th>
                  {typeFilter !== 'staff' && (
                    <th className="text-left px-6 py-4 text-[13px] font-['Inter',_sans-serif] font-medium text-[rgba(34,20,46,0.62)] uppercase tracking-wider">
                      Sentiment
                    </th>
                  )}
                  <th className="text-left px-6 py-4 text-[13px] font-['Inter',_sans-serif] font-medium text-[rgba(34,20,46,0.62)] uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-left px-6 py-4 text-[13px] font-['Inter',_sans-serif] font-medium text-[rgba(34,20,46,0.62)] uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(0,0,0,0.1)]">
                {filteredUsers.map((user) => (
                  <tr 
                    key={user.id} 
                    className="hover:bg-[#f8f8fa] transition-colors cursor-pointer"
                    onClick={() => onUserClick?.(user.id)}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          user.userType === 'staff' 
                            ? 'bg-[rgba(255,152,0,0.1)]' 
                            : 'bg-[rgba(94,9,169,0.1)]'
                        }`}>
                          <span className={`text-[14px] font-medium ${
                            user.userType === 'staff' 
                              ? 'text-[#ff9800]' 
                              : 'text-[#5e09a9]'
                          }`}>
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-medium text-[#221b28]">{user.name}</p>
                            {user.userType === 'staff' && (
                              <Badge className="bg-orange-100 text-orange-700 border-0 text-[10px] px-1.5 py-0">
                                Staff
                              </Badge>
                            )}
                          </div>
                          <p className="text-[13px] text-[rgba(34,20,46,0.62)]">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {user.userType === 'staff' ? (
                        <div>
                          <p className="text-[14px] font-medium text-[#221b28] capitalize">{user.role}</p>
                          <p className="text-[12px] text-[rgba(34,20,46,0.62)]">{user.department}</p>
                          {user.activeClients && (
                            <p className="text-[11px] text-[#5e09a9] mt-0.5">{user.activeClients} active clients</p>
                          )}
                        </div>
                      ) : (
                        <span className="text-[14px] text-[#221b28]">{user.program}</span>
                      )}
                    </td>
                    {typeFilter !== 'staff' && (
                      user.userType === 'member' ? (
                        <td className="px-6 py-4">
                          <div className="w-32">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[12px] text-[rgba(34,20,46,0.62)]">{user.percentComplete}%</span>
                            </div>
                            <Progress value={user.percentComplete} className="h-2" />
                          </div>
                        </td>
                      ) : (
                        <td className="px-6 py-4">
                          <span className="text-[14px] text-[rgba(34,20,46,0.62)]">—</span>
                        </td>
                      )
                    )}
                    <td className="px-6 py-4">
                      <span className="text-[14px] text-[rgba(34,20,46,0.62)]">
                        {user.userType === 'staff' ? user.joinDate : user.startDate}
                      </span>
                    </td>
                    {typeFilter !== 'staff' && (
                      user.userType === 'member' ? (
                        <td className="px-6 py-4">
                          <Badge 
                            className={`text-[12px] px-2 py-1 ${
                              user.sentiment >= 4.5
                                ? 'bg-green-100 text-green-700 border-0'
                                : user.sentiment >= 3.5
                                ? 'bg-yellow-100 text-yellow-700 border-0'
                                : 'bg-red-100 text-red-700 border-0'
                            }`}
                          >
                            {user.sentiment.toFixed(1)}
                          </Badge>
                        </td>
                      ) : (
                        <td className="px-6 py-4">
                          <span className="text-[14px] text-[rgba(34,20,46,0.62)]">—</span>
                        </td>
                      )
                    )}
                    <td className="px-6 py-4">
                      <Badge 
                        className={`text-[12px] px-2 py-1 ${
                          user.status === 'active'
                            ? 'bg-[rgba(85,37,126,0.09)] text-[#46087C] border-0'
                            : 'bg-[rgba(0,0,0,0.05)] text-[rgba(34,20,46,0.62)] border-0'
                        }`}
                      >
                        {user.status === 'active' ? 'Active' : user.userType === 'staff' ? 'Inactive' : 'Completed'}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="rounded-lg hover:bg-[rgba(94,9,169,0.1)]"
                        onClick={(e) => {
                          e.stopPropagation();
                          onUserClick?.(user.id);
                        }}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Profile
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
