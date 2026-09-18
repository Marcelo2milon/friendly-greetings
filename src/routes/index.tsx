import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import "../styles.css";

export const Route = createFileRoute("/")({ component: Index });

const images = {
  hero:"https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&fm=jpg&q=78&w=1200",
  solution:"https://images.unsplash.com/photo-1637148659333-aa7f09fc2d13?auto=format&fit=crop&fm=jpg&q=78&w=1000",
  puzzle:"https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&fm=jpg&q=78&w=900",
  parent:"https://images.unsplash.com/photo-1504159506876-f8338247a14a?auto=format&fit=crop&fm=jpg&q=78&w=1000",
  reading:"https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&fm=jpg&q=78&w=900"
};

function useScrollReveal(){
  useEffect(()=>{
    const items=[...document.querySelectorAll<HTMLElement>(".scroll-reveal")];
    const reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if(reduce){items.forEach(x=>x.classList.add("in-view"));return;}
    const io=new IntersectionObserver((entries)=>{
      entries.forEach(e=>e.target.classList.toggle("in-view",e.isIntersecting));
    },{threshold:.18,rootMargin:"-12% 0px -12% 0px"});
    items.forEach(x=>io.observe(x));
    return()=>io.disconnect();
  },[]);
}

const benefits=[
 ["🧠","Better Memory","Fun exercises that encourage children to remember, notice and connect ideas."],
 ["🎯","Sharper Focus","Short challenges designed to make focused play part of the day."],
 ["🧩","Problem-Solving","Puzzles and logic activities that invite children to find their own solutions."],
 ["⭐","Confidence","Celebrate effort, curiosity and progress through positive learning moments."],
 ["🌈","Screen-Free Fun","Hands-on activities that give children a joyful alternative to scrolling."],
 ["⏱️","10–15 Minutes a Day","A simple daily routine that fits naturally into busy family life."]
];

