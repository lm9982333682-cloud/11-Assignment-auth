import { RotateCcw, ShieldCheck, Star, Truck } from 'lucide-react'


const FeatiresSection = () => {
    return (
        <div>
            <section className="border-y border-white/10 bg-white/2">

                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4">

                    <Feature
                        icon={<Truck />}
                        title="Free Shipping"
                        text="Free delivery on orders over $100"
                    />

                    <Feature
                        icon={<ShieldCheck />}
                        title="Secure Payment"
                        text="100% secure and protected checkout"
                    />

                    <Feature
                        icon={<RotateCcw />}
                        title="Easy Returns"
                        text="30-day easy return policy"
                    />

                    <Feature
                        icon={<Star />}
                        title="Premium Quality"
                        text="Quality products you can trust"
                    />

                </div>
            </section>

        </div>
    )
};

function Feature({ icon, title, text }) {
    return (
        <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                {icon}
            </div>

            <div>
                <h3 className="font-semibold">{title}</h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                    {text}
                </p>
            </div>

        </div>
    );
}

export default FeatiresSection
