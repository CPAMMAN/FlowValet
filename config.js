// ============================================================
//  CP AMMAN ISSUE TRACKER — CONFIG
//  Fill in your credentials below after creating your accounts
// ============================================================

// ── SUPABASE (free database) ─────────────────────────────────
// 1. Go to https://supabase.com → New Project
// 2. Settings → API → copy Project URL and anon public key
const SUPABASE_URL  = 'https://kwlfryopqpysmlkbkhtg.supabase.co';
const SUPABASE_KEY  = 'sb_publishable_UAiZMMMOtHnh6DGI0EelCg_DQp-YX6Z';

// ── IMGBB (free photo hosting) ───────────────────────────────
// 1. Go to https://imgbb.com → Sign up free
// 2. Account → API → Generate API Key
const IMGBB_API_KEY = '23f0c255e915091da0dff7c760467039';

// ── Export ───────────────────────────────────────────────────
window.CP_CONFIG = { SUPABASE_URL, SUPABASE_KEY, IMGBB_API_KEY };