function Index(){
 useScrollReveal();
 return <div className="nk">
  <header className="nav"><a className="brand" href="#home"><span className="logo-mark">✦</span><span>Neuro Kids</span></a><a className="nav-cta" href="#pricing">Get Started</a></header>
  <main>
   <section id="home" className="hero scroll-reveal">
    <div className="hero-copy"><span className="eyebrow coral">BRAIN TRAINING • AGES 4–12</span><h1>Help your child <span>think sharper, focus longer</span> and love learning.</h1><p className="lead">A playful brain-training programme of fun mental exercises for children aged 4–12 — covering memory, focus, logic, problem-solving and creativity.</p><div className="hero-actions"><a className="btn yellow" href="#pricing">Get Neuro Kids Today →</a><a className="text-btn" href="#how">See how it works ↓</a></div><div className="hero-note">For parents & caregivers in South Africa</div></div>
    <div className="hero-visual"><div className="shape star">✦</div><img src={images.hero} alt="Happy child enjoying a colourful brain-training activity"/><div className="image-pill">🧠 Think • Play • Grow</div></div>
   </section>

   <section className="social-proof scroll-reveal"><div><strong>Loved by parents across South Africa</strong><span className="stars">★★★★★</span><span>Fun learning moments families can enjoy together</span></div></section>

   <section className="section pain scroll-reveal"><div className="section-head centered"><span className="eyebrow">WE GET IT</span><h2>Learning at home can feel <span>harder than it should.</span></h2><p>You want to support your child — without turning every afternoon into a battle.</p></div><div className="pain-grid"><article><b>📱</b><h3>Too much screen time</h3><p>You want more hands-on activities that feel exciting, not like another lecture.</p></article><article><b>🎯</b><h3>“They can't concentrate.”</h3><p>Keeping little minds engaged can be challenging, especially during busy days.</p></article><article><b>📚</b><h3>School feels difficult</h3><p>You'd love a simple way to practise useful thinking skills outside the classroom.</p></article></div></section>

   <section className="solution scroll-reveal"><div className="solution-image"><img src={images.solution} alt="Children working together on an educational activity"/></div><div className="solution-copy"><span className="eyebrow">MEET NEURO KIDS</span><h2>Make brain training feel like <span>play.</span></h2><p>Neuro Kids brings together fun mental exercises that encourage children to practise memory, focus, logic, problem-solving and creativity. It is designed to make learning moments easy, positive and enjoyable at home.</p><div className="check-list"><span>✓ Child-friendly mental exercises</span><span>✓ Designed for ages 4–12</span><span>✓ Short, engaging activities</span><span>✓ Easy for parents and caregivers</span></div></div></section>

   <section className="section benefits scroll-reveal"><div className="section-head centered"><span className="eyebrow">WHY NEURO KIDS</span><h2>Small daily activities. <span>Big learning moments.</span></h2></div><div className="benefit-grid">{benefits.map(([i,t,p])=><article className="benefit-card scroll-reveal" key={t}><div className="benefit-icon">{i}</div><h3>{t}</h3><p>{p}</p></article>)}</div></section>

   <section id="how" className="how scroll-reveal"><div className="section-head centered"><span className="eyebrow">HOW IT WORKS</span><h2>Simple for you. <span>Fun for them.</span></h2></div><div className="steps"><article className="step"><b>01</b><div className="step-icon">🛍️</div><h3>Choose your plan</h3><p>Select Basic or Premium based on what works for your family.</p></article><article className="step"><b>02</b><div className="step-icon">⚡</div><h3>Get instant access</h3><p>Access your digital brain-training activities after checkout.</p></article><article className="step"><b>03</b><div className="step-icon">🌱</div><h3>Watch your child grow</h3><p>Build a simple routine of playful practice and exploration.</p></article></div><div className="week-preview"><div><span className="eyebrow">SAMPLE WEEK</span><h3>A little brain workout, every day.</h3></div><div className="week-days"><span>MON<br/><b>🧠 Memory</b></span><span>TUE<br/><b>🎯 Focus</b></span><span>WED<br/><b>🧩 Logic</b></span><span>THU<br/><b>🎨 Create</b></span><span>FRI<br/><b>💡 Solve</b></span></div></div></section>

   <section className="gallery section scroll-reveal"><div className="section-head centered"><span className="eyebrow">A WORLD OF PLAY</span><h2>Think. Create. <span>Explore.</span></h2></div><div className="gallery-grid"><figure><img src={images.puzzle} alt="Child playing with a colourful puzzle activity"/><figcaption>🧩 Puzzle time</figcaption></figure><figure><img src={images.reading} alt="Children reading and learning together"/><figcaption>📚 Reading together</figcaption></figure><figure><img src={images.parent} alt="Parent helping a child during a learning activity"/><figcaption>💛 Learn together</figcaption></figure></div></section>

   <section className="testimonials scroll-reveal"><div className="section-head centered"><span className="eyebrow">PARENT VOICES</span><h2>Little moments that <span>matter.</span></h2><p className="sample-note">Sample testimonials for demonstration — replace with verified customer reviews.</p></div><div className="testimonial-grid">{[["Nandi","Cape Town","7","“My daughter enjoys the short activities so much. It feels like play, but we still get a lovely learning moment together.”"],["Thabo","Johannesburg","5","“Neuro Kids gives us something easy to do after school instead of reaching straight for a screen.”"],["Lerato","Durban","9","“The variety keeps my son interested. I especially like that we can fit it into our day without a big setup.”"]].map(([n,c,a,q])=><article className="testimonial scroll-reveal" key={n}><div className="avatar">{n[0]}</div><div><strong>{n}</strong><small>{c} • Parent of a {a}-year-old</small></div><div className="stars">★★★★★</div><p>{q}</p></article>)}</div></section>

   <section id="pricing" className="pricing scroll-reveal"><div className="section-head centered"><span className="eyebrow coral">SPECIAL OFFER</span><h2>Choose your child's <span>brain-training plan.</span></h2><p>Start with a simple set of exercises or unlock the complete collection.</p></div><div className="pricing-grid"><article id="checkout-basic" className="plan"><span className="plan-label">BASIC</span><h3>Neuro Kids Basic</h3><div className="price">R87</div><p>Everything needed to start playful brain training.</p><ul><li>✓ 50+ brain-training exercises</li><li>✓ Memory & focus activities</li><li>✓ Logic & problem-solving</li><li>✓ Creativity exercises</li></ul><a className="plan-btn" href="#checkout-basic">Get Basic — R87</a></article><article id="checkout-premium" className="plan popular"><div className="popular-badge">★ Most Popular / Best Value</div><span className="plan-label">PREMIUM</span><h3>Neuro Kids Premium</h3><div className="price">R109</div><p>The complete collection for more variety and practice.</p><ul><li>✓ 300+ brain-training exercises in total</li><li>✓ Memory, focus & logic</li><li>✓ Problem-solving & creativity</li><li>✓ Extended activity collection</li></ul><a className="plan-btn yellow" href="#checkout-premium">Get Premium — R109 →</a></article></div><div className="countdown"><span>⏳ Limited-time offer</span><strong id="timer">14:59:59</strong><small>Offer timer is illustrative and resets when the page is refreshed.</small></div><div className="payment-trust"><span>💳 Cards</span><span>⚡ Instant EFT</span><span>📲 SnapScan</span></div></section>

   <section className="guarantee section scroll-reveal"><div className="guarantee-card"><div className="guarantee-badge">7<br/><small>DAYS</small></div><div><span className="eyebrow">PEACE OF MIND</span><h2>7-day money-back guarantee</h2><p>If Neuro Kids isn't right for your family, you can request a refund within 7 days, subject to the applicable purchase terms.</p></div></div></section>

   <section id="faq" className="section faq scroll-reveal"><div className="section-head centered"><span className="eyebrow">FAQ</span><h2>Questions? <span>You're covered.</span></h2></div><div className="faq-list">{[["Is Neuro Kids suitable for ages 4–12?","Yes. Neuro Kids is designed for children aged 4 to 12, with activities that can be selected according to a child's age and ability."],["How does Neuro Kids work?","Choose a plan, get digital access after checkout, then use the exercises as short, playful brain-training sessions."],["How is access delivered?","Neuro Kids is a digital product. After a successful checkout, access instructions are provided digitally."],["What payment methods can I use?","The checkout can support common South African payment options such as cards, Instant EFT and SnapScan, depending on the payment provider used."],["What is the refund policy?","A 7-day money-back guarantee is offered, subject to the applicable purchase terms and conditions."],["How much time should my child spend each day?","A simple 10–15 minute routine is a practical starting point. Families can adjust the time to suit the child's age and attention span."]].map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>

   <section className="final-cta scroll-reveal"><div><span className="eyebrow">A BETTER WAY TO LEARN THROUGH PLAY</span><h2>Give your child a reason to say, <span>“Can we do one more?”</span></h2><p>Bring more curiosity, creativity and playful thinking into their day.</p><a className="btn yellow" href="#pricing">Get Neuro Kids Today →</a></div><div className="final-shape">✦ 🧠 ✦</div></section>
  </main>
  <footer><div><a className="brand" href="#home"><span className="logo-mark">✦</span><span>Neuro Kids</span></a><p>Playful brain training for growing minds.</p></div><div className="footer-links"><a href="#home">Home</a><a href="#pricing">Pricing</a><a href="#how">How It Works</a><a href="#faq">FAQ</a><a href="mailto:marcelomainato29@gmail.com">Contact</a></div><div className="socials"><a href="#home" aria-label="Facebook">f</a><a href="#home" aria-label="Instagram">◎</a><a href="#home" aria-label="TikTok">♪</a></div><div className="legal"><a href="#privacy">Privacy</a><a href="#terms">Terms</a><a href="mailto:marcelomainato29@gmail.com">marcelomainato29@gmail.com</a><span>© 2026 Neuro Kids. All rights reserved.</span></div></footer>
 </div>
}
