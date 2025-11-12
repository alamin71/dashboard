import { useState } from 'react';
import { Calendar } from 'lucide-react';
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
} from 'recharts';
import { Button } from './ui/button';

const engagementData = [
  { date: 'Nov 1', users: 1240 },
  { date: 'Nov 2', users: 1380 },
  { date: 'Nov 3', users: 1520 },
  { date: 'Nov 4', users: 1420 },
  { date: 'Nov 5', users: 1680 },
  { date: 'Nov 6', users: 1890 },
  { date: 'Nov 7', users: 1750 },
  { date: 'Nov 8', users: 1920 },
  { date: 'Nov 9', users: 2100 },
];

const featureUsageData = [
  { feature: 'Wellness Check', usage: 3240 },
  { feature: 'AI Prompts', usage: 2890 },
  { feature: 'Partner Offers', usage: 1950 },
  { feature: 'Content Feed', usage: 2450 },
  { feature: 'Notifications', usage: 1720 },
];

const cohortRetentionData = [
  { week: 'Week 1', retained: 100 },
  { week: 'Week 2', retained: 85 },
  { week: 'Week 3', retained: 72 },
  { week: 'Week 4', retained: 68 },
  { week: 'Week 5', retained: 65 },
  { week: 'Week 6', retained: 63 },
];

export function Analytics() {
  const [dateRange, setDateRange] = useState('last-7-days');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 mb-2">Analytics Dashboard</h1>
          <p className="text-gray-500">Track key metrics and user behavior.</p>
        </div>
        <Button variant="outline">
          <Calendar className="w-4 h-4 mr-2" />
          Last 7 Days
        </Button>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-gray-500">Daily Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-gray-900">2,143</div>
            <p className="text-green-600 mt-1">+15.3% vs last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-gray-500">Avg Session Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-gray-900">8m 32s</div>
            <p className="text-green-600 mt-1">+22s vs last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-gray-500">Retention Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-gray-900">68.4%</div>
            <p className="text-green-600 mt-1">+2.1% vs last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-gray-500">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-gray-900">12.8%</div>
            <p className="text-red-600 mt-1">-0.5% vs last week</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Engagement Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feature Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={featureUsageData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="feature" width={120} />
                <Tooltip />
                <Bar dataKey="usage" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cohort Retention</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={cohortRetentionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="retained" stroke="#8b5cf6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-6 gap-4">
            {cohortRetentionData.map((data, index) => (
              <div key={index} className="text-center">
                <div className="text-gray-500">{data.week}</div>
                <div className="text-gray-900 mt-1">{data.retained}%</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
