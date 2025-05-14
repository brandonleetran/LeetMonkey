import Header from "./Header";
import Footer from "./Footer";
import BuyMeACoffee from "./BuyMeACoffee";
import About from "./About";
import { useState, useEffect } from "react";
import { Theme, LayoutProps } from "../types.ts";

function Layout({ children }: LayoutProps) {
  const [theme, setTheme] = useState<Theme | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => setIsModalOpen(false);
  const handleOpen = () => setIsModalOpen(true);

  // Similar to OnInitializedAsync in Blazor, this runs when the component is first mounted
  useEffect(() => {
    console.log("Layout component mounted. First useEffect");
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    const fallbackTheme = storedTheme ?? "system";
    setTheme(fallbackTheme);
  
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolvedDark = fallbackTheme === "dark" || (fallbackTheme === "system" && prefersDark);
    setIsDark(resolvedDark);
  }, []);

  // Similar to OnParametersSetAsync in Blazor, this runs when theme is changed
  useEffect(() => {
    console.log("In second useEffect");
    document.documentElement.classList.remove("dark", "light");
    if (theme === "system") {
      localStorage.removeItem("theme");
      console.log("in system theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.classList.add(prefersDark ? "dark" : "light");
      setIsDark(prefersDark);
    } else if (theme !== null) {
      localStorage.setItem("theme", theme);
      document.documentElement.classList.add(isDark ? "dark" : "light");
      setIsDark(theme === "dark");
    }
  }, [theme]);

  // runs after the second useEffect in order
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
      setIsDark(prefersDark);
    };

    console.log("adding event listener");
    media.addEventListener("change", updateSystemTheme);
    return () => {
      media.removeEventListener("change", updateSystemTheme);
      console.log("removing event listener");
    };
  }, [theme]);

  return (
    <div className="px-4 md:px-6 lg:px-8">
      <Header
        onOpen={handleOpen}
        setTheme={setTheme}
        theme={theme ?? "system"}
        isDark={isDark}
      />
      <main className="max-w-5xl mx-auto my-0">{children}</main>
      <Footer />
      <BuyMeACoffee />
      <About onClose={handleClose} isOpen={isModalOpen} />
    </div>
  );
}

export default Layout;
