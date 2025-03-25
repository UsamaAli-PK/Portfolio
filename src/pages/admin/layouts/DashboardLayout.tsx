import React from 'react';
import { DashboardNav } from '../components/DashboardNav';
import { DashboardHeader } from '../components/DashboardHeader';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-dark-900">
      <DashboardNav />
      <div className="md:ml-64">
        <DashboardHeader />
        <main className="p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}