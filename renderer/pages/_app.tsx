import "@styles/globals.css";
import Footer from "@components/Footer";

export default function HomePage({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Component {...pageProps} />;
      <Footer />
    </div>
  );
}
