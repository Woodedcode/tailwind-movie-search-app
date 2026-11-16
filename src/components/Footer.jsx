function Footer() {

    return (
        <footer className="border-t border-white/10 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 max-w-[1180px] mx-auto">
                <span className="text-xl font-bold tracking-tight text-white">
                    Movie<span className="text-brand-500">Find</span>
                </span>
                <div className="flex items-center flex-wrap justify-center gap-6">
                    <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">About</a>
                    <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">GitHub</a>
                    <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Contact</a>
                </div>
                <span className="text-sm text-white/50">© 2026 MovieFind</span>
            </div>
        </footer>
    )
}

export default Footer;