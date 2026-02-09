import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/Programs.css'

const Programs = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredProgram, setHoveredProgram] = useState(null)

  const categories = [
    { id: 'all', label: 'All Programs' },
    { id: 'development', label: 'Development' },
    { id: 'data', label: 'Data & AI' },
    { id: 'cloud', label: 'Cloud & DevOps' },
  ]

  const programs = [
    {
      id: 1,
      title: 'Full Stack Development',
      category: 'development',
      duration: '6 Months',
      level: 'Beginner to Advanced',
      price: '₹49,999',
      originalPrice: '₹79,999',
      icon: 'fa-layer-group',
      color: '#6366f1',
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript'],
      highlights: [
        '50+ Real Projects',
        'Industry Mentorship',
        'Placement Assistance',
        'Lifetime Access'
      ],
      description: 'Master front-end and back-end development with modern technologies. Build production-ready web applications from scratch.'
    },
    {
      id: 2,
      title: 'AI & Machine Learning',
      category: 'data',
      duration: '8 Months',
      level: 'Intermediate',
      price: '₹69,999',
      originalPrice: '₹99,999',
      icon: 'fa-brain',
      color: '#8b5cf6',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Deep Learning', 'NLP'],
      highlights: [
        '30+ AI Projects',
        'Research Papers',
        'GPU Access',
        'Capstone Project'
      ],
      description: 'Dive deep into artificial intelligence and machine learning. Learn to build intelligent systems that can learn and adapt.'
    },
    {
      id: 3,
      title: 'Data Science',
      category: 'data',
      duration: '6 Months',
      level: 'Beginner to Advanced',
      price: '₹54,999',
      originalPrice: '₹84,999',
      icon: 'fa-chart-line',
      color: '#ec4899',
      skills: ['Python', 'SQL', 'Tableau', 'Statistics', 'Machine Learning'],
      highlights: [
        '40+ Case Studies',
        'Business Analytics',
        'Portfolio Projects',
        'Interview Prep'
      ],
      description: 'Transform data into insights. Master the art of extracting meaningful patterns from complex datasets.'
    },
    {
      id: 4,
      title: 'Cloud Computing',
      category: 'cloud',
      duration: '5 Months',
      level: 'Intermediate',
      price: '₹44,999',
      originalPrice: '₹69,999',
      icon: 'fa-cloud',
      color: '#06b6d4',
      skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes'],
      highlights: [
        'Multi-Cloud Training',
        'Certification Prep',
        'Hands-on Labs',
        'Real Deployments'
      ],
      description: 'Master cloud platforms and services. Learn to architect, deploy, and manage applications on the cloud.'
    },
    {
      id: 5,
      title: 'DevOps Engineering',
      category: 'cloud',
      duration: '4 Months',
      level: 'Intermediate to Advanced',
      price: '₹39,999',
      originalPrice: '₹59,999',
      icon: 'fa-infinity',
      color: '#10b981',
      skills: ['CI/CD', 'Jenkins', 'Terraform', 'Ansible', 'Monitoring'],
      highlights: [
        'Pipeline Design',
        'Infrastructure as Code',
        'Automation',
        'SRE Practices'
      ],
      description: 'Bridge development and operations. Automate deployments and build reliable, scalable infrastructure.'
    },
    {
      id: 6,
      title: 'Cyber Security',
      category: 'cloud',
      duration: '6 Months',
      level: 'Intermediate',
      price: '₹59,999',
      originalPrice: '₹89,999',
      icon: 'fa-shield-alt',
      color: '#f59e0b',
      skills: ['Ethical Hacking', 'Network Security', 'SIEM', 'Forensics', 'Compliance'],
      highlights: [
        'Capture The Flag',
        'Real Vulnerabilities',
        'Security Audits',
        'CEH Prep'
      ],
      description: 'Protect digital assets and infrastructure. Learn offensive and defensive security techniques.'
    },
    {
      id: 7,
      title: 'Mobile App Development',
      category: 'development',
      duration: '5 Months',
      level: 'Beginner to Intermediate',
      price: '₹44,999',
      originalPrice: '₹69,999',
      icon: 'fa-mobile-alt',
      color: '#3b82f6',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
      highlights: [
        'Cross-Platform Apps',
        'App Store Publishing',
        'UI/UX Design',
        'Backend Integration'
      ],
      description: 'Build mobile applications for iOS and Android. Create engaging user experiences on mobile devices.'
    },
    {
      id: 8,
      title: 'Python Programming',
      category: 'development',
      duration: '3 Months',
      level: 'Beginner',
      price: '₹24,999',
      originalPrice: '₹39,999',
      icon: 'fa-python',
      color: '#f97316',
      skills: ['Python Basics', 'OOP', 'Libraries', 'Automation', 'Web Scraping'],
      highlights: [
        'Beginner Friendly',
        'Project-Based',
        'Certification',
        'Mentor Support'
      ],
      description: 'Start your programming journey with Python. Learn one of the most versatile and in-demand languages.'
    },
  ]

  const filteredPrograms = selectedCategory === 'all' 
    ? programs 
    : programs.filter(p => p.category === selectedCategory)

  const stats = [
    { icon: 'fa-users', value: '5000+', label: 'Students Trained' },
    { icon: 'fa-briefcase', value: '200+', label: 'Hiring Partners' },
    { icon: 'fa-star', value: '4.8/5', label: 'Average Rating' },
    { icon: 'fa-trophy', value: '95%', label: 'Placement Rate' },
  ]

  return (
    <main className="programs-page">
      {/* Hero Section */}
      <section className="programs-hero">
        <div className="hero-bg-pattern"></div>
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero-tag">Our Programs</span>
          <h1>Transform Your Career with<br/><span className="gradient-text">Industry-Ready Skills</span></h1>
          <p>Choose from our carefully curated programs designed in collaboration with industry experts to give you the competitive edge you need.</p>
          
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="hero-stat"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <i className={`fas ${stat.icon}`}></i>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Programs Section */}
      <section className="programs-section">
        <div className="container">
          {/* Category Filter */}
          <motion.div 
            className="category-filter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Programs Grid */}
          <motion.div 
            className="programs-grid"
            layout
          >
            <AnimatePresence mode="wait">
              {filteredPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  className="program-card"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredProgram(program.id)}
                  onMouseLeave={() => setHoveredProgram(null)}
                  style={{ '--accent-color': program.color }}
                >
                  <div className="card-header">
                    <div className="card-icon" style={{ background: `${program.color}20`, color: program.color }}>
                      <i className={`fas ${program.icon}`}></i>
                    </div>
                    <div className="card-badge">{program.level}</div>
                  </div>

                  <h3 className="card-title">{program.title}</h3>
                  <p className="card-description">{program.description}</p>

                  <div className="card-meta">
                    <span><i className="fas fa-clock"></i> {program.duration}</span>
                    <span><i className="fas fa-layer-group"></i> {program.skills.length} Skills</span>
                  </div>

                  <div className="card-skills">
                    {program.skills.slice(0, 4).map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                    {program.skills.length > 4 && (
                      <span className="skill-tag more">+{program.skills.length - 4}</span>
                    )}
                  </div>

                  <div className="card-highlights">
                    {program.highlights.map((highlight, i) => (
                      <div key={i} className="highlight-item">
                        <i className="fas fa-check-circle"></i>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="card-footer">
                    <div className="card-price">
                      <span className="current-price">{program.price}</span>
                      <span className="original-price">{program.originalPrice}</span>
                    </div>
                    <motion.button 
                      className="enroll-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Enroll Now
                    </motion.button>
                  </div>

                  <motion.div 
                    className="card-glow"
                    animate={{ 
                      opacity: hoveredProgram === program.id ? 1 : 0,
                      scale: hoveredProgram === program.id ? 1 : 0.8
                    }}
                    style={{ background: `radial-gradient(circle, ${program.color}30 0%, transparent 70%)` }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-tag">Why Choose Us</span>
            <h2>The KEC × GUVI Advantage</h2>
          </motion.div>

          <div className="advantages-grid">
            {[
              { icon: 'fa-chalkboard-teacher', title: 'Live Sessions', desc: 'Interactive live classes with industry experts' },
              { icon: 'fa-project-diagram', title: 'Real Projects', desc: 'Work on industry-grade projects for your portfolio' },
              { icon: 'fa-user-graduate', title: 'Mentorship', desc: '1-on-1 mentorship from experienced professionals' },
              { icon: 'fa-handshake', title: 'Placement', desc: 'Dedicated placement support with top companies' },
              { icon: 'fa-certificate', title: 'Certification', desc: 'Industry-recognized certificates upon completion' },
              { icon: 'fa-headset', title: 'Support', desc: '24/7 doubt resolution and technical support' },
            ].map((advantage, index) => (
              <motion.div 
                key={index}
                className="advantage-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              >
                <div className="advantage-icon">
                  <i className={`fas ${advantage.icon}`}></i>
                </div>
                <h3>{advantage.title}</h3>
                <p>{advantage.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="programs-cta">
        <div className="container">
          <motion.div 
            className="cta-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="cta-content">
              <h2>Not Sure Which Program to Choose?</h2>
              <p>Talk to our career counselors who can help you find the perfect program based on your goals and background.</p>
              <div className="cta-buttons">
                <motion.button 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-phone-alt"></i>
                  <span>Request Callback</span>
                </motion.button>
                <motion.button 
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-comments"></i>
                  <span>Live Chat</span>
                </motion.button>
              </div>
            </div>
            <div className="cta-visual">
              <div className="visual-circles">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default Programs
