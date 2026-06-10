import Image from "next/image";
import Link from "next/link";
import { LogoMark } from "./icons";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  if (variant === "light") {
    return (
      <Link href="/" className="inline-flex items-center gap-2 no-underline">
        <LogoMark className="h-7 w-7 text-green" />
        <span className="font-display text-xl font-bold tracking-tight text-dark">
          warmtepomp<span className="text-green">.ai</span>
        </span>
      </Link>
    );
  }

  return (
    <Link href="/" className="inline-flex items-center no-underline">
      <Image
        src="/logo.png"
        alt="warmtepomp.ai"
        width={628}
        height={115}
        priority
        className="h-12 w-auto"
      />
    </Link>
  );
}
