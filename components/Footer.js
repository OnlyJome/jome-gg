export default function Footer() {
  return (
    <footer className="bg-[var(--brand-light)]/30 mt-16">
      <div className="container py-10 grid md:grid-cols-3 gap-6">
        <div>
          <img src="/onlyjome-logo2.png" className="h-12 w-auto" alt="OnlyJome" />
          <p className="text-sm mt-3">© "OnlyJome" — All rights reserved.</p>
        </div>
        <div>
          <h4 className="font-bold text-[var(--brand-dark)]">Quick Links</h4>
          <ul className="space-y-1 mt-2">
            <li><a href="/warzone/">Warzone</a></li>
            <li><a href="/battlefield/">Battlefield 6</a></li>
            <li><a href="/deals/">Deals & Codes</a></li>
            <li><a href="/about/">About</a></li>
            <li><a href="/contact/">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[var(--brand-dark)]">Follow</h4>
          <div className="flex gap-3 mt-2">
            <a href="https://tiktok.com" aria-label="TikTok">TikTok</a>
            <a href="https://youtube.com" aria-label="YouTube">YouTube</a>
            <a href="https://twitch.tv" aria-label="Twitch">Twitch</a>
            <a href="https://instagram.com" aria-label="Instagram">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}