import Image from "next/image";
import Navbar from "./Component/navbar/navbar";
import Center from "./Component/center/center";
import Footer from "./Component/footer/footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3F4F6] relative overflow-x-hidden">
      <div className="mx-auto px-4 py-8">
        <Navbar />
        <Center/>
        <Footer/>
      </div>
    </main>
  );
}
