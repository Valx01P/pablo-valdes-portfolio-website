// ---------------------------------------------------------------------------
// Central content for the site. Edit here to add experience or projects;
// the home sections, detail pages, and project sidebar all read from this file.
// ---------------------------------------------------------------------------

export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  dates: string;
  current?: boolean;
  // Card image (relative to /public/images). null => styled placeholder.
  image?: string | null;
  bullets: string[];
};

export type Education = {
  degree: string;
  school: string;
  detail: string;
};

export type DetailBlock = {
  heading: string;
  body: string;
};

export type Project = {
  slug: string; // also the detail route, e.g. "/cozy-soul"
  title: string;
  year: string;
  blurb: string;
  tags: string[];
  // Card preview image (relative to /public/images). null => styled placeholder.
  image: string | null;
  imageDark?: string | null; // optional theme-specific variant
  links: {
    github?: string;
    live?: string;
    marketplace?: string;
    post?: string; // e.g. a LinkedIn post (not a live site)
  };
  walkthrough?: string | null; // YouTube embed URL for the detail page
  detail?: DetailBlock[]; // detail-page prose for data-driven pages
};

export const education: Education[] = [
  {
    degree: 'B.S. in Computer Science',
    school: 'Florida International University',
    detail: 'Expected Apr. 2027 · GPA 3.76',
  },
  {
    degree: 'A.A. in Computer Science',
    school: 'Miami Dade College',
    detail: 'Graduated Dec. 2024 · GPA 3.81',
  },
];

