import Link from "next/link";
import React from "react";

interface AuthHeaderProps {
  header?: string;
  paragraph?: string;
  href: string;
  text?: string;
}
export default function AuthHeaders({
  header,
  paragraph,
  href,
  text,
}: AuthHeaderProps) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center ">
      <h2 className="text-[#121212]  text-[clamp(18px,1.5vw,24px)] font-extrabold">
        {header}
      </h2>
      <p>
        {paragraph}{" "}
        <span className="text-[#771132]">
          <Link href={href}>{text}</Link>
        </span>
      </p>
    </div>
  );
}
