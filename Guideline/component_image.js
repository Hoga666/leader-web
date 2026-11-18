/* =========================================================
   component_image.js
   图片轮播（Image Carousel）
   外观：Leader 视觉体系（Tailwind + #EC6443 / #FFF6F3 / glass-panel）
   交互：海尔规范（dot / line / slider × bottom / top / left / right / outer）
   ========================================================= */

/* 指示器条目：真实轮播与规格图例共用，保证“图例符号 = 实际符号” */
function buildIndicatorMarkup(count, type, active, t, interactive = true) {
  const buttons = Array.from({ length: count }, (_, i) =>
    `<button type="button"${interactive ? ` data-index="${i}"` : ' tabindex="-1"'} style="--i:${i}" aria-label="${t('第 ', 'Image ')}${i + 1}${t(' 张', '')}" aria-pressed="${i === active}"></button>`
  ).join('');
  if (type !== 'slider') return buttons;
  return `<span class="ic-slider-track" aria-hidden="true"><span></span></span>${buttons}`;
}

function renderImageGuideline(language) {
  const zh = language === 'zh';
  const t = (cn, en) => (zh ? cn : en);

  /* ---------------- 数据 ---------------- */
  const sceneList = [
    ['01.png', t('温馨居家-角度1', 'Cozy home – angle 1'), t('浅色家居中柔和光线下的洗护空间', 'A softly lit laundry corner in a light home')],
    ['02.png', t('温馨居家-角度2', 'Cozy home – angle 2'), t('鼠尾草绿与奶油白织物的柔光场景', 'Sage-green and ivory textiles in soft light')],
    ['03.png', t('温馨居家-角度3', 'Cozy home – angle 3'), t('编织衣篮与浅色棉织物的柔光场景', 'A woven basket with light cotton fabrics in soft light')]
  ];
  const productList = [
    ['washer-user-front.png', t('正面外观', 'Front view'), t('纤美洗衣机正面产品图', 'Washing machine, front view')],
    ['washer-user-left.png', t('左侧视角', 'Left perspective'), t('纤美洗衣机左侧产品图', 'Washing machine, left perspective')],
    ['washer-user-right.png', t('右侧视角', 'Right perspective'), t('纤美洗衣机右侧产品图', 'Washing machine, right perspective')]
  ];

  /* ---------------- 片段 ---------------- */
  const sectionHead = (title, description) =>
    `<h2 class="text-2xl font-bold mb-2 flex items-center gap-2.5"><span class="inline-block w-2 h-2 rounded-full bg-[#EC6443]"></span>${title}</h2>${description ? `<p class="text-sm text-gray-500 leading-7 mb-6">${description}</p>` : ''}`;

  const checkList = (items, good) => items.map(x =>
    `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="${good ? 'text-emerald-500' : 'text-red-400'} font-bold" aria-hidden="true">${good ? '✓' : '×'}</span><span>${x}</span></li>`
  ).join('');

  const rule = (title, desc) =>
    `<div><h3 class="text-sm font-semibold text-gray-900 mb-1">${title}</h3><p class="text-sm text-gray-500 leading-6">${desc}</p></div>`;

  const chevron = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="w-5 h-5"><path d="m9 5 7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* ---------------- 轮播 ---------------- */
  const gallery = (id, config = {}) => {
    const {
      mode = 'slide',
      type = 'dot',
      position = 'bottom',
      product = false,
      autoplay = false,
      items = null,
      aspect = null
    } = config;
    const pictures = items || (product ? productList : sceneList);
    const total = pictures.length;
    const showPagination = total > 5;
    const boardBg = product ? 'bg-white/70' : 'bg-[#FFF6F3]';
    const aspectClass = aspect || (product ? 'aspect-square' : 'aspect-[3/2]');
    const arrowCls = 'absolute top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-600 shadow-sm transition-opacity disabled:cursor-default disabled:opacity-40';

    return `<div class="rounded-[28px] border border-[#FFE5E0] ${boardBg} p-4 md:p-6" data-board>
      <div class="relative rounded-[20px] overflow-hidden bg-white">
        <div class="relative" data-carousel="${id}" data-mode="${mode}" data-indicator="${type}" data-position="${position}"${autoplay ? ' data-autoplay="true"' : ''} role="region" aria-roledescription="${t('轮播', 'carousel')}" aria-label="${t('图片浏览：', 'Image gallery: ')}${t(product ? '产品外观' : '洗护空间', product ? 'Product views' : 'Laundry spaces')}">
          <div class="ic-viewport relative ${aspectClass} w-full overflow-hidden" data-viewport>
            <div class="ic-track absolute inset-0 flex" data-track>
              ${pictures.map(([src, name, alt], i) => `<div class="ic-slide relative h-full shrink-0${i === 0 ? ' is-current' : ''}" data-slide role="group" aria-roledescription="${t('幻灯片', 'slide')}" aria-label="${i + 1} / ${total} · ${name}" aria-hidden="${i !== 0}" data-title="${name}"><img src="leader-assets/examples/component/image/${src}" alt="${alt || name}" width="1200" height="800" decoding="async" draggable="false" class="h-full w-full ${src.startsWith('washer-user-') ? 'object-contain' : 'object-cover'}"></div>`).join('')}
            </div>
            <div class="absolute inset-0 z-30 items-center justify-center gap-3 bg-white/90 text-center" data-error hidden>
              <p class="text-sm text-gray-500">${t('图片暂不可用', 'Image unavailable')}</p>
              <button type="button" data-retry class="rounded-full border border-[#EC6443] px-3 py-1 text-xs text-[#EC6443]">${t('重试', 'Retry')}</button>
            </div>
          </div>
          <button type="button" data-prev class="${arrowCls} left-3 rotate-180" aria-label="${t('上一张图片', 'Previous image')}" disabled>${chevron}</button>
          <button type="button" data-next class="${arrowCls} right-3" aria-label="${t('下一张图片', 'Next image')}">${chevron}</button>
          ${mode === 'card' ? `
          <div class="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" data-fade="left" hidden></div>
          <div class="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" data-fade="right" hidden></div>` : ''}
          ${showPagination ? '' : `<div class="ic-indicators" data-indicator-wrap data-kind="${type}" data-position="${position}" style="--count:${total};--index:0" role="group" aria-label="${t('选择图片', 'Choose an image')}">${buildIndicatorMarkup(total, type, 0, t)}</div>`}
        </div>
        ${showPagination ? `<div class="absolute bottom-3 right-4 z-20 rounded-full bg-black/40 px-3 py-1 text-xs text-white" data-count>1 / ${total}</div>` : ''}
        <span class="sr-only" data-position-status aria-live="polite">${t(`第 1 张，共 ${total} 张`, `Image 1 of ${total}`)}</span>
      </div>
      <div class="mt-3 flex justify-center empty:hidden" data-outer-slot></div>
    </div>`;
  };

  const options = (name, items) =>
    `<div class="rounded-[28px] border border-[#FFE5E0] bg-white/70 p-4"><p class="text-xs font-semibold text-gray-500 mb-3">${name}</p><div class="flex flex-wrap gap-2" role="group" aria-label="${name}">${items.map(([attr, value, label], i) => `<button type="button" ${attr}="${value}" aria-pressed="${i === 0}" class="px-3 py-1.5 rounded-full border border-gray-200 text-xs text-gray-600 aria-pressed:border-[#EC6443] aria-pressed:text-[#EC6443] aria-pressed:bg-[#FFE5E0]">${label}</button>`).join('')}</div></div>`;

  /* 规格图例：与真实控件同构同样式 */
  const specCard = (type, title, size, gap, desc) =>
    `<div class="rounded-[28px] border border-[#FFE5E0] bg-white/70 p-4">
      <div class="flex h-16 items-center justify-center rounded-2xl bg-[#FFF6F3]">
        <div class="ic-indicators is-static" data-kind="${type}" style="--count:3;--index:0" aria-hidden="true">${buildIndicatorMarkup(3, type, 0, t, false)}</div>
      </div>
      <h3 class="mt-3 text-sm font-semibold text-gray-900">${title}</h3>
      <small class="mt-1 block text-xs text-gray-400">${size} · ${gap}</small>
      <p class="mt-2 text-xs leading-5 text-gray-500">${desc}</p>
    </div>`;

  return `<style>
  /* ---------- 轨道 / 幻灯片 ---------- */
  [data-carousel] .ic-track{display:flex;height:100%;will-change:transform;transition:transform .3s cubic-bezier(.4,0,.2,1)}
  [data-carousel][data-mode="card"] .ic-track{gap:16px}
  [data-carousel] .ic-slide{flex:0 0 100%;width:100%;height:100%}
  [data-carousel][data-mode="card"] .ic-slide{flex:0 0 84%;width:84%}
  [data-carousel][data-mode="vertical"] .ic-track{flex-direction:column}
  [data-carousel][data-mode="vertical"] .ic-slide{flex:0 0 100%;height:100%}
  [data-carousel][data-mode="fade"] .ic-track{display:block;position:relative}
  [data-carousel][data-mode="fade"] .ic-slide{position:absolute;inset:0;opacity:0;transition:opacity .25s ease}
  [data-carousel][data-mode="fade"] .ic-slide.is-current{opacity:1;z-index:1}
  @media (max-width:640px){[data-carousel][data-mode="card"] .ic-slide{flex-basis:100%;width:100%}}

  /* ---------- 指示器基础 ---------- */
  .ic-indicators{--ic-active:#EC6443;--ic-idle:#FFFFFF;--ic-track:#FFFFFF;--ic-shadow:0 1px 3px rgba(17,24,39,.35);display:flex;align-items:center;gap:8px}
  .ic-indicators.is-static{--ic-shadow:0 1px 2px rgba(17,24,39,.16)}
  .ic-indicators[hidden]{display:none}
  .ic-indicators>button{flex:none;padding:0;border:0;cursor:pointer;position:relative;transition:background .2s ease}
  .ic-indicators>button:focus-visible{outline:2px solid #EC6443;outline-offset:3px;border-radius:9999px}
  .ic-indicators.is-static>button{pointer-events:none;cursor:default}

  /* 圆点 8 × 8 · 间距 8 */
  .ic-indicators[data-kind="dot"]>button{width:8px;height:8px;border-radius:9999px;background:var(--ic-idle);box-shadow:var(--ic-shadow)}
  .ic-indicators[data-kind="dot"]>button[aria-pressed="true"]{background:var(--ic-active);box-shadow:0 1px 2px rgba(236,100,67,.5)}
  /* 短线 6 × 18（默认横向 18 × 6，左右侧转纵向 6 × 18） */
  .ic-indicators[data-kind="line"]>button{width:18px;height:6px;border-radius:9999px;background:var(--ic-idle);box-shadow:var(--ic-shadow)}
  .ic-indicators[data-kind="line"]>button[aria-pressed="true"]{background:var(--ic-active)}
  .ic-indicators[data-kind="line"][data-position="left"]>button,
  .ic-indicators[data-kind="line"][data-position="right"]>button{width:6px;height:18px}
  /* 扩展点按热区，不改变视觉尺寸 */
  .ic-indicators[data-kind="dot"]>button::after,
  .ic-indicators[data-kind="line"]>button::after{content:"";position:absolute;inset:-9px}

  /* 滑块 6 × 96 · 连续轨道 */
  .ic-indicators[data-kind="slider"]{position:relative;width:96px;height:6px;flex:none}
  .ic-indicators[data-kind="slider"]>.ic-slider-track{position:absolute;inset:0;border-radius:9999px;background:var(--ic-track);box-shadow:inset 0 0 0 1px rgba(17,24,39,.1);overflow:hidden}
  .ic-indicators[data-kind="slider"]>.ic-slider-track>span{position:absolute;left:0;top:0;bottom:0;width:calc(100% / var(--count,3));border-radius:9999px;background:var(--ic-active);transform:translateX(calc(var(--index,0) * 100%));transition:transform .3s cubic-bezier(.4,0,.2,1)}
  .ic-indicators[data-kind="slider"]>button{position:absolute;top:-8px;bottom:-8px;width:calc(100% / var(--count,3));left:calc(var(--i,0) * 100% / var(--count,3));background:transparent}
  /* 左右侧：滑块转纵向 6 × 96 */
  .ic-indicators[data-kind="slider"][data-position="left"],
  .ic-indicators[data-kind="slider"][data-position="right"]{width:6px;height:96px}
  .ic-indicators[data-kind="slider"][data-position="left"]>.ic-slider-track>span,
  .ic-indicators[data-kind="slider"][data-position="right"]>.ic-slider-track>span{left:0;right:0;top:0;bottom:auto;width:100%;height:calc(100% / var(--count,3));transform:translateY(calc(var(--index,0) * 100%))}
  .ic-indicators[data-kind="slider"][data-position="left"]>button,
  .ic-indicators[data-kind="slider"][data-position="right"]>button{top:calc(var(--i,0) * 100% / var(--count,3));bottom:auto;left:-8px;right:-8px;width:auto;height:calc(100% / var(--count,3))}

  /* ---------- 位置（压图时带深灰渐消底衬） ---------- */
  .ic-indicators[data-position]{position:absolute;z-index:30}
  .ic-indicators[data-position="bottom"]{bottom:12px;left:50%;transform:translateX(-50%);flex-direction:row}
  .ic-indicators[data-position="top"]{top:12px;left:50%;transform:translateX(-50%);flex-direction:row}
  .ic-indicators[data-position="left"]{left:12px;top:50%;transform:translateY(-50%);flex-direction:column}
  .ic-indicators[data-position="right"]{right:12px;top:50%;transform:translateY(-50%);flex-direction:column}
    .ic-indicators[data-position="outer"]{position:relative;z-index:auto;transform:none;justify-content:center;flex-direction:row}

  /* ---------- 压图指示器：整条边缘渐变底衬（厚度 = 符号厚度 × 5） ---------- */
  [data-carousel]{--ic-band:0px}
  [data-carousel][data-indicator="dot"]{--ic-band:40px}     /* 8 × 5 */
  [data-carousel][data-indicator="line"],
  [data-carousel][data-indicator="slider"]{--ic-band:30px}  /* 6 × 5 */

  [data-carousel][data-position="bottom"]::after,
  [data-carousel][data-position="top"]::after,
  [data-carousel][data-position="left"]::after,
  [data-carousel][data-position="right"]::after{
    content:"";position:absolute;z-index:15;pointer-events:none;
  }
  [data-carousel][data-position="bottom"]::after{
    left:0;right:0;bottom:0;height:var(--ic-band);
    background:linear-gradient(to top,rgba(31,41,55,.55),rgba(31,41,55,0));
  }
  [data-carousel][data-position="top"]::after{
    left:0;right:0;top:0;height:var(--ic-band);
    background:linear-gradient(to bottom,rgba(31,41,55,.55),rgba(31,41,55,0));
  }
  [data-carousel][data-position="left"]::after{
    left:0;top:0;bottom:0;width:var(--ic-band);
    background:linear-gradient(to right,rgba(31,41,55,.55),rgba(31,41,55,0));
  }
  [data-carousel][data-position="right"]::after{
    right:0;top:0;bottom:0;width:var(--ic-band);
    background:linear-gradient(to left,rgba(31,41,55,.55),rgba(31,41,55,0));
  }
  [data-carousel][data-position="outer"]::after{content:none}

  @media (prefers-reduced-motion:reduce){
    [data-carousel] .ic-track,
    [data-carousel][data-mode="fade"] .ic-slide,
    .ic-indicators[data-kind="slider"]>.ic-slider-track>span{transition:none!important}
  }
  </style>
  <section class="mb-12">
    <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">${t('图片轮播', 'Image Carousel')}</h1>
    <p class="text-lg text-gray-900 leading-relaxed">${t('图片轮播在有限空间内有序展示一组相关图片，支持手动浏览与自动播放，适用于产品外观、细节和生活场景展示。', 'A carousel presents related images in a compact space with manual navigation or automatic playback. Use it for product views, details, and lifestyle imagery.')}</p>
  </section>
  <hr class="border-t border-black/5 mb-8">

  <section class="glass-panel p-6 md:p-10 mb-8">
    ${sectionHead(t('基础用法', 'Basic usage'), t('一组图片围绕同一主题展开，保持统一的比例与色调。默认横向手动切换，箭头与指示器共同提供浏览入口。', 'Build each image set around one theme with consistent proportions and color. Default to horizontal, manual navigation with arrows and indicators.'))}
    ${gallery('basic')}
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    ${sectionHead(t('指示器', 'Indicators'), '')}
    <div class="grid md:grid-cols-2 gap-4 mb-6">
      ${options(t('样式', 'Style'), [['data-indicator-choice', 'dot', t('圆点', 'Dot')], ['data-indicator-choice', 'line', t('短线', 'Line')], ['data-indicator-choice', 'slider', t('滑块', 'Slider')]])}
      ${options(t('位置', 'Position'), [['data-position-choice', 'bottom', t('底部', 'Bottom')], ['data-position-choice', 'top', t('顶部', 'Top')], ['data-position-choice', 'left', t('左侧', 'Left')], ['data-position-choice', 'right', t('右侧', 'Right')], ['data-position-choice', 'outer', t('外置', 'Outer')]])}
    </div>
    ${gallery('indicators')}
    <div class="grid md:grid-cols-3 gap-4 mt-6">
      ${specCard('dot', t('圆点', 'Dot'), '8 × 8 dp', t('间距 8 dp', '8dp gaps'), t('等大圆点，以明暗区分当前位置。', 'Equal-size dots use contrast to mark the current image.'))}
      ${specCard('line', t('短线', 'Line'), '6 × 18 dp', t('间距 8 dp', '8dp gaps'), t('等宽短线，突出当前项；左右侧时转为纵向。', 'Equal-width lines emphasize the current image and turn vertical on the left or right edge.'))}
      ${specCard('slider', t('滑块', 'Slider'), '6 × 96 dp', t('连续轨道', 'Continuous track'), t('滑块沿连续轨道移动，标记当前图序；左右侧时转为纵向。', 'A sliding segment moves along a continuous track to mark the current position, turning vertical on the left or right edge.'))}
    </div>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    ${sectionHead(t('轮播分页', 'Pagination'), t('图片多于 5 张时显示分页，以“当前张数 / 图片总数”标记浏览位置；5 张及以下不显示分页。', 'Show pagination for more than 5 images, using current / total to indicate position. Hide pagination for 5 or fewer images.'))}
    ${gallery('pagination', { items: [...sceneList, ...sceneList] })}
    <p class="mt-4 p-4 rounded-[28px] bg-[#FFF6F3] border border-[#EC6443] text-sm text-gray-700 leading-6">${t('分页位于图片外右下方，切换时同步更新。使用思源黑字体，保持数字清晰；分页只展示位置，浏览通过箭头或滑动完成。', 'Place pagination below the image, aligned right, and update it on navigation. Use Source Han Sans for clear numerals. Pagination shows position; use arrows or swipes to browse.')}</p>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    ${sectionHead(t('自动切换', 'Automatic playback'), t('适用于品牌与生活场景展示。设备控制、告警和操作步骤保持手动浏览。', 'Autoplay suits brand and lifestyle presentations. Keep device controls, alerts, and task instructions manual.'))}
    ${gallery('autoplay', { type: 'dot', autoplay: true })}
    <p class="mt-4 p-4 rounded-[28px] bg-[#FFF6F3] border border-[#EC6443] text-sm text-gray-700 leading-6">${t('切到后台、轮播离开视口或开启减少动态效果时停止自动播放。展示型轮播可循环，设备图片默认首尾停止。', 'Stop autoplay when the page is hidden, the carousel leaves the viewport, or reduced motion is enabled. Presentations may loop; device browsing stops at the ends by default.')}</p>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    ${sectionHead(t('卡片化', 'Card presentation'), t('通过露出相邻画面提示还有内容，适合宽屏的场景浏览。当前图片保持完整与清晰，不叠加强透视或重阴影。', 'Reveal neighboring images to suggest more content on wide layouts. Keep the current image complete and clear without strong perspective or heavy shadows.'))}
    ${gallery('cards', { mode: 'card', type: 'line', position: 'bottom' })}
    <p class="mt-4 p-4 rounded-[28px] bg-[#FFF6F3] border border-[#EC6443] text-sm text-gray-700 leading-6">${t('相邻卡片间距 16 dp，当前项居中；左右任一侧有相邻图时，该侧边缘渐隐到白色。窄屏退回单图横向轮播。', 'Keep 16dp between cards and center the current image. Fade each edge to white whenever a neighboring image exists on that side. On narrow screens, use a single-image horizontal carousel.')}</p>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    ${sectionHead(t('渐隐切换', 'Fade transition'), t('构图变化较大时，使用轻量渐隐衔接画面。同组只采用一种动效，减少视觉干扰。', 'Use a restrained fade for images with different compositions. Choose one transition style per set to limit visual distraction.'))}
    ${gallery('fade', { mode: 'fade', type: 'line' })}
    <p class="mt-4 p-4 rounded-[28px] bg-[#FFF6F3] border border-[#EC6443] text-sm text-gray-700 leading-6">${t('切换时长建议 200–300 ms，画面不缩放、不弹跳。减少动态效果开启时直接替换图片，保留当前位置反馈。', 'Use a 200–300ms transition without zoom or bounce. Replace images immediately under reduced motion while preserving position feedback.')}</p>
  </section>

  <section class="glass-panel p-6 md:p-10 mb-8">
    ${sectionHead(t('产品图片', 'Product images'), t('完整呈现产品外观与细节，保持比例、颜色与型号一致。', 'Show the product and its details clearly, preserving its proportions, color, and model identity.'))}
    <div class="space-y-5 text-left">
      ${rule(t('比例与裁切', 'Ratio and cropping'), t('使用 1:1 容器等比展示，完整保留机身与控制面板。同组图片统一视角与留白，避免拉伸或裁切产品。', 'Fit the complete product within a 1:1 frame, keeping its body and control panel visible. Use consistent perspectives and spacing without stretching or cropping the product.'))}
      ${rule(t('加载与反馈', 'Loading and feedback'), t('优先加载当前图，按需预载相邻图。加载时保持容器尺寸，失败时提供重试；单图或无图时隐藏轮播控件。', 'Load the current image first and preload adjacent images as needed. Keep the frame size stable while loading and offer an inline retry on failure. Hide carousel controls for one or no images.'))}
    </div>
  </section>

  <section class="grid md:grid-cols-2 gap-8 mb-8">
    <article class="bg-white/60 p-8 md:p-10 rounded-[28px]" style="border:2px solid #3BD08D;">
      <h2 class="text-xl font-bold text-gray-900 mb-5">${t('推荐', 'Do')}</h2>
      <ul class="space-y-3">${checkList([
    t('真实品牌影像，色调自然，主体清晰', 'Authentic brand imagery, natural color, clear subjects'),
    t('小尺寸指示器紧凑成组，选中态稳定', 'Compact indicators with stable selected shapes'),
    t('图片切换与设备状态、操作相互独立', 'Keep image navigation separate from device state and controls')
  ], true)}</ul>
    </article>
    <article class="bg-white/60 p-8 md:p-10 rounded-[28px]" style="border:2px solid #F52828;">
      <h2 class="text-xl font-bold text-gray-900 mb-5">${t('避免', "Don't")}</h2>
      <ul class="space-y-3">${checkList([
    t('使用虚拟插画或错误型号代替产品实图', 'Use fictional illustrations or the wrong product model'),
    t('拉长圆点、放大间距或将滑块做成数字按钮', 'Stretch dots, spread indicators apart, or use numbers as sliders'),
    t('用快速轮播承载告警或必须阅读的步骤', 'Use rapid carousels for alerts or required instructions')
  ], false)}</ul>
    </article>
  </section>`;
}

