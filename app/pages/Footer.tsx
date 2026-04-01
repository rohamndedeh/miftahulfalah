"use client"

import { useEffect } from "react"
import $ from "jquery";
import Swal from 'sweetalert2';

export default function Footer() {
  useEffect(() => {
    $(document).ready(function () {
      // Mobile Menu Logic
      $('#mobile-toggle').on('click', function () {
        $('#mobile-menu').addClass('active');
        $('body').addClass('overflow-hidden');
      });

      $('#mobile-close, #mobile-menu a').on('click', function () {
        $('#mobile-menu').removeClass('active');
        $('body').removeClass('overflow-hidden');
      });

      // SweetAlert Facility
      $('.btn-facility').on('click', function () {
        const title = $(this).data('title');
        const desc = $(this).data('desc');
        const img = $(this).data('img');

        Swal.fire({
          title: `<span class="font-serif text-primary">${title}</span>`,
          html: `
                        <div class="text-left mt-4">
                            <img src="${img}" class="w-full h-48 object-cover rounded-xl mb-4 shadow-lg border-b-4 border-[#d4af37]">
                            <p class="text-slate-600 leading-relaxed">${desc}</p>
                            <div class="grid grid-cols-2 gap-2 mt-4">
                                <img src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&q=80&w=300" class="rounded-lg h-24 w-full object-cover grayscale hover:grayscale-0 transition"/>
                                <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=300" class="rounded-lg h-24 w-full object-cover grayscale hover:grayscale-0 transition"/>
                            </div>
                        </div>
                    `,
          showConfirmButton: true,
          confirmButtonText: 'Tutup',
          confirmButtonColor: '#064e3b',
          padding: '2rem',
          background: '#fdfbf0',
        });
      });

      // Smooth Scroll
      $('a[href^="#"]').on('click', function (event) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
          event.preventDefault();
          $('html, body').stop().animate({
            scrollTop: target.offset().top - 70
          }, 600);
        }
      });
    });
  }, [])
  return (
    <div>
      <section id="pendaftaran" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary"></div>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Penerimaan Santri Baru Tahun Ajaran 2025/2026</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">Jadilah bagian dari keluarga besar Pesantren Modern Al-Hikmah. Kuota terbatas untuk setiap angkatan.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="#" className="bg-secondary text-primary font-black px-12 py-5 rounded-full text-lg shadow-2xl transform hover:-translate-y-1 transition">
              Daftar Online Sekarang
            </a>
            <a href="#" className="border-2 border-white text-white font-bold px-12 py-5 rounded-full text-lg hover:bg-white hover:text-primary transition">
              Download Brosur (PDF)
            </a>
          </div>
        </div>
      </section>
      <section className="h-[400px] w-full grayscale contrast-125">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126915.2281897096!2d106.789155!3d-6.2087634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMzEuNSJTIDEwNsKwNDcnMjEuMCJF!5e0!3m2!1sid!2sid!4v1634567891234!5m2!1sid!2sid" width="100%" height="100%" loading="lazy"></iframe>
      </section>


      <footer className="bg-primary text-slate-300 pt-20 pb-10 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-bold text-lg">AH</div>
                <h2 className="text-xl font-bold text-white tracking-wider">AL-HIKMAH</h2>
              </div>
              <p className="text-sm leading-relaxed mb-6">Mencetak kader ulama dan intelektual muslim yang berakhlak mulia, berwawasan luas, dan bermanfaat bagi nusa bangsa.</p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.063-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.355 2.618 6.778 6.98 6.978 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </a>
              </div>
            </div>


            <div>
              <h3 className="text-white font-bold mb-6">Navigasi</h3>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-secondary transition">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-secondary transition">Kurikulum</a></li>
                <li><a href="#" className="hover:text-secondary transition">Fasilitas</a></li>
                <li><a href="#" className="hover:text-secondary transition">Pendaftaran</a></li>
                <li><a href="#" className="hover:text-secondary transition">Berita</a></li>
              </ul>
            </div>


            <div>
              <h3 className="text-white font-bold mb-6">Kontak</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  Jl. Raya Pendidikan No. 123, Jakarta Selatan
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  (021) 7654-3210
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  info@alhikmah.sch.id
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">Warta Al-Hikmah</h3>
              <p className="text-xs mb-4">Dapatkan update kegiatan dan prestasi santri langsung di email Anda.</p>
              <div className="flex">
                <input type="email" placeholder="Email Anda" className="bg-white/10 border border-white/20 px-4 py-2 rounded-l-lg w-full focus:outline-none focus:border-secondary transition" />
                <button className="bg-secondary text-primary px-4 py-2 rounded-r-lg font-bold">Kirim</button>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 text-center text-xs">
            &copy; 2025 Pesantren Modern Al-Hikmah. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}