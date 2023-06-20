import { useEffect } from "react";
import { Link } from "react-router-dom";
import CarouselProductCard from "./carousel/CarouselProductCard";

function Carousel() {
    useEffect(() => {
        const slidesContainer = document.querySelector(".slides-container");
        
        const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
        const prevButton = document.querySelector(".prev");
        const nextButton = document.querySelector(".next");
    
        nextButton.addEventListener("click", () => {
            slidesContainer.scrollLeft += slideWidth;
        });
    
        prevButton.addEventListener("click", () => {
            slidesContainer.scrollLeft -= slideWidth;
        });
    
        
      }, []);
    // window.addEventListener('load', (event) => {
       
    // })

    return (
        <>
        {/* <body className="min-h-screen bg-neutral-900 text-neutral-50"> */}
            <div id="app" className=" mx-auto px-4 md:px-8 py-12 transition-all duration-500 ease-linear">
                <div className="relative">
                    <div className="slides-container h-[450px] flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0">
                        <CarouselProductCard />
                        <CarouselProductCard />
                        <CarouselProductCard />
                        <CarouselProductCard />
                        <CarouselProductCard />
                        <CarouselProductCard />
                        <CarouselProductCard />
                    </div>

                    <div className="absolute top-0 -left-4 h-full items-center hidden md:flex">
                        <button className="prev px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group" aria-label="prev"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 group-active:-translate-x-2 transition-all duration-200 ease-linear">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>

                        </button>
                    </div>
                    <div className="absolute top-0 -right-4 h-full items-center hidden md:flex">
                        <button className="next px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group" aria-label="next"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        {/* </body> */}
        </>
    );
  }
  
  
  export default Carousel;
  