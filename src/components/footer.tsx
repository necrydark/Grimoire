import { Github } from "lucide-react";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa6";
import { PiNotionLogo } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="p-4 border-t-[1px] border-t-card">
      <p className="text-gray-400 font-custom">
        Grimoire is not affiliated with Netmarble
      </p>
      <div className="mt-6">
        <div className="flex items-center gap-6">
          <div className="flex  items-center flex-col gap-2">
            <span className=" font-custom">Discord</span>

            <Link
              href={"https://discord.gg/m9JP8x7EF4"}
              target="_blank"
              className="hover:bg-card transition-colors h-fit border-[1px] border-card p-2 rounded-md duration-300"
            >
              <FaDiscord className="h-4 w-4 text-white" />
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className=" font-custom">Community Links</span>
            <div className="flex justify-center gap-4">
              <Link
                href={""}
                target="_blank"
                className="hover:bg-card transition-colors h-fit border-[1px] border-card p-2 rounded-md duration-300"
              >
                <Github className="h-4 w-4 text-white" />
              </Link>
              <Link
                href={""}
                target="_blank"
                className="hover:bg-card transition-colors h-fit border-[1px] border-card p-2 rounded-md duration-300"
              >
                <BsTwitterX className="h-4 w-4 text-white" />
              </Link>
              <Link
                href={
                  "https://www.notion.so/27a4f66304e8805ab3bed28384df89db?v=27a4f66304e880a6bf69000c554825f0&source=copy_link"
                }
                target="_blank"
                className="hover:bg-card transition-colors h-fit border-[1px] border-card p-2 rounded-md duration-300"
              >
                <PiNotionLogo className="h-4 w-4 text-white" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className=" font-custom">Netmarble Links</span>

            <div className="flex justify-center gap-4">
              <Link
                href={""}
                target="_blank"
                className="hover:bg-card transition-colors h-fit border-[1px] border-card p-2 rounded-md duration-300"
              >
                <Github className="h-4 w-4 text-white" />
              </Link>
              <Link
                href={""}
                target="_blank"
                className="hover:bg-card transition-colors h-fit border-[1px] border-card p-2 rounded-md duration-300"
              >
                <BsTwitterX className="h-4 w-4 text-white" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              href={""}
              target="_blank"
              className="hover:text-card duration-300 transition-all"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
