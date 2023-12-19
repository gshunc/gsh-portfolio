import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <Link href="/" className="max-h-32 min-h-32 max-w-32 min-w-32">
      <Image
        src="/logo-gsh.png"
        alt="Website Icon"
        width={128}
        height={128}
        quality={100}
      ></Image>
    </Link>
  );
};
