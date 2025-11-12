import { useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
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
import { Slider } from './ui/slider';

const prompts = [
  {
    id: 1,
    name: 'Daily Motivation',
    category: 'Wellness',
    lastUpdated: '2025-11-05',
    usageCount: 8542,
    prompt: 'Generate an uplifting daily motivation message focused on self-care and wellness.',
  },
  {
    id: 2,
    name: 'Skincare Routine Advice',
    category: 'Beauty',
    lastUpdated: '2025-11-02',
    usageCount: 6234,
    prompt: 'Provide personalized skincare routine recommendations based on skin type.',
  },
  {
    id: 3,
    name: 'Wellness Check-in',
    category: 'Health',
    lastUpdated: '2025-10-28',
    usageCount: 12890,
    prompt: 'Create empathetic wellness check-in questions to assess user mood and energy.',
  },
  {
    id: 4,
    name: 'Partner Offer Description',
    category: 'Marketing',
    lastUpdated: '2025-11-08',
    usageCount: 3421,
    prompt: 'Write engaging descriptions for medspa and beauty partner offers.',
  },
];

export function AIPromptManagement() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [temperature, setTemperature] = useState([0.7]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 mb-2">AI Prompt Management</h1>
          <p className="text-gray-500">Configure and optimize AI prompts for your platform.</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Prompt
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add/Edit AI Prompt</DialogTitle>
              <DialogDescription>
                Create or modify an AI prompt template
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <Label htmlFor="prompt-name">Prompt Name</Label>
                <Input id="prompt-name" placeholder="Enter prompt name" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="prompt-text">Prompt Text</Label>
                <Textarea
                  id="prompt-text"
                  placeholder="Enter your AI prompt..."
                  className="mt-1 min-h-32"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category" className="mt-1">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wellness">Wellness</SelectItem>
                      <SelectItem value="beauty">Beauty</SelectItem>
                      <SelectItem value="health">Health</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="tone">Tone</Label>
                  <Select>
                    <SelectTrigger id="tone" className="mt-1">
                      <SelectValue placeholder="Select tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="empathetic">Empathetic</SelectItem>
                      <SelectItem value="motivational">Motivational</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label>Temperature: {temperature[0]}</Label>
                <Slider
                  value={temperature}
                  onValueChange={setTemperature}
                  max={1}
                  step={0.1}
                  className="mt-2"
                />
                <p className="text-gray-500 mt-1">
                  Controls randomness. Higher values = more creative, lower = more focused.
                </p>
              </div>
              <div className="flex gap-2 pt-4">
                <Button className="flex-1">Save Prompt</Button>
                <Button variant="outline" className="flex-1">Test Prompt</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Prompt Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Prompt Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead>Usage Count</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {prompts.map((prompt) => (
              <TableRow key={prompt.id}>
                <TableCell>{prompt.name}</TableCell>
                <TableCell>
                  <Badge variant="outline">{prompt.category}</Badge>
                </TableCell>
                <TableCell className="text-gray-500">{prompt.lastUpdated}</TableCell>
                <TableCell className="text-gray-500">{prompt.usageCount.toLocaleString()}</TableCell>
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
