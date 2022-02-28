import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function BaseLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="h-full w-full">{children}</main>
      <Footer />
    </>
  );
}
