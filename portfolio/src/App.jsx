import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowRight, Mail, Globe, Link as LinkIcon, Share2, Download, ExternalLink, Code, Palette, Layers, Zap, ChevronDown, Menu, X } from "lucide-react"
import { clsx } from "clsx"
import "./App.css"

const projects = [
  { id: 1, title: "FinTech Dashboard", category: "Product Design", description: "A comprehensive financial analytics platform.", problem: "Users struggled to understand complex financial data.", solution: "Created an intuitive dashboard with visual hierarchies.", results: ["40% increase in engagement", "25% reduction in support tickets"], tools: ["Figma", "React", "D3.js"], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop" },
  { id: 2, title: "E-Commerce Redesign", category: "UX/UI Design", description: "Complete redesign of a fashion e-commerce platform.", problem: "Low conversion rates and high cart abandonment.", solution: "Streamlined checkout flow and improved mobile experience.", results: ["65% increase in conversion", "30% decrease in abandonment"], tools: ["Figma", "Framer", "Shopify"], image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=800&fit=crop" },
  { id: 3, title: "Health & Wellness App", category: "Mobile Design", description: "A holistic wellness application.", problem: "Users needed unified wellness platform.", solution: "All-in-one ecosystem with personalized recommendations.", results: ["100K+ downloads first month", "4.9 App Store rating"], tools: ["Figma", "React Native"], image: "https://images.unsplash.com/photo-1512428559087-560fa5ce7d02?w=1200&h=800&fit=crop" },
  { id: 4, title: "AI Writing Assistant", category: "Product Design", description: "Intelligent writing tool powered by ML.", problem: "Content creators spent too much time editing.", solution: "Real-time suggestions and tone analysis.", results: ["3x faster content creation", "$2M ARR achieved"], tools: ["Figma", "Next.js", "Python"], image: "https://images.unsplash.com/photo-1664575602554-208c7a58f9d4?w=1200&h=800&fit=crop" }
]

const experiences = [
  { id: 1, role: "Senior Product Designer", company: "TechCorp Inc.", period: "2023 - Present", description: "Leading design for flagship products serving 2M+ users.", achievements: ["Increased NPS by 35 points", "Built team of 5 designers"] },
  { id: 2, role: "Product Designer", company: "StartupXYZ", period: "2021 - 2023", description: "Early design hire shaping product direction.", achievements: ["Designed MVP securing $5M Series A", "Grew users from 0 to 100K"] },
  { id: 3, role: "UI/UX Designer", company: "Design Agency Co.", period: "2019 - 2021", description: "Worked with diverse clients across industries.", achievements: ["Delivered 30+ client projects", "Won 2 industry design awards"] }
]

const skillCategories = [
  { name: "Design", icon: <Palette className="w-5 h-5" />, skills: ["UI Design", "UX Research", "Design Systems", "Prototyping", "User Testing"] },
  { name: "Development", icon: <Code className="w-5 h-5" />, skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"] },
  { name: "Tools", icon: <Layers className="w-5 h-5" />, skills: ["Figma", "Framer", "Adobe Suite", "Notion", "Linear"] }
]

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => { const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY }); window.addEventListener("mousemove", handleMouseMove); return () => window.removeEventListener("mousemove", handleMouseMove) }, [])
  useEffect(() => { const handleScroll = () => { const sections = ["home", "work", "about", "skills", "experience", "contact"]; const pos = window.scrollY + 200; for (const s of sections) { const el = document.getElementById(s); if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) { setActiveSection(s); break } } }; window.addEventListener("scroll", handleScroll); return () => window.removeEventListener("scroll", handleScroll) }, [])

  const navItems = [{ id: "home", label: "Home" }, { id: "work", label: "Work" }, { id: "about", label: "About" }, { id: "skills", label: "Skills" }, { id: "experience", label: "Experience" }, { id: "contact", label: "Contact" }]
  const scrollToSection = (id) => { const el = document.getElementById(id); if (el) { el.scrollIntoView({ behavior: "smooth" }); setIsMenuOpen(false) } }

  return (
    <div className="min-h-screen bg-background text-primary overflow-x-hidden">
      <motion.div className="fixed w-[400px] h-[400px] rounded-full pointer-events-none z-0 opacity-30" style={{ background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)", x: mousePosition.x - 200, y: mousePosition.y - 200 }} animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }} />
      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }} className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home") }} className="text-xl font-display font-semibold">Alex<span className="text-accent">.design</span></motion.a>
          <div className="hidden md:flex items-center gap-8">{navItems.map((item) => (<motion.button key={item.id} onClick={() => scrollToSection(item.id)} className={clsx("text-sm font-medium relative", activeSection === item.id ? "text-primary" : "text-muted hover:text-primary")} whileHover={{ y: -2 }}>{item.label}{activeSection === item.id && <motion.div layoutId="navIndicator" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent" transition={{ type: "spring", stiffness: 500, damping: 30 }} />}</motion.button>))}</div>
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
        </div>
        <AnimatePresence>{isMenuOpen && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden glass border-t border-border/50"><div className="px-6 py-4 flex flex-col gap-4">{navItems.map((item) => (<button key={item.id} onClick={() => scrollToSection(item.id)} className={clsx("text-left text-base font-medium", activeSection === item.id ? "text-primary" : "text-muted")}>{item.label}</button>))}</div></motion.div>)}</AnimatePresence>
      </motion.nav>
      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">{[...Array(20)].map((_, i) => (<motion.div key={i} className="absolute w-1 h-1 bg-white/20 rounded-full" initial={{ x: Math.random() * 1920, y: Math.random() * 1080, opacity: 0 }} animate={{ y: [null, Math.random() * -200], opacity: [0, 0.5, 0] }} transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }} />))}</div>
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /><span className="text-sm text-muted">Available for new projects</span></motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-hero font-display font-bold tracking-tight mb-6">Designing digital experiences where <span className="gradient-text-accent">creativity</span> meets <span className="gradient-text-accent">technology</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10">I am Alex Chen, a Senior Product Designer crafting premium digital experiences that blend aesthetic excellence with strategic thinking.</motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button onClick={() => scrollToSection("work")} className="group px-8 py-4 bg-primary text-background font-semibold rounded-full flex items-center gap-2" whileHover={{ scale: 1.02 }}>View My Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1" /></motion.button>
            <motion.button onClick={() => scrollToSection("contact")} className="px-8 py-4 glass font-semibold rounded-full" whileHover={{ scale: 1.02 }}>Get In Touch</motion.button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2"><motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center gap-2 text-muted"><span className="text-xs uppercase tracking-widest">Scroll</span><ChevronDown className="w-5 h-5" /></motion.div></motion.div>
        </motion.div>
      </section>
      <section id="work" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="mb-20"><span className="text-accent font-medium mb-4 block">Selected Work</span><h2 className="text-section font-display font-bold mb-6">Projects that made an <span className="gradient-text-accent">impact</span></h2><p className="text-muted text-lg max-w-2xl">Each project is a story of solving real problems through thoughtful design.</p></motion.div>
          <div className="space-y-32">{projects.map((project, index) => (<motion.article key={project.id} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: index * 0.1 }} className={clsx("grid md:grid-cols-2 gap-12 items-center", index % 2 === 1 && "md:grid-flow-dense")}><div className={clsx(index % 2 === 1 && "md:col-start-2")}><motion.div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-8 group" whileHover={{ scale: 1.02 }}><img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" /><motion.div initial={{ opacity: 0, y: 20 }} whileHover={{ opacity: 1, y: 0 }} className="absolute bottom-6 left-6"><button className="px-6 py-3 bg-primary text-background font-semibold rounded-full flex items-center gap-2">View Case Study <ExternalLink className="w-4 h-4" /></button></motion.div></motion.div></div><div className={clsx(index % 2 === 1 && "md:col-start-1 md:row-start-1")}><span className="text-accent font-medium mb-3 block">{project.category}</span><h3 className="text-heading font-display font-bold mb-4">{project.title}</h3><p className="text-muted mb-6">{project.description}</p><div className="space-y-4 mb-8"><div><h4 className="font-semibold mb-2">Challenge</h4><p className="text-muted text-sm">{project.problem}</p></div><div><h4 className="font-semibold mb-2">Solution</h4><p className="text-muted text-sm">{project.solution}</p></div></div><div className="mb-8"><h4 className="font-semibold mb-3">Results</h4><ul className="space-y-2">{project.results.map((r, i) => (<li key={i} className="flex items-center gap-3 text-muted text-sm"><span className="w-1.5 h-1.5 bg-accent rounded-full" />{r}</li>))}</ul></div><div className="flex flex-wrap gap-2">{project.tools.map((t) => (<span key={t} className="px-3 py-1.5 glass text-sm rounded-full">{t}</span>))}</div></div></motion.article>))}</div>
        </div>
      </section>
      <section id="about" className="py-32 px-6 bg-surface/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }}><span className="text-accent font-medium mb-4 block">About Me</span><h2 className="text-section font-display font-bold mb-6">More than just <span className="gradient-text-accent">pixels</span></h2><div className="space-y-6 text-muted"><p>I believe great design lives at the intersection of aesthetics, functionality, and business strategy. With over 6 years of experience, I have helped startups and enterprises create products users love.</p><p>My approach combines deep user empathy with data-driven decisions. I solve real problems and drive measurable outcomes.</p><p>When not designing, you will find me exploring photography or mentoring aspiring designers.</p></div><div className="mt-10 grid grid-cols-3 gap-6">{[{ value: "6+", label: "Years Experience" }, { value: "50+", label: "Projects Delivered" }, { value: "30+", label: "Happy Clients" }].map((s) => (<div key={s.label} className="text-center p-4 glass rounded-xl"><div className="text-3xl font-display font-bold mb-1">{s.value}</div><div className="text-sm text-muted">{s.label}</div></div>))}</div></motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} className="relative"><div className="aspect-square rounded-3xl overflow-hidden"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop" alt="Profile" className="w-full h-full object-cover" /></div><div className="absolute -bottom-6 -left-6 p-6 glass rounded-2xl"><Zap className="w-8 h-8 text-accent mb-3" /><p className="font-semibold mb-1">Philosophy</p><p className="text-sm text-muted">Simplicity is sophistication.</p></div></motion.div>
        </div>
      </section>
      <section id="skills" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="mb-20 text-center"><span className="text-accent font-medium mb-4 block">Expertise</span><h2 className="text-section font-display font-bold mb-6">Skills and <span className="gradient-text-accent">Capabilities</span></h2><p className="text-muted text-lg max-w-2xl mx-auto">A toolkit built over years of practice and learning.</p></motion.div>
          <div className="grid md:grid-cols-3 gap-8">{skillCategories.map((cat, i) => (<motion.div key={cat.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.1 }} className="group p-8 glass rounded-2xl hover:bg-surface-elevated"><div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">{cat.icon}</div><h3 className="text-xl font-display font-semibold mb-4">{cat.name}</h3><div className="flex flex-wrap gap-2">{cat.skills.map((s) => (<span key={s} className="px-3 py-1.5 bg-surface-elevated text-sm rounded-full hover:bg-accent hover:text-primary transition-colors">{s}</span>))}</div></motion.div>))}</div>
        </div>
      </section>
      <section id="experience" className="py-32 px-6 bg-surface/50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="mb-20 text-center"><span className="text-accent font-medium mb-4 block">Journey</span><h2 className="text-section font-display font-bold mb-6">Professional <span className="gradient-text-accent">Experience</span></h2></motion.div>
          <div className="relative"><div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />{experiences.map((exp, i) => (<motion.div key={exp.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.1 }} className={clsx("relative mb-16 md:grid md:grid-cols-2 md:gap-16", i % 2 === 0 ? "md:text-right" : "md:col-start-2")}><div className={clsx("absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2 mt-6 border-4 border-background")} /><div className={clsx("ml-8 md:ml-0", i % 2 === 0 && "md:pr-12", i % 2 === 1 && "md:pl-12")}><span className="text-accent font-medium text-sm">{exp.period}</span><h3 className="text-xl font-display font-bold mt-1">{exp.role}</h3><p className="text-primary/80 mb-3">{exp.company}</p><p className="text-muted mb-4">{exp.description}</p><ul className="space-y-2">{exp.achievements.map((a, j) => (<li key={j} className="flex items-center gap-2 text-muted text-sm"><span className="w-1.5 h-1.5 bg-accent rounded-full" />{a}</li>))}</ul></div></motion.div>))}</div>
        </div>
      </section>
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
            <span className="text-accent font-medium mb-4 block">Get In Touch</span>
            <h2 className="text-section font-display font-bold mb-6">Let us create something <span className="gradient-text-accent">meaningful</span></h2>
            <p className="text-muted text-lg mb-12 max-w-xl mx-auto">Have a project in mind? I am always open to discussing new opportunities.</p>
            <motion.a href="mailto:hello@alexchen.design" className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-background font-semibold rounded-full mb-12" whileHover={{ scale: 1.02 }}><Mail className="w-5 h-5" />hello@alexchen.design</motion.a>
            <div className="flex items-center justify-center gap-6 mb-12">{[{ icon: <Globe className="w-5 h-5" />, href: "#" }, { icon: <LinkIcon className="w-5 h-5" />, href: "#" }, { icon: <Share2 className="w-5 h-5" />, href: "#" }].map((s, i) => (<motion.a key={i} href={s.href} className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-accent hover:text-primary" whileHover={{ scale: 1.1, rotate: 5 }}>{s.icon}</motion.a>))}</div>
            <motion.a href="#" className="inline-flex items-center gap-2 text-muted hover:text-primary" whileHover={{ x: 5 }}><Download className="w-4 h-4" />Download Resume</motion.a>
          </motion.div>
        </div>
      </section>
      <footer className="py-8 px-6 border-t border-border/50"><div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted"><p>2025 Alex Chen. All rights reserved.</p><p>Designed and Built with love</p></div></footer>
    </div>
  )
}
