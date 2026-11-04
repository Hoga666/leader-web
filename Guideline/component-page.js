const COMPONENT_PAGES = {
  'component_buttons.html': ['3.1.1', '按钮', 'Buttons', '触发即时操作或提交明确指令。按钮文案应描述动作结果，并以层级区分主次操作。', 'Trigger immediate actions or submit explicit commands. Labels describe outcomes; hierarchy separates primary and secondary actions.'],
  'component_switch.html': ['3.1.2', '开关', 'Switch / Toggle', '用于立即生效的二元状态切换。标签描述被控制的对象，而不是重复“开 / 关”。', 'Use for binary settings that take effect immediately. Label the controlled setting instead of repeating “on / off”.'],
  'component_radio_button.html': ['3.2.1', '单选框', 'Radio Button', '用于从一组互斥选项中选择一项。优先呈现设备当前值，仅在有安全依据时提供默认选择。', 'Select one option from a mutually exclusive group. Show the current device value and provide a default only when safely justified.'],
  'component_checkbox.html': ['3.2.2', '复选框', 'Checkbox', '用于独立选项或多项选择。每个选项都应能独立理解，不用复选框触发即时动作。', 'Use for independent choices or multi-select. Each option must stand alone; do not use checkboxes as action triggers.'],
  'component_slider.html': ['3.3.2', '调控', 'Control', '用于在连续或分段范围内快速调节数值。关键数值应同步显示，并允许精确输入。', 'Use for quick adjustment across a continuous or stepped range. Show the value and provide precise input when needed.'],
  'component_stepper.html': ['3.4.6', '步骤条', 'Steps', '用于呈现多步骤任务的当前位置、已完成步骤与后续路径，帮助用户理解整体进度。', 'Shows the current, completed, and upcoming stages of a multi-step task so users understand overall progress.'],
  'component_wheel_picker.html': ['3.2.3', '选择器', 'Wheel Picker', '用于触控设备上的连续候选值选择。当前值保持居中突出，并提供清晰的确认方式。', 'Use for continuous value selection on touch devices. Keep the current value centered and provide clear confirmation.'],
  'component_text_field.html': ['3.3.1', '输入框', 'Input', '用于输入和编辑文本、标签、数值或验证码。根据内容选择匹配的输入类型，并分别定义结构、行为与校验标准。', 'Use to enter and edit text, tags, numbers, or verification codes. Match the input type to the content and define structure, behavior, and validation for each.'],
  'component_keyboard.html': ['3.3.3', '键盘', 'Keyboard', '用于家电 App 与触控显示屏中的文本、数字和符号输入。键位布局应匹配输入内容、屏幕尺寸与操作距离，并提供清晰的输入和关闭反馈。', 'Use for text, number, and symbol entry in appliance apps and touch displays. Match the key layout to the content, screen size, and operating distance, with clear entry and dismissal feedback.'],
  'component_menu.html': ['3.4.1', '菜单', 'Menu', '将相关功能组织为可扫描的导航结构，帮助用户在页面、模块或操作集合间定位与切换。', 'Organizes related destinations and actions into a scannable structure for navigation between pages, modules, or command groups.'],
  'component_app_bar.html': ['3.4.1', '菜单', 'Menu', '将相关功能组织为可扫描的导航结构，帮助用户在页面、模块或操作集合间定位与切换。', 'Organizes related destinations and actions into a scannable structure for navigation between pages, modules, or command groups.'],
  'component_navigation.html': ['3.4.2', '导航', 'Navigation', '帮助用户在主要任务或信息区域间切换。位置、顺序和当前状态应跨页面保持一致。', 'Moves users between primary tasks or information areas. Preserve placement, order, and current-state cues across pages.'],
  'component_tabs.html': ['3.4.3', '标签页', 'Tabs', '用于同层级内容之间切换。标签保持简短，数量过多时改用更合适的导航模式。', 'Switches between peer content sections. Keep labels short and choose another navigation pattern when tabs become crowded.'],
  'component_breadcrumbs.html': ['3.4.4', '面包屑', 'Breadcrumbs', '显示当前位置及其上级路径，适用于三层及以上的信息结构。当前页不可点击。', 'Shows the current location and its parent path in structures three levels or deeper. The current page is not interactive.'],
  'component_pagination.html': ['3.4.5', '分页', 'Pagination', '将较长结果集分成稳定页面。保留当前位置，并在筛选变化后给出可预期的重置行为。', 'Splits long result sets into stable pages. Preserve position and reset predictably when filters change.'],
  'component_card.html': ['3.5.1', '卡片', 'Card', '将相关内容与操作组织为一个可识别单元。卡片层级不应替代清晰的信息架构。', 'Groups related content and actions into a recognizable unit. Card layers do not replace clear information architecture.'],
  'component_list_tile.html': ['3.5.2', '列表', 'List / List Tile', '以一致结构呈现可扫描的信息集合。主信息、辅助信息和操作保持稳定对齐。', 'Presents scannable collections with a consistent structure. Align primary content, supporting content, and actions predictably.'],
  'component_avatar.html': ['3.5.3', '头像', 'Avatar', '代表用户、家庭或设备身份。图片不可用时使用稳定的文字或图标占位。', 'Represents a person, household, or device identity. Use a stable text or icon fallback when imagery is unavailable.'],
  'component_image.html': ['3.5.4', '图片轮播', 'Image Carousel', '用于识别设备、呈现场景与说明操作。', 'Identify appliances, illustrate contexts, and explain tasks.'],
  'component_divider.html': ['3.5.4', '图片轮播', 'Image Carousel', '用于识别设备、呈现场景与说明操作。', 'Identify appliances, illustrate contexts, and explain tasks.'],
  'component_badge.html': ['3.5.5', '徽标', 'Badge', '以紧凑形式表达计数或短状态。内容应简短，不将关键告警仅依赖颜色表达。', 'Expresses a count or short status compactly. Keep content brief and never communicate critical alerts by color alone.'],
  'component_dialog_modal.html': ['3.6.1', '对话框', 'Dialog / Modal', '用于需要用户立即关注或确认的短任务。避免嵌套弹窗，并始终提供明确退出路径。', 'Use for short tasks that require immediate attention or confirmation. Avoid nested dialogs and always provide a clear exit.'],
  'component_bottom_sheet.html': ['3.6.2', '抽屉', 'Bottom Sheet', '从屏幕底部呈现补充操作或内容，适合触控场景。保留背景上下文并支持清晰关闭。', 'Presents supporting actions or content from the bottom on touch devices. Preserve context and provide a clear dismiss path.'],
  'component_snackbar_toast.html': ['3.6.3', '消息提示', 'Snackbar / Toast', '反馈已发生的非阻断结果。信息简短、停留时间足够，重要操作不应只存在于轻提示中。', 'Confirms non-blocking outcomes. Keep messages brief and visible long enough; never place essential actions only in a toast.'],
  'component_tooltip.html': ['3.6.4', '弹窗', 'Tooltip', '补充解释图标或陌生控件。不可承载完成任务所必需的信息，并支持键盘与触控访问。', 'Explains icons or unfamiliar controls. Do not place task-critical information in tooltips; support keyboard and touch access.'],
  'component_progress_indicator.html': ['3.6.5', '进度条', 'Progress Indicator', '表达等待、加载或任务进度。可测量时显示确定进度，不可测量时使用非确定状态。', 'Communicates waiting, loading, or task progress. Show determinate progress when measurable and indeterminate progress otherwise.'],
};

/* =========================================================
   推荐 / 避免 列表：绿圈对钩 / 红圈叉号
   ========================================================= */
