import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Logo({
  width = 36,
  height = 36,
  className,
}: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2 z-50">
      <Image
        src="/Logo.svg"
        alt="Logo"
        width={width}
        height={height}
        className={(className)}
        priority
      />
    </Link>
  );
}
