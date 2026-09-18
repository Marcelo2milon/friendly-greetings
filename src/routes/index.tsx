import { createFileRoute } from "@tanstack/react-router";
import "../styles.css";

export const Route = createFileRoute("/")({ component: Index });

const images = {
  hero:"https://images.unsplash.com/photo-1771765754567-e7b5bbf6a3b3?auto=format&fit=crop&fm=jpg&q=78&w=1100",
  activity:"https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&fm=jpg&q=78&w=1000",
  learning:"https://images.unsplash.com/photo-1780844824578-d0b1a5b4b329?auto=format&fit=crop&fm=jpg&q=78&w=1000",
  parent:"https://images.unsplash.com/photo-1504159506876-f8338247a14a?auto=format&fit=crop&fm=jpg&q=78&w=1000",
  reading:"https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&fm=jpg&q=78&w=1000"
};

function Index(){
 return <div className="nk">
  <div className="topbar">🧠 NEURO KIDS • DIGITAL LEARNING FOR GROWING MINDS</div>
  <nav className="nav"><a className="brand" href="#home">🧠 <span>Neuro Kids</span></a><div className="nav-links"><a href="#inside">What's Inside</a><a href="#how">How It Works</a><a href="#faq">FAQ</a></div><a className="nav-cta" href="#offer">Get Access</a></nav>

  <main>
   <section id="home" className="sales-hero">
    <div className="hero-copy reveal"><span className="eyebrow">FOR PARENTS OF GROWING MINDS</span>
     <h1>Help Your Child Build <span>Focus, Confidence & Learning Skills</span> — Through Play.</h1>
     <p className="lead">Fun, screen-free activities that turn a few minutes at home into meaningful learning moments.</p>
     <ul className="hero-bullets"><li>✓ 100+ engaging printable activities</li><li>✓ Focus, memory, logic, creativity & more</li><li>✓ Simple enough for parents to use at home</li></ul>
     <a className="btn" href="#offer">Discover Neuro Kids →</a>
     <div className="micro-trust">🔒 Secure checkout &nbsp; • &nbsp; ⚡ Instant digital access &nbsp; • &nbsp; 🖨️ Print & play</div>
    </div>
    <div className="sales-hero-visual reveal"><img src={images.hero} alt="African children enjoying a learning activity"/><div className="product-sticker">100+<small>ACTIVITIES</small></div><div className="instant-badge">⚡ Instant Access<br/><small>Digital • Printable • Screen-free</small></div></div>
   </section>

   <section className="trust-bar"><div>⚡ <b>Ready in minutes</b><small>No complicated prep</small></div><div>🖨️ <b>Printable</b><small>Use again and again</small></div><div>👨‍👩‍👧 <b>10 minutes a day</b><small>Easy family routine</small></div><div>♾️ <b>Lifetime access</b><small>Learn at your pace</small></div></section>

   <section className="pain section"><div className="section-head centered reveal"><span className="eyebrow">DOES THIS SOUND FAMILIAR?</span><h2>When learning feels like a <span>daily struggle...</span></h2><p>Children can lose interest, get distracted or feel frustrated. Parents can be left wondering what to try next.</p></div>
    <div className="pain-grid"><article><b>😩</b><h3>“They lose focus so quickly.”</h3><p>Keeping attention on one activity can feel difficult.</p></article><article><b>📱</b><h3>“Screens are always the easiest option.”</h3><p>You want something more hands-on and engaging.</p></article><article><b>😤</b><h3>“Homework becomes frustrating.”</h3><p>You want learning time to feel calmer and more positive.</p></article></div>
   </section>

   <section className="solution"><div className="solution-copy reveal"><span className="eyebrow">MEET NEURO KIDS</span><h2>Imagine learning that <span>feels like play.</span></h2><p>Neuro Kids brings together engaging activities designed around focus, memory, logic, creativity and learning skills. Children get something enjoyable to do, while parents get a simple resource they can use at home.</p><div className="check-list"><span>✓ Fun and engaging activities</span><span>✓ Screen-free learning option</span><span>✓ Child-friendly and easy to follow</span><span>✓ Designed for everyday family routines</span></div><a className="btn" href="#inside">See what's included →</a></div><div className="solution-image reveal"><img src={images.learning} alt="Children learning together with educational materials"/></div></section>

   <section id="inside" className="section inside"><div className="section-head centered reveal"><span className="eyebrow">EVERYTHING IN ONE PLACE</span><h2>What Your Child Gets With <span>Neuro Kids</span></h2><p>A varied collection so learning never has to feel repetitive.</p></div>
    <div className="inside-grid">{[
     ["🎯","Focus & Attention","Activities that invite children to concentrate and complete a task."],
     ["🧠","Memory Building","Playful exercises for remembering, observing and connecting ideas."],
     ["🔷","Shapes & Patterns","Visual activities that encourage recognition and thinking."],
     ["🧩","Logic & Sequences","Simple challenges that encourage reasoning and problem solving."],
     ["✏️","Tracing & Fine Motor","Hands-on practice for drawing, tracing and coordination."],
     ["🎨","Colors & Matching","Fun matching activities that encourage observation and creativity."],
     ["👀","Hand-Eye Coordination","Activities designed around movement, attention and accuracy."],
     ["🌈","Screen-Free Play","A printable alternative for meaningful offline activity."]
    ].map(([i,t,p])=><article className="inside-card reveal" key={t}><div>{i}</div><h3>{t}</h3><p>{p}</p></article>)}</div>
   </section>

   <section className="visual-proof"><div className="visual-proof-copy reveal"><span className="eyebrow">LEARNING IN ACTION</span><h2>Less scrolling. More <span>doing.</span></h2><p>Print an activity, sit together and let your child explore. The goal is to make learning simple enough to become part of real family life.</p><div className="stat-pills"><span>100+ Activities</span><span>Screen-free</span><span>Parent-friendly</span></div></div><div className="visual-mosaic"><img src={images.activity} alt="Child doing a playful educational activity"/><img src={images.reading} alt="Children reading and learning"/></div></section>

   <section className="how" id="how"><div className="section-head centered reveal"><span className="eyebrow">HOW IT WORKS</span><h2>Just <span>3 simple steps.</span></h2></div><div className="steps"><article className="step reveal"><b>01</b><div className="step-icon">🖨️</div><h3>Choose & Print</h3><p>Pick an activity and get it ready in minutes.</p></article><article className="step reveal"><b>02</b><div className="step-icon">🧩</div><h3>Play & Learn</h3><p>Let your child work through a fun, focused challenge.</p></article><article className="step reveal"><b>03</b><div className="step-icon">🌱</div><h3>Repeat & Grow</h3><p>Reuse activities and build positive learning routines.</p></article></div></section>

   <section className="parent-section"><div className="parent-image reveal"><img src={images.parent} alt="Parent and child learning together"/></div><div className="parent-copy reveal"><span className="eyebrow">MADE FOR REAL FAMILIES</span><h2>Simple for <span>parents.</span> Fun for kids.</h2><p>You don't need teaching experience or complicated preparation. Neuro Kids is designed to make it easier to introduce meaningful learning moments into your child's day.</p><div className="check-list"><span>✓ Easy to understand</span><span>✓ Flexible at home</span><span>✓ Great for shared parent-child time</span></div></div></section>

   <section className="testimonials"><div className="section-head centered reveal"><span className="eyebrow">PARENT VOICES</span><h2>Real families deserve <span>real proof.</span></h2><p className="sample-note">Sample testimonials shown for layout purposes — replace with verified customer reviews.</p></div><div className="testimonial-grid">{[
    ["Nandi M.","Cape Town","“My child absolutely loves the activities. Learning has become something they look forward to every day.”"],
    ["Thabo K.","Johannesburg","“The activities are simple to understand and gave us a fun way to spend learning time together.”"],
    ["Lerato S.","Pretoria","“I love having something ready to use when we want a screen-free learning activity.”"]
   ].map(([n,c,q],i)=><article className="testimonial reveal" key={n}><div className="avatar">{["NM","TK","LS"][i]}</div><div className="stars">★★★★★</div><p>{q}</p><strong>{n}</strong><small>{c} · Sample testimonial</small></article>)}</div></section>

   <section id="offer" className="offer"><div className="offer-head reveal"><span className="eyebrow light">SPECIAL SOUTH AFRICAN OFFER</span><h2>Give Your Child a More <strong>Exciting Way to Learn</strong></h2><p>One simple digital resource. Use it at home, print it when needed, and learn at your own pace.</p></div>
    <div className="offer-options"><article className="offer-option"><span className="offer-tag">BASIC</span><h3>Neuro Kids</h3><div className="offer-price">R67</div><ul><li>✓ Educational activities</li><li>✓ Focus & learning activities</li><li>✓ Child-friendly design</li><li>✓ Instant digital access</li></ul><a className="price-btn" href="#checkout">Get Neuro Kids — R67</a></article>
    <article className="offer-option popular"><label>MOST POPULAR</label><span className="offer-tag">PREMIUM</span><h3>Neuro Kids Premium</h3><div className="offer-price">R99</div><ul><li>✓ Everything in Basic</li><li>✓ Extended activity collection</li><li>✓ Bonus learning resources</li><li>✓ Extra parent resources</li><li>✓ Lifetime digital access</li></ul><a className="price-btn" href="#checkout">Get Premium — R99 →</a></article></div>
    <div id="checkout" className="checkout-note">🔒 Secure checkout &nbsp; • &nbsp; ⚡ Instant access &nbsp; • &nbsp; 🖨️ Printable digital product</div>
   </section>

   <section className="guarantee section"><div className="guarantee-card reveal"><div className="guarantee-icon">✓</div><div><span className="eyebrow">PEACE OF MIND</span><h2>A simple, <span>parent-friendly</span> purchase.</h2><p>Neuro Kids is an educational resource, not a medical treatment or diagnosis. Use it as a practical support for learning and play at home.</p></div></div></section>

   <section id="faq" className="section faq"><div className="section-head centered reveal"><span className="eyebrow">FAQ</span><h2>Everything you need to <span>know.</span></h2></div><div className="faq-list reveal">
    <details open><summary>What is Neuro Kids?</summary><p>Neuro Kids is a digital collection of engaging, printable learning activities designed to make learning at home more enjoyable.</p></details>
    <details><summary>What age group is it suitable for?</summary><p>The exact age guidance depends on the activity pack. Check the product information for the age range of the version you purchase.</p></details>
    <details><summary>How do I receive the product?</summary><p>After completing your purchase, access instructions are provided digitally. There is no physical product shipment.</p></details>
    <details><summary>Do I need teaching experience?</summary><p>No. The activities are designed to be straightforward for parents and children to use together.</p></details>
    <details><summary>Does Neuro Kids require screens?</summary><p>The activities are designed to work as printable, screen-free learning resources once downloaded.</p></details>
   </div></section>

   <section className="final-cta"><div className="final-copy reveal"><span className="eyebrow light">START TODAY</span><h2>Make Learning More Fun for Your Child</h2><p>Give your child an engaging way to explore, learn and grow.</p><a className="btn white-btn" href="#offer">Discover Neuro Kids →</a></div><img src={images.hero} alt="Happy children learning together" className="final-image reveal"/></section>
  </main>
  <footer><div><a className="brand" href="#home">🧠 <span>Neuro Kids</span></a><p>Playful learning for growing minds.</p></div><div className="footer-links"><a href="#home">Home</a><a href="#inside">Benefits</a><a href="#how">How It Works</a><a href="#faq">FAQ</a><a href="#contact">Contact</a></div><small>© 2026 Neuro Kids. All rights reserved.</small></footer>
 </div>
}
