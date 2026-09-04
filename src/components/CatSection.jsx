import { Sparkles } from 'lucide-react'

const CatSection = () => {
  return (
    <div>
          <section className="px-5 pb-24">

              <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-linear-to-r from-violet-700 to-cyan-600 px-8 py-16 text-center sm:px-16">

                  <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

                  <div className="relative">

                      <Sparkles className="mx-auto mb-5 h-8 w-8" />

                      <h2 className="text-3xl font-black sm:text-5xl">
                          Ready To Transform Your Space?
                      </h2>

                      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
                          Explore our latest collection and discover pieces designed to
                          make your home truly yours.
                      </p>

                      <button className="mt-8 rounded-xl bg-white px-8 py-4 font-bold text-slate-950 transition hover:scale-105">
                          Start Shopping
                      </button>

                  </div>

              </div>
          </section>
    </div>
  )
}

export default CatSection
