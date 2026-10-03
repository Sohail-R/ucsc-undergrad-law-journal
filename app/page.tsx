const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a href="#" className="brand" aria-label="UCSC Undergraduate Law Journal home">
          <span className="monogram" aria-hidden="true">ULJ<span>UCSC</span></span>
          <span>UC SANTA CRUZ<span>Undergraduate Law Journal</span></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#journal">The Journal</a>
          <a href="#involved">Get Involved</a>
          <a className="nav-cta" href="#submissions">Submissions <Arrow /></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="eyebrow"><span /> UNIVERSITY OF CALIFORNIA, SANTA CRUZ</p>
            <h1 id="hero-title">The Undergraduate<br /><em>Law Journal</em></h1>
            <p className="hero-subtitle">Undergraduate Legal Scholarship at UC Santa Cruz</p>
            <p className="hero-description">A student-led publication dedicated to research and analysis<br className="desktop-break" /> on law, legal institutions, and public policy.</p>
            <a className="button button-gold" href="#about">About the journal <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-bottom"><span>RESEARCH · ANALYSIS · COMMENTARY</span><a href="https://www.ucsc.edu/about/overview/" target="_blank" rel="noreferrer">Santa Cruz, California · Photo: UC Santa Cruz <Arrow /></a></div>
        </section>

        <div className="about-section section-wrap" id="about">
          <section aria-labelledby="who-we-are-title">
            <p className="eyebrow">ABOUT THE JOURNAL</p>
            <h2 id="who-we-are-title">Who We Are</h2>
            <p>The UCSC Undergraduate Law Journal is a student-led publication at UC Santa Cruz dedicated to undergraduate legal scholarship. We provide a forum for students to examine legal issues through research, analysis, and academic writing.</p>
            <p>Our scope includes domestic and international law, legal theory, and the relationship between law and public policy. The journal brings together students interested in developing their work as writers and editors.</p>
          </section>
          <section id="mission" aria-labelledby="mission-title">
            <p className="eyebrow">OUR PURPOSE</p>
            <h2 id="mission-title">Our Mission</h2>
            <p>Our mission is to make legal scholarship accessible to undergraduates and to publish research grounded in careful analysis, credible sources, and clear argument.</p>
            <p>Through writing and editorial collaboration, we aim to help students evaluate legal authority, engage with opposing interpretations, and explain the consequences of law for the communities it affects.</p>
          </section>
        </div>

        <section className="journal-section" id="journal" aria-labelledby="journal-title">
          <div className="section-wrap journal-grid">
            <div className="cover-stage" aria-label="Concept cover for the forthcoming inaugural volume">
              <div className="journal-cover"><div className="cover-top">UNIVERSITY OF CALIFORNIA<br />SANTA CRUZ</div><div className="cover-title">Undergraduate<br />Law<br /><em>Journal</em></div><div className="cover-art" aria-hidden="true"><span /><span /><span /><span /><span /></div><div className="cover-bottom"><span>INAUGURAL VOLUME</span><span>01</span></div></div>
              <span className="cover-caption">VOLUME 01 · FORTHCOMING</span>
            </div>
            <div className="journal-copy"><p className="eyebrow">THE JOURNAL</p><h2 id="journal-title">Inaugural Volume</h2><p>Our first volume is in development. This section will provide access to published articles and the complete issue upon publication.</p><p className="status"><span /> Inaugural issue forthcoming</p><a className="text-link" href="#submissions">Submission information <Arrow /></a></div>
          </div>
        </section>

        <section className="section-wrap involvement" id="involved" aria-labelledby="involved-title">
          <div className="section-heading"><div><p className="eyebrow">PARTICIPATION</p><h2 id="involved-title">Get Involved</h2></div><p>Writing and editorial opportunities<br />for undergraduate students.</p></div>
          <div className="role-grid">
            <article><span className="role-number">01 / RESEARCH</span><h3>Authors</h3><p>Develop an article that examines a specific legal issue, supports its argument with relevant sources, and addresses existing scholarship.</p><a className="text-link" href="#submissions">For contributors <Arrow /></a></article>
            <article><span className="role-number">02 / COLLABORATE</span><h3>Editors</h3><p>Work with authors to strengthen their arguments, verify citations, and prepare manuscripts for publication.</p><a className="text-link" href="#editorial">For editors <Arrow /></a></article>
            <article><span className="role-number">03 / DISCOVER</span><h3>Readers</h3><p>Published issues will be available on this website. The inaugural volume and article archive will appear as the journal begins publication.</p><a className="text-link" href="#journal">Explore the journal <Arrow /></a></article>
          </div>
        </section>

        <section className="contribute-section" id="submissions" aria-labelledby="submissions-title"><div className="section-wrap contribute-grid"><div><p className="eyebrow">AUTHOR &amp; EDITOR INFORMATION</p><h2 id="submissions-title">Submissions &amp;<br />Applications</h2><p>Submission guidelines and editorial application requirements will be posted here before applications open.</p><span className="coming-soon">SUBMISSIONS NOT YET OPEN</span></div><div className="questions"><details><summary>Contributing an article <span aria-hidden="true">+</span></summary><p>Submissions are not yet open. Eligibility, manuscript requirements, citation standards, and deadlines will be published with the call for papers.</p></details><details id="editorial"><summary>Joining the editorial team <span aria-hidden="true">+</span></summary><p>Editorial applications are not yet open. Role descriptions, application requirements, and deadlines will be posted here when recruitment begins.</p></details><details><summary>Reading the first issue <span aria-hidden="true">+</span></summary><p>The inaugural issue is forthcoming. Published articles and a full-volume download will appear in the Journal section once available.</p></details></div></div></section>
      </main>
      <footer className="site-footer"><div className="footer-main"><a className="footer-name" href="#">UC Santa Cruz<br /><em>Undergraduate Law Journal</em></a><div><p>Undergraduate Legal Scholarship<br />Santa Cruz, California</p><a href="#main">Back to top ↑</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} UCSC Undergraduate Law Journal</span><span>Inaugural issue forthcoming</span></div></footer>
    </>
  );
}
