import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-12 pb-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight"
          >
            Productized digital experiences that scale with your users.
          </motion.h1>

          <p className="mt-6 text-lg text-slate-600 max-w-lg">
            We ship design-first product blocks landing pages, templates, and
            dashboards so you can validate faster and iterate with confidence.
          </p>

          <div className="mt-8 flex gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[var(--accent)] text-white font-semibold shadow"
            >
              Book a demo
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
            <div className="px-3 py-2 bg-white rounded-full border shadow-sm">
              MVP • 4–6 weeks
            </div>
            <div className="px-3 py-2 bg-white rounded-full border shadow-sm">
              Design system included
            </div>
          </div>
        </div>

        {/* Right visual: mock card */}
        <div className="hidden md:block">
          <div className="rounded-3xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl">
            <div className="rounded-xl bg-white p-6">
              <div className="text-sm text-slate-500">Product snapshot</div>
              <div className="mt-4 bg-slate-100 rounded-lg p-4 grid gap-3">
                <div className="text-sm font-medium">
                  Landing + Template pack
                </div>
                <div className="text-xs text-slate-500">
                  Reusable blocks, form integration, analytics wiring.
                </div>
                <div className="mt-4 flex gap-2">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/10 flex items-center justify-center">
                    A
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-green-600/10 flex items-center justify-center">
                    B
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-pink-600/10 flex items-center justify-center">
                    C
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
