import { Sparkles, ArrowRight } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
    <div>
          <section id="home" className="relative overflow-hidden">

              {/* Glow */}
              <div className="absolute -left-50 top-20 h-125 w-125 rounded-full bg-violet-600/20 blur-[120px]" />

              <div className="absolute -right-50 bottom-0 h-125 w-125 rounded-full bg-cyan-500/10 blur-[120px]" />

              <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">

                  {/* Hero Content */}
                  <div>

                      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                          <Sparkles className="h-4 w-4" />
                          New Collection 2026
                      </div>

                      <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">

                          Make Your
                          <span className="block bg-linear-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                              Space Beautiful.
                          </span>

                      </h1>

                      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                          Discover premium furniture, elegant decor and modern
                          accessories designed to make your home feel extraordinary.
                      </p>

                      {/* Buttons */}
                      <div className="mt-8 flex flex-wrap gap-4">

                          <button className="group flex items-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-cyan-500 px-7 py-4 font-semibold shadow-xl shadow-violet-500/20 transition hover:-translate-y-1 hover:shadow-violet-500/40">
                              Shop Collection

                              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                          </button>

                          <button className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold backdrop-blur-xl transition hover:bg-white/10">
                              Explore Products
                          </button>

                      </div>

                      {/* Stats */}
                      <div className="mt-12 flex flex-wrap gap-10">

                          <div>
                              <h3 className="text-2xl font-bold">10K+</h3>
                              <p className="mt-1 text-sm text-slate-500">
                                  Happy Customers
                              </p>
                          </div>

                          <div>
                              <h3 className="text-2xl font-bold">500+</h3>
                              <p className="mt-1 text-sm text-slate-500">
                                  Premium Products
                              </p>
                          </div>

                          <div>
                              <h3 className="text-2xl font-bold">4.9/5</h3>
                              <p className="mt-1 text-sm text-slate-500">
                                  Customer Rating
                              </p>
                          </div>

                      </div>
                  </div>

                  {/* Hero Image */}
                  <div className="relative">

                      <div className="absolute -inset-5 rounded-[3rem] bg-linear-to-r from-violet-600/20 to-cyan-500/20 blur-2xl" />

                      <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 shadow-2xl">

                          <img
                              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200"
                              alt="Luxury Interior"
                              className="h-125 w-full object-cover transition duration-700 hover:scale-105"
                          />

                          {/* Floating Card */}
                          <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur-xl">

                              <div className="flex items-center justify-between">

                                  <div>
                                      <p className="text-xs text-slate-400">
                                          Featured Collection
                                      </p>

                                      <h3 className="mt-1 font-semibold">
                                          Modern Living
                                      </h3>
                                  </div>

                                  <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-950">
                                      <ArrowRight className="h-5 w-5" />
                                  </button>

                              </div>
                          </div>

                      </div>
                  </div>

              </div>
          </section>
    </div>
  )
}

export default HeroSection
