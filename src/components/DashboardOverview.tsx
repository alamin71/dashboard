import { Users, UserCheck, Handshake, Bot } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Badge } from './ui/badge';

const userGrowthData = [
  { month: 'Jan', users: 1200 },
  { month: 'Feb', users: 1900 },
  { month: 'Mar', users: 2400 },
  { month: 'Apr', users: 3100 },
  { month: 'May', users: 3800 },
  { month: 'Jun', users: 4500 },
];

const engagementData = [
  { week: 'Week 1', engagement: 65 },
  { week: 'Week 2', engagement: 72 },
  { week: 'Week 3', engagement: 68 },
  { week: 'Week 4', engagement: 85 },
];

const retentionData = [
  { name: 'Active', value: 68 },
  { name: 'Churned', value: 32 },
];

const COLORS = ['#3b82f6', '#e5e7eb'];

const recentActivity = [
  { id: 1, type: 'User Signup', name: 'Sarah Johnson', email: 'sarah.j@email.com', date: '2025-11-09 14:32' },
  { id: 2, type: 'Partner Approved', name: 'Glow MedSpa', email: 'contact@glowmedspa.com', date: '2025-11-09 13:15' },
  { id: 3, type: 'User Signup', name: 'Michael Chen', email: 'm.chen@email.com', date: '2025-11-09 12:48' },
  { id: 4, type: 'Partner Pending', name: 'Beauty Clinic NYC', email: 'info@beautyclinic.com', date: '2025-11-09 11:20' },
  { id: 5, type: 'User Signup', name: 'Emma Davis', email: 'emma.d@email.com', date: '2025-11-09 10:05' },
];

export function DashboardOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-gray-900 mb-2">Dashboard Overview</h1>
        <p className="text-gray-500">Welcome back! Here's what's happening with your platform.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-gray-500">Total Users</CardTitle>
            <Users className="w-5 h-5 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-gray-900">4,532</div>
            <p className="text-green-600 mt-1">+12.5% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-gray-500">Active Users</CardTitle>
            <UserCheck className="w-5 h-5 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-gray-900">3,241</div>
            <p className="text-green-600 mt-1">+8.2% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-gray-500">Partner Accounts</CardTitle>
            <Handshake className="w-5 h-5 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-gray-900">142</div>
            <p className="text-green-600 mt-1">+18 new this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-gray-500">AI Prompts Used</CardTitle>
            <Bot className="w-5 h-5 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-gray-900">28,492</div>
            <p className="text-green-600 mt-1">+24.3% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Engagement by Week</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="engagement" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>User Retention</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={retentionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {retentionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full" />
                  <span className="text-gray-600">Active Users</span>
                </div>
                <span className="text-gray-900">68%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-300 rounded-full" />
                  <span className="text-gray-600">Churned</span>
                </div>
                <span className="text-gray-900">32%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Date/Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentActivity.map((activity) => (
                  <TableRow key={activity.id}>
                    <TableCell>
                      <Badge variant={activity.type.includes('Approved') ? 'default' : activity.type.includes('Pending') ? 'secondary' : 'outline'}>
                        {activity.type}
                      </Badge>
                    </TableCell>
                    <TableCell>{activity.name}</TableCell>
                    <TableCell className="text-gray-500">{activity.email}</TableCell>
                    <TableCell className="text-gray-500">{activity.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
