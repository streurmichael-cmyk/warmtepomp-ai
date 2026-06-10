import Image from "next/image";
import Link from "next/link";

export function Logo() {
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
