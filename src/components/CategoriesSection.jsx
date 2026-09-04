import { ChevronRight } from 'lucide-react'
import React from 'react'

const CategoriesSection = () => {
    const categories = [
        {
            name: "Furniture",
            image:
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
        },
        {
            name: "Lighting",
            image:
                "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800",
        },
        {
            name: "Decor",
            image:
                "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800",
        },
        {
            name: "Tables",
            image:
                "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800",
        },
    ];


  return (
    <div>
          <section id="categories" className="mx-auto max-w-7xl px-5 py-24">

              <div className="mb-10 flex items-end justify-between">

                  <div>
                      <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
                          Explore
                      </p>

                      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                          Shop By Category
                      </h2>
                  </div>

                  <button className="hidden items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white sm:flex">
                      View All
                      <ChevronRight className="h-4 w-4" />
                  </button>

              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

                  {categories.map((category) => (
                      <div
                          key={category.name}
                          className="group relative h-64 cursor-pointer overflow-hidden rounded-2xl border border-white/10"
                      >

                          <img
                              src={category.image}
                              alt={category.name}
                              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                          />

                          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                          <div className="absolute bottom-5 left-5">
                              <h3 className="text-lg font-bold">
                                  {category.name}
                              </h3>

                              <p className="mt-1 text-xs text-slate-300">
                                  Explore Collection →
                              </p>
                          </div>

                      </div>
                  ))}

              </div>
          </section>
    </div>
  )
}

export default CategoriesSection
