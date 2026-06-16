/**
 * AIFUN OS — skill-forms.js
 * Định nghĩa form nhập liệu và buildPrompt cho từng Skill
 * ─────────────────────────────────────────────────────────
 * Thêm skill mới: chỉ cần thêm entry vào SKILL_FORMS
 * Mỗi skill PHẢI có: buildPrompt(formData) và buildTitle(formData)
 */

const SKILL_FORMS = {

  // ── SK-001: SOP Builder ────────────────────────────────────────────────────
  'sop-builder': {
    skillId:  'sop-builder',
    title:    'SOP Builder',
    icon:     '📄',
    category: 'Operations',
    color:    '#3B82F6',
    desc:     'Tạo SOP chuẩn hoàn chỉnh với checklist, KPI và phân công vai trò.',
    estimatedTime: '~2 phút',
    outputType: 'SOP Document',
    fields: [
      {
        id: 'sopName', label: 'Tên SOP *', type: 'text',
        placeholder: 'VD: Quy trình onboard khách hàng mới',
        required: true, span: 2
      },
      {
        id: 'department', label: 'Phòng ban *', type: 'text',
        placeholder: 'VD: Sales, Marketing, Vận hành...',
        required: true
      },
      {
        id: 'executor', label: 'Người thực hiện *', type: 'text',
        placeholder: 'VD: Nhân viên sales, Quản lý cấp trung...',
        required: true
      },
      {
        id: 'objective', label: 'Mục tiêu quy trình *', type: 'textarea',
        placeholder: 'Quy trình này giúp gì?
