import Header from "./Header";
import Footer from "./Footer";
import BuyMeACoffee from "./BuyMeACoffee";
import About from "./About";
import { useState } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

type Theme = "dark" | "light" | "system";

function Layout({ children }: LayoutProps) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClose = () => setIsModalOpen(false);
  const handleOpen = () => setIsModalOpen(true);

  return (
    <div className="px-6">
      <Header onOpen={handleOpen} setTheme={setTheme} theme={theme} />
      <main className="max-w-5xl mx-auto my-0">{children}</main>
      <Footer />
      <BuyMeACoffee />
      <About onClose={handleClose} isOpen={isModalOpen} />
    </div>
  );
}

export default Layout;
