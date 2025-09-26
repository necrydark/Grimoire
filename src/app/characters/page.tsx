import CharacterCard from "@/components/characters/character-card";
import { characters } from "@/data/characters";

export default function CharactersPage() {
  return (
    <div className=" container mx-auto px-4 py-2">
      <h1 className="text-white text-4xl origin-font font-bold">Characters</h1>
      <div className="px-4 md:pl-6 md:pr-4 flex flex-wrap max-w-screen-xl mt-2">
        {characters.map((char) => (
          <CharacterCard
            key={char.id}
            name={char.name}
            imageUrl={char.imageUrl}
            isNew={char.new}
          />
        ))}
      </div>
    </div>
  );
}
