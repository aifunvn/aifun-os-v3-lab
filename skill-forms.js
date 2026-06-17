/**
 * AIFUN OS — skill-forms.js
 * Định nghĩa form nhập liệu và buildPrompt cho từng Skill
 */

const SKILL_FORMS = {

  'sop-builder': {
    skillId: 'sop-builder',
    title: 'SOP Builder',
    icon: '📄',
    category: 'Operations',
    color: '#3B82F6',
    desc: 'Tạo SOP chuẩn hoàn chỉnh với checklist, KPI và phân công vai trò.',
    estimatedTime: '~2 phút',
    outputType: 'Google Doc',
    fields: [
      { id: 'sopName', label: 'Tên SOP *', type: 'text', placeholder: 'VD: Quy trình onboard khách hàng mới', required: true, span: 2 },
      { id: 'department', label: 'Phòng ban *', type: 'text', placeholder: 'VD: Sales, Marketing, Vận hành...', required: true },
      { id: 'executor', label: 'Người thực hiện *', type: 'text', placeholder: 'VD: Nhân viên sales, Quản lý cấp trung...', required: true },
      { id: 'objective', label: 'Mục tiêu quy trình *', type: 'textarea', placeholder: 'Quy trình này giúp gì? Kết quả đầu ra là gì?', required: true, span: 2 },
      { id: 'steps', label: 'Các bước chính (tuỳ chọn)', type: 'textarea', placeholder: 'Liệt kê các bước chính nếu có...', span: 2 }
    ],
    buildPrompt: function(d) {
      return 'Hãy tạo một SOP (Standard Operating Procedure) hoàn chỉnh bằng tiếng Việt với các thông tin sau:\n' +
        '- Tên SOP: ' + d.sopName + '\n' +
        '- Phòng ban: ' + d.department + '\n' +
        '- Người thực hiện: ' + d.executor + '\n' +
        '- Mục tiêu: ' + d.objective + '\n' +
        (d.steps ? '- Các bước gợi ý: ' + d.steps + '\n' : '') +
        '\nYêu cầu SOP phải có: Mục đích, Phạm vi áp dụng, Định nghĩa, Quy trình từng bước chi tiết, Checklist kiểm tra, KPI đo lường, Phân công vai trò và trách nhiệm.';
    },
    buildTitle: function(d) {
      return 'SOP_' + (d.sopName || 'document').replace(/\s+/g, '_').substring(0, 40);
    }
  },

  'content-factory': {
    skillId: 'content-factory',
    title: 'Content Factory',
    icon: '📸',
    category: 'Marketing',
    color: '#EC4899',
    desc: 'Biến 1 ý tưởng thành nội dung đa kênh: FB, YouTube, TikTok, Email, Zalo.',
    estimatedTime: '~3 phút',
    outputType: 'Content Package',
    fields: [
      { id: 'topic', label: 'Chủ đề / Ý tưởng *', type: 'text', placeholder: 'VD: Ra mắt sản phẩm mới, Tips tiết kiệm thời gian...', required: true, span: 2 },
      { id: 'targetAudience', label: 'Đối tượng mục tiêu *', type: 'text', placeholder: 'VD: Chủ doanh nghiệp SME, Gen Z 18-25...', required: true },
      { id: 'channels', label: 'Kênh phân phối', type: 'text', placeholder: 'VD: Facebook, TikTok, Email, Zalo OA', required: false },
      { id: 'tone', label: 'Giọng điệu', type: 'select', options: ['Chuyên nghiệp', 'Thân thiện', 'Hài hước', 'Truyền cảm hứng', 'Bán hàng trực tiếp'], required: false },
      { id: 'cta', label: 'Call to Action', type: 'text', placeholder: 'VD: Đăng ký ngay, Liên hệ tư vấn...', required: false }
    ],
    buildPrompt: function(d) {
      return 'Tạo content package đa kênh bằng tiếng Việt:\n' +
        '- Chủ đề: ' + d.topic + '\n' +
        '- Đối tượng: ' + d.targetAudience + '\n' +
        '- Kênh: ' + (d.channels || 'Facebook, TikTok, Email') + '\n' +
        '- Giọng điệu: ' + (d.tone || 'Thân thiện') + '\n' +
        '- CTA: ' + (d.cta || 'Liên hệ ngay') + '\n\n' +
        'Viết đầy đủ: 1 post Facebook dài (800-1000 từ), 1 script TikTok/Reels 60 giây, 1 email marketing, 1 tin nhắn Zalo ngắn gọn, 5 caption ngắn cho Stories/Shorts.';
    },
    buildTitle: function(d) {
      return 'Content_' + (d.topic || 'package').replace(/\s+/g, '_').substring(0, 40);
    }
  },

  'email-automation': {
    skillId: 'email-automation',
    title: 'Email Automation',
    icon: '📧',
    category: 'Automation',
    color: '#8B5CF6',
    desc: 'Thiết kế chuỗi email nurturing tự động, cá nhân hóa theo segment.',
    estimatedTime: '~3 phút',
    outputType: 'Email Sequence',
    fields: [
      { id: 'product', label: 'Sản phẩm / Dịch vụ *', type: 'text', placeholder: 'VD: Phần mềm quản lý, Khóa học online...', required: true, span: 2 },
      { id: 'segment', label: 'Phân khúc khách hàng *', type: 'text', placeholder: 'VD: Lead mới, Khách hàng cũ, Người dùng thử...', required: true },
      { id: 'goal', label: 'Mục tiêu chuỗi email *', type: 'text', placeholder: 'VD: Chuyển đổi trial → paid, Upsell, Giữ chân...', required: true },
      { id: 'emailCount', label: 'Số lượng email', type: 'select', options: ['3 email', '5 email', '7 email', '10 email'], required: false },
      { id: 'tone', label: 'Giọng điệu', type: 'select', options: ['Chuyên nghiệp', 'Thân thiện', 'Urgent', 'Giáo dục'], required: false }
    ],
    buildPrompt: function(d) {
      return 'Thiết kế chuỗi email automation bằng tiếng Việt:\n' +
        '- Sản phẩm: ' + d.product + '\n' +
        '- Phân khúc: ' + d.segment + '\n' +
        '- Mục tiêu: ' + d.goal + '\n' +
        '- Số lượng: ' + (d.emailCount || '5 email') + '\n' +
        '- Giọng điệu: ' + (d.tone || 'Thân thiện') + '\n\n' +
        'Cho mỗi email cần có: Ngày gửi, Subject line (A/B test 2 options), Preview text, Nội dung đầy đủ, CTA rõ ràng.';
    },
    buildTitle: function(d) {
      return 'EmailSeq_' + (d.product || 'sequence').replace(/\s+/g, '_').substring(0, 40);
    }
  },

  'crm-ai-assistant': {
    skillId: 'crm-ai-assistant',
    title: 'CRM AI Assistant',
    icon: '💛',
    category: 'CRM',
    color: '#F59E0B',
    desc: 'Phân tích lead, chấm điểm, đề xuất bước tiếp theo tối ưu tỷ lệ chốt.',
    estimatedTime: '~1 phút',
    outputType: 'CRM Report',
    fields: [
      { id: 'leadName', label: 'Tên khách hàng / Công ty *', type: 'text', placeholder: 'VD: Anh Minh - Công ty ABC', required: true, span: 2 },
      { id: 'industry', label: 'Ngành nghề', type: 'text', placeholder: 'VD: Bán lẻ, Sản xuất, F&B...', required: false },
      { id: 'budget', label: 'Ngân sách ước tính', type: 'text', placeholder: 'VD: 50-100 triệu, Chưa xác định...', required: false },
      { id: 'situation', label: 'Tình trạng hiện tại *', type: 'textarea', placeholder: 'Mô tả tình trạng lead: đã liên hệ mấy lần, phản hồi thế nào, vướng mắc gì...', required: true, span: 2 },
      { id: 'stage', label: 'Giai đoạn hiện tại', type: 'select', options: ['Mới tiếp cận', 'Đã demo', 'Đang thương lượng', 'Chờ quyết định', 'Sắp chốt'], required: false }
    ],
    buildPrompt: function(d) {
      return 'Phân tích CRM và đề xuất chiến lược bằng tiếng Việt:\n' +
        '- Lead: ' + d.leadName + '\n' +
        '- Ngành: ' + (d.industry || 'Chưa rõ') + '\n' +
        '- Ngân sách: ' + (d.budget || 'Chưa xác định') + '\n' +
        '- Giai đoạn: ' + (d.stage || 'Mới tiếp cận') + '\n' +
        '- Tình trạng: ' + d.situation + '\n\n' +
        'Hãy cung cấp: Điểm lead scoring (0-100), Phân tích BANT, 3 bước hành động tiếp theo cụ thể, Script cuộc gọi/email tiếp theo, Dự báo xác suất chốt sale.';
    },
    buildTitle: function(d) {
      return 'CRM_' + (d.leadName || 'lead').replace(/\s+/g, '_').substring(0, 40);
    }
  },

  'webinar-builder': {
    skillId: 'webinar-builder',
    title: 'Webinar Builder',
    icon: '🎯',
    category: 'Education',
    color: '#10B981',
    desc: 'Thiết kế webinar bán hàng A-Z: kịch bản, slide, CTA, follow-up email.',
    estimatedTime: '~4 phút',
    outputType: 'Webinar Kit',
    fields: [
      { id: 'webinarTopic', label: 'Chủ đề Webinar *', type: 'text', placeholder: 'VD: 5 bí quyết tăng doanh thu 3x trong 90 ngày', required: true, span: 2 },
      { id: 'product', label: 'Sản phẩm / Offer cuối webinar *', type: 'text', placeholder: 'VD: Khóa học X, Phần mềm Y, Dịch vụ Z...', required: true },
      { id: 'targetAudience', label: 'Đối tượng tham dự *', type: 'text', placeholder: 'VD: Chủ doanh nghiệp SME, Sales Manager...', required: true },
      { id: 'duration', label: 'Thời lượng', type: 'select', options: ['60 phút', '90 phút', '120 phút'], required: false },
      { id: 'price', label: 'Giá sản phẩm', type: 'text', placeholder: 'VD: 2.990.000đ, $97...', required: false }
    ],
    buildPrompt: function(d) {
      return 'Thiết kế Webinar bán hàng hoàn chỉnh bằng tiếng Việt:\n' +
        '- Chủ đề: ' + d.webinarTopic + '\n' +
        '- Sản phẩm bán: ' + d.product + '\n' +
        '- Đối tượng: ' + d.targetAudience + '\n' +
        '- Thời lượng: ' + (d.duration || '90 phút') + '\n' +
        '- Giá: ' + (d.price || 'Chưa xác định') + '\n\n' +
        'Cung cấp đầy đủ: Kịch bản chi tiết từng phần (Hook, Story, Content, Pitch, Q&A), Outline 10-15 slide, 3 CTA scripts, Email xác nhận đăng ký, Email nhắc nhở trước 1h, Email follow-up sau webinar.';
    },
    buildTitle: function(d) {
      return 'Webinar_' + (d.webinarTopic || 'kit').replace(/\s+/g, '_').substring(0, 40);
    }
  },

  'prompt-builder': {
    skillId: 'prompt-builder',
    title: 'Prompt Builder',
    icon: '💡',
    category: 'AI',
    color: '#06B6D4',
    desc: 'Tạo prompt AI chuyên nghiệp, tối ưu cho Claude, ChatGPT, Gemini.',
    estimatedTime: '~1 phút',
    outputType: 'Prompt Document',
    aiOutputSections: ['Phân tích yêu cầu', 'Xây dựng prompt', 'Tài liệu hóa'],
    fields: [
      { id: 'promptGoal', label: 'Mục tiêu prompt *', type: 'text', placeholder: 'VD: Viết email bán hàng, Phân tích dữ liệu, Tạo nội dung marketing...', required: true, span: 2 },
      { id: 'aiModel', label: 'AI Model mục tiêu', type: 'select', options: ['Claude (Anthropic)', 'ChatGPT (OpenAI)', 'Gemini (Google)', 'Tất cả các model'], required: false },
      { id: 'promptType', label: 'Loại prompt', type: 'select', options: ['Zero-shot', 'Few-shot (có ví dụ)', 'Chain of Thought', 'Role-play / Persona', 'Structured Output'], required: false },
      { id: 'context', label: 'Ngữ cảnh sử dụng *', type: 'textarea', placeholder: 'Mô tả ngữ cảnh: Bạn là ai, dùng prompt này để làm gì, đầu ra mong muốn thế nào?', required: true, span: 2 },
      { id: 'examples', label: 'Ví dụ đầu ra mong muốn (tuỳ chọn)', type: 'textarea', placeholder: 'Paste ví dụ kết quả tốt bạn muốn AI tạo ra...', span: 2 }
    ],
    buildPrompt: function(d) {
      return 'Hãy tạo một prompt AI chuyên nghiệp bằng tiếng Việt với thông tin sau:\n' +
        '- Mục tiêu: ' + d.promptGoal + '\n' +
        '- AI Model: ' + (d.aiModel || 'Claude') + '\n' +
        '- Loại prompt: ' + (d.promptType || 'Zero-shot') + '\n' +
        '- Ngữ cảnh: ' + d.context + '\n' +
        (d.examples ? '- Ví dụ đầu ra: ' + d.examples + '\n' : '') +
        '\nYêu cầu tài liệu prompt phải có: 1) Prompt hoàn chỉnh sẵn sàng copy-paste, 2) Giải thích từng phần của prompt, 3) Hướng dẫn tùy chỉnh biến (variables), 4) Ví dụ đầu ra mẫu, 5) Tips tối ưu kết quả, 6) 3 biến thể prompt (ngắn/trung/dài).';
    },
    buildTitle: function(d) {
      return 'Prompt_' + (d.promptGoal || 'builder').replace(/\s+/g, '_').substring(0, 40);
    }
  },

  'report-builder': {
    skillId: 'report-builder',
    title: 'Report Builder',
    icon: '📊',
    category: 'Operations',
    color: '#3B82F6',
    desc: 'Tạo báo cáo kinh doanh chuyên nghiệp: doanh thu, KPI, phân tích chiến lược.',
    estimatedTime: '~3 phút',
    outputType: 'Business Report',
    aiOutputSections: ['Phân tích dữ liệu', 'Xây dựng báo cáo', 'Tạo tài liệu'],
    fields: [
      { id: 'reportType', label: 'Loại báo cáo *', type: 'select', options: ['Báo cáo doanh thu', 'Báo cáo KPI tháng', 'Báo cáo hiệu suất team', 'Báo cáo chiến lược', 'Báo cáo marketing', 'Báo cáo tổng kết năm', 'Báo cáo tùy chỉnh'], required: true },
      { id: 'period', label: 'Kỳ báo cáo *', type: 'text', placeholder: 'VD: Tháng 6/2026, Q2 2026, Năm 2025...', required: true },
      { id: 'department', label: 'Phòng ban / Công ty *', type: 'text', placeholder: 'VD: Sales, Marketing, Công ty AIFUN...', required: true },
      { id: 'audience', label: 'Người nhận báo cáo', type: 'text', placeholder: 'VD: Ban Giám đốc, Cổ đông, Trưởng nhóm...', required: false },
      { id: 'keyData', label: 'Dữ liệu / Số liệu chính *', type: 'textarea', placeholder: 'Nhập số liệu quan trọng: doanh thu, tăng trưởng, KPI đạt được, vấn đề nổi bật...', required: true, span: 2 },
      { id: 'goals', label: 'Mục tiêu kỳ tiếp theo (tuỳ chọn)', type: 'textarea', placeholder: 'Kế hoạch và mục tiêu kỳ sau...', span: 2 }
    ],
    buildPrompt: function(d) {
      return 'Hãy tạo báo cáo kinh doanh chuyên nghiệp bằng tiếng Việt:\n' +
        '- Loại báo cáo: ' + d.reportType + '\n' +
        '- Kỳ báo cáo: ' + d.period + '\n' +
        '- Đơn vị: ' + d.department + '\n' +
        '- Người nhận: ' + (d.audience || 'Ban Giám đốc') + '\n' +
        '- Dữ liệu chính: ' + d.keyData + '\n' +
        (d.goals ? '- Mục tiêu kỳ tiếp: ' + d.goals + '\n' : '') +
        '\nBáo cáo cần có: Tóm tắt điều hành (Executive Summary), Kết quả so với mục tiêu, Phân tích nguyên nhân tăng/giảm, Biểu đồ minh họa (mô tả), Top 3 thành tựu, Top 3 thách thức, Kế hoạch hành động kỳ tiếp theo, Kết luận và kiến nghị.';
    },
    buildTitle: function(d) {
      return 'Report_' + (d.reportType || 'business').replace(/\s+/g, '_').substring(0, 40) + '_' + (d.period || '').replace(/\s+/g, '_').substring(0, 15);
    }
  },

  'sales-script-generator': {
    skillId: 'sales-script-generator',
    title: 'Sales Script Generator',
    icon: '🏆',
    category: 'Sales',
    color: '#EF4444',
    desc: 'Tạo kịch bản bán hàng hoàn chỉnh, xử lý từ chối và chốt sale.',
    estimatedTime: '~2 phút',
    outputType: 'Sales Script',
    fields: [
      { id: 'product', label: 'Sản phẩm / Dịch vụ *', type: 'text', placeholder: 'VD: Phần mềm CRM, Bảo hiểm nhân thọ...', required: true, span: 2 },
      { id: 'targetCustomer', label: 'Khách hàng mục tiêu *', type: 'text', placeholder: 'VD: Chủ doanh nghiệp 20-50 nhân viên...', required: true },
      { id: 'channel', label: 'Kênh bán hàng *', type: 'select', options: ['Gọi điện (Cold Call)', 'Gặp trực tiếp', 'Zalo / Chat', 'Email', 'Demo online'], required: true },
      { id: 'mainObjection', label: 'Từ chối thường gặp nhất', type: 'text', placeholder: 'VD: Giá cao quá, Đang dùng đối thủ, Chưa cần...', required: false },
      { id: 'usp', label: 'Điểm khác biệt (USP)', type: 'textarea', placeholder: 'Lợi thế của sản phẩm so với đối thủ là gì?', required: false, span: 2 }
    ],
    buildPrompt: function(d) {
      return 'Tạo kịch bản bán hàng hoàn chỉnh bằng tiếng Việt:\n' +
        '- Sản phẩm: ' + d.product + '\n' +
        '- Khách hàng: ' + d.targetCustomer + '\n' +
        '- Kênh: ' + d.channel + '\n' +
        '- Từ chối thường gặp: ' + (d.mainObjection || 'Giá cao, chưa cần ngay') + '\n' +
        '- USP: ' + (d.usp || 'Chưa cung cấp') + '\n\n' +
        'Tạo đầy đủ: Kịch bản mở đầu (30 giây), Câu hỏi khám phá nhu cầu (5-7 câu), Pitch sản phẩm theo AIDA, Xử lý 5 từ chối phổ biến nhất, Script chốt sale 3 cách, Follow-up message sau cuộc gặp.';
    },
    buildTitle: function(d) {
      return 'SalesScript_' + (d.product || 'script').replace(/\s+/g, '_').substring(0, 40);
    }
  }

};

function getSkillForm(skillId) {
  return SKILL_FORMS[skillId] || null;
}

window.SKILL_FORMS = SKILL_FORMS;
window.getSkillForm = getSkillForm;
