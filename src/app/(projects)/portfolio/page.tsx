import DetailShell from "@/components/DetailShell";

const Block = ({ heading, children }: { heading: string; children: React.ReactNode }) => (
  <div className="pt-6">
    <h2 className="text-black dark:text-white text-lg roboto-bold border-gradient-2 dark:border-gradient pt-2">{heading}</h2>
    <p className="text-black/80 dark:text-white/75 text-sm leading-relaxed pt-2.5">{children}</p>
  </div>
);

export default function Portfolio() {
  return (
    <DetailShell slug="/portfolio">
      <Block heading="Description">
        My Full Stack Developer Portfolio, this website is deployed via Vercel onto my own domain, pablovaldes.com. The website has a light, dark, and swag theme, each made for best visual appeal, the site is also responsive on mobile devices. I&apos;ve also added a form with validation for users to send me email messages and a project details page for in depth details on any of my given project. I used Figma to create some assets such as the chess pieces in the hero section and box in the misc project card. For icons I went with various sources like from ironscout and fontawesome. For fonts I used googlefonts to get fonts like Merriweather and Roboto.
      </Block>
      <Block heading="Tech Used">
        I used Next.js, TypeScript, and TailwindCSS to make the majority of the site. I used Zustand since I wanted to share theme state globally so other page routes could access them. Using this theme state I was able to conditionally apply CSS classes to element blocks and create light, dark, and swag themes. For email sending I used Resend, so after configuring the DNS records on my website to use Resend I was able to make a POST API route to catch the messages submitted from my form and process the form data so I could receive the messages via my email. To make sure the data wasn&apos;t random gibberish I used Zod with React Hook Form for form validation, and I rate limited the API route so a user cannot send me more than 3 emails per 10 minutes based on their IP address. I also added a toast when a user submits the form — success or an explanation of why it failed.
      </Block>
      <Block heading="Key takeaway">
        This portfolio is one of my most thoughtful works yet. Up until now I hadn&apos;t made many projects that focus on design or responsiveness — I&apos;d been focused on the logic side and learning new skills. I realize now that the true beauty of a website isn&apos;t just its logic, but the culmination of that hand in hand with an inspired and responsive design, and this portfolio marks the day I understood that lesson — one I&apos;ll take with me through all future projects.
      </Block>
    </DetailShell>
  );
}
