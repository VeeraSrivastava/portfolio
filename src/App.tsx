import { useState } from "react"

type PageId = "about" | "uiux" | "cases" | "freelancing" | "devfasttt" | "social" | "contact"

const navItems: { id: PageId ; label:string }[] = [
  { id: "about", label: "About" },
  { id: "uiux", label: "UI/UX Pros" },
  { id: "cases", label: "Case Studies" },
  { id: "freelancing", label: "Freelancing" },
  { id: "devfasttt", label: "Devfasttt" },
  { id: "social", label: "Social Media" },
  { id: "contact", label: "Contact Me" },
]

function Navigation({
  active,
  open,
  onNavigate,
  onToggle,
}: {
  active: PageId
  open: boolean
  onNavigate: (page: PageId) => void
  onToggle: () => void
}) {
  return (
    <>
      <header className="mobile-header">
        <button className="wordmark" onClick={() => onNavigate("about")}>
          Veera Srivastava
        </button>
        <button
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          className={`menu-toggle ${open ? "is-open" : ""}`}
          onClick={onToggle}
        >
          <span />
          <span />
        </button>
      </header>
      <nav
        className={`nav-panel ${open ? "is-open" : ""}`}
        aria-label="Portfolio"
      >
        <div className="mobile-nav-brand">Veera Srivastava</div>
        <button
          aria-label="Close navigation"
          className="mobile-close"
          onClick={onToggle}
        >
          ×
        </button>
        <div className="nav-list">
          {navItems.map((item) => (
            <button
              className={active === item.id ? "active" : ""}
              key={item.id}
              onClick={() => onNavigate(item.id)}
            >
              <span />
              {item.label}
            </button>
          ))}
        </div>
        <div className="nav-social">
          <a
            aria-label="Instagram"
            href="https://www.instagram.com/veera.srivastava/"
            target="_blank"
          >
            ig
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/veera-srivastava/"
            target="_blank"
          >
            in
          </a>
        </div>
      </nav>
    </>
  )
}

function Heading({
  title,
  accent = "Veera",
  description = "Srivastava",
}: {
  title: string
  accent?: string
  description?: string
}) {
  return (
    <div className="heading">
      <h1>{title}</h1>
      <p>
        <strong>{accent}</strong> {description}
      </p>
    </div>
  )
}

function PinkButton({
  children,
  onClick,
  type = "button",
}: {
  children: React.ReactNode
  onClick?: () => void
  type?: "button" | "submit"
}) {
  return (
    <button className="pink-button" onClick={onClick} type={type}>
      {children} <span>➯</span>
    </button>
  )
}

function About({ contact }: { contact: () => void }) {
  return (
    <>
      <Heading
        title="Veera Srivastava"
        accent="UI/UX designer,"
        description="programmer, educator, consultant, freelancer, public speaker"
      />
      <div className="about-grid">
        <div className="portrait">
          <img src="/9e4df.png" alt="Veera Srivastava" />
        </div>
        <div className="body-copy">
          <p>
            Hi, I&apos;m Veera Srivastava: UI/UX Designer, Agency Owner,
            Educator, and Systems Architect.
          </p>
          <p>
            With over half a decade of hands-on professional experience building
            digital products and training the next generation of designers, I
            operate at the intersection of production design, code, and
            education. As the founder of UI/UX Pros and principal of Devfasttt,
            I bridge the gap between real-world client delivery and rigorous
            design education.
          </p>
          <ul className="metrics">
            <li>
              <b>🎬 190,000+ Long-Form YouTube Views</b> across technical UI/UX
              tutorials, Figma workflows, and live project builds.
            </li>
            <li>
              <b>📲 Millions of Instagram Views</b> across 500+ short-form
              design breakdowns, wireframing guides, and carousel lessons.
            </li>
            <li>
              <b>🎙️ 100+ Multi-Hour Live Design Workshops</b> facilitating
              real-time portfolio critiques, Figma sprints &amp; student
              mentorship.
            </li>
          </ul>
          <PinkButton onClick={contact}>Contact Me</PinkButton>
        </div>
      </div>
    </>
  )
}

function ServicePage({
  title,
  image,
  accent,
  subtitle,
  children,
  contact,
}: {
  title: string
  image: string
  accent: string
  subtitle: string
  children: React.ReactNode
  contact: () => void
}) {
  return (
    <>
      <Heading title={title} accent={accent} description={subtitle} />
      <div className="service-grid">
        <img className="service-art" src={image} alt="" />
        <div className="body-copy service-copy">
          {children}
          <PinkButton onClick={contact}>Contact Me</PinkButton>
        </div>
      </div>
    </>
  )
}

