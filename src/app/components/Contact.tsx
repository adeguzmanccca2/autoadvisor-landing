"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-brand py-20 text-white sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to transform your dealership?
          </h2>
          <p className="mt-4 text-lg text-white/85">
            Book a demo or reach us directly.
          </p>
          <a
            href="tel:+16105457466"
            className="mt-6 inline-block text-3xl font-bold tracking-tight transition hover:text-white/90 sm:text-4xl"
          >
            (610) 545-7466
          </a>
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-12 grid gap-5 rounded-2xl bg-white p-6 text-slate-900 shadow-xl sm:p-8 md:grid-cols-2"
          noValidate
        >
          <div className="md:col-span-1">
            <label htmlFor="fullName" className="block text-sm font-medium text-slate-700">
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              autoComplete="name"
              className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
            />
          </div>

          <div className="md:col-span-1">
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
            />
          </div>

          <div className="md:col-span-1">
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
              Phone Number <span className="text-red-600">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
            />
          </div>

          <div className="md:col-span-1">
            <label htmlFor="dealership" className="block text-sm font-medium text-slate-700">
              Dealership Name <span className="text-red-600">*</span>
            </label>
            <input
              id="dealership"
              name="dealership"
              type="text"
              required
              autoComplete="organization"
              className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center rounded-lg bg-brand px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>

            <div className="mt-4 min-h-[1.5rem] text-center text-sm" aria-live="polite">
              {status === "success" && (
                <p className="font-medium text-emerald-700">
                  Thank you! We&apos;ll be in touch within 24 hours.
                </p>
              )}
              {status === "error" && (
                <p className="font-medium text-red-700">
                  Something went wrong. Please call us at (610) 545-7466
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
