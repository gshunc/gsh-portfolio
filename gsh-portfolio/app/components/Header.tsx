import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <Link href="/">
      <Image
        src="/logo-gsh.png"
        alt="Website Icon"
        width={172}
        height={172}
        quality={100}
      ></Image>
    </Link>
  );
};
