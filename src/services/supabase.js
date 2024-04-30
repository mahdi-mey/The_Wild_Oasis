import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://hwqhrpgyjhtyxnsrxrow.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3cWhycGd5amh0eXhuc3J4cm93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4NjMwNDUsImV4cCI6MjAyODQzOTA0NX0.OhTjR6HK-bSrgTqp30nOZez2T-77Ko4shtTmriwANmk'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase