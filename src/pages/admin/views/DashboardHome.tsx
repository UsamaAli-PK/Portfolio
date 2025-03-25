import React, { useEffect, useState } from 'react';
import { DashboardStats } from '../components/DashboardStats';
import { RecentPosts } from '../components/RecentPosts';
import { QuickActions } from '../components/QuickActions';
import { ActivityFeed } from '../components/ActivityFeed';
import { getDashboardStats } from '../../../lib/analytics';
import { getPosts } from '../../../lib/posts';

export function DashboardHome() {
  const [stats, setStats] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [analyticsData, postsData] = await Promise.all([
          getDashboardStats(),
          getPosts({ status: 'published' })
        ]);

        setStats(analyticsData);
        setRecentPosts(postsData);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-200">Dashboard Overview</h1>
      <DashboardStats stats={stats} />
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentPosts posts={recentPosts} />
        </div>
        <div className="space-y-6">
          <QuickActions />
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
}