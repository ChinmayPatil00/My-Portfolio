const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY || process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

let supabase = null;

if (supabaseUrl && supabaseKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseKey);
    console.log("Supabase client initialized ✅");
  } catch (err) {
    console.error("Failed to initialize Supabase client ❌:", err.message);
  }
} else {
  console.warn("⚠️ SUPABASE_URL or SUPABASE_KEY is not set. Database storage will be skipped until configured.");
}

module.exports = supabase;
