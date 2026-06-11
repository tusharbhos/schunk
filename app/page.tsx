export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="min-h-screen flex flex-col">
        <header className="w-full px-5 md:px-12 py-5">
  <img
    src="/logo.png"
    alt="SCHUNK Logo"
    className="h-16 md:h-20 w-auto"
  />
</header>

        <div className="flex-1 flex items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-[#003B5C]">
              SCHUNK Product Overview
            </h1>

            <p className="mt-4 text-gray-600">
              Product catalog download below
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/1.pdf"
                target="_blank"
                className="rounded-xl bg-[#00AEEF] px-8 py-4 font-bold text-white hover:opacity-90"
              >
                Toolholding and Workholding
              </a>

              <a
                href="/2.pdf"
                target="_blank"
                className="rounded-xl bg-[#003B5C] px-8 py-4 font-bold text-white hover:opacity-90"
              >
                Gripping and Automation Technology
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}