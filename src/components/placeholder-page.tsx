type PlaceholderPageProps = {
  title: string;
  description: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">{title}</h1>
        <p className="mt-3 text-base text-zinc-600">{description}</p>
      </div>
    </section>
  );
}
