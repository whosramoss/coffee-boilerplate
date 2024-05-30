import Link from "next/link";

type LinkButtonProps = {
  title: string;
  href: string;
};

export default function LinkButton({ title, href }: LinkButtonProps) {
  return (
    <Link
      className="hover:text-primary/50 cursor-pointer font-semibold text-primary dark:text-third"
      href={href}
      target="_blank"
    >
      {title}
    </Link>
  );
}
