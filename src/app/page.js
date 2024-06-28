import Image from "next/image";
import Header from "./components/Header";
import Login from "./pages/auth/Login";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Header />
      <Login />
    </main>
  );
}
