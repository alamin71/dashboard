// import { Save } from 'lucide-react';
// import { Button } from './ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
// import { Input } from './ui/input';
// import { Label } from './ui/label';
// import { Textarea } from './ui/textarea';
// import { Switch } from './ui/switch';
// import { Separator } from './ui/separator';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from './ui/select';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from './ui/table';
// import { Badge } from './ui/badge';

// const adminUsers = [
//   { id: 1, name: 'John Admin', email: 'john@admin.com', role: 'Admin' },
//   { id: 2, name: 'Sarah Editor', email: 'sarah@admin.com', role: 'Editor' },
//   { id: 3, name: 'Mike Viewer', email: 'mike@admin.com', role: 'Viewer' },
// ];

// export function Settings() {
//   return (
//     <div className="space-y-6">
//       <div>
//         <h1 className="text-gray-900 mb-2">Settings</h1>
//         <p className="text-gray-500">Manage application settings and configurations.</p>
//       </div>

//       {/* App Settings */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Application Settings</CardTitle>
//           <CardDescription>Configure general application settings</CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <Label htmlFor="app-name">Application Name</Label>
//               <Input id="app-name" defaultValue="Admin Panel" className="mt-1" />
//             </div>
//             <div>
//               <Label htmlFor="support-email">Support Email</Label>
//               <Input id="support-email" defaultValue="support@app.com" className="mt-1" />
//             </div>
//           </div>
//           <div>
//             <Label htmlFor="app-description">Application Description</Label>
//             <Textarea
//               id="app-description"
//               defaultValue="Comprehensive admin panel for managing users, partners, and content."
//               className="mt-1"
//             />
//           </div>
//           <div className="flex items-center justify-between pt-2">
//             <div>
//               <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
//               <p className="text-gray-500 mt-1">Enable to temporarily disable user access</p>
//             </div>
//             <Switch id="maintenance-mode" />
//           </div>
//           <Separator />
//           <Button>
//             <Save className="w-4 h-4 mr-2" />
//             Save Settings
//           </Button>
//         </CardContent>
//       </Card>

//       {/* Role Management */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Role Management</CardTitle>
//           <CardDescription>Manage admin user roles and permissions</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Name</TableHead>
//                 <TableHead>Email</TableHead>
//                 <TableHead>Role</TableHead>
//                 <TableHead className="text-right">Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {adminUsers.map((user) => (
//                 <TableRow key={user.id}>
//                   <TableCell>{user.name}</TableCell>
//                   <TableCell className="text-gray-500">{user.email}</TableCell>
//                   <TableCell>
//                     <Badge
//                       variant={
//                         user.role === 'Admin'
//                           ? 'default'
//                           : user.role === 'Editor'
//                           ? 'secondary'
//                           : 'outline'
//                       }
//                     >
//                       {user.role}
//                     </Badge>
//                   </TableCell>
//                   <TableCell className="text-right">
//                     <Select defaultValue={user.role.toLowerCase()}>
//                       <SelectTrigger className="w-32">
//                         <SelectValue />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="admin">Admin</SelectItem>
//                         <SelectItem value="editor">Editor</SelectItem>
//                         <SelectItem value="viewer">Viewer</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>

//       {/* API Keys & Integrations */}
//       <Card>
//         <CardHeader>
//           <CardTitle>API Keys & Integrations</CardTitle>
//           <CardDescription>Manage external service integrations</CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <div>
//             <Label htmlFor="openai-key">OpenAI API Key</Label>
//             <Input
//               id="openai-key"
//               type="password"
//               defaultValue="sk-..."
//               className="mt-1"
//             />
//           </div>
//           <div>
//             <Label htmlFor="stripe-key">Stripe API Key</Label>
//             <Input
//               id="stripe-key"
//               type="password"
//               defaultValue="pk_..."
//               className="mt-1"
//             />
//           </div>
//           <div>
//             <Label htmlFor="sendgrid-key">SendGrid API Key</Label>
//             <Input
//               id="sendgrid-key"
//               type="password"
//               defaultValue="SG..."
//               className="mt-1"
//             />
//           </div>
//           <Separator />
//           <Button>
//             <Save className="w-4 h-4 mr-2" />
//             Save API Keys
//           </Button>
//         </CardContent>
//       </Card>

//       {/* Backup & Restore */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Backup & Restore</CardTitle>
//           <CardDescription>Manage database backups and restore points</CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-900">Automatic Backups</p>
//               <p className="text-gray-500">Last backup: 2025-11-09 03:00 AM</p>
//             </div>
//             <Switch defaultChecked />
//           </div>
//           <Separator />
//           <div className="flex gap-2">
//             <Button>Create Backup Now</Button>
//             <Button variant="outline">Restore from Backup</Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