function UiUx({ contact }: { contact: () => void }) {
  return (
    <ServicePage
      title="UI/UX Pros"
      image="/385bb.png"
      accent="UI/UX design"
      subtitle="monthly membership"
      contact={contact}
    >
      <p>
        UI/UX Pros is a structured, hands-on mentorship program that guides
        aspiring designers through a 2-week execution cycle of real-world
        briefs, wireframing, high-fidelity UI, and portfolio case studies.
      </p>
      <p>
        Members gain access to weekly live classes, 1-on-1 portfolio breakdowns,
        and an extensive library of production-ready Figma design systems and
        cheatsheets.
      </p>
      <p>
        Check out complete details:{" "}
        <a href="https://www.veerasrivastava.com/uiuxpros" target="_blank">
          www.veerasrivastava.com/uiuxpros
        </a>
      </p>
    </ServicePage>
  )
}

function Devfasttt({ contact }: { contact: () => void }) {
  return (
    <ServicePage
      title="Devfasttt"
      image="/d87e6.png"
      accent="Software"
      subtitle="development + design development agency"
      contact={contact}
    >
      <p>
        Devfasttt is a full-service design and development agency founded and
        led by me, specializing in end-to-end digital product design, custom
        design systems, and web/mobile engineering.
      </p>
      <p>
        We bridge high-converting UI/UX design with clean code execution,
        delivering fast, accessible web platforms, custom admin panels, and
        mobile apps for international clients across healthcare, travel, real
        estate, and e-commerce.
      </p>
      <p>
        Check it out here:{" "}
        <a href="https://devfasttt.com" target="_blank">
          https://devfasttt.com
        </a>
      </p>
    </ServicePage>
  )
}

const caseStudies = [
  {
    title: "YogaJanika Case Study",
    link: "https://www.behance.net/gallery/257441903/YogaJanika-Case-Study",
    color: "#ff8800",
    image: "/eea18.png",
    text: "YogaJanika is a yoga education website that introduces classical Hatha Yoga practices to people in Japan. The platform showcases yoga courses, introduces certified teachers, and helps visitors express interest in participating in classes.",
  },
  {
    title: "Housefly Case Study",
    link: "https://www.behance.net/gallery/257438921/Housefly-Case-Study",
    color: "#6100ae",
    image: "/b106b.png",
    text: "Housefly is a responsive house-hunting website concept designed to help people discover homes for rent or purchase and help property owners present their properties to potential buyers and tenants.",
  },
]

function Cases({ contact }: { contact: () => void }) {
  return (
    <>
      <Heading title="Case Studies" />
      <div className="project-list">
      {caseStudies.map((project) => (
  <a
    className="project-link"
    href={project.link}
    key={project.title}
    rel="noopener noreferrer"
    target="_blank"
  >
    <article className="project">
      <div
        className={`project-image ${
          project.title.startsWith("House") ? "purple" : ""
        }`}
      >
        <img src={project.image} alt={`${project.title} preview`} />
      </div>
      <div>
        <h2>{project.title}</h2>
        <span style={{ color: project.color }}>
          COMPLETE LINK: {project.link}
        </span>
        <p>{project.text}</p>
      </div>
    </article>
  </a>
))}
        <PinkButton onClick={contact}>Contact Me</PinkButton>
      </div>
    </>
  )
}

const freelanceProjects = [
  {
    title: "Yogajanika - International Health & Yoga Platform",
    image: "/d4d21.png",
    site: "https://yogajanika.jp/",
    url: "https://yogajanika.jp/",
    role: "Principal UI/UX Designer & Lead Developer",
    scope:
      "UI/UX Design, Responsive Web, Custom Admin Panel, Branding, Conversion Rate Optimization (CRO)",
    overview:
      "Partnered with Japan’s premiere Hathayoga studio to architect an end-to-end digital web platform and administration dashboard. Redesigned user journeys and online class management flows to streamline booking and improve conversion rates.",
  },
  {
    title: "SattvaDiet - Dietitian & Client Management Web & Mobile App",
    image: "/c6cc1.png",
    site: "LAUNCHES 15 NOVEMBER, 2026",
    role: "Lead UI/UX Designer & Systems Architect",
    scope:
      "Cross-Platform UI/UX, dashboards, AI consultation flows, and dynamic diet builders",
    overview:
      "Designed an end-to-end ecosystem featuring a web app for dietitians to manage schedules, clinical client data, and nutrition plans, paired with a companion mobile app.",
  },
]

function Freelancing({ contact }: { contact: () => void }) {
  return (
    <>
      <Heading title="Freelancing" />
      <div className="project-list freelance-list">
      {freelanceProjects.map((project) => {
  const card = (
    <article className="project">
      <div className="project-image">
        <img src={project.image} alt={`${project.title} preview`} />
      </div>
      <div>
        <h2>{project.title}</h2>
        <p>
          <b>COMPLETE SITE:</b> {project.site}
          <br />
          <b>Role:</b> {project.role}
          <br />
          <b>Scope:</b> {project.scope}
          <br />
          <b>Overview:</b> {project.overview}
        </p>
      </div>
    </article>
  )

  return project.url ? (
    <a
      className="project-link"
      href={project.url}
      key={project.title}
      rel="noopener noreferrer"
      target="_blank"
    >
      {card}
    </a>
  ) : (
    <div key={project.title}>{card}</div>
  )
})}
        <PinkButton onClick={contact}>Contact Me</PinkButton>
      </div>
    </>
  )
}
import { useEffect } from "react" // merge into your existing react import

