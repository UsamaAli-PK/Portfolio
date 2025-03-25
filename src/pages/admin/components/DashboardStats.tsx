import React from 'react';
import { Users, FileText, Eye, TrendingUp } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
}

function StatCard({ label, value, icon, trend }: StatCardProps) {
  return (
    <div className="bg-dark-800 p-6 rounded-lg border border-dark-600">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400">
          {icon}
        </div>
        {trend && (
          <span className="text-green-400 text-sm flex items-center">
            <TrendingUp size={16} className="mr-1" />
            {trend}
          </span>
        )}
      </div>
      <h3 className="text-2xl font-bold text-gray-200">{value}</h3>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
}

interface DashboardStatsProps {
  stats: any;
}

export function DashboardStats({ stats }: DashboardStatsProps) {
  const totalViews = stats?.reduce((acc: number, curr: any) => acc + curr.views, 0) || 0;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard
        label="Total Views"
        value={totalViews.toLocaleString()}
        icon={<Eye size={24} />}
        trend="+28%"
      />
      <StatCard
        label="Posts"
        value="45"
        icon={<FileText size={24} />}
        trend="+5%"
      />
      <StatCard
        label="Users"
        value="1,234"
        icon={<Users size={24} />}
        trend="+12%"
      />
      <StatCard
        label="Active Users"
        value="342"
        icon={<Users size={24} />}
        trend="+18%"
      />
    </div>
  );
}