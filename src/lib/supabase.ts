import { createClient, type SupabaseClient } from '@supabase/supabase-js'

// Get env vars - in Vite/v0, env vars are available at runtime via import.meta.env
// They're automatically exposed by the v0 build system
const supabaseUrl = (import.meta.env as any).SUPABASE_URL || 
                    (import.meta.env as any).VITE_SUPABASE_URL || 
                    (import.meta.env as any).NEXT_PUBLIC_SUPABASE_URL || ''

const supabaseAnonKey = (import.meta.env as any).SUPABASE_ANON_KEY || 
                        (import.meta.env as any).VITE_SUPABASE_ANON_KEY || 
                        (import.meta.env as any).NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Debug: Check what values we're getting
console.log('[v0] Supabase URL:', supabaseUrl ? supabaseUrl.substring(0, 30) + '...' : 'NOT SET')
console.log('[v0] Supabase Key:', supabaseAnonKey ? 'SET (length: ' + supabaseAnonKey.length + ')' : 'NOT SET')

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

// Only create the client if we have valid configuration
export const supabase: SupabaseClient = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
)
