import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send a message",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-[calc(100vh-8rem)]">
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-30 dark:opacity-20"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr,minmax(0,440px)] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Contact
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
              Let&apos;s talk
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Share a name, email, and message—we&apos;ll route it to your backend at{" "}
              <code className="rounded bg-zinc-200/90 px-1.5 py-0.5 font-mono text-sm text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                POST /contact
              </code>
              .
            </p>
            <ul className="mt-8 space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>Responses handled entirely by your server—no surprise middleware.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>Validation-friendly fields with clear focus states and accessible labels.</span>
              </li>
            </ul>
            <p className="mt-10 text-sm text-zinc-500 dark:text-zinc-500">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-blue-600 hover:underline dark:text-blue-400">
                Sign in
              </Link>
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200/80 bg-white/90 p-6 shadow-xl shadow-zinc-900/5 backdrop-blur-sm sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/90 dark:shadow-none">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Send a message</h2>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              We typically reply within one business day.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
