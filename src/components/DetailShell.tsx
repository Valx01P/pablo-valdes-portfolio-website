"use client";
import Image from "next/image";
import { useTheme } from "@/app/lib/store";
import { useLightbox } from "@/app/lib/lightbox";
import { projects } from "@/app/lib/data";
import { notFound } from "next/navigation";

type Props = {
  slug: string;
  /** Custom prose. If omitted, renders the project's `detail` blocks from data. */
  children?: React.ReactNode;
};

// Shared layout for every project detail page: transparent over the noir shader,
// a glass content panel, a responsive walkthrough embed (or placeholder), the
// project's links, and a footer. Title/tags/links/walkthrough come from data.
const DetailShell = ({ slug, children }: Props) => {
  const { darkMode } = useTheme();
  const { open } = useLightbox();
  const currentYear = new Date().getFullYear();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  const { github, live, marketplace, post } = project.links;
  const hasLinks = github || live || marketplace || post;
  const detailImage = (darkMode && project.imageDark) || project.image;

  return (
    <main className={`${darkMode && "dark"} w-auto bg-transparent text-black dark:text-white min-h-screen`}>
      <div className="py-10 min-h-screen flex flex-col items-center max-[430px]:ml-0 ml-[70px] max-[430px]:pt-[84px] px-[clamp(1rem,4vw,2rem)]">
        <div className="glass rounded-2xl w-full max-w-[920px] p-[clamp(1.1rem,3vw,2.25rem)]">

          <div className="flex items-baseline gap-3 flex-wrap">
            <h1 className="text-black dark:text-white text-[clamp(1.5rem,1.1rem+2vw,2.25rem)] merriweather-bold">{project.title}</h1>
            <span className="text-black/45 dark:text-white/45 roboto-medium text-base">{project.year}</span>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-3">
            {project.tags.map((t) => (
              <span key={t} className="chip text-black/70 dark:text-white/75 rounded-full px-2.5 py-0.5 text-[0.7rem] roboto-medium">{t}</span>
            ))}
          </div>

          {/* Walkthrough video, image, or placeholder */}
          <div className="mt-6">
            {project.walkthrough ? (
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-black/15 dark:border-white/10">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={project.walkthrough}
                  title={`${project.title} walkthrough`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : detailImage ? (
              <button
                type="button"
                onClick={() => open(`/images/${detailImage}`, `${project.title} preview`)}
                title="Click to enlarge"
                className="relative block w-full aspect-video rounded-lg overflow-hidden border border-black/15 dark:border-white/10 cursor-zoom-in"
              >
                <Image
                  src={`/images/${detailImage}`}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 920px) 100vw, 920px"
                  className="object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
                />
              </button>
            ) : (
              <div className="w-full aspect-video rounded-lg flex flex-col items-center justify-center gap-2 border-2 border-dashed border-[var(--accent-deep)] dark:border-[var(--accent)]/60 text-black/55 dark:text-white/60">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
                <span className="roboto-medium text-sm tracking-wide">Preview coming soon</span>
              </div>
            )}
          </div>

          {/* Prose: custom children, or data-driven detail blocks */}
          <div className="pt-2">
            {children ?? project.detail?.map((block) => (
              <div key={block.heading} className="pt-6">
                <h2 className="text-black dark:text-white text-lg roboto-bold border-gradient-2 dark:border-gradient pt-2">{block.heading}</h2>
                <p className="text-black/80 dark:text-white/75 text-sm leading-relaxed pt-2.5">{block.body}</p>
              </div>
            ))}
          </div>

          {hasLinks && (
            <div className="flex flex-row flex-wrap items-center gap-6 pt-8">
              {live && (
                <a href={live} target={live.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" title="Go to the deployed live site">
                  <span className="text-[var(--accent-bright)] underline text-sm roboto-medium grow">Live Site</span>
                </a>
              )}
              {marketplace && (
                <a href={marketplace} target="_blank" rel="noopener noreferrer" title="View on the VS Code Marketplace">
                  <span className="text-[var(--accent-bright)] underline text-sm roboto-medium grow">Marketplace</span>
                </a>
              )}
              {post && (
                <a href={post} target="_blank" rel="noopener noreferrer" title="View the LinkedIn post">
                  <span className="text-[var(--accent-bright)] underline text-sm roboto-medium grow">LinkedIn Post</span>
                </a>
              )}
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" title="View the Github Repository">
                  <span className="text-[var(--accent-bright)] underline text-sm roboto-medium grow">Source Code</span>
                </a>
              )}
            </div>
          )}

          <footer className="pt-10 flex max-[560px]:flex-col flex-row">
            <h2 className="roboto-black text-sm text-black/70 dark:text-white/70">{`© ${currentYear} Pablo Valdes. `}</h2>
            <h2 className="roboto-black text-sm text-black/70 dark:text-white/70">All rights reserved.</h2>
          </footer>

        </div>
      </div>
    </main>
  );
};

export default DetailShell;
