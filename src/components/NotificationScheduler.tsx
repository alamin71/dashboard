import { useState } from 'react';
import { Plus, Pencil, Trash2, Send } from 'lucide-react';
import { Button } from './ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Badge } from './ui/badge';

const notifications = [
  {
    id: 1,
    title: 'Daily Wellness Check',
    type: 'Wellness',
    dateTime: '2025-11-10 09:00',
    audience: 'All Users',
    status: 'Scheduled',
  },
  {
    id: 2,
    title: 'New Partner Offer',
    type: 'Marketing',
    dateTime: '2025-11-09 14:00',
    audience: 'Active Users',
    status: 'Sent',
  },
  {
    id: 3,
    title: 'Weekly Motivation',
    type: 'Motivation',
    dateTime: '2025-11-11 08:00',
    audience: 'All Users',
    status: 'Scheduled',
  },
  {
    id: 4,
    title: 'Skincare Tip',
    type: 'Beauty',
    dateTime: '2025-11-10 12:00',
    audience: 'All Users',
    status: 'Scheduled',
  },
];

export function NotificationScheduler() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 mb-2">Notification Scheduler</h1>
          <p className="text-gray-500">Schedule and manage push notifications for your users.</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Notification
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Notification</DialogTitle>
              <DialogDescription>
                Schedule a notification for your users
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <Label htmlFor="notif-title">Title</Label>
                <Input
                  id="notif-title"
                  placeholder="Enter notification title"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="notif-message">Message</Label>
                <Textarea
                  id="notif-message"
                  placeholder="Enter notification message..."
                  className="mt-1 min-h-24"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="notif-type">Type</Label>
                  <Select>
                    <SelectTrigger id="notif-type" className="mt-1">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wellness">Wellness</SelectItem>
                      <SelectItem value="beauty">Beauty</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="motivation">Motivation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="audience">Audience</Label>
                  <Select>
                    <SelectTrigger id="audience" className="mt-1">
                      <SelectValue placeholder="Select audience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Users</SelectItem>
                      <SelectItem value="active">Active Users</SelectItem>
                      <SelectItem value="partners">Partners Only</SelectItem>
                      <SelectItem value="new">New Users</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="schedule-time">Schedule Time</Label>
                <Input
                  id="schedule-time"
                  type="datetime-local"
                  className="mt-1"
                />
              </div>
              <div className="flex gap-2 pt-4">
                <Button className="flex-1">
                  Schedule Notification
                </Button>
                <Button variant="outline" className="flex-1">
                  <Send className="w-4 h-4 mr-2" />
                  Send Now
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Notifications Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Date/Time</TableHead>
              <TableHead>Audience</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {notifications.map((notification) => (
              <TableRow key={notification.id}>
                <TableCell>{notification.title}</TableCell>
                <TableCell>
                  <Badge variant="outline">{notification.type}</Badge>
                </TableCell>
                <TableCell className="text-gray-500">{notification.dateTime}</TableCell>
                <TableCell className="text-gray-500">{notification.audience}</TableCell>
                <TableCell>
                  <Badge
                    variant={notification.status === 'Sent' ? 'default' : 'secondary'}
                  >
                    {notification.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      <Pencil className="w-4 h-4" />
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
    </div>
  );
}
