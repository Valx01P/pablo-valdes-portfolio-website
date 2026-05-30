"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projects, type Project } from '@/app/lib/data'
import { useLightbox } from '@/app/lib/lightbox'

type ProjectProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
  swagMode: boolean;
};

const ProjectSection = (props: ProjectProps) => {

  const { open } = useLightbox();
  const githubIconFileName = props.darkMode ? 'github-light-2.svg' : 'github-dark-2.svg';
  const eyeIconFileName = props.darkMode ? 'eye-light.svg' : 'eye-dark.svg';
  const linkedinIconFileName = props.darkMode ? 'linkedin-light.svg' : 'linkedin-dark.svg';

  const resolveImage = (p: Project) => {
    if (props.darkMode && p.imageDark) return p.imageDark;
    return p.image;
  };

  const Media = ({ p }: { p: Project }) => {
    const img = resolveImage(p);
    if (!img) {
      return (
        <div className='relative w-full aspect-[16/10] flex flex-col items-center justify-center gap-1.5 border-b border-dashed border-[var(--accent-deep)] dark:border-[var(--accent)]/60 text-black/45 dark:text-white/55'>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          <span className='roboto-medium text-xs tracking-wide'>Preview coming soon</span>
        </div>
      );
    }
    return (
      <button
        type="button"
        onClick={() => open(`/images/${img}`, `${p.title} preview`)}
        title="Click to enlarge"
        className='relative block w-full aspect-[16/10] overflow-hidden cursor-zoom-in'
      >
        <Image
          src={`/images/${img}`}
          alt={`${p.title} preview`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className='object-cover object-top transition-transform duration-300 hover:scale-[1.03]'
        />
      </button>
    );
  };

  return (
    <section id='projects' className='pt-16 section-surface w-full text-black dark:text-white flex justify-center'>
      <div className='h-auto layout-container flex flex-col justify-center items-start px-4'>
        <div className='w-full flex max-[850px]:justify-center mb-8'>
          <h1 className='text-black dark:text-white text-section-title merriweather-bold'>Projects</h1>
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(0.85rem,1.6vw,1.4rem)]'>
          {projects.map((p) => (
            <article key={p.slug} className={`${props.swagMode && "swag-bg-card"} glass glass-hover rounded-xl overflow-hidden flex flex-col`}>
              <Media p={p} />
              <div className='flex flex-col gap-2.5 p-[clamp(0.9rem,1.8vw,1.25rem)] flex-1'>
                <div className='flex items-baseline justify-between gap-2'>
                  <h3 className='text-black dark:text-white text-base roboto-bold leading-tight'>{p.title}</h3>
                  <span className='text-black/45 dark:text-white/45 roboto-medium text-xs shrink-0'>{p.year}</span>
                </div>
                <p className='text-black/75 dark:text-white/70 text-[0.8rem] leading-relaxed line-clamp-3 flex-1'>{p.blurb}</p>
                <div className='flex flex-wrap gap-1.5'>
                  {p.tags.slice(0, 5).map((t) => (
                    <span key={t} className='chip text-black/70 dark:text-white/75 text-[0.66rem] roboto-medium px-2 py-0.5 rounded-full transition-colors'>
                      {t}
                    </span>
                  ))}
                </div>
                <div className='flex items-center justify-between pt-1.5 mt-auto border-t border-black/10 dark:border-white/10'>
                  <Link
                    href={p.slug}
                    title='Open details page for this project'
                    className='btn-transition-light dark:btn-transition-dark text-sm roboto-medium pt-1.5'
                  >
                    Details →
                  </Link>
                  <div className='flex flex-row gap-3 items-center pt-1.5'>
                    {p.links.github && (
                      <a href={p.links.github} target="_blank" rel="noopener noreferrer" title='View the Github Repository'>
                        <Image src={`/svg/${githubIconFileName}`} width={20} height={20} alt="github icon" className='hover:scale-125 opacity-80 hover:opacity-100' />
                      </a>
                    )}
                    {(p.links.live || p.links.marketplace) && (
                      <a href={(p.links.live || p.links.marketplace)!} target={(p.links.live || p.links.marketplace)!.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" title='Go to the live site'>
                        <Image src={`/svg/${eyeIconFileName}`} width={20} height={20} alt="live site icon" className='hover:scale-125 opacity-80 hover:opacity-100' />
                      </a>
                    )}
                    {p.links.post && (
                      <a href={p.links.post} target="_blank" rel="noopener noreferrer" title='View the LinkedIn post'>
                        <Image src={`/svg/${linkedinIconFileName}`} width={20} height={20} alt="LinkedIn post icon" className='hover:scale-125 opacity-80 hover:opacity-100' />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectSection
