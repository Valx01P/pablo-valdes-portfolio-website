"use client";
import React from 'react'
import Image from 'next/image'
import { experience, type Experience } from '@/app/lib/data'
import { useLightbox } from '@/app/lib/lightbox'

type ExperienceProps = {
  darkMode: boolean;
  swagMode: boolean;
};

const ExperienceSection = (props: ExperienceProps) => {

  const { open } = useLightbox();

  const Media = ({ job }: { job: Experience }) => {
    if (!job.image) {
      return (
        <div className='relative w-full aspect-[16/10] flex flex-col items-center justify-center gap-1.5 border-b border-dashed border-[var(--accent-deep)] dark:border-[var(--accent)]/60 text-black/45 dark:text-white/55'>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          <span className='roboto-medium text-xs tracking-wide'>Photo coming soon</span>
        </div>
      );
    }
    return (
      <button
        type="button"
        onClick={() => open(`/images/${job.image}`, `${job.company} — ${job.role}`)}
        title="Click to enlarge"
        className='relative block w-full aspect-[16/10] overflow-hidden cursor-zoom-in'
      >
        <Image
          src={`/images/${job.image}`}
          alt={`${job.company} — ${job.role}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className='object-cover object-center transition-transform duration-300 hover:scale-[1.03]'
        />
      </button>
    );
  };

  return (
    <section id='experience' className='pt-16 section-surface w-full text-black dark:text-white flex justify-center'>
      <div className='h-auto layout-container flex flex-col justify-center items-start px-4'>
        <div className='w-full flex max-[850px]:justify-center mb-8'>
          <h1 className='text-black dark:text-white text-section-title merriweather-bold'>Experience</h1>
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(0.85rem,1.6vw,1.4rem)]'>
          {experience.map((job) => (
            <article key={`${job.company}-${job.dates}`} className={`${props.swagMode && "swag-bg-card"} glass glass-hover rounded-xl overflow-hidden flex flex-col`}>
              <Media job={job} />
              <div className='flex flex-col gap-1.5 p-[clamp(0.9rem,1.8vw,1.25rem)] flex-1'>
                <div className='flex items-start justify-between gap-2'>
                  <h3 className='text-black dark:text-white text-base roboto-bold leading-tight'>{job.role}</h3>
                  {job.current && (
                    <span className='shrink-0 text-[var(--accent-bright)] text-[0.6rem] roboto-bold uppercase tracking-wider border border-[var(--accent)] rounded-full px-2 py-0.5'>
                      Now
                    </span>
                  )}
                </div>
                <p className='text-[var(--accent-bright)] text-sm roboto-medium leading-tight'>
                  {job.companyUrl ? (
                    <a href={job.companyUrl} target='_blank' rel='noopener noreferrer' className='underline-offset-2 hover:underline'>{job.company}</a>
                  ) : job.company}
                  <span className='text-black/55 dark:text-white/55'> · {job.location}</span>
                </p>
                <p className='text-black/55 dark:text-white/55 text-xs roboto-medium'>{job.dates}</p>
                <ul className='flex flex-col gap-1.5 list-disc pl-4 pt-1.5'>
                  {job.bullets.map((b, i) => (
                    <li key={i} className='text-black/75 dark:text-white/70 text-[0.78rem] leading-relaxed'>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
