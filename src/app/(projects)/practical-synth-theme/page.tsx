import DetailShell from "@/components/DetailShell";

const Block = ({ heading, children }: { heading: string; children: React.ReactNode }) => (
  <div className="pt-6">
    <h2 className="text-black dark:text-white text-lg roboto-bold border-gradient-2 dark:border-gradient pt-2">{heading}</h2>
    <p className="text-black/80 dark:text-white/75 text-sm leading-relaxed pt-2.5">{children}</p>
  </div>
);

export default function PracticalSynthTheme() {
  return (
    <DetailShell slug="/practical-synth-theme">
      <Block heading="Description">
        In this project I created a Visual Studio Code extension that changes the VS Code theme to my own, named Practical Synth Theme. I made it because I couldn&apos;t find any Synthwave or Cyberpunk-like themes I liked — most gave me eye strain, didn&apos;t captivate me, or had too much contrast to focus on actually coding — so I made one that satisfied all the criteria I wanted.
      </Block>
      <Block heading="Tech Used">
        This was more of a design project than a logic-heavy one. I used &apos;yo code&apos; to scaffold the VS Code theme extension, restyled all the main VS Code classes in the theme JSON, then created an Azure developer account and published it to the Visual Studio Marketplace, where it&apos;s live now and free to download.
      </Block>
      <Block heading="Key takeaway">
        This one was less about improving my coding ability and more about creating something for its actual use. So I didn&apos;t get too many meaningful technical takeaways — other than a sick theme and the strengthened belief that you can create anything you put your mind to.
      </Block>
    </DetailShell>
  );
}
