import { ArrowUpRight } from 'lucide-react';
import { IMAGES } from '@/lib/content';
import Reveal from '@/lib/reveal';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-10 md:py-14 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 lg:mb-24 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-brand-gold" aria-hidden="true" />
              <p className="text-[11px] tracking-[0.25em] uppercase text-brand-gold font-medium">
                Nos Réalisations
              </p>
            </div>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-brand-ink leading-tight">
              Chaque Projet,
              <br />
              <span className="italic text-brand-gold">Une Histoire Unique</span>
            </h2>
          </div>
          <p className="text-sm text-brand-ink/50 font-light leading-relaxed max-w-md">
            Découvrez une sélection de nos rénovations réalisées à Bruxelles et ses environs.
            Chaque chantier est mené avec rigueur, passion et un souci du détail absolu.
            {' '}
            <a href="#testimonials" className="text-brand-gold underline decoration-brand-gold/30 hover:decoration-brand-gold transition-colors">
              Lire les retours de nos clients
            </a>.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {IMAGES.portfolio.map((project, i) => (
            <Reveal
              key={project.title}
              delay={i * 120}
              margin="-60px"
              className={`${project.span} group relative overflow-hidden rounded-[1.75rem] lg:rounded-[2rem] shadow-[0_16px_48px_rgba(17,17,17,0.10)] ring-1 ring-brand-ink/5`}
            >
              <div className={`${project.aspect} overflow-hidden bg-brand-cream`}>
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.type}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Scrim permanent : garantit un texte blanc lisible quel que soit le fond de la photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/85 via-brand-ink/25 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-5 lg:p-7">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-brand-goldLight font-semibold mb-1.5 drop-shadow">
                    {project.type}
                  </p>
                  <div className="flex items-end justify-between gap-3">
                    <h3 className="font-display text-xl lg:text-2xl font-light text-white drop-shadow">{project.title}</h3>
                    <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-brand-goldLight group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0" aria-hidden="true" />
                  </div>
                </figcaption>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}