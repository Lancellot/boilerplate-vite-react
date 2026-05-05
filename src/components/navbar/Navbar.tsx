export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between px-12 py-4
                        bg-[rgba(5,5,10,0.80)] backdrop-blur-3xl
                        border-b border-white/6
                        shadow-[0_1px_0_rgba(255,255,255,0.04),0_8px_40px_rgba(0,0,0,0.5)]">


            <div className="flex items-center gap-2.5 text-[1.05rem] font-medium tracking-tight select-none">
                <span className="relative flex items-center justify-center size-6">
                    <span className="absolute inset-0 rounded-full bg-lime-400/20 blur-sm" />
                    <span className="relative text-[0.7rem] text-lime-300 drop-shadow-[0_0_8px_rgba(163,230,53,0.9)]">
                        ◆
                    </span>
                </span>
                <span className="text-zinc-400">
                    AP2<strong className="font-black text-white tracking-tight">-Projeto</strong>
                </span>
            </div>

            <nav className="flex items-center gap-1 text-sm text-zinc-500">
                <a
                    href="#features"
                    className="relative px-4 py-2 rounded-lg text-zinc-400
                            hover:text-white hover:bg-white/5
                            transition-all duration-200">
                    Features
                </a>

                <a
                    href="https://github.com/Lancellot/boilerplate-vite-react"
                    target="_blank"
                    rel="noreferrer"
                    className="relative px-4 py-2 rounded-lg text-zinc-400
                            hover:text-white hover:bg-white/5
                            transition-all duration-200">
                    Sobre
                </a>

                <span className="mx-2 h-4 w-px bg-zinc-700/60" />

                <button className="relative px-5 py-2 text-xs font-bold rounded-lg
                                    bg-lime-300/10 text-lime-300
                                    border border-lime-300/20
                                    hover:bg-lime-300/20 hover:border-lime-300/40 hover:text-lime-200
                                    hover:-translate-y-px
                                    active:translate-y-0 active:scale-[0.98]
                                    transition-all duration-200
                                    shadow-[0_0_20px_rgba(163,230,53,0.08)]
                                    hover:shadow-[0_0_24px_rgba(163,230,53,0.2)]">
                    Começar →
                </button>
            </nav>
        </header>
    );
}