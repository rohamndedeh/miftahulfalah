"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Aktivitas() {
  return (
    <section id="kegiatan" className="py-12 md:py-20 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-4 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h4 className="text-secondary font-bold tracking-widest uppercase text-xs mb-2">Kegiatan</h4>
          <h2 className="text-2xl md:text-3xl font-serif">Aktivitas Harian Santri</h2>
        </div>
        <div className="flex space-x-2">
          <button className="swiper-prev-kegiatan p-2 rounded-full border border-secondary text-secondary hover:bg-secondary hover:text-primary transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button className="swiper-next-kegiatan p-2 rounded-full bg-secondary text-primary">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView='auto'
        centeredSlides={false}
        navigation={{
          nextEl: '.swiper-next-kegiatan',
          prevEl: '.swiper-prev-kegiatan',
        }}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide className="w-80" >
          <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 group">
            <img src="https://images.unsplash.com/photo-1590073242678-70ee3fc28e84?auto=format&fit=crop&q=80&w=600" className="w-full h-64 object-cover" />
            <div className="p-6">
              <span className="text-secondary text-xs font-bold uppercase">04:30 AM</span>
              <h3 className="text-lg font-bold mt-2">Shalat Tahajud & Subuh Berjamaah</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-80">
          <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 group">
            <img src="https://images.unsplash.com/photo-1590073242678-70ee3fc28e84?auto=format&fit=crop&q=80&w=600" className="w-full h-64 object-cover" />
            <div className="p-6">
              <span className="text-secondary text-xs font-bold uppercase">04:30 AM</span>
              <h3 className="text-lg font-bold mt-2">Shalat Tahajud & Subuh Berjamaah</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-80">
          <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 group">
            <img src="https://images.unsplash.com/photo-1590073242678-70ee3fc28e84?auto=format&fit=crop&q=80&w=600" className="w-full h-64 object-cover" />
            <div className="p-6">
              <span className="text-secondary text-xs font-bold uppercase">04:30 AM</span>
              <h3 className="text-lg font-bold mt-2">Shalat Tahajud & Subuh Berjamaah</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-80">
          <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 group">
            <img src="https://images.unsplash.com/photo-1590073242678-70ee3fc28e84?auto=format&fit=crop&q=80&w=600" className="w-full h-64 object-cover" />
            <div className="p-6">
              <span className="text-secondary text-xs font-bold uppercase">04:30 AM</span>
              <h3 className="text-lg font-bold mt-2">Shalat Tahajud & Subuh Berjamaah</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>


    </section >
  )
}