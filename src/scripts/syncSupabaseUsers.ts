import { getSupabaseUsers } from '../utils/supabase';
import payload from 'payload';

const syncSupabaseUsers = async () => {
  try {
    const supabaseUsers = await getSupabaseUsers();

    for (const user of supabaseUsers) {
      await payload.create({
        collection: 'users',
        data: {
          email: user.email,
          
          roles: [], // Add roles if needed
        },
      });
    }

    console.log('Users synced successfully');
  } catch (error) {
    console.error('Error syncing users:', error);
  }
};

syncSupabaseUsers();