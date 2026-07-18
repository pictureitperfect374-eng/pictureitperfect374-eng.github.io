:root {
  --navy: #062f66;
  --navy-dark: #031d40;
  --blue: #0b68c7;
  --blue-light: #55a9f8;
  --orange: #f47b20;
  --gold: #f6b73c;
  --ink: #182234;
  --muted: #667085;
  --white: #ffffff;
  --soft: #f4f7fb;
  --line: #dfe7f1;
  --shadow: 0 24px 60px rgba(4, 44, 94, 0.14);
  --shadow-small: 0 12px 30px rgba(4, 44, 94, 0.09);
  --radius: 24px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  color: var(--ink);
  background: var(--white);
  font-family: "DM Sans", Arial, sans-serif;
  line-height: 1.65;
}

body.menu-open {
  overflow: hidden;
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

.skip-link {
  position: absolute;
  left: 16px;
  top: -60px;
  z-index: 2000;
  padding: 12px 18px;
  color: white;
  background: var(--navy);
  border-radius: 8px;
}

.skip-link:focus {
  top: 16px;
}

.container {
  width: min(1180px, 92%);
  margin-inline: auto;
}

.section {
  padding: 100px 0;
}

.eyebrow {
  margin: 0 0 12px;
  color: var(--orange);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

h1,
h2,
h3 {
  margin-top: 0;
  font-family: "League Spartan", Arial, sans-serif;
  line-height: 1.05;
}

h2 {
  margin-bottom: 18px;
  color: var(--navy);
  font-size: clamp(2.2rem, 4.5vw, 4rem);
  letter-spacing: -0.03em;
}

.section-heading {
  max-width: 790px;
  margin: 0 auto 54px;
  text-align: center;
}

.section-heading > p:last-child {
  margin-bottom: 0;
  color: var(--muted);
  font-size: 1.05rem;
}

.btn {
  display: inline-flex;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  padding: 0 22px;
  border: 2px solid transparent;
  border-radius: 14px;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-large {
  min-height: 58px;
  padding: 0 28px;
}

.btn-primary {
  color: var(--white);
  background: linear-gradient(135deg, var(--navy), var(--blue));
  box-shadow: 0 14px 30px rgba(6, 47, 102, 0.24);
}

.btn-primary:hover {
  box-shadow: 0 18px 36px rgba(6, 47, 102, 0.3);
}

.btn-secondary {
  color: var(--navy);
  background: rgba(255, 255, 255, 0.92);
  border-color: var(--line);
}

.btn-secondary:hover {
  background: var(--soft);
}

.btn-full {
  width: 100%;
  border: 0;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.94);
  border-bottom: 1px solid rgba(6, 47, 102, 0.08);
  backdrop-filter: blur(16px);
}

.header-inner {
  min-height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
}

.brand img {
  width: 126px;
  height: 70px;
  object-fit: contain;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 25px;
  color: #32435e;
  font-size: 0.94rem;
  font-weight: 700;
}

.main-nav a {
  position: relative;
  padding: 8px 0;
}

.main-nav a::after {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 2px;
  content: "";
  background: var(--blue);
  transform: scaleX(0);
  transition: transform 0.2s ease;
}

.main-nav a:hover::after {
  transform: scaleX(1);
}

.menu-toggle {
  display: none;
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 12px;
  background: var(--soft);
  cursor: pointer;
}

.menu-toggle span {
  width: 23px;
  height: 2px;
  display: block;
  margin: 5px auto;
  background: var(--navy);
  transition: 0.2s ease;
}

.hero {
  position: relative;
  overflow: hidden;
  min-height: calc(100vh - 88px);
  display: grid;
  align-items: center;
  padding: 90px 0;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.88), rgba(248,251,255,0.98)),
    radial-gradient(circle at 20% 20%, rgba(85,169,248,0.2), transparent 28%);
}

.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(4px);
  pointer-events: none;
}

.hero-orb-one {
  width: 400px;
  height: 400px;
  top: -180px;
  right: -90px;
  background: rgba(11, 104, 199, 0.12);
}

.hero-orb-two {
  width: 300px;
  height: 300px;
  bottom: -160px;
  left: -80px;
  background: rgba(244, 123, 32, 0.1);
}

