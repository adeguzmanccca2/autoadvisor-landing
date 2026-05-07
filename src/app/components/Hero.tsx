export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 80% 0%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 60%), radial-gradient(50% 50% at 0% 100%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            From first click to final sale
          </h1>
          <p className="mt-5 text-xl font-medium text-white/90 sm:text-2xl">
            AI that guides buyers and proves vendor ROI
          </p>
          <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
            AutoAdvisor Agent gives dealerships two powerful AI tools — one
            that helps customers find their perfect vehicle, and one that
            proves the ROI of every vendor dollar spent.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Book a Demo
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-lg border border-white/70 bg-transparent px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
