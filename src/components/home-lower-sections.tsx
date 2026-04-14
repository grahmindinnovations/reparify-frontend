import Link from "next/link";

const trustPoints = [
  {
    title: "Pan India Shipping",
    body: "Pan India Shipping with our best delivery channel partners",
  },
  {
    title: "High Quality",
    body: "Continuous attention to the smallest details to deliver the great product",
  },
  {
    title: "Secure Payments",
    body: "Pay with Most Secure and Famous Payment methods.",
  },
  {
    title: "Top-Notch Support",
    body: "Non Stop 12/7 Customer Support.",
  },
];

const faqItems = [
  "Reparify - Enhancing Your Motorcycle Lifestyle",
  "How's Reparify is different?",
  "What Can You Find on Reparify?",
  "The Reparify Assurance",
];

const popularSearches = [
  {
    heading: "Rolan Chain Sprocket Kit",
    links: [
      "Duke 390 brass chain sprocket kit",
      "Imperiale 400 brass chain sprocket kit",
      "Yamaha R15 V3 brass chain sprocket kit",
    ],
  },
  {
    heading: "Handle Bar For MotorCycle",
    links: ["KTM Duke handlebar black", "KTM RC handlebar", "Aprilia handlebar"],
  },
  {
    heading: "Auxiliary Light (Fog Lamp)",
    links: ["HJG cree 60w led lights", "Maddog scout led combo set", "HJG mini drive"],
  },
  {
    heading: "Hazard Flasher",
    links: [
      "Yamaha Aerox 155 flash X",
      "KTM adv 390 flash X",
      "KTM RC 390 flash X",
      "Dominar 400 flash X",
      "Aprilia SR 150 flash X",
    ],
  },
  {
    heading: "WindShield For Bike",
    links: [
      "BMW GS 310 windshield",
      "Aprilia SXR windshield",
      "Himalayan windshield",
      "Hunter 350 windshield",
    ],
  },
];

export default function HomeLowerSections() {
  return (
    <div className="bg-zinc-200 py-8">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="flex items-center justify-center bg-white px-8 py-10">
            <div className="max-w-md">
              <h3 className="text-4xl font-semibold tracking-tight text-zinc-900">Get Customized Quotes!</h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                Need help in buying bike spare parts and accessories which are not listed in our
                website, reach out to our motorcycle expert below
              </p>
              <button
                type="button"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-black px-6 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                Post Requirement
              </button>
            </div>
          </div>
          <article className="overflow-hidden bg-white">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80"
              alt="Unable to find specific spare parts"
              className="h-56 w-full object-cover"
            />
            <div className="px-6 py-5 text-center">
              <h4 className="text-4xl font-bold leading-tight text-zinc-900">
                Unable To Find Specific Spare Parts?
              </h4>
              <p className="mt-2 text-sm font-semibold text-zinc-800">
                Looking For Bulk Spare Parts Procurement?
              </p>
              <p className="text-sm font-semibold text-zinc-800">
                Share Your Request For Quotation(RFQ) and We Will Provide You With Best Rates.
              </p>
            </div>
          </article>
        </section>

        <section>
          <h3 className="text-4xl font-semibold tracking-tight text-zinc-900">The Reparify Story</h3>
          <div className="mt-4 overflow-hidden bg-black ring-1 ring-black/10">
            <iframe
              title="The Reparify Story"
              src="https://www.youtube.com/embed/aqz-KE-bpKQ"
              className="aspect-video w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        <section className="bg-white p-4">
          <h4 className="text-center text-sm font-semibold text-zinc-700">
            Customers can&apos;t stop raving about their &quot;Reparify&quot; experience
          </h4>
          <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
            <div className="grid grid-cols-2 gap-2">
              <img
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=700&q=80"
                alt="Customer with bike"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80"
                alt="Customer review delivery"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=700&q=80"
                alt="Rider selfie"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?auto=format&fit=crop&w=700&q=80"
                alt="Helmet customer"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {["Anish", "Abhishek Kumar", "Kiran", "Akshay Vishwakarma", "Aditya Sharma", "Shashank Belte"].map(
                (person) => (
                  <article key={person} className="rounded-md border border-indigo-200 bg-white p-3 text-xs">
                    <p className="text-amber-400">★★★★★</p>
                    <p className="mt-2 text-zinc-700">
                      Great product quality, quick support, and reliable delivery. Highly
                      recommended for riders.
                    </p>
                    <p className="mt-3 font-semibold text-zinc-900">{person}</p>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        <section>
          <div className="grid gap-6 border-b border-zinc-300 pb-7 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point) => (
              <article key={point.title} className="flex gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-md border border-zinc-400 text-zinc-700">
                  *
                </span>
                <div>
                  <h5 className="text-lg font-semibold text-zinc-900">{point.title}</h5>
                  <p className="mt-1 text-sm text-zinc-600">{point.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="divide-y divide-zinc-300 border-b border-zinc-300">
            {faqItems.map((item) => (
              <details key={item} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-sm font-semibold text-zinc-900">
                  {item}
                  <span className="text-zinc-500 transition group-open:rotate-180">⌄</span>
                </summary>
                <p className="pb-3 text-sm text-zinc-600">
                  Explore our curated catalog and rider-friendly support for every biking need.
                </p>
              </details>
            ))}
          </div>

          <div className="pt-8">
            <h4 className="text-2xl font-semibold tracking-[0.08em] text-zinc-900">POPULAR SEARCHES</h4>
            <div className="mt-4 space-y-5">
              {popularSearches.map((group) => (
                <div key={group.heading} className="border-b border-zinc-400 pb-4">
                  <p className="text-sm font-medium text-zinc-900">{group.heading}</p>
                  <p className="mt-2 text-sm text-zinc-700">
                    {group.links.map((item, index) => (
                      <span key={item}>
                        <Link href="#" className="hover:underline">
                          {item}
                        </Link>
                        {index < group.links.length - 1 ? " | " : ""}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
