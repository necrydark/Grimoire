import { Character } from "@/types/character";
import Image from "next/image";
import Link from "next/link";

export default function CharacterCard({ imageUrl, name, isNew }: Character) {
  return (
    <Link
      href={"/characters"}
      className="m-2 cell relative cursor-pointer transition duration-100 hover:opacity-100 hover:shadow-xl rounded-xl  bg-card w-fit"
    >
      <div className="relative">
        <div className="w-full rounded-t-xl bg-opacity-50 overflow-hidden bg-red-600">
          <Image
            src={imageUrl}
            alt={name}
            width={106}
            height={106}
            className="object-none"
          />
        </div>
        <div className="p-1 flex justify-center">
          <span className="text-white p-1 text-center text-sm origin-font">
            {name}
          </span>
        </div>
      </div>
      {isNew && (
        <div className="absolute top-0 -m-2.5 p-[4px] right-0 bg-black bg-opacity-75 rounded-full flex items-center shadow-md text-white">
          <span className="text-white">New</span>
        </div>
      )}
    </Link>
  );
}
