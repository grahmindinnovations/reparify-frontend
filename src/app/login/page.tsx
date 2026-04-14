import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "@/components/login-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in",
};

export default function LoginPage() {
  return (
    <div className="relative flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4 py-12 sm:px-6">
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-30 dark:opacity-20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 h-64 w-[420px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-600/15"
        aria-hidden
      />

      <div className="relative w-full max-w-[420px]">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Welcome back
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Sign in
          </h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Use the account linked to your backend. Tokens from{" "}
            <code className="rounded bg-zinc-200/90 px-1 py-0.5 font-mono text-xs dark:bg-zinc-800">POST /auth/login</code>{" "}
            are stored in this tab only.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/95 shadow-xl shadow-zinc-900/5 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/95 dark:shadow-none">
          <div className="h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" aria-hidden />
          <div className="p-6 sm:p-8">
            <LoginForm />
            <p className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-500">
              Need help?{" "}
              <Link href="/contact" className="font-medium text-blue-600 hover:underline dark:text-blue-400">
                Contact support
              </Link>
            </p>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-500">
          <Link href="/" className="font-medium text-zinc-700 hover:underline dark:text-zinc-300">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
