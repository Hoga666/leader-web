(() => {
if (window.__leaderNavigationLoaded) return;
window.__leaderNavigationLoaded = true;

const LEADER_NAV_GROUPS = [
  {
    id: 'principles',
    label: '1. 原则 Principles',
    items: [
      { label: '1.1 品牌', href: 'brand.html', page: 'brand.html', id: 'principles-brand' },
      { label: '1.2 设计体验原则', href: 'design_principles.html', page: 'design_principles.html', id: 'principles-ux' },
    ],
  },
  {
    id: 'foundations',
    label: '2. 基础 Foundations',
    items: [
      { label: '2.1 视觉基础', id: 'foundations-visual', page: 'foundations.html', disabled: true },
      { label: '2.1.1 色彩', href: 'color_details.html', page: 'color_details.html', child: true },
      { label: '2.1.2 字体', href: 'typography_details.html', page: 'typography_details.html', child: true },
      { label: '2.1.3 图标', href: 'iconography_details.html', page: 'iconography_details.html', child: true },
      { label: '2.1.4 材质', href: 'materials_lighting_details.html', page: 'materials_lighting_details.html', child: true },
      { label: '2.1.5 背景', href: 'background_details.html', page: 'background_details.html', child: true },
      { label: '2.1.6 栅格系统', href: 'grid_system_details.html', page: 'grid_system_details.html', child: true },
      { label: '2.2 信息架构', id: 'foundations-layout', page: 'foundations.html', disabled: true },
      { label: '2.2.1 信息与交互', href: 'leader_basic_design_rules_details.html', page: 'leader_basic_design_rules_details.html', child: true },
      { label: '2.2.2 LED布局', href: 'leader_led_rules_details.html', page: 'leader_led_rules_details.html', child: true },
      { label: '2.2.3 TFT布局', href: 'leader_tft_rules_details.html', page: 'leader_tft_rules_details.html', child: true },
      { label: '2.2.4 组合布局', href: 'leader_tftled_rules_details.html', page: 'leader_tftled_rules_details.html', child: true },
    ],
  },
  {
    id: 'components',
    label: '3. 组件 Components',
    items: [
      { label: '3.1 操作类', id: 'components-action', disabled: true },
      { label: '按钮', href: 'component_buttons.html', page: 'component_buttons.html', child: true },
      { label: '开关', href: 'component_switch.html', page: 'component_switch.html', child: true },
      { label: '3.2 选择类', id: 'components-selection', disabled: true },
      { label: '单选框', href: 'component_radio_button.html', page: 'component_radio_button.html', child: true },
      { label: '复选框', href: 'component_checkbox.html', page: 'component_checkbox.html', child: true },
      { label: '选择器', href: 'component_wheel_picker.html', page: 'component_wheel_picker.html', child: true },
      { label: '3.3 输入类', id: 'components-input', disabled: true },
      { label: '输入框', href: 'component_text_field.html', page: 'component_text_field.html', child: true },
      { label: '调控', href: 'component_slider.html', page: 'component_slider.html', child: true },
      { label: '键盘', href: 'component_keyboard.html', page: 'component_keyboard.html', child: true },
      { label: '3.4 导航类', id: 'components-nav', disabled: true },
      { label: '菜单', href: 'component_menu.html', page: 'component_menu.html', child: true },
      { label: '导航', href: 'component_navigation.html', page: 'component_navigation.html', child: true },
      { label: '标签页', href: 'component_tabs.html', page: 'component_tabs.html', child: true },
      { label: '面包屑', href: 'component_breadcrumbs.html', page: 'component_breadcrumbs.html', child: true },
      { label: '分页', href: 'component_pagination.html', page: 'component_pagination.html', child: true },
      { label: '步骤条', href: 'component_stepper.html', page: 'component_stepper.html', child: true },
      { label: '3.5 数据展示', id: 'components-data', disabled: true },
      { label: '卡片', href: 'component_card.html', page: 'component_card.html', child: true },
      { label: '列表', href: 'component_list_tile.html', page: 'component_list_tile.html', child: true },
      { label: '头像', href: 'component_avatar.html', page: 'component_avatar.html', child: true },
      { label: '图片轮播', href: 'component_carousel.html', page: 'component_carousel.html', child: true },
      { label: '徽标', href: 'component_badge.html', page: 'component_badge.html', child: true },
      { label: '3.6 反馈与浮层', id: 'components-feedback', disabled: true },
      { label: '对话框', href: 'component_dialog_modal.html', page: 'component_dialog_modal.html', child: true },
      { label: '抽屉', href: 'component_drawer.html', page: 'component_drawer.html', child: true },
      { label: '消息提示', href: 'component_snackbar_toast.html', page: 'component_snackbar_toast.html', child: true },
      { label: '弹窗', href: 'component_tooltip.html', page: 'component_tooltip.html', child: true },
      { label: '进度条', href: 'component_progress_indicator.html', page: 'component_progress_indicator.html', child: true },
    ],
  },
  {
    id: 'hardware',
    label: '4. 硬件 Hardware',
    items: [
      { label: '4.1 TFT 屏幕', href: 'hardware_tft.html', page: 'hardware_tft.html', id: 'hw-tft' },
      { label: '4.2 LED 屏幕', href: 'hardware_led.html', page: 'hardware_led.html', id: 'hw-led' },
      { label: '4.3 其它屏幕形态', href: 'hardware_other.html', page: 'hardware_other.html', id: 'hw-other' },
    ],
  },
  {
    id: 'motion',
    label: '5. 动效 Motion',
    items: [
      { label: '5.1 背景动效', href: 'motion.html#motion-bg', id: 'motion-bg' },
      { label: '5.2 转场 Transitions', href: 'motion.html#motion-transitions', id: 'motion-transitions' },
      { label: '5.3 微交互', href: 'motion.html#motion-micro', id: 'motion-micro' },
    ],
  },
  {
    id: 'sensory',
    label: '多感官交互 Sensory',
    items: [
      { label: '灯光 Lighting', href: 'lighting.html', page: 'lighting.html', id: 'sensory-lighting' },
      { label: '触摸 Touch', href: 'touch.html', page: 'touch.html', id: 'sensory-touch' },
      { label: '音效 Audio', href: 'audio.html', page: 'audio.html', id: 'sensory-audio' },
    ],
  },
  {
    id: 'ai',
    label: '7. AI',
    items: [
      { label: '7.1 AI 视觉标准', href: 'ai.html#ai-visual', id: 'ai-visual' },
      { label: '7.2 AI 使用标准', href: 'ai.html#ai-usage', id: 'ai-usage' },
    ],
  },
  {
    id: 'assets',
    label: '8. 资产与推行 Assets',
    items: [
      { label: '8.1 强制规范标准', href: 'assets.html#assets-strict', id: 'assets-strict' },
      { label: '8.2 UT数据推导与沉淀', href: 'assets.html#assets-ut', id: 'assets-ut' },
      { label: '8.3 Figma资产授权', href: 'assets.html#assets-figma', id: 'assets-figma' },
      { label: '8.4 统一度验收机制', href: 'assets.html#assets-qa', id: 'assets-qa' },
    ],
  },
];

const LEADER_NAV_STANDALONE_ITEMS = [
  { label: '9. 更新日志 Log', href: 'changelog.html#changelog', id: 'changelog', standalone: true },
];

const LEADER_NAV_LABEL_EN = {
  '1. 原则 Principles': '1. Principles',
  '1.1 品牌': '1.1 Brand',
  '1.2 设计体验原则': '1.2 UX Principles',
  '2. 基础 Foundations': '2. Foundations',
  '2.1 视觉基础': '2.1 Visual Foundations',
  '2.1.1 色彩': '2.1.1 Color',
  '2.1.2 字体': '2.1.2 Typography',
  '2.1.3 图标': '2.1.3 Iconography',
  '2.1.4 材质': '2.1.4 Material',
  '2.1.5 背景': '2.1.5 Background',
  '2.1.6 栅格系统': '2.1.6 Grid System',
  '2.2 信息架构': '2.2 Information Architecture',
  '2.2.1 信息与交互': '2.2.1 Information & Interaction',
  '2.2.2 LED布局': '2.2.2 LED Layout',
  '2.2.3 TFT布局': '2.2.3 TFT Layout',
  '2.2.4 组合布局': '2.2.4 Combined Layout',
  '3. 组件 Components': '3. Components',
  '3.1 操作类': '3.1 Actions',
  '按钮': 'Buttons',
  '开关': 'Switch / Toggle',
  '3.2 选择类': '3.2 Selection',
  '单选框': 'Radio Button',
  '复选框': 'Checkbox',
  '选择器': 'Picker',
  '3.3 输入类': '3.3 Inputs',
  '输入框': 'Input Field',
  '调控': 'Slider / Control',
  '键盘': 'Keyboard',
  '3.4 导航类': '3.4 Navigation',
  '菜单': 'Menu',
  '导航': 'Navigation',
  '标签页': 'Tabs',
  '面包屑': 'Breadcrumbs',
  '分页': 'Pagination',
  '步骤条': 'Stepper',
  '3.5 数据展示': '3.5 Data Display',
  '卡片': 'Card',
  '列表': 'List',
  '头像': 'Avatar',
  '图片轮播': 'Image Carousel',
  '徽标': 'Badge',
  '3.6 反馈与浮层': '3.6 Feedback & Overlays',
  '对话框': 'Dialog',
  '抽屉': 'Drawer',
  '消息提示': 'Message / Toast',
  '弹窗': 'Popup',
  '进度条': 'Progress Bar',
  '4. 硬件 Hardware': '4. Hardware',
  '4.1 TFT 屏幕': '4.1 TFT Screens',
  '4.2 LED 屏幕': '4.2 LED Screens',
  '4.3 其它屏幕形态': '4.3 Other Screens',
  '5. 动效 Motion': '5. Motion',
  '5.1 背景动效': '5.1 Background Motion',
  '5.2 转场 Transitions': '5.2 Transitions',
  '5.3 微交互': '5.3 Micro-interactions',
  '多感官交互 Sensory': 'Sensory Interaction',
  '灯光 Lighting': 'Lighting',
  '触摸 Touch': 'Touch',
  '音效 Audio': 'Audio',
  '7. AI': '7. AI',
  '7.1 AI 视觉标准': '7.1 AI Visual Standards',
  '7.2 AI 使用标准': '7.2 AI Usage Guidelines',
  '8. 资产与推行 Assets': '8. Assets & Governance',
  '8.1 强制规范标准': '8.1 Mandatory Standards',
  '8.2 UT数据推导与沉淀': '8.2 UT Data Derivation',
  '8.3 Figma资产授权': '8.3 Figma Assets',
  '8.4 统一度验收机制': '8.4 Consistency QA',
  '9. 更新日志 Log': '9. Changelog',
};

const PUBLISHED_PAGES = new Set([
  'leader_os_design_system.html',
  'haier_os_design_system.html',
  'brand.html',
  'design_principles.html',
  'foundations.html',
  'components.html',
  'color_details.html',
  'typography_details.html',
  'iconography_details.html',
  'materials_lighting_details.html',
  'background_details.html',
  'grid_system_details.html',
  'leader_basic_design_rules_details.html',
  'leader_led_rules_details.html',
  'leader_tft_rules_details.html',
  'leader_tftled_rules_details.html',
  'component_buttons.html',
  'component_switch.html',
  'component_radio_button.html',
  'component_checkbox.html',
  'component_wheel_picker.html',
  'component_text_field.html',
  'component_dropdown_select.html',
  'component_slider.html',
  'component_keyboard.html',
  'component_menu.html',
  'component_app_bar.html',
  'component_navigation.html',
  'component_tabs.html',
  'component_breadcrumbs.html',
  'component_pagination.html',
  'component_stepper.html',
  'component_card.html',
  'component_list_tile.html',
  'component_avatar.html',
  'component_divider.html',
  'component_badge.html',
  'component_dialog_modal.html',
  'component_bottom_sheet.html',
  'component_snackbar_toast.html',
  'component_tooltip.html',
  'component_progress_indicator.html',
]);

function initNavigationGate() {
  document.addEventListener('click', function (e) {
    const a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    const href = a.getAttribute('href') || '';
    if (!href || /^(https?:|\/\/|mailto:|tel:|#)/.test(href)) return;
    const m = href.match(/^([^?#]*\.html)/i);
    if (!m) return;
    const page = decodeURIComponent(m[1].split('/').pop() || '').toLowerCase();
    if (PUBLISHED_PAGES.has(page)) return;
    e.preventDefault();
    e.stopPropagation();
  }, true);
}

function initSidebarActiveStyle() {
  if (document.getElementById('leader-navigation-styles')) return;
  const s = document.createElement('style');
  s.id = 'leader-navigation-styles';
  s.textContent = `
#sidebar#sidebar { box-sizing:border-box; position:fixed; inset:0 auto 0 0; width:288px; height:100vh; height:100dvh; display:flex; flex-direction:column; overflow-y:auto; overflow-x:hidden; z-index:40; padding:0; margin:0; background:rgba(255,255,255,.6); border:1px solid rgba(255,255,255,.4); border-right-color:rgba(255,255,255,.5); border-radius:0; box-shadow:0 8px 32px rgba(0,0,0,.04); backdrop-filter:blur(24px); -webkit-backdrop-filter:blur(24px); color:#1D1D1F; font:16px/1.5 'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif; scrollbar-width:thin; scrollbar-color:rgba(0,0,0,.08) transparent; }
#sidebar#sidebar *, #sidebar#sidebar *::before, #sidebar#sidebar *::after { box-sizing:border-box; }
#sidebar#sidebar a { text-decoration:none; }
#sidebar#sidebar button { appearance:none; -webkit-appearance:none; margin:0; border:0; background:transparent; font-family:inherit; font-size:14px; font-weight:400; line-height:20px; color:inherit; text-transform:none; cursor:pointer; }
#sidebar#sidebar .leader-nav-header { position:relative; padding:32px 32px 16px; }
#sidebar#sidebar .leader-logo-container { display:inline-flex; align-items:center; justify-content:center; width:auto; height:48px; padding:0 12px; margin:0 0 16px; border:0; border-radius:9999px; background:#EC6443; color:#fff; font:700 16px/24px Arial,Helvetica,sans-serif; box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1); }
#sidebar#sidebar h1 { margin:0; padding:0; color:#1D1D1F; font-size:24px; line-height:32px; font-weight:700; letter-spacing:-.025em; }
#sidebar#sidebar .leader-nav-subtitle { margin:4px 0 0; padding:0; font-size:14px; line-height:20px; font-weight:400; color:#1D1D1F; }
#sidebar#sidebar nav { flex:1; padding:0 16px 48px; }
#sidebar#sidebar .sidebar-nav-group + .sidebar-nav-group { margin-top:4px; }
#sidebar#sidebar .sidebar-group-trigger { width:100%; display:flex; align-items:center; justify-content:space-between; gap:12px; margin-top:8px; padding:10px 16px; text-align:left; color:rgba(107,114,128,.8); border-radius:9999px; }
#sidebar#sidebar .sidebar-group-trigger > svg { width:16px; height:16px; flex-shrink:0; transition:none; }
#sidebar#sidebar .sidebar-group-trigger[aria-expanded="true"] > svg { transform:rotate(180deg); }
#sidebar#sidebar .sidebar-group-panel { margin-top:4px; }
#sidebar#sidebar .sidebar-group-panel.hidden { display:none; }
#sidebar#sidebar .sidebar-group-panel > * + * { margin-top:4px; }
#sidebar#sidebar .sidebar-nav-item { display:block; margin:0; padding:10px 16px; border:0; border-left:3px solid transparent; border-radius:12px; font-size:14px; line-height:20px; font-weight:400; color:#374151; transition:none; }
#sidebar#sidebar .sidebar-nav-item.nav-child { padding:8px 16px 8px 28px; color:#4B5563; border-radius:0 8px 8px 0; }
#sidebar#sidebar .sidebar-nav-item.nav-disabled { color:#D1D5DB; cursor:default; }
#sidebar#sidebar .sidebar-nav-item.nav-standalone { color:rgba(107,114,128,.8); }
#sidebar#sidebar a.sidebar-nav-item:hover, #sidebar#sidebar .sidebar-group-trigger:hover { color:#EC6443; background:rgba(0,0,0,.05); border-radius:9999px; }
#sidebar#sidebar .sidebar-nav-item.active, #sidebar#sidebar .sidebar-nav-item.active:hover { color:#fff; font-weight:700; background:#EC6443; border-radius:9999px; border-left-color:transparent; }
#sidebar#sidebar .leader-nav-footer { margin-top:8px; padding-top:8px; border-top:1px solid rgba(255,255,255,.5); }
#sidebar#sidebar .leader-nav-collapse, #sidebar-restore-button#sidebar-restore-button { display:flex; align-items:center; justify-content:center; width:28px; height:28px; padding:6px; color:#6B7280; background:rgba(255,255,255,.8); border:1px solid rgba(0,0,0,.08); border-radius:9999px; cursor:pointer; }
#sidebar#sidebar .leader-nav-collapse { position:absolute; top:32px; right:12px; }
#sidebar#sidebar .leader-nav-collapse svg, #sidebar-restore-button#sidebar-restore-button svg { display:block; width:16px; height:16px; }
#sidebar-restore-button#sidebar-restore-button { display:none; position:fixed; top:24px; left:12px; z-index:45; }
#sidebar#sidebar a:focus-visible, #sidebar#sidebar button:focus-visible, #sidebar-restore-button#sidebar-restore-button:focus-visible { outline:2px solid #EC6443; outline-offset:2px; }
#sidebar#sidebar::-webkit-scrollbar { width:4px; }
#sidebar#sidebar::-webkit-scrollbar-track { background:transparent; }
#sidebar#sidebar::-webkit-scrollbar-thumb { background:rgba(0,0,0,.08); border-radius:10px; }
#sidebar-backdrop#sidebar-backdrop { display:none; position:fixed; inset:0; z-index:45; background:rgba(0,0,0,.2); backdrop-filter:blur(4px); }
@media(min-width:768px) {
 body.leader-sidebar-collapsed #sidebar#sidebar { display:none; }
 body.leader-sidebar-collapsed #sidebar-restore-button#sidebar-restore-button { display:flex; }
 body.leader-sidebar-collapsed #main-content#main-content { margin-left:0 !important; }
}
@media(max-width:767px) {
 #sidebar#sidebar { display:none; z-index:60; max-width:calc(100vw - 48px); background:rgba(255,255,255,.9); }
 #sidebar#sidebar[data-menu-open="true"] { display:flex; }
 #sidebar-backdrop#sidebar-backdrop[data-menu-open="true"] { display:block; }
 #sidebar#sidebar .leader-nav-collapse { display:none; }
}
@media(prefers-reduced-motion:reduce) { #sidebar#sidebar * { transition:none; } }
`;
  (document.head || document.documentElement).appendChild(s);
}

function readNavSetting(key) { try { return localStorage.getItem(key); } catch (_) { return null; } }
function writeNavSetting(key, value) { try { localStorage.setItem(key, value); } catch (_) {} }

function normalizeNavPage(page) {
  return decodeURIComponent(page).replace(/\(\d+\)(?=\.html$)/i, '').trim();
}

(function initLeaderNavigation() {
  const sidebar = document.getElementById('sidebar');
  const mobileButton = document.getElementById('mobile-menu-btn');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (!sidebar) return;
  const currentPage = normalizeNavPage(window.location.pathname.split('/').pop() || 'leader_os_design_system.html');
  
  // ★★★ 关键改动：移除首页强制中文，统一读取存储的语言 ★★★
  let currentLanguage = readNavSetting('leader-guideline-language') || 'zh';

  const stripNavNumber = (label) => label.replace(/^\d+(?:\.\d+)*\.?\s*/, '').trim();

  const zhNavLabel = (label) => {
    const stripped = stripNavNumber(label);
    return /[\u4e00-\u9fff]/.test(stripped) ? stripped.replace(/\s+[A-Za-z&].*$/, '').trim() : stripped;
  };

  const navLabel = (label) => {
    return currentLanguage === 'zh'
      ? zhNavLabel(label)
      : stripNavNumber(LEADER_NAV_LABEL_EN[label] || label);
  };

  const normalizeHref = (href) =>
    href.replace(
      /^leader_os_design_system\.html(?=#)/,
      currentPage === 'leader_os_design_system.html' ? '' : 'leader_os_design_system.html'
    );

  const currentHash = window.location.hash.replace('#', '');
  const currentGroup = LEADER_NAV_GROUPS.find((group) =>
    group.items.some((item) => item.page === currentPage || item.href?.startsWith(currentPage + '#') || item.id === currentHash)
  )?.id;
  const openGroups = new Set(currentGroup ? [currentGroup] : []);

  const navItemTemplate = (item) => {
    if (item.disabled) {
      return `<span class="sidebar-nav-item nav-disabled block px-4 py-2.5 text-sm font-normal text-gray-300 rounded-xl cursor-not-allowed" data-nav-id="${item.id || ''}" data-label-zh="${zhNavLabel(item.label)}" data-label-en="${stripNavNumber(LEADER_NAV_LABEL_EN[item.label] || item.label)}">${navLabel(item.label)}</span>`;
    }
    const [itemPage, itemHash] = (item.href || '').split('#');
    const isCurrentPage =
      item.page === currentPage ||
      (itemPage === currentPage && (!currentHash || itemHash === currentHash)) ||
      (!itemPage && itemHash && itemHash === currentHash);
    const baseClasses = item.standalone
      ? 'sidebar-nav-item nav-standalone block px-4 py-2.5 text-sm font-normal text-gray-500/80 hover:text-[#EC6443] rounded-xl'
      : item.child
        ? 'sidebar-nav-item nav-child block px-4 py-2 text-sm font-normal text-gray-600 hover:text-[#EC6443] pl-7 rounded-r-lg'
        : 'sidebar-nav-item block px-4 py-2.5 text-sm font-normal text-gray-700 hover:text-[#EC6443] rounded-xl';
    const labelZh = zhNavLabel(item.label);
    const labelEn = stripNavNumber(LEADER_NAV_LABEL_EN[item.label] || item.label);
    return `<a href="${normalizeHref(item.href)}" class="${baseClasses}${isCurrentPage ? ' active' : ''}" data-nav-id="${item.id || ''}" data-nav-page="${item.page || ''}" data-label-zh="${labelZh}" data-label-en="${labelEn}">${navLabel(item.label)}</a>`;
  };

  const groupTemplate = (group) => {
    const isOpen = openGroups.has(group.id);
    return `
      <div class="sidebar-nav-group" data-nav-group="${group.id}">
        <button type="button" class="sidebar-group-trigger w-full flex items-center justify-between gap-3 px-4 py-2.5 mt-2 text-left text-sm font-normal text-gray-500/80 hover:text-[#EC6443]" aria-expanded="${isOpen}" aria-controls="nav-panel-${group.id}" data-nav-toggle="${group.id}">
           <span data-label-zh="${zhNavLabel(group.label)}" data-label-en="${stripNavNumber(LEADER_NAV_LABEL_EN[group.label] || group.label)}">${navLabel(group.label)}</span>
          <svg class="w-4 h-4 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        <div id="nav-panel-${group.id}" class="sidebar-group-panel mt-1 space-y-1 ${isOpen ? '' : 'hidden'}">
          ${group.items.map(navItemTemplate).join('')}
        </div>
      </div>`;
  };

  sidebar.innerHTML = `
    <div class="leader-nav-header relative p-8 pb-4">
      <button type="button" class="leader-nav-collapse" data-sidebar-collapse aria-label="收起导航" title="收起导航" aria-controls="sidebar" aria-expanded="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M15 5l-7 7 7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      <a href="leader_os_design_system.html" class="leader-logo-container w-16 h-16 mb-4 text-xl shadow-md rounded-xl flex items-center justify-center bg-[#EC6443] text-white font-bold text-sm" style="display:inline-flex; width:auto; height:48px; padding:0 12px; border-radius:9999px; font-size:16px; font-weight:700;" aria-label="Leader Design 首页">Leader</a>
      <h1 class="text-2xl font-bold tracking-tight">Leader Design</h1>
      <p class="leader-nav-subtitle text-sm text-text-secondary mt-1">NEXT UX Guideline 1.0.0</p>
    </div>
    <nav class="flex-1 px-4 pb-12 space-y-1" aria-label="章节目录">
      ${LEADER_NAV_GROUPS.map(groupTemplate).join('')}
      <div class="leader-nav-footer mt-2 pt-2 border-t border-white/50">
        ${LEADER_NAV_STANDALONE_ITEMS.map(navItemTemplate).join('')}
      </div>
    </nav>
  `;

  const sidebarRestoreButton = document.createElement('button');
  sidebarRestoreButton.id = 'sidebar-restore-button';
  sidebarRestoreButton.type = 'button';
  sidebarRestoreButton.setAttribute('aria-label', '展开左侧导航');
  sidebarRestoreButton.setAttribute('title', '展开导航');
  sidebarRestoreButton.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>';
  document.body.appendChild(sidebarRestoreButton);

  const setSidebarCollapsed = (collapsed, persist = true) => {
    document.body.classList.toggle('leader-sidebar-collapsed', collapsed);
    sidebar.querySelector('[data-sidebar-collapse]')?.setAttribute('aria-expanded', String(!collapsed));
    sidebar.setAttribute('aria-hidden', String(window.innerWidth >= 768 ? collapsed : sidebar.dataset.menuOpen !== 'true'));
    sidebarRestoreButton.setAttribute('aria-expanded', String(!collapsed));
    if (persist) writeNavSetting('leader-guideline-sidebar-collapsed', collapsed ? '1' : '0');
  };
  setSidebarCollapsed(readNavSetting('leader-guideline-sidebar-collapsed') === '1', false);
  sidebar.querySelector('[data-sidebar-collapse]')?.addEventListener('click', () => setSidebarCollapsed(true));
  sidebarRestoreButton.addEventListener('click', () => setSidebarCollapsed(false));

  const toggleGroup = (groupId) => {
    const isOpen = openGroups.has(groupId);
    const trigger = sidebar.querySelector(`[data-nav-toggle="${groupId}"]`);
    const panel = sidebar.querySelector(`#nav-panel-${groupId}`);
    if (!trigger || !panel) return;
    if (isOpen) {
      openGroups.delete(groupId);
      trigger.setAttribute('aria-expanded', 'false');
      trigger.querySelector('svg')?.classList.remove('rotate-180');
      panel.classList.add('hidden');
    } else {
      openGroups.add(groupId);
      trigger.setAttribute('aria-expanded', 'true');
      trigger.querySelector('svg')?.classList.add('rotate-180');
      panel.classList.remove('hidden');
    }
  };

  sidebar.querySelectorAll('[data-nav-toggle]').forEach((button) => {
    button.addEventListener('click', () => toggleGroup(button.dataset.navToggle));
  });

  let menuOpen = false;
  const setMenuOpen = (open) => {
    menuOpen = open && window.innerWidth < 768;
    sidebar.dataset.menuOpen = String(menuOpen);
    sidebar.classList.toggle('hidden', !menuOpen && window.innerWidth < 768);
    sidebar.classList.toggle('flex', menuOpen || window.innerWidth >= 768);
    sidebar.setAttribute('aria-hidden', String(window.innerWidth < 768 ? !menuOpen : document.body.classList.contains('leader-sidebar-collapsed')));
    mobileButton?.setAttribute('aria-expanded', String(menuOpen));
    if (backdrop) {
      backdrop.dataset.menuOpen = String(menuOpen);
      backdrop.classList.toggle('hidden', !menuOpen);
      backdrop.setAttribute('aria-hidden', String(!menuOpen));
    }
  };
  mobileButton?.setAttribute('aria-controls', 'sidebar');
  mobileButton?.addEventListener('click', () => setMenuOpen(!menuOpen));
  backdrop?.addEventListener('click', () => { setMenuOpen(false); mobileButton?.focus(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menuOpen) { setMenuOpen(false); mobileButton?.focus(); }
  });
  sidebar.querySelectorAll('a.sidebar-nav-item').forEach(link => {
    if (link.classList.contains('active')) link.setAttribute('aria-current', 'page');
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) setMenuOpen(false);
    });
  });
  window.addEventListener('resize', () => setMenuOpen(false));
  setMenuOpen(false);

  // ★★★ 核心改动：监听语言切换，实时更新侧边栏所有文字 ★★★
  document.addEventListener('leader-language-change', function (e) {
    const lang = e.detail && e.detail.lang ? e.detail.lang : 'zh';
    currentLanguage = lang;
    // 更新所有带 data-label-zh / data-label-en 的元素
    sidebar.querySelectorAll('[data-label-zh][data-label-en]').forEach(function (el) {
      const zh = el.getAttribute('data-label-zh');
      const en = el.getAttribute('data-label-en');
      el.textContent = lang === 'zh' ? zh : en;
    });
  });

})();

initNavigationGate();
initSidebarActiveStyle();

})();