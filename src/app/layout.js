import Preloader from "@/components/ui/preloader";
import "./global.css"
import BootstrapForBrowser from "@/components/ui/bootstrapForBrowser";
import Header from "@/components/sections/header";
import CallToAction from "@/components/sections/callToAction";
import Footer from "@/components/sections/footer";
import { Toaster } from 'react-hot-toast';
import { color } from "framer-motion";

export const metadata = {
  title: "Pierre Beaufaron - Developer & graphic designer",
  description: "Pierre Beaufaron - Developer & graphic designer portfolio for internship",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <BootstrapForBrowser />
        <Preloader />
        <Header />
        <Toaster 
          position="bottom-center"
          toastOptions={{
            style: {
              marginBottom: '40px',
              background: '#1F1F22',
              color: 'var(--main-color)',
              borderRadius: '15px',
              padding: '12px 80px',
              fontSize: '14px',
              border: '1px solid',
              borderColor: 'var(--border-color)',
              boxShadow: '5px 3px 28px -2px #000000'
            }
          }} 
          />
        {children}
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}
