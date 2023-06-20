import Hero from "../components/Home/Hero";
import Collection from "../components/Home/Collection";
import Reviews from "../components/Home/Reviews";
import NewsletterCTA from "../components/Home/NewsletterCTA";

function Gallery() {
    return (
      <div>
        <Hero title="Our Gallery," title2="Your Dreams!" button="true" />
        <Collection heading="Our Gallery" />
        <Reviews />
        <NewsletterCTA />
      </div>
    );
  }
  
  export default Gallery;
  