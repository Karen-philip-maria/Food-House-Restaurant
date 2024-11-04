import BestOffers from "./bestOffers";
import Footer from "./footer";
import Introduction from "./introduction";
import Navbar from "./navbar";
import OurServices from "./ourServices";
import PopularFoods from "./popularFoods";
import SpecialOffers from "./specialOffers";
import Tesmonial from "./tesmonial";

export default function Home() {
  return (
    <main>
  <Navbar/>
  <Introduction/>
  <PopularFoods/>
  <SpecialOffers/>
  <BestOffers/>
  <OurServices/>
  <Tesmonial/>

  <Footer/>
    </main>
  );
}
