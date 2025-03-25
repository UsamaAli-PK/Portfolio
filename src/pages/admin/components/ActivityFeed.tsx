import React from 'react';
import { Clock } from 'lucide-react';

const activities = [
  {
    id: 1,
    action: 'Published post',
    target: 'How to Optimize WordPress Performance',
    time: '2 hours ago',
    user: 'Usama Ali'
  },
  {
    id: 2,
    action: 'Updated post',
    target: 'Essential WordPress Security Tips',
    time: '4 hours ago',
    user: 'Usama Ali'
  },
  {
    id: 3,
    action: 'Created draft',
    target: 'Custom Gutenberg Blocks Guide',
    time: '5 hours ago',
    user: 'Usama Ali'
  }
];

export function ActivityFeed() {
  return (
    <div className="bg-dark-800 rounded-lg border border-dark-600 overflow-hidden">
      <div className="p-6 border-b border-dark-600">
        <h2 className="text-xl font-semibold text-gray-200">Recent Activity</h2>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3">
              <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400 flex-shrink-0">
                <Clock size={16} />
              </div>
              <div>
                <p className="text-gray-300">
                  <span className="font-medium">{activity.user}</span>
                  {' '}{activity.action}{' '}
                  <span className="text-indigo-400">"{activity.target}"</span>
                </p>
                <p className="text-sm text-gray-400">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}