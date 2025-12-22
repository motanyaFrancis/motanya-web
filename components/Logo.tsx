import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 z-50">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={36}
        height={36}
        className="w-32 h-9"
        priority
      />
      
    </Link>
  );
}
