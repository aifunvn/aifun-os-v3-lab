// AIFUN AI Portal V2.0 — config.js
// ═══════════════════════════════════════════════════════════════════
// HƯỚNG DẪN KẾT NỐI GOOGLE SHEETS (5 bước):
//
//  Bước 1 — Tạo Spreadsheet
//    → drive.google.com → Mới → Google Trang tính
//    → Đặt tên: "AIFUN AI Portal Data"
//    → Tạo 5 tab: PROMPTS | SKILLS | SOPS | PROJECTS | WORKFLOWS
//
//  Bước 2 — Lấy Spreadsheet ID
//    URL: docs.google.com/spreadsheets/d/[SPREADSHEET_ID]/edit
//    Copy chuỗi dài giữa /d/ và /edit → dán vào SPREADSHEET_ID
//
//  Bước 3 — Tạo API Key
//    → console.cloud.google.com → Chọn hoặc tạo project
//    → Library → tìm "Google Sheets API" → Enable
//    → Credentials → Create Credentials → API Key
//    → (Khuyến nghị) Restrict key: HTTP Referrers → thêm domain bạn
//    → Dán vào API_KEY bên dưới
//
//  Bước 4 — Chia sẻ Spreadsheet (BẮT BUỘC cho API Key)
//    → Share → Change to Anyone with the link → Viewer → Done
//
//  Bước 5 — Thêm dữ liệu theo đúng COLUMN_SCHEMA bên dưới
//    Dòng đầu tiên của mỗi tab = tên cột (header row)
//    Từ dòng 2 trở đi = dữ liệu thực
// ═══════════════════════════════════════════════════════════════════

export const SHEETS_CONFIG = {

  // ─── ĐIỀN THÔNG TIN CỦA BẠN TẠI ĐÂY ───────────────────────────
  SPREADSHEET_ID: '',   // VD: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms'
  API_KEY:        '',   // VD: 'AIzaSyD-9tSrke72PouQMnMX-a4eHs-FldMr8TU'
  // ────────────────────────────────────────────────────────────────

  // Tên tab trong Spreadsheet — phải khớp chính xác (case-sensitive)
  SHEET_NAMES: {
    prompts:   'PROMPTS',
    skills:    'SKILLS',
    sops:      'SOPS',
    projects:  'PROJECTS',
    workflows: 'WORKFLOWS',
  },

  CACHE_TTL_MS:     5 * 60 * 1000,   // Cache 5 phút — không fetch lại quá nhiều
  FETCH_TIMEOUT_MS: 8000,             // Timeout 8s → fallback về JSON
  AUTO_REFRESH_MS:  0,                // 0 = tắt. Bật: 5 * 60 * 1000 (5 phút)
};

// ═══════════════════════════════════════════════════════════════════
// COLUMN SCHEMA — kiểu dữ liệu cho từng cột khi đọc từ Sheets
// (Google Sheets trả về tất cả dưới dạng string — cần coerce đúng kiểu)
//
//  'number'  → parseInt / parseFloat
//  'boolean' → TRUE/FALSE string → true/false
//  'array'   → "a,b,c" hoặc '["a","b"]' → ['a','b','c']
//  'json'    → JSON string → parsed object/array
//  undefined → auto-detect (số thuần thì thành number, còn lại string)
// ═══════════════════════════════════════════════════════════════════
export const COLUMN_SCHEMA = {
  PROMPTS: {
    uses:   'number',
    rating: 'number',
    tags:   'array',
  },
  SKILLS: {
    uses:    'number',
    rating:  'number',
    tools:   'array',
    outputs: 'array',
    prompts: 'array',
  },
  SOPS: {
    steps: 'array',
    tools: 'array',
  },
  PROJECTS: {
    progress: 'number',
    team:     'array',
    tasks:    'json',
  },
  WORKFLOWS: {
    active: 'boolean',
    tags:   'array',
  },
};

// ═══════════════════════════════════════════════════════════════════
// CẤU TRÚC CỘT MẪU — copy vào dòng đầu tiên của mỗi tab
// ═══════════════════════════════════════════════════════════════════
//
// Tab PROMPTS (dòng 1 — header):
//   id | title | category | tool | content | tags | uses | rating
//
//   Ví dụ dữ liệu (dòng 2):
//   p001 | Viết email marketing | marketing | Claude | [nội dung prompt] | email,marketing | 342 | 5
//
// ───────────────────────────────────────────────────────────────────
// Tab SKILLS (dòng 1 — header):
//   id | name | category | icon | gradient | desc | uses | time | rating | tools | outputs | status
//
//   Ví dụ:
//   sop-builder | SOP Builder | Operations | 📋 | linear-gradient(135deg,#1e40af,#3b82f6) | [mô tả] | 342 | ~5 phút | 5 | Claude,Google Docs | SOP Document,Checklist | active
//
// ───────────────────────────────────────────────────────────────────
// Tab SOPS (dòng 1 — header):
//   id | name | dept | status | updated | owner | frequency | duration | kpi
//
//   Ví dụ:
//   sop-m01 | Lập kế hoạch content tháng | Marketing | active | 01/06/2026 | Marketing Lead | Hàng tháng | 2h | Content Calendar
//
// ───────────────────────────────────────────────────────────────────
// Tab PROJECTS (dòng 1 — header):
//   id | name | description | color | progress | status | statusLabel | deadline | updatedAt | team | priority
//
//   Ví dụ:
//   proj-aifun-os | AIFUN OS | AI Operating System | blue | 80 | inprogress | Đang làm | 30/06/2026 | 09/06/2026 | DTC,NV,TT | critical
//
// ───────────────────────────────────────────────────────────────────
// Tab WORKFLOWS (dòng 1 — header):
//   id | name | desc | icon | iconBg | tools | runs | saved | active | tags
//
//   Ví dụ:
//   auto-01 | Email Nurturing Sequence | [mô tả] | 📧 | #eff6ff | Make · Gmail | 1.245 lần/tháng | 48h | TRUE | Gmail,Make,CRM
