import React from 'react'
import type { IconType } from 'react-icons'
import {
  SiTypescript, SiPython, SiJavascript, SiCplusplus, SiHtml5, SiCss,
  SiReact, SiNextdotjs, SiExpress, SiFastapi, SiSpringboot, SiTailwindcss,
  SiNodedotjs, SiMongodb, SiPostgresql, SiRedis, SiSupabase, SiSocketdotio,
  SiGit, SiGithub, SiDocker, SiKubernetes, SiNginx, SiVercel, SiTerraform, SiGithubactions,
  SiVitest, SiPostman, SiFigma, SiTwilio, SiStripe, SiOpenai, SiResend, SiGooglecloud,
  SiGraphql, SiWebrtc,
} from 'react-icons/si'
import { FaJava, FaDatabase, FaBrain, FaAws } from 'react-icons/fa'
import { FaMasksTheater } from 'react-icons/fa6'

type ToolProps = {
  darkMode: boolean;
  swagMode: boolean;
};

type Skill = { name: string; Icon: IconType };

const groups: { title: string; skills: Skill[] }[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'Python', Icon: SiPython },
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'Java', Icon: FaJava },
      { name: 'SQL', Icon: FaDatabase },
      { name: 'HTML', Icon: SiHtml5 },
      { name: 'CSS', Icon: SiCss },
      { name: 'C++', Icon: SiCplusplus },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'React', Icon: SiReact },
      { name: 'Next.js', Icon: SiNextdotjs },
      { name: 'Express', Icon: SiExpress },
      { name: 'FastAPI', Icon: SiFastapi },
      { name: 'Spring Boot', Icon: SiSpringboot },
      { name: 'Tailwind CSS', Icon: SiTailwindcss },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', Icon: SiNodedotjs },
      { name: 'MongoDB', Icon: SiMongodb },
      { name: 'Postgres', Icon: SiPostgresql },
      { name: 'Redis', Icon: SiRedis },
      { name: 'Supabase', Icon: SiSupabase },
      { name: 'WebSockets', Icon: SiSocketdotio },
    ],
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Git', Icon: SiGit },
      { name: 'GitHub', Icon: SiGithub },
      { name: 'Docker', Icon: SiDocker },
      { name: 'Kubernetes', Icon: SiKubernetes },
      { name: 'Nginx', Icon: SiNginx },
      { name: 'AWS', Icon: FaAws },
      { name: 'Vercel', Icon: SiVercel },
      { name: 'Terraform', Icon: SiTerraform },
      { name: 'GitHub Actions', Icon: SiGithubactions },
    ],
  },
  {
    title: 'Tools & APIs',
    skills: [
      { name: 'Playwright', Icon: FaMasksTheater },
      { name: 'Vitest', Icon: SiVitest },
      { name: 'Postman', Icon: SiPostman },
      { name: 'Figma', Icon: SiFigma },
      { name: 'Twilio', Icon: SiTwilio },
      { name: 'Stripe', Icon: SiStripe },
      { name: 'OpenAI', Icon: SiOpenai },
      { name: 'Resend', Icon: SiResend },
      { name: 'GCP', Icon: SiGooglecloud },
    ],
  },
  {
    title: 'Currently Exploring',
    skills: [
      { name: 'GraphQL', Icon: SiGraphql },
      { name: 'AI / ML', Icon: FaBrain },
      { name: 'WebRTC', Icon: SiWebrtc },
      { name: 'Kubernetes', Icon: SiKubernetes },
    ],
  },
];

// Brand colors per skill. Logos that are normally black/white use a mid gray
// so they stay visible on both the cream (day) and noir (night) backgrounds.
const brand: Record<string, string> = {
  TypeScript: '#3178C6', Python: '#3776AB', JavaScript: '#EAB308', Java: '#E76F00',
  SQL: '#00758F', HTML: '#E34F26', CSS: '#1572B6', 'C++': '#00599C',
  React: '#61DAFB', 'Next.js': '#9CA3AF', Express: '#9CA3AF', FastAPI: '#009688',
  'Spring Boot': '#6DB33F', 'Tailwind CSS': '#06B6D4',
  'Node.js': '#5FA04E', MongoDB: '#47A248', Postgres: '#4169E1', Redis: '#DC382D',
  Supabase: '#3ECF8E', WebSockets: '#9CA3AF',
  Git: '#F05032', GitHub: '#9CA3AF', Docker: '#2496ED', Kubernetes: '#326CE5',
  Nginx: '#009639', AWS: '#FF9900', Vercel: '#9CA3AF', Terraform: '#7B42BC',
  'GitHub Actions': '#2088FF',
  Playwright: '#2EAD33', Vitest: '#6E9F18', Postman: '#FF6C37', Figma: '#F24E1E',
  Twilio: '#F22F46', Stripe: '#635BFF', OpenAI: '#10A37F', Resend: '#9CA3AF',
  GCP: '#4285F4',
  GraphQL: '#E10098', 'AI / ML': '#8B5CF6', WebRTC: '#5B8DEF',
};

const ToolSection = (props: ToolProps) => {
  return (
    <section id='tools' className='pt-16 section-surface w-full text-black dark:text-white flex justify-center'>
      <div className='h-auto layout-container flex flex-col justify-center px-4'>
        <div className='w-full flex max-[850px]:justify-center mb-8'>
          <h1 className='text-black dark:text-white text-section-title merriweather-bold'>My Skills</h1>
        </div>

        <div className={`${props.swagMode && "swag-bg"} glass rounded-xl p-[clamp(1.1rem,2.4vw,2rem)]`}>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-7'>
            {groups.map((group) => (
              <div key={group.title}>
                <h2 className='text-black dark:text-white text-sm uppercase tracking-wider roboto-bold mb-3 pb-1 w-fit dark:border-gradient-bottom border-gradient-bottom-2'>
                  {group.title}
                </h2>
                <div className='flex flex-wrap gap-2'>
                  {group.skills.map(({ name, Icon }) => (
                    <span
                      key={name}
                      className='chip inline-flex items-center gap-1.5 text-black/75 dark:text-white/80 text-xs roboto-medium px-2.5 py-1 rounded-full hover:scale-105 transition-transform'
                    >
                      <Icon className='text-[0.95rem] shrink-0' style={{ color: brand[name] || 'currentColor' }} aria-hidden="true" />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ToolSection
