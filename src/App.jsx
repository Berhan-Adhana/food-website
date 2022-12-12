import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Hero from "./components/hero/Hero";
import Steps from "./components/how-it-works/Steps";
import Loader from "./components/loader/Loader";
import Nav from "./components/nav/Nav.jsx";
import Order from "./components/order/Order";
import Popular from "./components/popular/Popular";
import Review from "./components/review/Review";
import ScrollTop from "./components/scroll-top/ScrollTop";
import Special from "./components/specials/Special";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Special />
      <Popular />
      <Steps />
      <Gallery />
      <Review />
      <Order />
      <Footer />
      <ScrollTop />
      <Loader/>
    </>
  );
}

export default App;
