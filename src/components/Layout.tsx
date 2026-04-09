import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }: { children: React.ReactNode }) {


  return (
    <div className="flex min-h-screen flex-col">
      <Header />
     {/* 2. West l-JSX, kat-7ti ghir l-tag dyal l-component */}
      <NativeAd />
      
      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
