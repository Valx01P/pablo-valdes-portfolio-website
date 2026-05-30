import DetailShell from "@/components/DetailShell";

const Block = ({ heading, children }: { heading: string; children: React.ReactNode }) => (
  <div className="pt-6">
    <h2 className="text-black dark:text-white text-lg roboto-bold border-gradient-2 dark:border-gradient pt-2">{heading}</h2>
    <p className="text-black/80 dark:text-white/75 text-sm leading-relaxed pt-2.5">{children}</p>
  </div>
);

export default function IServer() {
  return (
    <DetailShell slug="/iserver">
      <Block heading="Description">
        This project is a website all about uploading images, design inspired by imgbb.com. I implemented third-party auth using Clerk, so most page routes are protected and the only way to access them is to authenticate. Once you do, you&apos;re redirected to your dashboard where you can upload images and get links to share or use them on websites. You can delete your own images and your own account; deleting your account deletes all your images. The site is mobile responsive and was made to understand third-party auth, webhooks, and image uploading to a database.
      </Block>
      <Block heading="Tech Used">
        I mainly used Next.js, TypeScript, TailwindCSS, and shadcn. I used uploadthing for image uploading, Clerk for authentication, and MongoDB as a database. When a user makes a Clerk account, webhooks give our database the same data so we can associate images with that user and clean up on deletion, which required a relatively simple serverless API. Auth occasionally fails for some users for unclear reasons, so in the future I plan to roll my own auth or use Google/GitHub providers directly to guarantee it works everywhere.
      </Block>
      <Block heading="Key takeaway">
        The most crucial thing I learned here was webhooks — before this project I didn&apos;t even know they existed, and now I understand their importance when working with third-party solutions. I also gained a better understanding of how image uploading works and more on third-party auth. In short, this project gave me a better grasp of webhooks, image uploading, and auth solutions.
      </Block>
    </DetailShell>
  );
}
