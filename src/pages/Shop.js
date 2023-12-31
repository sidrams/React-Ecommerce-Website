import Hero from "../components/Home/Hero";
import NewsletterCTA from "../components/Home/NewsletterCTA";
import ProductLists from "../components/Shop/ProductsList";

function Shop() {
    return (
      <div className="bg-gray-100">
        <Hero title="Home Shopping," title2="Your Choice!" />
        <ProductLists />
        <NewsletterCTA />
      </div>
    );
  }
  
  export default Shop;
  