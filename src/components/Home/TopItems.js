import Carousel from "../Carousel";
import '../../styles.css'

function TopItems() {
    return (
        <div className="bg-white pt-10">
            <h2 className="font-bold text-5xl leading-[120%] text-gray-900 tracking-wide text-center my-11">
                Top Items
            </h2>
            <p className="text-center w-1/2 m-auto mb-11">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>

            <div>
                <Carousel />
            </div>
        </div>
    );
  }
  
  export default TopItems;
  