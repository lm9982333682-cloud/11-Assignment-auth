import { ChevronRight, Heart, ShoppingCart, Star } from 'lucide-react'
import React from 'react'

const ProductsSection = () => {

    const products = [
        {
            name: "Modern Lounge Chair",
            price: "$249",
            oldPrice: "$329",
            rating: "4.9",
            image:
                "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800",
        },
        {
            name: "Luxury Wooden Table",
            price: "$399",
            oldPrice: "$499",
            rating: "4.8",
            image:
                "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800",
        },
        {
            name: "Premium Sofa",
            price: "$599",
            oldPrice: "$749",
            rating: "4.9",
            image:
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
        },
    ];
  return (
    <div>
          <section id="shop" className="bg-white/2 py-24">

              <div className="mx-auto max-w-7xl px-5">

                  <div className="mb-10 flex items-end justify-between">

                      <div>
                          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
                              Trending Now
                          </p>

                          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                              Featured Products
                          </h2>
                      </div>

                      <button className="hidden items-center gap-2 text-sm text-slate-400 hover:text-white sm:flex">
                          View All
                          <ChevronRight className="h-4 w-4" />
                      </button>

                  </div>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                      {products.map((product) => (
                          <div
                              key={product.name}
                              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/3 transition duration-300 hover:-translate-y-2 hover:border-violet-500/30"
                          >

                              {/* Image */}
                              <div className="relative h-80 overflow-hidden">

                                  <img
                                      src={product.image}
                                      alt={product.name}
                                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                  />

                                  {/* Wishlist */}
                                  <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur-md transition hover:bg-white hover:text-slate-950">
                                      <Heart className="h-5 w-5" />
                                  </button>

                                  {/* Sale */}
                                  <span className="absolute left-4 top-4 rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold">
                                      Sale
                                  </span>

                              </div>

                              {/* Product Info */}
                              <div className="p-5">

                                  <div className="mb-2 flex items-center gap-1">
                                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                                      <span className="text-sm text-slate-300">
                                          {product.rating}
                                      </span>
                                  </div>

                                  <h3 className="text-lg font-semibold">
                                      {product.name}
                                  </h3>

                                  <div className="mt-3 flex items-center gap-3">

                                      <span className="text-xl font-bold">
                                          {product.price}
                                      </span>

                                      <span className="text-sm text-slate-500 line-through">
                                          {product.oldPrice}
                                      </span>

                                  </div>

                                  <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 font-medium transition hover:bg-violet-600 hover:border-violet-600">
                                      <ShoppingCart className="h-4 w-4" />
                                      Add to Cart
                                  </button>

                              </div>

                          </div>
                      ))}

                  </div>
              </div>
          </section>
    </div>
  )
}

export default ProductsSection
