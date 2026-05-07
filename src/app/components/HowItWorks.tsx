import Reveal from "./Reveal";

const steps = [
  {
    n: 1,
    title: "Connect your data",
    body: "Connect your vendors, leads, and sales in minutes.",
  },
  {
    n: 2,
    title: "AI does the work",
    body: "Matches leads to sales and guides buyers automatically.",
  },
  {
    n: 3,
    title: "See your ROI",
    body: "Know exactly what's working and what's not.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal as="div" className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Up and running in days, not months.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((s, idx) => (
            <Reveal key={s.n} delayMs={idx * 120}>
              <li className="relative h-full rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md">
                <div
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-lg font-bold text-white shadow"
                >
                  {s.n}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-slate-600">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
