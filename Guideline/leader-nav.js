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
      { label: '2.2 布局基础', id: 'foundations-layout', page: 'foundations.html', disabled: true },
      { label: '2.2.1 信息架构', href: 'spatial_depth_details.html', page: 'spatial_depth_details.html', child: true },
      { label: '2.2.2 核心要素', href: 'hero_element_details.html', page: 'hero_element_details.html', child: true },
      { label: '2.2.3 排版', href: 'spacing_layout_details.html', page: 'spacing_layout_details.html', child: true },
      { label: '2.2.4 栅格', href: 'grid_system_details.html', page: 'grid_system_details.html', child: true },
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
      { label: '单选按钮', href: 'component_radio_button.html', page: 'component_radio_button.html', child: true },
      { label: '复选框', href: 'component_checkbox.html', page: 'component_checkbox.html', child: true },
      { label: '滚轮选择器', href: 'component_wheel_picker.html', page: 'component_wheel_picker.html', child: true },
      { label: '3.3 输入类', id: 'components-input', disabled: true },
      { label: '文本框', href: 'component_text_field.html', page: 'component_text_field.html', child: true },
      { label: '下拉选择', href: 'component_dropdown_select.html', page: 'component_dropdown_select.html', child: true },
      { label: '调控', href: 'component_slider.html', page: 'component_slider.html', child: true },
      { label: '3.4 导航类', id: 'components-nav', disabled: true },
      { label: '应用栏', href: 'component_app_bar.html', page: 'component_app_bar.html', child: true },
      { label: '导航', href: 'component_navigation.html', page: 'component_navigation.html', child: true },
      { label: '标签页', href: 'component_tabs.html', page: 'component_tabs.html', child: true },
      { label: '面包屑', href: 'component_breadcrumbs.html', page: 'component_breadcrumbs.html', child: true },
      { label: '分页', href: 'component_pagination.html', page: 'component_pagination.html', child: true },
      { label: '步骤条', href: 'component_stepper.html', page: 'component_stepper.html', child: true },
      { label: '3.5 数据展示', id: 'components-data', disabled: true },
      { label: '卡片', href: 'component_card.html', page: 'component_card.html', child: true },
      { label: '列表 / 列表项', href: 'component_list_tile.html', page: 'component_list_tile.html', child: true },
      { label: '头像', href: 'component_avatar.html', page: 'component_avatar.html', child: true },
      { label: '分割线', href: 'component_divider.html', page: 'component_divider.html', child: true },
      { label: '徽标', href: 'component_badge.html', page: 'component_badge.html', child: true },
      { label: '3.6 反馈与浮层', id: 'components-feedback', disabled: true },
      { label: '对话框 / 模态框', href: 'component_dialog_modal.html', page: 'component_dialog_modal.html', child: true },
      { label: '底部面板', href: 'component_bottom_sheet.html', page: 'component_bottom_sheet.html', child: true },
      { label: '消息条 / 轻提示', href: 'component_snackbar_toast.html', page: 'component_snackbar_toast.html', child: true },
      { label: '工具提示', href: 'component_tooltip.html', page: 'component_tooltip.html', child: true },
      { label: '进度指示器', href: 'component_progress_indicator.html', page: 'component_progress_indicator.html', child: true },
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
  '2.2 布局基础': '2.2 Layout',
  '2.2.1 信息架构': '2.2.1 Information Architecture',
  '2.2.2 核心要素': '2.2.2 Hero Element',
  '2.2.3 排版': '2.2.3 Spacing & Layout',
  '2.2.4 栅格': '2.2.4 Grid System',
  '3. 组件 Components': '3. Components',
  '3.1 操作类': '3.1 Actions',
  '按钮': 'Buttons',
  '开关': 'Switch / Toggle',
  '3.2 选择类': '3.2 Selection',
  '单选按钮': 'Radio Button',
  '复选框': 'Checkbox',
  '滚轮选择器': 'Wheel Picker',
  '3.3 输入类': '3.3 Inputs',
  '文本框': 'Text Field',
  '下拉选择': 'Dropdown / Select',
  '调控': 'Control',
  '3.4 导航类': '3.4 Navigation',
  '应用栏': 'App Bar',
  '导航': 'Navigation',
  '标签页': 'Tabs',
  '面包屑': 'Breadcrumbs',
  '分页': 'Pagination',
  '步骤条': 'Steps',
  '3.5 数据展示': '3.5 Data Display',
  '卡片': 'Card',
  '列表 / 列表项': 'List / List Tile',
  '头像': 'Avatar',
  '分割线': 'Divider',
  '徽标': 'Badge',
  '3.6 反馈与浮层': '3.6 Feedback & Overlays',
  '对话框 / 模态框': 'Dialog / Modal',
  '底部面板': 'Bottom Sheet',
  '消息条 / 轻提示': 'Snackbar / Toast',
  '工具提示': 'Tooltip',
  '进度指示器': 'Progress Indicator',
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
  '8.2 UT数据推导与沉淀': '8.2 UT Data',
  '8.3 Figma资产授权': '8.3 Figma Assets',
  '8.4 统一度验收机制': '8.4 Consistency QA',
  '9. 更新日志 Log': '9. Changelog',
};

