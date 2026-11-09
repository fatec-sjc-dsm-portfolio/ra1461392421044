import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import { projects, type Project } from '../data/projects'
import { asset, useReveal, useScrollProgress } from '../hooks'
import { CloseIcon, ExpandIcon, GithubIcon } from './Icons'

type Tab = 'contribuicoes' | 'hard' | 'soft'

const tabs: { id: Tab; label: string }[] = [
  { id: 'contribuicoes', label: 'Minhas contribuições' },
  { id: 'hard', label: 'Hard skills' },
  { id: 'soft', label: 'Soft skills' },
]

export function Projects() {
  const { ref, progress } = useScrollProgress<HTMLOListElement>()
  const [zoom, setZoom] = useState<Project | null>(null)

  return (
    <section id="projetos" className="section projects">
      <div className="wrap">
        <h2 className="section__title">Projetos</h2>
        <p className="section__lead">
          Os projetos integradores (API) da Fatec SJC, um por semestre, sempre em equipe e com um parceiro definindo o problema.
        </p>

        <ol ref={ref} className="timeline" style={{ ['--progress' as string]: progress }}>
          <span className="timeline__rail" aria-hidden="true">
            <span className="timeline__fill" />
          </span>
          {projects.map((p) => (
            <ProjectEntry key={p.id} project={p} onZoom={() => setZoom(p)} />
          ))}
        </ol>
      </div>

      {zoom && <Lightbox project={zoom} onClose={() => setZoom(null)} />}
    </section>
  )
}

function ProjectEntry({ project, onZoom }: { project: Project; onZoom: () => void }) {
  const [tab, setTab] = useState<Tab>('contribuicoes')
  const { ref, visible } = useReveal<HTMLLIElement>(0.12)
  const uid = useId()

  const onKeyTabs = (e: KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    const i = tabs.findIndex((t) => t.id === tab)
    const next = e.key === 'ArrowRight' ? (i + 1) % tabs.length : (i - 1 + tabs.length) % tabs.length
    setTab(tabs[next].id)
    document.getElementById(`${uid}-tab-${tabs[next].id}`)?.focus()
  }

  return (
    <li ref={ref} className={`entry ${visible ? 'is-visible' : ''}`}>
      <div className="entry__marker" aria-hidden="true">
        <span className="entry__dot" />
      </div>

      <div className="entry__body">
        <div className="entry__head">
          <span className="entry__num" aria-hidden="true">{project.semester}</span>
          <div>
            <p className="entry__period">{project.period}</p>
            <h3 className="entry__title">{project.title}</h3>
            <p className="entry__tagline">{project.tagline}</p>
          </div>
        </div>

        <div className="entry__grid">
          <button type="button" className="entry__media" onClick={onZoom} aria-label={`Ampliar imagem do ${project.title}`}>
            <img src={asset(project.image)} alt={project.imageAlt} loading="lazy" />
            <span className="entry__zoom">
              <ExpandIcon /> Ampliar
            </span>
          </button>

          <div className="entry__about">
            <p className="entry__partner">{project.partner}</p>
            {project.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <ul className="entry__tech" aria-label="Tecnologias">
              {project.technologies.map((t) => (
                <li key={t} className="chip">{t}</li>
              ))}
            </ul>
            <a className="btn btn--ghost entry__repo" href={project.repo} target="_blank" rel="noreferrer">
              <GithubIcon size={18} /> Ver repositório
            </a>
          </div>
        </div>

        <div className="panel">
          <div className="panel__tabs" role="tablist" aria-label={`Detalhes do ${project.title}`} onKeyDown={onKeyTabs}>
            {tabs.map((t) => (
              <button
                key={t.id}
                id={`${uid}-tab-${t.id}`}
                role="tab"
                type="button"
                aria-selected={tab === t.id}
                aria-controls={`${uid}-panel`}
                tabIndex={tab === t.id ? 0 : -1}
                className="panel__tab"
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div id={`${uid}-panel`} role="tabpanel" aria-labelledby={`${uid}-tab-${tab}`} className="panel__content" key={tab}>
            {tab === 'contribuicoes' && (
              <ul className="contrib">
                {project.contributions.map((c, i) => (
                  <li key={i} style={{ ['--i' as string]: i }}>{c}</li>
                ))}
              </ul>
            )}
            {tab !== 'contribuicoes' && (
              <dl className="skills">
                {(tab === 'hard' ? project.hardSkills : project.softSkills).map((s, i) => (
                  <div key={s.name} className="skills__item" style={{ ['--i' as string]: i }}>
                    <dt>{s.name}</dt>
                    <dd>{s.detail}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>
      </div>
    </li>
  )
}

function Lightbox({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const onKey = (e: globalThis.KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      prev?.focus()
    }
  }, [onClose])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={project.imageAlt} onClick={onClose}>
      <button ref={closeRef} type="button" className="lightbox__close" onClick={onClose} aria-label="Fechar imagem">
        <CloseIcon />
      </button>
      <img src={asset(project.image)} alt={project.imageAlt} onClick={(e) => e.stopPropagation()} />
    </div>
  )
}
