import Footer from "./Footer";
import Navbar from "./Navbar";

export default function RootLayout({ children }) {
  return (
    <div className={`min-h-screen`}>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
