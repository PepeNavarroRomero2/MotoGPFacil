import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cqaluvsaxhdiultpaqnl.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxYWx1dnNheGhkaXVsdHBhcW5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3NjEwOTYsImV4cCI6MjA1MjMzNzA5Nn0.l4AyBhhkgTl5qvKgvpovzV2VfntzHmCN6w_wIMgIYGg"
const supabase = createClient(supabaseUrl, supabaseKey)

export async function GET() {
    const { data: contacts, error } = await supabase
      .from("motogpfacil_reglamento")
      .select("*")
      .order("id", { ascending: true });
  
    return new Response(JSON.stringify(contacts), { status: 200 });
  }