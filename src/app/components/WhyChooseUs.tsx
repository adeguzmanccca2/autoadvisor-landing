import Reveal from "./Reveal";

function ShieldIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V6l-8-3-8 3v6c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function PlugIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 2v6" />
      <path d="M15 2v6" />
      <path d="M5 8h14v4a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5V8z" />
      <path d="M12 17v5" />
    </svg>
  );
}

function TrendIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="3 17 9 11 13 15 21 7" />
      <polyline points="14 7 21 7 21 14" />
    </svg>
  );
}

function BuildingsIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="8" width="8" height="13" />
      <rect x="13" y="3" width="8" height="18" />
      <path d="M6 12h2M6 16h2M16 7h2M16 11h2M16 15h2" />
    </svg>
  );
}

const features = [
  {
    title: "Secure by default",
    body: "Row-level security per dealership keeps every rooftop's data isolated.",
    Icon: ShieldIcon,
  },
  {
    title: "Easy integrations",
    body: "Connect your CRM, DMS, and lead providers without engineering lift.",
    Icon: PlugIcon,
  },
  {
    title: "Real ROI tracking",
    body: "See vendor performance in real time — not weeks after the fact.",
    Icon: TrendIcon,
  },
  {
    title: "Multi-dealership",
    body: "Manage multiple rooftops from a single, unified workspace.",
    Icon: BuildingsIcon,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal as="div" className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Built for dealerships that mean business
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Modern tooling, enterprise-grade safeguards.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <Reveal key={f.title} delayMs={idx * 80}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1.5 hover:border-brand hover:shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand">
                  <f.Icon />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
