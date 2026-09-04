import { ArrowRight } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
  return (
    <div>
          <section id="about" className="mx-auto max-w-7xl px-5 py-24">

              <div className="grid items-center gap-14 lg:grid-cols-2">

                  {/* Image */}
                  <div className="relative">

                      <div className="absolute -left-5 -top-5 h-40 w-40 rounded-full bg-violet-600/20 blur-3xl" />

                      <img
                          src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200"
                          alt="About us"
                          className="relative h-125 w-full rounded-3xl object-cover"
                      />

                  </div>

                  {/* Content */}
                  <div>

                      <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
                          About LuxeStore
                      </p>

                      <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                          We Create Spaces
                          <span className="block text-slate-500">
                              You Love To Live In.
                          </span>
                      </h2>

                      <p className="mt-6 leading-8 text-slate-400">
                          At LuxeStore, we believe furniture is more than just something
                          you put inside your home. It is a reflection of your personality,
                          lifestyle and taste.
                      </p>

                      <p className="mt-4 leading-8 text-slate-400">
                          That's why we carefully select every product to bring you
                          beautiful designs, premium materials and exceptional quality.
                      </p>

                      <button className="mt-8 flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-violet-500 hover:text-white">
                          Discover Our Story
                          <ArrowRight className="h-5 w-5" />
                      </button>

                  </div>
              </div>
          </section>
    </div>
  )
}

export default AboutSection
