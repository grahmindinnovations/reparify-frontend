import Link from "next/link";

const infoLinks = ["Contact Us", "FAQs", "Track Order", "Terms Of Service", "Return And Replacement"];
const aboutLinks = ["About Us", "Privacy Policy", "Terms And Condition", "Shipping Policy"];

export function Footer() {
  return (
    <footer className="bg-black text-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-zinc-800 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-2xl font-semibold">Reg office adress :</h4>
            <p className="mt-4 text-base text-zinc-300">171 H siddaiah road , Bangalore - 560002</p>
            <p className="mt-4 text-base text-zinc-300">Email id- support@sparify.co</p>
          </div>

          <div>
            <h4 className="text-2xl font-semibold">Information</h4>
            <ul className="mt-4 space-y-2 text-base text-zinc-300">
              {infoLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-semibold">About Us</h4>
            <ul className="mt-4 space-y-2 text-base text-zinc-300">
              {aboutLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-semibold">Subscribe to our emails</h4>
            <p className="mt-4 text-base text-zinc-300">
              Subscribe to get notified about product launches, special offers and news.
            </p>
            <form className="mt-4 space-y-3">
              <input
                type="email"
                placeholder="Email"
                className="h-11 w-full rounded-md border border-zinc-700 bg-transparent px-4 text-base text-white placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-md bg-white px-6 text-base font-medium text-black transition hover:bg-zinc-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-zinc-300">Country/region</p>
            <button
              type="button"
              className="mt-2 inline-flex h-10 items-center gap-2 rounded-md border border-zinc-700 px-4 text-sm text-zinc-200"
            >
              India INR ₹ <span className="text-zinc-400">⌄</span>
            </button>
          </div>

          <p className="text-sm text-zinc-300">Developed By Grahmind Innovations Pvt Ltd</p>

          <div className="text-right">
            <p className="text-sm text-zinc-300">Follow Us</p>
            <div className="mt-2 flex items-center justify-end gap-2">
              <Link
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-bold"
              >
                f
              </Link>
              <Link
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-pink-600 text-xs font-bold"
              >
                ig
              </Link>
              <Link
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-xs font-bold"
              >
                in
              </Link>
              <Link
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-xs font-bold"
              >
                ▶
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
