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
  width = 180,
  height = 60,
}: Props) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <span
        className={`text-lg font-bold tracking-tight text-brand ${className}`}
      >
        AutoAdvisor Agent
      </span>
    );
  }

  return (
    <Image
      src="/autodealerlogo.png"
      alt="AutoAdvisor Agent"
      width={width}
      height={height}
      priority
      onError={() => setErrored(true)}
      className={`h-10 w-auto object-contain ${className}`}
    />
  );
}
