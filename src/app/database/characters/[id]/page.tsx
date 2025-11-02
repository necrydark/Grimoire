import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { characters } from "@/data/characters";
import { Star } from "lucide-react";
import Image from "next/image";

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(id);
  const character = characters.find((x) => x.id === id);

  console.log(character);

  if (!character) {
    return (
      <div className="p-10 flex items-center justify-center">
        <h1 className="text-2xl font-bold">Character not found.</h1>
      </div>
    );
  }
  return (
    <div className="p-10">
      <div className="flex flex-row gap-10">
        <Image
          src={character.imageUrl}
          alt={character.name}
          width={100}
          height={100}
        />
        <div className="flex flex-col gap-2 h-[100px]">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">{character.name}</h1>
            <div className="flex items-center gap-1">
              {[...Array(character.rarity)].map((_, i) => (
                <Star
                  key={i}
                  className={
                    character.rarity === 5
                      ? "text-[#f9a536] fill-[#f9a536] w-6 h-6"
                      : character.rarity === 4
                      ? "text-[#8565db] fill-[#8565db] w-6 h-6"
                      : "text-green-600 fill-green-600 w-6 h-6"
                  }
                />
              ))}
            </div>
          </div>
          <p className="text-sm">{character.subtitle}</p>
          <p className="text-sm">{character.description}</p>
          <div className="flex flex-row gap-2">
            {character.weapons.map((w) => (
              <Tooltip key={w.name}>
                <TooltipTrigger>
                  <Image src={w.imageUrl} alt={w.name} width={25} height={25} />
                </TooltipTrigger>
                <TooltipContent className="bg-background text-foreground">
                  <p>{w.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
