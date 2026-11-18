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

  const numberedList = items => items.map((x, i) => `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="shrink-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#EC6443] text-[11px] font-semibold text-[#EC6443]" style="line-height:1;">${i + 1}</span><span>${x}</span></li>`).join('');
  const checkList = (items, good) => items.map(x => `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="${good ? 'text-emerald-500' : 'text-red-400'} font-bold">${good ? '✓' : '×'}</span><span>${x}</span></li>`).join('');

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

/* =========================================================
   导航（Navigation）—— Leader 样式
   ========================================================= */
function renderNavigationGuideline(language) {
  const zh = language === 'zh';
  const copy = zh ? {
    title: '导航栏',
    intro: '导航栏承载产品的核心信息架构，帮助用户在主要功能与内容区域之间稳定切换。',
    useTitle: '何时使用',
    useBody: '用于 App、家电触控屏及嵌入式界面的全局导航，承载 1–3 个稳定的一级入口，1-4 个二、三级导航入口。超过规定个数时，应重组信息架构或将低频内容移至独立页面。单屏最多同时展示 3 层导航入口，局部同级内容使用标签页，上下文动作使用菜单，单次操作使用按钮。',
    anatomyTitle: '一级导航组件构成',
    anatomyIntro: '一个导航项由交互热区、可选图标、文字标签和选中指示组成。整组导航还包括承载容器与项目间分隔关系。',
    icon: '图标', indicator: '选中指示', container: '导航容器',
    stylesTitle: '组件样式',
    directionTitle: '组件布局',
    positionRule: '位置可根据屏幕比例、内容布局、操作距离决定；同一产品家族中保持顺序与语义一致。',
    contentTitle: '内容与排序',
    contentRules: [
      '使用简短、具体且可预测的名词或动宾短语；同一组保持一致句式。',
      '按用户任务、价值与使用频率排序，最重要或最常用的入口优先。',
      '入口名称、图标和顺序在不同页面与明暗模式间保持稳定。',
      '不要把按钮、开关、提醒数量或临时状态当作新的导航目的地。',
      '仅在确有高价值快捷入口时增加项目；任何被折叠或隐藏的入口都应在主界面提供可发现的替代路径。'
    ],
    layoutTitle: '组件规格',
    layoutIntro: '根据界面密度、观看距离和输入方式选择小号、常规或大号规格。导航项应等宽或按统一规则分配空间，交互热区不得小于建议最小值。',
    tableHead: ['规格', '项目高度', '最小交互热区', '选中指示高度', '图标尺寸', '适用场景'],
    rows: [
      ['小号', '64 dp', '64 × 64 dp', '96 dp', '32–36 dp', '近距、小尺寸或高密度界面'],
      ['常规', '80 dp', '80 × 80 dp', '120 dp', '32–36 dp', 'App 与常规家电触控屏'],
      ['大号', '80 dp', '80 × 80 dp', '128 dp', '32–36 dp', '远距观看、根据设计网格与常规组件择优使用']
    ],
    layoutIntroSecondary: '根据界面密度、观看距离和输入方式选择小号、常规规格。导航项应等宽或按统一规则分配空间，交互热区不得小于建议最小值。',
    tableHeadSecondary: ['规格', '项目高度', '最小交互热区', '选中指示高度', '文字大小', '适用场景'],
    rowsSecondary: [
      ['小号', '64 dp', '64 × 64 dp', '64 dp', '28 sp', '近距、小尺寸或高密度界面'],
      ['常规', '80 dp', '80 × 80 dp', '80 dp', '28 sp', 'App 与常规家电触控屏']
    ],
    layoutIntroTertiary: '根据界面密度、观看距离和输入方式选择小号、常规规格。导航项应等宽或按统一规则分配空间，交互热区不得小于建议最小值。',
    tableHeadTertiary: ['规格', '项目高度', '最小交互热区', '选中指示高度', '文字大小', '适用场景'],
    rowsTertiary: [
      ['小号', '64 dp', '64 × 64 dp', '48 dp', '28 sp', '近距、小尺寸或高密度界面'],
      ['常规', '80 dp', '80 × 80 dp', '72 dp', '28 sp', 'App 与常规家电触控屏']
    ],
    accessibilityTitle: '可访问性',
    accessibilityRules: [
      '文字和图标对背景保持足够对比度；深色与浅色模式分别校验。',
      '图标不能作为唯一语义载体；纯图标收起态提供可朗读名称和可见提示。',
      '支持键盘、旋钮或方向键按视觉顺序移动，并能清楚辨认焦点。',
      '系统放大字体时优先保留完整标签；空间不足应切换布局，不截断核心语义。'
    ],
    doTitle: '推荐', dontTitle: '避免',
    doItems: [
      '单组保持规定个数高价值入口',
      '让当前位置在任何状态下都清晰可见',
      '在横向与纵向之间按屏幕条件切换'
    ],
    dontItems: [
      '用纯图标作为默认展开样式',
      '塞入超过规定个数的导航入口或缩小热区',
      '只靠颜色表示选中与焦点'
    ]
  } : {
    title: 'Navigation bar',
    intro: 'A navigation bar expresses the product’s core information architecture and lets people move consistently between primary destinations.',
    useTitle: 'When to use',
    useBody: 'Global navigation for apps, appliance touchscreens, and embedded interfaces. It carries 1–3 stable first-level entries and 1–4 second- and third-level navigation entries. When the specified number is exceeded, the information architecture should be reorganized or low-frequency content moved to a separate page. A single screen displays at most 3 levels of navigation entries at the same time. Use tabs for local peer content, menus for contextual actions, and buttons for single actions.',
    anatomyTitle: 'Primary navigation anatomy',
    anatomyIntro: 'A navigation item contains an interaction target, optional icon, text label, and selected indicator. The group also includes a navigation container and consistent relationships between items.',
    icon: 'Icon', indicator: 'Selection indicator', container: 'Container',
    stylesTitle: 'Component styles',
    directionTitle: 'Component layout',
    positionRule: 'Choose placement from screen ratio, content layout, and viewing distance. Preserve order and meaning across a product family.',
    contentTitle: 'Content and order',
    contentRules: [
      'Use short, concrete, predictable nouns or verb phrases with consistent grammar.',
      'Order by user task, value, and frequency, placing the most important or common destinations first.',
      'Keep labels, icons, and order stable across pages and appearance modes.',
      'Do not turn buttons, toggles, notification counts, or temporary status into destinations.',
      'Add only high-value shortcuts. Any collapsed or hidden destination needs a discoverable path in the main interface.'
    ],
    layoutTitle: 'Component specifications',
    layoutIntro: 'Choose Small, Regular, or Large according to interface density, viewing distance, and input method. Distribute navigation items equally or by one consistent rule and preserve the recommended minimum targets.',
    tableHead: ['Specification', 'Item height', 'Minimum target', 'Indicator height', 'Icon size', 'Use case'],
    rows: [
      ['Small', '64 dp', '64 × 64 dp', '96 dp', '32–36 dp', 'Near-view, small, or dense interfaces'],
      ['Regular', '80 dp', '80 × 80 dp', '120 dp', '32–36 dp', 'Apps and regular appliance touchscreens'],
      ['Large', '80 dp', '80 × 80 dp', '128 dp', '32–36 dp', 'Distance viewing, choose based on the design grid and standard components']
    ],
    layoutIntroSecondary: 'Choose Small or Regular according to interface density, viewing distance, and input method. Distribute navigation items equally or by one consistent rule and preserve the recommended minimum targets.',
    tableHeadSecondary: ['Specification', 'Item height', 'Minimum target', 'Indicator height', 'Text size', 'Use case'],
    rowsSecondary: [
      ['Small', '64 dp', '64 × 64 dp', '64 dp', '28 sp', 'Near-view, small, or dense interfaces'],
      ['Regular', '80 dp', '80 × 80 dp', '80 dp', '28 sp', 'Apps and regular appliance touchscreens']
    ],
    layoutIntroTertiary: 'Choose Small or Regular according to interface density, viewing distance, and input method. Distribute navigation items equally or by one consistent rule and preserve the recommended minimum targets.',
    tableHeadTertiary: ['Specification', 'Item height', 'Minimum target', 'Indicator height', 'Text size', 'Use case'],
    rowsTertiary: [
      ['Small', '64 dp', '64 × 64 dp', '48 dp', '28 sp', 'Near-view, small, or dense interfaces'],
      ['Regular', '80 dp', '80 × 80 dp', '72 dp', '28 sp', 'Apps and regular appliance touchscreens']
    ],
    accessibilityTitle: 'Accessibility',
    accessibilityRules: [
      'Maintain sufficient text and icon contrast in both light and dark appearances.',
      'Never make an icon the only carrier of meaning. Give collapsed icon-only items readable names and visible hints.',
      'Support keyboard, rotary, or directional navigation in visual order and make focus unmistakable.',
      'With larger text, preserve full labels first. Change the layout instead of truncating essential meaning.'
    ],
    doTitle: 'Do', dontTitle: 'Avoid',
    doItems: [
      'Keep each group to the specified number of high-value destinations',
      'Make the current location clear in every state',
      'Switch direction to fit the screen and task'
    ],
    dontItems: [
      'Use icon-only as the default expanded style',
      'Crowd in more than the specified number of navigation items or shrink targets',
      'Use color alone for selection or focus'
    ]
  };

  const bulletList = items => items.map(x => `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="mt-[9px] w-1.5 h-1.5 shrink-0 rounded-full bg-[#EC6443]"></span><span>${x}</span></li>`).join('');
  const numberedList = items => items.map((x, i) => `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="shrink-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#EC6443] text-[11px] font-semibold text-[#EC6443]" style="line-height:1;">${i + 1}</span><span>${x}</span></li>`).join('');
  const checkList = (items, good) => items.map(x => `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="${good ? 'text-emerald-500' : 'text-red-400'} font-bold">${good ? '✓' : '×'}</span><span>${x}</span></li>`).join('');

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
    <h2 class="text-2xl font-bold mb-3 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.useTitle}</h2>
    <p class="text-sm text-gray-600 leading-7">${copy.useBody}</p>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.anatomyTitle}</h2>
    <p class="text-sm text-gray-500 leading-7 mb-8">${copy.anatomyIntro}</p>
    <div class="rounded-[40px] border border-[#FFE5E0] bg-white/70 p-5">
      <img src="leader-assets/examples/component/navigation/primary navigation-ai.png" alt="${zh ? '一级导航组件构成示例' : 'Primary navigation anatomy example'}" class="mx-auto block h-auto w-full max-w-[900px]">
    </div>
    <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
      ${[[copy.container, '01'], [copy.icon, '02'], [copy.indicator, '03']].map(([label, n]) => `<div class="rounded-[28px] bg-white/60 px-4 py-3"><span class="text-[10px] font-bold text-[#EC6443]">${n}</span><p class="mt-1 text-xs text-gray-600">${label}</p></div>`).join('')}
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.stylesTitle}</h2>
    <div class="grid md:grid-cols-2 gap-5">
      <article>
        <h3 class="text-xs font-normal text-gray-500 mb-3">${zh ? 'AI状态主导航' : 'AI-state primary navigation'}</h3>
        <div class="rounded-[40px] border border-gray-200 bg-white/70 p-4">
          <img src="leader-assets/examples/component/navigation/primary navigation-ai.png" alt="${zh ? 'AI状态主导航' : 'AI-state primary navigation'}" class="mx-auto block h-auto w-full max-w-[411.6px]">
        </div>
      </article>
      <article>
        <h3 class="text-xs font-normal text-gray-500 mb-3">${zh ? '常规状态主导航' : 'Normal-state primary navigation'}</h3>
        <div class="rounded-[40px] border border-gray-200 bg-white/70 p-4">
          <img src="leader-assets/examples/component/navigation/primary navigation-normal.png" alt="${zh ? '常规状态主导航' : 'Normal-state primary navigation'}" class="mx-auto block h-auto w-full max-w-[411.6px]">
        </div>
      </article>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.layoutTitle}</h2>
    <p class="text-sm text-gray-500 leading-6 mb-7">${copy.layoutIntro}</p>
    <div class="overflow-x-auto rounded-[28px] border border-gray-200 bg-white/65">
      <table class="input-type-table">
        <thead><tr>${copy.tableHead.map(x => `<th scope="col">${x}</th>`).join('')}</tr></thead>
        <tbody>${copy.rows.map(r => `<tr>${r.map(x => `<td>${x}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-3 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.directionTitle}</h2>
    <p class="text-sm text-gray-500 leading-7 mb-10">${copy.positionRule}</p>
    <div class="space-y-6">
      <article class="flex flex-col gap-6 rounded-[28px] bg-white/50 p-5 md:p-6">
        <div class="min-w-0">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-xs font-bold text-[#EC6443]">01</span>
            <h3 class="text-xl font-bold">${zh ? '纵向排布' : 'Vertical layout'}</h3>
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="rounded-full border border-gray-200 bg-white/70 p-4">
            <img src="leader-assets/examples/component/navigation/primary navigation-ai.png" alt="${zh ? 'AI状态主导航' : 'AI-state primary navigation'}" class="mx-auto block h-auto w-full">
          </div>
          <div class="rounded-full border border-gray-200 bg-white/70 p-4">
            <img src="leader-assets/examples/component/navigation/primary navigation-normal.png" alt="${zh ? '常规状态主导航' : 'Normal-state primary navigation'}" class="mx-auto block h-auto w-full">
          </div>
        </div>
      </article>
      <article class="flex flex-col gap-6 rounded-[28px] bg-white/50 p-5 md:p-6">
        <div class="min-w-0">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-xs font-bold text-[#EC6443]">02</span>
            <h3 class="text-xl font-bold">${zh ? '横向排布' : 'Horizontal layout'}</h3>
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="rounded-full border border-gray-200 bg-white/70 p-4">
            <img src="leader-assets/examples/component/navigation/primary navigation-ai-portrait.png" alt="${zh ? 'AI状态竖屏导航' : 'AI-state portrait navigation'}" class="mx-auto block h-auto w-full">
          </div>
          <div class="rounded-full border border-gray-200 bg-white/70 p-4">
            <img src="leader-assets/examples/component/navigation/primary navigation-normal-portrait.png" alt="${zh ? '常规状态竖屏导航' : 'Normal-state portrait navigation'}" class="mx-auto block h-auto w-full">
          </div>
        </div>
      </article>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${zh ? '二级导航组件构成' : 'Secondary navigation anatomy'}</h2>
    <p class="text-sm text-gray-500 leading-7 mb-8">${copy.anatomyIntro}</p>
    <div class="rounded-[28px] border border-[#FFE5E0] bg-white/70 p-5">
      <img src="leader-assets/examples/component/navigation/secondary navigation-ai.png" alt="${zh ? '二级导航组件构成示例' : 'Secondary navigation anatomy example'}" class="mx-auto block h-auto w-full max-w-[900px]">
    </div>
    <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
      ${[[copy.container, '01'], [zh ? '文字' : 'Text', '02'], [copy.indicator, '03']].map(([label, n]) => `<div class="rounded-[28px] bg-white/60 px-4 py-3"><span class="text-[10px] font-bold text-[#EC6443]">${n}</span><p class="mt-1 text-xs text-gray-600">${label}</p></div>`).join('')}
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.stylesTitle}</h2>
    <div class="grid md:grid-cols-2 gap-5">
      <article>
        <h3 class="text-xs font-normal text-gray-500 mb-3">${zh ? 'AI状态主导航' : 'AI-state primary navigation'}</h3>
        <div class="rounded-[40px] border border-gray-200 bg-white/70 p-4">
          <img src="leader-assets/examples/component/navigation/secondary navigation-ai.png" alt="${zh ? 'AI状态主导航' : 'AI-state primary navigation'}" class="mx-auto block h-auto w-full max-w-[411.6px]">
        </div>
      </article>
      <article>
        <h3 class="text-xs font-normal text-gray-500 mb-3">${zh ? '常规状态主导航' : 'Normal-state primary navigation'}</h3>
        <div class="rounded-[40px] border border-gray-200 bg-white/70 p-4">
          <img src="leader-assets/examples/component/navigation/secondary navigation-normal.png" alt="${zh ? '常规状态主导航' : 'Normal-state primary navigation'}" class="mx-auto block h-auto w-full max-w-[411.6px]">
        </div>
      </article>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.layoutTitle}</h2>
    <p class="text-sm text-gray-500 leading-6 mb-7">${copy.layoutIntroSecondary}</p>
    <div class="overflow-x-auto rounded-[28px] border border-gray-200 bg-white/65">
      <table class="input-type-table">
        <thead><tr>${copy.tableHeadSecondary.map(x => `<th scope="col">${x}</th>`).join('')}</tr></thead>
        <tbody>${copy.rowsSecondary.map(r => `<tr>${r.map(x => `<td>${x}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-3 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.directionTitle}</h2>
    <p class="text-sm text-gray-500 leading-7 mb-10">${copy.positionRule}</p>
    <div class="space-y-6">
      <article class="flex flex-col gap-6 rounded-[28px] bg-white/50 p-5 md:p-6">
        <div class="min-w-0">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-xs font-bold text-[#EC6443]">01</span>
            <h3 class="text-xl font-bold">${zh ? '纵向排布' : 'Vertical layout'}</h3>
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="rounded-full border border-gray-200 bg-white/70 p-4">
            <img src="leader-assets/examples/component/navigation/secondary navigation-ai.png" alt="${zh ? 'AI状态主导航' : 'AI-state primary navigation'}" class="mx-auto block h-auto w-full">
          </div>
          <div class="rounded-full border border-gray-200 bg-white/70 p-4">
            <img src="leader-assets/examples/component/navigation/secondary navigation-normal.png" alt="${zh ? '常规状态主导航' : 'Normal-state primary navigation'}" class="mx-auto block h-auto w-full">
          </div>
        </div>
      </article>
      <article class="flex flex-col gap-6 rounded-[28px] bg-white/50 p-5 md:p-6">
        <div class="min-w-0">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-xs font-bold text-[#EC6443]">02</span>
            <h3 class="text-xl font-bold">${zh ? '横向排布' : 'Horizontal layout'}</h3>
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="rounded-full border border-gray-200 bg-white/70 p-4">
            <img src="leader-assets/examples/component/navigation/secondary navigation-ai-portrait.png" alt="${zh ? 'AI状态竖屏导航' : 'AI-state portrait navigation'}" class="mx-auto block h-auto w-full">
          </div>
          <div class="rounded-full border border-gray-200 bg-white/70 p-4">
            <img src="leader-assets/examples/component/navigation/secondary navigation-normal-portrait.png" alt="${zh ? '常规状态竖屏导航' : 'Normal-state portrait navigation'}" class="mx-auto block h-auto w-full">
          </div>
        </div>
      </article>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${zh ? '三级导航组件构成' : 'Tertiary navigation anatomy'}</h2>
    <p class="text-sm text-gray-500 leading-7 mb-8">${copy.anatomyIntro}</p>
    <div class="rounded-[28px] border border-[#FFE5E0] bg-white/70 p-5">
      <img src="leader-assets/examples/component/navigation/tertiary navigation-ai.png" alt="${zh ? '三级导航组件构成示例' : 'Tertiary navigation anatomy example'}" class="mx-auto block h-auto w-full max-w-[900px]">
    </div>
    <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
      ${[[copy.container, '01'], [zh ? '文字' : 'Text', '02'], [copy.indicator, '03']].map(([label, n]) => `<div class="rounded-[28px] bg-white/60 px-4 py-3"><span class="text-[10px] font-bold text-[#EC6443]">${n}</span><p class="mt-1 text-xs text-gray-600">${label}</p></div>`).join('')}
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.stylesTitle}</h2>
    <div class="grid md:grid-cols-2 gap-5">
      <article>
        <h3 class="text-xs font-normal text-gray-500 mb-3">${zh ? 'AI状态主导航' : 'AI-state primary navigation'}</h3>
        <div class="rounded-[40px] border border-gray-200 bg-white/70 p-4">
          <img src="leader-assets/examples/component/navigation/tertiary navigation-ai.png" alt="${zh ? 'AI状态主导航' : 'AI-state primary navigation'}" class="mx-auto block h-auto w-full max-w-[411.6px]">
        </div>
      </article>
      <article>
        <h3 class="text-xs font-normal text-gray-500 mb-3">${zh ? '常规状态主导航' : 'Normal-state primary navigation'}</h3>
        <div class="rounded-[40px] border border-gray-200 bg-white/70 p-4">
          <img src="leader-assets/examples/component/navigation/tertiary navigation-normal.png" alt="${zh ? '常规状态主导航' : 'Normal-state primary navigation'}" class="mx-auto block h-auto w-full max-w-[411.6px]">
        </div>
      </article>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.layoutTitle}</h2>
    <p class="text-sm text-gray-500 leading-6 mb-7">${copy.layoutIntroTertiary}</p>
    <div class="overflow-x-auto rounded-[28px] border border-gray-200 bg-white/65">
      <table class="input-type-table">
        <thead><tr>${copy.tableHeadTertiary.map(x => `<th scope="col">${x}</th>`).join('')}</tr></thead>
        <tbody>${copy.rowsTertiary.map(r => `<tr>${r.map(x => `<td>${x}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-3 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.directionTitle}</h2>
    <p class="text-sm text-gray-500 leading-7 mb-10">${copy.positionRule}</p>
    <div class="space-y-6">
      <article class="flex flex-col gap-6 rounded-[28px] bg-white/50 p-5 md:p-6">
        <div class="min-w-0">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-xs font-bold text-[#EC6443]">01</span>
            <h3 class="text-xl font-bold">${zh ? '纵向排布' : 'Vertical layout'}</h3>
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="rounded-full border border-gray-200 bg-white/70 p-4">
            <img src="leader-assets/examples/component/navigation/tertiary navigation-ai.png" alt="${zh ? 'AI状态主导航' : 'AI-state primary navigation'}" class="mx-auto block h-auto w-full">
          </div>
          <div class="rounded-full border border-gray-200 bg-white/70 p-4">
            <img src="leader-assets/examples/component/navigation/tertiary navigation-normal.png" alt="${zh ? '常规状态主导航' : 'Normal-state primary navigation'}" class="mx-auto block h-auto w-full">
          </div>
        </div>
      </article>
      <article class="flex flex-col gap-6 rounded-[28px] bg-white/50 p-5 md:p-6">
        <div class="min-w-0">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-xs font-bold text-[#EC6443]">02</span>
            <h3 class="text-xl font-bold">${zh ? '横向排布' : 'Horizontal layout'}</h3>
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="rounded-full border border-gray-200 bg-white/70 p-4">
            <img src="leader-assets/examples/component/navigation/tertiary navigation-ai-portrait.png" alt="${zh ? 'AI状态竖屏导航' : 'AI-state portrait navigation'}" class="mx-auto block h-auto w-full">
          </div>
          <div class="rounded-full border border-gray-200 bg-white/70 p-4">
            <img src="leader-assets/examples/component/navigation/tertiary navigation-normal-portrait.png" alt="${zh ? '常规状态竖屏导航' : 'Normal-state portrait navigation'}" class="mx-auto block h-auto w-full">
          </div>
        </div>
      </article>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-6 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.contentTitle}</h2>
    <ul class="space-y-4">${numberedList(copy.contentRules)}</ul>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.accessibilityTitle}</h2>
    <ul class="space-y-4">${numberedList(copy.accessibilityRules)}</ul>
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

/* =========================================================
   标签页（Tabs）—— Leader 样式
   ========================================================= */
function renderTabsGuideline(language) {
  const zh = language === 'zh';
  const copy = zh ? {
    title: '标签页',
    intro: '标签页用于在同一页面内切换同层级、相互独立的内容视图。切换不改变用户所处的任务层级，并应立即更新内容，不需要额外确认。',
    useTitle: '何时使用',
    useBody: '适用于 2–5 个稳定、同层级且彼此互斥的内容分类。页面跳转使用导航；流程推进使用步骤条。',
    anatomyTitle: '组成结构',
    anatomyIntro: '标签页由标签栏、标签项、文本标签、选中指示器和内容面板组成。图标、徽标与关闭按钮均为可选元素，只在确有信息价值时使用。',
    typesTitle: '组件类型',
    line: '线型标签页', lineDesc: '默认类型。用于页面或大内容区的一级内容切换，以底部指示线表达当前项。',
    capsule: '胶囊标签页', capsuleDesc: '用于局部视图或紧凑控制区。仅承载轻量内容切换，不替代按钮组或单选项。',
    defaultType: '默认', compactType: '局部',
    sizeTitle: '组件规格',
    sizeIntro: '尺寸随观看距离与输入方式调整。文字保持单行，标签项热区不得小于建议最小值。',
    tableHead: ['规格', '标签栏高度', '最小热区', '标签间距', '文字'],
    rows: [
      ['小号', '48 dp', '48 × 104 dp', '4 dp', '24 sp'],
      ['常规', '60 dp', '60 × 120 dp', '8 dp', '24 sp']
    ],
    overflowTitle: '数量与溢出',
    overflowIntro: '优先减少标签数量并缩短文案，不通过压缩字号或触控热区容纳更多标签。',
    overflowRules: [
      '推荐 2–5 项；超过 5 项时重新分组，或改用菜单、列表导航。',
      '固定宽度屏幕内无法完整显示时，标签栏允许水平滚动，并露出下一项的一部分作为可滚动提示。',
      '当前项始终保持可见；切换后自动滚入视区，但不突然改变标签顺序。',
      '不使用多行换行标签栏。不得把常用项隐藏在“更多”中，同时将低频项留在外部。'
    ],
    contentTitle: '内容与文案',
    contentRules: [
      '使用简短名词或名词短语，同组标签采用一致句式。',
      '优先控制在 2–6 个汉字或 1–2 个英文单词；不要使用句号。',
      '顺序应稳定且可预测：按任务流程、使用频率或时间顺序排列。',
      '图标不能替代文本；只有整组标签都能从图标中获益时才统一添加。',
      '计数徽标仅显示辅助信息，不用于表达安全告警或设备故障。'
    ],
    doTitle: '推荐', dontTitle: '避免',
    doItems: [
      '只放同层级、互斥的内容视图',
      '默认使用胶囊并清晰显示当前项',
      '在溢出时保留完整热区与可滚动提示'
    ],
    dontItems: [
      '用标签页承载顺序流程或即时动作',
      '标签换行成两行或频繁改变顺序',
      '仅靠颜色区分选中、聚焦与禁用'
    ]
  } : {
    title: 'Tabs',
    intro: 'Tabs switch between peer, independent content views on the same page. Switching keeps people at the same task level and updates content immediately without a separate confirmation.',
    useTitle: 'When to use',
    useBody: 'Use for 2–5 stable, mutually exclusive peer categories. Use Navigation for destinations and Steps for a sequence.',
    anatomyTitle: 'Anatomy',
    anatomyIntro: 'Tabs contain a tab list, tab items, text labels, a selection indicator, and a content panel. Icons, badges, and close controls are optional and should appear only when they add real value.',
    typesTitle: 'Component types',
    line: 'Line tabs', lineDesc: 'Default. Use for primary switching across a page or large content area; a bottom indicator marks the active view.',
    capsule: 'Capsule tabs', capsuleDesc: 'Use for local views or compact control regions. They switch lightweight content and do not replace buttons or radio controls.',
    defaultType: 'Default', compactType: 'Local',
    sizeTitle: 'Component specifications',
    sizeIntro: 'Adjust sizing for viewing distance and input method. Keep labels on one line and meet the recommended minimum target.',
    tableHead: ['Size', 'Bar height', 'Minimum target', 'Item gap', 'Type'],
    rows: [
      ['Small', '48 dp', '48 × 104 dp', '4 dp', '24 sp'],
      ['Regular', '60 dp', '60 × 120 dp', '8 dp', '24 sp']
    ],
    overflowTitle: 'Count and overflow',
    overflowIntro: 'Reduce the number of tabs and shorten labels before shrinking type or touch targets.',
    overflowRules: [
      'Prefer 2–5 items. Above five, regroup the content or use menu or list navigation.',
      'When a fixed-width display cannot fit every item, allow horizontal scrolling and reveal part of the next tab as a cue.',
      'Keep the selected item visible and scroll it into view after switching without changing tab order.',
      'Never wrap a tab list onto multiple lines. Do not hide frequent items in More while leaving infrequent ones visible.'
    ],
    contentTitle: 'Content and labels',
    contentRules: [
      'Use short nouns or noun phrases with consistent grammar across the group.',
      'Prefer 1–2 English words or 2–6 Chinese characters; do not add periods.',
      'Keep order stable and predictable by workflow, frequency, or time.',
      'Icons never replace text. Add them consistently only when every tab benefits.',
      'Count badges are supporting information, never the sole signal for safety alerts or faults.'
    ],
    doTitle: 'Do', dontTitle: 'Avoid',
    doItems: [
      'Use only peer, mutually exclusive content views',
      'Use a capsule by default and clearly show the current item',
      'Preserve targets and scrolling cues during overflow'
    ],
    dontItems: [
      'Use tabs for sequential flows or immediate actions',
      'Wrap labels to two lines or reorder them frequently',
      'Use color alone for selected, focus, or disabled states'
    ]
  };

  const numberedList = items => items.map((x, i) => `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="shrink-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#EC6443] text-[11px] font-semibold text-[#EC6443]" style="line-height:1;">${i + 1}</span><span>${x}</span></li>`).join('');
  const checkList = (items, good) => items.map(x => `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="${good ? 'text-emerald-500' : 'text-red-400'} font-bold">${good ? '✓' : '×'}</span><span>${x}</span></li>`).join('');

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
    <h2 class="text-2xl font-bold mb-3 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.useTitle}</h2>
    <p class="text-sm text-gray-600 leading-7">${copy.useBody}</p>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.anatomyTitle}</h2>
    <p class="text-sm text-gray-500 leading-7 mb-8">${copy.anatomyIntro}</p>
    <div class="rounded-[28px] border border-[#FFE5E0] bg-white/70 p-5">
      <img src="leader-assets/examples/component/tabs/tabs-example.png" alt="${zh ? '标签页组成结构示例' : 'Tabs anatomy example'}" class="mx-auto block h-auto w-full max-w-[900px]">
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.sizeTitle}</h2>
    <p class="text-sm text-gray-500 leading-6 mb-7">${copy.sizeIntro}</p>
    <div class="overflow-x-auto rounded-[28px] border border-gray-200 bg-white/65">
      <table class="input-type-table">
        <thead><tr>${copy.tableHead.map(x => `<th scope="col">${x}</th>`).join('')}</tr></thead>
        <tbody>${copy.rows.map(r => `<tr>${r.map(x => `<td>${x}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-7 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.typesTitle}</h2>
    <div class="grid md:grid-cols-2 gap-5">
      <article class="rounded-[28px] border border-gray-200 bg-white/60 p-5">
        <div class="relative mb-4">
          <span class="absolute right-0 top-0 rounded-full bg-[#FFE5E0] px-2 py-1 text-[10px] text-[#EC6443]">${copy.defaultType}</span>
          <h3 class="font-semibold">${copy.capsule}</h3>
        </div>
        <div class="rounded-[28px] border border-gray-200 bg-white/70 p-4">
          <img src="leader-assets/examples/component/tabs/tabs-style-pill.png" alt="${zh ? '胶囊标签页示例' : 'Capsule tabs example'}" class="mx-auto block h-auto w-full max-w-[411.6px]">
        </div>
        <p class="px-1 py-4 text-sm text-gray-500 leading-6">${copy.capsuleDesc}</p>
      </article>
      <article class="rounded-[28px] border border-gray-200 bg-white/60 p-5">
        <div class="relative mb-4">
          <span class="absolute right-0 top-0 rounded-full bg-[#FFE5E0] px-2 py-1 text-[10px] text-[#EC6443]">${copy.compactType}</span>
          <h3 class="font-semibold">${copy.line}</h3>
        </div>
        <div class="rounded-[28px] border border-gray-200 bg-white/70 p-4">
          <img src="leader-assets/examples/component/tabs/tabs-style-line.png" alt="${zh ? '线型标签页示例' : 'Line tabs example'}" class="mx-auto block h-auto w-full max-w-[411.6px]">
        </div>
        <p class="px-1 py-4 text-sm text-gray-500 leading-6">${copy.lineDesc}</p>
      </article>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-8 mb-8">
    <h2 class="text-xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.overflowTitle}</h2>
    <p class="text-sm text-gray-500 leading-6 mb-5">${copy.overflowIntro}</p>
    <ul class="space-y-4">${numberedList(copy.overflowRules)}</ul>
  </section>

  <section class="glass-panel p-6 md:p-8 mb-8">
    <h2 class="text-xl font-bold mb-6 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.contentTitle}</h2>
    <ul class="space-y-4">${numberedList(copy.contentRules)}</ul>
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

/* =========================================================
   面包屑（Breadcrumbs）—— Leader 样式
   ========================================================= */
function renderBreadcrumbGuideline(language) {
  const zh = language === 'zh';
  const copy = zh ? {
    title: '面包屑',
    intro: '面包屑显示用户在信息层级中的当前位置与返回路径，帮助用户理解“我在哪里”以及如何回到上级。它是辅助导航，不替代主导航、返回按钮或页面标题。',
    useTitle: '何时使用',
    useBody: '用于三层及以上、层级关系稳定的页面结构，例如设备管理、服务知识库和多级设置。两层以内、线性任务流程或底层级频繁变化时不使用；多步骤任务应使用步骤条。',
    anatomyTitle: '组件构成',
    anatomyIntro: '由起始项、中间层级、分隔符和当前页组成。除当前页外，各层级均可返回对应页面；当前页只表达位置，不可点击。',
    home: '首页', appliance: '设备', kitchen: '厨房电器', detail: '当前位置',
    typesTitle: '样式与变体',
    typesIntro: '需要强化起点识别时，可在首页层级加入图标。分隔符可随产品视觉语言调整，但同一产品内应保持统一。',
    basic: '基础面包屑', icon: '带图标', custom: '自定义分隔符', overflowTitle: '层级过长与溢出',
    contentTitle: '内容与层级',
    contentItems: [
      '使用简短、明确、与页面标题一致的名词，避免“页面”“详情”等无信息量词语单独出现。',
      '推荐 3–5 项，最多展示 5 项；不要把筛选条件、标签页、弹窗或临时状态写入路径。',
      '层级顺序始终从范围最大到当前位置，不跳级，不重复显示相同名称。',
      '当前页名称较长时优先为其保留空间；必要时单行省略，并通过页面标题展示全称。',
      '同一产品统一决定是否显示“首页”，不可在相邻页面随意增减。'
    ],
    sizeTitle: '组件规格',
    sizeIntro: '面包屑保持辅助导航的视觉权重。根据界面密度、观看距离与输入方式选择规格，同一页面内保持一致。',
    tableHead: ['规格', '文字', '项高度', '项间距', '分隔符高度'],
    rows: [
      ['小号', '16 sp', '32 dp', '16 dp', '8 dp'],
      ['常规', '24 sp', '40 dp', '24 dp', '10 dp']
    ],
    doTitle: '推荐', dontTitle: '避免',
    doItems: [
      '保持路径与信息架构一致',
      '让当前页不可点击',
      '长路径折叠中间层级'
    ],
    dontItems: [
      '用面包屑表示步骤进度',
      '把当前页也做成链接',
      '让路径换成多行或任意截断'
    ]
  } : {
    title: 'Breadcrumbs',
    intro: 'Breadcrumbs show the current location and the path back through a hierarchy. They help people understand where they are and how to return to a parent level. They support — but never replace — primary navigation, a back action, or the page title.',
    useTitle: 'When to use',
    useBody: 'Use for stable structures three or more levels deep, such as appliance management, service knowledge bases, and nested settings. Do not use for shallow structures, linear tasks, or rapidly changing hierarchies; use Steps for multi-step tasks.',
    anatomyTitle: 'Component anatomy',
    anatomyIntro: 'The component contains a starting item, parent levels, separators, and the current page. Every level except the current page links to its destination. The current page communicates location and is not interactive.',
    home: 'Home', appliance: 'Appliances', kitchen: 'Kitchen', detail: 'Current Location',
    typesTitle: 'Styles and variants',
    typesIntro: 'Add a Home icon when the starting point needs stronger recognition. Separators may follow the product’s visual language but should remain consistent throughout the product.',
    basic: 'Basic breadcrumb', icon: 'With home icon', custom: 'Custom separator', overflowTitle: 'Long paths and overflow',
    contentTitle: 'Content and hierarchy',
    contentItems: [
      'Use short, specific nouns that match page titles. Avoid empty labels such as “Page” or “Details” on their own.',
      'Recommend 3–5 items and show no more than five. Do not include filters, tabs, dialogs, or temporary status.',
      'Order levels from broadest scope to current location without skipping or repeating levels.',
      'Reserve space for the current page. If needed, ellipsize it on one line and show the full name in the page title.',
      'Choose one product-wide rule for showing Home; do not add or remove it inconsistently between nearby pages.'
    ],
    sizeTitle: 'Component specifications',
    sizeIntro: 'Breadcrumbs remain visually secondary. Choose a size for interface density, viewing distance, and input method, and keep it consistent within a page.',
    tableHead: ['Size', 'Text', 'Item height', 'Item gap', 'Separator height'],
    rows: [
      ['Small', '16 sp', '32 dp', '16 dp', '8 dp'],
      ['Regular', '24 sp', '40 dp', '24 dp', '10 dp']
    ],
    doTitle: 'Do', dontTitle: 'Avoid',
    doItems: [
      'Match the information architecture',
      'Keep the current page non-interactive',
      'Collapse middle levels in long paths'
    ],
    dontItems: [
      'Use breadcrumbs as progress steps',
      'Link the current page to itself',
      'Wrap or truncate arbitrary levels'
    ]
  };

  const chevron = '<span class="mx-2 text-white/80" aria-hidden="true">&gt;</span>';
  const homeIcon = '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3.5 10.5 12 3l8.5 7.5M5.5 9v11h13V9M9.5 20v-6h5v6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const crumb = (labels, separator = chevron) => `<nav aria-label="${copy.title}" class="overflow-x-auto"><ol class="flex min-w-max items-center text-sm">${labels.map((x, i) => `<li class="flex items-center">${i < labels.length - 1 ? `<a href="#" class="rounded-md text-gray-500 hover:text-[#EC6443] no-underline hover:no-underline focus:outline-none">${x}</a>${separator}` : `<span class="font-medium text-black" aria-current="page">${x}</span>`}</li>`).join('')}</ol></nav>`;
  const numberedList = items => items.map((x, i) => `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="shrink-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#EC6443] text-[11px] font-semibold text-[#EC6443]" style="line-height:1;">${i + 1}</span><span>${x}</span></li>`).join('');
  const checkList = (items, good) => items.map(x => `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="${good ? 'text-emerald-500' : 'text-red-400'} font-bold">${good ? '✓' : '×'}</span><span>${x}</span></li>`).join('');

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
    <h2 class="text-2xl font-bold mb-3 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.useTitle}</h2>
    <p class="text-sm text-gray-600 leading-7">${copy.useBody}</p>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.anatomyTitle}</h2>
    <p class="text-sm text-gray-500 leading-7 mb-8">${copy.anatomyIntro}</p>
    <div data-crumb-demo class="rounded-[999px] border border-[#FFE5E0] p-6 md:p-10" style="background: linear-gradient(90deg, #229BD1 0%, #ACDAF5 100%);">
      <nav aria-label="${copy.title}" class="overflow-x-auto">
        <ol class="flex min-w-max items-center text-sm">
          ${[copy.home, copy.appliance, copy.kitchen, copy.detail].map((label, i, arr) => `<li class="flex items-center" data-crumb-item data-index="${i}">${i < arr.length - 1 ? `<button type="button" data-crumb-link class="rounded-md text-white hover:text-[#EC6443] no-underline focus:outline-none">${label}</button><span class="mx-2 text-white/80" aria-hidden="true">&gt;</span>` : `<span class="font-medium text-black" aria-current="page">${label}</span>`}</li>`).join('')}
        </ol>
      </nav>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.sizeTitle}</h2>
    <p class="text-sm text-gray-500 leading-6 mb-7">${copy.sizeIntro}</p>
    <div class="overflow-x-auto rounded-[28px] border border-gray-200 bg-white/65">
      <table class="input-type-table">
        <thead><tr>${copy.tableHead.map(x => `<th scope="col">${x}</th>`).join('')}</tr></thead>
        <tbody>${copy.rows.map(r => `<tr>${r.map(x => `<td>${x}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.typesTitle}</h2>
    <p class="text-sm text-gray-500 leading-7 mb-7">${copy.typesIntro}</p>
    <div class="grid md:grid-cols-2 gap-5">
      ${[
        [copy.basic, [copy.home, copy.appliance, copy.detail]],
        [copy.icon, ['HOME_ICON', copy.appliance, copy.detail]],
        [copy.custom, [copy.home, copy.appliance, copy.detail]],
        [copy.overflowTitle, [copy.home, '…', copy.kitchen, copy.detail]]
      ].map(([title, labels], idx) => `<article class="rounded-[28px] border border-gray-200 bg-white/60 p-5"><p class="text-xs font-normal text-gray-500 mb-3">${title}</p><div data-crumb-demo class="rounded-full bg-white px-5 py-3 border border-gray-100"><nav aria-label="${copy.title}" class="overflow-x-auto"><ol class="flex min-w-max items-center text-sm">${labels.map((label, i, arr) => {
        const isLast = i === arr.length - 1;
        const content = label === 'HOME_ICON' ? `<span class="inline-flex items-center gap-1.5">${homeIcon}<span>${copy.home}</span></span>` : label;
        const sep = idx === 2 ? '<span class="mx-2 text-gray-400" aria-hidden="true">/</span>' : '<span class="mx-2 text-gray-400" aria-hidden="true">&gt;</span>';
        return `<li class="flex items-center" data-crumb-item>${isLast ? `<span class="font-medium text-black" aria-current="page">${content}</span>` : `<button type="button" data-crumb-link class="rounded-md text-gray-500 hover:text-[#EC6443] no-underline focus:outline-none">${content}</button>${sep}`}</li>`;
      }).join('')}</ol></nav></div></article>`).join('')}
    </div>
  </section>

  <section class="glass-panel p-6 md:p-8 mb-8">
    <h2 class="text-xl font-bold mb-5 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.contentTitle}</h2>
    <ul class="space-y-3 max-w-4xl">${numberedList(copy.contentItems)}</ul>
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

/* =========================================================
   分页（Pagination）—— Leader 样式
   ========================================================= */
function renderPaginationGuideline(language) {
  const zh = language === 'zh';
  const copy = zh ? {
    title: '分页',
    intro: '分页将较长的数据集合拆分为多个连续页面，帮助用户控制单页信息量并在结果中稳定定位。分页只改变当前结果范围，不改变筛选、排序或任务上下文。',
    useTitle: '何时使用',
    useBody: '当结果无法在一屏内清晰浏览、完整加载会影响性能，且用户需要在结果中往返定位时使用分页。按照实际屏幕大小，承载内容量选择样式。内容以连续消费为主时优先使用“加载更多”或滚动；步骤流程使用步骤条。',
    anatomyTitle: '组成结构',
    anatomyIntro: '分页分为常规和简约两种样式，常规分页由上一页、页码、当前页、折叠页码和下一页组成；总数、每页条数与快速跳转均为按需附加项。首尾边界上的方向按钮保持可见并进入禁用状态，避免布局跳动。简约分页由前页、当前页、后页组成，不详细展示页码，以图形区分进行定位。',
    total: '共 200 条', perPage: '10 条/页', prev: '上一页', next: '下一页',
    typesTitle: '类型与选用',
    standard: '常规分页', standardDesc: '显示可选页码与前后翻页，适用于宽屏、表格和需要快速定位的结果。',
    simple: '简约分页', simpleDesc: '页面定位，适用于窄屏或分页仅承担顺序浏览的场景。',
    behaviorTitle: '交互行为',
    behavior: [
      '选择页码或上一页/下一页后立即加载对应结果；当前页不可再次触发。',
      '加载期间保持分页器位置和当前页稳定，并阻止重复请求；结果更新后将焦点或阅读位置移到结果区起点。',
      '筛选、搜索条件或数据源变化时默认回到第 1 页；仅排序变化时保留当前页，除非该页已不存在。',
      '改变每页条数后回到第 1 页，并在页面中说明新的结果范围；不要让当前页静默指向不同内容。',
      '浏览器前进/后退应恢复页码、筛选、排序和每页条数，便于返回之前的位置。',
      '页码越界、数据减少或删除最后一项时，跳转到最近的有效页并给出轻量反馈。'
    ],
    rangeTitle: '页码范围与折叠',
    rangeIntro: '始终保留当前页附近的上下文。页码较多时使用省略项收起中间范围，避免分页器随页码位数大幅改变宽度。',
    rangeRules: [
      '常规分页总页数不超过 7 页时展示全部页码。简约分页在中等体量下使用，显示全部页面，否则请使用常规分页。',
      '常规分页超过 7 页时保留第 1 页、最后 1 页、当前页及相邻页；其余范围使用省略项。',
      '省略项至少代表 2 个隐藏页。若支持点击跳页，应提供清晰的向前/向后多页可访问名称。',
      '页码顺序固定递增，不使用循环翻页；到达首尾时禁用对应方向按钮。'
    ],
    addTitle: '使用原则',
    addRows: [
      ['总数与范围', '当用户需要评估工作量时显示“1–10 / 共 200 条”；未知总数不要显示推测值。'],
      ['每页条数', '仅在密集列表或表格中提供，选项建议 10、20、50；触控大屏不超过 3 个选项。'],
      ['快速跳转', '总页数较多且用户已知目标页时提供。失焦或确认后校验，并限制在有效范围内。'],
      ['单页隐藏', '只有一页且分页不承担总数展示时隐藏；若显示总数，则保留总数文本并移除页码控件。']
    ],
    statesTitle: '状态示例',
    defaultState: '默认', selectedState: '当前页', focusState: '聚焦', disabledState: '禁用', loadingState: '加载中',
    sizeTitle: '组件规格',
    sizeIntro: '根据界面密度、观看距离和输入方式选择规格。页码按钮的有效触控热区不得小于视觉尺寸，分页器应位于结果列表底部并与结果区主轴对齐。',
    tableHead: ['规格', '组件高度', '最小热区', '间距', '建议场景'],
    rows: [
      ['简约', '8 dp', '不可点击，无热区', '4 dp', '桌面近距、中等页面体量且无需点击定位'],
      ['常规', '32 dp', '40 dp', '8 dp', 'App 与常规家电触控屏、多页面点击定位']
    ],
    doTitle: '推荐', dontTitle: '避免',
    doItems: [
      '筛选变化后回到第 1 页',
      '保持分页器位置与页码顺序稳定',
      '按场景逐步增加总数、页容量与跳转'
    ],
    dontItems: [
      '在内容很少时强制分页',
      '用无限滚动承载需要精确定位的结果',
      '同时堆叠所有附加控件或隐藏首尾边界'
    ]
  } : {
    title: 'Pagination',
    intro: 'Pagination divides a long data set into consecutive pages so people can control information density and keep a stable position. It changes only the visible result range, not filters, sorting, or task context.',
    useTitle: 'When to use',
    useBody: 'Use when results do not fit clearly on one screen, loading everything harms performance, and people need to revisit a known position. Choose the style based on the actual screen size and content volume. Prefer Load more or scrolling for continuous consumption, and Steps for a sequential workflow.',
    anatomyTitle: 'Anatomy',
    anatomyIntro: 'Pagination has Standard and Simple styles. Standard pagination contains Previous, page items, the current page, collapsed ranges, and Next. Total, page size, and a page jumper are optional. Keep boundary controls visible and disabled on the first or last page so layout does not shift. Simple pagination contains previous, current, and next only, without page numbers, using graphic cues for orientation.',
    total: '200 items', perPage: '10 / page', prev: 'Previous page', next: 'Next page',
    typesTitle: 'Types and selection',
    standard: 'Regular', standardDesc: 'Shows selectable pages and previous/next controls for wide layouts, tables, and results that need direct page access.',
    simple: 'Simple', simpleDesc: 'Page location, suitable for narrow screens or sequential browsing only.',
    behaviorTitle: 'Interaction behavior',
    behavior: [
      'Selecting a page or direction loads that result immediately; the current page does not trigger again.',
      'Keep position and current page stable while loading, prevent duplicate requests, then move focus or reading position to the result start.',
      'Reset to page 1 when filters, query, or source changes. Preserve the current page for sorting unless it no longer exists.',
      'Changing page size resets to page 1 and communicates the new range; never silently point the same page number to unrelated content.',
      'Browser Back and Forward restore page, filters, sorting, and page size.',
      'If data shrinks or the page becomes invalid, move to the nearest valid page and provide lightweight feedback.'
    ],
    rangeTitle: 'Page range and collapse',
    rangeIntro: 'Keep context around the current page. Collapse long middle ranges so the control does not grow dramatically as page numbers change.',
    rangeRules: [
      'For Regular pagination, show every page when the total is seven or fewer. Use Simple pagination for moderate page counts and show all pages; otherwise use Regular pagination.',
      'For Regular pagination above seven pages, keep the first, last, current, and neighboring pages; collapse the remaining range.',
      'An ellipsis represents at least two pages. If interactive, name its forward or backward jump clearly.',
      'Keep numbers in ascending order, never loop, and disable direction controls at the boundaries.'
    ],
    addTitle: 'Usage principles',
    addRows: [
      ['Total and range', 'Show “1–10 of 200” when workload matters. Never invent a total that is not known.'],
      ['Page size', 'Offer for dense lists or tables, typically 10, 20, and 50; no more than three choices on touch displays.'],
      ['Page jumper', 'Offer for many pages when people know the destination. Validate on blur or confirm and constrain to the valid range.'],
      ['Single page', 'Hide page controls when there is one page. If the total is still useful, keep only the total text.']
    ],
    statesTitle: 'State examples',
    defaultState: 'Default', selectedState: 'Current', focusState: 'Focus', disabledState: 'Disabled', loadingState: 'Loading',
    sizeTitle: 'Component specifications',
    sizeIntro: 'Choose a specification for interface density, viewing distance, and input method. The effective target must not be smaller than the visual item. Place pagination below the results and align it with the content axis.',
    tableHead: ['Style', 'Component height', 'Minimum target', 'Gap', 'Recommended context'],
    rows: [
      ['Simple', '8 dp', 'Not clickable, no target', '4 dp', 'Near-view desktop, moderate page volume, no click-to-locate'],
      ['Regular', '32 dp', '40 dp', '8 dp', 'Apps and regular appliance touchscreens, multi-page click-to-locate']
    ],
    doTitle: 'Do', dontTitle: 'Avoid',
    doItems: [
      'Reset to page 1 when filters change',
      'Keep position and number order stable',
      'Add totals, page size, and jump only when useful'
    ],
    dontItems: [
      'Paginate a collection that fits comfortably',
      'Use infinite scroll for results that need precise location',
      'Crowd every optional control together or remove boundary cues'
    ]
  };

  const pages = (active = 3) => [1, 2, 3, 4, 5, '…', 20].map(x => `<button type="button" ${x === active ? 'aria-current="page"' : ''} aria-label="${x === '…' ? (zh ? '向后多页' : 'Jump forward') : ((zh ? '第 ' : 'Page ') + x + (zh ? ' 页' : ''))}" class="min-w-10 h-10 rounded-full px-2 text-sm ${x === active ? 'bg-[#EC6443] text-white font-semibold shadow-sm' : 'bg-white/80 text-gray-600 hover:bg-[#FFE5E0]'}">${x}</button>`).join('');
  const arrow = (dir, disabled = false) => `<button type="button" aria-label="${dir === 'prev' ? copy.prev : copy.next}" ${disabled ? 'disabled' : ''} class="w-10 h-10 shrink-0 rounded-full bg-white/80 flex items-center justify-center ${disabled ? 'opacity-35' : ''}"><img src="assets/icons/general/${dir === 'prev' ? 'Left' : 'Right'}.svg" alt="" class="w-4 h-4 brightness-0 opacity-60"></button>`;
  const numberedList = items => items.map((x, i) => `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="shrink-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#EC6443] text-[11px] font-semibold text-[#EC6443]" style="line-height:1;">${i + 1}</span><span>${x}</span></li>`).join('');
  const checkList = (items, good) => items.map(x => `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="${good ? 'text-emerald-500' : 'text-red-400'} font-bold">${good ? '✓' : '×'}</span><span>${x}</span></li>`).join('');

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
    <h2 class="text-2xl font-bold mb-3 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.useTitle}</h2>
    <p class="text-sm text-gray-600 leading-7">${copy.useBody}</p>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.anatomyTitle}</h2>
    <p class="text-sm text-gray-500 leading-7 mb-8">${copy.anatomyIntro}</p>

    <div class="rounded-[28px] border border-[#FFE5E0] bg-white/70 p-5 md:p-8 mb-4">
      <div class="flex flex-wrap items-center justify-between gap-5">
        <span class="text-sm text-gray-500">${copy.total}</span>
        <nav aria-label="${zh ? '结果分页' : 'Results pagination'}" class="flex items-center gap-2 overflow-x-auto">${arrow('prev')}${pages()}${arrow('next')}</nav>
        <div class="flex items-center gap-2 text-sm">
          <span class="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-2 text-gray-600">${copy.perPage}<img src="assets/icons/general/Down.svg" alt="" class="w-3 h-3 brightness-0 opacity-60"></span>
        </div>
      </div>
    </div>

    <div class="rounded-[28px] border border-[#FFE5E0] bg-white/70 p-5 md:p-8">
      <div class="flex items-center justify-center gap-1">
        ${Array.from({ length: 9 }, (_, i) => i === 4 ? `<span class="w-4 h-2 rounded-full bg-black" aria-hidden="true"></span>` : `<span class="w-2 h-2 rounded-full bg-gray-300" aria-hidden="true"></span>`).join('')}
      </div>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.sizeTitle}</h2>
    <p class="text-sm text-gray-500 leading-6 mb-7">${copy.sizeIntro}</p>
    <div class="overflow-x-auto rounded-[28px] border border-gray-200 bg-white/65">
      <table class="input-type-table">
        <thead><tr>${copy.tableHead.map(x => `<th scope="col">${x}</th>`).join('')}</tr></thead>
        <tbody>${copy.rows.map(r => `<tr>${r.map(x => `<td>${x}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-7 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.statesTitle}</h2>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
      ${[
        [copy.defaultState, 'bg-white text-gray-600 border-gray-200', '2'],
        [copy.selectedState, 'bg-[#EC6443] text-white border-[#EC6443]', '3'],
        [copy.focusState, 'bg-white text-gray-700 border-[#EC6443] ring-2 ring-[#FFE5E0]', '4'],
        [copy.disabledState, 'bg-gray-100 text-gray-300 border-gray-200', '<img src="assets/icons/general/Right.svg" alt="" class="w-4 h-4 brightness-0 opacity-30">'],
        [copy.loadingState, 'bg-[#FFE5E0] text-[#EC6443] border-[#FFE5E0]', '···']
      ].map(([name, cls, val]) => `<article class="rounded-[28px] bg-white/50 p-4 text-center"><div class="mx-auto mb-3 w-10 h-10 rounded-full border flex items-center justify-center text-sm ${cls}">${val}</div><p class="text-xs text-gray-500">${name}</p></article>`).join('')}
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-7 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.typesTitle}</h2>
    <div class="grid lg:grid-cols-2 gap-5">
      ${[[copy.standard, copy.standardDesc, 'standard'], [copy.simple, copy.simpleDesc, 'simple']].map(([name, desc, type]) => `<article class="rounded-[28px] bg-white/60 p-5"><h3 class="text-xs font-normal text-gray-500 mb-3">${name}</h3><div class="min-h-16 flex flex-wrap items-center gap-2 overflow-x-auto">${type === 'standard' ? arrow('prev') + pages() + arrow('next') : `<div class="flex w-full items-center justify-center gap-1">${Array.from({ length: 9 }, (_, i) => i === 4 ? `<span class="w-4 h-2 rounded-full bg-black" aria-hidden="true"></span>` : `<span class="w-2 h-2 rounded-full bg-gray-300" aria-hidden="true"></span>`).join('')}</div>`}</div><p class="mt-5 text-sm text-gray-500 leading-6">${desc}</p></article>`).join('')}
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-6 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.addTitle}</h2>
    <div class="grid md:grid-cols-2 gap-4">
      ${copy.addRows.map(([a, b]) => `<article class="rounded-[28px] bg-white/60 p-5"><h3 class="text-sm font-semibold mb-2">${a}</h3><p class="text-sm text-gray-500 leading-6">${b}</p></article>`).join('')}
    </div>
  </section>

  <section class="space-y-8 mb-8">
    <article class="glass-panel p-6 md:p-8">
      <h2 class="text-xl font-bold mb-6 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.behaviorTitle}</h2>
      <ul class="space-y-4">${numberedList(copy.behavior)}</ul>
    </article>
    <article class="glass-panel p-6 md:p-8">
      <h2 class="text-xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.rangeTitle}</h2>
      <p class="text-sm text-gray-500 leading-6 mb-5">${copy.rangeIntro}</p>
      <ul class="space-y-4">${numberedList(copy.rangeRules)}</ul>
    </article>
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

/* =========================================================
   步骤条（Steps）—— Leader 样式
   ========================================================= */
function renderStepperGuideline(language) {
  const zh = language === 'zh';
  const copy = zh ? {
    title: '步骤条',
    intro: '用于将具有明确先后关系的复杂任务拆分为连续阶段，清晰呈现当前位置、已完成内容与后续路径。',
    useTitle: '何时使用',
    useBody: '用于需要用户按顺序完成的 3–5 个阶段，例如设备配网、安装引导、程序配置或售后申请。只有两步时直接使用页面标题和操作按钮；超过 5 步时应合并阶段、使用分组或改为垂直布局。没有明确阶段的加载过程使用进度条。',
    anatomyTitle: '组成结构',
    anatomyIntro: '每个步骤由步骤节点、连接线、标题和可选描述组成。节点表达状态，连接线表达顺序关系；当前步骤必须同时通过形状、图标或文字被识别，不能只依赖颜色。',
    typesTitle: '组件类型',
    typesIntro: '提供基础型、点状型、导航型和垂直型，根据流程复杂度、可用空间及是否允许回看选择。',
    basic: '基础型', dot: '点状型', navigation: '导航型', vertical: '垂直型',
    statesTitle: '状态示例',
    finish: '已完成', process: '进行中', wait: '等待', error: '错误',
    layoutTitle: '组件规格',
    layoutIntro: '根据界面密度、观看距离和输入方式选择小号、常规规格。优先保证标题完整和状态可辨，不压缩节点或缩小触控热区。',
    tableHead: ['规格', '方向', '节点尺寸', '最小交互热区', '适用场景'],
    rows: [
      ['小号', '横向或垂直', '24 dp', '44 × 44 dp', '近距、小尺寸或高密度界面'],
      ['常规', '横向或垂直', '32 dp', '56 × 56 dp', 'App 与常规家电触控屏']
    ],
    behaviorTitle: '交互与流程',
    behaviorItems: [
      '默认按顺序推进。只有流程允许修改历史信息时，已完成步骤才可点击；等待步骤不可跳转。',
      '点击“下一步”前完成当前步骤校验。校验失败时焦点移至首个错误，同时将当前步骤标记为错误。',
      '返回上一步时保留已输入内容；重新编辑已完成步骤后，需要重新验证受影响的后续步骤。',
      '提交或设备指令执行期间保持当前步骤与按钮位置稳定，显示执行中反馈并阻止重复操作。'
    ],
    contentTitle: '内容规则',
    contentItems: [
      '标题使用简短、平行的名词或动宾短语，如“连接设备、配置网络、完成”。',
      '描述用于解释该步要做什么或关键条件，不重复标题，不展示易变化的长段帮助文案。',
      '步骤编号从 1 开始并保持稳定；不要因条件分支在过程中重排已显示的步骤。',
      '最后一步表达可验证的结果，如“配置完成”，而不是模糊的“其他”或“结束”。'
    ],
    doTitle: '推荐', dontTitle: '避免',
    doItems: [
      '将流程控制在 3–5 个可理解阶段',
      '同时说明当前位置与后续路径',
      '在出错步骤就地展示原因和修正入口'
    ],
    dontItems: [
      '用步骤条表达无阶段的加载进度',
      '允许用户直接跳过必填或安全步骤',
      '只用颜色区分完成、当前与错误状态'
    ]
  } : {
    title: 'Steps',
    intro: 'Steps break a complex, ordered task into clear stages and continuously show the current position, completed work, and what comes next. They describe task progression, not loading or ordinary page navigation.',
    useTitle: 'When to use',
    useBody: 'Use for 3–5 ordered stages such as appliance setup, installation, program configuration, or service requests. For two stages, use a page title and actions. Beyond five, combine stages, group them, or switch to a vertical layout. Use Progress when there are no meaningful stages.',
    anatomyTitle: 'Anatomy',
    anatomyIntro: 'Each step has a node, connector, title, and optional description. Nodes communicate status and connectors communicate sequence. The current step must be identifiable by shape, icon, or text as well as color.',
    typesTitle: 'Component types',
    typesIntro: 'Choose Default, Dot, Navigation, or Vertical according to workflow complexity, available space, and whether completed steps can be revisited.',
    basic: 'Default', dot: 'Dot', navigation: 'Navigation', vertical: 'Vertical',
    statesTitle: 'State examples',
    finish: 'Complete', process: 'Current', wait: 'Upcoming', error: 'Error',
    layoutTitle: 'Component specifications',
    layoutIntro: 'Choose Small or Default for interface density, viewing distance, and input method. Preserve complete labels and distinguishable states without compressing nodes or touch targets.',
    tableHead: ['Specification', 'Direction', 'Node size', 'Minimum target', 'Use case'],
    rows: [
      ['Small', 'Horizontal or vertical', '24 dp', '44 × 44 dp', 'Near-view, small, or dense interfaces'],
      ['Default', 'Horizontal or vertical', '32 dp', '56 × 56 dp', 'Apps and regular appliance touchscreens']
    ],
    behaviorTitle: 'Interaction and flow',
    behaviorItems: [
      'Advance in sequence. Completed steps are clickable only when editing earlier information is allowed; upcoming steps cannot be skipped.',
      'Validate the current stage before Next. On failure, focus the first error and mark the current step as Error.',
      'Preserve entered data when moving back. Revalidate affected downstream steps after editing a completed stage.',
      'Keep the current step and action positions stable while submitting or sending a device command; show activity and prevent duplicates.'
    ],
    contentTitle: 'Content',
    contentItems: [
      'Use short parallel nouns or verb phrases, such as Connect appliance, Configure network, Complete.',
      'Descriptions explain the task or a key condition without repeating the title or becoming long-form help.',
      'Number from 1 and keep ordering stable; conditional branches must not reorder steps already shown.',
      'Name the final step as a verifiable result, such as Setup complete, rather than Other or End.'
    ],
    doTitle: 'Do', dontTitle: 'Avoid',
    doItems: [
      'Keep the flow to 3–5 understandable stages',
      'Show current position and what comes next',
      'Place the reason and correction path on the error step'
    ],
    dontItems: [
      'Use Steps for loading without meaningful stages',
      'Let users skip required or safety-critical stages',
      'Rely on color alone for complete, current, and error states'
    ]
  };

  const numberedList = items => items.map((x, i) => `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="shrink-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#EC6443] text-[11px] font-semibold text-[#EC6443]" style="line-height:1;">${i + 1}</span><span>${x}</span></li>`).join('');
  const checkList = (items, good) => items.map(x => `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="${good ? 'text-emerald-500' : 'text-red-400'} font-bold">${good ? '✓' : '×'}</span><span>${x}</span></li>`).join('');
  const labels = zh ? ['连接设备', '配置网络', '绑定家庭', '完成'] : ['Connect', 'Network', 'Home', 'Complete'];
  const stepNode = (i, state, compact = false) => {
    const cls = state === 'finish' ? 'bg-white border-[#EC6443] text-[#EC6443]' : state === 'process' ? 'bg-[#EC6443] border-[#EC6443] text-white' : state === 'error' ? 'bg-white border-red-500 text-red-500' : 'bg-white border-gray-300 text-gray-400';
    const value = state === 'finish' ? '✓' : state === 'error' ? '!' : i + 1;
    return `<span class="${compact ? 'w-4 h-4 text-[9px]' : 'w-8 h-8 text-xs'} shrink-0 rounded-full border flex items-center justify-center font-bold ${cls}">${value}</span>`;
  };
  const dotNode = state => `<span class="w-2 h-2 shrink-0 rounded-full ${state === 'finish' ? 'border border-[#EC6443] bg-white' : state === 'process' ? 'bg-[#EC6443]' : state === 'error' ? 'bg-red-500' : 'bg-gray-300'}" aria-hidden="true"></span>`;
  const horizontal = (states, dot = false, showLabels = true, compact = false, count = labels.length, centered = false) => {
    const visibleLabels = labels.slice(0, count);
    return `<div class="flex ${compact ? 'w-full' : centered ? 'w-3/4 min-w-[680px] mx-auto' : 'min-w-[760px]'} items-center gap-3">${visibleLabels.map((label, i) => `<div class="flex shrink-0 items-center gap-3">${dot ? dotNode(states[i]) : stepNode(i, states[i], compact)}${showLabels ? `<p class="${compact ? 'text-xs' : 'text-sm'} font-semibold leading-none ${states[i] === 'wait' ? 'text-gray-400' : states[i] === 'error' ? 'text-red-600' : 'text-gray-800'}">${label}</p>` : ''}</div>${i < visibleLabels.length - 1 ? `<span class="h-px ${compact ? 'w-16 flex-none' : 'flex-1'} ${states[i] === 'finish' ? 'bg-[#EC6443]' : 'bg-gray-200'}"></span>` : ''}`).join('')}</div>`;
  };

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
    <h2 class="text-2xl font-bold mb-3 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.useTitle}</h2>
    <p class="text-sm text-gray-600 leading-7">${copy.useBody}</p>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.anatomyTitle}</h2>
    <p class="text-sm text-gray-500 leading-7 mb-9">${copy.anatomyIntro}</p>
    <div class="overflow-x-auto rounded-[28px] border border-[#FFE5E0] bg-white/70 px-5 py-9">
      ${horizontal(['finish', 'process', 'wait', 'wait'], false, true, false, labels.length, true)}
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.layoutTitle}</h2>
    <p class="text-sm text-gray-500 leading-6 mb-7">${copy.layoutIntro}</p>
    <div class="overflow-x-auto rounded-[28px] border border-gray-200 bg-white/65">
      <table class="input-type-table">
        <thead><tr>${copy.tableHead.map(x => `<th scope="col">${x}</th>`).join('')}</tr></thead>
        <tbody>${copy.rows.map(r => `<tr>${r.map(x => `<td>${x}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-7 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.statesTitle}</h2>
    <div class="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
      ${[[copy.finish, 'finish'], [copy.process, 'process'], [copy.wait, 'wait'], [copy.error, 'error']].map(([name, state], i) => `<article class="rounded-[28px] border border-[#EEEEEE] bg-white/60 p-5"><p class="text-xs text-gray-500 mb-3">${name}</p><div class="h-12 flex items-center gap-3">${stepNode(i, state)}<span class="text-sm font-medium ${state === 'error' ? 'text-red-600' : state === 'wait' ? 'text-gray-400' : 'text-gray-800'}">${name}</span></div></article>`).join('')}
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.typesTitle}</h2>
    <p class="text-sm text-gray-500 leading-6 mb-7">${copy.typesIntro}</p>
    <div class="grid lg:grid-cols-2 gap-5">
      <article class="flex flex-col rounded-[28px] border border-[#EEEEEE] bg-white/60 p-5 overflow-hidden"><h3>${copy.basic}</h3><div class="flex min-h-14 items-center">${horizontal(['finish', 'process', 'wait'], false, true, true, 3)}</div></article>
      <article class="flex flex-col rounded-[28px] border border-[#EEEEEE] bg-white/60 p-5 overflow-hidden"><h3>${copy.dot}</h3><div class="flex min-h-14 items-center">${horizontal(['finish', 'process', 'wait'], true, true, true, 3)}</div></article>
      <article class="flex flex-col rounded-[28px] border border-[#EEEEEE] bg-white/60 p-5"><h3>${copy.navigation}</h3><div class="flex min-h-14 items-center"><div class="flex w-full items-stretch mt-10">${labels.slice(0, 3).map((x, i) => `<div class="contents"><div class="relative flex min-w-0 flex-1 items-center justify-center gap-2 pb-3 text-xs ${i === 1 ? 'text-[#EC6443] font-semibold' : i === 0 ? 'text-gray-700' : 'text-gray-400'}">${stepNode(i, i === 0 ? 'finish' : i === 1 ? 'process' : 'wait', true)}<span class="truncate">${x}</span>${i === 1 ? '<span class="absolute inset-x-2 bottom-0 h-1 rounded-full bg-[#EC6443]"></span>' : ''}</div>${i < 2 ? '<span class="flex w-5 shrink-0 items-center justify-center pb-3 text-gray-300" aria-hidden="true">›</span>' : ''}</div>`).join('')}</div></div></article>
      <article class="flex flex-col rounded-[28px] border border-[#EEEEEE] bg-white/60 p-5"><h3>${copy.vertical}</h3><div class="space-y-0 mt-2.5">${labels.slice(0, 3).map((x, i) => `<div class="flex gap-3 min-h-10"><div class="flex flex-col items-center">${stepNode(i, i === 0 ? 'finish' : i === 1 ? 'process' : 'wait', true)} ${i < 2 ? `<span class="w-px flex-1 my-1 ${i === 0 ? 'bg-[#EC6443]' : 'bg-gray-200'}"></span>` : ''}</div><div><p class="text-xs font-semibold leading-4 ${i > 1 ? 'text-gray-400' : ''}">${x}</p></div></div>`).join('')}</div></article>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-5 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.behaviorTitle}</h2>
    <ul class="space-y-3 max-w-4xl">${numberedList(copy.behaviorItems)}</ul>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-5 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.contentTitle}</h2>
    <ul class="space-y-3 max-w-4xl">${numberedList(copy.contentItems)}</ul>
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

