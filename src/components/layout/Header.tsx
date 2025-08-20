import Link from "next/link";

export function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="font-bold text-xl">MyStarter</Link>
        <ul className="flex gap-6">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}
