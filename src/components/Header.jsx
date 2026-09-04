
import {
    Search,
    User,
    Menu,
    Sparkles,
    ShoppingCart
} from 'lucide-react'
import { useAuthContext } from '../context/AuthContext';
const Header = () => {
    const { setIsLogin } = useAuthContext()

    const logOut = () => {
        localStorage.removeItem('token');
        setIsLogin(null)
        
    };

  return (
    <>
          <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">

              <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

                  {/* Logo */}
                  <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-violet-600 to-cyan-500 shadow-lg shadow-violet-500/20">
                          <Sparkles className="h-5 w-5" />
                      </div>

                      <span className="text-xl font-bold tracking-tight">
                          LUXE<span className="text-violet-400">STORE</span>
                      </span>
                  </div>

                  {/* Desktop Menu */}
                  <nav className="hidden items-center gap-8 md:flex">
                      <a
                          href="#home"
                          className="text-sm font-medium text-white transition hover:text-violet-400"
                      >
                          Home
                      </a>

                      <a
                          href="#shop"
                          className="text-sm font-medium text-slate-400 transition hover:text-white"
                      >
                          Shop
                      </a>

                      <a
                          href="#categories"
                          className="text-sm font-medium text-slate-400 transition hover:text-white"
                      >
                          Categories
                      </a>

                      <a
                          href="#about"
                          className="text-sm font-medium text-slate-400 transition hover:text-white"
                      >
                          About
                      </a>

                      <a
                          href="#contact"
                          className="text-sm font-medium text-slate-400 transition hover:text-white"
                      >
                          Contact
                      </a>
                  </nav>

                  {/* Right */}
                  <div className="flex items-center gap-3">

                      {/* Search */}
                      <button className="hidden h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10 sm:flex">
                          <Search className="h-5 w-5" />
                      </button>

                      {/* User */}
                      <button onClick={logOut} title='logout' className="hidden cursor-pointer h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10 sm:flex">
                          <User className="h-5 w-5" />
                      </button>

                      {/* Cart */}
                      <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10">
                          <ShoppingCart className="h-5 w-5" />

                          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-[10px] font-bold">
                              3
                          </span>
                      </button>

                      {/* Mobile Menu */}
                      <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 md:hidden">
                          <Menu className="h-5 w-5" />
                      </button>

                  </div>
              </div>
          </header>
    </>
  )
}

export default Header
