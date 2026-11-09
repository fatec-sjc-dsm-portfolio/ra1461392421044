import { useEffect, useState } from 'react'
import { about, profile, stack } from '../data/profile'
import { asset, useReveal } from '../hooks'
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="wrap nav__inner">
        <a href="#inicio" className="nav__brand">
          Avya<span aria-hidden="true">.</span>
        </a>
        <nav aria-label="Seções">
          <ul className="nav__links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export function Hero() {
  const letters = profile.name.split('')

  return (
    <section id="inicio" className="hero">
      <div className="hero__sky" aria-hidden="true">
        <span className="orb orb--a" />
        <span className="orb orb--b" />
        <span className="orb orb--c" />
        <span className="grain" />
      </div>

      <div className="wrap hero__inner">
        <div className="hero__photo load" style={{ ['--d' as string]: '0ms' }}>
          <img src={asset(profile.photo)} alt={`Foto de ${profile.name}`} width={460} height={460} />
        </div>

        <h1 className="hero__name" aria-label={profile.name}>
          {letters.map((ch, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="hero__letter"
              style={{ ['--i' as string]: i }}
            >
              {ch === ' ' ? ' ' : ch}
            </span>
          ))}
        </h1>

        <p className="hero__role load" style={{ ['--d' as string]: '700ms' }}>
          {profile.role}
        </p>
        <p className="hero__intro load" style={{ ['--d' as string]: '850ms' }}>
          {profile.intro}
        </p>

        <div className="hero__actions load" style={{ ['--d' as string]: '1000ms' }}>
          <a className="btn btn--solid" href="#projetos">
            Ver projetos
          </a>
          <a className="btn btn--icon" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a className="btn btn--icon" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a className="btn btn--icon" href={`mailto:${profile.email}`} aria-label="Enviar e-mail">
            <MailIcon />
          </a>
        </div>
      </div>

      <a href="#sobre" className="hero__scroll" aria-label="Ir para a seção Sobre">
        <span />
      </a>
    </section>
  )
}

export function About() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="sobre" className="section">
      <div ref={ref} className={`wrap about reveal ${visible ? 'is-visible' : ''}`}>
        <h2 className="section__title">Sobre mim</h2>

        <div className="about__text">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="about__stack">
          <h3>Com o que trabalho</h3>
          <dl>
            {stack.map((s) => (
              <div key={s.group} className="stack__row">
                <dt>{s.group}</dt>
                <dd>
                  {s.items.map((it) => (
                    <span key={it} className="chip">
                      {it}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  const [copied, setCopied] = useState(false)
  const { ref, visible } = useReveal<HTMLDivElement>()

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contato" className="section contact">
      <div ref={ref} className={`wrap reveal ${visible ? 'is-visible' : ''}`}>
        <h2 className="contact__title">Vamos conversar?</h2>
        <p className="contact__lead">
          Estou aberto a estágios, projetos e trocas sobre desenvolvimento. O jeito mais rápido de me encontrar é por e-mail.
        </p>

        <div className="contact__mail">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <button type="button" className="btn btn--ghost" onClick={copy} aria-live="polite">
            {copied ? 'E-mail copiado' : 'Copiar e-mail'}
          </button>
        </div>

        <ul className="contact__social">
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <GithubIcon size={18} /> GitHub
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon size={18} /> LinkedIn
            </a>
          </li>
        </ul>
      </div>

      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} {profile.fullname}</span>
        <a href="#inicio">Voltar ao topo</a>
      </footer>
    </section>
  )
}
