import Reveal from "./Reveal";

function ChartIcon() {
  return (
    <svg
      className="h-7 w-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 3v18h18" />
      <rect x="7" y="12" width="3" height="6" />
      <rect x="12" y="8" width="3" height="10" />
      <rect x="17" y="4" width="3" height="14" />
    </svg>
  );
}

function RobotIcon() {
  return (
    <svg
      className="h-7 w-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4" y="7" width="16" height="12" rx="2" />
      <path d="M12 3v4" />
      <circle cx="12" cy="3" r="1" />
      <circle cx="9" cy="13" r="1" />
      <circle cx="15" cy="13" r="1" />
      <path d="M9 17h6" />
    </svg>
  );
}

export default function Products() {
  return (
    <section id="products" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal as="div" className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Two powerful tools. One platform.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Built to work together — capture every lead, prove every dollar.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <Reveal>
            <article className="group h-full rounded-2xl border-2 border-brand bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand">
                <ChartIcon />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Vendor ROI Buddy
              </h3>
              <p className="mt-3 text-slate-600">
                Match leads to sales by VIN, stock number, phone, and email.
                Know exactly which vendors drive revenue and which ones don&apos;t.
              </p>
              <a
                href="https://roi.autoadvisoragent.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center font-semibold text-brand transition group-hover:translate-x-0.5"
              >
                Go to ROI Buddy <span aria-hidden="true" className="ml-1">→</span>
              </a>
            </article>
          </Reveal>

          <Reveal delayMs={120}>
            <article className="group h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-brand hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand">
                <RobotIcon />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Auto Advisor Agent
              </h3>
              <p className="mt-3 text-slate-600">
                AI that helps customers find their perfect vehicle.
                Automatically engage leads, answer questions, and guide buyers
                from first click to final sale.
              </p>
              <a
                href="https://ai.autoadvisoragent.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center font-semibold text-brand transition group-hover:translate-x-0.5"
              >
                Launch AI Agent <span aria-hidden="true" className="ml-1">→</span>
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