export const experience: Experience[] = [
  {
    role: 'Software Engineer Intern',
    company: 'NVIDIA',
    companyUrl: 'https://www.nvidia.com/en-us/gpu-cloud/',
    location: 'Santa Clara, CA',
    dates: 'May 2026 — Present',
    current: true,
    image: 'new/nvidia-return-swe.webp',
    bullets: [
      'Leading the testing strategy for NVIDIA GPU Cloud (NGC) web apps in Next.js and TypeScript so new releases stay reliable for users.',
      'Built component tests for dashboards and inventory pages with Vitest and React Testing Library, end-to-end flows with Playwright, and integration tests against NGC’s RESTful API.',
      'Created a reusable project template with CI/CD built in so any team can launch a new NGC app quickly.',
    ],
  },
  {
    role: 'Software & AI Contributor',
    company: 'CodeCrunch',
    companyUrl: 'https://codecrunchglobal.vercel.app/home',
    location: 'Miami, FL',
    dates: 'Sept. 2025 — Apr. 2026',
    image: 'new/codecrunch-swe.webp',
    bullets: [
      'Redesigned an education platform, migrating a messy HTML/CSS/JS codebase to Next.js and merging 8 projects into one to make it easier to maintain and scale.',
      'Built the backend in Node.js and Express plus GitHub Actions CI/CD pipelines so releases shipped safely with fewer errors.',
      'Created AI tools powered by OpenAI models that automated research and marketing for non-technical users, working full-stack alongside the founder.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'NVIDIA',
    companyUrl: 'https://www.nvidia.com/en-us/gpu-cloud/',
    location: 'Santa Clara, CA',
    dates: 'May 2025 — Aug. 2025',
    image: 'new/nvidia-swe.webp',
    bullets: [
      'Built Bash, Terraform, and Flox automation so engineers could run any of 14+ apps locally with one command instead of by hand.',
      'Created preview environments for every app on Kubernetes with the infrastructure team so changes could be tested on a real URL before launch.',
      'Developed shared Docker and CI/CD environments on AWS so the team built and tested on the same setup.',
    ],
  },
  {
    role: 'Tech Fellow',
    company: 'CodePath',
    companyUrl: 'https://www.codepath.org/',
    location: 'Miami, FL',
    dates: 'May 2024 — Apr. 2025',
    image: 'new/codepath-tech-fellow.webp',
    bullets: [
      'Led a team of 3 to build Errorly, a React, Node.js, and Railway app, managing Git issues, branches, and code reviews so the team merged code safely.',
      'Completed 30 weeks of training in data structures, algorithms, and full-stack development, then mentored students for technical interviews.',
    ],
  },
  {
    role: 'Advanced Web Dev Team Member',
    company: 'INIT',
    companyUrl: 'https://www.weareinit.org/',
    location: 'Miami, FL',
    dates: 'Oct. 2024 — Dec. 2024',
    image: 'new/ducky-swe.webp',
    bullets: [
      'Built sign-up and login with Google OAuth and email-code verification using FastAPI and a Supabase (Postgres) database.',
      'Developed Ducky Pics, a full-stack Next.js app deployed to Vercel with a team of 4 in 9 weeks.',
    ],
  },
];

// Newest first. New projects (no walkthroughs yet) sit on top; older projects
// keep their original walkthrough videos and detail pages.
export const projects: Project[] = [
  {
    slug: '/centpoll',
    title: 'CentPoll',
    year: '2026',
    blurb:
      'A political polling platform reaching voters over text, voice calls, and the web, with live results and AI-driven outreach.',
    tags: ['Node.js', 'Twilio', 'WebSockets', 'Postgres', 'AWS', 'Stripe', 'OpenAI'],
    image: 'new/centpoll-site.webp',
    links: { live: 'https://www.centpoll.com/' },
    walkthrough: null,
    detail: [
      {
        heading: 'Description',
        body: 'CentPoll is a political polling platform that lets campaigns build surveys and reach voters on any channel — text, voice calls, or the web. It pairs a live results dashboard with secure per-client logins and usage-based billing.',
      },
      {
        heading: 'Tech Used',
        body: 'Built the survey builder and multi-channel outreach with Node.js and Twilio. The live results dashboard runs on WebSockets, Postgres, and AWS, with secure per-client logins and Stripe billing so clients pay only for completed responses. AI agents on OpenAI with ElevenLabs voice cloning automate voice and text outreach, letting a small team run agentic polling workflows at scale.',
      },
      {
        heading: 'Key takeaway',
        body: 'Improved the product through weekly pollster feedback and brought on the first paying customers before launch — a lesson in building toward real users from day one.',
      },
    ],
  },
  {
    slug: '/pokerxyz',
    title: 'PokerXYZ.io',
    year: '2026',
    blurb:
      'A real-time multiplayer web poker app with live tables, chat, rooms, and AI bot opponents so there is always a game.',
    tags: ['Node.js', 'WebSockets', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    image: 'new/pokerxyz-green-site.webp',
    links: { live: 'https://pokerxyz.io/' },
    walkthrough: null,
    detail: [
      {
        heading: 'Description',
        body: 'PokerXYZ.io is a multiplayer web poker platform for private games and tournaments, with AI bot opponents that fill in so 30+ players always have a table — even short-handed.',
      },
      {
        heading: 'Tech Used',
        body: 'The real-time backend is built in Node.js with WebSockets to handle live game state, chat, rooms, and bot opponents. The responsive front end uses Next.js and Tailwind with custom SVG card and chip art so games work on any device.',
      },
    ],
  },
  {
    slug: '/poker-robot',
    title: 'Poker Robot',
    year: '2026',
    blurb:
      'A physical card-dealing machine that shuffles, sorts, and deals real cards on its own using computer vision.',
    tags: ['Python', 'Flask', 'Next.js', 'Arduino', 'Computer Vision', 'Jetson'],
    image: 'new/poker-robot.webp',
    links: { post: 'https://www.linkedin.com/posts/pablovaldes01_tech-fiu-growth-ugcPost-7448899457829621760-gnuJ' },
    walkthrough: null,
    detail: [
      {
        heading: 'Description',
        body: 'Poker Robot is a physical machine that shuffles, sorts, and deals real cards with no human dealer, so everyone at the table can focus on the game.',
      },
      {
        heading: 'Tech Used',
        body: 'A Python and Flask server on an NVIDIA Jetson Orin Nano running Ubuntu connects a Next.js app to an Arduino and uses computer vision to track cards, so the robot deals accurately on its own.',
      },
    ],
  },
  {
    slug: '/cozy-soul',
    title: 'Cozy Soul',
    year: '2025',
    blurb:
      'A home rental site with location-based listings, search, and posting so travelers can find rentals by area and book directly.',
    tags: ['Next.js', 'TypeScript', 'Google Maps API', 'Google OAuth', 'Resend', 'Postgres'],
    image: 'new/cozysoul-site.webp',
    links: { live: 'https://cozy-soul-inc.vercel.app/' },
    walkthrough: null,
    detail: [
      {
        heading: 'Description',
        body: 'Cozy Soul is a home rental site with location-based listings, search, and posting forms so travelers can find rentals by area. It lets the client take bookings directly and avoid third-party platform fees.',
      },
      {
        heading: 'Tech Used',
        body: 'Built in Next.js and TypeScript with the Google Maps API for location-based listings. Sign-up and login use Google OAuth with HTTP-only cookie sessions, and email runs through Resend so accounts and notifications work reliably. Developed with a teammate from weekly client feedback.',
      },
    ],
  },
  {
    slug: '/portfolio',
    title: 'My Portfolio',
    year: '2024',
    blurb:
      'The culmination of my skills & growing confidence as a Full Stack Web Developer.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Zustand', 'Resend'],
    image: 'portfolio-site-dark.webp',
    imageDark: 'portfolio-site.webp',
    links: {
      github: 'https://github.com/Valx01P/pablo-valdes-portfolio-website',
      live: '/',
    },
    walkthrough: 'https://www.youtube.com/embed/EKtf5D3udAs',
  },
  {
    slug: '/iserver',
    title: 'iServer',
    year: '2024',
    blurb:
      'An image uploading website with third-party auth, inspired by imgbb.com. Made to statically serve image URLs for websites.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'MongoDB', 'Clerk'],
    image: 'i-server-site.webp',
    links: {
      github: 'https://github.com/Valx01P/image-transfer-site-master',
      live: 'https://image-transfer-site-master.vercel.app/',
    },
    walkthrough: 'https://www.youtube.com/embed/zKs-zxrPh6E',
  },
  {
    slug: '/practical-synth-theme',
    title: 'Practical Synth Theme',
    year: '2024',
    blurb:
      'My solution to a visually pleasing SynthWave theme for VS Code. I could never find one I liked, so I made my own for everyday use.',
    tags: ['CSS', 'JSON'],
    image: 'practical-synth-extension.webp',
    links: {
      github: 'https://github.com/Valx01P/practical-synth',
      marketplace:
        'https://marketplace.visualstudio.com/items?itemName=PabloValdes019.practical-synth',
    },
    walkthrough: 'https://www.youtube.com/embed/hJPBJeP775c',
  },
  {
    slug: '/theoretical-stonk-plays',
    title: 'Theoretical Stonk Plays',
    year: '2024',
    blurb:
      'A stock simulation tool using live API data for charts. Lets users form theoretical stock plays based on state actions.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Polygon.io API', 'Zustand'],
    image: 't-stonk-plays-site.webp',
    links: {
      github: 'https://github.com/Valx01P/theoretical-stock-plays-site',
      live: 'https://theoretical-stock-plays-site.vercel.app/',
    },
    walkthrough: 'https://www.youtube.com/embed/iTeLpY0IYnw',
  },
  {
    slug: '/general-planner',
    title: 'General Planner',
    year: '2023',
    blurb:
      'Auth routes and permissions with a dedicated frontend and backend API. My first full-stack project and a priceless learning experience.',
    tags: ['React', 'Redux', 'MongoDB', 'Node', 'Express', 'JavaScript'],
    image: 'g-planner-site.webp',
    links: {
      github: 'https://github.com/Valx01P/generalplanner',
      live: 'https://general-planner.onrender.com/',
    },
    walkthrough: 'https://www.youtube.com/embed/pfGWJuYSSbE',
  },
];
