import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

function Carousel() {
  const slides = [
    {
        url: "https://dummyimage.com/320x320",
        heading: 'Good Seller!',
        review: 'I am very happy with the services provided, it is very helpful, starting from the insight that the company gave from the start that I did not understand what it was so I got knowledge and made my website look better',
        author: 'Anna Saraspova',
        tagline: 'Your Beloved Buyer'
    },
    {
        url: "https://dummyimage.com/320x320",
        heading: 'Best Seller!',
        review: 'I am very happy with the services provided, it is very helpful, starting from the insight that the company gave from the start that I did not understand what it was so I got knowledge and made my website look better',
        author: 'Mike Taylor',
        tagline: 'Your Beloved Buyer'
    },
    {
        url: "https://dummyimage.com/320x320",
        heading: 'Wonderful!',
        review: 'I am very happy with the services provided, it is very helpful, starting from the insight that the company gave from the start that I did not understand what it was so I got knowledge and made my website look better',
        author: 'Sarah s',
        tagline: 'Your Beloved Buyer'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };


  return (
    <div className='max-w-[1170px] max-h-[436px] w-full m-auto px-4 relative group'>
      <div
        //style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='rounded-2xl bg-center bg-cover duration-500'
      >
        <section class="container text-gray-600 body-font bg-white py-14">
            <div class="container px-5 mx-auto flex flex-wrap">
                <div class="lg:w-1/3 w-full mb-4 lg:mb-0 rounded-lg overflow-hidden">
                    <img alt="feature" class="object-cover object-center m-auto w-[320px] h-[320px] " src={slides[currentIndex].url} />
                </div>
                <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-2/3 lg:pl-16 lg:pr-14 lg:text-left text-center">
                <div class="flex flex-col lg:justify-between mb-10  items-left">
                    {/* <div class="flex-grow"> */}
                        <h2 class="text-[#F86338] text-5xl title-font font-bold mb-3">{slides[currentIndex].heading}</h2>
                        <p class="leading-relaxed text-base text-[#9A9AB0] my-8 lg:mr-28">
                            {slides[currentIndex].review}
                        </p>
                        <p className='font-bold text-[#11142D] text-2xl mb-2'>
                            {slides[currentIndex].author}
                        </p>
                        <p className='text-[#515151]'>
                            {slides[currentIndex].tagline}
                        </p>
                    {/* </div> */}
                </div>
               
                
                </div>
            </div>
            </section>
      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {/* {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default Carousel;


// import { useState, useRef, useEffect } from 'react';

// // Data
// import data from './data.json';

// const Carousel = () => {
//   const maxScrollWidth = useRef(0);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const carousel = useRef(null);

//   const movePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prevState) => prevState - 1);
//     }
//   };

//   const moveNext = () => {
//     if (
//       carousel.current !== null &&
//       carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
//     ) {
//       setCurrentIndex((prevState) => prevState + 1);
//     }
//   };

//   const isDisabled = (direction) => {
//     if (direction === 'prev') {
//       return currentIndex <= 0;
//     }

//     if (direction === 'next' && carousel.current !== null) {
//       return (
//         carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
//       );
//     }

//     return false;
//   };

//   useEffect(() => {
//     if (carousel !== null && carousel.current !== null) {
//       carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
//     }
//   }, [currentIndex]);

//   useEffect(() => {
//     maxScrollWidth.current = carousel.current
//       ? carousel.current.scrollWidth - carousel.current.offsetWidth
//       : 0;
//   }, []);

//   return (
//     <div className="carousel my-12 mx-auto">
//       <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700">
//         Our epic carousel
//       </h2>
//       <div className="relative overflow-hidden">
//         <div className="flex justify-between absolute top left w-full h-full">
//           <button
//             onClick={movePrev}
//             className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
//             disabled={isDisabled('prev')}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-12 w-20 -ml-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="#000000"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//             <span className="sr-only">Prev</span>
//           </button>
//           <button
//             onClick={moveNext}
//             className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
//             disabled={isDisabled('next')}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-12 w-20 -ml-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//             <span className="sr-only">Next</span>
//           </button>
//         </div>
//         <div
//           ref={carousel}
//           className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
//         >
//           {data.resources.map((resource, index) => {
//             return (
//               <div
//                 key={index}
//                 className="carousel-item text-center relative w-full h-full snap-start"
//               >
//                 <section class="text-gray-600 body-font bg-gray-700">
//                 <div class="container px-5 py-24 mx-auto flex flex-wrap">
//                     <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
//                     {/* <img alt="feature" class="object-cover object-center h-full w-full" src="https://dummyimage.com/460x500"> */}
//                     </div>
//                     <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
//                     <div class="flex flex-col mb-10 lg:items-start items-center">
//                         <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
//                         <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
//                             <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
//                         </svg>
//                         </div>
//                         <div class="flex-grow">
//                         <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
//                         <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
//                         <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
//                             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
//                             <path d="M5 12h14M12 5l7 7-7 7"></path>
//                             </svg>
//                         </a>
//                         </div>
//                     </div>
                    
                    
//                     </div>
//                 </div>
//                 </section>
//                 {/* <a
//                   href={resource.link}
//                   className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
//                   style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
//                 >
//                   <img
//                     src={resource.imageUrl || ''}
//                     alt={resource.title}
//                     className="w-full aspect-square hidden"
//                   />
//                 </a>
//                 <a
//                   href={resource.link}
//                   className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
//                 >
//                   <h3 className="text-white py-6 px-3 mx-auto text-xl">
//                     {resource.title}
//                   </h3>
//                 </a> */}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
