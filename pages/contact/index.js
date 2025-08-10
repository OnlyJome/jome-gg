export default function Contact() {
  return (
    <section className="section">
      <div className="container max-w-2xl">
        <h1 className="text-3xl font-extrabold text-[var(--brand-dark)]">Contact</h1>
        <form name="contact" method="POST" data-netlify="true" className="mt-6 card space-y-3">
          <input type="hidden" name="form-name" value="contact" />
          <label className="block">
            <span className="text-sm">Your Name</span>
            <input name="name" required className="w-full border rounded px-3 py-2" />
          </label>
          <label className="block">
            <span className="text-sm">Email</span>
            <input type="email" name="email" required className="w-full border rounded px-3 py-2" />
          </label>
          <label className="block">
            <span className="text-sm">Message</span>
            <textarea name="message" rows="5" className="w-full border rounded px-3 py-2"></textarea>
          </label>
          <button className="btn btn-primary" type="submit">Send</button>
          <p className="text-xs">Business: onlyjomebusiness@gmail.com</p>
        </form>
      </div>
    </section>
  )
}