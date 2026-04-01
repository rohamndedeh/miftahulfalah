export default function Blogs() {
  return (
    <div>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-secondary font-bold tracking-widest uppercase mb-2">Pendidik</h4>
          <h2 className="text-4xl font-serif text-primary mb-16">Dewan Asatidzah</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="group">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-secondary rounded-2xl transform rotate-3 group-hover:rotate-6 transition"></div>
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" alt="Ustadz" className="relative z-10 w-full h-72 object-cover rounded-2xl grayscale group-hover:grayscale-0 transition duration-500" />
              </div>
              <h3 className="text-xl font-bold text-primary">Ust. Dr. Salman Al-Faris</h3>
              <p className="text-secondary text-sm font-medium">Kepala Pengasuhan</p>
            </div>
            <div className="group">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-secondary rounded-2xl transform rotate-3 group-hover:rotate-6 transition"></div>
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" alt="Ustadz" className="relative z-10 w-full h-72 object-cover rounded-2xl grayscale group-hover:grayscale-0 transition duration-500" />
              </div>
              <h3 className="text-xl font-bold text-primary">Ust. Hamdan Ma'ruf</h3>
              <p className="text-secondary text-sm font-medium">Pembina Tahfidz</p>
            </div>
            <div className="group">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-secondary rounded-2xl transform rotate-3 group-hover:rotate-6 transition"></div>
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" alt="Ustadz" className="relative z-10 w-full h-72 object-cover rounded-2xl grayscale group-hover:grayscale-0 transition duration-500" />
              </div>
              <h3 className="text-xl font-bold text-primary">Ust. Ridwan Kamil</h3>
              <p className="text-secondary text-sm font-medium">Kurikulum Bahasa</p>
            </div>
            <div className="group">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-secondary rounded-2xl transform rotate-3 group-hover:rotate-6 transition"></div>
                <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=400" alt="Ustadz" className="relative z-10 w-full h-72 object-cover rounded-2xl grayscale group-hover:grayscale-0 transition duration-500" />
              </div>
              <h3 className="text-xl font-bold text-primary">Ust. Syarifuddin</h3>
              <p className="text-secondary text-sm font-medium">Kesiswaan</p>
            </div>
          </div>
        </div>
      </section>
      <section id="blog" className="py-20 bg-accent/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">

            <div className="lg:w-2/3">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-serif text-primary">Berita Terbaru</h2>
                <a href="#" className="text-secondary font-bold text-sm hover:underline">Lihat Semua</a>
              </div>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition">
                  <img src="https://images.unsplash.com/photo-1524178232363-1fb280714553?auto=format&fit=crop&q=80&w=300" className="w-full md:w-48 h-32 object-cover rounded-xl" />
                  <div>
                    <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Prestasi</span>
                    <h3 className="text-xl font-bold text-primary mt-2 mb-2 hover:text-secondary transition cursor-pointer">Santri Al-Hikmah Juarai MTQ Internasional di Turki</h3>
                    <p className="text-slate-500 text-sm line-clamp-2">Capaian luar biasa diraih oleh Ananda Ahmad Fauzan dalam ajang bergengsi Musabaqah Tilawatil Qur'an...</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition">
                  <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=300" className="w-full md:w-48 h-32 object-cover rounded-xl" />
                  <div>
                    <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Akademik</span>
                    <h3 className="text-xl font-bold text-primary mt-2 mb-2 hover:text-secondary transition cursor-pointer">Implementasi Kurikulum Merdeka di Pesantren Modern</h3>
                    <p className="text-slate-500 text-sm line-clamp-2">Sinergi antara nilai kepesantrenan dan kurikulum terbaru untuk meningkatkan kemandirian belajar santri...</p>
                  </div>
                </div>
              </div>
            </div>


            <div className="lg:w-1/3">
              <h2 className="text-3xl font-serif text-primary mb-10">Agenda Kegiatan</h2>
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border-t-4 border-secondary">
                <div className="divide-y divide-slate-100">
                  <div className="p-6 flex gap-4 hover:bg-slate-50 transition">
                    <div className="bg-primary text-white p-3 rounded-xl text-center min-w-[70px] h-fit">
                      <span className="block text-xl font-bold">12</span>
                      <span className="text-[10px] uppercase font-bold text-secondary">OKT</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Open House & Trial className</h4>
                      <p className="text-sm text-slate-500 flex items-center mt-1">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        08.00 - Selesai
                      </p>
                    </div>
                  </div>
                  <div className="p-6 flex gap-4 hover:bg-slate-50 transition">
                    <div className="bg-primary text-white p-3 rounded-xl text-center min-w-[70px] h-fit">
                      <span className="block text-xl font-bold">25</span>
                      <span className="text-[10px] uppercase font-bold text-secondary">OKT</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Wisuda Tahfidz Qur'an</h4>
                      <p className="text-sm text-slate-500 flex items-center mt-1">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        07.30 - 12.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}