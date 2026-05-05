import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between px-12 py-4
                        bg-[rgba(5,5,10,0.75)] backdrop-blur-3xl
                        border-b border-white/6
                        shadow-[0_1px_0_rgba(255,255,255,0.04),0_8px_40px_rgba(0,0,0,0.5)]">

            <div className="flex items-center gap-2.5 text-[1.05rem] font-medium tracking-tight select-none">
                <span className="relative flex items-center justify-center size-6">
                    <span className="absolute inset-0 rounded-full bg-purple-500/20 blur-sm" />
                    <span className="relative text-[0.7rem] text-purple-300 drop-shadow-[0_0_8px_rgba(192,132,252,0.9)]">
                        ◆
                    </span>
                </span>
                <span className="text-zinc-400">
                    AP2<strong className="font-black text-white tracking-tight">-Projeto</strong>
                </span>
            </div>

            <nav className="flex items-center gap-1 text-sm text-zinc-500">
                <Link
                    to="#features"
                    className="relative px-4 py-2 rounded-lg
                            hover:text-zinc-100 hover:bg-white/5
                            transition-all duration-200">
                    Features
                </Link>
                <Link
                    to="#sobre"
                    className="relative px-4 py-2 rounded-lg
                                hover:text-zinc-100 hover:bg-white/5
                                transition-all duration-200">
                    Sobre
                </Link>

                <span className="mx-2 h-4 w-px bg-zinc-700/60" />

                <button className="relative group px-5 py-2 text-xs font-bold rounded-lg
                                    bg-purple-500/10 text-purple-300
                                    border border-purple-500/20
                                    hover:bg-purple-500/20 hover:border-purple-400/40 hover:text-purple-200
                                    hover:-translate-y-px
                                    active:translate-y-0 active:scale-[0.98]
                                    transition-all duration-200
                                    shadow-[0_0_20px_rgba(168,85,247,0.08)]
                                    hover:shadow-[0_0_24px_rgba(168,85,247,0.2)]">
                    Começar →
                </button>
            </nav>
        </header>
    );
}