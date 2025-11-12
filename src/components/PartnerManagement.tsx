import { useState } from 'react';
import { Filter, CheckCircle, XCircle } from 'lucide-react';
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

const partners = [
  {
    id: 1,
    name: 'Glow MedSpa',
    type: 'MedSpa',
    status: 'Approved',
    joinedDate: '2025-10-12',
    location: 'Los Angeles, CA',
    offers: 5,
  },
  {
    id: 2,
    name: 'Beauty Clinic NYC',
    type: 'MedSpa',
    status: 'Pending',
    joinedDate: '2025-11-08',
    location: 'New York, NY',
    offers: 0,
  },
  {
    id: 3,
    name: 'Radiance Wellness',
    type: 'Affiliate',
    status: 'Approved',
    joinedDate: '2025-09-05',
    location: 'Miami, FL',
    offers: 12,
  },
  {
    id: 4,
    name: 'SkinCare Pro',
    type: 'MedSpa',
    status: 'Pending',
    joinedDate: '2025-11-09',
    location: 'Chicago, IL',
    offers: 0,
  },
  {
    id: 5,
    name: 'Elite Aesthetics',
    type: 'MedSpa',
    status: 'Approved',
    joinedDate: '2025-08-20',
    location: 'San Francisco, CA',
    offers: 8,
  },
];

export function PartnerManagement() {
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedPartner, setSelectedPartner] = useState<typeof partners[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredPartners = partners.filter((partner) => {
    if (filterStatus === 'all') return true;
    return partner.status.toLowerCase() === filterStatus;
  });

  const handleViewPartner = (partner: typeof partners[0]) => {
    setSelectedPartner(partner);
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 mb-2">Partner Management</h1>
          <p className="text-gray-500">Manage medspas, affiliates, and partner relationships.</p>
        </div>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-48">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Partners</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="suspended">Suspended</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Partner Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Joined Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPartners.map((partner) => (
              <TableRow key={partner.id}>
                <TableCell>{partner.name}</TableCell>
                <TableCell>
                  <Badge variant="outline">{partner.type}</Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      partner.status === 'Approved'
                        ? 'default'
                        : partner.status === 'Pending'
                        ? 'secondary'
                        : 'destructive'
                    }
                  >
                    {partner.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-500">{partner.location}</TableCell>
                <TableCell className="text-gray-500">{partner.joinedDate}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleViewPartner(partner)}
                  >
                    {partner.status === 'Pending' ? 'Review' : 'View'}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Approve/Reject Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Partner Details</DialogTitle>
            <DialogDescription>Review and manage partner application</DialogDescription>
          </DialogHeader>
          {selectedPartner && (
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Name:</span>
                  <span className="text-gray-900">{selectedPartner.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Type:</span>
                  <span className="text-gray-900">{selectedPartner.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Location:</span>
                  <span className="text-gray-900">{selectedPartner.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Joined:</span>
                  <span className="text-gray-900">{selectedPartner.joinedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Active Offers:</span>
                  <span className="text-gray-900">{selectedPartner.offers}</span>
                </div>
              </div>

              <div>
                <Label htmlFor="notes">Admin Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Add notes about this partner..."
                  className="mt-1"
                />
              </div>

              {selectedPartner.status === 'Pending' && (
                <div className="flex gap-2 pt-2">
                  <Button className="flex-1">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Approve
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <XCircle className="w-4 h-4 mr-2" />
                    Reject
                  </Button>
                </div>
              )}

              {selectedPartner.status === 'Approved' && (
                <Button variant="outline" className="w-full">
                  Suspend Partner
                </Button>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
