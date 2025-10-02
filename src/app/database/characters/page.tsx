import CharactersTable from "@/components/characters/characters-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Characters",
  description: "Explore all characters in 7DS Origins, their rarity and more.",
};

export default function CharactersPage() {
  return (
    <div className=" container mx-auto px-4 py-2 space-y-8">
      <div>
        <h1 className="text-3xl font-bold grimoire-text origin-font mb-2">
          Characters Database
        </h1>
        <p className="text-muted-foreground">
          {
            "Explore all characters in Seven Deadly Sins Origins with detailed stats and abilities."
          }
        </p>
      </div>
      <CharactersTable />
    </div>
  );
}
