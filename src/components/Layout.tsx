import Header from "./Header";
import Footer from "./Footer";
import BuyMeACoffee from "./BuyMeACoffee";
import About from "./About";
import { useState, useEffect } from "react";
import { Theme, LayoutProps } from "../types.ts";

function Layout({ children }: LayoutProps) {
  const [theme, setTheme] = useState<Theme>("system");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => setIsModalOpen(false);
  const handleOpen = () => setIsModalOpen(true);

  // Similar to OnInitializedAsync in Blazor, this runs when the component is first mounted
  useEffect(() => {
    console.log("Layout component mounted. First useEffect");
    const storedTheme = localStorage.getItem("theme");
    if (
      storedTheme === "dark" ||
      storedTheme === "light" ||
      storedTheme === "system"
    ) {
      setTheme(storedTheme);
    }
  }, []);

  // Similar to OnParametersSetAsync in Blazor, this runs when theme is changed
  useEffect(() => {
    console.log("In second useEffect");
    document.documentElement.classList.remove("dark", "light");
    if (theme === "system") {
      localStorage.removeItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.classList.add(prefersDark ? "dark" : "light");
    } else {
      localStorage.setItem("theme", theme);
      document.documentElement.classList.toggle("dark", theme === "dark");
      document.documentElement.classList.toggle("light", theme === "light");
    }
  }, [theme]);

  useEffect(() => {
    if (theme !== "system") {
      console.log("in third useEffect. Skipping");
      return;
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const updateSystemTheme = () => {
      const prefersDark = media.matches;
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(prefersDark ? "dark" : "light");
    };

    console.log("adding event listener");
    media.addEventListener("change", updateSystemTheme);
    return () => {
      media.removeEventListener("change", updateSystemTheme);
      console.log("removing event listener");
    };
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
