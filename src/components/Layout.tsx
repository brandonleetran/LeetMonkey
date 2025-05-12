import Header from "./Header";
import Footer from "./Footer";
import BuyMeACoffee from "./BuyMeACoffee";
import About from "./About";
import { useState, useEffect } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

type Theme = "dark" | "light" | "system";

function Layout({ children }: LayoutProps) {
  const [theme, setTheme] = useState<Theme>("system");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => setIsModalOpen(false);
  const handleOpen = () => setIsModalOpen(true);

  // Similar to OnInitializedAsync in Blazor, this runs when the component is first mounted
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, [])

  // Similar to OnParametersSetAsync in Blazor, this runs when theme is changed
  useEffect(() => {
    if (theme === "system") {
      localStorage.removeItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", prefersDark);
      document.documentElement.classList.toggle("light", !prefersDark);
    }
    else {
      localStorage.setItem("theme", theme);
      document.documentElement.classList.toggle("dark", theme === "dark");
      document.documentElement.classList.toggle("light", theme === "light");
    }
  }, [theme]);

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
