import Header from "./Header";
import Footer from "./Footer";
import BuyMeACoffee from "./BuyMeACoffee";
import About from "./About";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="px-6">
      <Header />
      <main className="max-w-5xl mx-auto my-0">{children}</main>
      <Footer />
      <BuyMeACoffee />
      <About />
    </div>
  );
}

export default Layout;
