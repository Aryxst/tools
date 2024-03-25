import { A } from "@solidjs/router";

export default function ToolCard({
  thumbnail,
  href,
}: {
  thumbnail: string;
  href: string;
}) {
  return (
    <A href={href} aria-label={href} class="block">
      <img
        src={thumbnail}
        alt={href}
        width={440}
        height={84}
        class="link-img"
      />
    </A>
  );
}
