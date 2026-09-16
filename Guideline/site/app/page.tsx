const sections = [
  { n: "01", zh: "品牌与原则", en: "Brand & Principles", href: "/brand.html", tone: "blue" },
  { n: "02", zh: "视觉基础", en: "Visual Foundations", href: "/foundations.html", tone: "cyan" },
  { n: "03", zh: "组件系统", en: "Components", href: "/components.html", tone: "violet" },
  { n: "04", zh: "硬件与屏幕", en: "Hardware", href: "/hardware_tft.html", tone: "mint" },
  { n: "05", zh: "动效", en: "Motion", href: "/motion.html", tone: "orange" },
  { n: "06", zh: "多感官交互", en: "Sensory", href: "/lighting.html", tone: "pink" },
  { n: "07", zh: "AI 体验", en: "AI Experience", href: "/ai.html", tone: "indigo" },
  { n: "08", zh: "资产与推行", en: "Assets & Governance", href: "/assets.html", tone: "sky" },
];

export default function Home() {
  return (
    <main>
      <nav className="topbar" aria-label="主导航">
        <a className="brand" href="#top" aria-label="Haier Guideline 首页"><span>Haier</span><b>Guideline</b></a>
        <div className="navlinks"><a href="#catalog">规范目录</a><a href="/changelog.html">更新日志</a><a className="navCta" href="/haier_os_design_system.html">进入完整规范 <span>↗</span></a></div>
      </nav>

      <section id="top" className="hero">
        <div className="aura auraOne" /><div className="aura auraTwo" />
        <div className="eyebrow"><span className="pulse" /> HAIER UX DESIGN SYSTEM · 2026</div>
        <h1>让科技融入生活，<br /><em>让体验自然发生。</em></h1>
        <p className="lede">面向全品类智能家电的多模态设计规范，统一屏幕、触觉、灯光与声音，构建清晰、一致且有人情味的产品体验。</p>
        <div className="heroActions"><a className="primary" href="/haier_os_design_system.html">开始探索 <span>→</span></a><a className="secondary" href="/design_principles.html">了解设计原则</a></div>
        <div className="orb" aria-hidden="true"><div className="orbCore"><span>ONE</span><strong>Haier</strong><small>Experience</small></div><i className="ring ring1"/><i className="ring ring2"/></div>
        <div className="scrollHint"><span>SCROLL TO EXPLORE</span><i /></div>
      </section>

      <section className="manifesto">
        <p className="kicker">OUR PHILOSOPHY</p>
        <div className="manifestoGrid"><h2>一个品牌，<br />一种体验语言。</h2><p>Haier Guideline 不只是一套 UI 库。它是一套连接数字界面与真实环境的多感官编排系统，让每一次交互都更克制、更智慧、更自然。</p></div>
        <div className="principles">
          <article><span>01</span><h3>少即是多</h3><p>聚焦核心任务，用更少的元素传递更清晰的信息。</p></article>
          <article><span>02</span><h3>一致而连贯</h3><p>跨设备、跨场景保持统一的视觉与行为逻辑。</p></article>
          <article><span>03</span><h3>多维协同</h3><p>让屏幕、触觉、灯光与声音形成自然协作。</p></article>
          <article><span>04</span><h3>包容与容错</h3><p>为不同用户和真实场景提供从容、可靠的体验。</p></article>
        </div>
      </section>

      <section id="catalog" className="catalog">
        <div className="sectionHead"><div><p className="kicker">GUIDELINE CATALOG</p><h2>从原则到落地</h2></div><p>八大模块覆盖智能家电体验设计的完整链路。</p></div>
        <div className="cards">{sections.map((item) => <a key={item.n} className={`card ${item.tone}`} href={item.href}><span className="number">{item.n}</span><div className="glyph" aria-hidden="true"><i/><b/></div><div><h3>{item.zh}</h3><p>{item.en}</p></div><span className="arrow">↗</span></a>)}</div>
      </section>

      <section className="closing"><div><p className="kicker">DESIGNED FOR EVERY TOUCHPOINT</p><h2>让每一台设备，<br />都拥有同一种 Haier 体验。</h2><a className="primary light" href="/haier_os_design_system.html">进入完整规范 <span>→</span></a></div><div className="wordmark">Haier<small>Inspired living</small></div></section>
      <footer><span>© 2026 Haier UX Design Lab</span><span>Internal Design Guideline · Version 1.0.0</span></footer>
    </main>
  );
}
