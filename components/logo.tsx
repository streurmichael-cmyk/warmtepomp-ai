import Image from "next/image";
import Link from "next/link";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  if (variant === "light") {
    return (
      <Link href="/" className="inline-flex items-center no-underline">
        <Image
          src="/logo-light.png"
          alt="warmtepomp.ai"
          width={628}
          height={115}
          priority
          className="h-8 w-auto"
        />
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
