import React from "react";

export default function BackgroundLayout({ children }: any) {
  return (
    <div className="fixed h-screen w-screen bg-[url('/Frame.svg')] z-50   bg-cover bg-[center_top_0.2rem] bg-no-repeat">
      <div className="relative h-full overflow-y-scroll">{children}</div>
    </div>
  );
}
