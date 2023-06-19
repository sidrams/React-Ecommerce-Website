import Hero from '../components/Home/Hero'
import Collection from '../components/Home/Collection'
import TopItems from '../components/Home/TopItems'
import BrandStory from '../components/Home/BrandStory'
import Achievements from '../components/Home/Achievements'
import Reviews from '../components/Home/Reviews'
import Articles from '../components/Home/Articles'
import NesletterCTA from '../components/Home/NewsletterCTA'
import Footer from '../components/Footer'


function Home() {
    return (
      <div>
        {/* <h1>Home</h1> */}
        <Hero />
        <Collection />
        <TopItems />
        <BrandStory />
        <Achievements />
        <Reviews />
        <Articles />
        <NesletterCTA />
        <Footer />
      </div>
    );
  }
  
  export default Home;
  