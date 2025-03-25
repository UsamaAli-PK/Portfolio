import { supabase } from './supabase';

export async function trackPageView(pagePath: string) {
  const today = new Date().toISOString().split('T')[0];
  
  try {
    const { data: existingData } = await supabase
      .from('analytics')
      .select('*')
      .eq('page_path', pagePath)
      .eq('date', today)
      .single();

    if (existingData) {
      await supabase
        .from('analytics')
        .update({ views: existingData.views + 1 })
        .eq('id', existingData.id);
    } else {
      await supabase
        .from('analytics')
        .insert([{ page_path: pagePath, views: 1, date: today }]);
    }
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
}

export async function getAnalytics(startDate: string, endDate: string) {
  const { data, error } = await supabase
    .from('analytics')
    .select('*')
    .gte('date', startDate)
    .lte('date', endDate)
    .order('date', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getDashboardStats() {
  const { data, error } = await supabase
    .from('analytics')
    .select('*')
    .order('date', { ascending: false })
    .limit(30);

  if (error) throw error;
  return data;
}