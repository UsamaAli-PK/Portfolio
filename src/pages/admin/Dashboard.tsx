import React from 'react';
import { DashboardLayout } from './layouts/DashboardLayout';
import { DashboardHome } from './views/DashboardHome';
import { PostsList } from './views/posts/PostsList';
import { PostEditor } from './views/posts/PostEditor';
import { useAdminRouter } from '../../hooks/useAdminRouter';

export function Dashboard() {
  const { currentView, params } = useAdminRouter();

  const renderView = () => {
    switch (currentView) {
      case 'posts':
        return <PostsList />;
      case 'new-post':
        return <PostEditor />;
      case 'edit-post':
        return <PostEditor postId={params.id} />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <DashboardLayout>
      {renderView()}
    </DashboardLayout>
  );
}