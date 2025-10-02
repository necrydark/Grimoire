import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { characters } from "@/data/characters";
import Image from "next/image";

export default function CharacterPage({
  params: { name },
}: {
  params: { name: string };
}) {
  console.log(name);
  const character = characters.find((x) => x.name === name);

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
          <h1 className="text-2xl font-bold">{character.name}</h1>
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
