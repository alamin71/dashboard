import { useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
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
import { Switch } from './ui/switch';

const quotes = [
  { id: 1, title: 'Self-Care Quote', publishDate: '2025-11-09', status: 'Published' },
  { id: 2, title: 'Beauty Within', publishDate: '2025-11-08', status: 'Published' },
  { id: 3, title: 'Confidence Boost', publishDate: '2025-11-07', status: 'Scheduled' },
];

const tips = [
  { id: 1, title: 'Morning Skincare Routine', publishDate: '2025-11-09', status: 'Published' },
  { id: 2, title: 'Hydration Tips', publishDate: '2025-11-06', status: 'Published' },
  { id: 3, title: 'Stress Management', publishDate: '2025-11-05', status: 'Draft' },
];

const articles = [
  { id: 1, title: 'Understanding Your Skin Type', publishDate: '2025-11-08', status: 'Published' },
  { id: 2, title: 'Benefits of Regular Facials', publishDate: '2025-11-03', status: 'Published' },
  { id: 3, title: 'Wellness Journey Guide', publishDate: '2025-11-10', status: 'Scheduled' },
];

export function ContentManagement() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [publishNow, setPublishNow] = useState(true);

  const ContentTable = ({ data }: { data: typeof quotes }) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Publish Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.title}</TableCell>
            <TableCell className="text-gray-500">{item.publishDate}</TableCell>
            <TableCell>
              <Badge
                variant={
                  item.status === 'Published'
                    ? 'default'
                    : item.status === 'Scheduled'
                    ? 'secondary'
                    : 'outline'
                }
              >
                {item.status}
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
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 mb-2">Content Management</h1>
          <p className="text-gray-500">Manage quotes, tips, and articles for your platform.</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Content
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Content</DialogTitle>
              <DialogDescription>Create a new quote, tip, or article</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <Label htmlFor="content-type">Content Type</Label>
                <Select>
                  <SelectTrigger id="content-type" className="mt-1">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="quote">Quote</SelectItem>
                    <SelectItem value="tip">Tip</SelectItem>
                    <SelectItem value="article">Article</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter content title" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="body">Content</Label>
                <Textarea
                  id="body"
                  placeholder="Enter your content here..."
                  className="mt-1 min-h-40"
                />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger id="category" className="mt-1">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wellness">Wellness</SelectItem>
                    <SelectItem value="beauty">Beauty</SelectItem>
                    <SelectItem value="skincare">Skincare</SelectItem>
                    <SelectItem value="motivation">Motivation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="publish-toggle">Publish Now</Label>
                <Switch
                  id="publish-toggle"
                  checked={publishNow}
                  onCheckedChange={setPublishNow}
                />
              </div>
              {!publishNow && (
                <div>
                  <Label htmlFor="schedule-date">Schedule Date</Label>
                  <Input id="schedule-date" type="datetime-local" className="mt-1" />
                </div>
              )}
              <div className="flex gap-2 pt-4">
                <Button className="flex-1">
                  {publishNow ? 'Publish Now' : 'Schedule'}
                </Button>
                <Button variant="outline" className="flex-1">Save as Draft</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="quotes" className="space-y-4">
        <TabsList>
          <TabsTrigger value="quotes">Quotes</TabsTrigger>
          <TabsTrigger value="tips">Tips</TabsTrigger>
          <TabsTrigger value="articles">Articles</TabsTrigger>
        </TabsList>
        <TabsContent value="quotes" className="bg-white rounded-lg border border-gray-200">
          <ContentTable data={quotes} />
        </TabsContent>
        <TabsContent value="tips" className="bg-white rounded-lg border border-gray-200">
          <ContentTable data={tips} />
        </TabsContent>
        <TabsContent value="articles" className="bg-white rounded-lg border border-gray-200">
          <ContentTable data={articles} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
