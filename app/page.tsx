export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center scale-105 blur-sm" />
      <div className="absolute inset-0 bg-slate-950/75" />

      <section className="relative z-10 min-h-screen flex flex-col">
        <header className="w-full px-5 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <img
              src="/image.png"
              alt="SCHUNK Logo"
              className="h-12 w-auto"
            />
          </div>

        </header>

        <div className="flex-1 flex items-center justify-center px-2">
          <div className="max-w-4xl text-center">
            <p className="mb-3 text-cyan-300 font-semibold tracking-wide">
              SCHUNK Product Overview
            </p>

            <p className="mt-5 text-slate-200 text-base md:text-lg">
              Product catalog download Below.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/product1.pdf"
                className="rounded-xl bg-cyan-500 px-8 py-4 font-bold text-slate-950 hover:bg-cyan-300 transition"
              >
                 Download Product 1
              </a>
              <a
                href="/product2.pdf"
                className="rounded-xl bg-white px-8 py-4 font-bold text-slate-950 hover:bg-slate-200 transition"
              >
                 Download Product 2
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}