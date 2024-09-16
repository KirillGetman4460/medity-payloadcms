import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://toibtypkhhonvqtbssic.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvaWJ0eXBraGhvbnZxdGJzc2ljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA4MDcyNjUsImV4cCI6MjAzNjM4MzI2NX0.7fi7Wj33mfTW3m3frVpyfZ1vyTA2IAAFR5_5ApuGfnc'
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase;

export const getSupabaseUsers = async () => {
  const { data, error } = await supabase
    .from('auth.users')
    .select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