function radioList(items, good = true) {
  return items.map(item => {
    const icon = good
      ? `<svg class="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#3BD08D" stroke-width="1.5"/><path d="M6.5 10.2l2.4 2.4 4.6-4.8" stroke="#3BD08D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
      : `<svg class="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#F52828" stroke-width="1.5"/><path d="M7 7l6 6M13 7l-6 6" stroke="#F52828" stroke-width="1.5" stroke-linecap="round"/></svg>`;
    return `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="inline-flex shrink-0 mt-[1px]">${icon}</span><span>${item}</span></li>`;
  }).join('');
}

/* =========================================================
   按钮
   ========================================================= */
function renderButtonGuideline(language) {
  const zh = language === 'zh';
  const copy = zh ? {
    title: '按钮',
    intro: '按钮用于触发即时操作或流程推进。在 Leader 的设计语境中，按钮应服务于年轻用户的高效决策习惯，避免让用户在操作入口处产生犹豫。',
    typeTitle: '按钮类型', typeIntro: '按任务优先级选择类型。单一视区只允许一个主要按钮，避免多个高权重操作竞争。',
    primary: '主要按钮', primaryDesc: '当前任务的唯一主操作，如启动、确认。', secondary: '次要按钮', secondaryDesc: '与主操作并列的辅助动作，如取消、稍后。', outline: '线框按钮', outlineDesc: '用于低频或容器内操作，适合浅色背景。', text: '文字按钮', textDesc: '用于最低层级操作，不承载安全关键动作。', danger: '危险按钮', dangerDesc: '仅用于删除、复位等不可逆或高风险操作。',
    startTitle: '开始按钮', startIntro: '用于启动某个程序、工作流程或设备功能，是 Leader 品牌 UI 中的高识别度主操作。', startUsageTitle: '使用条件', startUsageList: ['页面上有且仅有一个“开始”类操作。', '该操作是用户当前路径上最期望发生的行为。', '不可与另一个主按钮并列出现在同一视觉层级。'], startVisualTitle: '视觉特征', startVisual: '渐变按钮色背景与居中[开始]图标组成。保持图标、光感和圆形边界完整，不改色、不拉伸、不叠加其他图标。', startBehaviorTitle: '交互行为', startBehavior: '点击后立即进入执行中状态，避免重复启动。程序已运行时，应根据任务切换为“暂停”或“停止”，不继续显示开始。', startLabelRule: '语义明确时可单独使用；首次出现、低频功能或存在安全风险时，在按钮下方搭配“开始”或具体动作名称。',
    anatomyTitle: '组成与形状', label: '动词标签', icon: '可选图标', touch: '触控热区', anatomyRule: '统一使用胶囊形按钮。单图标按钮保持等宽等高；图标与文字组合时图标在前，方向性动作可在后。',
    sizeTitle: '尺寸与观看距离', sizeIntro: '按钮分为小、中、大三种尺寸，高度分别为 48dp、64dp、80dp。根据界面密度、观看距离、操作优先级和网格系统进行选择。', compact: '小', regular: '中', large: '大', sizeUse: '适用场景', compactUse: '近距屏幕、低频辅助操作', regularUse: '常规触控屏、默认尺寸', largeUse: '远距观看、核心操作，根据网格系统选择使用', minTarget: '特别说明：视觉高度不等于触控热区。家电触控热区仍不得小于 48 × 48 dp；核心操作按键建议不小于 80 × 80 dp。',
    stateTitle: '交互状态', default: '默认', focused: '执行中', disabled: '禁用', success: '完成', stateRule: '触控按下需在 300 ms 内反馈，当超过300ms时按钮需改变交互状态，执行中的按钮橙色描边可拓展为进度条动态展示；焦点同时服务旋钮、遥控器和键盘，不得只靠颜色表达；',
    iconTitle: '图标按钮', iconRule: '仅当图标语义在该设备场景中高度明确时使用。单图标按钮必须提供可访问名称；首次使用或低频功能应搭配文字。', plus: '添加', power: '启动', more: '更多',
    groupTitle: '组合按钮', groupRule: '同级操作可组合，但最多保留 3 个可见选项。主操作位置跨状态保持稳定；危险操作不得紧邻高频主操作。', start: '启动', pause: '暂停', cancel: '取消', confirm: '确认',
    adaptiveTitle: '跨屏与硬件适配', tft: 'TFT 触控屏', tftDesc: '保留完整标签、图标和交互状态；主操作固定在主要拇指或视线区域。', led: 'LED / 段码屏', ledDesc: '不复制视觉材质。将按钮映射为固定背光标签或实体键，位置与 TFT 主操作保持同侧。', knob: '旋钮 / 遥控器', knobDesc: '提供高对比焦点环；旋转移动焦点，按压确认。焦点不可自动跳走。', narrow: '窄屏 / 条形屏', narrowDesc: '优先保留主操作文字，隐藏装饰图标；需要时使用通栏按钮，不压缩最小热区。',
    safetyTitle: '家电安全约束', safetyItems: ['启动、停止、童锁等关键动作必须保持位置稳定。', '高温、高压、门锁等风险动作需要明确后果；必要时二次确认。', '紧急停止不可使用仅图标或仅颜色表达，且不得放入溢出菜单。', '离线、故障或条件未满足时，禁用按钮旁应显示具体原因与恢复路径。', '实体键与屏幕按钮同时存在时，命名、状态和反馈必须一致。'],
    doTitle: '推荐', dontTitle: '避免', doItems: ['使用明确动词：启动、暂停、保存', '一个视区只突出一个主要操作', '加载时保持按钮宽度和位置稳定'], dontItems: ['使用“确定”“好的”等模糊文案', '用禁用状态隐藏业务条件', '在运行中允许连续重复触发']
  } : {
    title: 'Buttons',
    intro: 'Buttons trigger immediate actions or advance processes. In Leader\'s design context, buttons should serve young users\' efficient decision-making habits and avoid hesitation at the action entry point.',
    typeTitle: 'Button types', typeIntro: 'Choose by task priority. Allow only one primary button in a viewport to avoid competing high-emphasis actions.', primary: 'Primary', primaryDesc: 'The single main action, such as Start or Confirm.', secondary: 'Secondary', secondaryDesc: 'Supporting actions such as Cancel or Later.', outline: 'Outline', outlineDesc: 'Low-frequency or in-container actions on light backgrounds.', text: 'Text', textDesc: 'Lowest emphasis; never for safety-critical actions.', danger: 'Danger', dangerDesc: 'Only for irreversible or high-risk actions.',
    startTitle: 'Start button', startIntro: 'Starts a program, workflow, or appliance function. It is a high-recognition primary action in Leader brand interfaces.', startUsageTitle: 'Usage conditions', startUsageList: ['There is exactly one "Start" action on the page.', 'It is the most expected action on the user\'s current path.', 'It must not sit at the same visual level as another primary button.'], startVisualTitle: 'Visual treatment', startVisual: 'A gradient button background with a centered Start icon. Preserve the icon, lighting, and circular boundary; do not recolor, stretch, or overlay another icon.', startBehaviorTitle: 'Behavior', startBehavior: 'Enter the running state immediately after activation to avoid duplicate starts. Once running, change the control to Pause or Stop when appropriate instead of continuing to show Start.', startLabelRule: 'The symbol may stand alone when its meaning is unambiguous. Add Start or the specific action name below it for first use, infrequent functions, or safety-sensitive contexts.',
    anatomyTitle: 'Anatomy & shape', label: 'Action label', icon: 'Optional icon', touch: 'Touch target', anatomyRule: 'Use pill-shaped buttons consistently. Keep icon-only buttons equal in width and height. Icons precede labels except for directional actions.',
    sizeTitle: 'Size & viewing distance', sizeIntro: 'Buttons use three sizes—small, medium, and large—with heights of 48dp, 64dp, and 80dp. Choose by interface density, viewing distance, action priority, and grid system.', compact: 'Small', regular: 'Medium', large: 'Large', sizeUse: 'Use', compactUse: 'Close-range displays, supporting actions', regularUse: 'Regular touchscreens, default size', largeUse: 'Distance viewing, primary actions; use according to the grid system', minTarget: 'Special note: visual height is not the touch target. Appliance touch targets must still be at least 48 × 48 dp; primary action targets should be at least 80 × 80 dp.',
    stateTitle: 'Interaction states', default: 'Default', focused: 'Running', disabled: 'Disabled', success: 'Complete', stateRule: 'Touch presses must be acknowledged within 300 ms. When exceeding 300 ms, the button must change its interaction state. The orange stroke of a running button can be expanded into a progress bar for dynamic display. Focus must also support knobs, remotes, and keyboards and cannot rely on color alone.',
    iconTitle: 'Icon buttons', iconRule: 'Use only when meaning is highly familiar in context. Icon-only buttons need accessible names; pair unfamiliar or infrequent functions with text.', plus: 'Add', power: 'Start', more: 'More',
    groupTitle: 'Button groups', groupRule: 'Group peer actions with no more than three visible choices. Keep the primary action stable and separate dangerous actions from frequent ones.', start: 'Start', pause: 'Pause', cancel: 'Cancel', confirm: 'Confirm',
    adaptiveTitle: 'Display & hardware adaptation', tft: 'TFT touchscreen', tftDesc: 'Keep full labels, icons, and states; anchor the primary action in the main thumb or sight zone.', led: 'LED / segment display', ledDesc: 'Do not copy visual material. Map actions to fixed backlit labels or physical keys on the same side as TFT.', knob: 'Knob / remote', knobDesc: 'Use a high-contrast focus ring. Rotate to move and press to confirm; focus must not jump automatically.', narrow: 'Narrow / strip display', narrowDesc: 'Keep the action label before decorative icons. Use full-width buttons when needed without shrinking the target.',
    safetyTitle: 'Appliance safety constraints', safetyItems: ['Keep Start, Stop, and Child Lock positions stable.', 'State consequences for heat, pressure, door lock, or other risks; confirm when necessary.', 'Never hide Emergency Stop behind an icon, color, or overflow menu.', 'When offline, faulty, or blocked, explain the reason and recovery next to the disabled action.', 'Keep labels, state, and feedback aligned across physical and on-screen buttons.'],
    doTitle: 'Do', dontTitle: 'Avoid', doItems: ['Use explicit verbs: Start, Pause, Save', 'Emphasize only one primary action', 'Keep button width and position stable while loading'], dontItems: ['Use vague labels such as OK', 'Hide business conditions behind disabled states', 'Allow repeated activation while running']
  };
  const list = (items, tone) => {
    const good = tone === 'good';
    return items.map(item => {
      const icon = good
        ? `<svg class="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#3BD08D" stroke-width="1.5"/><path d="M6.5 10.2l2.4 2.4 4.6-4.8" stroke="#3BD08D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
        : `<svg class="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#F52828" stroke-width="1.5"/><path d="M7 7l6 6M13 7l-6 6" stroke="#F52828" stroke-width="1.5" stroke-linecap="round"/></svg>`;
      return `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="inline-flex shrink-0 mt-[1px]">${icon}</span><span>${item}</span></li>`;
    }).join('');
  };
  const segmentShape = 'polygon(12% 0,88% 0,100% 50%,88% 100%,12% 100%,0 50%)';
  const verticalShape = 'polygon(50% 0,100% 12%,100% 88%,50% 100%,0 88%,0 12%)';
  const eightDigit = `<span class="relative block w-5 h-9"><i class="absolute left-[3px] top-0 w-[14px] h-[3px] bg-[#EC6443]" style="clip-path:${segmentShape}"></i><i class="absolute right-0 top-[3px] w-[3px] h-[13px] bg-[#EC6443]" style="clip-path:${verticalShape}"></i><i class="absolute right-0 bottom-[3px] w-[3px] h-[13px] bg-[#EC6443]" style="clip-path:${verticalShape}"></i><i class="absolute left-[3px] bottom-0 w-[14px] h-[3px] bg-[#EC6443]" style="clip-path:${segmentShape}"></i><i class="absolute left-0 bottom-[3px] w-[3px] h-[13px] bg-[#EC6443]" style="clip-path:${verticalShape}"></i><i class="absolute left-0 top-[3px] w-[3px] h-[13px] bg-[#EC6443]" style="clip-path:${verticalShape}"></i><i class="absolute left-[3px] top-[17px] w-[14px] h-[3px] bg-[#EC6443]" style="clip-path:${segmentShape}"></i></span>`;
  const doubleEight = `<div class="flex items-center gap-1" role="img" aria-label="${zh ? '标准双八' : 'Standard double eight'}">${eightDigit}${eightDigit}</div>`;
  const tftScreen = `<div class="w-14 h-9 rounded-xl border-2 border-[#EC6443] bg-[#FFE5E0]/60" role="img" aria-label="${zh ? 'TFT 横向触控屏' : 'Landscape TFT touchscreen'}"></div>`;
  return `<section class="mb-12"><h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">${copy.title}</h1><p class="text-lg text-gray-900 leading-relaxed">${copy.intro}</p></section>
  <hr class="border-t border-black/5 mb-8">
  <section class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.typeTitle}</h2><p class="text-sm text-gray-500 mb-7">${copy.typeIntro}</p><div class="grid md:grid-cols-2 xl:grid-cols-5 gap-4">
    <article class="bg-white/60 border border-gray-200 rounded-3xl p-5"><button class="w-full h-12 rounded-full bg-[#EC6443] text-white font-semibold">${copy.primary}</button><p class="text-xs text-gray-500 mt-4 leading-5">${copy.primaryDesc}</p></article>
    <article class="bg-white/60 border border-gray-200 rounded-3xl p-5"><button class="w-full h-12 rounded-full bg-[#FF904B] text-white font-semibold">${copy.secondary}</button><p class="text-xs text-gray-500 mt-4 leading-5">${copy.secondaryDesc}</p></article>
    <article class="bg-white/60 border border-gray-200 rounded-3xl p-5"><button class="w-full h-12 rounded-full border border-[#EC6443] text-[#EC6443] font-semibold">${copy.outline}</button><p class="text-xs text-gray-500 mt-4 leading-5">${copy.outlineDesc}</p></article>
    <article class="bg-white/60 border border-gray-200 rounded-3xl p-5"><button class="w-full h-12 rounded-full text-[#EC6443] font-semibold">${copy.text}</button><p class="text-xs text-gray-500 mt-4 leading-5">${copy.textDesc}</p></article>
    <article class="bg-white/60 border border-gray-200 rounded-3xl p-5"><button class="w-full h-12 rounded-full bg-red-500 text-white font-semibold">${copy.danger}</button><p class="text-xs text-gray-500 mt-4 leading-5">${copy.dangerDesc}</p></article></div></section>
  <section class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.startTitle}</h2><p class="text-sm text-gray-600 leading-6 mb-6">${copy.startIntro}</p><img src="leader-assets/examples/component/buttons/start.png" alt="${copy.startTitle}" class="w-72 h-72 object-contain mb-6"><div class="grid md:grid-cols-3 gap-4"><article class="bg-white/60 border border-gray-200 rounded-3xl p-5"><h3 class="font-bold text-sm mb-2">${copy.startUsageTitle}</h3><ul class="text-xs text-gray-500 leading-5 space-y-1.5">${copy.startUsageList.map(item => `<li class="flex gap-1.5"><span class="text-[#EC6443] font-bold">•</span><span>${item}</span></li>`).join('')}</ul></article><article class="bg-white/60 border border-gray-200 rounded-3xl p-5"><h3 class="font-bold text-sm mb-2">${copy.startVisualTitle}</h3><p class="text-xs text-gray-500 leading-5">${copy.startVisual}</p></article><article class="bg-white/60 border border-gray-200 rounded-3xl p-5"><h3 class="font-bold text-sm mb-2">${copy.startBehaviorTitle}</h3><p class="text-xs text-gray-500 leading-5">${copy.startBehavior}</p></article></div><p class="mt-5 p-4 rounded-3xl bg-[#FFF6F3] border border-[#EC6443] text-sm text-gray-700 leading-6">${copy.startLabelRule}</p></section>
  <section class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.sizeTitle}</h2><p class="text-sm text-gray-600 mb-6">${copy.sizeIntro}</p><div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="text-left text-gray-500 border-b"><th class="py-6 px-6">Size</th><th class="py-6 px-6">Height</th><th class="py-6 px-6">Example</th><th class="py-6 px-6">${copy.sizeUse}</th></tr></thead><tbody><tr class="border-b"><td class="py-12 px-6 font-semibold align-middle">${copy.compact}</td><td class="py-12 px-6 align-middle">48dp</td><td class="py-12 px-6 align-middle"><button class="h-12 min-w-[110px] px-7 rounded-full bg-[#EC6443] text-white text-sm font-semibold">${copy.confirm}</button></td><td class="py-12 px-6 align-middle text-gray-600">${copy.compactUse}</td></tr><tr class="border-b"><td class="py-12 px-6 font-semibold align-middle">${copy.regular}</td><td class="py-12 px-6 align-middle">64dp</td><td class="py-12 px-6 align-middle"><button class="h-16 min-w-[140px] px-10 rounded-full bg-[#EC6443] text-white text-base font-semibold">${copy.confirm}</button></td><td class="py-12 px-6 align-middle text-gray-600">${copy.regularUse}</td></tr><tr><td class="py-12 px-6 font-semibold align-middle">${copy.large}</td><td class="py-12 px-6 align-middle">80dp</td><td class="py-12 px-6 align-middle"><button class="h-20 min-w-[170px] px-12 rounded-full bg-[#EC6443] text-white text-lg font-semibold">${copy.confirm}</button></td><td class="py-12 px-6 align-middle text-gray-600">${copy.largeUse}</td></tr></tbody></table></div><p class="mt-6 p-4 rounded-3xl bg-[#FFF6F3] border border-[#EC6443] text-sm text-gray-700 leading-6">${copy.minTarget}</p></section>
  <section class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold mb-6 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.stateTitle}</h2><div class="flex flex-wrap gap-8 mb-6">
    <div class="flex justify-center"><button class="h-10 min-w-[120px] px-8 rounded-full bg-[#EC6443] text-white font-semibold">${copy.default}</button></div><div class="flex justify-center"><button class="h-10 min-w-[120px] px-8 rounded-full bg-[#EC6443] text-white font-semibold ring-2 ring-[#EC6443] ring-offset-2">${copy.focused}</button></div><div class="flex justify-center"><button disabled class="h-10 min-w-[120px] px-8 rounded-full bg-[#999999] text-white font-semibold cursor-not-allowed">${copy.disabled}</button></div><div class="flex justify-center"><button class="h-10 min-w-[120px] px-8 rounded-full bg-[#EC6443] text-white font-semibold">✓ ${copy.success}</button></div></div><p class="text-sm text-gray-600 leading-6">${copy.stateRule}</p></section>
  <section class="grid lg:grid-cols-2 gap-8 mb-8"><article class="glass-panel p-6 md:p-10"><h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.iconTitle}</h2><p class="text-sm text-gray-500 leading-6 mb-6">${copy.iconRule}</p><div class="flex flex-wrap gap-5"><div class="text-center"><button aria-label="${copy.plus}" class="w-14 h-14 rounded-full bg-[#EC6443] flex items-center justify-center"><img src="assets/icons/button-add.png" alt="" class="w-7 h-7 object-contain"></button><p class="text-xs text-gray-500 mt-2">${copy.plus}</p></div><div class="text-center"><button aria-label="${copy.power}" class="w-14 h-14 rounded-full bg-[#EC6443] flex items-center justify-center"><img src="assets/icons/button-start.png" alt="" class="w-7 h-7 object-contain"></button><p class="text-xs text-gray-500 mt-2">${copy.power}</p></div><div class="text-center"><button aria-label="${copy.more}" class="w-14 h-14 rounded-full bg-[#EC6443] flex items-center justify-center"><img src="assets/icons/button-more.png" alt="" class="w-7 h-7 object-contain"></button><p class="text-xs text-gray-500 mt-2">${copy.more}</p></div></div></article>
  <article class="glass-panel p-6 md:p-10"><h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.groupTitle}</h2><p class="text-sm text-gray-500 leading-6 mb-6">${copy.groupRule}</p><div class="inline-flex gap-2"><button class="h-10 min-w-[120px] px-8 rounded-full border border-[#EC6443] text-[#EC6443] font-semibold">${copy.cancel}</button><button class="h-10 min-w-[120px] px-8 rounded-full bg-[#EC6443] text-white font-semibold">${copy.confirm}</button></div></article></section>
  <section class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold mb-6 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.adaptiveTitle}</h2><div class="grid md:grid-cols-2 xl:grid-cols-4 gap-5">${[[copy.tft, copy.tftDesc, tftScreen], [copy.led, copy.ledDesc, doubleEight], [copy.knob, copy.knobDesc, '◉'], [copy.narrow, copy.narrowDesc, '▬']].map(([t, d, g]) => `<article class="bg-white/60 border border-gray-200 rounded-3xl p-5"><div class="h-16 flex items-center text-2xl font-bold text-[#EC6443]">${g}</div><h3 class="font-bold mb-2">${t}</h3><p class="text-xs text-gray-500 leading-5">${d}</p></article>`).join('')}</div></section>
  <section class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold mb-6 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.safetyTitle}</h2><ul class="grid md:grid-cols-2 gap-x-8 gap-y-3">${radioList(copy.safetyItems, true)}</ul></section>
  <section class="grid md:grid-cols-2 gap-8 mb-10"><article class="bg-white/60 p-8 md:p-10 rounded-[28px]" style="border:2px solid #3BD08D;"><h2 class="text-xl font-bold text-gray-900 mb-5">${copy.doTitle}</h2><ul class="space-y-3">${radioList(copy.doItems, true)}</ul></article><article class="bg-white/60 p-8 md:p-10 rounded-[28px]" style="border:2px solid #F52828;"><h2 class="text-xl font-bold text-gray-900 mb-5">${copy.dontTitle}</h2><ul class="space-y-3">${radioList(copy.dontItems, false)}</ul></article></section>`;
}

/* =========================================================
   开关
   ========================================================= */
function renderSwitchGuideline(language) {
  const zh = language === 'zh';
  const copy = zh ? {
    title: '开关', intro: '开关用于控制一个设置或设备能力的开启与关闭，操作后立即生效。标签描述被控制的对象，不重复“开 / 关”。',
    typeTitle: '类型与尺寸', typeIntro: '仅使用圆形滑块的胶囊形开关。提供标准与小型两组，不使用方形滑块、矩形轨道或图标装饰。', defaultSize: '标准', smallSize: '小型', defaultUse: '设置面板、表单、常规触控界面', smallUse: '高密度列表、近距离屏幕、辅助设置项', track: '轨道', thumb: '滑块', touch: '触控热区',
    dimension: '规格', visual: '视觉尺寸', thumbSize: '滑块尺寸', target: '最小热区', usage: '适用场景',
    statesTitle: '状态', statesIntro: '所有尺寸使用同一套状态语义。点击示例可切换开启与关闭。', off: '关闭', on: '开启', disabledOff: '禁用关闭', disabledOn: '禁用开启', loading: '处理中', focus: '键盘聚焦',
    behaviorTitle: '交互与反馈', behaviorItems: ['点击开关或其标签即可切换；触控热区标准尺寸不小于 56 × 56 dp，小型不小于 44 × 44 dp。', '操作后立即更新视觉状态，并同步设备真实状态。', '设备响应超过 300 ms 时进入处理中状态，锁定重复操作；失败后回退并说明原因。', '支持 Tab 聚焦与 Space / Enter 切换；焦点环必须清晰可见。', '不要仅用颜色表达状态；标签、位置与辅助技术需共同传达当前值。'],
    labelTitle: '标签规则', labelItems: ['使用名词或名词短语，如“提示音”“童锁”。', '开启与关闭的结果应可预测；若会触发高风险行为，应增加确认。', '不要把“开 / 关”写进标签，也不要用开关执行“启动”“保存”等一次性动作。'],
    layoutTitle: '布局规则', layoutItems: ['标签在左、开关在右，同一列表内左右撑满对齐。', '标签过长时换行，不挤压开关。', '同组开关间距：标准 最小12dp，小型最小8dp，4倍数增加。', '开关不分组、不分主次；多个并列设置项保持同一视觉权重。'],
    doTitle: '推荐', dontTitle: '避免', doItems: ['标签描述被控制的设置', '切换后立即反馈真实状态', '禁用时写明原因', '同一列表右对齐'], dontItems: ['方形或矩形开关形态', '滑块或轨道内放图标', '用开关提交表单或启动任务', '只靠颜色表达开关状态']
  } : {
    title: 'Switch', intro: 'A switch controls whether a setting or device capability is on or off and takes effect immediately. Its label names the controlled setting instead of repeating “on / off”.',
    typeTitle: 'Types & sizes', typeIntro: 'Use only pill tracks with circular thumbs. Two groups are available: standard and small. Do not use square thumbs, rectangular tracks, or icon decoration.', defaultSize: 'Standard', smallSize: 'Small', defaultUse: 'Settings panels, forms, regular touch UI', smallUse: 'Dense lists, close-range displays, supporting settings', track: 'Track', thumb: 'Thumb', touch: 'Touch target',
    dimension: 'Size', visual: 'Visual size', thumbSize: 'Thumb', target: 'Minimum target', usage: 'Use',
    statesTitle: 'States', statesIntro: 'Both sizes share the same state semantics. Activate the examples to toggle them.', off: 'Off', on: 'On', disabledOff: 'Disabled off', disabledOn: 'Disabled on', loading: 'Processing', focus: 'Keyboard focus',
    behaviorTitle: 'Interaction & feedback', behaviorItems: ['Toggle from either the switch or its label; keep the touch target at least 56 × 56 dp for standard and 44 × 44 dp for small.', 'Update the visual state immediately and synchronize it with the actual device state.', 'If the device takes over 300 ms, show processing and block repeated input; on failure, revert and explain why.', 'Support Tab focus and Space / Enter toggling with a clearly visible focus ring.', 'Do not rely on color alone; label, position, and assistive semantics must convey the value.'],
    labelTitle: 'Labeling', labelItems: ['Use a noun or noun phrase such as “Sounds” or “Child lock”.', 'Make the result of each state predictable; confirm separately for high-risk consequences.', 'Do not include “on / off” in the label or use a switch for Start, Save, or other one-time actions.'],
    layoutTitle: 'Layout', layoutItems: ['Label on the left, switch on the right; stretch to full width within a list.', 'Long labels may wrap but must not squeeze the switch.', 'Spacing between switches: minimum 12px for standard, minimum 8px for small, increased in multiples of 4.', 'Switches are not grouped or prioritized; peer settings share the same visual weight.'],
    doTitle: 'Do', dontTitle: 'Avoid', doItems: ['Name the controlled setting', 'Reflect the real state immediately', 'Explain why a switch is disabled', 'Align switches at the list edge'], dontItems: ['Use square or rectangular switch forms', 'Place icons inside the thumb or track', 'Submit forms or start tasks with a switch', 'Communicate state by color alone']
  };
  const switchControl = (checked, size = 'default', disabled = false, extra = '') => {
    const small = size === 'small';
    const trackBg = disabled
      ? (checked ? 'bg-[#EC6443]' : 'bg-[#CCCCCC]')
      : (checked ? 'bg-[#EC6443]' : 'bg-[#999999]');
    return `<button type="button" role="switch" aria-checked="${checked}" ${disabled ? 'disabled' : ''} data-guideline-switch class="relative shrink-0 ${small ? 'w-10 h-6' : 'w-14 h-8'} rounded-full transition-colors duration-200 ${trackBg} ${disabled ? 'opacity-45 cursor-not-allowed' : 'cursor-pointer'} ${extra}"><span class="absolute top-1/2 -translate-y-1/2 rounded-full bg-white shadow-sm transition-all duration-200 ${small ? 'w-5 h-5' : 'w-7 h-7'} ${checked ? (small ? 'left-[18px]' : 'left-[26px]') : 'left-[2px]'}"></span></button>`;
  };
  return `<section class="mb-12"><h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">${copy.title}</h1><p class="text-lg text-gray-900 leading-relaxed">${copy.intro}</p></section>
  <hr class="border-t border-black/5 mb-8">
  <section class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.typeTitle}</h2><p class="text-sm text-gray-500 mb-7">${copy.typeIntro}</p><div class="grid md:grid-cols-2 gap-5 mb-8">
    <article class="bg-white/60 border border-gray-200 rounded-3xl p-6"><div class="h-20 flex items-center gap-8">${switchControl(false)}${switchControl(true)}</div><h3 class="font-bold">${copy.defaultSize}</h3><p class="text-xs text-gray-500 mt-2">56 × 32 dp · ${copy.defaultUse}</p></article>
    <article class="bg-white/60 border border-gray-200 rounded-3xl p-6"><div class="h-20 flex items-center gap-8">${switchControl(false, 'small')}${switchControl(true, 'small')}</div><h3 class="font-bold">${copy.smallSize}</h3><p class="text-xs text-gray-500 mt-2">40 × 24 dp · ${copy.smallUse}</p></article></div>
    <div class="overflow-x-auto"><table class="w-full min-w-[640px] text-sm"><thead><tr class="text-left text-gray-500 border-b"><th class="py-3">${copy.dimension}</th><th>${copy.visual}</th><th>${copy.thumbSize}</th><th>${copy.target}</th><th>${copy.usage}</th></tr></thead><tbody><tr class="border-b"><td class="py-4 font-semibold">${copy.defaultSize}</td><td>56 × 32 dp</td><td>28 × 28 dp</td><td>56 × 56 dp</td><td class="text-gray-600">${copy.defaultUse}</td></tr><tr><td class="py-4 font-semibold">${copy.smallSize}</td><td>40 × 24 dp</td><td>20 × 20 dp</td><td>44 × 44 dp</td><td class="text-gray-600">${copy.smallUse}</td></tr></tbody></table></div></section>
  <section class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold mb-5 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.layoutTitle}</h2><ul class="grid md:grid-cols-2 gap-x-8 gap-y-3">${radioList(copy.layoutItems, true)}</ul></section>
  <section class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.statesTitle}</h2><p class="text-sm text-gray-500 mb-7">${copy.statesIntro}</p><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    ${[[copy.off, switchControl(false)], [copy.on, switchControl(true)], [copy.disabledOff, switchControl(false, 'default', true)], [copy.disabledOn, switchControl(true, 'default', true)], [copy.loading, switchControl(true, 'default', true, 'animate-pulse')], [copy.focus, switchControl(true, 'default', false, 'ring-2 ring-[#EC6443]/35 ring-offset-2')]].map(([label, control]) => `<article class="bg-white/60 border border-gray-200 rounded-3xl p-5"><div class="h-12 flex items-center">${control}</div><p class="text-xs text-gray-500 mt-2">${label}</p></article>`).join('')}</div></section>
  <section class="grid lg:grid-cols-2 gap-8 mb-8"><article class="glass-panel p-6 md:p-8"><h2 class="text-xl font-bold mb-5 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.behaviorTitle}</h2><ul class="space-y-3">${radioList(copy.behaviorItems, true)}</ul></article><article class="glass-panel p-6 md:p-8"><h2 class="text-xl font-bold mb-5 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.labelTitle}</h2><ul class="space-y-3">${radioList(copy.labelItems, true)}</ul></article></section>
  <section class="grid md:grid-cols-2 gap-8 mb-10"><article class="bg-white/60 p-8 md:p-10 rounded-[28px]" style="border:2px solid #3BD08D;"><h2 class="text-xl font-bold text-gray-900 mb-5">${copy.doTitle}</h2><ul class="space-y-3">${radioList(copy.doItems, true)}</ul></article><article class="bg-white/60 p-8 md:p-10 rounded-[28px]" style="border:2px solid #F52828;"><h2 class="text-xl font-bold text-gray-900 mb-5">${copy.dontTitle}</h2><ul class="space-y-3">${radioList(copy.dontItems, false)}</ul></article></section>`;
}

