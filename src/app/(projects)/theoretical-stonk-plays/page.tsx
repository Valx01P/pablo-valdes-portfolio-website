import DetailShell from "@/components/DetailShell";

const Block = ({ heading, children }: { heading: string; children: React.ReactNode }) => (
  <div className="pt-6">
    <h2 className="text-black dark:text-white text-lg roboto-bold border-gradient-2 dark:border-gradient pt-2">{heading}</h2>
    <p className="text-black/80 dark:text-white/75 text-sm leading-relaxed pt-2.5">{children}</p>
  </div>
);

export default function TheoreticalStonkPlays() {
  return (
    <DetailShell slug="/theoretical-stonk-plays">
      <Block heading="Description">
        In this project you can look at stock charts, search by ticker symbol, and switch between chart displays. The main feature, though, is making theoretical stock plays — mimicking how an actual play would go based on actions like price changes or adjusting your position. When you finish a play you can sell the entire position to see your ending metrics, or step back. Your position is shown on a chart for better visualization, alongside a table of all the changing data.
      </Block>
      <Block heading="Tech Used">
        I used Next.js, TypeScript, and TailwindCSS, but the star was Zustand. I used it for the complex state management — defining how actions like changing the stock price mutate other state variables. Those mutations are recorded in a step array, which is how I built the back button, the data table, and the chart display. For the real stock charts I used the Polygon.io API, fetching aggregate data via dynamic search URLs based on the search input (SPY by default).
      </Block>
      <Block heading="Key takeaway">
        I learned a tremendous amount about working with state and third-party APIs, which was the main goal. But I also got a better idea of what coding is all about. I always wanted to build this because, from when I used to trade stocks, I knew I&apos;d love a tool like it — paper trading just lets you pretend, whereas this lets you create an actual plan with steps and gives instantaneous values and changes. The real takeaway: make something you truly believe is useful.
      </Block>
    </DetailShell>
  );
}
