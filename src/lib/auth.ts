import { supabase } from './supabase';

export async function createAdminUser() {
  try {
    // Create auth user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: 'admin@example.com',
      password: 'admin123'
    });

    if (authError) throw authError;

    if (authData.user) {
      // Create user profile
      const { error: profileError } = await supabase
        .from('users')
        .insert([
          {
            id: authData.user.id,
            email: 'admin@example.com',
            role: 'admin',
            full_name: 'Admin User'
          }
        ]);

      if (profileError) throw profileError;
    }

    return { success: true };
  } catch (error) {
    console.error('Error creating admin user:', error);
    return { success: false, error };
  }
}