function initSwitchExamples(root) {
  root.querySelectorAll('[data-guideline-switch]:not([disabled])').forEach(control => control.addEventListener('click', () => {
    const checked = control.getAttribute('aria-checked') === 'true';
    const thumb = control.querySelector('span');
    const small = control.classList.contains('w-10');
    control.setAttribute('aria-checked', String(!checked));
    control.classList.toggle('bg-[#EC6443]', !checked);
    control.classList.toggle('bg-[#999999]', checked);
    thumb.classList.toggle(small ? 'left-[18px]' : 'left-[26px]', !checked);
    thumb.classList.toggle('left-[2px]', checked);
  }));
}

/* =========================================================
   单选按钮
   ========================================================= */
function renderRadioGuideline(language) {
  const zh = language === 'zh';
  const t = (cn, en) => zh ? cn : en;
  const section = (id, title, intro, body) => `<section id="${id}" class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold mb-3 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${title}</h2>${intro ? `<p class="text-sm text-gray-600 leading-7 mb-6">${intro}</p>` : ''}${body}</section>`;
  const rules = rows => `<ul class="mt-8 divide-y divide-gray-200/80">${rows.map(([title, body]) => `<li class="grid md:grid-cols-[140px_minmax(0,1fr)] gap-2 md:gap-6 py-5 first:pt-0 last:pb-0"><h3 class="text-sm font-semibold text-gray-900">${title}</h3><p class="text-[13px] text-gray-600 leading-6">${body}</p></li>`).join('')}</ul>`;
  const list = (items, good) => radioList(items, good);
  const table = (headers, rows) => `<div class="overflow-x-auto rounded-3xl border border-gray-200 bg-white/65"><table class="radio-table"><thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  const option = (name, value, label, desc = '', attrs = '') => `<label class="radio-option"><input type="radio" name="${name}" value="${value}" ${attrs}><span><strong>${label}</strong>${desc ? `<small>${desc}</small>` : ''}</span></label>`;
  const group = (legend, body, cls = '') => `<fieldset class="radio-group ${cls}"><legend>${legend}</legend><div class="radio-options">${body}</div></fieldset>`;
  return `<style>
    .radio-guideline{--radio-primary:#EC6443;--radio-primary-soft:#FFE5E0;--radio-edge:#CCCCCC;--radio-focus:#C4512F}
    .radio-guideline .radio-group{margin:0;min-width:0;border:0;padding:0}.radio-group legend{font-weight:600;font-size:14px;margin-bottom:12px}
    .radio-options{display:flex;flex-wrap:wrap;gap:8px 24px}.radio-option{display:flex;align-items:center;gap:8px;min-height:44px;min-width:44px;cursor:pointer;padding:4px 0;font-size:14px}.radio-option strong{font-weight:500}.radio-option small{display:block;font-size:16px;line-height:1.7;color:#596774;margin-top:3px}.radio-option input{appearance:none;-webkit-appearance:none;width:24px;height:24px;flex:0 0 24px;border:1.5px solid var(--radio-edge);border-radius:50%;background:white;margin:0;display:grid;place-content:center;cursor:inherit}.radio-option input:checked{border-color:var(--radio-primary)}.radio-option input:checked:before{content:'';width:12px;height:12px;border-radius:50%;background:var(--radio-primary)}.radio-option:hover input:not(:disabled){border-color:var(--radio-primary);box-shadow:0 0 0 4px #EC644312}.radio-option:active input:not(:disabled){background:var(--radio-primary-soft)}.radio-option input:focus-visible{outline:2px solid var(--radio-focus);outline-offset:3px}.radio-option:has(input:disabled){cursor:not-allowed;color:#87919B}.radio-option input:disabled{background:#EEF1F4;border-color:#B7C0C9}.radio-option input:disabled:checked:before{background:#9BA8B4}.radio-option:has(input:disabled) small{color:#687580}
    .radio-segment .radio-options{gap:8px}.radio-segment .radio-option{padding:8px 16px;border:1px solid #CBD3DC;border-radius:999px;background:white}.radio-segment .radio-option:has(input:checked){background:var(--radio-primary-soft);border-color:var(--radio-primary);color:#C4512F}
    .radio-table{border-collapse:collapse;width:100%;font-size:13px;line-height:1.7;min-width:570px}.radio-table th,.radio-table td{text-align:left;padding:14px 18px;border-bottom:1px solid #E1E7EE;vertical-align:top}.radio-table th{font-weight:600;color:#596774;background:#FBF6F5}.radio-table tr:last-child td{border-bottom:0}.radio-example{padding:24px;border:1px solid #DFE6EF;border-radius:28px;background:rgba(255,255,255,.7)}.radio-note{font-size:13px;line-height:1.8;color:#596774;margin-top:16px}.radio-guideline section{scroll-margin-top:24px}.radio-state-hover input{border-color:var(--radio-primary);box-shadow:0 0 0 4px rgba(255,144,75,.5)}.radio-state-pressed input{background:rgba(255,144,75,.5)}
    @media(max-width:600px){.radio-example{padding:16px}.radio-segment .radio-options{flex-direction:column}.radio-segment .radio-option{width:100%}.radio-option{min-height:48px}.radio-group legend{line-height:1.7}}
    @media(forced-colors:active){.radio-option input{appearance:auto}.radio-option input:checked:before{display:none}}
    </style><div class="radio-guideline">
    <section class="mb-8"><h1 class="text-4xl md:text-5xl font-bold mb-5 text-gray-900">${t('单选框','Radio Button')}</h1><p class="text-lg text-gray-900 leading-8">${t('在一组互斥选项中选择一项。让当前选择清晰可见，让每次设置变化可理解、可确认。','Select one option from a mutually exclusive group. Make the current choice visible and every setting change understandable and confirmable.')}</p></section>
    <section id="usage" class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${t('何时使用','When to use')}</h2><p class="text-sm text-gray-600 leading-6">${t('选项必须属于同一维度，且彼此互斥。建议直接展示 2–5 项，方便比较；超过 5 项或名称较长时，优先评估选择器或独立选择页。','Options must describe the same dimension and be mutually exclusive. Prefer 2–5 visible choices for comparison; evaluate a picker or dedicated selection page for longer lists or labels.')}</p></section>
    ${section('states',t('状态与样式','States and styles'),t('选中状态和可用状态分别表达。单选框没有半选态，也不能通过再次点击清空；需要“无”时将其设为明确选项。','Represent selection and availability independently. Radio buttons have no indeterminate state and cannot be cleared by clicking again; provide an explicit “None” option when needed.'),`<div class="grid md:grid-cols-3 gap-4">${[
      [t('默认','Default'),'',''],[t('选中','Selected'),'checked',''],[t('悬停示意','Hover illustration'),'','radio-state-hover'],[t('按下示意','Pressed illustration'),'checked','radio-state-pressed'],[t('禁用未选','Disabled, unselected'),'disabled',''],[t('禁用已选','Disabled, selected'),'checked disabled','']
    ].map(([label,attrs,cls],i)=>`<div class="radio-example ${cls}">${group(label,option('state-'+i,'sample',t('示例选项','Example option'),'',attrs))}</div>`).join('')}</div><p class="radio-note">${t('悬停、按下可根据实际场景选用。错误提示放在组下方，说明如何修正；运行锁定需保留已选内点与当前值。','Hover and pressed states may be used based on the actual scenario. Place actionable errors below the group. Preserve the selected dot and value when locked during operation.')}</p>`)}
    ${section('variants',t('类型与交互','Variants and interactions'),'',`
      <div class="grid lg:grid-cols-2 gap-6"><article class="radio-example"><h3 class="font-semibold mb-2">${t('基础单选','Basic radio')}</h3><p class="text-sm text-gray-600 leading-6 mb-5">${t('短标签横排；整段文字与圆点共同构成点击区域。','Arrange short labels horizontally. The label and indicator share one click target.')}</p>${group(`<span class="sr-only">${t('漂洗次数','Rinse count')}</span>`,option('rinse','1',t('1 次','1 rinse'))+option('rinse','2',t('2 次','2 rinses'),'','checked')+option('rinse','3',t('3 次','3 rinses')))}</article>
      <article class="radio-example"><h3 class="font-semibold mb-2">${t('按钮式单选','Button-style radio')}</h3><p class="text-sm text-gray-600 leading-6 mb-5">${t('用于短小、同等权重的档位；保持单选语义，窄屏改为纵排。','For short, equal-priority settings. Preserve radio semantics and stack on narrow screens.')}</p>${group(`<span class="sr-only">${t('空调风速','AC fan speed')}</span>`,['auto','low','mid','high'].map((v,i)=>option('fan',v,[t('自动','Auto'),t('低','Low'),t('中','Medium'),t('高','High')][i],'',i===0?'checked':'')).join(''),'radio-segment')}</article></div>`)}
    ${section('anatomy',t('组成与尺寸','Anatomy and dimensions'),t('结构由组标题、圆形指示器、选项标签、可选说明和交互热区组成。说明与标签左对齐，多行内容顶对齐；热区之间不得重叠。','A group title, circular indicator, label, optional description, and hit target form the component. Align descriptions with labels and top-align multiline options; hit targets must not overlap.'),table([t('要素','Element'),t('尺寸规格','Size specification'),t('应用规则','Rule')],[
      [t('指示器','Indicator'),t('外圈：24 × 24 dp；选中内点：12 × 12 dp','Outer circle: 24 × 24 dp; selected dot: 12 × 12 dp'),t('选中状态使用实心圆点，避免用对勾替代，以免与复选框的多选语义混淆。','Use a solid dot for the selected state. Avoid replacing it with a checkmark, which may be confused with the multi-select meaning of checkboxes.')],
      [t('标签与说明','Label and helper'),t('标签字号：24 dp；说明字号：16 dp','Label type: 24 dp; helper type: 16 dp'),t('TFT 建议标签字号不小于 16 dp，远距场景按真实屏幕验证可读性。','Prefer label type of at least 16 dp on TFT; verify readability at the actual viewing distance.')],    ]))}
    ${section('behavior',t('交互与反馈规则','Interaction and feedback'),t('明确选择结果的生效时机，并让界面状态与设备真实状态保持一致。','Make the effective timing clear and keep the interface aligned with the device’s actual state.'),rules([
      [t('选择切换','Changing selection'),t('选择新选项时立即取消同组旧选项；再次点击当前项保持选中，不提供取消选中的空状态。','Selecting a new option immediately clears the previous one. Clicking the current option keeps it selected; do not create an empty state by deselection.')],
      [t('生效方式','When changes apply'),t('低风险设置可选择后立即生效；启动程序或高风险操作必须通过独立按钮确认。页面需明确说明采用哪种方式。','Low-risk settings may apply on selection. Starting a program or high-risk action requires a separate confirmation button. State the chosen behavior clearly.')],
      [t('同步反馈','Synchronization feedback'),t('选择后立即更新界面；设备响应超过 300 ms 时显示“正在应用”并阻止重复操作。成功后确认结果，失败则恢复原值并说明原因。','Update the interface immediately. If the device takes over 300 ms, show “Applying” and block repeated input. Confirm success; on failure, restore the previous value and explain why.')],
      [t('不可用状态','Unavailable states'),t('离线、童锁或运行限制导致选项不可用时，保留其位置并说明原因。当前选择失效时要求用户重新选择，不自动替换。','When offline, locked, or runtime constraints make an option unavailable, keep it visible and explain why. If the current value becomes invalid, request a new choice instead of replacing it automatically.')]
    ]))}
    <section class="grid md:grid-cols-2 gap-8 mb-10"><article class="bg-white/60 p-8 md:p-10 rounded-[28px]" style="border:2px solid #3BD08D;"><h2 class="text-xl font-bold text-gray-900 mb-5">${t('推荐','Do')}</h2><ul class="space-y-3">${list([
      t('同组只放同一维度且彼此互斥的选项','Keep each group to one dimension of mutually exclusive options'),
      t('保留当前选中项，并直接说明禁用原因','Preserve the current selection and explain disabled options directly'),
      t('使用独立按钮启动程序或提交设置','Use a separate button to start a program or submit settings')
    ],true)}</ul></article><article class="bg-white/60 p-8 md:p-10 rounded-[28px]" style="border:2px solid #F52828;"><h2 class="text-xl font-bold text-gray-900 mb-5">${t('避免','Avoid')}</h2><ul class="space-y-3">${list([
      t('将程序、温度和附加功能混在同一组','Mix programs, temperatures, and optional features in one group'),
      t('点击选项后立即启动高风险设备任务','Start a high-risk device task immediately after selection'),
      t('使用半选态或无提示地替换用户选择','Use an indeterminate state or silently replace the user’s choice')
    ],false)}</ul></article></section></div>`;
}

/* =========================================================
   复选框
   ========================================================= */
function renderCheckboxGuideline(language) {
  const zh = language === 'zh';
  const t = (cn, en) => zh ? cn : en;
  const section = (id, title, intro, body) => `<section id="${id}" class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold mb-3 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${title}</h2>${intro ? `<p class="text-sm text-gray-600 leading-7${body ? ' mb-6' : ''}">${intro}</p>` : ''}${body}</section>`;
  const list = (items, good = true) => radioList(items, good);
  const rules = rows => `<ul class="mt-8 divide-y divide-gray-200/80">${rows.map(([title, body]) => `<li class="grid md:grid-cols-[140px_minmax(0,1fr)] gap-2 md:gap-6 py-5 first:pt-0 last:pb-0"><h3 class="text-sm font-semibold text-gray-900">${title}</h3><p class="text-[13px] text-gray-600 leading-6 xl:whitespace-nowrap">${body}</p></li>`).join('')}</ul>`;
  const table = (headers, rows) => `<div class="overflow-x-auto rounded-3xl border border-gray-200 bg-white/65"><table class="check-table"><thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  const option = (name, value, label, desc = '', attrs = '') => `<label class="check-option"><input type="checkbox" name="${name}" value="${value}" ${attrs}><span><strong>${label}</strong>${desc ? `<small>${desc}</small>` : ''}</span></label>`;
  const group = (legend, body, cls = '') => `<fieldset class="check-group ${cls}"><legend>${legend}</legend><div class="check-options">${body}</div></fieldset>`;
  return `<style>
    .check-guideline{--check-primary:#EC6443;--check-primary-soft:#FFE5E0;--check-edge:#CCCCCC;--check-focus:#C4512F}
    .check-guideline .check-group{margin:0;min-width:0;border:0;padding:0}.check-group legend{font-weight:600;font-size:14px;margin-bottom:12px}
    .check-options{display:flex;flex-wrap:wrap;gap:8px 24px}.check-option{display:flex;align-items:center;gap:8px;min-height:44px;min-width:44px;cursor:pointer;padding:4px 0;font-size:14px}.check-option strong{font-weight:500}.check-option small{display:block;font-size:12px;line-height:1.7;color:#596774;margin-top:3px}.check-option input{appearance:none;-webkit-appearance:none;width:24px;height:24px;flex:0 0 24px;box-sizing:border-box;border:1.5px solid var(--check-edge);border-radius:8px;background:white;margin:0;display:inline-flex;align-items:center;justify-content:center;cursor:inherit;padding:0}.check-option input:checked{background:var(--check-primary);border-color:var(--check-primary)}.check-option input:checked:before{content:'';width:10px;height:6px;border-radius:0;border-left:2px solid white;border-bottom:2px solid white;transform:translateY(-1px) rotate(-45deg);background:transparent}.check-option input:indeterminate{background:var(--check-primary);border-color:var(--check-primary)}.check-option input:indeterminate:before{content:'';width:10px;height:2px;background:white;border:0;border-radius:0;transform:none}.check-option:hover input:not(:disabled){border-color:var(--check-primary);box-shadow:0 0 0 4px #EC644312}.check-option:active input:not(:disabled){background:var(--check-primary-soft)}.check-option input:focus-visible{outline:2px solid var(--check-focus);outline-offset:3px}.check-option:has(input:disabled){cursor:not-allowed;color:#87919B}.check-option input:disabled{background:#EEF1F4;border-color:#B7C0C9}.check-option input:disabled:checked{background:#B7C0C9}.check-option input:disabled:checked:before{background:transparent}.check-option input:disabled:indeterminate{background:#B7C0C9;border-color:#B7C0C9}.check-option input:disabled:indeterminate:before{background:white}.check-option:has(input:disabled) small{color:#687580}
    .check-vertical .check-options,.check-cards .check-options{flex-direction:column;gap:8px}.check-cards .check-option{padding:16px;border:1px solid #CBD3DC;border-radius:12px;align-items:flex-start;background:white;gap:12px}.check-cards input{margin-top:2px}.check-cards .check-option:has(input:checked){border-color:var(--check-primary);background:#FFE5E0}.check-segment .check-options{gap:8px}.check-segment .check-option{padding:8px 16px;border:1px solid #CBD3DC;border-radius:999px;background:white}.check-segment .check-option:has(input:checked){background:var(--check-primary-soft);border-color:var(--check-primary);color:#C4512F}
    .check-table{border-collapse:collapse;width:100%;font-size:13px;line-height:1.7;min-width:570px}.check-table th,.check-table td{text-align:left;padding:14px 18px;border-bottom:1px solid #E1E7EE;vertical-align:top}.check-table th{font-weight:600;color:#596774;background:#FBF6F5}.check-table tr:last-child td{border-bottom:0}.check-example{padding:24px;border:1px solid #DFE6EF;border-radius:28px;background:rgba(255,255,255,.7)}.check-note{font-size:13px;line-height:1.8;color:#596774;margin-top:16px}.check-action{background:var(--check-primary);color:white;border:0;border-radius:999px;padding:12px 24px;min-height:44px;font-weight:600;cursor:pointer}.check-action:focus-visible{outline:2px solid var(--check-focus);outline-offset:3px}.check-action:disabled{background:#CBD3DC;color:#596774;cursor:not-allowed}.check-guideline section{scroll-margin-top:24px}.check-state-hover input{border-color:var(--check-primary);box-shadow:0 0 0 4px rgba(255,144,75,.5)}.check-error{color:#999999;font-size:13px;margin-top:12px}.check-invalid .check-option input{border-color:#F23D3D}.check-summary{padding:12px 16px;border-radius:12px;background:#FFE5E0;color:#C4512F;font-size:13px;line-height:1.8;margin-top:16px}.check-parent{padding-bottom:12px;margin-bottom:12px}
    @media(max-width:600px){.check-example{padding:16px}.check-segment .check-options{flex-direction:column}.check-segment .check-option{width:100%}.check-option{min-height:48px}.check-group legend{line-height:1.7}}
    @media(forced-colors:active){.check-option input{appearance:auto}.check-option input:checked:before,.check-option input:indeterminate:before{display:none}}
    #layout h3,#layout .check-option strong{font-weight:400}#layout .check-group legend{font-weight:400;color:#999999}
    #anatomy .check-table th:nth-child(2),#anatomy .check-table td:nth-child(2){white-space:nowrap}
    </style><div class="check-guideline">
<section class="mb-8"><h1 class="text-4xl md:text-5xl font-bold mb-5 text-gray-900">${t('复选框','Checkbox')}</h1><p class="text-lg text-gray-900 leading-8 max-w-3xl">${t('当列表中有多个选项可供选择，且选项之间不互斥，可使用复选框组件。','Use checkboxes when a list offers multiple options that are not mutually exclusive.')}</p></section>
${section('usage',t('何时使用','When to use'),t('用于一组相互独立的可选项。适合附加功能、批量对象和条款确认。选项互斥时使用单选框；状态立即生效时使用开关；触发动作时使用按钮。','Use for independent options such as optional features, bulk targets, or consent. Use radio buttons for mutually exclusive options, switches for immediate state changes, and buttons for actions.'),'')}
${section('states',t('状态与样式','States and styles'),t('复选框包含未选、选中和半选三种状态，均可禁用。半选用于父级选项，表示部分子项已选。','Checkboxes may be unchecked, checked, or partially checked, and each state can be disabled. Partial state belongs to a parent and indicates that some children are selected.'),`<div class="grid grid-cols-2 md:grid-cols-4 gap-4">${[
[t('默认','Default'),'',''],[t('选中','Selected'),'checked',''],[t('半选','Partial'),'data-static-mixed',''],[t('悬停示意','Hover illustration'),'','check-state-hover'],[t('禁用未选','Disabled, unselected'),'disabled',''],[t('禁用已选','Disabled, selected'),'checked disabled',''],[t('禁用半选','Disabled, partial'),'disabled data-static-mixed',''],[t('错误','Error'),'aria-invalid="true"','check-invalid']
].map(([label,attrs,cls],i)=>`<div class="check-example ${cls}">${group(label,option('check-state-'+i,'sample',t('示例选项','Example option'),'',attrs))}</div>`).join('')}</div><p class="check-note">${t('禁用时保留对勾或横线；必选组未选择任何项时，显示错误状态并提示“请至少选择一项”。','Keep the checkmark or dash when disabled. If a required group has no selection, show an error state and the message “Select at least one option”.')}</p>`)}
${section('anatomy',t('组成与尺寸','Anatomy and dimensions'),t('复选框由方形指示器、标签、可选说明与交互热区组成。组标题说明任务和数量限制；多行标签顶对齐，说明与文字左对齐。','A square indicator, label, optional description, and hit target form the checkbox. Group titles explain the task and selection limits. Top-align multiline content and align descriptions with labels.'),table([t('要素','Element'),t('尺寸规格','Dimensions'),t('应用规则','Rule')],[
[t('指示器','Indicator'),t('方框：24 × 24 dp；圆角：8 dp','Box: 24 × 24 dp; corner radius: 8 dp'),t('选中用对勾，半选用横线；保持方形轮廓，避免与圆形单选框混淆。','Use a checkmark for selection and a dash for partial selection. Keep a square outline to distinguish it from radios.')],
[t('标签 / 说明','Label / description'),t('标签字号：24 dp；说明字号：16 dp','Label font size: 24 dp; description font size: 16 dp'),t('TFT 标签建议不小于 16 dp；关键条件不能只放在难以辨认的小字中。','Prefer TFT labels at least 16 dp; essential conditions must remain readable.')],
[t('触控热区','Touch target'),t('最小热区：44 × 44 dp','Minimum target: 44 × 44 dp'),t('家电建议高度 48–56 dp；硬件按像素密度换算，热区之间不得重叠。','Prefer 48–56 dp height on appliances; convert for hardware density and avoid overlapping targets.')],
]))}
${section('layout',t('组件布局','Component layout'),'',`
<div class="space-y-8 mt-6"><div><h3 class="font-normal mb-3">${t('对齐方式','Alignment')}</h3><p class="text-sm text-gray-600 leading-7 mb-5">${t('同组复选框保持统一排列。短标签可横向排布；空间有限或标签较长时，优先纵向排布。','Use a consistent direction within each group. Arrange short labels horizontally; prefer vertical layout when space is limited or labels are longer.')}</p><div class="grid lg:grid-cols-2 gap-6"><div class="check-example">${group(t('水平排列','Horizontal'),[1,2,3].map(i=>option('layout-horizontal',String(i),t('选项'+i,'Option '+i))).join(''))}</div><div class="check-example">${group(t('垂直排列','Vertical'),[1,2,3].map(i=>option('layout-vertical',String(i),t('选项'+i,'Option '+i))).join(''),'check-vertical')}</div></div></div>
<div><h3 class="font-normal mb-3">${t('复选框组','Checkbox group')}</h3><p class="text-sm text-gray-600 leading-7 mb-5">${t('全选独占一行，子项在下一行横向排列。全选可选中或清空所有子项；仅部分子项选中时，全选显示半选状态。','Place Select all on its own row and arrange children horizontally below. Select all checks or clears every child; it shows partial state when only some children are checked.')}</p><div class="check-example"><fieldset class="check-group" aria-label="${t('复选框组','Checkbox group')}">${option('layout-parent','all',t('全选','Select all'),'','id="layout-parent"')}<div class="check-options mt-2">${[1,2,3,4].map(i=>option('layout-child',String(i),t('选项'+i,'Option '+i),'',i===1?'checked':'')).join('')}</div></fieldset></div></div></div>`)}
${section('selection',t('全选与数量规则','Select-all and count rules'),'',rules([
[t('计算半选','Compute partial selection'),t('可操作项中：0 项为未选、全部为选中、部分为半选；点击全选可选中或清空全部可操作项。','Among available items: none is unchecked, all is checked, and some is partial; Select all toggles every available item.')],
[t('禁用与范围','Disabled items and scope'),t('禁用项不参与全选；保留其已有状态并说明原因。没有可操作项时禁用全选。','Select all ignores disabled items; preserve their state and explain why. Disable Select all when no item is available.')],
[t('数量限制','Selection limits'),t('普通附加项可全部不选；有数量限制时预先说明，超限后保留选择并提示修正。','Optional extras may remain empty; state limits in advance, preserve invalid choices, and prompt users to correct them.')],
[t('动态内容','Dynamic content'),t('刷新或筛选后重新计算半选态；全选范围保持可见，新项目不自动选中，失效项目提示复核。','Recompute partial state after refresh or filtering; keep scope visible, leave new items unchecked, and flag unavailable items.')]
]))}
<section class="grid md:grid-cols-2 gap-8 mb-10"><article class="bg-white/60 p-8 md:p-10 rounded-[28px]" style="border:2px solid #3BD08D;"><h2 class="text-xl font-bold text-gray-900 mb-5">${t('推荐','Do')}</h2><ul class="space-y-3">${list([
  t('将可独立组合的功能作为选项','Use options for independently combinable features'),
  t('用半选状态表示组内部分选中','Use partial state when some group items are selected'),
  t('明确全选范围、数量限制与禁用原因','Explain select-all scope, selection limits, and disabled reasons')
], true)}</ul></article><article class="bg-white/60 p-8 md:p-10 rounded-[28px]" style="border:2px solid #F52828;"><h2 class="text-xl font-bold text-gray-900 mb-5">${t('避免','Avoid')}</h2><ul class="space-y-3">${list([
  t('用复选框选择互斥程序','Use checkboxes for mutually exclusive programs'),
  t('默认勾选高能耗附加功能','Preselect energy-intensive extras'),
  t('用半选表示待执行，或通过全选修改禁用项','Use partial state for pending actions or change disabled items via Select all')
], false)}</ul></article></section>
</div>`;
}

function initCheckboxExamples(root) {
  const parent = root.querySelector('#layout-parent');
  const children = [...root.querySelectorAll('input[name="layout-child"]')];
  if (parent && children.length) {
    const updateParent = () => {
      const selected = children.filter(input => input.checked).length;
      parent.checked = selected === children.length;
      parent.indeterminate = selected > 0 && selected < children.length;
    };
    parent.addEventListener('change', () => {
      children.forEach(input => { input.checked = parent.checked; });
      updateParent();
    });
    children.forEach(input => input.addEventListener('change', updateParent));
    updateParent();
  }
  root.querySelectorAll('[data-static-mixed]').forEach(input => {
    input.indeterminate = true;
    input.addEventListener('change', () => {
      input.checked = false;
      input.indeterminate = true;
    });
  });
}

/* =========================================================
   选择器（滚轮 / 下拉共用）
   ========================================================= */
function renderSelectGuideline(language) {
  const zh = language === 'zh';
  const copy = zh ? {
    title: '选择器', intro: '用于在一组选项中选择一个或多个值，常用于表单填写和数据筛选。',
    useTitle: '何时使用', useBody: '选项多于 5 项、需要节省纵向空间，或需要搜索时使用选择器。2–5 个互斥选项优先直接使用单选框；连续数值使用滑杆或滚轮选择器；立即开启或关闭设置使用开关。',
    decision: [['2–5 项','单选框','选项直接可见，比较成本最低'],['6–20 项','单选选择器','默认显示当前值，展开后浏览'],['20 项以上','可搜索选择器','搜索与最近使用项帮助定位'],['连续数值','滑杆 / 滚轮','如温度、时长、风量档位']],
    structureTitle: '组件构成', structureIntro: '选择器由文本标签、选择框和下拉面板组成。', structureParts: [['文本标签','说明选择对象'],['选择框','承载当前值或占位信息，并提供展开入口'],['下拉面板','承载可供选择的选项']],
    typeTitle: '组件类型', typeIntro: '根据选项数量、是否允许多选以及是否需要搜索选择合适的组件类型。', single: '单选', singleDesc: '从程序、模式、房间等列表选择一个值；选中后关闭浮层。', multiple: '多选', multipleDesc: '仅用于可并存的属性，如消息类型或设备筛选；选择后即时更新已选内容。', search: '搜索', searchDesc: '选项超过 20 项或用户已知名称时启用；支持名称、别名与型号关键词。', grouped: '分组', groupedDesc: '按空间、产品品类或功能归类；分组标题不可选择。',
    anatomyTitle: '组件规格', anatomyRule: '以 TFT 触控屏为默认载体。根据界面密度、观看距离和操作优先级，在小号、常规、大号三种规格中选择。', label: '字段标签', value: '当前值', arrow: '展开图标', support: '辅助信息', option: '选项行', selected: '选中标记',
    dimension: '规格', fieldHeight: '选择框高度', optionHeight: '选项行高', target: '最小热区', panel: '适用场景', tft: '小号', narrow: '常规', remote: '大号',
    tftRule: '紧凑型 TFT 界面与次级设置', narrowRule: '常规 TFT 触控界面的默认规格', remoteRule: '远距离观看或高优先级选择',
    statesTitle: '状态示例', default: '默认', open: '展开', focus: '聚焦', disabled: '禁用', loading: '加载中', error: '错误', empty: '无结果', stateRule: '展开后高亮当前值；焦点态必须可由旋钮、遥控器和键盘识别。加载、空结果和错误应出现在列表区域，不让旧数据伪装成实时结果。',
    dataTitle: '设备状态与安全', dataItems: ['首次进入显示设备真实值，不使用未经确认的界面默认值覆盖设备。','设备离线时允许查看当前值，但禁止提交需要联网的改变，并提供重新连接路径。','运行程序、温度上限、童锁等受条件约束的选项，应在选项旁解释限制。','跨 App 与设备屏操作时，以最新设备状态为准；发生冲突时明确提示值已变化。'],
    contentTitle: '内容与排序', contentItems: ['使用用户熟悉的产品语言，如“强力洗”“冷藏室”，避免内部代码。','按使用频率或自然顺序稳定排列；危险选项不放在首项，也不随个性化排序移动。','选项名称尽量单行；必须补充说明时使用两行列表，不截断关键差异。','超过 8 项可分组，超过 20 项优先提供搜索；最近使用项最多 3 个且不得改变主列表顺序。'],
    doTitle: '推荐', dontTitle: '避免', doItems: ['默认回显设备当前值','短列表直接展示，长列表再搜索','保持选项顺序与关键状态位置稳定'], dontItems: ['用占位文字替代永久标签','加载失败后继续展示旧值且不提示','在小屏上压缩出多层悬浮菜单'], done: '完成', choose: '选择模式', noResult: '未找到相关模式', sync: '设备同步中…'
  } : {
    title: 'Select', intro: 'Choose one or more values from a set of options, commonly used in forms and data filtering.',
    useTitle: 'When to use', useBody: 'Use Select for more than five options, constrained vertical space, or searchable lists. Show 2–5 mutually exclusive choices as radio buttons; use a slider or wheel for continuous values and a switch for immediate on/off settings.',
    decision: [['2–5 options','Radio buttons','Keep every option visible for comparison'],['6–20 options','Single Select','Show the current value; browse when opened'],['20+ options','Searchable Select','Search and recent items aid retrieval'],['Continuous values','Slider / wheel','For temperature, duration, or level']],
    structureTitle: 'Component anatomy', structureIntro: 'A Select consists of a text label, selection field, and dropdown panel.', structureParts: [['Text label','Identifies the choice'],['Selection field','Contains the current value or placeholder and opens the panel'],['Dropdown panel','Contains the available options']],
    typeTitle: 'Component types', typeIntro: 'Choose a type according to option count, whether multiple selection is allowed, and whether search is needed.', single: 'Single select', singleDesc: 'Choose one program, mode, or room; close after selection.', multiple: 'Multiple select', multipleDesc: 'Only for attributes that can coexist; update selected values immediately.', search: 'Search', searchDesc: 'Use above 20 options or when a name is known; match names, aliases, and model terms.', grouped: 'Grouped', groupedDesc: 'Group by room, product, or function; group labels are not selectable.',
    anatomyTitle: 'Component specifications', anatomyRule: 'Use TFT touchscreen as the default surface. Choose small, default, or large according to interface density, viewing distance, and priority.', label: 'Field label', value: 'Current value', arrow: 'Disclosure icon', support: 'Supporting information', option: 'Option row', selected: 'Selected mark',
    dimension: 'Size', fieldHeight: 'Field height', optionHeight: 'Option row', target: 'Minimum target', panel: 'Use', tft: 'small', narrow: 'default', remote: 'large',
    tftRule: 'Compact TFT interfaces and secondary settings', narrowRule: 'Default for regular TFT touch interfaces', remoteRule: 'Distance viewing or high-priority selection',
    statesTitle: 'State examples', default: 'Default', open: 'Open', focus: 'Focused', disabled: 'Disabled', loading: 'Loading', error: 'Error', empty: 'No results', stateRule: 'Highlight the current value when opened. Focus must work for knob, remote, and keyboard input. Show loading, empty, and error states inside the list so stale data is not mistaken for live data.',
    dataTitle: 'Device state & safety', dataItems: ['Show the actual device value on entry; never overwrite it with an unverified UI default.','When offline, allow reading the current value but block changes that need connectivity and offer reconnection.','Explain constraints beside options such as running programs, temperature limits, and Child lock.','Across app and device screen, prefer the newest device state and clearly flag conflicts.'],
    contentTitle: 'Content & ordering', contentItems: ['Use product language people recognize, not internal codes.','Order by frequency or a stable natural sequence; never move hazardous choices through personalization.','Keep labels to one line when possible. Use a two-line row when supporting text is needed; do not truncate key differences.','Group beyond 8 options and add search beyond 20. Show at most three recent items without changing the main order.'],
    doTitle: 'Do', dontTitle: 'Avoid', doItems: ['Reflect the current device value','Show short lists; search long lists','Keep ordering and critical state positions stable'], dontItems: ['Replace a persistent label with placeholder text','Silently keep stale values after a load failure','Compress nested floating menus onto small screens'], done: 'Done', choose: 'Choose mode', noResult: 'No matching mode', sync: 'Syncing with device…'
  };
  const list = (items, good = true) => {
    return items.map(item => {
      const icon = good
        ? `<svg class="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#3BD08D" stroke-width="1.5"/><path d="M6.5 10.2l2.4 2.4 4.6-4.8" stroke="#3BD08D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
        : `<svg class="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#F52828" stroke-width="1.5"/><path d="M7 7l6 6M13 7l-6 6" stroke="#F52828" stroke-width="1.5" stroke-linecap="round"/></svg>`;
      return `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="inline-flex shrink-0 mt-[1px]">${icon}</span><span>${item}</span></li>`;
    }).join('');
  };
  const plainList = items => items.map(item => `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400"></span><span>${item}</span></li>`).join('');
  const downIcon = '<svg class="w-4 h-4 text-gray-400 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-select-arrow><path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6"></path></svg>';
  const searchIcon = '<svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"></circle><path stroke-linecap="round" d="M20 20l-3.5-3.5"></path></svg>';
  const cancelIcon = '<svg class="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" d="M6 6l12 12M18 6L6 18"></path></svg>';
  const field = (label, value, attrs = '') => `<div class="relative" ${attrs}><button type="button" data-select-trigger aria-expanded="false" class="w-full min-h-11 px-4 rounded-full border border-gray-300 bg-white flex items-center justify-between text-left outline-none focus:border-[#EC6443] focus:ring-2 focus:ring-[#FFE5E0]"><span data-select-value class="text-sm">${value}</span>${downIcon}</button><div data-select-menu class="hidden absolute z-20 left-0 right-0 mt-2 rounded-[28px] border border-gray-200 bg-white shadow-xl p-2"><button class="w-full px-3 py-3 rounded-full text-sm text-left hover:bg-[#FFF6F3]" data-select-option>${zh ? '选项1' : 'Option 1'}</button><button class="w-full px-3 py-3 rounded-full text-sm text-left hover:bg-[#FFF6F3]" data-select-option>${zh ? '选项2' : 'Option 2'}</button><button class="w-full px-3 py-3 rounded-full text-sm text-left hover:bg-[#FFF6F3]" data-select-option>${zh ? '选项3' : 'Option 3'}</button></div></div>`;
    return `<style>
  .select-check-option{display:flex;align-items:center;gap:8px;min-height:44px;padding:4px 12px;font-size:14px;cursor:pointer;border-radius:8px}
  .select-check-option:hover{background:#FFF6F3}
  .select-check-option input{appearance:none;width:20px;height:20px;flex:0 0 20px;border:1.5px solid #CCCCCC;border-radius:999px;background:white;display:grid;place-content:center;margin:0;cursor:inherit}
  .select-check-option input:checked{background:#EC6443;border-color:#EC6443}
  .select-check-option input:checked:before{content:'';width:10px;height:6px;border-left:2px solid white;border-bottom:2px solid white;transform:translateY(-1px) rotate(-45deg)}
  .select-check-option input:focus-visible{outline:2px solid #C4512F;outline-offset:3px}
  @media(forced-colors:active){.select-check-option input{appearance:auto}.select-check-option input:checked:before{display:none}}
  </style><section class="mb-12"><h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">${copy.title}</h1><p class="text-lg text-gray-900 max-w-4xl leading-relaxed">${copy.intro}</p></section>
  <section class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.useTitle}</h2><p class="text-sm text-gray-600 leading-6">${copy.useBody}</p></section>
  <section class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.structureTitle}</h2><p class="text-sm text-gray-500 leading-6 max-w-4xl mb-7">${copy.structureIntro}</p><div class="grid lg:grid-cols-[minmax(320px,1.05fr)_minmax(320px,.95fr)] gap-8 items-start"><div class="rounded-[28px] border border-[#EEEEEE] bg-white/70 p-5"><p class="text-sm text-[#999999] mb-4">${zh?'字段标签':'Field label'}</p><div class="min-h-12 rounded-full border border-[#EC6443] bg-white px-4 flex items-center gap-3"><span class="flex-1 text-sm">${zh?'选项1':'Option 1'}</span><span class="w-7 h-7 flex items-center justify-center">${cancelIcon}</span><span class="w-7 h-7 flex items-center justify-center">${downIcon}</span></div><div class="mt-2 overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-[0_4px_10px_rgba(16,24,40,.08)]"><div class="px-2 py-2"><div class="flex min-h-11 items-center justify-between rounded-full bg-[#FFE5E0] px-3 text-sm text-[#EC6443]"><span>${zh?'选项1':'Option 1'}</span></div><div class="flex min-h-11 items-center px-3 text-sm">${zh?'选项2':'Option 2'}</div><div class="flex min-h-11 items-center px-3 text-sm">${zh?'选项3':'Option 3'}</div></div></div></div><div class="grid grid-cols-1 gap-12">${copy.structureParts.map((part,index)=>`<div class="min-w-0"><div class="flex items-start gap-3"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFE5E0] text-xs font-semibold text-[#EC6443]">${index+1}</span><div><h3 class="text-sm font-semibold text-gray-900">${part[0]}</h3><p class="mt-1 text-xs leading-5 text-gray-500">${part[1]}</p></div></div></div>`).join('')}</div></div></section>
  <section class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.anatomyTitle}</h2><p class="text-sm text-gray-500 leading-6 max-w-4xl mb-7">${copy.anatomyRule}</p><div class="overflow-x-auto rounded-3xl border border-gray-200 bg-white/65"><table class="w-full min-w-[860px] border-collapse text-[13px] leading-7"><thead><tr class="bg-[#FBF6F5] text-left text-[#596774]"><th class="px-[18px] py-[14px] font-semibold border-b border-[#E1E7EE]">${copy.dimension}</th><th class="px-[18px] py-[14px] font-semibold border-b border-[#E1E7EE]">${copy.fieldHeight}</th><th class="px-[18px] py-[14px] font-semibold border-b border-[#E1E7EE]">${copy.optionHeight}</th><th class="px-[18px] py-[14px] font-semibold border-b border-[#E1E7EE]">${copy.target}</th><th class="px-[18px] py-[14px] font-semibold border-b border-[#E1E7EE]">${copy.panel}</th></tr></thead><tbody>${[[zh?'小号':'Small','48 dp','56 dp','48 × 48 dp',zh?'紧凑型 TFT 界面与次级设置':'Compact TFT interfaces and secondary settings'],[zh?'默认':'Default','64 dp','72 dp','64 × 64 dp',zh?'常规 TFT 触控界面的默认规格':'Default for regular TFT touch interfaces']].map((r,i)=>`<tr class="${i<1?'border-b border-gray-200':''}"><td class="px-[18px] py-[14px] align-top font-semibold">${r[0]}</td><td class="px-[18px] py-[14px] align-top">${r[1]}</td><td class="px-[18px] py-[14px] align-top">${r[2]}</td><td class="px-[18px] py-[14px] align-top">${r[3]}</td><td class="px-[18px] py-[14px] align-top text-[#596774]">${r[4]}</td></tr>`).join('')}</tbody></table></div></section>
  <section class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.statesTitle}</h2><p class="text-sm text-gray-500 leading-6 mb-7 max-w-4xl">${copy.stateRule}</p><div class="grid grid-cols-2 gap-4">${[[copy.default,'border-gray-300',zh?'选项1':'Option 1'],[copy.open,'border-[#EC6443]',zh?'选项2':'Option 2'],[copy.disabled,'border-gray-200 bg-[#F5F5F5] text-[#999999]',zh?'设备运行中':'Appliance running'],[copy.error,'border-red-400',zh?'同步失败':'Sync failed']].map(([n,c,v])=>`<article class="bg-white/60 border border-gray-200 rounded-xl p-4"><p class="text-xs text-gray-500 mb-3">${n}</p><div style="${n===copy.disabled?'background-color:#F5F5F5;color:#999999':''}" class="min-h-11 rounded-full border ${c} bg-white px-3 flex items-center justify-between text-sm"><span>${v}</span>${downIcon}</div></article>`).join('')}</div></section>
  <section class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.typeTitle}</h2><p class="text-sm text-gray-500 mb-7">${copy.typeIntro}</p><div class="grid md:grid-cols-2 gap-5"><article class="rounded-2xl border border-gray-200 bg-white/60 p-5 md:p-6"><div><h3 class="font-bold">${copy.single}</h3><p class="text-xs text-gray-500 mt-2 mb-6 leading-5">${copy.singleDesc}</p></div><div class="min-w-0">${field(zh?'字段标签':'Field label',zh?'选项1':'Option 1')}</div></article><article class="rounded-2xl border border-gray-200 bg-white/60 p-5 md:p-6"><div><h3 class="font-bold">${copy.multiple}</h3><p class="text-xs text-gray-500 mt-2 mb-6 leading-5">${copy.multipleDesc}</p></div><div class="min-w-0"><div class="relative"><button type="button" data-multi-trigger aria-label="${copy.multiple}" aria-expanded="false" class="w-full min-h-11 flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-2 text-left focus:outline-none focus:ring-2 focus:ring-[#FFE5E0]"><span data-multi-value class="flex flex-1 flex-wrap gap-2 text-sm"></span>${downIcon}</button><div data-multi-menu class="hidden absolute z-20 left-0 right-0 mt-2 rounded-[28px] border border-gray-200 bg-white shadow-xl p-2"><fieldset aria-label="${copy.multiple}">${[1,2,3].map(i=>`<label class="select-check-option"><input type="checkbox" data-multi-option value="${i}" ${i<3?'checked':''}><span>${zh?'选项'+i:'Option '+i}</span></label>`).join('')}</fieldset></div></div></div></article><article class="rounded-2xl border border-gray-200 bg-white/60 p-5 md:p-6"><div><h3 class="font-bold">${copy.search}</h3><p class="text-xs text-gray-500 mt-2 mb-6 leading-5">${copy.searchDesc}</p></div><div class="min-w-0"><div><div class="min-h-11 flex items-center gap-2 rounded-full border border-gray-300 bg-white pl-4 pr-2">${searchIcon}<input class="w-full text-sm outline-none placeholder:text-[#CCCCCC]" aria-label="${copy.search}" placeholder="${zh?'请输入':'Please enter'}"><span aria-hidden="true" class="w-8 h-8 shrink-0 flex items-center justify-center">${cancelIcon}</span></div></div></div></article><article class="rounded-2xl border border-gray-200 bg-white/60 p-5 md:p-6"><div><h3 class="font-bold">${copy.grouped}</h3><p class="text-xs text-gray-500 mt-2 mb-6 leading-5">${copy.groupedDesc}</p></div><div class="min-w-0"><div class="rounded-[28px] border border-gray-200 bg-white p-2 text-sm"><div><p class="px-3 py-2 text-xs font-bold text-gray-400">${zh?'分组标题':'Group title'}</p><p class="px-3 py-2">${zh?'选项1':'Option 1'}</p><p class="px-3 py-2">${zh?'选项2':'Option 2'}</p></div></div></div></article></div></section>  <section class="glass-panel p-6 md:p-8 mb-8"><h2 class="text-xl font-bold mb-5 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.dataTitle}</h2><ul class="space-y-3">${plainList(copy.dataItems)}</ul></section>  <section class="grid md:grid-cols-2 gap-8 mb-10"><article class="bg-white/60 p-8 md:p-10 rounded-[28px]" style="border:2px solid #3BD08D;"><h2 class="text-xl font-bold text-gray-900 mb-5">${copy.doTitle}</h2><ul class="space-y-3">${list(copy.doItems)}</ul></article><article class="bg-white/60 p-8 md:p-10 rounded-[28px]" style="border:2px solid #F52828;"><h2 class="text-xl font-bold text-gray-900 mb-5">${copy.dontTitle}</h2><ul class="space-y-3">${list(copy.dontItems,false)}</ul></article></section>`;
}

function initSelectExamples(root) {
  const setOpenState = (trigger, open) => {
    trigger.setAttribute('aria-expanded', String(open));
    trigger.classList.toggle('border-gray-300', !open);
    trigger.classList.toggle('border-[#EC6443]', open);
    trigger.classList.toggle('ring-2', open);
    trigger.classList.toggle('ring-[#FFE5E0]', open);
    trigger.querySelector('[data-select-arrow]')?.classList.toggle('rotate-180', open);
  };
  root.querySelectorAll('[data-select-trigger]').forEach(trigger => trigger.addEventListener('click', () => {
    const host = trigger.closest('[data-select-trigger]')?.parentElement;
    const menu = host?.querySelector('[data-select-menu]');
    if (!menu) return;
    menu.classList.toggle('hidden');
    setOpenState(trigger, !menu.classList.contains('hidden'));
  }));
  root.querySelectorAll('[data-select-option]').forEach(option => option.addEventListener('click', () => {
    const host = option.closest('[data-select-menu]')?.parentElement;
    const value = host?.querySelector('[data-select-value]');
    if (value) value.textContent = option.textContent.trim();
    host?.querySelector('[data-select-menu]')?.classList.add('hidden');
    const trigger = host?.querySelector('[data-select-trigger]');
    if (trigger) setOpenState(trigger, false);
  }));
  root.querySelectorAll('[data-multi-trigger]').forEach(trigger => {
    const host = trigger.parentElement;
    const menu = host.querySelector('[data-multi-menu]');
    const inputs = [...host.querySelectorAll('[data-multi-option]')];
    const summary = host.querySelector('[data-multi-value]');
    const renderValues = () => {
      summary.replaceChildren();
      inputs.filter(input => input.checked).forEach(input => {
        const tag = document.createElement('span');
        tag.className = 'inline-flex items-center gap-1.5 rounded-md bg-gray-100 text-[#1D1D1F] px-2 py-1 text-xs';
        const label = document.createElement('span');
        label.textContent = input.nextElementSibling.textContent;
        const close = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        close.setAttribute('viewBox', '0 0 24 24');
        close.setAttribute('fill', 'none');
        close.setAttribute('stroke', 'currentColor');
        close.setAttribute('stroke-width', '2');
        close.setAttribute('class', 'w-3 h-3 text-gray-400');
        close.innerHTML = '<path stroke-linecap="round" d="M6 6l12 12M18 6L6 18"></path>';
        tag.append(label, close);
        summary.append(tag);
      });
      if (!summary.childNodes.length) {
        summary.textContent = document.documentElement.lang.startsWith('zh') ? '请选择' : 'Please select';
      }
    };
    const close = () => {
      menu.classList.add('hidden');
      setOpenState(trigger, false);
    };
    trigger.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      setOpenState(trigger, !menu.classList.contains('hidden'));
    });
    inputs.forEach(input => input.addEventListener('change', renderValues));
    host.addEventListener('keydown', event => {
      if (event.key === 'Escape') { close(); trigger.focus(); }
    });
    root.addEventListener('click', event => { if (!host.contains(event.target)) close(); });
    renderValues();
  });
}

/* =========================================================
   调控（Slider / Control）—— Leader 样式
   ========================================================= */
function renderSliderGuideline(language) {
  const zh = language === 'zh';
  const copy = zh ? {
    title: '调控',
    intro: '调控用于在有界范围内快速改变温度、时长、风速、亮度等数值。组件需同时表达当前值、可调范围、调节精度与设备反馈。',
    useTitle: '何时使用',
    useBody: '优先根据任务的重要性、调节频率与精度选择形态。连续或分段范围使用滑块；单步微调使用点击调控；核心参数的沉浸式选择使用滚动调控。若必须准确输入某个数值，应与数字输入联动。',
    typeTitle: '类型与适用场景',
    anatomyTitle: '组件构成',
    anatomyIntro: '当前值需标明单位，参数名称与可调范围应始终清晰可见。',
    label: '标签', value: '当前值', selected: '已选轨道', rail: '未选轨道', thumb: '滑块', marks: '关键刻度', bubble: '数值气泡',
    sizeTitle: '尺寸与触控热区',
    sizeIntro: '轨道长度随容器伸缩，轨道高度与滑块尺寸固定；视觉尺寸之外应保留不小于 44 × 44 dp 的透明触控热区。',
    sliderControlTitle: '滑块调控',
    slidingControlTitle: '滑动调控',
    small: '小', medium: '中', large: '大', track: '轨道高度', dot: '滑块直径', usage: '建议场景', smallUse: '近距、小型控件区', mediumUse: '常规触控界面', largeUse: '远距或核心调节',
    targetNote: '滑块调控和滑动调控控件可根据屏幕大小和使用场景变长，但不得同比缩放高度。',
    layoutTitle: '方向与布局',
    horizontal: '横向', horizontalDesc: '默认方向，适合宽度充足的页面与卡片。数值从左到右递增；RTL 或业务语义相反时才反向。',
    vertical: '纵向', verticalDesc: '用于窄屏、侧边控制或参数与空间方向一致的场景。数值默认从下向上递增。',
    centerRule: '点击调控与滚动调控作为页面主任务时，置于页面或内容模块的视觉中心。滚动调控以当前值字号为参考单位 a：中心值占 a，相邻值间隔 0.5a，两端箭头与最外侧数值对齐，整体保持对称。',
    behaviorTitle: '交互与反馈',
    behaviorItems: [
      '点击轨道移动到最近合法值；拖动时连续更新界面，按 step 吸附。',
      '拖动期间显示数值气泡；松开后提交设备指令。关键值也应在固定位置同步显示，避免气泡消失后失去结果。',
      '设备响应超过 300 ms 时保留用户目标值并显示同步中；失败时回退到设备真实值并说明原因。',
      '加减按钮每次改变一个步长；长按可连续调整，但应逐步加速且允许随时停止。',
      '最小值、最大值、当前值与单位需提供给辅助技术；范围滑块应分别命名上下限。'
    ],
    demoClickTitle: '点击调控', singleTitle: '滑块调控', iconTitle: '滑动调控', rangeTitle: '范围调控',
    demoClickUse: '适用于按固定步长调整参数数值。单次点击完成一步增减，操作路径短，并立即反馈调整结果。',
    singleUse: '适用于单一连续数值的高频调节。界面应固定显示当前值、单位与范围边界。与滑动调控控件功能一致，可根据屏幕大小进行选择控件样式。',
    iconUse: '适用于单一连续数值的高频调节。界面应显示当前值、单位与范围边界。与滑块调控控件功能一致，可根据屏幕大小进行选择控件样式。',
    rangeUse: '适用于湿度、温区或预约时段等上下限区间选择。两个滑块分别表达最小值与最大值，并保持合理顺序。',
    stateStyleTitle: '状态样式',
    stateStyleIntro: '不同状态的样式不可只通过颜色分辨，需增加文字表示状态，除了置灰不可用状态，其余状态样式与默认样式保持一致，通过文字进行区分。',
    defaultStyle: '默认', pauseStyle: '暂停', stopStyle: '终止', disabledStyle: '置灰',
    defaultStyleDesc: '设备正常运行或参数可调时使用，保留完整主色反馈。',
    pauseStyleDesc: '设备任务暂时停止但允许继续时使用，当前值与位置保持不变。',
    stopStyleDesc: '设备任务已终止或调节结果失效时使用，并配合明确的终止说明。',
    disabledStyleDesc: '当前条件下不可调节时使用，保留数值与位置，不响应操作。',
    precisionTitle: '步长、刻度与数值',
    precisionItems: [
      'min 与 max 定义真实设备边界，默认值必须来自设备状态或有明确安全依据。',
      'step 对应设备实际可执行的最小增量；不可展示设备无法达到的精度。',
      'marks 只标记端点、推荐值、阈值或语义转折点；同一轨道建议不超过 5 个可见标签。',
      '数值气泡使用 formatTooltip 补充单位；需要精确输入时显示数字输入，并与滑块双向同步。',
      '范围模式仅用于“选择区间”，不要用两个滑块表示两个无关参数。'
    ],
    doTitle: '推荐', dontTitle: '避免',
    doItems: [
      '显示当前值、单位和边界',
      '让步长匹配设备真实能力',
      '拖动时实时反馈，结束后提交设备'
    ],
    dontItems: [
      '用滑块输入必须精确记忆的数值',
      '刻度标签过密或互相遮挡',
      '用装饰图标替代清晰的参数标签'
    ]
  } : {
    title: 'Control',
    intro: 'Controls quickly change bounded values such as temperature, duration, fan speed, and brightness. They must communicate the current value, range, precision, and device feedback.',
    useTitle: 'When to use',
    useBody: 'Choose a pattern by task importance, frequency, and precision. Use a slider for continuous or stepped ranges, click controls for single-step changes, and scroll controls for immersive selection of primary parameters. Pair with number input when an exact value is required.',
    typeTitle: 'Types and use cases',
    anatomyTitle: 'Component anatomy',
    anatomyIntro: 'A slider includes a label, current value, selected track, rail, thumb, and optional marks. Always include the unit with the current value; labels and bounds must remain understandable without the tooltip.',
    label: 'Label', value: 'Current value', selected: 'Selected track', rail: 'Rail', thumb: 'Thumb', marks: 'Key marks', bubble: 'Value tooltip',
    sizeTitle: 'Size and touch target',
    sizeIntro: 'Track length is fluid while track height and thumb size stay fixed. Add an invisible touch target of at least 44 × 44 dp around the visual thumb.',
    sliderControlTitle: 'Slider control',
    slidingControlTitle: 'Sliding control',
    small: 'Small', medium: 'Medium', large: 'Large', track: 'Track height', dot: 'Thumb diameter', usage: 'Recommended use', smallUse: 'Near-view compact controls', mediumUse: 'Standard touch interfaces', largeUse: 'Distance viewing or primary control',
    targetNote: 'Slider and sliding controls may stretch according to screen size and use case, but their height must not scale proportionally.',
    layoutTitle: 'Orientation and layout',
    horizontal: 'Horizontal', horizontalDesc: 'Default for pages and cards with sufficient width. Values increase left to right unless RTL or domain meaning requires reversal.',
    vertical: 'Vertical', verticalDesc: 'Use for narrow screens, side controls, or when direction maps to the parameter. Values increase bottom to top by default.',
    centerRule: 'Place click and scroll controls at the visual center when they are the primary page task. For scroll controls, use the current-value type size as unit a: the center value occupies a, adjacent spacing is 0.5a, and end arrows align with the outermost values for symmetry.',
    behaviorTitle: 'Interaction and feedback',
    behaviorItems: [
      'Clicking the track moves to the nearest valid value; dragging updates continuously and snaps by step.',
      'Show a value tooltip while dragging and submit the device command on release. Also keep the key value visible outside the tooltip.',
      'If device response exceeds 300 ms, retain the target and show syncing. On failure, return to the real device value and explain why.',
      'Plus and minus change one step. Long press may repeat with gradual acceleration and immediate stopping.',
      'Expose minimum, maximum, current value, and unit to assistive technology; name each range thumb separately.'
    ],
    demoClickTitle: 'Click control', singleTitle: 'Slider control', iconTitle: 'Sliding control', rangeTitle: 'Range control',
    demoClickUse: 'Use for fixed-step adjustment of parameter values. Each click changes one step through a short path and gives immediate feedback.',
    singleUse: 'Use for frequent adjustment of one continuous value. Keep the current value, unit, and bounds visible. It shares the same function as the sliding control; choose the control style based on screen size.',
    iconUse: 'Use for frequent adjustment of one continuous value. Show the current value, unit, and bounds. It shares the same function as the slider control; choose the control style based on screen size.',
    rangeUse: 'Use for lower-and-upper-bound intervals such as humidity, temperature zones, or scheduled periods. Each thumb represents one bound and must keep a reasonable order.',
    stateStyleTitle: 'State styles',
    stateStyleIntro: 'State styles must not be distinguished by color alone; add text to indicate the state. Except for the disabled state, all other state styles stay consistent with the default style and are distinguished by text.',
    defaultStyle: 'Default', pauseStyle: 'Paused', stopStyle: 'Terminated', disabledStyle: 'Disabled',
    defaultStyleDesc: 'Use while the device is running normally or the parameter is adjustable, with full primary-color feedback.',
    pauseStyleDesc: 'Use when a device task is temporarily stopped but can resume. Preserve the current value and position.',
    stopStyleDesc: 'Use when the task has terminated or the adjustment is no longer valid, together with a clear termination message.',
    disabledStyleDesc: 'Use when adjustment is unavailable under current conditions. Preserve the value and position but do not respond to input.',
    precisionTitle: 'Step, marks, and values',
    precisionItems: [
      'min and max reflect real device limits; defaults come from device state or a documented safe choice.',
      'step matches the smallest value the device can actually execute.',
      'marks identify endpoints, recommended values, thresholds, or semantic changes; keep visible labels to about five.',
      'Use formatTooltip to include units. Pair with a number input and keep both values synchronized when precision is required.',
      'Use range mode only for an interval, never for two unrelated parameters.'
    ],
    doTitle: 'Do', dontTitle: 'Avoid',
    doItems: [
      'Show the current value, unit, and bounds',
      'Match the step to actual device capability',
      'Give live feedback and submit on completion'
    ],
    dontItems: [
      'Use a slider for values users must recall exactly',
      'Crowd the rail with overlapping labels',
      'Replace a clear parameter label with a decorative icon'
    ]
  };

  const list = (items, good) => items.map(item => {
    const icon = good
      ? `<svg class="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#3BD08D" stroke-width="1.5"/><path d="M6.5 10.2l2.4 2.4 4.6-4.8" stroke="#3BD08D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
      : `<svg class="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#F52828" stroke-width="1.5"/><path d="M7 7l6 6M13 7l-6 6" stroke="#F52828" stroke-width="1.5" stroke-linecap="round"/></svg>`;
    return `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="inline-flex shrink-0 mt-[1px]">${icon}</span><span>${item}</span></li>`;
  }).join('');

  return `<style>
  .control-size-table { border-collapse:collapse; width:100%; font-size:13px; line-height:1.7; min-width:570px; }
  .control-size-table th,.control-size-table td { text-align:left; padding:14px 18px; border-bottom:1px solid #E1E7EE; vertical-align:top; }
  .control-size-table th { font-weight:600; color:#596774; background:#FBF6F5; }
  .control-size-table tr:last-child td { border-bottom:0; }
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

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.anatomyTitle}</h2>
    <p class="text-sm text-gray-500 leading-6 max-w-4xl mb-7">${copy.anatomyIntro}</p>
    <div class="flex flex-col gap-8">
      <div class="grid grid-cols-2 gap-6">
        ${(zh ? [
          ['标签与当前值','说明调节对象，固定显示当前值与单位。'],
          ['轨道','已选轨道与未选轨道共同表达当前值和可调范围。'],
          ['滑块','标识当前位置，通过拖动调整数值。'],
          ['刻度与数值气泡','按需标记关键数值，并在拖动时反馈当前值。']
        ] : [
          ['Label and current value','Identify the parameter and keep the current value and unit visible.'],
          ['Track','The selected track and rail show the current value and adjustable range.'],
          ['Thumb','Indicates the current position and allows adjustment by dragging.'],
          ['Marks and value tooltip','Optionally mark key values and show the current value while dragging.']
        ]).map((part,index) => `<div class="min-w-0"><div class="flex items-start gap-3"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFE5E0] text-xs font-semibold text-[#EC6443]">${index+1}</span><div><h3 class="text-sm font-semibold text-gray-900">${part[0]}</h3><p class="mt-1 text-xs leading-5 text-gray-500">${part[1]}</p></div></div></div>`).join('')}
      </div>
      <div class="min-w-0 overflow-hidden rounded-[40px] border border-gray-200 bg-white/70 p-5">
        <img src="leader-assets/examples/component/slider/sample.png" alt="${zh ? '滑块调控的标签、当前值、数值气泡、轨道、滑块与范围刻度示例' : 'Slider anatomy showing a label, current value, value tooltip, track, thumb, and range marks'}" class="mx-auto block w-[93.333333%] h-auto">
      </div>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-7 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.typeTitle}</h2>
    <div class="space-y-8">
      ${[
        ['leader-assets/examples/component/slider/number.png', copy.demoClickTitle, copy.demoClickUse, zh ? '数值点击调控示例' : 'Numeric click control example'],
        ['leader-assets/examples/component/slider/thumb.png', copy.singleTitle, copy.singleUse, zh ? '单滑块调控示例' : 'Single-thumb slider example'],
        ['leader-assets/examples/component/slider/drag.png', copy.iconTitle, copy.iconUse, zh ? '拖动滑块调控示例' : 'Drag slider example'],
        ['leader-assets/examples/component/slider/range.png', copy.rangeTitle, copy.rangeUse, zh ? '范围滑块调控示例' : 'Range slider example']
       ].map(([src,title,description,alt]) => `<article class="grid lg:grid-cols-[minmax(360px,520px)_1fr] gap-6 lg:gap-10 items-center"><div class="rounded-[28px] bg-white/70 border border-gray-200 p-5"><img src="${src}" alt="${alt}" width="411.6" class="mx-auto block h-auto w-[93.333333%] max-w-[411.6px]"></div><div><h3 class="text-sm font-bold text-gray-900 mb-2">${title}</h3><p class="text-sm text-gray-600 leading-7">${description}</p></div></article>`).join('')}
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.sizeTitle}</h2>
    <p class="text-sm text-gray-500 leading-6 mb-7">${copy.sizeIntro}</p>

    <!-- 表 1：滑块调控 -->
    <h3 class="text-sm font-bold text-gray-900 mb-3">${copy.sliderControlTitle}</h3>
    <div class="overflow-x-auto rounded-[28px] border border-gray-200 bg-white/65 mb-6">
      <table class="control-size-table">
        <thead><tr>${[zh?'尺寸':'Size', copy.track, copy.dot, copy.usage].map(label => `<th scope="col">${label}</th>`).join('')}</tr></thead>
        <tbody>${[
          [copy.small,'16 dp','32 dp',copy.smallUse],
          [copy.medium,'24 dp','48 dp',copy.mediumUse],
          [copy.large,'32 dp','64 dp',copy.largeUse]
        ].map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>

    <!-- 表 2：滑动调控 -->
    <h3 class="text-sm font-bold text-gray-900 mb-3">${copy.slidingControlTitle}</h3>
    <div class="overflow-x-auto rounded-[28px] border border-gray-200 bg-white/65">
      <table class="control-size-table">
        <thead><tr>${[
          zh?'尺寸':'Size',
          zh?'容器高度':'Container height',
          zh?'滑动高度':'Sliding height',
          zh?'建议场景':'Recommended use'
        ].map(label => `<th scope="col">${label}</th>`).join('')}</tr></thead>
        <tbody>${[
          [copy.small,'80 dp','80 dp',copy.smallUse],
          [copy.medium,'128 dp','128 dp',copy.mediumUse],
          [copy.large,'160 dp','160 dp',copy.largeUse]
        ].map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>

    <p class="mt-6 p-4 rounded-[28px] bg-[#FFF6F3] border border-[#EC6443] text-sm text-gray-700 leading-6">${copy.targetNote}</p>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-6 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.layoutTitle}</h2>
    <div class="grid md:grid-cols-2 gap-4">
      <article class="rounded-[28px] border border-gray-200 bg-white/60 p-5 md:p-6"><h3 class="text-sm font-semibold text-gray-900 mb-2">${copy.horizontal}</h3><p class="text-sm text-gray-600 leading-6">${copy.horizontalDesc}</p></article>
      <article class="rounded-[28px] border border-gray-200 bg-white/60 p-5 md:p-6"><h3 class="text-sm font-semibold text-gray-900 mb-2">${copy.vertical}</h3><p class="text-sm text-gray-600 leading-6">${copy.verticalDesc}</p></article>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.stateStyleTitle}</h2>
    <p class="text-sm text-gray-500 leading-6 mb-7">${copy.stateStyleIntro}</p>
    <div class="grid md:grid-cols-2 gap-4">
      <article class="rounded-[28px] border border-gray-200 bg-white/60 p-5">
        <div class="relative">
          <h3 class="absolute left-0 top-0 text-xs font-normal text-gray-500">${copy.defaultStyle}</h3>
          <img src="leader-assets/examples/component/slider/default.png" alt="${zh ? '默认状态示例' : 'Default state example'}" class="mx-auto block h-auto w-full max-w-[411.6px]">
        </div>
      </article>
      <article class="rounded-[28px] border border-gray-200 bg-white/60 p-5 opacity-70">
        <div class="relative">
          <h3 class="absolute left-0 top-0 text-xs font-normal text-gray-500">${copy.disabledStyle}</h3>
          <img src="leader-assets/examples/component/slider/disabled.png" alt="${zh ? '置灰状态示例' : 'Disabled state example'}" class="mx-auto block h-auto w-full max-w-[411.6px]">
        </div>
      </article>
    </div>
  </section>

  <section class="space-y-8 mb-8">
    <article class="glass-panel p-6 md:p-8">
      <h2 class="text-xl font-bold mb-5 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.behaviorTitle}</h2>
      <ul class="space-y-3">${list(copy.behaviorItems, true)}</ul>
    </article>
  </section>

  <section class="grid md:grid-cols-2 gap-8 mb-10">
    <article class="bg-white/60 p-8 md:p-10 rounded-[28px]" style="border:2px solid #3BD08D;">
      <h2 class="text-xl font-bold text-gray-900 mb-5">${copy.doTitle}</h2>
      <ul class="space-y-3">${list(copy.doItems, true)}</ul>
    </article>
    <article class="bg-white/60 p-8 md:p-10 rounded-[28px]" style="border:2px solid #F52828;">
      <h2 class="text-xl font-bold text-gray-900 mb-5">${copy.dontTitle}</h2>
      <ul class="space-y-3">${list(copy.dontItems, false)}</ul>
    </article>
  </section>`;
}

/* =========================================================
   输入框（Text Field / Input）—— Leader 样式
   ========================================================= */
function renderInputGuideline(language) {
  const zh = language === 'zh';
  const copy = zh ? {
    title: '输入框',
    intro: '允许用户输入或编辑文本内容的基本表单组件。可与输入框、搜索框、下拉框、日期选择器等灵活组合使用。',
    useTitle: '何时使用',
    useBody: '根据用户需要提供的内容选择输入类型。已有固定选项时使用选择器；连续范围的快速调节优先使用滑杆或滚轮，需要精确值时再搭配数字输入框。',
    sizeTitle: '组件尺寸',
    sizes: [['小号', 48], ['默认', 64]], 
    sizeRules: [
      '宽度随预期内容设置，确保常用内容可完整展示。',
      '正文建议 24dp 或 16dp，图标建议和文字等高；同一表单保持一致。',
      '标签、辅助文字与容器建议间隔最小 4dp，或以 4 的倍数定义；多行输入按内容向下扩展。'
    ],
    typeTitle: '组件类型',
    typeIntro: '按输入内容与文本长度选择类型，避免让用户承担不必要的输入负担。',
    typeHeaders: ['类型', '输入内容', '适用场景'],
    textTypes: [
      ['单行输入框', '一行自由文本', '设备名称、搜索词；超出宽度时在框内横向滚动'],
      ['多行输入框', '多行自由文本', '备注、问题描述；高度随内容向下扩展']
    ],
    decision: [
      ['自由文本', '文本输入框', '名称、搜索词、备注与问题描述'],
      ['多个自定义值', '标签输入框', '房间别名、关键词和可新增的筛选条件'],
      ['精确数值', '数字输入框', '温度、时长、重量等带范围或单位的值'],
      ['身份校验', '验证码输入框', '4–6 位一次性验证码或 PIN']
    ],
    textTitle: '文本输入框',
    textIntro: '单行、多行及带辅助元素的文本输入样式。',
    tagTitle: '标签输入框',
    tagIntro: '标签的创建、禁用、错误和多行排列样式。',
    numberTitle: '数字输入框',
    numberIntro: '纯数字、带单位、带图标及不同状态的数字输入样式。',
    codeTitle: '验证码输入框',
    codeIntro: '不同位数、分组、掩码及状态的验证码样式。',
    example: '示例',
    default: '常规',
    focused: '聚焦',
    disabled: '置灰',
    error: '错误',
    prefix: '带图标',
    suffix: '带单位',
    pure: '纯输入框',
    multiline: '多行',
    wrapped: '超出时',
    masked: '掩码',
    grouped: '分组',
    fourDigit: '四位',
    sixDigit: '六位',
    nameLabel: '设备名称',
    namePlaceholder: '例如：客厅空调',
    noteLabel: '故障描述',
    notePlaceholder: '描述设备出现的问题',
    tagLabel: '设备标签',
    tagPlaceholder: '输入后按回车',
    tempLabel: '目标温度',
    codeLabel: '验证码',
    codeHint: '请输入短信中的验证码',
    doTitle: '推荐',
    dontTitle: '避免',
    doItems: [
      '标签持续可见，单位与范围明确',
      '使用匹配内容的键盘和输入类型',
      '校验信息说明原因与修正路径'
    ],
    dontItems: [
      '用占位文字代替标签',
      '输入时强制格式化导致光标跳动',
      '仅用红色表达错误或自动覆盖设备值'
    ]
  } : {
    title: 'Input',
    intro: 'A basic form component that allows users to enter or edit text. It can be flexibly combined with input fields, search boxes, dropdowns, date pickers, and other components.',
    useTitle: 'When to use',
    useBody: 'Choose the input type from the content people need to provide. Use Select for predefined options. Prefer sliders or wheels for quick range adjustment and pair them with a number input when precision is needed.',
    sizeTitle: 'Component sizes',
    sizes: [['Small', 48], ['Default', 64]], 
    sizeRules: [
      'Set width for expected content so typical values remain visible.',
      'Use 24dp or 16dp text and match icon height to the text; keep this consistent within a form.',
      'Keep labels and helper text at least 4dp from the container, or use multiples of 4; allow multiline fields to grow.'
    ],
    typeTitle: 'Component types',
    typeIntro: 'Choose a type for the content and text length to keep input effort low.',
    typeHeaders: ['Type', 'Content', 'Use cases'],
    textTypes: [
      ['Single-line input', 'One line of free text', 'Appliance names and search terms; scroll horizontally when full'],
      ['Multiline input', 'Multiple lines of free text', 'Notes and issue descriptions; grow with content']
    ],
    decision: [
      ['Free text', 'Text input', 'Names, search terms, notes, and issue descriptions'],
      ['Custom multiple values', 'Tag input', 'Room aliases, keywords, and user-created filters'],
      ['Precise value', 'Number input', 'Temperature, duration, weight, and bounded values'],
      ['Identity check', 'Verification code', '4–6 digit one-time codes or PINs']
    ],
    textTitle: 'Text input',
    textIntro: 'Single-line, multiline, and text fields with supporting elements.',
    tagTitle: 'Tag input',
    tagIntro: 'Tag creation, disabled, error, and wrapped layouts.',
    numberTitle: 'Number input',
    numberIntro: 'Plain, unit, icon, and state variants for numeric entry.',
    codeTitle: 'Verification code',
    codeIntro: 'Code layouts with different lengths, grouping, masking, and states.',
    example: 'Examples',
    default: 'Default',
    focused: 'Focused',
    disabled: 'Disabled',
    error: 'Error',
    prefix: 'With icon',
    suffix: 'With unit',
    pure: 'Plain input',
    multiline: 'Multiline',
    wrapped: 'Overflow',
    masked: 'Masked',
    grouped: 'Grouped',
    fourDigit: '4 digits',
    sixDigit: '6 digits',
    nameLabel: 'Appliance name',
    namePlaceholder: 'e.g. Living room AC',
    noteLabel: 'Issue description',
    notePlaceholder: 'Describe the appliance issue',
    tagLabel: 'Appliance tags',
    tagPlaceholder: 'Type and press Enter',
    tempLabel: 'Target temperature',
    codeLabel: 'Verification code',
    codeHint: 'Enter the code from the message',
    doTitle: 'Do',
    dontTitle: 'Avoid',
    doItems: [
      'Keep labels visible and units and ranges explicit',
      'Use the keyboard and input type that match the content',
      'Explain validation cause and recovery'
    ],
    dontItems: [
      'Replace labels with placeholders',
      'Force formatting while typing and move the cursor',
      'Communicate errors only with red or overwrite device values'
    ]
  };

  const list = (items, good = true) => {
    return items.map(item => {
      const icon = good
        ? `<svg class="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#3BD08D" stroke-width="1.5"/><path d="M6.5 10.2l2.4 2.4 4.6-4.8" stroke="#3BD08D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
        : `<svg class="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#F52828" stroke-width="1.5"/><path d="M7 7l6 6M13 7l-6 6" stroke="#F52828" stroke-width="1.5" stroke-linecap="round"/></svg>`;
      return `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="inline-flex shrink-0 mt-[1px]">${icon}</span><span>${item}</span></li>`;
    }).join('');
  };

  const plainList = items => items.map(item =>
    `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="mt-[9px] w-1.5 h-1.5 shrink-0 rounded-full bg-gray-400"></span><span>${item}</span></li>`
  ).join('');

  const sample = (name, body) =>
    `<article class="rounded-3xl border border-gray-200 bg-white/60 p-5"><p class="text-xs text-gray-500 mb-3">${name}</p>${body}</article>`;

  const inputBox = (value, classes = 'border-gray-300', prefix = '', suffix = '') =>
    `<div style="${classes.includes('select-disabled-field') ? 'background-color:#F5F5F5;color:#999999' : ''}" class="min-h-11 flex items-center gap-2 rounded-full border ${classes} bg-white px-4 text-sm">${prefix}<span class="flex-1">${value}</span>${suffix}</div>`;

  const codeCells = (length, options = {}) =>
    `<div class="flex items-center gap-2">${Array.from({ length }, (_, i) => `${
      options.separator && i === options.separator
        ? '<span class="w-2 h-px shrink-0 bg-gray-300" aria-hidden="true"></span>'
        : ''
    }<div class="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl border ${
      options.error
        ? 'border-red-400 bg-red-50'
        : options.disabled
          ? 'border-gray-200 bg-[#F5F5F5] text-[#999999]'
          : 'border-gray-300 bg-white'
    } text-lg font-normal fz-lanting-numeral">${
      options.masked
        ? '<span class="w-1 h-1 rounded-full bg-current" aria-hidden="true"></span>'
        : (options.values?.[i] || '')
    }</div>`).join('')}</div>`;

  return `<section class="mb-12">
    <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">${copy.title}</h1>
    <p class="text-lg text-gray-900 max-w-4xl leading-relaxed">${copy.intro}</p>
  </section>
  <hr class="border-t border-black/5 mb-8">

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.useTitle}</h2>
    <p class="text-sm text-gray-600 leading-6 max-w-4xl">${copy.useBody}</p>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-5 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.sizeTitle}</h2>
    <ul class="space-y-2 mb-7 max-w-4xl">${plainList(copy.sizeRules)}</ul>
    <div class="grid md:grid-cols-2 gap-4">
      ${copy.sizes.map(([name, height]) => sample(`${name} · ${height}dp`,
        `<div class="flex items-center" style="height:${height + 24}px"><div style="height:${height}px" class="w-full flex items-center rounded-full border border-gray-300 bg-white px-4 text-sm text-gray-400">${zh ? '请输入内容' : 'Enter text'}</div></div>`
      )).join('')}
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.typeTitle}</h2>
    <p class="text-sm text-gray-500 leading-6 mb-7">${copy.typeIntro}</p>
    <div class="overflow-x-auto rounded-3xl border border-gray-200 bg-white/65">
      <table class="w-full min-w-[860px] border-collapse text-[13px] leading-7">
        <thead>
          <tr class="bg-[#FBF6F5] text-left text-[#596774]">
            ${copy.typeHeaders.map(label => `<th class="px-[18px] py-[14px] font-semibold border-b border-[#E1E7EE]">${label}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${[...copy.textTypes, ...copy.decision.slice(1).map(([content, type, usage]) => [type, content, usage])]
            .map((row, i, arr) => `<tr class="${i < arr.length - 1 ? 'border-b border-gray-200' : ''}">${row.map(cell => `<td class="px-[18px] py-[14px] align-top text-[#1D1D1F]">${cell}</td>`).join('')}</tr>`)
            .join('')}
        </tbody>
      </table>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.textTitle}</h2>
    <p class="text-sm text-gray-500 mb-7">${copy.textIntro}</p>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4 [&>article]:min-h-[168px]">
      ${sample(copy.default, `<div class=""><div class="min-h-11 flex items-center rounded-full border border-gray-300 bg-white pl-4 pr-2 focus-within:border-[#EC6443] focus-within:ring-2 focus-within:ring-[#FFE5E0]"><input id="input-name-demo" data-clearable-input aria-label="${copy.nameLabel}" class="w-full text-sm outline-none bg-transparent" placeholder="${copy.namePlaceholder}"><button type="button" data-clear-input aria-label="${zh ? '清除输入' : 'Clear input'}" class="hidden w-8 h-8 text-gray-500">×</button></div></div>`)}
      ${sample(copy.focused, `<div class="">${inputBox(zh ? '客厅空调' : 'Living room AC', 'border-[#EC6443] ring-2 ring-[#FFE5E0]')}</div>`)}
      ${sample(copy.disabled, `<div class="">${inputBox(zh ? '卧室空调' : 'Bedroom AC', 'border-gray-200 select-disabled-field')}</div>`)}
      ${sample(copy.prefix, `<div class="">${inputBox(zh ? '搜索设备' : 'Search appliances', 'border-gray-300', '<svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"></circle><path stroke-linecap="round" d="M20 20l-3.5-3.5"></path></svg>')}</div>`)}
      ${sample(copy.error, `<div class="">${inputBox(zh ? '名称超过 20 个字符' : 'Name exceeds 20 characters', 'border-red-400')}<p class="mt-2 text-xs text-red-500">${zh ? '请缩短设备名称' : 'Shorten the appliance name'}</p></div>`)}
      ${sample(copy.multiline, `<div class="relative"><textarea id="input-note-demo" data-count-input maxlength="120" rows="3" aria-label="${copy.noteLabel}" class="w-full resize-none rounded-3xl border border-gray-300 bg-white px-4 pt-3 pb-8 text-sm outline-none focus:border-[#EC6443] focus:ring-2 focus:ring-[#FFE5E0]" placeholder="${copy.notePlaceholder}"></textarea><span class="absolute bottom-3 right-3 text-xs text-gray-400"><span data-char-count>0</span>/120</span></div>`)}
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.tagTitle}</h2>
    <p class="text-sm text-gray-500 mb-7">${copy.tagIntro}</p>
    <div class="grid md:grid-cols-2 gap-4">
      ${sample(copy.default, `<div data-tag-field class="h-11 flex items-center gap-2 overflow-hidden rounded-full border border-gray-300 bg-white px-3 focus-within:border-[#EC6443] focus-within:ring-2 focus-within:ring-[#FFE5E0]"><span data-tag class="inline-flex items-center gap-1.5 rounded-full bg-[#FFF6F3] text-[#EC6443] px-2 py-1 text-xs">${zh ? '客厅' : 'Living room'}<button type="button" data-remove-tag class="text-[#EC6443]">×</button></span><span data-tag class="inline-flex items-center gap-1.5 rounded-full bg-[#FFF6F3] text-[#EC6443] px-2 py-1 text-xs">${zh ? '常用' : 'Favorite'}<button type="button" data-remove-tag class="text-[#EC6443]">×</button></span><input id="input-tag-demo" data-tag-input aria-label="${copy.tagLabel}" class="min-w-[110px] flex-1 bg-transparent py-1.5 text-sm outline-none" placeholder="${copy.tagPlaceholder}"></div>`)}
      ${sample(copy.wrapped, `<div class="h-11 flex items-center gap-2 overflow-hidden rounded-full border border-gray-300 bg-white px-3"><span class="shrink-0 rounded-full bg-[#FFF6F3] text-[#EC6443] px-2 py-1 text-xs">${zh ? '客厅' : 'Living room'} ×</span><span class="shrink-0 rounded-full bg-[#FFF6F3] text-[#EC6443] px-2 py-1 text-xs">${zh ? '空调' : 'AC'} ×</span><span class="shrink-0 rounded-full bg-[#FFF6F3] text-[#EC6443] px-2 py-1 text-xs">${zh ? '常用' : 'Favorite'} ×</span><span class="ml-auto shrink-0 rounded-full bg-[#FFE5E0] text-[#EC6443] px-2 py-1 text-xs">+3</span></div>`)}
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.numberTitle}</h2>
    <p class="text-sm text-gray-500 mb-7">${copy.numberIntro}</p>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
      ${sample(copy.default, `<div class="flex min-h-11 items-stretch rounded-full border border-gray-300 bg-white overflow-hidden"><button type="button" data-number-step="-1" class="w-11 border-r border-gray-100 text-lg">−</button><div class="flex flex-1 items-center justify-center"><input data-number-input type="text" inputmode="decimal" value="24" class="w-6 text-right text-sm font-normal outline-none fz-lanting-numeral"><span class="ml-1 text-sm text-gray-500">°C</span></div><button type="button" data-number-step="1" class="w-11 border-l border-gray-100 text-lg">＋</button></div>`)}
      ${sample(copy.suffix, inputBox('<span class="fz-lanting-numeral text-sm font-normal">24</span>', 'border-gray-300', '', '<span class="text-gray-500">°C</span>'))}
      ${sample(copy.prefix, inputBox('<span class="fz-lanting-numeral text-sm font-normal">30</span>', 'border-gray-300', '<svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"></circle><path stroke-linecap="round" d="M12 7v5l3 2"></path></svg>', '<span class="text-gray-500">min</span>'))}
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.codeTitle}</h2>
    <p class="text-sm text-gray-500 mb-7">${copy.codeIntro}</p>
    <div class="grid md:grid-cols-2 gap-4">
      ${sample(copy.sixDigit, `<div data-code-group role="group" aria-label="${copy.codeLabel}" class="flex items-center gap-2">${Array.from({ length: 6 }, (_, i) => `<input data-code-cell inputmode="numeric" autocomplete="${i === 0 ? 'one-time-code' : 'off'}" maxlength="1" aria-label="${zh ? `第 ${i + 1} 位` : `Digit ${i + 1}`}" class="w-11 h-11 shrink-0 rounded-xl border border-gray-300 bg-white text-center text-lg font-semibold outline-none focus:border-[#EC6443] focus:ring-2 focus:ring-[#FFE5E0] fz-lanting-numeral">`).join('')}</div><p class="mt-2 text-xs text-gray-500" data-code-status>${copy.codeHint}</p>`)}
      ${sample(copy.grouped, codeCells(6, { separator: 3, values: ['3', '6', '1', '8', '', ''] }))}
      ${sample(copy.masked, codeCells(6, { masked: true }))}
      ${sample(copy.error, `${codeCells(6, { error: true, values: ['2', '8', '4', '6', '1', '9'] })}<p class="mt-2 text-xs text-red-500">${zh ? '验证码错误，请重新输入' : 'Incorrect code. Try again.'}</p>`)}
    </div>
  </section>

  <section class="grid md:grid-cols-2 gap-8 mb-10">
    <article class="bg-white/60 p-8 md:p-10 rounded-[28px]" style="border:2px solid #3BD08D;">
      <h2 class="text-xl font-bold text-gray-900 mb-5">${copy.doTitle}</h2>
      <ul class="space-y-3">${list(copy.doItems, true)}</ul>
    </article>
    <article class="bg-white/60 p-8 md:p-10 rounded-[28px]" style="border:2px solid #F52828;">
      <h2 class="text-xl font-bold text-gray-900 mb-5">${copy.dontTitle}</h2>
      <ul class="space-y-3">${list(copy.dontItems, false)}</ul>
    </article>
  </section>`;
}

function initInputExamples(root, language) {
  const clearable = root.querySelector('[data-clearable-input]');
  const clearButton = root.querySelector('[data-clear-input]');
  const syncClear = () => clearButton?.classList.toggle('hidden', !clearable?.value);
  clearable?.addEventListener('input', syncClear);
  clearButton?.addEventListener('click', () => {
    if (!clearable) return;
    clearable.value = '';
    syncClear();
    clearable.focus();
  });

  const counted = root.querySelector('[data-count-input]');
  const count = root.querySelector('[data-char-count]');
  counted?.addEventListener('input', () => {
    if (count) count.textContent = String(counted.value.length);
  });

  const tagField = root.querySelector('[data-tag-field]');
  const tagInput = root.querySelector('[data-tag-input]');
  tagField?.addEventListener('click', event => {
    const button = event.target.closest('[data-remove-tag]');
    if (button) button.closest('[data-tag]')?.remove();
  });
  tagInput?.addEventListener('keydown', event => {
    if (!tagField) return;
    if (event.key === 'Backspace' && !tagInput.value) {
      const tags = tagField.querySelectorAll('[data-tag]');
      tags.item(tags.length - 1)?.remove();
      return;
    }
    if (event.key !== 'Enter' && event.key !== ',') return;
    event.preventDefault();
    const value = tagInput.value.trim().replace(/,$/, '');
    const tags = [...tagField.querySelectorAll('[data-tag]')];
    if (!value || tags.length >= 8 || tags.some(tag => tag.firstChild?.textContent?.trim() === value)) return;
    const tag = document.createElement('span');
    tag.dataset.tag = '';
    tag.className = 'inline-flex items-center gap-1.5 rounded-full bg-[#FFF6F3] text-[#EC6443] px-2 py-1 text-xs';
    tag.append(document.createTextNode(value));
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.removeTag = '';
    button.className = 'text-[#EC6443]';
    button.setAttribute('aria-label', `${language === 'zh' ? '删除标签' : 'Remove tag'} ${value}`);
    button.textContent = '×';
    tag.append(button);
    tagField.insertBefore(tag, tagInput);
    tagInput.value = '';
  });

  const numberInput = root.querySelector('[data-number-input]');
  root.querySelectorAll('[data-number-step]').forEach(button => button.addEventListener('click', () => {
    if (!numberInput) return;
    const current = Number(numberInput.value) || 24;
    const next = Math.min(30, Math.max(16, current + Number(button.dataset.numberStep)));
    numberInput.value = String(next);
    numberInput.dispatchEvent(new Event('input', { bubbles: true }));
  }));

  const cells = [...root.querySelectorAll('[data-code-cell]')];
  const status = root.querySelector('[data-code-status]');
  cells.forEach((cell, index) => {
    cell.addEventListener('input', event => {
      const digits = event.target.value.replace(/\D/g, '');
      if (digits.length > 1) {
        digits.slice(0, cells.length - index).split('').forEach((digit, offset) => {
          cells[index + offset].value = digit;
        });
        cells[Math.min(index + digits.length, cells.length - 1)].focus();
      } else {
        cell.value = digits;
        if (digits && index < cells.length - 1) cells[index + 1].focus();
      }
      if (status && cells.every(item => item.value)) {
        status.textContent = language === 'zh' ? '验证码已输入完整' : 'Code complete';
      }
    });
    cell.addEventListener('keydown', event => {
      if (event.key === 'Backspace' && !cell.value && index > 0) cells[index - 1].focus();
    });
    cell.addEventListener('paste', event => {
      const pasted = event.clipboardData?.getData('text').replace(/\D/g, '');
      if (!pasted) return;
      event.preventDefault();
      pasted.slice(0, cells.length).split('').forEach((digit, offset) => {
        cells[offset].value = digit;
      });
      cells[Math.min(pasted.length, cells.length) - 1].focus();
      if (status && pasted.length >= cells.length) {
        status.textContent = language === 'zh' ? '验证码已输入完整' : 'Code complete';
      }
    });
  });
}

/* =========================================================
   键盘（Keyboard）—— Leader 样式
   ========================================================= */
function renderKeyboardGuideline(language) {
  const zh = language === 'zh';
  const copy = zh ? {
    title: '键盘',
    intro: '键盘用于家电 App 与触控显示屏中的短文本、数字和符号输入。',
    baseline: '类型示例',
    baselineBody: '以下示例展示字母、符号数字与九宫格数字三类键盘组件。设计与开发应根据实际输入内容选用对应类型，并保持既定的键位布局、视觉规格与功能层级一致。',
    typeTitle: '组件类型',
    typeIntro: '始终选择与输入内容最匹配、按键最少的键盘，降低查找与误触成本。',
    typeRows: [
      ['字母键盘', '名称、账号、搜索关键词等文本', '默认显示当前语言；保留 123/符、中/EN、空格、删除与确认'],
      ['符号数字键盘', '同时需要数字、标点或常用符号', '数字位于首行；返回键回到字母布局，不清除已输入内容'],
      ['九宫格数字键盘', 'PIN、验证码、纯整数', '仅保留 0–9 与删除；短码输入不添加无关功能键']
    ],
    letter: '字母键盘',
    symbol: '符号数字键盘',
    number: '九宫格数字键盘',
    modes: '组件样式',
    lightMode: '浅色模式',
    darkMode: '深色模式',
    structure: '结构与稳定性',
    structureItems: [
      '键盘固定从页面底部出现。显示键盘后，正在编辑的输入框及已输入内容必须保持可见，不得被键盘遮挡。',
      '同一类键盘应保持行数、键位顺序、键帽间距和功能键位置一致。切换中英文时只替换字符，不移动删除、空格和确认键。',
      '字母、数字和符号在键帽内居中显示。九宫格数字键盘中的辅助字母排列在数字下方，并降低视觉强调。',
      '删除、Shift、键盘类型切换和确认键使用规定的图标、文字与固定位置，不随页面或业务场景重新排列。'
    ],
    behavior: '交互原则',
    behaviorItems: [
      '点按键帽后立即输入，并提供清晰的按下反馈；字符不得在动画结束后才出现。',
      '长按删除可连续删除，松手立即停止；删除到空值时保持输入框，不退出页面。',
      'Shift 首次点按输入一个大写字符后复位；连续状态必须有可识别反馈。',
      '123/符与返回键在布局间切换，已输入内容、光标位置和输入焦点均保持不变。',
      '确认键文案应匹配任务结果，如“搜索”“下一步”“完成”；附件中的“确定/ENTER”为默认展示，不应替代更具体的任务动词。',
      '系统返回或点击明确的关闭路径可收起键盘；不得因一次误触背景丢失已输入内容。'
    ],
    doTitle: '推荐', dontTitle: '避免',
    doItems: [
      '按内容类型显示最精简的键盘',
      '键盘出现时保持当前字段可见',
      '切换布局时保留输入与光标',
      '用具体任务动词命名确认键'
    ],
    dontItems: [
      '为追求适配而改造既有键帽样式',
      '用全键盘输入纯数字或短验证码',
      '遮挡当前字段或关键设备状态',
      '在键盘内部堆叠教程与帮助内容'
    ]
  } : {
    title: 'Keyboard',
    intro: 'Keyboard supports short text, number, and symbol entry in appliance apps and touch displays.',
    baseline: 'Type examples',
    baselineBody: 'The examples below show the alphabetic, symbol and number, and numeric keypad components. Choose the appropriate type for the input content and preserve the established key layout, visual specifications, and functional hierarchy.',
    typeTitle: 'Component types',
    typeIntro: 'Use the smallest keyboard that matches the content to reduce scanning and input errors.',
    typeRows: [
      ['Alphabetic', 'Names, accounts, and search terms', 'Show the current language; keep symbol, language, Space, Delete, and Submit keys'],
      ['Symbol & number', 'Numbers, punctuation, and common symbols', 'Keep digits on the first row; Return goes back without clearing input'],
      ['Numeric keypad', 'PINs, codes, and whole numbers', 'Only 0–9 and Delete; avoid unrelated function keys']
    ],
    letter: 'Alphabetic keyboard',
    symbol: 'Symbol & number keyboard',
    number: 'Numeric keypad',
    modes: 'Component styles',
    lightMode: 'Light mode',
    darkMode: 'Dark mode',
    structure: 'Structure & stability',
    structureItems: [
      'The keyboard always appears from the bottom of the page. Keep the active field and entered content visible instead of covering them with the keyboard.',
      'Keep the row count, key order, spacing, and function-key positions consistent within each keyboard type. When switching languages, replace characters only; do not move Delete, Space, or Submit.',
      'Center letters, numbers, and symbols inside each key. On the numeric keypad, place supporting letters below the digit with lower visual emphasis.',
      'Use the specified icon, label, and fixed position for Delete, Shift, keyboard switching, and Submit. Do not rearrange them for individual pages or use cases.'
    ],
    behavior: 'Interaction principles',
    behaviorItems: [
      'Insert on press with immediate feedback; do not delay input until an animation completes.',
      'Long-press Delete may repeat and must stop on release; reaching an empty value must not exit the page.',
      'Shift affects one uppercase character and resets; any locked state needs a visible non-color cue.',
      'Switching layouts preserves input, cursor position, and focus.',
      'Match the Submit label to the result, such as Search, Next, or Done. Confirm/Enter is only the default example.',
      'Back or a clear dismissal path hides the keyboard without losing input after an accidental background tap.'
    ],
    doTitle: 'Do', dontTitle: 'Avoid',
    doItems: [
      'Show the smallest keyboard for the content',
      'Keep the active field visible',
      'Preserve input and cursor across layouts',
      'Use a task-specific Submit label'
    ],
    dontItems: [
      'Restyle approved key visuals for adaptation',
      'Use a full keyboard for digits or short codes',
      'Cover the field or critical appliance status',
      'Place tutorials inside the keyboard'
    ]
  };

  const bullets = items => items.map(item => `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="mt-[9px] w-1.5 h-1.5 shrink-0 rounded-full bg-[#EC6443]"></span><span>${item}</span></li>`).join('');

  const numberedBullets = items => items.map((item, index) => `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="shrink-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#EC6443] text-[11px] font-semibold text-[#EC6443]" style="line-height:1;">${index + 1}</span><span>${item}</span></li>`).join('');
  
  const checks = (items, good) => items.map(item => `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="${good ? 'text-emerald-500' : 'text-red-400'} font-bold">${good ? '✓' : '×'}</span><span>${item}</span></li>`).join('');

  const checksIcon = (items, good) => items.map(item => {
    const icon = good
      ? `<svg class="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#3BD08D" stroke-width="1.5"/><path d="M6.5 10.2l2.4 2.4 4.6-4.8" stroke="#3BD08D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
      : `<svg class="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#F52828" stroke-width="1.5"/><path d="M7 7l6 6M13 7l-6 6" stroke="#F52828" stroke-width="1.5" stroke-linecap="round"/></svg>`;
    return `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="inline-flex shrink-0 mt-[1px]">${icon}</span><span>${item}</span></li>`;
  }).join('');

  const figure = (src, title, alt) => `<figure class="flex flex-col items-center rounded-[28px] bg-white/70 p-4 md:p-5"><figcaption class="w-2/3 mb-4 text-center text-sm font-normal text-gray-900">${title}</figcaption><img src="leader-assets/examples/keyboard/${src}" alt="${alt}" class="block w-2/3 h-auto rounded-xl"></figure>`;
  
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
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.typeTitle}</h2>
    <p class="text-sm text-gray-500 leading-6 mb-7">${copy.typeIntro}</p>
    <div class="overflow-x-auto rounded-[28px] border border-gray-200 bg-white/65">
      <table class="input-type-table">
        <thead><tr>${[zh?'类型':'Type', zh?'适用内容':'Use for', zh?'布局要求':'Layout requirement'].map(x => `<th scope="col">${x}</th>`).join('')}</tr></thead>
        <tbody>${copy.typeRows.map(r => `<tr>${r.map(x => `<td>${x}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.baseline}</h2>
    <p class="text-sm text-gray-600 leading-6 mb-7">${copy.baselineBody}</p>
    <div class="grid gap-5">
      ${figure('keyboard-cn.png', copy.letter, zh?'已定义的字母键盘组件':'Approved alphabetic keyboard')}
      ${figure('keyboard-symbol.png', copy.symbol, zh?'已定义的符号数字键盘组件':'Approved symbol and number keyboard')}
      ${figure('keyboard-number.png', copy.number, zh?'已定义的九宫格数字键盘组件':'Approved numeric keypad')}    
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    <h2 class="text-2xl font-bold mb-7 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.modes}</h2>
    <div class="grid lg:grid-cols-2 gap-5">
      <figure class="rounded-[28px] bg-white/70 p-5">
        <figcaption class="font-semibold text-sm mb-4">${copy.lightMode}</figcaption>
        <div class="aspect-[930/358] flex items-center justify-center overflow-hidden rounded-xl bg-[#FFF6F3]">
          <img src="leader-assets/examples/keyboard/keyboard-cn.png" alt="${zh?'浅色模式键盘示意图':'Light mode keyboard example'}" class="block w-full h-full object-contain">
        </div>
      </figure>
      <figure class="rounded-[28px] bg-white/70 p-5">
        <figcaption class="font-semibold text-sm mb-4">${copy.darkMode}</figcaption>
        <div class="aspect-[930/358] flex items-center justify-center overflow-hidden rounded-xl bg-[#1B1F25]">
          <img src="leader-assets/examples/keyboard/keyboard-cn-dark.png" alt="${zh?'深色模式键盘示意图':'Dark mode keyboard example'}" class="block w-full h-full object-contain">
        </div>
      </figure>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-8 mb-8">
    <h2 class="text-xl font-bold mb-5 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.structure}</h2>
    <ul class="space-y-3">${numberedBullets(copy.structureItems)}</ul>
  </section>

  <section class="glass-panel p-6 md:p-8 mb-8">
    <h2 class="text-xl font-bold mb-5 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${copy.behavior}</h2>
    <ul class="space-y-3">${numberedBullets(copy.behaviorItems)}</ul>
  </section>

  <section class="grid md:grid-cols-2 gap-8 mb-10">
    <article class="bg-white/60 p-8 md:p-10 rounded-[28px]" style="border:2px solid #3BD08D;">
      <h2 class="text-xl font-bold text-gray-900 mb-5">${copy.doTitle}</h2>
      <ul class="space-y-3">${checksIcon(copy.doItems, true)}</ul>
    </article>
    <article class="bg-white/60 p-8 md:p-10 rounded-[28px]" style="border:2px solid #F52828;">
      <h2 class="text-xl font-bold text-gray-900 mb-5">${copy.dontTitle}</h2>
      <ul class="space-y-3">${checksIcon(copy.dontItems, false)}</ul>
    </article>
  </section>`;
}

/* =========================================================
   分发入口
   ========================================================= */
function renderComponentPage() {
  const file = (window.location.pathname.split('/').pop() || '').split('?')[0].split('#')[0] || 'component_text_field.html';
  const item = COMPONENT_PAGES[file];
  const root = document.getElementById('component-page');
  if (!item || !root) return;
  const [, zh, en, zhDescription, enDescription] = item;
  const language = localStorage.getItem('leader-guideline-language') || localStorage.getItem('haier-guideline-language') || 'zh';
  const text = language === 'zh'
    ? { title: zh, description: zhDescription, overview: '基础规范', status: '状态规范', usage: '使用原则', anatomy: '组成结构', statusText: '默认、悬停、聚焦、按下、禁用与错误状态需使用一致的视觉语言，并满足键盘与触控可达性。', usageText: '先确认组件是否匹配用户任务，再定义内容、行为与边界条件。避免用视觉变体修补错误的信息结构。', anatomyText: '名称、内容区域、交互热区与反馈层应保持职责清晰；跨设备适配时优先保持语义和操作顺序。' }
    : { title: en, description: enDescription, overview: 'Foundation', status: 'States', usage: 'Usage', anatomy: 'Anatomy', statusText: 'Use a consistent visual language for default, hover, focus, pressed, disabled, and error states, with keyboard and touch accessibility.', usageText: 'Confirm the component matches the user task before defining content, behavior, and boundaries. Do not use visual variants to patch weak information structure.', anatomyText: 'Keep labels, content, touch targets, and feedback layers distinct. Preserve meaning and action order when adapting across devices.' };
  document.title = `Leader Design | ${text.title}`;

  if (file === 'component_radio_button.html') {
    root.innerHTML = renderRadioGuideline(language);
    return;
  }
  if (file === 'component_buttons.html') {
    root.innerHTML = renderButtonGuideline(language);
    return;
  }
  if (file === 'component_wheel_picker.html') {
    root.innerHTML = renderSelectGuideline(language);
    initSelectExamples(root);
    return;
  }
  if (file === 'component_switch.html') {
    root.innerHTML = renderSwitchGuideline(language);
    initSwitchExamples(root);
    return;
  }
  if (file === 'component_checkbox.html') {
    root.innerHTML = renderCheckboxGuideline(language);
    initCheckboxExamples(root);
    return;
  }
  if (file === 'component_text_field.html') {
    root.innerHTML = renderInputGuideline(language);
    initInputExamples(root, language);
    return;
  }
    if (file === 'component_slider.html') {
    root.innerHTML = renderSliderGuideline(language);
    return;
  }
    if (file === 'component_keyboard.html') {
    root.innerHTML = renderKeyboardGuideline(language);
    return;
  }
    if (window.__leaderComponentExtensions && window.__leaderComponentExtensions(file, root, language)) return;
  root.innerHTML = `
    <section class="mb-12">
      <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">${text.title}</h1>
      <p class="text-lg text-gray-500 max-w-3xl leading-relaxed">${text.description}</p>
    </section>
    <hr class="border-t border-black/5 mb-8">
    <section class="glass-panel p-6 md:p-10 mb-10">
      <div class="mb-6"><h2 class="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${text.overview}</h2><p class="text-sm text-gray-500">${en}</p></div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <article class="bg-white/60 rounded-3xl p-5 border border-gray-200"><span class="text-xs font-bold text-[#EC6443]">01</span><h3 class="font-bold text-gray-800 mt-4 mb-2">${text.usage}</h3><p class="text-sm text-gray-600 leading-6">${text.usageText}</p></article>
        <article class="bg-white/60 rounded-3xl p-5 border border-gray-200"><span class="text-xs font-bold text-[#EC6443]">02</span><h3 class="font-bold text-gray-800 mt-4 mb-2">${text.anatomy}</h3><p class="text-sm text-gray-600 leading-6">${text.anatomyText}</p></article>
        <article class="bg-white/60 rounded-3xl p-5 border border-gray-200"><span class="text-xs font-bold text-[#EC6443]">03</span><h3 class="font-bold text-gray-800 mt-4 mb-2">${text.status}</h3><p class="text-sm text-gray-600 leading-6">${text.statusText}</p></article>
      </div>
    </section>`;
}

window.__leaderRenderComponentPage = renderComponentPage;