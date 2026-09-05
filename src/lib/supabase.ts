import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

if (!url || !key) {
  throw new Error('Supabase environment variables are not configured')
}

export const supabase = createClient(url, key)
export const accountEmail = (username: string) => `${username.toLowerCase()}@lubimost.app`
export const allowedUsers = ['thugger', 'vichka'] as const
