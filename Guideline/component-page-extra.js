/* =========================================================
   component-page-extra.js
   后续新增组件渲染函数
   依赖：component-page.js 中已定义的 radioList
   ========================================================= */

/* =========================================================
   菜单（Menu）—— Leader 样式
   ========================================================= */
function renderMenuGuideline(language) {
  const zh = language === 'zh';
  const copy = zh ? {
    title: '菜单',
    intro: '菜单是系统主要的导航形式，用户可以通过菜单访问目标功能。',
    useTitle: '何时使用',
    useBody: '菜单是提供一组操作或导航入口。它可以是垂直的列表（如侧边菜单），也可以是点击后弹出的下拉列表。点击菜单项通常意味着执行一个动作（如“删除”、“导出”）或跳转到另一个页面/模块。少量同级内容切换优先使用标签页；单一字段的选项选择使用选择器；高频即时动作使用按钮。',
    anatomyTitle: '组件样式',
    anatomyIntro: '菜单组件由容器、分组标题、菜单项、可选图标、文本标签、展开指示和选中指示组成。',
    group: '分组标题',
    parent: '父级菜单项',
    selected: '当前选中项',
    item: '普通菜单项',
    collapsed: '收起态',
    more: '更多',
    sideMenu: '竖向示例',
    topMenu: '横向示例',
    hierarchyTitle: '层级与内容',
    hierarchyItems: [
      '一级入口保持稳定，按用户任务而非组织架构分组。',
      '推荐不超过 2 层；确需第 3 层时，优先拆分信息架构或进入独立页面。',
      '标签使用简短名词或动宾短语，同一层级采用一致句式，不使用含义模糊的“其他”。',
      '分组标题不可点击，不与菜单项使用相同视觉权重。',
      '图标只用于提升识别，不替代文字；同一菜单中要么系统性使用，要么省略。'
    ],
    behaviorTitle: '交互规则',
    behaviorItems: [
      '点击导航项后更新内容与选中状态；页面刷新或返回时恢复与路由一致的选中项。',
      '同一层级通常只选中一项。父级可通过展开状态和弱高亮提示其分支包含当前位置。',
      '子菜单展开方向应避开视口边缘；弹出菜单在点击外部、选择完成或按 Esc 后关闭。',
      '侧栏收起时保留可识别图标，并通过悬停、聚焦或长按显示文字；没有图标的菜单不可只缩成空白窄栏。',
      '异步权限或设备状态变化不得造成菜单项跳动；需要隐藏时保持排序规则稳定。'
    ],
    sizeTitle: '组件规格',
    sizeIntro: '根据界面密度、观看距离和输入方式选择小号或常规规格。菜单文字保持清晰，交互热区不得小于建议值。',
    sizeHead: ['规格', '菜单项高度', '最小交互热区', '水平内边距', '文字'],
    sizeRows: [
      ['小号', '48 dp', '48 × 48 dp', '6–12 dp', '24 sp'],
      ['常规', '60 dp', '60 × 60 dp', '8–16 dp', '24 sp']
    ],
    doTitle: '推荐',
    dontTitle: '避免',
    doItems: [
      '按任务和使用频率组织菜单',
      '始终明确显示当前位置',
      '让展开、选中与焦点状态彼此可区分'
    ],
    dontItems: [
      '使用超过三层的深层级',
      '在同一层混合导航与状态开关',
      '仅用图标、缩写或颜色表达含义'
    ]
  } : {
    title: 'Menu',
    intro: 'Menus are the primary form of system navigation, allowing users to access their target functions.',
    useTitle: 'When to use',
    useBody: 'A menu provides a set of actions or navigation entries. It may be a vertical list (such as a side menu) or a dropdown list that opens on click. Selecting a menu item usually performs an action (such as Delete or Export) or navigates to another page or module. Prefer Tabs for a few peer views, Select for choosing one field value, and Buttons for frequent immediate actions.',
    anatomyTitle: 'Component styles',
    anatomyIntro: 'A menu component contains a container, optional group labels, menu items, optional icons, text labels, expansion indicators, and a selected indicator.',
    group: 'Group label',
    parent: 'Parent item',
    selected: 'Current item',
    item: 'Menu item',
    collapsed: 'Collapsed',
    more: 'More',
    sideMenu: 'Vertical example',
    topMenu: 'Horizontal example',
    hierarchyTitle: 'Hierarchy and content',
    hierarchyItems: [
      'Keep top-level entries stable and group them by user task rather than organization structure.',
      'Prefer no more than two levels. If a third level is necessary, reconsider the information architecture or open a dedicated page.',
      'Use short nouns or verb phrases with consistent grammar at each level. Avoid vague labels such as “Other.”',
      'Group labels are not interactive and must not look equal to menu items.',
      'Icons support recognition but never replace text. Use them systematically within a menu or omit them.'
    ],
    behaviorTitle: 'Interaction',
    behaviorItems: [
      'After navigation, update both content and selection. Restore the route-matched item after refresh or back navigation.',
      'Usually select only one item at a level. A parent may use expansion and subtle emphasis to show that its branch contains the current page.',
      'Open submenus away from viewport edges. Close popup menus on outside click, completed selection, or Escape.',
      'When a sidebar collapses, retain recognizable icons and reveal labels on hover, focus, or long press. Never collapse an iconless menu into an empty rail.',
      'Permission or device-state updates must not make items jump. Preserve ordering when entries are hidden.'
    ],
    sizeTitle: 'Component specifications',
    sizeIntro: 'Choose Small or Regular according to interface density, viewing distance, and input method. Keep menu text legible and meet the recommended minimum target.',
    sizeHead: ['Specification', 'Item height', 'Minimum target', 'Horizontal padding', 'Type'],
    sizeRows: [
      ['Small', '48 dp', '48 × 48 dp', '6–12 dp', '24 sp'],
      ['Regular', '60 dp', '60 × 60 dp', '8–16 dp', '24 sp']
    ],
    doTitle: 'Do',
    dontTitle: 'Avoid',
    doItems: [
      'Organize by task and usage frequency',
      'Always make the current location clear',
      'Differentiate expansion, selection, and focus'
    ],
    dontItems: [
      'Create hierarchies deeper than three levels',
      'Mix navigation with state toggles at one level',
      'Communicate meaning only with icons, abbreviations, or color'
    ]
  };

  const bulletList = items => items.map(x => `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="mt-[9px] w-1.5 h-1.5 shrink-0 rounded-full bg-[#EC6443]"></span><span>${x}</span></li>`).join('');
  const numberedList = items => items.map((x, i) => `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="shrink-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#EC6443] text-[11px] font-semibold text-[#EC6443]" style="line-height:1;">${i + 1}</span><span>${x}</span></li>`).join('');
  const checkList = (items, good) => items.map(x => `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="${good ? 'text-emerald-500' : 'text-red-400'} font-bold">${good ? '✓' : '×'}</span><span>${x}</span></li>`).join('');
  const icon = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 6h16M4 12h16M4 18h16"/></svg>`;
  const chevron = `<img src="assets/icons/general/Right.svg" alt="" class="menu-direction-icon w-4 h-4" aria-hidden="true">`;
  const labels = zh ? ['首页', '设备', '场景', '能耗', '设置'] : ['Home', 'Appliances', 'Scenes', 'Energy', 'Settings'];

  return `<style>
  .input-type-table { border-collapse:collapse; width:100%; min-width:680px; font-size:13px; line-height:1.7; }
  .input-type-table th,.input-type-table td { text-align:left; padding:14px 18px; border-bottom:1px solid #E1E7EE; vertical-align:top; }
  .input-type-table th { font-weight:600; color:#596774; background:#FBF6F5; }
  .input-type-table tr:last-child td { border-bottom:0; }
  </style>
  <section class="mb-12">
    <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">${copy.title}</h1>
    <p class="text-lg text-gray-900 leading-relaxed">${copy.intro}</p>
  </section>
  <hr class="border-t border-black/5 mb-8">

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.useTitle}</h2>
    <p class="text-sm text-gray-600 leading-6">${copy.useBody}</p>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-12">
    <h2 class="text-2xl font-bold mb-3 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.anatomyTitle}</h2>
    <p class="text-sm text-gray-500 leading-7 mb-12">${copy.anatomyIntro}</p>
    <div class="space-y-16">
      <article>
        <div class="mb-6">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-[13.75px] font-semibold tracking-wider text-[#EC6443]">01</span>
            <h3 class="text-[17.5px] leading-6 font-semibold">${copy.sideMenu}</h3>
          </div>
          <p class="text-sm text-gray-500">${zh ? '适用于层级清晰、需要持续显示当前位置的侧边导航。' : 'For hierarchical navigation where the current location remains visible.'}</p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="rounded-[40px] border border-gray-200 bg-white/70 p-4">
            <img src="leader-assets/examples/component/menu/horizontal.png" alt="${zh ? '横向菜单浅色模式' : 'Horizontal menu light mode'}" class="mx-auto block h-auto w-full">
          </div>
          <div class="rounded-[40px] border border-gray-200 bg-white/70 p-4">
            <img src="leader-assets/examples/component/menu/horizontal-dark.png" alt="${zh ? '横向菜单深色模式' : 'Horizontal menu dark mode'}" class="mx-auto block h-auto w-full">
          </div>
        </div>
      </article>
      <article class="pt-2">
        <div class="mb-6">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-[13.75px] font-semibold tracking-wider text-[#EC6443]">02</span>
            <h3 class="text-[17.5px] leading-6 font-semibold">${copy.topMenu}</h3>
          </div>
          <p class="text-sm text-gray-500">${zh ? '适用于数量少且稳定的一级入口，使用底部指示线标记当前位置。' : 'For a small, stable set of primary destinations, with a bottom line indicating location.'}</p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="rounded-[40px] border border-gray-200 bg-white/70 p-4">
            <img src="leader-assets/examples/component/menu/vertical.png" alt="${zh ? '竖向菜单浅色模式' : 'Vertical menu light mode'}" class="mx-auto block h-auto w-full">
          </div>
          <div class="rounded-[40px] border border-gray-200 bg-white/70 p-4">
            <img src="leader-assets/examples/component/menu/vertical-dark.png" alt="${zh ? '竖向菜单深色模式' : 'Vertical menu dark mode'}" class="mx-auto block h-auto w-full">
          </div>
        </div>
      </article>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.sizeTitle}</h2>
    <p class="text-sm text-gray-500 leading-6 mb-7">${copy.sizeIntro}</p>
    <div class="overflow-x-auto rounded-[28px] border border-gray-200 bg-white/65">
      <table class="input-type-table">
        <thead><tr>${copy.sizeHead.map(x => `<th scope="col">${x}</th>`).join('')}</tr></thead>
        <tbody>${copy.sizeRows.map(r => `<tr>${r.map(x => `<td>${x}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-12">
    <h2 class="text-2xl font-bold mb-6 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.hierarchyTitle}</h2>
    <ul class="space-y-4 max-w-4xl">${numberedList(copy.hierarchyItems)}</ul>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-12">
    <h2 class="text-2xl font-bold mb-6 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.behaviorTitle}</h2>
    <ul class="space-y-4 max-w-4xl">${numberedList(copy.behaviorItems)}</ul>
  </section>

  <section class="grid md:grid-cols-2 gap-8 mb-8">
    <article class="bg-white/60 p-8 md:p-10 rounded-[28px]" style="border:2px solid #3BD08D;">
      <h2 class="text-xl font-bold text-gray-900 mb-5">${copy.doTitle}</h2>
      <ul class="space-y-3">${checkList(copy.doItems, true)}</ul>
    </article>
    <article class="bg-white/60 p-8 md:p-10 rounded-[28px]" style="border:2px solid #F52828;">
      <h2 class="text-xl font-bold text-gray-900 mb-5">${copy.dontTitle}</h2>
      <ul class="space-y-3">${checkList(copy.dontItems, false)}</ul>
    </article>
  </section>`;
}

/* ---------------------------------------------
   扩展路由：新组件在这里注册
   返回 true 表示已处理，renderComponentPage 不再走 fallback
   --------------------------------------------- */
window.__leaderComponentExtensions = function (file, root, language) {
  if (file === 'component_menu.html') {
    root.innerHTML = renderMenuGuideline(language);
    return true;
  }
  return false;
};