.hero-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 60px;
  align-items: center;
}

.hero h1 {
  max-width: 760px;
  margin-bottom: 26px;
  color: var(--navy);
  font-size: clamp(3.6rem, 7vw, 6.6rem);
  letter-spacing: -0.055em;
}

.hero h1 span {
  color: var(--blue);
}

.hero-lead {
  max-width: 700px;
  margin-bottom: 32px;
  color: var(--muted);
  font-size: 1.15rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.hero-trust {
  display: flex;
  flex-wrap: wrap;
  gap: 34px;
  margin-top: 42px;
}

.hero-trust div {
  display: grid;
}

.hero-trust strong {
  color: var(--navy);
  font-family: "League Spartan";
  font-size: 1.55rem;
}

.hero-trust span {
  color: var(--muted);
  font-size: 0.86rem;
}

.hero-visual {
  display: grid;
  place-items: center;
}

.paint-card {
  position: relative;
  width: min(500px, 100%);
  min-height: 540px;
  display: grid;
  place-items: center;
  padding: 60px 40px;
  overflow: hidden;
  border: 1px solid rgba(6, 47, 102, 0.08);
  border-radius: 40px;
  background: linear-gradient(145deg, #ffffff, #eef6ff);
  box-shadow: var(--shadow);
}

.logo-frame {
  position: relative;
  z-index: 3;
  width: 78%;
  padding: 28px;
  border-radius: 28px;
  background: rgba(255,255,255,0.88);
  box-shadow: 0 20px 45px rgba(6, 47, 102, 0.14);
  backdrop-filter: blur(10px);
}

.paint-swatch {
  position: absolute;
  border-radius: 999px;
  transform: rotate(-18deg);
}

.swatch-one {
  width: 430px;
  height: 88px;
  top: 60px;
  left: -80px;
  background: linear-gradient(90deg, var(--blue), var(--blue-light));
}

.swatch-two {
  width: 360px;
  height: 82px;
  right: -90px;
  bottom: 105px;
  background: linear-gradient(90deg, var(--orange), var(--gold));
}

.swatch-three {
  width: 250px;
  height: 60px;
  left: 40px;
  bottom: 48px;
  opacity: 0.22;
  background: var(--navy);
}

.floating-badge {
  position: absolute;
  z-index: 4;
  padding: 12px 17px;
  border-radius: 14px;
  color: var(--navy);
  background: var(--white);
  box-shadow: var(--shadow-small);
  font-weight: 800;
}

.badge-top {
  top: 28px;
  right: 28px;
}

.badge-bottom {
  left: 28px;
  bottom: 28px;
}

.promise-strip {
  padding: 22px 0;
  color: white;
  background: var(--navy);
}

.promise-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  text-align: center;
  font-weight: 700;
}

.promise-grid span {
  color: #84c5ff;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 18px;
}

.service-card {
  position: relative;
  min-height: 270px;
  padding: 28px 22px;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 20px;
  background: white;
  box-shadow: var(--shadow-small);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow);
}

.service-card.featured {
  color: white;
  background: linear-gradient(145deg, var(--navy), var(--blue));
  border-color: transparent;
}

.service-card.featured h3,
.service-card.featured p,
.service-card.featured .service-number {
  color: white;
}

.service-number {
  position: absolute;
  top: 18px;
  right: 18px;
  color: #a4b1c2;
  font-family: "League Spartan";
  font-size: 0.82rem;
  font-weight: 800;
}

.service-icon {
  width: 58px;
  height: 58px;
  display: grid;
  place-items: center;
  margin-bottom: 24px;
  border-radius: 17px;
  background: var(--soft);
  font-size: 1.65rem;
}

.featured .service-icon {
  background: rgba(255,255,255,0.14);
}

.service-card h3 {
  margin-bottom: 10px;
  color: var(--navy);
  font-size: 1.2rem;
}

.service-card p {
  margin-bottom: 0;
  color: var(--muted);
  font-size: 0.9rem;
}

.about-section {
  background: var(--soft);
}

.about-grid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 70px;
  align-items: center;
}

.before-after {
  min-height: 580px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  border-radius: 30px;
  box-shadow: var(--shadow);
}

