function Navbar({tab, setTab}) {

    return (
        <header className="w-full border-b border-white/10 bg-black/20 backdrop-blur-lg">
            <div className="max-w-[1180px] mx-auto px-6 py-4 flex items-center justify-between">
                <span className="text-xl font-bold tracking-tight text-white">
                    Movie<span className="text-brand-500">Find</span>
                </span>

                <nav className="flex items-center gap-8">
                    <button 
                    className={`text-sm font-semibold transition-colors cursor-pointer ${
                    tab === "all"
                        ? "text-brand-500"
                        : "text-white/70 hover:text-white"
                        }`}
                        onClick={() => setTab("all")}
                        >
                        All Movies
                    </button>
                    <button
                        className={`text-sm font-semibold transition-colors cursor-pointer ${
                    tab === "favorites"
                        ? "text-brand-500"
                        : "text-white/70 hover:text-white"
                        }`}
                        onClick={() => setTab("all")}
                    >
                        Favorites
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Navbar