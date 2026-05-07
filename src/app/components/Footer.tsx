import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Logo />
            <p className="mt-3 text-sm text-slate-500">
              AI tools for modern dealerships.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-slate-600">
              <li>
                <a href="#products" className="hover:text-brand">
                  Products
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-brand">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-brand">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center">
          <p>&copy; 2026 AutoAdvisor Agent. All rights reserved.</p>
          <a
            href="tel:+16105457466"
            className="font-semibold text-slate-700 hover:text-brand"
          >
            (610) 545-7466
          </a>
        </div>
      </div>
    </footer>
  );
}
