import { Link } from "react-router-dom";
import {
    GithubLogoIcon,
    InstagramLogoIcon,
    LinkedinLogoIcon
} from "@phosphor-icons/react";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "../../assets/vite.svg";

export default function Footer() {
    return (
        <footer className="relative z-10 bg-[rgba(5,5,10,0.95)] border-t border-white/6
                        shadow-[0_-1px_0_rgba(255,255,255,0.04)]
                        text-white">

            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-lime-300/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

                    <section className="flex flex-col items-center lg:items-start">
                        <header className="flex items-center gap-3 mb-4">
                            <span className="relative flex items-center justify-center size-8">
                                <span className="absolute inset-0 rounded-full bg-lime-400/20 blur-sm" />
                                <span className="relative text-sm text-lime-300 drop-shadow-[0_0_8px_rgba(163,230,53,0.9)]">◆</span>
                            </span>
                            <div>
                                <h2 className="font-extrabold text-xl tracking-tight">
                                    AP2<strong className="text-white">-Projeto</strong>
                                </h2>
                                <p className="text-xs text-zinc-500 font-medium">Lorem ipsum</p>
                            </div>
                        </header>

                        <p className="text-sm text-zinc-500 text-center lg:text-left mb-5 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>

                        <nav aria-label="Redes sociais" className="flex gap-2">
                            {[
                                { icon: InstagramLogoIcon, href: "#" },
                                { icon: GithubLogoIcon, href: "https://github.com/Lancellot/boilerplate-vite-react" },
                                { icon: LinkedinLogoIcon, href: "#" },
                            ].map(({ icon: Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center size-9 rounded-lg
                                            bg-white/5 border border-white/8
                                            hover:bg-lime-300/10 hover:border-lime-300/30 hover:text-lime-300
                                            transition-all duration-200 hover:-translate-y-px"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </nav>
                    </section>

                    <nav className="flex flex-col items-center lg:items-start" aria-label="Links rápidos">
                        <h2 className="text-xs font-bold tracking-widest uppercase text-lime-300 mb-5">Links</h2>
                        <ul className="flex flex-col gap-2.5">
                            {["Home", "Produtos", "Categorias", "Sobre"].map((label) => (
                                <li key={label}>
                                    <Link
                                        to="/"
                                        className="text-sm text-zinc-500 hover:text-white transition-colors duration-200"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <section className="flex flex-col items-center lg:items-start">
                        <h2 className="text-xs font-bold tracking-widest uppercase text-lime-300 mb-5">Contato</h2>
                        <address className="not-italic flex flex-col gap-3">
                            {[
                                { href: "mailto:lorem@ipsum.com", icon: Mail, label: "lorem@ipsum.com" },
                                { href: "tel:0000000000", icon: Phone, label: "(00) 0000-0000" },
                                { href: null, icon: MapPin, label: "Lorem ipsum" },
                            ].map(({ href, icon: Icon, label }) => {
                                const cls = "flex items-center gap-2.5 text-sm text-zinc-500 hover:text-white transition-colors duration-200";
                                return href ? (
                                    <a key={label} href={href} className={cls}>
                                        <Icon className="w-4 h-4 text-lime-300/60 shrink-0" />
                                        {label}
                                    </a>
                                ) : (
                                    <p key={label} className={cls}>
                                        <Icon className="w-4 h-4 text-lime-300/60 shrink-0" />
                                        {label}
                                    </p>
                                );
                            })}
                        </address>
                    </section>

                    <section className="flex flex-col items-center lg:items-start">
                        <h2 className="text-xs font-bold tracking-widest uppercase text-lime-300 mb-5">Parceiros</h2>
                        <figure className="bg-white/5 border border-white/8 rounded-xl p-4
                                        hover:bg-lime-300/5 hover:border-lime-300/20
                                        transition-all duration-200 cursor-pointer">
                            <img src={Logo} alt="Parceiro Lorem" className="h-10 w-auto object-contain" />
                        </figure>
                        <p className="text-xs text-zinc-600 mt-3 text-center lg:text-left">
                            Lorem ipsum dolor sit amet
                        </p>
                    </section>

                </div>


                <div className="mt-12 pt-6 border-t border-white/6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
                        <p>&copy; {new Date().getFullYear()} Lorem ipsum dolor sit amet.</p>
                        <nav aria-label="Legal">
                            <ul className="flex gap-6">
                                <li><Link to="/privacidade" className="hover:text-white transition-colors duration-200">Privacidade</Link></li>
                                <li><Link to="/termos" className="hover:text-white transition-colors duration-200">Termos</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>
        </footer>
    );
}