(function initLeaderNavigation() {
  const sidebar = document.getElementById('sidebar');
  const mobileButton = document.getElementById('mobile-menu-btn');
  const backdrop = document.getElementById('sidebar-backdrop');
  const mainContent = document.getElementById('main-content') || document.querySelector('main');

  if (!sidebar) return;

  const currentPage = window.location.pathname.split('/').pop() || 'leader_os_design_system.html';
  const currentLanguage = localStorage.getItem('leader-guideline-language') || 'zh';
  const sensorySubpages = new Set(['lighting.html', 'touch.html', 'audio.html']);
  let scrollSpyPausedUntil = 0;

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

  // ★★★ 修改点：disabled 项使用浅灰色 + 不可点击 ★★★
  const navItemTemplate = (item) => {
    if (item.disabled) {
      return `<span class="sidebar-nav-item nav-disabled block px-4 py-2.5 text-sm font-normal text-gray-300 rounded-xl transition-colors cursor-not-allowed" data-nav-id="${item.id || ''}">${navLabel(item.label)}</span>`;
    }

    const [itemPage, itemHash] = (item.href || '').split('#');
    const isCurrentPage =
      item.page === currentPage ||
      (itemPage === currentPage && (!currentHash || itemHash === currentHash)) ||
      (!itemPage && itemHash && itemHash === currentHash);

    const baseClasses = item.standalone
      ? 'sidebar-nav-item block px-4 py-2.5 text-sm font-normal text-gray-500/80 hover:text-blue-600 rounded-xl transition-colors'
      : item.child
        ? 'sidebar-nav-item nav-child block px-4 py-2 text-sm font-normal text-gray-600 hover:text-blue-600 pl-7 rounded-r-lg transition-colors'
        : 'sidebar-nav-item block px-4 py-2.5 text-sm font-normal text-gray-700 hover:text-blue-600 rounded-xl transition-colors';

    return `<a href="${normalizeHref(item.href)}" class="${baseClasses}${isCurrentPage ? ' active' : ''}" data-nav-id="${item.id || ''}" data-nav-page="${item.page || ''}">${navLabel(item.label)}</a>`;
  };

  const groupTemplate = (group) => {
    const isOpen = openGroups.has(group.id);
    return `
      <div class="sidebar-nav-group" data-nav-group="${group.id}">
        <button type="button" class="sidebar-group-trigger w-full flex items-center justify-between gap-3 px-4 py-2.5 mt-2 text-left text-sm font-normal text-gray-500/80 hover:text-blue-600 hover:bg-white/40 rounded-xl transition-colors" aria-expanded="${isOpen}" aria-controls="nav-panel-${group.id}" data-nav-toggle="${group.id}">
          <span>${navLabel(group.label)}</span>
          <svg class="w-4 h-4 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        <div id="nav-panel-${group.id}" class="sidebar-group-panel mt-1 space-y-1 ${isOpen ? '' : 'hidden'}">
          ${group.items.map(navItemTemplate).join('')}
        </div>
      </div>`;
  };

  sidebar.innerHTML = `
    <div class="relative p-8 pb-4">
      <button type="button" class="hidden md:flex absolute top-6 right-5" aria-label="收起左侧导航" title="收起导航" data-sidebar-collapse>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
      </button>
      <a href="leader_os_design_system.html" class="leader-logo-container w-16 h-16 mb-4 text-xl shadow-md rounded-xl flex items-center justify-center bg-[#EC6443] text-white font-bold text-sm" aria-label="Leader Design 首页">Leader</a>
      <h1 class="text-2xl font-bold tracking-tight">Leader Design</h1>
      <p class="text-sm text-text-secondary mt-1">NEXT UX Guideline 1.0.1</p>
    </div>
    <nav class="flex-1 px-4 pb-12 space-y-1" aria-label="章节目录">
      ${LEADER_NAV_GROUPS.map(groupTemplate).join('')}
      <div class="mt-2 pt-2 border-t border-white/50">
        ${LEADER_NAV_STANDALONE_ITEMS.map(navItemTemplate).join('')}
      </div>
    </nav>
  `;

  // 侧边栏折叠功能
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
    sidebarRestoreButton.setAttribute('aria-expanded', String(!collapsed));
    if (persist) localStorage.setItem('leader-guideline-sidebar-collapsed', collapsed ? '1' : '0');
  };

  setSidebarCollapsed(localStorage.getItem('leader-guideline-sidebar-collapsed') === '1', false);
  sidebar.querySelector('[data-sidebar-collapse]')?.addEventListener('click', () => setSidebarCollapsed(true));
  sidebarRestoreButton.addEventListener('click', () => setSidebarCollapsed(false));

  // 展开/收起分组
  const toggleGroup = (groupId) => {
    const isOpen = openGroups.has(groupId);
    const trigger = sidebar.querySelector(`[data-nav-toggle="${groupId}"]`);
    const panel = sidebar.querySelector(`#nav-panel-${groupId}`);

    if (isOpen) {
      openGroups.delete(groupId);
      trigger?.setAttribute('aria-expanded', 'false');
      trigger?.querySelector('svg')?.classList.remove('rotate-180');
      panel?.classList.add('hidden');
    } else {
      openGroups.add(groupId);
      trigger?.setAttribute('aria-expanded', 'true');
      trigger?.querySelector('svg')?.classList.add('rotate-180');
      panel?.classList.remove('hidden');
    }
  };

  sidebar.querySelectorAll('[data-nav-toggle]').forEach((button) => {
    button.addEventListener('click', () => toggleGroup(button.dataset.navToggle));
  });

  // 移动端菜单
  const setMenuOpen = (open) => {
    sidebar.classList.toggle('hidden', !open && window.innerWidth < 768);
    sidebar.classList.toggle('flex', open || window.innerWidth >= 768);
    sidebar.classList.toggle('z-50', open);
    sidebar.classList.toggle('bg-white/90', open);
    sidebar.setAttribute('aria-hidden', String(!open && window.innerWidth < 768));
    mobileButton?.setAttribute('aria-expanded', String(open));
    backdrop?.classList.toggle('hidden', !open);
  };

  mobileButton?.setAttribute('aria-controls', 'sidebar');
  mobileButton?.setAttribute('aria-expanded', 'false');
  mobileButton?.addEventListener('click', () => setMenuOpen(sidebar.classList.contains('hidden')));
  backdrop?.addEventListener('click', () => setMenuOpen(false));

  // 导航点击高亮
  const navLinks = sidebar.querySelectorAll('.sidebar-nav-item');
  navLinks.forEach((link) => {
    link.addEventListener('click', function(e) {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      if (window.innerWidth < 768) setMenuOpen(false);
    });
  });

  // 窗口resize自适应
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      sidebar.classList.remove('hidden');
      sidebar.classList.add('flex');
      sidebar.setAttribute('aria-hidden', 'false');
      backdrop?.classList.add('hidden');
    } else if (!sidebar.classList.contains('z-50')) {
      sidebar.classList.add('hidden');
      sidebar.setAttribute('aria-hidden', 'true');
    }
  });
})();