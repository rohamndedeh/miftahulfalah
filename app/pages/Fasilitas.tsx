export default function Fasilitas() {
  return (
    <section id="fasilitas" className="py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h4 className="text-secondary font-bold tracking-widest uppercase text-xs mb-2">Fasilitas</h4>
        <h2 className="text-2xl md:text-4xl font-serif text-primary mb-12">Lingkungan Belajar Ideal</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg relative bg-primary btn-facility h-64 md:h-80"
            data-title="Masjid Jami' Al-Hikmah"
            data-desc="Pusat ibadah dengan desain arsitektur modern berkapasitas 2000 jamaah."
            data-img="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&q=80&w=1000">
            <img src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-6 text-left">
              <h3 className="text-lg font-bold text-white">Masjid Jami'</h3>
              <p className="text-xs text-secondary">Ibadah & Kajian</p>
            </div>
          </div>

          <div className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg relative bg-primary btn-facility h-64 md:h-80"
            data-title="Lab Komputer"
            data-desc="Dilengkapi PC spesifikasi tinggi untuk menunjang pembelajaran IT dan Multimedia."
            data-img="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1000">
            <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-6 text-left">
              <h3 className="text-lg font-bold text-white">Lab Komputer</h3>
              <p className="text-xs text-secondary">Riset & Teknologi</p>
            </div>
          </div>

          <div className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg relative bg-primary btn-facility h-64 md:h-80"
            data-title="Gedung Asrama"
            data-desc="Hunian nyaman dengan fasilitas lengkap dan pembinaan asatidzah 24 jam."
            data-img="https://images.unsplash.com/photo-1555854817-40e098ee7f5d?auto=format&fit=crop&q=80&w=1000">
            <img src="https://images.unsplash.com/photo-1555854817-40e098ee7f5d?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-6 text-left">
              <h3 className="text-lg font-bold text-white">Asrama Putra/i</h3>
              <p className="text-xs text-secondary">Hunian Nyaman</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}