/* =========================================================
   卡片（Card）—— Leader 样式
   ========================================================= */
function renderCardGuideline(language) {
  const zh = language === 'zh';
  const t = (cn, en) => zh ? cn : en;
  const numberedList = items => items.map((x, i) => `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="shrink-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#EC6443] text-[11px] font-semibold text-[#EC6443]" style="line-height:1;">${i + 1}</span><span>${x}</span></li>`).join('');
  const checkList = (items, good) => items.map(x => `<li class="flex gap-3 text-sm text-gray-600 leading-7"><span class="${good ? 'text-emerald-500' : 'text-red-400'} font-bold" aria-hidden="true">${good ? '✓' : '×'}</span><span>${x}</span></li>`).join('');
  const sectionHead = (title, description) => `<h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${title}</h2>${description ? `<p class="text-sm text-gray-500 leading-7">${description}</p>` : ''}`;
  const group = bad => `<div class="rounded-[28px] border-2 ${bad ? 'border-[#F52828]' : 'border-[#3BD08D]'} bg-white/70 px-5 py-0"><div class="relative h-[176px]"><div class="grid grid-cols-4 gap-3 h-full">${[1,2,3,4].map(n => `<div class="h-full rounded-lg ${bad ? 'bg-[#F52828]/15' : 'bg-[#FFE5E0]'} flex items-center justify-center text-[10px] text-gray-500">${n}</div>`).join('')}</div><div class="absolute top-1/2 -translate-y-1/2 ${bad ? 'left-1/2 -translate-x-1/2 w-[75%]' : 'left-0 w-[75%]'}"><div class="h-[72px] w-full rounded-full bg-white/60"></div></div></div></div>`;

  const copy = zh ? {
    title: '卡片',
    intro: '卡片适合承载能独立理解、重复排列的信息，例如标题、参数与内容推荐。先确定用户需要了解什么，再决定卡片需要哪些区域。',
    useTitle: '何时使用',
    useBody: '需要独立展示设备、场景或内容摘要，并让用户快速浏览同类对象时使用卡片。一张卡片聚焦一个主题，根据任务选择合适的呈现方式。',
    anatomyTitle: '组件构成',
    anatomyIntro: '卡片由标题区、内容区及可选的图片与操作区组成。按需组合，保持内容层级清晰。',
    parts: [
      ['图片', '可选。用于识别内容，同组保持统一比例。'],
      ['标题区', '说明卡片对象，可补充简短状态。'],
      ['内容区', '呈现关键数值、说明或摘要，保留必要单位。'],
      ['操作区', '可选。提供一个主要操作，无操作时省略。']
    ],
    specTitle: '组件类型',
    specIntro: '根据实际展示内容进行选择，两种类型均为 TFT 卡片样式。不设具体尺寸但尺寸变化不压缩关键内容与操作热区。',
    materialSolid: 'Solid · 信息卡片', materialSolidDesc: '适合数据、设置与长文本', materialSolidNote: '38% 白色层 · 模糊 12 dp · 静态无悬浮阴影',
    materialSoft: 'Soft · 概览卡片', materialSoftDesc: '适合设备概览与简短状态', materialSoftNote: '28% 白色层 · 模糊 24 dp · 复杂背景切换 Solid',
    specHead: ['规格', '内边距', '圆角', '内容组间距', '最小交互热区', '适用场景'],
    specRows: [
      ['小号', '16 dp', '12 dp', '12–16 dp', '44 × 44 dp', '近距、小尺寸或高密度 TFT 界面'],
      ['常规', '24 dp', '16 dp', '16–24 dp', '48 × 48 dp', '常规家电 TFT 触控界面的默认规格'],
      ['大号', '32 dp', '20 dp', '24–32 dp', '56 × 56 dp', '远距观看、旋钮或遥控器输入']
    ],
    specNote: '卡片宽度由栅格决定，高度随内容自适应；同组统一规格，静态卡片不要求交互热区，包含操作时不得小于对应最小值。',
    gridTitle: '网格与分组',
    gridIntro: '卡片可跨不同列数，但边缘需落在栅格线上，间距遵循统一沟槽。用栅格组织层级与分组。',
    gridLabel: '布局示意',
    gridWide: '宽容器 · 多列', gridMedium: '中容器 · 双列', gridNarrow: '窄容器 · 单列',
    gridCorrect: '卡片边缘贴合列边界，卡片之间保留完整沟槽。',
    gridWrong: '卡片偏离列边界并溢出。',
    contentTitle: '内容状态与边界',
    contentIntro: '布局在等待、空白与异常时仍然稳定；反馈出现在受影响的区域。',
    loading: '加载中', loadingDesc: '骨架保留内容结构与卡片高度。刷新时保留原数据，标识更新中。',
    empty: '内容为空', emptyDesc: '说明为空的原因，给出下一步。区分首次使用与筛选无结果。', emptyStrong: '暂无设备', emptySmall: '添加后在这里查看',
    error: '异常或不可用', errorDesc: '说明原因与恢复方式，仅禁用相关操作。保留状态可读性，不淡化整张卡片。', errorStrong: '设备离线', errorSmall: '请检查电源与网络',
    doTitle: '推荐', dontTitle: '避免',
    doItems: [
      '一张卡片聚焦一个对象，优先呈现关键状态与参数',
      '卡片边缘对齐栅格，跨列与沟槽保持一致',
      '加载、空白和异常时保留布局，并说明原因与下一步',
      '在目标 TFT 上验证可读性、触控热区与长文本'
    ],
    dontItems: [
      '将无关内容堆入同一卡片，或反复嵌套容器',
      '随意改变卡片宽度，让边缘侵入沟槽或超出栅格',
      '用透明度表达离线，或只用颜色区分状态',
      '为容纳内容缩小热区、截断关键参数，或仅在悬停时显示操作'
    ]
  } : {
    title: 'Card',
    intro: 'Cards suit self-contained, repeatable content such as titles, parameters, and recommendations. Decide what people need to know before choosing which regions to include.',
    useTitle: 'When to use',
    useBody: 'Use cards to present devices, scenes, or content summaries independently and help people scan similar objects. Keep each card focused on one subject and choose the presentation to match the task.',
    anatomyTitle: 'Component anatomy',
    anatomyIntro: 'A card consists of a title and content, with optional image and action regions. Include only what is needed and keep the hierarchy clear.',
    parts: [
      ['Image', 'Optional. Helps identify content; keep proportions consistent within a group.'],
      ['Title region', 'Names the subject and may include a short status.'],
      ['Content region', 'Presents key values, descriptions, or summaries with the required units.'],
      ['Action region', 'Optional. Provides one primary action; omit when unused.']
    ],
    specTitle: 'Component types',
    specIntro: 'Choose based on the actual content being displayed. Both types use TFT card styles. No fixed sizes are defined, but size changes must not compress essential content or touch targets.',
    materialSolid: 'Solid · Information card', materialSolidDesc: 'For data, settings, and longer text', materialSolidNote: '38% white layer · 12dp blur · No elevation shadow',
    materialSoft: 'Soft · Overview card', materialSoftDesc: 'For device overviews and short status text', materialSoftNote: '28% white layer · 24dp blur · Use Solid on complex backgrounds',
    specHead: ['Scale', 'Padding', 'Radius', 'Content group gap', 'Minimum touch target', 'Use case'],
    specRows: [
      ['Small', '16 dp', '12 dp', '12–16 dp', '44 × 44 dp', 'Close viewing, small screens, or dense TFT layouts'],
      ['Default', '24 dp', '16 dp', '16–24 dp', '48 × 48 dp', 'Default for standard appliance TFT touchscreens'],
      ['Large', '32 dp', '20 dp', '24–32 dp', '56 × 56 dp', 'Distant viewing, knob, or remote-control input']
    ],
    specNote: 'Grid spans determine width; content determines height. Keep the same scale within a group. Static cards need no touch target; interactive regions must meet the corresponding minimum.',
    gridTitle: 'Grids and grouping',
    gridIntro: 'Cards may span different numbers of columns, but edges must align to grid lines with consistent gutters. Use the grid to establish hierarchy and groups.',
    gridLabel: 'Layout schematic',
    gridWide: 'Wide · Multiple columns', gridMedium: 'Medium · Two columns', gridNarrow: 'Narrow · Single column',
    gridCorrect: 'Card edges follow column boundaries, with full gutters between cards.',
    gridWrong: 'Cards drift off the column boundaries and overflow.',
    contentTitle: 'Content states and boundaries',
    contentIntro: 'Keep layout stable through loading, empty, and error states. Place feedback where the issue occurs.',
    loading: 'Loading', loadingDesc: 'Preserve the content structure and card height. Keep existing data visible during refresh.',
    empty: 'Empty', emptyDesc: 'Explain why content is empty and offer a next step. Distinguish first use from no filter results.', emptyStrong: 'No devices yet', emptySmall: 'Added devices will appear here',
    error: 'Error or unavailable', errorDesc: 'Explain the cause and recovery; disable only affected actions. Keep status readable instead of fading the entire card.', errorStrong: 'Device offline', errorSmall: 'Check power and network',
    doTitle: 'Do', dontTitle: 'Avoid',
    doItems: [
      'Focus each card on one subject, leading with essential status and values',
      'Align card edges to the grid with consistent spans and gutters',
      'Preserve layout through loading, empty, and error states; explain the cause and next step',
      'Validate readability, touch targets, and long text on the target TFT'
    ],
    dontItems: [
      'Combine unrelated subjects in one card or repeatedly nest containers',
      'Use arbitrary widths that intrude into gutters or extend beyond the grid',
      'Fade the whole card to indicate offline status or rely on color alone',
      'Shrink touch targets, truncate essential values, or hide actions until hover'
    ]
  };

  return `<section class="mb-12">
    <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">${copy.title}</h1>
    <p class="text-lg text-gray-900 leading-relaxed">${copy.intro}</p>
  </section>
  <hr class="border-t border-black/5 mb-8">

  <section class="glass-panel p-6 md:p-10 mb-8">
    ${sectionHead(copy.useTitle, '')}
    <p class="text-sm text-gray-600 leading-7 mt-3">${copy.useBody}</p>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    ${sectionHead(copy.anatomyTitle, copy.anatomyIntro)}
    <div class="rounded-[28px] border border-[#FFE5E0] bg-white/70 p-5 md:p-8 mt-8">
      <div class="rounded-full border border-gray-200 bg-white p-4 w-full flex items-center justify-center gap-4">
        <div class="w-96 h-24 shrink-0 rounded-full bg-[#FFE5E0] flex items-center justify-center text-xs text-[#EC6443]">${copy.parts[0][0]}</div>
        <div class="min-w-0">
          <h3 class="text-base font-semibold mb-1 text-left">${copy.parts[1][0]}</h3>
          <p class="text-xs text-gray-500 mb-3 text-left">${copy.parts[2][0]}</p>
          <div class="h-8 rounded-full bg-[#EC6443] text-white text-xs font-semibold flex items-center justify-center max-w-[120px]">${copy.parts[3][0]}</div>
        </div>
      </div>
    </div>
    <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
      ${copy.parts.map(([title, desc], i) => `<div class="rounded-[28px] bg-white/60 px-4 py-3"><span class="text-[10px] font-bold text-[#EC6443]">0${i + 1}</span><p class="mt-1 text-xs font-semibold text-gray-800">${title}</p><p class="mt-1 text-[11px] text-gray-500 leading-5">${desc}</p></div>`).join('')}
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    ${sectionHead(copy.specTitle, copy.specIntro)}
    <div class="grid md:grid-cols-2 gap-5 mt-8 mb-8">
      <article>
        <h3 class="text-xs font-normal text-gray-500 mb-3">${zh ? '详细卡片' : 'Detailed card'}</h3>
        <div class="rounded-[28px] border border-[#FFE5E0] bg-white/70 p-4 h-72 flex items-center justify-center">
          <img src="leader-assets/examples/component/card/card – example.png" alt="${zh ? '详细卡片示例' : 'Detailed card example'}" class="block h-full w-auto max-w-full object-contain">
        </div>
      </article>
      <article>
        <h3 class="text-xs font-normal text-gray-500 mb-3">${zh ? '概览卡片' : 'Overview card'}</h3>
        <div class="rounded-[28px] border border-[#FFE5E0] bg-white/70 p-4 h-72 flex items-center justify-center">
          <img src="leader-assets/examples/component/card/parameter card-light.png" alt="${zh ? '概览卡片示例' : 'Overview card example'}" class="block h-full w-auto max-w-full object-contain">
        </div>
      </article>
    </div>
    <p class="mt-5 p-4 rounded-[28px] bg-[#FFF6F3] border border-[#EC6443] text-sm text-gray-700 leading-6">${copy.specNote}</p>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    ${sectionHead(copy.gridTitle, copy.gridIntro)}
    <div class="rounded-[28px] border border-[#FFE5E0] bg-white/70 p-5 mt-8 mb-6">
      <p class="text-xs font-semibold text-gray-400 mb-3">${copy.gridLabel}</p>
      <div class="flex flex-wrap items-stretch justify-center gap-6">
        <div class="flex flex-col justify-end text-center">
          <div class="flex items-center gap-3">
            ${[1,2,3].map(() => '<div class="h-6 w-24 rounded-full bg-[#FFE5E0]"></div>').join('')}
          </div>
          <small class="block mt-2 text-xs text-gray-500">${copy.gridWide}</small>
        </div>
        <span class="text-gray-300 self-end pb-6" aria-hidden="true">→</span>
        <div class="flex flex-col justify-end text-center">
          <div class="relative h-14 w-36 mx-auto">
            <div class="absolute top-0 left-0 h-6 w-24 rounded-full bg-[#FFE5E0]"></div>
            <div class="absolute bottom-0 right-0 h-6 w-24 rounded-full bg-[#FFE5E0]"></div>
          </div>
          <small class="block mt-2 text-xs text-gray-500">${copy.gridMedium}</small>
        </div>
        <span class="text-gray-300 self-end pb-6" aria-hidden="true">→</span>
        <div class="flex flex-col justify-end text-center">
          <div class="flex items-center justify-center">
            <div class="h-6 w-24 rounded-full bg-[#FFE5E0]"></div>
          </div>
          <small class="block mt-2 text-xs text-gray-500">${copy.gridNarrow}</small>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-5">
      <article class="w-full">
        ${group(false)}
        <p class="mt-3 text-sm text-gray-500 leading-6">${copy.gridCorrect}</p>
      </article>
      <article class="w-full">
        ${group(true)}
        <p class="mt-3 text-sm text-gray-500 leading-6">${copy.gridWrong}</p>
      </article>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    ${sectionHead(copy.contentTitle, copy.contentIntro)}
    <div class="grid md:grid-cols-3 gap-5 mt-8">
      <article class="rounded-[28px] border border-gray-200 bg-white/60 p-5">
        <div class="rounded-[16px] bg-white border border-gray-100 p-4 h-32 flex flex-col justify-center gap-2 mb-4">
          <div class="h-3 w-3/4 rounded-full bg-gray-200 animate-pulse"></div>
          <div class="h-3 w-1/2 rounded-full bg-gray-200 animate-pulse"></div>
          <div class="h-3 w-2/3 rounded-full bg-gray-200 animate-pulse"></div>
        </div>
        <h3 class="text-sm font-semibold mb-1">${copy.loading}</h3>
        <p class="text-xs text-gray-500 leading-5">${copy.loadingDesc}</p>
      </article>
      <article class="rounded-[28px] border border-gray-200 bg-white/60 p-5">
        <div class="rounded-[16px] bg-white border border-gray-100 p-4 h-32 flex flex-col items-center justify-center gap-1 mb-4">
          <span class="w-8 h-8 rounded-full border border-gray-300 text-gray-400 flex items-center justify-center text-lg">＋</span>
          <strong class="text-xs text-gray-700">${copy.emptyStrong}</strong>
          <small class="text-[11px] text-gray-400">${copy.emptySmall}</small>
        </div>
        <h3 class="text-sm font-semibold mb-1">${copy.empty}</h3>
        <p class="text-xs text-gray-500 leading-5">${copy.emptyDesc}</p>
      </article>
      <article class="rounded-[28px] border border-gray-200 bg-white/60 p-5">
        <div class="rounded-[16px] bg-white border border-gray-100 p-4 h-32 flex flex-col items-center justify-center gap-1 mb-4">
          <span class="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center text-sm font-bold">!</span>
          <strong class="text-xs text-gray-700">${copy.errorStrong}</strong>
          <small class="text-[11px] text-gray-400">${copy.errorSmall}</small>
        </div>
        <h3 class="text-sm font-semibold mb-1">${copy.error}</h3>
        <p class="text-xs text-gray-500 leading-5">${copy.errorDesc}</p>
      </article>
    </div>
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

/* =========================================================
   列表（List）—— Leader 样式
   ========================================================= */
function renderListGuideline(language) {
  const zh = language === 'zh';
  const t = (cn, en) => zh ? cn : en;
  const sectionHead = (title, description) => `<h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${title}</h2>${description ? `<p class="text-sm text-gray-500 leading-7 mb-6">${description}</p>` : ''}`;
  const numberedList = items => items.map((x, i) => `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="shrink-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#EC6443] text-[11px] font-semibold text-[#EC6443]" style="line-height:1;">${i + 1}</span><span>${x}</span></li>`).join('');
  const checkList = (items, good) => items.map(x => `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="${good ? 'text-emerald-500' : 'text-red-400'} font-bold" aria-hidden="true">${good ? '✓' : '×'}</span><span>${x}</span></li>`).join('');
  const row = (name, value, desc = '', cls = '') => `<div class="flex items-center gap-4 min-h-14 px-4 relative ${cls}"><span class="w-6 shrink-0 text-[#EC6443] text-lg" aria-hidden="true">▤</span><div class="flex-1 min-w-0"><strong class="block text-sm font-medium text-gray-900">${name}</strong>${desc ? `<small class="block text-xs text-gray-500 mt-1">${desc}</small>` : ''}</div><span class="shrink-0 text-sm text-gray-600">${value}</span></div>`;

  const copy = zh ? {
    title: '列表',
    intro: '以连续、对齐的条目呈现同类信息，帮助用户快速找到设置、识别设备状态并选择程序。家电界面优先保证一眼可读、准确触达和操作结果可信。',
    useTitle: '何时使用',
    useBody: '需要连续浏览同类信息、查看当前设置或选择程序时使用列表。一个条目表达一个对象，同组保持一致结构；根据任务选择合适的呈现方式。',
    decision: [
      ['设置 / 程序', '单列列表', '名称与当前值直接可见，便于逐项查找'],
      ['食谱 / 详细记录', '模块列表', '用图文与辅助信息说明关键差异'],
      ['多项参数比较', '表格', '按列对齐参数，便于横向比较'],
      ['独立内容 / 层级入口', '卡片 / 菜单', '卡片承载独立对象，菜单组织层级导航']
    ],
    anatomyTitle: '组成与布局',
    anatomyIntro: '主信息、辅助信息与操作各有固定位置，同组条目共用对齐线。',
    anatomyItems: [
      ['信息区域', '标题说明对象，辅助信息补充关键差异。图标仅在有助于识别时使用，同组保持一致尺寸。'],
      ['尾部操作', '最多保留一个主要操作区域。详情用箭头、即时切换用开关；纯信息行不显示箭头。'],
      ['对齐与分组', '标题与说明左对齐，当前值靠右对齐。分割线从文字起始线延伸，组间留白大于行内间距。']
    ],
    typeTitle: '类型与内容层级',
    typeIntro: '按信息复杂度选择单行或双行，优先保证主信息清晰、辅助信息易读。',
    typeSingle: '单行 · 快速扫描', typeSingleDesc: '用于名称与简短当前值，保持紧凑的浏览节奏。',
    typeDouble: '双行 · 补充关键差异', typeDoubleDesc: '在主信息下补充说明，帮助理解条目间的差异。',
    typeRules: [
      ['控制行数', '标题优先单行，辅助信息最多两行；更多内容移入详情。'],
      ['保留重点', '先精简文案，再换行；关键差异、数值与单位不截断。'],
      ['稳定排序', '按任务分组，常用项在前；状态变化不改变条目位置。']
    ],
    sizeTitle: '尺寸与显示适配',
    sizeHead: ['设计项', '近距 TFT 标准', '大字 / 较远观看'],
    sizeRows: [
      ['单行最小高度', '64 dp', '80 dp'],
      ['双行最小高度', '88 dp', '104 dp'],
      ['主文字 / 辅助文字', '24 / 16 dp', '28 / 24 dp'],
      ['左右内边距', '24 dp', '24 dp'],
      ['图标 / 内容间距', '24 dp', '24 dp'],
      ['独立操作最小热区', '48 × 48 dp', '56 × 56 dp']
    ],
    sizeRules: [
      '小屏先移除非必要图标和说明，减少同屏条数；不得整体等比缩小桌面列表。当前值较长时移到第二行，不挤压主标题或操作热区。',
      '正文采用高对比纯色承载，复杂背景上使用稳定底色。状态同时使用文字或图标，不仅靠颜色；低亮度下避免细线与过淡灰字。'
    ],
    touchTitle: '触控与滚动',
    touchIntro: '明确点击范围，保持滚动路径清晰，让用户准确操作并轻松浏览。',
    touchRowTitle: '触控 · 热区清晰',
    touchRowDesc: '整行导航可整行点击；独立操作划分热区，同一次点击只触发一个动作。根据操作条件与用户需求扩大热区，例如湿手操作、适老模式等；常用操作保持可见。',
    touchRowSmall1: '整行进入详情',
    touchRowSmall2: '操作热区互不重叠 · 点击只触发一次',
    scrollTitle: '滚动 · 单一方向',
    scrollDesc: '只保留一个主纵向滚动区，用滚动条或下一条局部露出提示更多。追加内容保留位置；底部显示加载、重试或已全部显示。',
    scrollFixed: '固定操作栏 · 不遮挡末项',
    stateTitle: '状态与反馈',
    stateItems: [
      ['默认：信息清晰，不添加交互暗示到纯信息行。按下：立即反馈，松开后恢复；桌面悬停仅为补充。'],
      ['禁用：保留名称、当前值和原因，例如“运行中不可修改”；只禁用受影响的操作，不将整行淡化到无法阅读。']
    ],
    stateCards: [
      ['加载 / 刷新', '首次加载用等高骨架或加载提示；刷新保留原列表并标注更新中，禁止重复提交。'],
      ['空内容 / 无结果', '“暂无运行记录”说明首次空白；“未找到相关程序”提供清除筛选。不得用无限加载替代空状态。'],
      ['失败 / 部分失败', '在受影响区域显示原因与重试入口；追加失败保留已加载条目，只重试失败批次。'],
      ['离线 / 旧数据', '标注“设备离线 · 上次同步 14:30”，时间必须来自真实同步记录。旧值可供参考，但不得显示为实时状态；保留本地可用操作。']
    ],
    doTitle: '推荐', dontTitle: '避免',
    doItems: [
      '同组对齐、层级清晰，保持条目顺序稳定',
      '长文案与多语言下保留关键参数和单位',
      '操作后反馈设备确认的真实状态'
    ],
    dontItems: [
      '为多放几项压缩字号、行高和热区',
      '焦点移动即启动，或整行与控件重复触发',
      '仅靠颜色、悬停或省略号传达关键信息'
    ]
  } : {
    title: 'List',
    intro: 'Present related information in aligned, continuous rows for finding settings, checking device status, and choosing programs. Prioritize readability, accurate input, and trustworthy results on appliance displays.',
    useTitle: 'When to use',
    useBody: 'Use lists to browse related information, review settings, or choose programs. Each row represents one object with a consistent structure. Choose the presentation to match the task.',
    decision: [
      ['Settings / programs', 'Single-column list', 'Keep names and current values visible for scanning'],
      ['Recipes / detailed records', 'Rich list', 'Use imagery and supporting text to explain key differences'],
      ['Parameter comparison', 'Table', 'Align values in columns for direct comparison'],
      ['Independent content / hierarchy', 'Card / menu', 'Use cards for independent objects and menus for navigation']
    ],
    anatomyTitle: 'Anatomy and layout',
    anatomyIntro: 'Give primary content, supporting text, and actions consistent positions and align rows within each group.',
    anatomyItems: [
      ['Content area', 'Name the object in the title and add essential context below. Include icons only when useful, with consistent sizing.'],
      ['Trailing action', 'Keep one primary action: a chevron for details or a switch for toggling. Omit chevrons on static rows.'],
      ['Alignment and grouping', 'Left-align titles and descriptions and right-align values. Inset separators to the text edge and use larger spacing between groups.']
    ],
    typeTitle: 'Types and hierarchy',
    typeIntro: 'Choose one or two lines according to content complexity, keeping primary text clear and supporting text readable.',
    typeSingle: 'One line · Quick scanning', typeSingleDesc: 'For a name and short current value, with a compact scanning rhythm.',
    typeDouble: 'Two lines · Essential differences', typeDoubleDesc: 'Add supporting text below the title to clarify differences between items.',
    typeRules: [
      ['Limit line count', 'Prefer one-line titles and up to two supporting lines; move longer content into details.'],
      ['Preserve key information', 'Shorten copy before wrapping; keep key differences, values, and units visible.'],
      ['Keep order stable', 'Group by task with common items first; status changes must not reorder rows.']
    ],
    sizeTitle: 'Dimensions and display adaptation',
    sizeHead: ['Property', 'Standard TFT', 'Large text / greater distance'],
    sizeRows: [
      ['Minimum one-line height', '64 dp', '80 dp'],
      ['Minimum two-line height', '88 dp', '104 dp'],
      ['Title / supporting text', '24 / 16 dp', '28 / 24 dp'],
      ['Horizontal padding', '24 dp', '24 dp'],
      ['Icon / content gap', '24 dp', '24 dp'],
      ['Minimum separate action target', '48 × 48 dp', '56 × 56 dp']
    ],
    sizeRules: [
      'On small screens, remove optional icons and copy and show fewer rows. Do not scale down desktop lists. Wrap long values below rather than squeezing labels or targets.',
      'Use stable surfaces and high-contrast text. Pair status colors with labels or symbols; avoid faint text and thin lines at low brightness.'
    ],
    touchTitle: 'Touch and scrolling',
    touchIntro: 'Define clear touch targets and scrolling paths for accurate input and easy browsing.',
    touchRowTitle: 'Touch · Clear targets',
    touchRowDesc: 'Make navigation rows tappable. Separate independent controls so a tap triggers one action. Enlarge targets to suit operating conditions and user needs, such as wet-hand use or an older-adult mode; keep common actions visible.',
    touchRowSmall1: 'Entire row opens details',
    touchRowSmall2: 'Non-overlapping targets · One action per tap',
    scrollTitle: 'Scroll · One main area',
    scrollDesc: 'Use one main vertical scroll area with a scrollbar or partial next row. Preserve position when appending, and show loading, retry, or end feedback.',
    scrollFixed: 'Fixed actions · Last row stays accessible',
    stateTitle: 'States and feedback',
    stateItems: [
      'Default: keep information clear and static rows unambiguous. Pressed: provide immediate feedback and reset on release. Hover is supplementary.',
      'Disabled: preserve the name, value, and reason, such as “Cannot change while running.” Disable only affected actions and keep text readable.'
    ],
    stateCards: [
      ['Loading / refreshing', 'Use stable skeletons or a loading label initially. Keep existing rows during refresh, mark them as updating, and prevent duplicate submissions.'],
      ['Empty / no results', 'Distinguish “No activity yet” from “No matching programs,” with clear-filter recovery. Do not replace empty states with endless loading.'],
      ['Error / partial error', 'Show the reason and retry where the issue occurs. Preserve loaded rows and retry only the failed batch.'],
      ['Offline / stale data', 'Label offline data with an actual last-sync time. Retain old values for reference without presenting them as live; keep locally available actions enabled.']
    ],
    doTitle: 'Do', dontTitle: 'Avoid',
    doItems: [
      'Align rows, clarify hierarchy, and keep order stable',
      'Preserve essential values and units with long or localized text',
      'Reflect the actual state acknowledged by the device'
    ],
    dontItems: [
      'Shrink text, row height, or targets to fit more items',
      'Execute on focus movement or trigger row and control together',
      'Rely on color, hover, or truncation for critical information'
    ]
  };

  return `<section class="mb-12">
    <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">${copy.title}</h1>
    <p class="text-lg text-gray-900 leading-relaxed">${copy.intro}</p>
  </section>
  <hr class="border-t border-black/5 mb-8">

  <section class="glass-panel p-6 md:p-10 mb-8">
    ${sectionHead(copy.useTitle, '')}
    <p class="text-sm text-gray-600 leading-7">${copy.useBody}</p>
    <div class="overflow-x-auto rounded-[28px] border border-gray-200 bg-white/65 mt-6">
      <table class="w-full min-w-[680px] border-collapse text-[13px] leading-7">
        <tbody>${copy.decision.map(r => `<tr class="border-b border-gray-200 last:border-0">${r.map(c => `<td class="px-[18px] py-[14px] align-top text-[#1D1D1F]">${c}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    ${sectionHead(copy.anatomyTitle, copy.anatomyIntro)}
    <div class="rounded-[28px] border border-[#FFE5E0] bg-white/70 p-5 mt-4">
      <div class="rounded-[16px] bg-white overflow-hidden">
        ${row(zh ? '主信息' : 'Primary text', zh ? '当前值 ›' : 'Value ›', zh ? '辅助信息用于补充说明' : 'Supporting text adds context')}
        ${row(zh ? '主信息' : 'Primary text', zh ? '当前值 ›' : 'Value ›')}
        ${row(zh ? '主信息' : 'Primary text', zh ? '当前值 ›' : 'Value ›')}
      </div>
    </div>
    <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
      ${copy.anatomyItems.map(([title, desc], i) => `<div class="rounded-[28px] bg-white/60 px-4 py-3"><span class="text-[10px] font-bold text-[#EC6443]">0${i + 1}</span><p class="mt-1 text-xs font-semibold text-gray-800">${title}</p><p class="mt-1 text-[11px] text-gray-500 leading-5">${desc}</p></div>`).join('')}
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    ${sectionHead(copy.typeTitle, copy.typeIntro)}
    <div class="grid md:grid-cols-2 gap-5">
      <article class="rounded-[28px] border border-[#FFE5E0] bg-white/70 p-5">
        <h3 class="text-sm font-semibold mb-1">${copy.typeSingle}</h3>
        <p class="text-xs text-gray-500 leading-5 mb-4">${copy.typeSingleDesc}</p>
        <div class="rounded-[16px] bg-white overflow-hidden">
          ${row(zh ? '列表项名称' : 'Item title', zh ? '当前值 ›' : 'Value ›')}
          ${row(zh ? '列表项名称' : 'Item title', zh ? '当前值 ›' : 'Value ›')}
        </div>
      </article>
      <article class="rounded-[28px] border border-[#FFE5E0] bg-white/70 p-5">
        <h3 class="text-sm font-semibold mb-1">${copy.typeDouble}</h3>
        <p class="text-xs text-gray-500 leading-5 mb-4">${copy.typeDoubleDesc}</p>
        <div class="rounded-[16px] bg-white overflow-hidden">
          ${row(zh ? '列表项名称' : 'Item title', zh ? '当前值 ›' : 'Value ›', zh ? '辅助说明，补充关键差异' : 'Supporting text clarifies key differences')}
          ${row(zh ? '列表项名称' : 'Item title', zh ? '当前值 ›' : 'Value ›', zh ? '辅助说明，补充相关信息' : 'Supporting text provides relevant context')}
        </div>
      </article>
    </div>
    <div class="grid md:grid-cols-3 gap-5 mt-8 pt-6 border-t border-gray-200">
      ${copy.typeRules.map(([title, desc]) => `<div><h3 class="text-sm font-semibold mb-2">${title}</h3><p class="text-sm text-gray-500 leading-6">${desc}</p></div>`).join('')}
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    ${sectionHead(copy.sizeTitle, '')}
    <div class="overflow-x-auto rounded-[28px] border border-gray-200 bg-white/65">
      <table class="w-full min-w-[680px] border-collapse text-[13px] leading-7">
        <thead><tr>${copy.sizeHead.map(x => `<th class="px-[18px] py-[14px] font-semibold text-left bg-[#FBF6F5] border-b border-[#E1E7EE] text-[#596774]">${x}</th>`).join('')}</tr></thead>
        <tbody>${copy.sizeRows.map(r => `<tr class="border-b border-gray-200 last:border-0">${r.map((c, i) => i === 0 ? `<th scope="row" class="px-[18px] py-[14px] font-normal text-left">${c}</th>` : `<td class="px-[18px] py-[14px] align-top">${c}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>
    <ul class="space-y-3 mt-6">${numberedList(copy.sizeRules)}</ul>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    ${sectionHead(copy.touchTitle, copy.touchIntro)}
    <div class="grid md:grid-cols-2 gap-5 mt-4">
      <article class="rounded-[28px] border border-[#FFE5E0] bg-white/70 p-5">
        <h3 class="text-sm font-semibold mb-2">${copy.touchRowTitle}</h3>
        <p class="text-xs text-gray-500 leading-5 mb-4">${copy.touchRowDesc}</p>
        <div class="rounded-[16px] bg-[#FFF6F3] p-4 space-y-3">
          <div class="flex items-center justify-between px-3 py-2 rounded-full border border-dashed border-[#EC6443] bg-white text-xs"><span>${zh ? '洗涤设置' : 'Wash settings'}</span><span>›</span></div>
          <small class="block text-[11px] text-gray-500 text-center">${copy.touchRowSmall1}</small>
          <div class="flex items-center justify-between px-3 py-2 rounded-full border border-dashed border-gray-300 bg-white text-xs"><span>${zh ? '提示音' : 'Sound'}</span><span class="rounded-full border border-dashed border-[#EC6443] p-1"><span class="w-10 h-6 rounded-full bg-[#EC6443] flex justify-end items-center p-1"><span class="w-4 h-4 rounded-full bg-white"></span></span></span></div>
          <small class="block text-[11px] text-gray-500 text-center">${copy.touchRowSmall2}</small>
        </div>
      </article>
      <article class="rounded-[28px] border border-[#FFE5E0] bg-white/70 p-5">
        <h3 class="text-sm font-semibold mb-2">${copy.scrollTitle}</h3>
        <p class="text-xs text-gray-500 leading-5 mb-4">${copy.scrollDesc}</p>
        <div class="rounded-[16px] bg-[#FFF6F3] p-4 space-y-3">
          <div class="relative rounded-[16px] bg-white px-4 py-2 text-xs text-gray-600">
            <div class="py-3 border-b border-gray-200">${zh ? '列表项 01' : 'List item 01'}</div>
            <div class="py-3 border-b border-gray-200">${zh ? '列表项 02' : 'List item 02'}</div>
            <div class="pt-3 pb-1">${zh ? '列表项 03' : 'List item 03'}</div>
            <span class="absolute right-1.5 top-3 h-12 w-1 rounded-full bg-[#EC6443]" aria-hidden="true"></span>
          </div>
          <div class="text-center text-[11px] py-2 rounded-full border border-gray-300 bg-white text-gray-600">${copy.scrollFixed}</div>
        </div>
      </article>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    ${sectionHead(copy.stateTitle, '')}
    <ul class="space-y-3 mb-6">${numberedList(copy.stateItems)}</ul>
    <div class="grid md:grid-cols-2 gap-5">
      ${copy.stateCards.map(([title, desc]) => `<article class="rounded-[28px] border border-[#FFE5E0] bg-white/70 p-5"><h3 class="text-sm font-semibold mb-2">${title}</h3><p class="text-xs text-gray-500 leading-5">${desc}</p></article>`).join('')}
    </div>
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

function initBreadcrumbExamples(root) {
  const demos = root.querySelectorAll('[data-crumb-demo]');
  if (!demos.length) return;

  demos.forEach(demo => {
    const reset = () => {
      const items = [...demo.querySelectorAll('[data-crumb-item]')];
      items.forEach(li => {
        li.style.display = '';
        const link = li.querySelector('[data-crumb-link]');
        const sep = li.querySelector('span[aria-hidden="true"]');
        if (sep) sep.style.display = '';
        if (link) {
          link.disabled = false;
          link.classList.add('text-gray-500');
          link.classList.remove('text-black', 'font-medium', 'cursor-default');
        }
        const current = li.querySelector('[aria-current="page"]');
        if (current) {
          current.classList.remove('text-white');
          current.classList.add('text-black', 'font-medium');
        }
      });
    };

    reset();

    demo.querySelectorAll('[data-crumb-link]').forEach(link => {
      link.addEventListener('click', () => {
        const clickedLi = link.closest('[data-crumb-item]');
        const allItems = [...demo.querySelectorAll('[data-crumb-item]')];
        const clickedIndex = allItems.indexOf(clickedLi);

        allItems.forEach((li, i) => {
          if (i < clickedIndex) return;
          if (i === clickedIndex) {
            li.style.display = '';
            const sep = li.querySelector('span[aria-hidden="true"]');
            if (sep) sep.style.display = 'none';
            const btn = li.querySelector('[data-crumb-link]');
            if (btn) {
              btn.disabled = true;
              btn.classList.remove('text-gray-500', 'hover:text-[#EC6443]');
              btn.classList.add('text-black', 'font-medium', 'cursor-default');
            }
          } else {
            li.style.display = 'none';
          }
        });
      });
    });
  });
}

function initTabsExamples(root) {
  const demo = root.querySelector('[data-tabs-demo]');
  if (!demo) return;
  const tabs = [...demo.querySelectorAll('[data-demo-tab]')];
  const panels = [...demo.querySelectorAll('[data-demo-panel]')];
  const activate = (tab, focus = false) => {
    tabs.forEach((item, index) => {
      const selected = item === tab;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
      item.classList.toggle('text-[#EC6443]', selected);
      item.classList.toggle('font-semibold', selected);
      item.classList.toggle('text-gray-500', !selected);
      item.querySelector('[data-indicator]')?.classList.toggle('hidden', !selected);
      panels[index].hidden = !selected;
    });
    if (focus) tab.focus();
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', event => {
      let next = index;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault();
      activate(tabs[next], true);
    });
  });
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
  if (file === 'component_navigation.html') {
    root.innerHTML = renderNavigationGuideline(language);
    return true;
  }
  if (file === 'component_tabs.html') {
    root.innerHTML = renderTabsGuideline(language);
    initTabsExamples(root);
    return true;
  }
  if (file === 'component_breadcrumbs.html') {
    root.innerHTML = renderBreadcrumbGuideline(language);
    initBreadcrumbExamples(root);
    return true;
  }
  if (file === 'component_pagination.html') {
    root.innerHTML = renderPaginationGuideline(language);
    return true;
  }
  if (file === 'component_stepper.html') {
    root.innerHTML = renderStepperGuideline(language);
    return true;
  }
  if (file === 'component_card.html') {
    root.innerHTML = renderCardGuideline(language);
    return true;
  }
  if (file === 'component_list_tile.html') {
    root.innerHTML = renderListGuideline(language);
    return true;
  }
  return false;
};