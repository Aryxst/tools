import Card from "../components/tool-card";

export default function Home() {
  return (
    <main>
      <div class="site-title">
        <h1 class="font-bold mt-10">Aryxst's Tools</h1>
        <p class="text-xl text-center text-[var(--text-subtitle)] mb-10">
          My personal tools
        </p>
      </div>

      <div class="cards border-y-2">
        <Card thumbnail="logos/text-to-number.svg" href="/ascii" />
      </div>
    </main>
  );
}
