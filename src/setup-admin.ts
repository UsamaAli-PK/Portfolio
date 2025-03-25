import { supabase } from './lib/supabase';

async function setupAdmin() {
  try {
    // Step 1: Create the user in Supabase Auth
    const { data: authData, error: signUpError } = await supabase.auth.signUp({
      email: 'admin@example.com',
      password: 'admin123'
    });

    if (signUpError) {
      throw signUpError;
    }

    if (!authData.user) {
      throw new Error('No user data returned');
    }

    // Step 2: Add the user profile to our users table
    const { error: profileError } = await supabase
      .from('users')
      .insert({
        id: authData.user.id,
        email: 'admin@example.com',
        role: 'admin',
        full_name: 'Admin User'
      });

    if (profileError) {
      throw profileError;
    }

    console.log('Admin user created successfully!');
    console.log('Email: admin@example.com');
    console.log('Password: admin123');
    
  } catch (error) {
    console.error('Error creating admin:', error);
  }
}

// Run the setup
setupAdmin();