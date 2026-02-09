import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useAnimation } from 'framer-motion'
import '../styles/Home.css'

const AnimatedSection = ({ children, className }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const Home = () => {
  useEffect(() => {
    // Counter animation
    const counters = document.querySelectorAll('.stat-number')
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'))
      const duration = 2000
      const increment = target / (duration / 16)
      let current = 0
      
      const updateCounter = () => {
        current += increment
        if (current < target) {
          counter.textContent = Math.floor(current)
          requestAnimationFrame(updateCounter)
        } else {
          counter.textContent = target
        }
      }
      
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          updateCounter()
          observer.disconnect()
        }
      })
      observer.observe(counter)
    })
  }, [])

  const floatingCards = [
    { icon: 'fa-code', text: 'Full Stack Development', delay: 0 },
    { icon: 'fa-brain', text: 'AI & Machine Learning', delay: 0.2 },
    { icon: 'fa-cloud', text: 'Cloud Computing', delay: 0.4 },
    { icon: 'fa-shield-alt', text: 'Cyber Security', delay: 0.6 },
  ]

  const aboutCards = [
    { icon: 'fa-graduation-cap', title: 'Academic Excellence', desc: 'Integrating GUVI\'s industry-aligned curriculum with KEC\'s strong academic foundation to create comprehensive learning experiences.' },
    { icon: 'fa-briefcase', title: 'Industry Readiness', desc: 'Hands-on projects, real-world case studies, and internship opportunities to prepare students for immediate industry deployment.' },
    { icon: 'fa-users', title: 'Expert Mentorship', desc: 'Learn from industry experts and experienced professionals who bring real-world insights into the classroom.' },
    { icon: 'fa-certificate', title: 'Certification', desc: 'Earn industry-recognized certifications that validate your skills and enhance your career prospects.' },
  ]

  const featureCards = [
    { icon: 'fa-laptop-code', title: 'Interactive Labs', desc: 'Cloud-based coding environments for seamless practice' },
    { icon: 'fa-trophy', title: 'Hackathons', desc: 'Regular competitions to test and showcase your skills' },
    { icon: 'fa-user-tie', title: 'Placement Support', desc: 'Dedicated placement cell with 200+ hiring partners' },
    { icon: 'fa-clock', title: 'Flexible Learning', desc: 'Self-paced modules with lifetime access' },
  ]

  const testimonials = [
    { initials: 'PA', name: 'Priya Anand', role: 'Software Engineer @ Google', quote: 'The GUVI-KEC partnership transformed my career. The practical approach and industry exposure helped me land my dream job at a top tech company.' },
    { initials: 'RK', name: 'Rajesh Kumar', role: 'Senior Developer @ Microsoft', quote: 'The mentorship and guidance I received were exceptional. I went from knowing basic programming to becoming a full-stack developer.' },
    { initials: 'SK', name: 'Swetha Krishnan', role: 'ML Engineer @ Amazon', quote: 'Best decision of my academic career. The AI/ML program gave me skills that are highly sought after in the industry today.' },
  ]

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-particles"></div>
        <div className="hero-content">
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <i className="fas fa-handshake"></i>
            <span>Strategic Partnership 2026</span>
          </motion.div>
          
          <h1 className="hero-title">
            <motion.span 
              className="title-line"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Kongu Engineering College
            </motion.span>
            <motion.span 
              className="title-collab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              collaborates with
            </motion.span>
            <motion.span 
              className="title-guvi"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              GUVI
            </motion.span>
          </h1>

          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Empowering students with industry-ready skills through cutting-edge technology education 
            and hands-on learning experiences.
          </motion.p>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Link to="/programs" className="btn btn-primary">
              <span>Explore Programs</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
            <a href="#about" className="btn btn-secondary">
              <span>Learn More</span>
              <i className="fas fa-play-circle"></i>
            </a>
          </motion.div>

          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="stat-item">
              <span className="stat-number" data-target="5000">0</span>
              <span className="stat-label">Students Enrolled</span>
            </div>
            <div className="stat-item">
              <span className="stat-number" data-target="50">0</span>
              <span className="stat-label">Expert Mentors</span>
            </div>
            <div className="stat-item">
              <span className="stat-number" data-target="95">0</span>
              <span className="stat-label">Placement Rate %</span>
            </div>
          </motion.div>
        </div>

        <div className="hero-visual">
          {floatingCards.map((card, index) => (
            <motion.div 
              key={index}
              className={`floating-card card-${index + 1}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: card.delay + 1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <i className={`fas ${card.icon}`}></i>
              <span>{card.text}</span>
            </motion.div>
          ))}
        </div>

        <div className="scroll-indicator">
          <motion.div 
            className="mouse"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="wheel"></div>
          </motion.div>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners">
        <div className="container">
          <div className="partners-content">
            <AnimatedSection className="partner-card kec-card">
              <div className="partner-logo">
                <div className="logo-circle kec-circle">
                  <span>KEC</span>
                </div>
              </div>
              <h3>Kongu Engineering College</h3>
              <p>Established in 1984, an autonomous institution affiliated to Anna University, 
              renowned for academic excellence and producing industry-ready engineers.</p>
              <div className="partner-badges">
                <span className="badge">NAAC A++</span>
                <span className="badge">NBA Accredited</span>
                <span className="badge">Autonomous</span>
              </div>
            </AnimatedSection>

            <AnimatedSection className="partnership-link">
              <motion.div 
                className="link-circle"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <i className="fas fa-handshake"></i>
              </motion.div>
              <div className="link-line"></div>
            </AnimatedSection>

            <AnimatedSection className="partner-card guvi-card">
              <div className="partner-logo">
                <div className="logo-circle guvi-circle">
                  <span>GUVI</span>
                </div>
              </div>
              <h3>GUVI Geek Networks</h3>
              <p>An IIT-M & IIM-A incubated Ed-Tech company, India's leading vernacular 
              ed-tech platform providing industry-relevant tech courses.</p>
              <div className="partner-badges">
                <span className="badge">IIT-M Incubated</span>
                <span className="badge">5M+ Learners</span>
                <span className="badge">100+ Courses</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-tag">About Partnership</span>
            <h2 className="section-title">Transforming Education Together</h2>
            <p className="section-subtitle">A strategic collaboration designed to bridge the gap between 
            academic learning and industry requirements.</p>
          </AnimatedSection>

          <div className="about-grid">
            {aboutCards.map((card, index) => (
              <motion.div 
                key={index}
                className="about-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              >
                <div className="card-icon">
                  <i className={`fas ${card.icon}`}></i>
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-tag">Key Features</span>
            <h2 className="section-title">Why Choose This Partnership?</h2>
          </AnimatedSection>

          <div className="features-showcase">
            <AnimatedSection className="feature-main">
              <div className="feature-visual">
                <div className="code-window">
                  <div className="window-header">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <div className="code-content">
                    <pre><code><span className="keyword">const</span> <span className="variable">studentSuccess</span> = {'{'}<br/>
    <span className="property">skills</span>: [<span className="string">"Python"</span>, <span className="string">"AI/ML"</span>, <span className="string">"Cloud"</span>],<br/>
    <span className="property">projects</span>: <span className="number">10</span>,<br/>
    <span className="property">placement</span>: <span className="boolean">true</span>,<br/>
    <span className="property">package</span>: <span className="string">"6+ LPA"</span><br/>
{'}'};
                    </code></pre>
                  </div>
                </div>
              </div>
              <div className="feature-info">
                <h3>Learn by Doing</h3>
                <p>Build real projects from day one with our hands-on learning approach. 
                Our curriculum is designed around practical implementation.</p>
                <ul className="feature-list">
                  <li><i className="fas fa-check"></i> Live coding sessions</li>
                  <li><i className="fas fa-check"></i> Industry projects</li>
                  <li><i className="fas fa-check"></i> Peer programming</li>
                  <li><i className="fas fa-check"></i> Code reviews</li>
                </ul>
              </div>
            </AnimatedSection>

            <div className="feature-cards">
              {featureCards.map((card, index) => (
                <motion.div 
                  key={index}
                  className="feature-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="feature-card-icon">
                    <i className={`fas ${card.icon}`}></i>
                  </div>
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-tag">Success Stories</span>
            <h2 className="section-title">What Our Students Say</h2>
          </AnimatedSection>

          <div className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="testimonial-content">
                  <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
                  <p>"{testimonial.quote}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <span>{testimonial.initials}</span>
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-bg"></div>
        <div className="container">
          <AnimatedSection className="cta-content">
            <h2>Ready to Transform Your Career?</h2>
            <p>Join thousands of students who have accelerated their tech careers through our partnership programs.</p>
            <div className="cta-buttons">
              <Link to="/programs" className="btn btn-light">
                <span>Browse Programs</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
              <a href="#contact" className="btn btn-outline-light">
                <span>Contact Us</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-tag">Get in Touch</span>
            <h2 className="section-title">Contact Us</h2>
          </AnimatedSection>

          <div className="contact-grid">
            <AnimatedSection className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>Kongu Engineering College<br/>Perundurai, Erode - 638060<br/>Tamil Nadu, India</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>partnership@kongu.edu<br/>support@guvi.in</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>+91 4294 226 666<br/>+91 4294 226 667</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="contact-form-wrapper">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <input type="text" id="name" required />
                  <label htmlFor="name">Your Name</label>
                  <span className="focus-border"></span>
                </div>
                <div className="form-group">
                  <input type="email" id="email" required />
                  <label htmlFor="email">Email Address</label>
                  <span className="focus-border"></span>
                </div>
                <div className="form-group">
                  <input type="tel" id="phone" required />
                  <label htmlFor="phone">Phone Number</label>
                  <span className="focus-border"></span>
                </div>
                <div className="form-group">
                  <select id="program" required defaultValue="">
                    <option value="" disabled></option>
                    <option value="fullstack">Full Stack Development</option>
                    <option value="aiml">AI & Machine Learning</option>
                    <option value="datascience">Data Science</option>
                    <option value="cloud">Cloud Computing</option>
                    <option value="cybersecurity">Cyber Security</option>
                  </select>
                  <label htmlFor="program">Interested Program</label>
                  <span className="focus-border"></span>
                </div>
                <div className="form-group full-width">
                  <textarea id="message" rows="4" required></textarea>
                  <label htmlFor="message">Your Message</label>
                  <span className="focus-border"></span>
                </div>
                <motion.button 
                  type="submit" 
                  className="btn btn-primary btn-submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Message</span>
                  <i className="fas fa-paper-plane"></i>
                </motion.button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
