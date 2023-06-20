import { Link } from "react-router-dom";

function CarouselProductCard() {
    return (
        <div className="bg-[#E2E2EA] slide h-[450px] w-[450px] h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <Link className='lg:w-1/2 lg:w-[400px] lg:h-[450px] m-2 flex flex-col justify-between text-center p-4'>
                <div className="flex justify-start">
                    <p className="px-1 py-1/2 bg-gray-100 rounded-lg text-[#F86338]">SALE</p>
                </div>
                <div>
                    {/* <img alt="product image" className="w-1/4 m-auto" src={image} /> */}
                </div>
                <div>
                    <h5 className="font-bold text-2xl text-[#11142D] mb-1 truncate ">Tracksuit Hyped</h5>
                    {/* <Rating name="read-only" value={rating.rate} sx={{color: "#F86338", fontSize: "1.2rem"}} readOnly /> */}
                    <p className="text-[#9A9AB0] text-sm">Apple Cherry</p>
                    <div className="flex gap-2 justify-center">
                        <p className="text-[#F3692E] font-medium">$384</p>
                        <p className="text-[#9A9AB0] font-medium">$454</p>
                    </div>
                </div>
            </Link>
        </div>
    );
  }
  
  export default CarouselProductCard;
  