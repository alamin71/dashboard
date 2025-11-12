import { Search, Eye } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const apiLogs = [
  { id: 1, endpoint: '/api/users', method: 'GET', status: 200, time: '2025-11-09 16:24:32', responseTime: '45ms' },
  { id: 2, endpoint: '/api/partners', method: 'POST', status: 201, time: '2025-11-09 16:23:15', responseTime: '89ms' },
  { id: 3, endpoint: '/api/prompts', method: 'GET', status: 200, time: '2025-11-09 16:22:08', responseTime: '32ms' },
  { id: 4, endpoint: '/api/content', method: 'PUT', status: 200, time: '2025-11-09 16:20:45', responseTime: '67ms' },
  { id: 5, endpoint: '/api/analytics', method: 'GET', status: 500, time: '2025-11-09 16:18:22', responseTime: '2341ms' },
];

const errorLogs = [
  { id: 1, severity: 'Error', message: 'Database connection timeout', time: '2025-11-09 16:18:22', source: 'Analytics Service' },
  { id: 2, severity: 'Warning', message: 'High memory usage detected', time: '2025-11-09 15:45:10', source: 'System Monitor' },
  { id: 3, severity: 'Error', message: 'Failed to send notification', time: '2025-11-09 14:32:05', source: 'Notification Service' },
  { id: 4, severity: 'Info', message: 'Cache cleared successfully', time: '2025-11-09 12:00:00', source: 'Cache Manager' },
];

const performanceData = [
  { time: '12:00', responseTime: 45 },
  { time: '13:00', responseTime: 52 },
  { time: '14:00', responseTime: 48 },
  { time: '15:00', responseTime: 89 },
  { time: '16:00', responseTime: 156 },
  { time: '17:00', responseTime: 78 },
];

export function TechnicalLogs() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-gray-900 mb-2">Technical Logs & API Monitoring</h1>
        <p className="text-gray-500">Monitor system performance, API calls, and error logs.</p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="api" className="space-y-4">
        <TabsList>
          <TabsTrigger value="api">API Logs</TabsTrigger>
          <TabsTrigger value="errors">Error Logs</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="api" className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input type="text" placeholder="Search logs..." className="pl-10" />
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Endpoint</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Status Code</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Response Time</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {apiLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="font-mono text-sm">{log.endpoint}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{log.method}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          log.status >= 200 && log.status < 300
                            ? 'default'
                            : log.status >= 500
                            ? 'destructive'
                            : 'secondary'
                        }
                      >
                        {log.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-500">{log.time}</TableCell>
                    <TableCell className="text-gray-500">{log.responseTime}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="errors" className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input type="text" placeholder="Search errors..." className="pl-10" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Severity</SelectItem>
                <SelectItem value="error">Error</SelectItem>
                <SelectItem value="warning">Warning</SelectItem>
                <SelectItem value="info">Info</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="bg-white rounded-lg border border-gray-200">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Severity</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {errorLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell>
                      <Badge
                        variant={
                          log.severity === 'Error'
                            ? 'destructive'
                            : log.severity === 'Warning'
                            ? 'secondary'
                            : 'default'
                        }
                      >
                        {log.severity}
                      </Badge>
                    </TableCell>
                    <TableCell>{log.message}</TableCell>
                    <TableCell className="text-gray-500">{log.source}</TableCell>
                    <TableCell className="text-gray-500">{log.time}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Average Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="responseTime" stroke="#3b82f6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-gray-500">Avg Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-900">78ms</div>
                <p className="text-green-600 mt-1">-12ms vs yesterday</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-gray-500">Uptime</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-900">99.8%</div>
                <p className="text-green-600 mt-1">Last 30 days</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-gray-500">Error Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-900">0.12%</div>
                <p className="text-green-600 mt-1">-0.03% vs yesterday</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
