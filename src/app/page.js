import Header from "./components/Header";
import Login from "./pages/auth/Login";
import Hero from "./pages/home/Hero";
import Testimonial from "./pages/home/Testimonial";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Header />
      <Login />
      <Hero />
      <Testimonial />
    </main>
  );
}
