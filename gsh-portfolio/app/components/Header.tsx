import Link from "next/link";

export const Header = () => {
  return (
    <Link href="/" className="h-32 w-32">
      <img src="/logo-gsh.png" alt="Website Icon"></img>
    </Link>
  );
};
