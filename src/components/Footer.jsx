import { Sparkles } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer id="contact" className="border-t border-white/10">

                <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">

                    <div>
                        <div className="flex items-center gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-violet-600 to-cyan-500">
                                <Sparkles className="h-4 w-4" />
                            </div>

                            <span className="font-bold">
                                LUXE<span className="text-violet-400">STORE</span>
                            </span>
                        </div>

                        <p className="mt-4 text-sm leading-6 text-slate-500">
                            Premium furniture and modern home decor designed for beautiful
                            living.
                        </p>
                    </div>

                    <FooterColumn
                        title="Shop"
                        links={["Furniture", "Lighting", "Decor", "Tables"]}
                    />

                    <FooterColumn
                        title="Company"
                        links={["About Us", "Contact", "Privacy Policy", "Terms"]}
                    />

                    <FooterColumn
                        title="Support"
                        links={["FAQ", "Shipping", "Returns", "Help Center"]}
                    />

                </div>

                <div className="border-t border-white/10 py-6 text-center text-sm text-slate-600">
                    © 2026 LuxeStore. All rights reserved.
                </div>

            </footer>
        </div>
    )
};

const FooterColumn = ({ title, links })=> {
    return (
        <div>
            <h3 className="font-semibold">{title}</h3>

            <ul className="mt-4 space-y-3">
                {links.map((link) => (
                    <li
                        key={link}
                        className="cursor-pointer text-sm text-slate-500 transition hover:text-white"
                    >
                        {link}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Footer
