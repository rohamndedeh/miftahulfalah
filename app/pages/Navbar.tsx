export default function Navbar() {
  return (
    <div>
      <nav className="fixed top-0 w-full z-50 sticky-nav border-b border-secondary/20 text-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center text-primary font-bold text-lg md:text-xl">
              AH
            </div>
            <div>
              <h1 className="text-sm md:text-lg font-bold leading-tight uppercase tracking-wider">Al-Hikmah</h1>
              <p className="text-[8px] md:text-[10px] text-secondary font-medium tracking-[0.2em] uppercase">Pesantren Modern</p>
            </div>
          </div>


          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="nav-link font-medium hover:text-secondary transition">Beranda</a>

            <div className="relative group dropdown">
              <button className="nav-link font-medium hover:text-secondary flex items-center">
                Profil <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="dropdown-menu absolute hidden pt-4 w-48">
                <div className="bg-white text-primary rounded-lg shadow-xl overflow-hidden py-2 border-t-4 border-secondary">
                  <a href="#about" className="block px-4 py-2 hover:bg-accent transition">Tentang Kami</a>
                  <a href="#" className="block px-4 py-2 hover:bg-accent transition">Visi & Misi</a>
                </div>
              </div>
            </div>

            <a href="#fasilitas" className="nav-link font-medium hover:text-secondary transition">Fasilitas</a>
            <a href="#kegiatan" className="nav-link font-medium hover:text-secondary transition">Kegiatan</a>


            <div className="flex items-center space-x-2 bg-primary/50 px-3 py-1 rounded-full border border-secondary/30">
              <button className="text-xs font-bold text-secondary">ID</button>
              <span className="text-secondary/30">|</span>
              <button className="text-xs hover:text-secondary">EN</button>
              <span className="text-secondary/30">|</span>
              <button className="text-xs hover:text-secondary">AR</button>
            </div>

            <a href="#pendaftaran" className="bg-secondary hover:bg-yellow-600 text-primary font-bold px-6 py-2 rounded-full transition duration-300">
              Daftar
            </a>
          </div>


          <button className="lg:hidden text-secondary p-2 focus:outline-none" id="mobile-toggle">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>


      <div id="mobile-menu" className="fixed inset-0 z-[60] lg:hidden">

        <div className="absolute inset-0 bg-primary/95"></div>

        <div className="relative h-full w-full flex flex-col p-8">
          <button className="self-end text-secondary mb-12" id="mobile-close">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          <nav className="flex flex-col space-y-6 text-center">
            <a href="#" className="text-2xl font-serif text-white hover:text-secondary transition">Beranda</a>
            <a href="#about" className="text-2xl font-serif text-white hover:text-secondary transition">Tentang Kami</a>
            <a href="#fasilitas" className="text-2xl font-serif text-white hover:text-secondary transition">Fasilitas</a>
            <a href="#kegiatan" className="text-2xl font-serif text-white hover:text-secondary transition">Kegiatan</a>
            <a href="#blog" className="text-2xl font-serif text-white hover:text-secondary transition">Berita</a>

            <div className="pt-6 border-t border-white/10 flex justify-center space-x-6">
              <button className="text-secondary font-bold">INDONESIA</button>
              <span className="text-white/20">|</span>
              <button className="text-white/60">ENGLISH</button>
            </div>

            <a href="#pendaftaran" className="bg-secondary text-primary font-bold py-4 rounded-xl text-xl shadow-lg mt-4">
              Daftar Sekarang
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}