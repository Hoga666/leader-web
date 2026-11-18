/* =========================================================
   component_avatar.js
   头像（Avatar）—— Leader 样式
   ========================================================= */
function renderAvatarGuideline(language) {
  const zh = language === 'zh';
  const t = (cn, en) => zh ? cn : en;

  const sectionHead = (title, description) => `<h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${title}</h2>${description ? `<p class="text-sm text-gray-500 leading-7 mb-6">${description}</p>` : ''}`;
  const numberedList = items => items.map((x, i) => `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="shrink-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#EC6443] text-[11px] font-semibold text-[#EC6443]" style="line-height:1;">${i + 1}</span><span>${x}</span></li>`).join('');
  const checkList = (items, good) => items.map(x => `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="${good ? 'text-emerald-500' : 'text-red-400'} font-bold" aria-hidden="true">${good ? '✓' : '×'}</span><span>${x}</span></li>`).join('');
  const table = (heads, rows) => `<div class="overflow-x-auto rounded-[28px] border border-gray-200 bg-white/65"><table class="w-full min-w-[680px] border-collapse text-[13px] leading-7"><thead><tr>${heads.map(h => `<th class="px-[18px] py-[14px] font-semibold text-left bg-[#FBF6F5] border-b border-[#E1E7EE] text-[#596774]">${h}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr class="border-b border-gray-200 last:border-0">${row.map((c, i) => i === 0 ? `<th scope="row" class="px-[18px] py-[14px] font-normal text-left">${c}</th>` : `<td class="px-[18px] py-[14px] align-top">${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;

  const personSvg = '<svg aria-hidden="true" viewBox="0 0 48 48" fill="none" class="w-full h-full"><path d="M28.9947 23.6147C31.441 22.0053 33.0493 19.2173 33.0493 16.0667C33.0493 11.0573 28.9947 7 23.9887 7C18.9827 7 14.928 11.0573 14.928 16.0667C14.928 19.2173 16.5363 22.0053 18.9827 23.6147C12.0513 25.7453 7 32.228 7 39.8667C7 40.252 7.02265 40.6147 7.06795 41H40.932C40.9547 40.6147 41 40.252 41 39.8667C40.9773 32.228 35.926 25.7453 28.9947 23.6147Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/></svg>';
  const homeSvg = '<svg aria-hidden="true" viewBox="0 0 48 48" fill="none" class="w-full h-full"><path d="M24 7 5 22l6.5579-.1527V41h24.7943V22H43L24 7ZM20 41V29.3063A.3063.3063 0 0 1 20.308 29h7.384a.3063.3063 0 0 1 .308.3063V41" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/></svg>';
  const deviceSvg = '<svg aria-hidden="true" viewBox="0 0 48 48" fill="none" class="w-full h-full"><path d="M8.5 10H39.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/><path d="M24 37C17.92 37 13 32.08 13 26C13 19.92 17.92 15 24 15C30.08 15 35 19.92 35 26C35 32 30 37 24 37Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/><path d="M24 42H8.85C8.38 42 8 41.63 8 41.19V5.81C8 5.36 8.38 5 8.85 5H39.15C39.62 5 40 5.37 40 5.81V26V42H24Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/></svg>';

  const avatar = (content, size = 48, kind = '', extra = '') => {
    const shape = kind.includes('square') ? 'rounded-[20px]' : 'rounded-full';
    return `<span class="inline-flex items-center justify-center shrink-0 ${shape} bg-[#EC6443] text-white ring-1 ring-[#FFB199] relative" style="width:${size}px;height:${size}px;box-sizing:border-box;padding:${Math.round(size * 0.22)}px">${content}${extra}</span>`;
  };

  const example = (face, name, sub) => `<div class="flex items-center gap-6">${face}<div><strong class="block text-sm font-medium text-gray-900">${name}</strong><small class="block text-xs text-gray-500 mt-0.5">${sub}</small></div></div>`;
  const rule = (title, desc) => `<div><h3 class="text-sm font-semibold text-gray-900 mb-1">${title}</h3><p class="text-sm text-gray-500 leading-6">${desc}</p></div>`;

  const selectedAvatar = (label = t('林','L'), size = 48) => `<span class="relative inline-flex items-center justify-center rounded-full ring-2 ring-[#EC6443] ring-offset-2 ring-offset-white" style="width:${size}px;height:${size}px"><span class="inline-flex items-center justify-center w-full h-full rounded-full bg-[#EC6443] text-white" style="padding:${Math.round(size * 0.22)}px">${label}</span><b class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#EC6443] text-white text-[10px] flex items-center justify-center ring-1 ring-[#FFB199]">✓</b></span>`;

  return `<section class="mb-12">
    <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">${t('头像','Avatar')}</h1>
    <p class="text-lg text-gray-900 leading-relaxed">${t('头像用于识别用户、家庭与设备。用作头像显示，可以为图片、图标或字符形式展示。','Avatars identify people, households, and devices. They can display images, icons, or characters.')}</p>
  </section>
  <hr class="border-t border-black/5 mb-8">

  <section class="glass-panel p-6 md:p-10 mb-8">
    ${sectionHead(t('类型与结构','Types and structure'), t('保留一个识别主体。用户使用圆形，家庭与设备使用圆角方形；同类对象的形状与尺寸保持一致。','Keep a single recognizable subject. Use circles for people and rounded squares for households and devices; keep the same shape and size for each object type.'))}
    <div class="grid md:grid-cols-2 gap-5">
      ${[
        [t('图标头像','Icon avatar'), avatar(personSvg, 56), t('小林','Lin'), t('当前用户','Current user')],
        [t('字符头像','Text avatar'), avatar(t('林','L'), 56), t('小林','Lin'), t('家庭成员','Household member')],
        [t('图片头像','Image avatar'), avatar(deviceSvg, 56, 'square'), t('阳台洗衣机','Balcony washer'), t('设备标识','Device identity')],
        [t('家庭头像','Household avatar'), avatar(homeSvg, 56, 'square'), t('我的家','My home'), t('4 位成员 · 家庭管理','4 members · Household settings')]
      ].map(([title, face, name, sub]) => `<article class="rounded-[28px] border border-[#FFE5E0] bg-white/70 p-5"><h3 class="text-sm font-semibold mb-4">${title}</h3>${example(face, name, sub)}</article>`).join('')}
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    ${sectionHead(t('样式与尺寸','Appearance and dimensions'), t('家电 TFT 显示可结合实际分辨率与观看距离调整。','Appliance TFT displays can be adjusted to resolution and viewing distance.'))}
    <div class="grid grid-cols-2 gap-5 mb-6">
      ${[[48, t('小号','Small')], [64, t('常规','Regular')]].map(([size, label]) => `<div class="text-center">${avatar(personSvg, size)}<p class="mt-3 text-xs text-gray-500">${label} · ${size} dp</p></div>`).join('')}
    </div>
    ${table(
      [t('规格','Size'), t('头像尺寸','Avatar size'), t('字符字号 / 图标尺寸','Text / icon size'), t('适用场景','Usage')],
      [
        [t('小号','Small'), '48 dp', '24 / 40（网格尺寸）dp', t('紧凑成员概览与辅助展示','Compact member summaries and supporting content')],
        [t('常规','Regular'), '64 dp', '24 / 48（网格尺寸）dp', t('个人详情、头像编辑与 App 和家电 TFT 用户入口','Profile details, avatar editing, and App / appliance TFT user entries')]
      ]
    )}
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    ${sectionHead(t('头像组与布局','Groups and layout'), t('头像组用于概览家庭成员；需要选择用户时，使用头像与名称完整呈现的独立列表。','Use groups for household summaries. For user selection, show separate rows with an avatar and full name.'))}
    <div class="grid md:grid-cols-2 gap-5">
      <div class="rounded-[28px] border border-[#FFE5E0] bg-white/70 p-6 flex flex-col items-center justify-center gap-4">
        <div class="flex -space-x-3">
          ${avatar(t('林','L'), 48)}
          <span class="inline-flex items-center justify-center shrink-0 rounded-full bg-[#cccccc] text-white ring-1 ring-[#e0e0e0] relative" style="width:48px;height:48px;box-sizing:border-box;padding:${Math.round(48 * 0.22)}px">${t('陈','C')}</span>
          <span class="inline-flex items-center justify-center shrink-0 rounded-full bg-[#cccccc] text-white ring-1 ring-[#e0e0e0] relative" style="width:48px;height:48px;box-sizing:border-box;padding:${Math.round(48 * 0.22)}px">+2</span>
        </div>
        <strong class="text-sm text-gray-700">${t('我的家 · 4 位成员','My home · 4 members')}</strong>
      </div>
      <div class="space-y-5">
        ${rule(t('有限展示，清楚计数','Limit visible members'), t('默认最多展示 3 个成员，超出后追加 +N；+N 表示未展示人数。排序按固定成员顺序，不随在线状态跳动。','Show up to 3 members, then append +N for the hidden count. Keep a stable member order rather than sorting by online state.'))}
        ${rule(t('叠放只用于概览','Overlap for summaries only'), t('重叠量为头像边长的 1/4，触控选择时改为分离条目，避免重叠热区。','Overlap by a quarter of the avatar size. Use separate rows for touch selection to avoid overlapping targets.'))}
      </div>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    ${sectionHead(t('状态','States'), t('图片加载与网络异常不改变头像占位；保留身份可读性，将结果反馈放在对应区域。','Keep the avatar footprint stable during loading and network issues. Preserve identity readability and place feedback beside the affected content.'))}
    <div class="grid md:grid-cols-3 gap-5">
      <article class="rounded-[28px] border border-[#FFE5E0] bg-white/70 p-5">
        <div class="flex items-center justify-center mb-4">${avatar(personSvg, 48)}</div>
        <h3 class="text-sm font-semibold mb-1">${t('加载 / 未设置','Loading / unset')}</h3>
        <p class="text-xs text-gray-500 leading-5">${t('先显示中性占位，图片成功后替换；不使用持续闪烁的加载动画。','Show a neutral placeholder until the image loads. Avoid continuously flashing loading effects.')}</p>
      </article>
      <article class="rounded-[28px] border border-[#FFE5E0] bg-white/70 p-5">
        <div class="flex items-center justify-center mb-4">${avatar(t('林','L'), 48)}</div>
        <h3 class="text-sm font-semibold mb-1">${t('加载失败','Image failed')}</h3>
        <p class="text-xs text-gray-500 leading-5">${t('依次回退至昵称字符、人物图标；设备回退至品类图标，不显示破图。','Fall back to initials, then a person icon; use category icons for devices. Never show a broken image.')}</p>
      </article>
      <article class="rounded-[28px] border border-[#FFE5E0] bg-white/70 p-5">
        <div class="flex items-center justify-center mb-4">${selectedAvatar()}</div>
        <h3 class="text-sm font-semibold mb-1">${t('当前选中','Selected')}</h3>
        <p class="text-xs text-gray-500 leading-5">${t('描边与勾选配合“当前用户”文字表达，切换成功后再更新选中状态。','Use an outline, check mark, and current-user text. Update selection only after switching succeeds.')}</p>
      </article>
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    ${sectionHead(t('家电场景与交互','Appliance context and interaction'), t('共享设备上的头像帮助确认使用者，同时尊重家庭成员的隐私与操作边界。','Avatars on shared appliances help identify the user while respecting household privacy and interaction boundaries.'))}
    <div class="grid md:grid-cols-2 gap-5">
      <div class="rounded-[28px] border border-[#FFE5E0] bg-white/70 p-6 flex flex-col gap-4">
        ${example(avatar(personSvg, 48), t('访客','Guest'), t('使用默认偏好','Default preferences'))}
        <div class="border-t border-gray-200"></div>
        ${example(selectedAvatar(), t('小林 · 当前用户','Lin · Current user'), t('仅影响偏好设置','Affects preferences only'))}
      </div>
      <div class="space-y-5">
        ${rule(t('公共屏幕默认低暴露','Minimize exposure on shared screens'), t('待机与锁屏优先显示中性图标或昵称，不默认展示真实照片、手机号与完整姓名；照片由用户主动选择开启。','Prefer neutral icons or nicknames on idle and lock screens. Show photos only when users opt in; avoid phone numbers and full names.'))}
        ${rule(t('触控与键盘','Touch and keyboard'), t('可点击热区至少 48 × 48 dp，小头像向外扩展热区；相邻目标间保留至少 8 dp。支持 Tab 聚焦、Enter / Space 激活，并显示清晰焦点环。','Provide targets of at least 48 × 48dp; extend small avatar targets and keep at least 8dp between them. Support Tab focus, Enter / Space activation, and a visible focus ring.'))}
      </div>
    </div>
  </section>

  <section class="grid md:grid-cols-2 gap-8 mb-8">
    <article class="bg-white/60 p-8 md:p-10 rounded-[28px]" style="border:2px solid #3BD08D;">
      <h2 class="text-xl font-bold text-gray-900 mb-5">${t('推荐','Do')}</h2>
      <ul class="space-y-3">${checkList([
        t('头像始终与可识别的名称关联','Always connect avatars to recognizable names'),
        t('同一对象在各页面保持一致的图形与回退结果','Keep imagery and fallbacks consistent for each identity'),
        t('共享屏幕默认使用低隐私暴露的展示方式','Default to less revealing identities on shared screens')
      ], true)}</ul>
    </article>
    <article class="bg-white/60 p-8 md:p-10 rounded-[28px]" style="border:2px solid #F52828;">
      <h2 class="text-xl font-bold text-gray-900 mb-5">${t('避免',"Don't")}</h2>
      <ul class="space-y-3">${checkList([
        t('用红绿头像底色表达设备在线或故障','Use red or green avatar backgrounds for device status'),
        t('将叠放头像直接作为密集的切换按钮','Use overlapping avatars as crowded switching buttons'),
        t('把选中头像等同于身份验证或操作授权','Treat avatar selection as identity verification or authorization')
      ], false)}</ul>
    </article>
  </section>`;
}
window.__leaderSingleExtensions = window.__leaderSingleExtensions || {};
window.__leaderSingleExtensions['component_avatar.html'] = function (root, language) {
    root.innerHTML = renderAvatarGuideline(language);
};