const igPosts = [
  "https://www.instagram.com/reel/Dd5PIKsTwUe/",
  "https://www.instagram.com/reel/Dcqt1KhT19I/",
  "https://www.instagram.com/p/DWY-n4kE0x7/",
  "https://www.instagram.com/reel/DedrKUyzoIQ/",
  "https://www.instagram.com/reel/Dcm_ZDJzftC/",
  "https://www.instagram.com/reel/DWPHf-Jk9xk/",
]
function Social() {
  useEffect(() => {
  const w = window as any
  if (w.instgrm) {
    w.instgrm.Embeds.process()
    return
  }
  const script = document.createElement("script")
  script.src = "https://www.instagram.com/embed.js"
  script.async = true
  document.body.appendChild(script)
}, [])
  
  
  return (
    <>
      <Heading title="Social Media" />
         <div className="social-links">
        <a href="https://www.instagram.com/veera.srivastava/" target="_blank">
          <img src="/96935.svg" alt="" /> Explore Instagram
        </a>
        <a
          href="https://www.youtube.com/@VeeraSrivastava/featured"
          target="_blank"
        >
          <img src="/dd071.svg" alt="" /> Explore Youtube
        </a>
        <a href="https://www.linkedin.com/in/veera-srivastava/" target="_blank">
          <img src="/693aa.svg" alt="" /> Explore LinkedIn
        </a>
      </div>

    < ul className="metrics" style={{ marginTop: "3rem" }}>
            <li>
              <b>🎬 190,000+ Long-Form YouTube Views</b> across technical UI/UX
              tutorials, Figma workflows, and live project builds.
            </li>
            <li>
              <b>📲 Millions of Instagram Views</b> across 500+ short-form
              design breakdowns, wireframing guides, and carousel lessons.
            </li>
            <li>
              <b>🎙️ 100+ Multi-Hour Live Design Workshops</b> facilitating
              real-time portfolio critiques, Figma sprints &amp; student
              mentorship.
            </li>
          </ul>

    <div className="ig-grid">
  {igPosts.map((url) => (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      key={url}
    />
  ))}
</div>
   
    </>
  )
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus("sending")
    const form = event.currentTarget
    const data = new FormData(form)
    data.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY)
    data.append("subject", "New 1:1 appointment request")
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      })
      const json = await res.json()
      if (json.success) {
        setStatus("sent")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <>
      <Heading title="Mentoring" />
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Book 1:1 Appointment</h2>
        <label>
          <span>First Name</span>
          <img className="field-icon" src="/3625c.svg" alt="" />
          <input aria-label="First name" name="first_name" required />
        </label>
        <label>
          <span>Last Name</span>
          <img className="field-icon" src="/3625c.svg" alt="" />
          <input aria-label="Last name" name="last_name" required />
        </label>
        <label className="full">
          <span>Email</span>
          <img className="field-icon" src="/28343.svg" alt="" />
          <input aria-label="Email" name="email" required type="email" />
        </label>
        <label>
          <span>Category</span>
          <img className="field-icon" src="/4e39f.svg" alt="" />
          <select aria-label="Category" name="category" defaultValue="" required>
            <option disabled value="">
              Select category
            </option>
            <option>Portfolio review</option>
            <option>Figma mentoring</option>
            <option>Career guidance</option>
          </select>
        </label>
        <label>
          <span>Time</span>
          <img className="field-icon" src="/2181f.svg" alt="" />
          <input aria-label="Time" name="time" type="time" required />
        </label>
        <label>
          <span>Date</span>
          <img className="field-icon" src="/0e644.svg" alt="" />
          <input aria-label="Date" name="date" type="date" required />
        </label>
        <div className="full">
          <PinkButton type="submit">
            {status === "sending" ? "Sending..." : "Submit"}
          </PinkButton>
          {status === "sent" && (
            <p className="form-message">Thanks, your request has been sent.</p>
          )}
          {status === "error" && (
            <p className="form-message">Something went wrong. Please try again.</p>
          )}
        </div>
      </form>
    </>
  )
}

export default function App() {
  const [page, setPage] = useState<PageId>("about")
  const [menuOpen, setMenuOpen] = useState(false)

  const navigate = (nextPage: PageId) => {
    setPage(nextPage)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const pageContent: Record<PageId, React.ReactNode> = {
    about: <About contact={() => navigate("contact")} />,
    uiux: <UiUx contact={() => navigate("contact")} />,
    cases: <Cases contact={() => navigate("contact")} />,
    freelancing: <Freelancing contact={() => navigate("contact")} />,
    devfasttt: <Devfasttt contact={() => navigate("contact")} />,
    social: <Social />,
    contact: <Contact />,
  }

  return (
    <div className={`site-shell ${menuOpen ? "menu-open" : ""}`}>
      <Navigation
        active={page}
        open={menuOpen}
        onNavigate={navigate}
        onToggle={() => setMenuOpen((current) => !current)}
      />
      <main className="page-content">{pageContent[page]}</main>
    </div>
  )
}
