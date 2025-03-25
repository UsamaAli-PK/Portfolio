import { supabase } from './supabase';

export async function getPosts(options = { status: 'published' }) {
  const query = supabase
    .from('posts')
    .select(`
      *,
      author:users(full_name, avatar_url),
      categories:post_categories(categories(*)),
      tags:post_tags(tags(*))
    `)
    .order('created_at', { ascending: false });

  if (options.status) {
    query.eq('status', options.status);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data;
}

export async function createPost(post: any) {
  const { data, error } = await supabase
    .from('posts')
    .insert([post])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updatePost(id: string, updates: any) {
  const { data, error } = await supabase
    .from('posts')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deletePost(id: string) {
  const { error } = await supabase
    .from('posts')
    .delete()
    .eq('id', id);

  if (error) throw error;
}