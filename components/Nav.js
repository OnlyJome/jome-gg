import Link from 'next/link';

export default function Nav() {
  return (
    <header className="bg-[var(--brand-light)]/40 backdrop-blur sticky top-0 z-50">
      <div className="container flex items-center justify-between py-3">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <img src="/onlyjome-logo.png" alt="OnlyJome" className="h-10 w-auto" />
          </div>
        </Link>
        <nav className="hidden md:flex gap-6 font-semibold text-[var(--brand-dark)]">
          <Link href="/warzone/">Warzone</Link>
          <Link href="/battlefield/">Battlefield 6</Link>
          <Link href="/deals/">Deals</Link>
          <Link href="/about/">About</Link>
          <Link href="/contact/">Contact</Link>
          <a className="btn btn-primary ml-2" href="https://twitch.tv" target="_blank" rel="noreferrer">Watch Live</a>
        </nav>
        <div className="md:hidden">
          <details>
            <summary className="cursor-pointer px-3 py-2 rounded-md bg-[var(--brand-dark)] text-white">Menu</summary>
            <div className="mt-2 flex flex-col gap-2 bg-white p-3 rounded-md shadow">
              <Link href="/warzone/">Warzone</Link>
              <Link href="/battlefield/">Battlefield 6</Link>
              <Link href="/deals/">Deals</Link>
              <Link href="/about/">About</Link>
              <Link href="/contact/">Contact</Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}