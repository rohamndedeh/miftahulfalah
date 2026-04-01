import About from "./pages/About";
import Aktivitas from "./pages/Aktivitas";
import Blogs from "./pages/Blogs";
import Fasilitas from "./pages/Fasilitas";
import Hero from "./pages/Hero";


export default function Home() {
  return (
    <div>

      <Hero />
      <About />
      <Fasilitas />
      <Aktivitas />
      <Blogs />
    </div>
  );
}
