import { useState } from 'react';
import { Search, Filter, Eye, Ban, Trash2 } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Badge } from './ui/badge';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from './ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';

const users = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    status: 'Active',
    joinDate: '2025-10-15',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    lastActive: '2025-11-09 14:30',
    totalSessions: 48,
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'm.chen@email.com',
    status: 'Active',
    joinDate: '2025-09-22',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    lastActive: '2025-11-08 22:15',
    totalSessions: 156,
  },
  {
    id: 3,
    name: 'Emma Davis',
    email: 'emma.d@email.com',
    status: 'Suspended',
    joinDate: '2025-08-10',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    lastActive: '2025-10-30 11:20',
    totalSessions: 89,
  },
  {
    id: 4,
    name: 'James Wilson',
    email: 'j.wilson@email.com',
    status: 'Active',
    joinDate: '2025-11-01',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    lastActive: '2025-11-09 09:45',
    totalSessions: 23,
  },
  {
    id: 5,
    name: 'Olivia Brown',
    email: 'olivia.b@email.com',
    status: 'Active',
    joinDate: '2025-07-18',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
    lastActive: '2025-11-09 16:00',
    totalSessions: 201,
  },
];

export function UserManagement() {
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedUser, setSelectedUser] = useState<typeof users[0] | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const filteredUsers = users.filter((user) => {
    if (filterStatus === 'all') return true;
    return user.status.toLowerCase() === filterStatus;
  });

  const handleViewUser = (user: typeof users[0]) => {
    setSelectedUser(user);
    setIsDrawerOpen(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-gray-900 mb-2">User Management</h1>
        <p className="text-gray-500">Manage and monitor all platform users.</p>
      </div>

      {/* Top Bar */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input type="text" placeholder="Search users..." className="pl-10" />
        </div>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-full md:w-48">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Users</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="suspended">Suspended</SelectItem>
            <SelectItem value="deleted">Deleted</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* User Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{user.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-gray-500">{user.email}</TableCell>
                <TableCell>
                  <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-500">{user.joinDate}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleViewUser(user)}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Ban className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* User Detail Drawer */}
      <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>User Details</SheetTitle>
            <SheetDescription>View and manage user information</SheetDescription>
          </SheetHeader>
          {selectedUser && (
            <div className="mt-6 space-y-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="w-20 h-20 mb-4">
                  <AvatarImage src={selectedUser.avatar} />
                  <AvatarFallback>{selectedUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-gray-900">{selectedUser.name}</h3>
                <p className="text-gray-500">{selectedUser.email}</p>
                <Badge className="mt-2" variant={selectedUser.status === 'Active' ? 'default' : 'secondary'}>
                  {selectedUser.status}
                </Badge>
              </div>

              <Separator />

              <div className="space-y-4">
                <div>
                  <p className="text-gray-500 mb-1">Join Date</p>
                  <p className="text-gray-900">{selectedUser.joinDate}</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Last Active</p>
                  <p className="text-gray-900">{selectedUser.lastActive}</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Total Sessions</p>
                  <p className="text-gray-900">{selectedUser.totalSessions}</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h4 className="text-gray-900">Recent Activity</h4>
                <div className="space-y-2 text-gray-500">
                  <p>• Completed daily wellness check</p>
                  <p>• Viewed partner offer from Glow MedSpa</p>
                  <p>• Updated profile information</p>
                  <p>• Received motivation tip notification</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                {selectedUser.status === 'Active' ? (
                  <Button variant="outline" className="w-full">
                    <Ban className="w-4 h-4 mr-2" />
                    Suspend User
                  </Button>
                ) : (
                  <Button variant="outline" className="w-full">
                    <Ban className="w-4 h-4 mr-2" />
                    Reactivate User
                  </Button>
                )}
                <Button variant="outline" className="w-full text-red-600 hover:text-red-700">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete User
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
