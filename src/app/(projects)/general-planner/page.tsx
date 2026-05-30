import DetailShell from "@/components/DetailShell";

const Block = ({ heading, children }: { heading: string; children: React.ReactNode }) => (
  <div className="pt-6">
    <h2 className="text-black dark:text-white text-lg roboto-bold border-gradient-2 dark:border-gradient pt-2">{heading}</h2>
    <p className="text-black/80 dark:text-white/75 text-sm leading-relaxed pt-2.5">{children}</p>
  </div>
);

export default function GeneralPlanner() {
  return (
    <DetailShell slug="/general-planner">
      <Block heading="Description">
        My first full-stack project — a general planner where you can keep track of info, income, contacts, and (if you&apos;re an admin) users. It has a frontend and backend deployed separately on onRender. On login a user receives an access token for protected routes; a regular user sees only their own content while an admin can see other users&apos; data and create new users. Users also receive a refresh token to implement persisted login, which they can opt out of when using a computer they don&apos;t regularly use. Both roles can create and manage their own content; only admins can manage other users&apos; content.
      </Block>
      <Block heading="Tech Used">
        I mainly used React, Redux, CSS, JavaScript, Node, Express, and MongoDB. I used Mongoose for schemas, npm packages for password encryption and cookies, Redux to manage auth state, and RTK Query to talk to my backend API. The login form uses Regex for username and password validation. The backend follows the MVC design pattern — model the data, abstract route logic into controllers that process requests, which then drive the views depending on the HTTP request.
      </Block>
      <Block heading="Key takeaway">
        This was a tough one. When I made it I had no experience building or deploying a full-stack app, so I was deep in tutorial hell drilling frontend and backend concepts until it clicked — it took me a little over a month. It lacked polish and complexity, but it was my best project for learning, and it reshaped how I learn: learning should be challenging — out of the frying pan and into the fire — that&apos;s how you learn best.
      </Block>
    </DetailShell>
  );
}
