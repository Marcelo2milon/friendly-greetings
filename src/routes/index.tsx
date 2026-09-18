import { createFileRoute } from "@tanstack/react-router";
import "../styles.css";

export const Route = createFileRoute("/")({ component: Index });

const images = {
  hero: "https://images.unsplash.com/photo-1771765754567-e7b5bbf6a3b3?auto=format&fit=crop&fm=jpg&q=78&w=1100",
  learning: "https://images.unsplash.com/photo-1780844824578-d0b1a5b4b329?auto=format&fit=crop&fm=jpg&q=78&w=1000",
  together: "https://images.unsplash.com/photo-1637148659333-aa7f09fc2d13?auto=format&fit=crop&fm=jpg&q=78&w=900",
  parent: "https://images.unsplash.com/photo-1504159506876-f8338247a14a?auto=format&fit=crop&fm=jpg&q=78&w=1000",
  activity: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&fm=jpg&q=78&w=900",
  reading: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&fm=jpg&q=78&w=900",
};

function Index() {
  return (
    <div className="nk">
      <nav className="nav">
        <a className="brand" href="#home">🧠 <span>Neuro Kids</span></a>
        <div className="nav-links">
          <a href="#benefits">Benefits</a>
          <a href="#how">How It Works</a>
          <a href="#faq">FAQ</a>
        </div>
        <a className="nav-cta" href="#offer">Get Started</a>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy reveal">
            <span className="eyebrow">SMART LEARNING FOR GROWING MINDS</span>
            <h1>Unlock Your Child’s <span>Potential</span> With Neuro Kids</h1>
            <p className="lead">Fun, engaging activities designed to help children learn, think, explore and develop essential skills while having fun.</p>
            <div className="hero-actions">
              <a className="btn" href="#offer">Discover Neuro Kids <span>→</span></a>
              <a className="text-btn" href="#how">See How It Works <span>▶</span></a>
            </div>
            <div className="trust-row">
              <span>✓ Fun & Educational</span><span>✓ Designed for Kids</span><span>✓ Parent-Friendly</span>
            </div>
          </div>
          <div className="hero-visual reveal">
            <img src={images.hero} alt="Children enjoying a learning activity together" />
            <div className="floating-card fc-one">🧠 <b>Think</b><small>Curiosity in action</small></div>
            <div className="floating-card fc-two">🎨 <b>Create</b><small>Learning through play</small></div>
            <div className="circle-note">Made for<br /><strong>growing minds</strong></div>
          </div>
        </section>

        <section className="mini-strip">
          <div><strong>Playful</strong><span>Learning made enjoyable</span></div>
          <div><strong>Practical</strong><span>Easy activities for home</span></div>
          <div><strong>Flexible</strong><span>Learn at your own pace</span></div>
        </section>

        <section className="section problem">
          <div className="section-head reveal">
            <span className="eyebrow">WHY IT MATTERS</span>
            <h2>Learning <span>Should Be Fun</span></h2>
            <p>Children learn best when they are engaged, curious and enjoying the experience. Neuro Kids turns everyday learning into something they want to come back to.</p>
          </div>
          <div className="three-cards">
            <article className="feature-card reveal"><div className="icon">💪</div><h3>Build Confidence</h3><p>Give children positive opportunities to try, discover and celebrate small wins.</p></article>
            <article className="feature-card reveal"><div className="icon">🎯</div><h3>Improve Focus</h3><p>Encourage children to slow down, concentrate and complete engaging activities.</p></article>
            <article className="feature-card reveal"><div className="icon">🎨</div><h3>Encourage Creativity</h3><p>Open-ended activities invite children to imagine, make choices and express ideas.</p></article>
          </div>
        </section>

        <section className="meet">
          <div className="meet-image reveal"><img src={images.learning} alt="Children participating in a hands-on educational activity" /><span>Learn • Explore • Create</span></div>
          <div className="meet-copy reveal"><span className="eyebrow">WHAT IS NEURO KIDS?</span><h2>Meet <span>Neuro Kids</span></h2><p>Neuro Kids is an engaging learning experience created to make children's development more exciting. Through fun activities, challenges and interactive learning, children can explore important skills in an enjoyable way.</p><div className="check-list"><span>✓ Child-friendly activities</span><span>✓ Simple for families to enjoy</span><span>✓ Designed around curiosity</span></div><a className="btn" href="#benefits">Explore the benefits →</a></div>
        </section>

        <section id="benefits" className="section benefits">
          <div className="section-head centered reveal"><span className="eyebrow">THE NEURO KIDS EXPERIENCE</span><h2>More Than Just <span>Learning</span></h2><p>Build positive learning moments across skills children use every day.</p></div>
          <div className="benefit-grid">
            {[
              ["🧠","Cognitive Development","Activities that encourage thinking, remembering and discovering."],
              ["🎯","Better Focus","Simple challenges that invite children to pay attention and stay engaged."],
              ["🎨","Creativity","Room to draw, imagine, experiment and express ideas."],
              ["📚","Learning Skills","Practice useful habits through enjoyable, age-appropriate activities."],
              ["💡","Problem Solving","Fun challenges that encourage children to think about different solutions."],
              ["😊","Confidence","Celebrate effort and progress while making learning feel positive."]
            ].map(([icon,title,copy]) => <article className="benefit-card reveal" key={title}><div>{icon}</div><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </section>

        <section id="how" className="how">
          <div className="section-head centered reveal"><span className="eyebrow">HOW IT WORKS</span><h2>Three Steps. <span>One Happy Learner.</span></h2></div>
          <div className="steps">
            <article className="step reveal"><b>01</b><div className="step-icon">🔎</div><h3>Explore</h3><p>Children discover fun and engaging activities.</p></article>
            <article className="step reveal"><b>02</b><div className="step-icon">🧩</div><h3>Learn</h3><p>They develop useful skills through interactive challenges.</p></article>
            <article className="step reveal"><b>03</b><div className="step-icon">🌱</div><h3>Grow</h3><p>They build confidence, curiosity and better learning habits.</p></article>
          </div>
        </section>

        <section className="gallery section">
          <div className="section-head reveal"><span className="eyebrow">LEARNING IN ACTION</span><h2>Bright moments. <span>Growing minds.</span></h2><p>A visual glimpse of the kind of reading, creating, problem-solving and connection Neuro Kids is made to encourage.</p></div>
          <div className="gallery-grid">
            <figure className="g-large reveal"><img src={images.together} alt="Children learning together" /><figcaption>Learn together <small>Curiosity grows through connection</small></figcaption></figure>
            <figure className="reveal"><img src={images.activity} alt="Child engaged in a playful activity" /><figcaption>Play & discover</figcaption></figure>
            <figure className="reveal"><img src={images.reading} alt="Children reading in a classroom" /><figcaption>Read & explore</figcaption></figure>
          </div>
        </section>

        <section className="parent-section">
          <div className="parent-copy reveal"><span className="eyebrow">FOR THE WHOLE FAMILY</span><h2>Made With <span>Parents</span> in Mind</h2><p>We believe children deserve learning experiences that are fun, meaningful and easy to enjoy. Neuro Kids gives parents a simple way to encourage learning and development at home.</p><div className="parent-points"><span>✓ Easy to introduce at home</span><span>✓ Encourages shared learning moments</span><span>✓ Designed to fit everyday routines</span></div></div>
          <div className="parent-image reveal"><img src={images.parent} alt="Parent and child enjoying time together" /></div>
        </section>

        <section className="section why">
          <div className="section-head centered reveal"><span className="eyebrow">WHY PARENTS CHOOSE NEURO KIDS</span><h2>Simple. Engaging. <span>Meaningful.</span></h2></div>
          <div className="four-cards">
            <article className="why-card reveal"><span>01</span><h3>Fun Activities</h3><p>Learning feels like play.</p></article>
            <article className="why-card reveal"><span>02</span><h3>Easy to Use</h3><p>Simple for parents and children.</p></article>
            <article className="why-card reveal"><span>03</span><h3>Engaging Learning</h3><p>Designed to keep children interested.</p></article>
            <article className="why-card reveal"><span>04</span><h3>Made for Growing Minds</h3><p>Encourages curiosity and exploration.</p></article>
          </div>
        </section>

        <section className="testimonials">
          <div className="section-head centered reveal"><span className="eyebrow">PARENT VOICES</span><h2>What parents <span>love</span></h2><p className="sample-note">Sample testimonials — replace with verified customer feedback when available.</p></div>
          <div className="testimonial-grid">
            {[
              ["Nandi M.","Cape Town","“My child absolutely loves the activities. Learning has become something they look forward to every day.”"],
              ["Thabo K.","Johannesburg","“The activities are easy to understand and gave us a fun way to spend learning time together at home.”"],
              ["Lerato S.","Pretoria","“I love how simple it is to bring a little more curiosity and creativity into our routine.”"]
            ].map(([name,place,quote],i) => <article className="testimonial reveal" key={name}><div className="avatar">{["NM","TK","LS"][i]}</div><div className="stars">★★★★★</div><p>{quote}</p><strong>{name}</strong><small>{place} · Sample testimonial</small></article>)}
          </div>
        </section>

        <section id="offer" className="offer">
          <div className="offer-head reveal"><span className="eyebrow light">THE NEURO KIDS OFFER</span><h2>Give Your Child a More <strong>Exciting Way to Learn</strong></h2><p>Choose the option that fits your family. Prices are shown in South African Rand.</p></div>
          <div className="price-card reveal">
            <div className="price-info"><span className="offer-tag">NEURO KIDS</span><h3>Educational activities for growing minds</h3><p>Fun learning resources with a child-friendly design and an easy experience for parents.</p><ul><li>✓ Educational activities</li><li>✓ Fun learning experience</li><li>✓ Child-friendly design</li><li>✓ Easy for parents</li></ul></div>
            <div className="price-action"><div className="price">R67 <small>Basic</small></div><a className="price-btn" href="#contact">Get Neuro Kids Today →</a><div className="reassurance">🔒 Secure checkout • Instant access • Parent-friendly</div></div>
          </div>
          <p className="offer-foot">Premium option available at <strong>R99</strong> with additional Neuro Kids resources.</p>
        </section>

        <section id="faq" className="section faq">
          <div className="section-head centered reveal"><span className="eyebrow">FAQ</span><h2>Questions? <span>We've got you.</span></h2></div>
          <div className="faq-list reveal">
            <details open><summary>What is Neuro Kids?</summary><p>Neuro Kids is an educational learning experience with playful activities designed to help parents create engaging learning moments at home.</p></details>
            <details><summary>What age group is Neuro Kids suitable for?</summary><p>The suitable age range depends on the specific Neuro Kids activity pack. Check the product details before purchasing for the exact age guidance.</p></details>
            <details><summary>How does Neuro Kids help children learn?</summary><p>It uses engaging activities and challenges to encourage focus, creativity, problem solving and other useful learning skills.</p></details>
            <details><summary>Is it easy for parents to use?</summary><p>Yes. The experience is designed to be straightforward for parents and enjoyable for children.</p></details>
            <details><summary>How do I get access?</summary><p>After checkout, follow the access instructions provided with your Neuro Kids purchase.</p></details>
          </div>
        </section>

        <section id="contact" className="final-cta">
          <div className="final-copy reveal"><span className="eyebrow light">READY TO GET STARTED?</span><h2>Make Learning More Fun for Your Child</h2><p>Give your child an engaging way to explore, learn and grow.</p><a className="btn white-btn" href="#offer">Discover Neuro Kids →</a></div>
          <img src={images.hero} alt="Happy children enjoying learning together" className="final-image reveal" />
        </section>
      </main>

      <footer>
        <div><a className="brand" href="#home">🧠 <span>Neuro Kids</span></a><p>Playful learning for growing minds.</p></div>
        <div className="footer-links"><a href="#home">Home</a><a href="#benefits">Benefits</a><a href="#how">How It Works</a><a href="#faq">FAQ</a><a href="#contact">Contact</a></div>
        <small>© 2026 Neuro Kids. All rights reserved.</small>
      </footer>
    </div>
  );
}
