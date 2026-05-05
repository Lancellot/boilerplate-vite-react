import CardFeature from "../../components/featureSection/cardFeature/CardFeatures";

const cards = [
    {
        emoji: '⚡',
        tag: 'Lorem',
        title: 'Lorem Ipsum',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis.',
    },
    {
        emoji: '🧩',
        tag: 'Ipsum',
        title: 'Dolor Sit Amet',
        desc: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        emoji: '🎨',
        tag: 'Dolor',
        title: 'Consectetur Adipiscing',
        desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
    },
    {
        emoji: '🚀',
        tag: 'Amet',
        title: 'Sed Do Eiusmod',
        desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
];

export default function Home() {
    return (
        <>
            <section className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-20 max-w-3xl mx-auto">

                <header>

                    <span className="inline-flex items-center gap-1 text-xs font-bold tracking-widest uppercase text-lime-300 border border-lime-300/30 rounded-full px-4 py-1 mb-8">
                        Lorem + Ipsum
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
                        Lorem ipsum<br />
                        <em className="not-italic text-lime-300">dolor sit</em>
                    </h1>
                    <p className="text-base text-zinc-400 max-w-xl mx-auto mb-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                    </p>
                </header>

                <div className="flex items-center gap-4 mb-12">
                    <button className="bg-lime-300 text-black font-bold px-7 py-3 rounded-lg hover:opacity-90 hover:-translate-y-0.5 transition shadow-lg">
                        Lorem ipsum →
                    </button>
                    <a
                        href="https://vitejs.dev"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-zinc-400 border border-zinc-700 px-5 py-3 rounded-lg hover:text-white hover:border-zinc-400 transition"
                    >
                        Docs do Vite ↗
                    </a>
                </div>

                <div className="flex items-center gap-3 text-sm text-zinc-400">
                    <span><strong className="text-white">1</strong> lorem</span>
                    <span className="text-zinc-600">·</span>
                    <span><strong className="text-white">1</strong> ipsum</span>
                    <span className="text-zinc-600">·</span>
                    <span><strong className="text-white">∞</strong> dolor</span>
                </div>
            </section>

            <section id="features" className="relative z-10 max-w-6xl mx-auto px-6 py-20">
                <header className="flex flex-col items-center text-center gap-3 mb-12">
                    <span className="text-xs font-bold tracking-widest uppercase text-purple-400">
                        Lorem Ipsum
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                        Lorem ipsum dolor
                    </h2>
                </header>
                <div className="grid gap-5 sm:grid-cols-2">
                    {cards.map((card) => (
                        <CardFeature key={card.title} cardFeature={card} />
                    ))}
                </div>
            </section>
        </>
    );
}