.before-pane,
.after-pane {
  position: relative;
  overflow: hidden;
}

.before-pane > span,
.after-pane > span {
  position: absolute;
  top: 22px;
  left: 22px;
  z-index: 2;
  padding: 8px 14px;
  border-radius: 999px;
  color: white;
  background: rgba(3,29,64,0.85);
  font-size: 0.82rem;
  font-weight: 800;
}

.wall {
  position: absolute;
  inset: 0;
}

.old-wall {
  background:
    linear-gradient(rgba(116,96,78,0.18), rgba(116,96,78,0.18)),
    repeating-linear-gradient(90deg, #a89078 0, #a89078 36px, #a08770 36px, #a08770 39px);
}

.old-wall::before {
  position: absolute;
  width: 110px;
  height: 140px;
  top: 130px;
  left: 50%;
  content: "";
  border: 8px solid #684f3d;
  background: #8c765d;
  transform: translateX(-50%) rotate(-4deg);
}

.new-wall {
  background: linear-gradient(145deg, #dcecff, #f8fbff);
}

.new-wall::before {
  position: absolute;
  width: 120px;
  height: 150px;
  top: 125px;
  left: 50%;
  content: "";
  border: 10px solid white;
  background: linear-gradient(145deg, #75b8ef, #ffd28f);
  box-shadow: 0 15px 30px rgba(6,47,102,0.16);
  transform: translateX(-50%);
}

.before-pane::after,
.after-pane::after {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 150px;
  content: "";
  background: linear-gradient(#87674d, #5f4432);
}

.after-pane::after {
  background: linear-gradient(#b77d4f, #8d5c39);
}

.about-content > p:not(.eyebrow) {
  color: var(--muted);
  font-size: 1.04rem;
}

.benefit-list {
  display: grid;
  gap: 18px;
  margin: 34px 0;
}

.benefit {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 16px;
}

.benefit > span {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: var(--navy);
  background: #dcecff;
  font-family: "League Spartan";
  font-weight: 800;
}

.benefit h3 {
  margin: 3px 0 4px;
  color: var(--navy);
  font-size: 1.15rem;
}

.benefit p {
  margin: 0;
  color: var(--muted);
  font-size: 0.92rem;
}

.text-link {
  color: var(--blue);
  font-weight: 800;
}

.gallery-section {
  color: white;
  background: var(--navy-dark);
}

.section-heading-light h2,
.section-heading-light > p:last-child {
  color: white;
}

.gallery-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 22px;
}

.gallery-card {
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 24px;
  background: rgba(255,255,255,0.06);
}

.gallery-large {
  grid-row: span 2;
}

.gallery-card.wide {
  grid-column: 1 / -1;
}

.gallery-scene {
  position: relative;
  min-height: 300px;
  overflow: hidden;
}

.gallery-large .gallery-scene {
  min-height: 620px;
}

.living-room {
  background: linear-gradient(#e5f2ff 0 65%, #c49366 65%);
}

.scene-window {
  position: absolute;
  width: 180px;
  height: 240px;
  top: 70px;
  right: 60px;
  border: 14px solid white;
  background: linear-gradient(#8bc7f7, #dff4ff);
  box-shadow: 0 10px 28px rgba(6,47,102,0.15);
}

.scene-sofa {
  position: absolute;
  width: 310px;
  height: 145px;
  left: 55px;
  bottom: 90px;
  border-radius: 28px 28px 10px 10px;
  background: #143d6f;
  box-shadow: 0 15px 30px rgba(3,29,64,0.25);
}

.scene-sofa::before,
.scene-sofa::after {
  position: absolute;
  width: 52px;
  height: 120px;
  bottom: 0;
  content: "";
  border-radius: 20px 20px 6px 6px;
  background: #0a2d59;
}

.scene-sofa::before { left: -28px; }
.scene-sofa::after { right: -28px; }

.scene-table {
  position: absolute;
  width: 130px;
  height: 30px;
  right: 72px;
  bottom: 92px;
  border-radius: 10px;
  background: #6d452c;
}

.scene-table::after {
  position: absolute;
  width: 12px;
  height: 72px;
  top: 25px;
  left: 59px;
  content: "";
  background: #6d452c;
}

.scene-art {
  position: absolute;
  width: 110px;
  height: 140px;
  top: 95px;
  left: 92px;
  border: 10px solid white;
  background: linear-gradient(145deg, var(--orange), var(--gold));
  box-shadow: 0 12px 25px rgba(6,47,102,0.16);
}

.exterior-home {
  min-height: 300px;
  background: linear-gradient(#8bcdfc 0 55%, #80aa65 55%);
}

.house-roof {
  position: absolute;
  width: 260px;
  height: 130px;
  left: 50%;
  top: 55px;
  background: #4c5465;
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  transform: translateX(-50%);
}

.house-body {
  position: absolute;
  width: 230px;
  height: 135px;
  left: 50%;
  bottom: 48px;
  background: #edf4fa;
  transform: translateX(-50%);
}

.house-door {
  position: absolute;
  width: 48px;
  height: 88px;
  left: 50%;
  bottom: 48px;
  background: var(--orange);
  transform: translateX(-50%);
}

.house-window {
  position: absolute;
  width: 44px;
  height: 44px;
  bottom: 110px;
  border: 6px solid white;
  background: #7cb4de;
}

.window-left { left: calc(50% - 88px); }
.window-right { right: calc(50% - 88px); }

.deck-scene {
  min-height: 300px;
  background: linear-gradient(#dff2ff 0 55%, #5f9a58 55%);
}

.deck-floor {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 120px;
  background: repeating-linear-gradient(90deg, #a66a3c 0 48px, #8e5933 48px 52px);
}

.deck-rail {
  position: absolute;
  height: 88px;
  bottom: 105px;
  border-top: 12px solid #8f5a34;
  border-bottom: 12px solid #8f5a34;
  background: repeating-linear-gradient(90deg, transparent 0 30px, #8f5a34 30px 38px);
}

.rail-one {
  width: 60%;
  left: 0;
}

.rail-two {
  width: 45%;
  right: 0;
}

.deck-planter {
  position: absolute;
  width: 80px;
  height: 55px;
  right: 55px;
  bottom: 80px;
  border-radius: 5px 5px 18px 18px;
  background: #315a38;
}

.cabinet-scene {
  min-height: 360px;
  background: #eaf4fb;
}

.cabinet-row {
  position: absolute;
  right: 60px;
  left: 60px;
  display: grid;
  background: repeating-linear-gradient(90deg, #f8fbff 0 120px, #d6e4ee 120px 124px);
  border: 3px solid #d6e4ee;
}

.top-row {
  height: 105px;
  top: 45px;
}

.bottom-row {
  height: 115px;
  bottom: 35px;
}

.countertop {
  position: absolute;
  height: 22px;
  right: 44px;
  left: 44px;
  bottom: 145px;
  border-radius: 5px;
  background: #4a5665;
}

.sink {
  position: absolute;
  width: 120px;
  height: 40px;
  left: 50%;
  bottom: 116px;
  border-radius: 0 0 30px 30px;
  background: #b8c7d3;
  transform: translateX(-50%);
}

.gallery-caption {
  padding: 22px;
}

.gallery-caption span {
  color: #8cc9ff;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.gallery-caption h3 {
  margin: 8px 0 0;
  font-size: 1.35rem;
}

.process-section {
  background: white;
}

.timeline {
  position: relative;
  max-width: 900px;
  margin: auto;
}

.timeline::before {
  position: absolute;
  width: 3px;
  top: 26px;
  bottom: 26px;
  left: 31px;
  content: "";
  background: linear-gradient(var(--blue), var(--orange));
}

.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 28px;
  margin-bottom: 28px;
}

.timeline-number {
  position: relative;
  z-index: 2;
  width: 64px;
  height: 64px;
  display: grid;
  place-items: center;
  border: 5px solid white;
  border-radius: 50%;
  color: white;
  background: var(--navy);
  box-shadow: 0 8px 18px rgba(6,47,102,0.22);
  font-family: "League Spartan";
  font-size: 1.25rem;
  font-weight: 800;
}

.timeline-item > div:last-child {
  padding: 18px 22px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: white;
  box-shadow: var(--shadow-small);
}

.timeline-item h3 {
  margin-bottom: 6px;
  color: var(--navy);
  font-size: 1.35rem;
}

.timeline-item p {
  margin: 0;
  color: var(--muted);
}

.areas-section {
  background: var(--soft);
}

.areas-layout {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 60px;
  align-items: center;
}

.areas-copy > p:not(.eyebrow) {
  color: var(--muted);
}

.area-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

.area-chips span {
  padding: 11px 15px;
  border: 1px solid #cddbeb;
  border-radius: 999px;
  color: var(--navy);
  background: white;
  font-weight: 700;
}

.map-card {
  position: relative;
  min-height: 500px;
  overflow: hidden;
  border-radius: 30px;
  background: linear-gradient(145deg, #dceeff, #f9fcff);
  box-shadow: var(--shadow);
}

.map-grid-lines {
  position: absolute;
  inset: 0;
  opacity: 0.2;
  background-image:
    linear-gradient(#6285aa 1px, transparent 1px),
    linear-gradient(90deg, #6285aa 1px, transparent 1px);
  background-size: 50px 50px;
}

.map-road {
  position: absolute;
  height: 12px;
  border: 4px solid white;
  border-radius: 999px;
  background: #7aa5cf;
  box-sizing: content-box;
}

.road-one {
  width: 600px;
  top: 190px;
  left: -120px;
  transform: rotate(24deg);
}

.road-two {
  width: 520px;
  top: 310px;
  left: 40px;
  transform: rotate(-18deg);
}

.road-three {
  width: 420px;
  top: 115px;
  right: -110px;
  transform: rotate(68deg);
}

.map-pin {
  position: absolute;
  z-index: 5;
  top: 48%;
  left: 48%;
  display: grid;
  justify-items: center;
  transform: translate(-50%, -50%);
}

.map-pin span {
  width: 58px;
  height: 58px;
  display: block;
  border: 8px solid white;
  border-radius: 50% 50% 50% 0;
  background: var(--orange);
  box-shadow: 0 14px 25px rgba(6,47,102,0.22);
  transform: rotate(-45deg);
}

.map-pin span::after {
  width: 14px;
  height: 14px;
  display: block;
  margin: 14px auto;
  border-radius: 50%;
  content: "";
  background: white;
}

.map-pin small {
  margin-top: 12px;
  padding: 8px 12px;
  border-radius: 10px;
  color: white;
  background: var(--navy);
  font-weight: 800;
  white-space: nowrap;
}

.map-dot {
  position: absolute;
  width: 18px;
  height: 18px;
  border: 5px solid white;
  border-radius: 50%;
  background: var(--blue);
  box-shadow: 0 8px 15px rgba(6,47,102,0.2);
}

.dot-one { top: 22%; left: 23%; }
.dot-two { top: 28%; right: 22%; }
.dot-three { bottom: 22%; left: 18%; }
.dot-four { bottom: 18%; right: 25%; }
.dot-five { top: 60%; right: 12%; }

.testimonials-section {
  background: white;
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.quote-card {
  min-height: 250px;
  padding: 30px;
  border: 1px solid var(--line);
  border-radius: 22px;
  background: white;
  box-shadow: var(--shadow-small);
}

.quote-mark {
  color: var(--blue);
  font-family: Georgia, serif;
  font-size: 4rem;
  line-height: 0.8;
}

.quote-card p {
  color: #3d4c62;
  font-size: 1.05rem;
}

.quote-card strong {
  color: var(--navy);
}

.faq-section {
  background: var(--soft);
}

.faq-layout {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 60px;
}

.faq-list details {
  margin-bottom: 14px;
  padding: 20px 22px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: white;
}

.faq-list summary {
  color: var(--navy);
  font-weight: 800;
  cursor: pointer;
}

.faq-list p {
  margin-bottom: 0;
  color: var(--muted);
}

.contact-section {
  color: white;
  background:
    radial-gradient(circle at 80% 20%, rgba(85,169,248,0.25), transparent 25%),
    linear-gradient(135deg, var(--navy-dark), var(--navy));
}

.contact-layout {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 70px;
  align-items: center;
}

.contact-copy h2 {
  color: white;
}

.contact-copy > p:not(.eyebrow) {
  color: rgba(255,255,255,0.76);
}

.contact-details {
  display: grid;
  gap: 20px;
  margin-top: 34px;
}

.contact-details div {
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(255,255,255,0.16);
}

.contact-details span {
  display: block;
  margin-bottom: 5px;
  color: #8cc9ff;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.contact-details strong {
  font-size: 1rem;
}

.estimate-form {
  padding: 34px;
  border-radius: 24px;
  color: var(--ink);
  background: white;
  box-shadow: var(--shadow);
}

.estimate-form label {
  display: block;
  margin-bottom: 17px;
  font-size: 0.9rem;
  font-weight: 800;
}

.estimate-form input,
.estimate-form select,
.estimate-form textarea {
  width: 100%;
  margin-top: 7px;
  padding: 14px 15px;
  border: 1px solid #cdd8e6;
  border-radius: 11px;
  color: var(--ink);
  background: white;
  outline: none;
  transition: border 0.2s ease, box-shadow 0.2s ease;
}

.estimate-form input:focus,
.estimate-form select:focus,
.estimate-form textarea:focus {
  border-color: var(--blue);
  box-shadow: 0 0 0 4px rgba(11,104,199,0.1);
}

.estimate-form textarea {
  min-height: 145px;
  resize: vertical;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-note {
  margin: 12px 0 0;
  color: var(--muted);
  font-size: 0.8rem;
  text-align: center;
}

.site-footer {
  padding: 70px 0 24px;
  color: rgba(255,255,255,0.78);
  background: #02152e;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.6fr 0.8fr 0.8fr 1fr;
  gap: 45px;
}

.footer-brand img {
  width: 150px;
  padding: 10px;
  border-radius: 14px;
  background: white;
}

.footer-brand p {
  max-width: 360px;
}

.site-footer h3 {
  margin-bottom: 16px;
  color: white;
  font-size: 1.05rem;
}

.site-footer a,
.site-footer p {
  display: block;
  margin: 0 0 10px;
}

.site-footer a:hover {
  color: white;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 45px;
  padding-top: 22px;
  border-top: 1px solid rgba(255,255,255,0.12);
  font-size: 0.86rem;
}

.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 1080px) {
  .main-nav,
  .header-cta {
    display: none;
  }

  .menu-toggle {
    display: block;
  }

  .main-nav.open {
    position: fixed;
    inset: 88px 0 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 26px 5%;
    background: white;
  }

  .main-nav.open a {
    padding: 18px 0;
    border-bottom: 1px solid var(--line);
    font-size: 1.1rem;
  }

  .hero-grid,
  .about-grid,
  .areas-layout,
  .faq-layout,
  .contact-layout {
    grid-template-columns: 1fr;
  }

  .hero {
    min-height: auto;
  }

  .hero-visual {
    margin-top: 10px;
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .promise-grid,
  .testimonial-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 760px) {
  .section {
    padding: 72px 0;
  }

  .hero {
    padding: 62px 0;
  }

  .hero h1 {
    font-size: clamp(3rem, 14vw, 4.8rem);
  }

  .hero-actions .btn {
    width: 100%;
  }

  .hero-trust {
    gap: 20px;
  }

  .paint-card {
    min-height: 410px;
    padding: 45px 24px;
  }

  .promise-grid,
  .services-grid,
  .testimonial-grid,
  .footer-grid,
  .form-row {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .gallery-large {
    grid-row: auto;
  }

  .gallery-card.wide {
    grid-column: auto;
  }

  .gallery-large .gallery-scene {
    min-height: 420px;
  }

  .before-after {
    min-height: 460px;
  }

  .footer-bottom {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .header-inner {
    min-height: 78px;
  }

  .brand img {
    width: 105px;
    height: 60px;
  }

  .main-nav.open {
    inset: 78px 0 0;
  }

  .paint-card {
    min-height: 350px;
  }

  .floating-badge {
    padding: 9px 12px;
    font-size: 0.78rem;
  }

  .timeline-item {
    grid-template-columns: 54px 1fr;
    gap: 15px;
  }

  .timeline-number {
    width: 54px;
    height: 54px;
  }

  .timeline::before {
    left: 26px;
  }

  .estimate-form {
    padding: 24px 18px;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }

  .reveal {
    opacity: 1;
    transform: none;
  }
}
