"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  className?: string;
  width?: number;
  height?: number;
};

export default function Logo({
  className = "",
  width = 36,
  height = 36,
}: Props) {
  const [errored, setErrored] = useState(false);

  return (
    <span className={`flex items-center gap-2 ${className}`}>
      {!errored ? (
        <Image
          src="/logo.png"
          alt="AutoAdvisor Agent logo"
          width={width}
          height={height}
          priority
          onError={() => setErrored(true)}
          className="h-9 w-9 rounded-md object-contain"
        />
      ) : null}
      <span className="text-lg font-bold tracking-tight text-brand">
        AutoAdvisor Agent
      </span>
    </span>
  );
}
