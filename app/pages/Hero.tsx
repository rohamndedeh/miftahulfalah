"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Hero() {
  return (
    <section className="relative">
      <Swiper
        modules={[Navigation, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={50}
        slidesPerView={1}
        grabCursor={true}
        navigation
        effect="cube"
        loop={true}
        cubeEffect={{ shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.94 }}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        className="cube-slider"
      >
        <SwiperSlide >
          <img src="https://scontent.fcgk30-1.fna.fbcdn.net/v/t39.30808-6/494682685_2373584576375296_1679190121562711689_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=b895b5&_nc_eui2=AeEggIu33VecQrgYoZm3zhiXIBFG2KPVrSYgEUbYo9WtJnyazu1rniV89sMtRrtKiYOiK2nU4HzUhbnp5gTQRVmF&_nc_ohc=Mwk6-kGuVCkQ7kNvwE_dYik&_nc_oc=Ado5xSgx_wBl6AnJUmvaUvL2Bo74l0w97Enx-cn7h0sHZfsqVextGiK6axIeMERITlI&_nc_zt=23&_nc_ht=scontent.fcgk30-1.fna&_nc_gid=93M7o0XlGv3Fqqkjo-9XXA&_nc_ss=7a3a8&oh=00_AfxJ4NYzIKdz8kEt6foBVB7_4f5v3QNr-c1ImpOdEaDLLA&oe=69D15437" alt="Main Building" className="absolute inset-0 w-full h-full object-cover opacity-60" />
          <div className="relative h-full flex items-center justify-center text-center px-6">
            <div className="max-w-3xl">
              <h2 className="text-secondary text-xs md:text-sm font-semibold uppercase tracking-widest mb-3">Selamat Datang di Al-Hikmah</h2>
              <h1 className="text-3xl md:text-6xl text-white font-serif mb-6 leading-tight">Membentuk Generasi Cerdas & Berakhlak</h1>
              <p className="text-slate-200 text-sm md:text-lg mb-8 line-clamp-3">Pendidikan integratif yang memadukan kurikulum nasional dan nilai luhur kepesantrenan.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#about" className="bg-secondary text-primary font-bold px-8 py-3 rounded-lg text-sm md:text-base">Pelajari Profil</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <img src="https://images.unsplash.com/photo-1577891742242-d7c802217514?auto=format&fit=crop&q=80&w=2070" alt="Students" className="absolute inset-0 w-full h-full object-cover opacity-50" />
          <div className="relative h-full flex items-center justify-center text-center px-6">
            <div className="max-w-3xl">
              <h2 className="text-secondary text-xs md:text-sm font-semibold uppercase tracking-widest mb-3">Fasilitas Modern</h2>
              <h1 className="text-3xl md:text-6xl text-white font-serif mb-6 leading-tight">Inovasi Belajar Standar Internasional</h1>
              <a href="#fasilitas" className="bg-secondary text-primary font-bold px-8 py-3 rounded-lg inline-block text-sm">Lihat Fasilitas</a>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  )
}