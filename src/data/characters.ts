import { weapons } from "./weapons";

// Basic Info
export const characters = [
  {
    id: 1,
    name: "Tristan",
    subtitle: "If it's something I can do, I'll always give it a try!",
    description:
      "A boy chosen by the 『Book of Stars』. He calms the chaos stirred by the relic and sets out on a journey to save Britannia from turmoil.",
    imageUrl: "/characters/tristan.png",
    weapons: [weapons.dualSword, weapons.longSword, weapons.greatSword],
    new: false,
  },
  {
    id: 2,
    name: "Tioreh",
    subtitle: "I have a feeling something really fun is around the corner.",
    description:
      "A girl who left the Fairy King's Forest and came to Liones, driven by a desire for adventure. Together with Tristan, she discovers the 『Book of Stars』 and set...",
    imageUrl: "/characters/tioreh.png",
    weapons: [weapons.book, weapons.staff, weapons.wand],
    new: true,
  },
  {
    id: 3,
    name: "Clotho",
    subtitle: "This, too, must be a preordained fate.",
    description:
      "A mysterious woman who appeared out of the blue to guide Tristan and his companions to the origin",
    imageUrl: "/characters/clotho.png",
    weapons: [weapons.rapier, weapons.staff, weapons.book],
    new: false,
  },
];
