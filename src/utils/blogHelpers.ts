export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function validatePost(post: any): string[] {
  const errors: string[] = [];
  
  if (!post.title) errors.push('Title is required');
  if (!post.content) errors.push('Content is required');
  if (!post.categories?.length) errors.push('At least one category is required');
  
  return errors;
}