/* =========================================================
   初始化
   ========================================================= */
function initImageExamples(root, language) {
  const t = (cn, en) => (language === 'zh' ? cn : en);
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  root.querySelectorAll('[data-carousel]').forEach(gallery => {
    const board = gallery.closest('[data-board]');
    const viewport = gallery.querySelector('[data-viewport]');
    const track = gallery.querySelector('[data-track]');
    const slides = [...gallery.querySelectorAll('[data-slide]')];   // 只取真实幻灯片
    const total = slides.length;
    const prev = gallery.querySelector('[data-prev]');
    const next = gallery.querySelector('[data-next]');
    const errorBox = gallery.querySelector('[data-error]');
    const retry = gallery.querySelector('[data-retry]');
    const wrap = gallery.querySelector('[data-indicator-wrap]');
    const fadeLeft = gallery.querySelector('[data-fade="left"]');
    const fadeRight = gallery.querySelector('[data-fade="right"]');
    const outerSlot = board ? board.querySelector('[data-outer-slot]') : null;
    const countEl = board ? board.querySelector('[data-count]') : null;
    const statusEl = board ? board.querySelector('[data-position-status]') : null;
    const autoplay = gallery.dataset.autoplay === 'true';
    const loop = autoplay;

    let index = 0;
    let timer = null;
    let revision = 0;
    let failedIndex = 0;
    let visible = false;
    let manualPaused = false;

    const clampIndex = value => loop
      ? ((value % total) + total) % total
      : Math.max(0, Math.min(total - 1, value));

    const showError = on => {
      if (!errorBox) return;
      errorBox.hidden = !on;
      errorBox.classList.toggle('flex', on);
    };

    const applyTransform = () => {
      const mode = gallery.dataset.mode;
      if (mode === 'fade') { track.style.transform = 'none'; return; }
      const slide = slides[index];
      if (!slide) return;
      if (mode === 'vertical') {
        track.style.transform = `translate3d(0, ${-slide.offsetTop}px, 0)`;
      } else if (mode === 'card') {
        const offset = slide.offsetLeft - Math.max(0, (viewport.clientWidth - slide.offsetWidth) / 2);
        track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      } else {
        track.style.transform = `translate3d(${-slide.offsetLeft}px, 0, 0)`;
      }
    };

    const render = () => {
      gallery.style.setProperty('--index', String(index));
      gallery.style.setProperty('--total', String(total));
      if (wrap) {
        wrap.style.setProperty('--index', String(index));
        wrap.style.setProperty('--count', String(total));
      }
      slides.forEach((slide, i) => {
        const current = i === index;
        slide.classList.toggle('is-current', current);
        slide.classList.toggle('is-before', i < index);
        slide.classList.toggle('is-after', i > index);
        slide.setAttribute('aria-hidden', String(!current));
      });
      if (wrap) {
        wrap.querySelectorAll('[data-index]').forEach(button => {
          button.setAttribute('aria-pressed', String(Number(button.dataset.index) === index));
        });
      }
      if (prev) prev.disabled = !loop && index === 0;
      if (next) next.disabled = !loop && index === total - 1;
      if (countEl) countEl.textContent = `${index + 1} / ${total}`;
      if (statusEl) statusEl.textContent = t(`第 ${index + 1} 张，共 ${total} 张`, `Image ${index + 1} of ${total}`);
      // 卡片化：左右两侧有相邻图时才渐隐
      if (fadeLeft) fadeLeft.hidden = index === 0;
      if (fadeRight) fadeRight.hidden = index === total - 1;
      applyTransform();
    };

    const stop = () => {
      if (timer) { clearInterval(timer); timer = null; }
      if (statusEl) statusEl.setAttribute('aria-live', 'polite');
    };

    const go = async (value, manual = true) => {
      if (manual) { manualPaused = true; stop(); }
      const target = clampIndex(value);
      if (target === index) { render(); return; }

      const token = ++revision;
      gallery.setAttribute('aria-busy', 'true');
      const image = slides[target].querySelector('img');
      if (image) {
        try { await image.decode(); }
        catch {
          if (token === revision) {
            failedIndex = target;
            showError(true);
            gallery.setAttribute('aria-busy', 'false');
          }
          return;
        }
      }
      if (token !== revision) return;
      showError(false);
      gallery.setAttribute('aria-busy', 'false');
      index = target;
      render();
    };

    if (total <= 1) {
      if (prev) prev.hidden = true;
      if (next) next.hidden = true;
      if (wrap) wrap.hidden = true;
    }

    prev?.addEventListener('click', () => go(index - 1));
    next?.addEventListener('click', () => go(index + 1));

    if (wrap) {
      // 事件委托：指示器在“外置 / 内置”之间搬动时不丢监听
      wrap.addEventListener('click', event => {
        const button = event.target.closest('[data-index]');
        if (!button) return;
        go(Number(button.dataset.index));
      });
    }

    retry?.addEventListener('click', () => {
      const image = slides[failedIndex]?.querySelector('img');
      if (!image) return;
      const url = new URL(image.src, document.baseURI);
      url.searchParams.set('retry', String(Date.now()));
      image.src = url.href;
      go(failedIndex);
    });

    slides.forEach((slide, i) => {
      const image = slide.querySelector('img');
      if (!image) return;
      image.addEventListener('error', () => { failedIndex = i; if (i === index) showError(true); });
      image.addEventListener('load', () => { if (i === index) showError(false); });
    });

    gallery.addEventListener('keydown', event => {
      const vertical = gallery.dataset.mode === 'vertical';
      const nextKey = vertical ? 'ArrowDown' : 'ArrowRight';
      const prevKey = vertical ? 'ArrowUp' : 'ArrowLeft';
      if (event.key === nextKey) { event.preventDefault(); go(index + 1); }
      else if (event.key === prevKey) { event.preventDefault(); go(index - 1); }
      else if (event.key === 'Home') { event.preventDefault(); go(0); }
      else if (event.key === 'End') { event.preventDefault(); go(total - 1); }
    });

    let startPoint = null;
    viewport.addEventListener('pointerdown', event => {
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      startPoint = { x: event.clientX, y: event.clientY };
    });
    viewport.addEventListener('pointerup', event => {
      if (!startPoint) return;
      const dx = event.clientX - startPoint.x;
      const dy = event.clientY - startPoint.y;
      startPoint = null;
      const vertical = gallery.dataset.mode === 'vertical';
      const distance = vertical ? dy : dx;
      const cross = vertical ? dx : dy;
      if (Math.abs(distance) > 40 && Math.abs(distance) > Math.abs(cross) * 1.5) {
        go(index + (distance < 0 ? 1 : -1));
      }
    });
    viewport.addEventListener('pointercancel', () => { startPoint = null; });
    viewport.addEventListener('dragstart', event => event.preventDefault());

    if (autoplay) {
      const canStart = () => !manualPaused && visible && !document.hidden && !reduced.matches &&
        !gallery.matches(':hover') && !gallery.contains(document.activeElement);

      const start = () => {
        if (timer || !canStart()) return;
        timer = setInterval(() => go(index + 1, false), 3000);
        if (statusEl) statusEl.setAttribute('aria-live', 'off');
      };

      gallery.addEventListener('pointerenter', stop);
      gallery.addEventListener('pointerleave', start);
      gallery.addEventListener('focusin', stop);
      gallery.addEventListener('focusout', () => queueMicrotask(start));
      document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
      reduced.addEventListener('change', () => (reduced.matches ? stop() : start()));
      new IntersectionObserver(entries => {
        visible = entries[0].isIntersecting;
        visible ? start() : stop();
      }).observe(gallery);
    }

    new ResizeObserver(() => applyTransform()).observe(viewport);

    gallery.updateCarousel = render;
    render();
  });

  /* ---------------- 指示器样式 / 位置切换 ---------------- */
  const indicatorGallery = root.querySelector('[data-carousel="indicators"]');
  const indicatorBoard = indicatorGallery ? indicatorGallery.closest('[data-board]') : null;
  const indicatorEl = indicatorBoard ? indicatorBoard.querySelector('[data-indicator-wrap]') : null;

  const applyIndicatorType = type => {
    if (!indicatorGallery || !indicatorEl) return;
    indicatorGallery.dataset.indicator = type;
    indicatorEl.dataset.kind = type;
    const count = indicatorGallery.querySelectorAll('[data-slide]').length;
    const current = [...indicatorGallery.querySelectorAll('[data-slide]')]
      .findIndex(slide => slide.classList.contains('is-current'));
    indicatorEl.innerHTML = buildIndicatorMarkup(count, type, Math.max(current, 0), t);
    indicatorGallery.updateCarousel?.();
  };

  const applyIndicatorPosition = position => {
    if (!indicatorGallery || !indicatorEl) return;
    indicatorGallery.dataset.position = position;
    indicatorEl.dataset.position = position;
    const slot = indicatorBoard ? indicatorBoard.querySelector('[data-outer-slot]') : null;
    if (position === 'outer' && slot) slot.appendChild(indicatorEl);
    else indicatorGallery.appendChild(indicatorEl);
  };

  const choose = (selector, attr, callback) => {
    root.querySelectorAll(selector).forEach(button => button.addEventListener('click', () => {
      root.querySelectorAll(selector).forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      callback(button.dataset[attr]);
    }));
  };
  choose('[data-indicator-choice]', 'indicatorChoice', applyIndicatorType);
  choose('[data-position-choice]', 'positionChoice', applyIndicatorPosition);
}

/* =========================================================
   扩展注册
   ========================================================= */
window.__leaderSingleExtensions = window.__leaderSingleExtensions || {};
window.__leaderSingleExtensions['component_image.html'] = function (root, language) {
  root.innerHTML = renderImageGuideline(language);
  initImageExamples(root, language);
};
