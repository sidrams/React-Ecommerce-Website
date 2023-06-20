import TopItems from '../components/Home/TopItems'
import { Rating } from "@mui/material";
import QuantityButton from '../components/ProductDetails/QuantityButton';
import ReviewCard from './ReviewCard';

function ProductDetail() {
    return (
      <>
      <div className='bg-gray-100'>
        <div className='bg-white bottom-30% left-0 h-[100%] w-full absolute z-0'></div>
        <section className="text-gray-600 body-font overflow-hidden z-1 relative">
          <div className="container px-5 py-24 mx-auto">
            
            <p className='font-bold text-2xl text-[#11142D] mb-14'>{"Grocery > Fruits > Japan Oranges"}</p>
            
            
            <div className=" mx-auto flex flex-wrap">
              <div className='w-1/2 h-full'>
                <div>
                  <img alt="ecommerce" className="w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/600x550" />
                </div>
                <div className='flex gap-4 mt-4'>
                  <img alt="ecommerce" className="lg:w-1/3 w-full lg:h-auto h-[170px] w-[190px] object-cover object-center rounded" src="https://dummyimage.com/190x170" />
                  <img alt="ecommerce" className="lg:w-1/3 w-full lg:h-auto object-cover object-center rounded" src="https://dummyimage.com/190x170" />
                  <img alt="ecommerce" className="lg:w-1/3 w-full lg:h-auto object-cover object-center rounded" src="https://dummyimage.com/190x170" />
                </div>
              </div>
              
              <div className="lg:w-1/2 w-full lg:pl-24  lg:mt-0 text-[#11142D]">
                <h1 className="text-gray-900 text-6xl title-font font-bold mb-8">
                  Urbano Jacket
                </h1>
                <Rating name="read-only" value={5} sx={{color: "#F86338", fontSize: "2rem"}} readOnly />
                <p className='font-bold text-6xl text-[#F86338] tracking-wide my-7'>$99</p>
                

                <h3 className='font-bold text-2xl text-[#11142D] my-4'>Product Details</h3>
                <p className="leading-relaxed">
                  Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company.
                  <br /><br/>
                  Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company.
                </p>
                
                <div className='flex justify-between items-center py-8'>
                  <p className='font-bold'>
                    Quantity
                  </p>
                  <QuantityButton />
                  <p className='text-[#F86338] font-bold'>
                    Add note
                  </p>
                </div>
                <div className='flex justify-between items-center py-2 font-bold'>
                  <p>Sub Total</p>
                  <p>$10</p>
                </div>
                <div>
                <div className="flex gap-5 pr-24">
                    <button className="inline-flex bg-white text-orange-500 border-2 border-[#F86338] py-3 px-6 focus:outline-none hover:bg-gray-100  rounded text-base font-semibold my-10 items-center">
                        Wishlist 
                        <svg className='ml-3' width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.0005 19.5709L2.51547 11.0859C1.39015 9.96075 0.757906 8.43462 0.757813 6.84328C0.757719 5.25194 1.38979 3.72574 2.51497 2.60043C3.64015 1.47511 5.16627 0.842867 6.75761 0.842773C8.34895 0.84268 9.87515 1.47475 11.0005 2.59993C12.1263 1.47602 13.6521 0.844777 15.243 0.844777C16.8338 0.844777 18.3596 1.47602 19.4855 2.59993C20.6089 3.72604 21.2398 5.25177 21.2398 6.84243C21.2398 8.43309 20.6089 9.95881 19.4855 11.0849L11.0005 19.5709ZM6.75747 2.84293C5.96626 2.8429 5.19282 3.07752 4.53496 3.5171C3.87711 3.95669 3.3644 4.5815 3.06168 5.3125C2.75895 6.04351 2.67982 6.84787 2.83429 7.62385C2.98876 8.39983 3.36989 9.11257 3.92947 9.67193L11.0005 16.7429L18.0715 9.67193C18.4776 9.27484 18.7945 8.7958 19.0011 8.2667C19.2077 7.7376 19.2992 7.17056 19.2696 6.60333C19.24 6.0361 19.09 5.48167 18.8294 4.97695C18.5688 4.47224 18.2038 4.0288 17.7585 3.67614C17.3132 3.32349 16.798 3.06971 16.247 2.9317C15.696 2.79369 15.122 2.7746 14.563 2.87571C14.0041 2.97683 13.4731 3.19582 13.0054 3.51812C12.5377 3.84042 12.144 4.25863 11.8505 4.74493L11.0005 6.11693L10.1505 4.74493C9.79958 4.15996 9.30187 3.67688 8.7067 3.3436C8.11153 3.01032 7.43957 2.83841 6.75747 2.84493V2.84293Z" fill="#F86338"/>
                        </svg>
                    </button>
                    <button className="inline-flex text-white bg-orange-500 border-0 py-3 px-6 focus:outline-none hover:bg-orange-600 rounded text-base font-semibold my-10 items-center">
                      Add to Cart
                      <svg className='ml-3' width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 13H5.388L5.721 12H15.754L18.326 3H3.644L2.744 0H0V2H1.256L3.951 10.985L3.243 13.109C2.70161 13.2514 2.21097 13.5427 1.82676 13.9499C1.44254 14.3571 1.18013 14.8637 1.06929 15.4125C0.958456 15.9612 1.00363 16.53 1.19969 17.0544C1.39576 17.5787 1.73486 18.0376 2.17852 18.379C2.62219 18.7204 3.15266 18.9307 3.70975 18.9859C4.26684 19.041 4.82824 18.939 5.33027 18.6913C5.83229 18.4436 6.25485 18.0601 6.54998 17.5844C6.84511 17.1087 7.00102 16.5598 7 16C6.99669 15.6586 6.93444 15.3203 6.816 15H11.184C11.0656 15.3203 11.0033 15.6586 11 16C11 16.5933 11.1759 17.1734 11.5056 17.6667C11.8352 18.1601 12.3038 18.5446 12.8519 18.7716C13.4001 18.9987 14.0033 19.0581 14.5853 18.9424C15.1672 18.8266 15.7018 18.5409 16.1213 18.1213C16.5409 17.7018 16.8266 17.1672 16.9424 16.5853C17.0581 16.0033 16.9987 15.4001 16.7716 14.8519C16.5446 14.3038 16.1601 13.8352 15.6667 13.5056C15.1734 13.1759 14.5933 13 14 13ZM15.674 5L14.246 10H5.746L4.246 5H15.674ZM5 16C5 16.1978 4.94135 16.3911 4.83147 16.5556C4.72159 16.72 4.56541 16.8482 4.38268 16.9239C4.19996 16.9996 3.99889 17.0194 3.80491 16.9808C3.61093 16.9422 3.43275 16.847 3.29289 16.7071C3.15304 16.5673 3.0578 16.3891 3.01921 16.1951C2.98063 16.0011 3.00043 15.8 3.07612 15.6173C3.15181 15.4346 3.27998 15.2784 3.44443 15.1685C3.60888 15.0586 3.80222 15 4 15C4.26522 15 4.51957 15.1054 4.70711 15.2929C4.89464 15.4804 5 15.7348 5 16ZM14 17C13.8022 17 13.6089 16.9414 13.4444 16.8315C13.28 16.7216 13.1518 16.5654 13.0761 16.3827C13.0004 16.2 12.9806 15.9989 13.0192 15.8049C13.0578 15.6109 13.153 15.4327 13.2929 15.2929C13.4327 15.153 13.6109 15.0578 13.8049 15.0192C13.9989 14.9806 14.2 15.0004 14.3827 15.0761C14.5654 15.1518 14.7216 15.28 14.8315 15.4444C14.9414 15.6089 15 15.8022 15 16C15 16.2652 14.8946 16.5196 14.7071 16.7071C14.5196 16.8946 14.2652 17 14 17Z" fill="white"/>
                      </svg>
                    </button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className=" mx-auto flex flex-wrap">
              <div className="lg:w-1/2 w-full lg:pl-24  lg:mt-0 text-[#11142D]">
                <h3 className='font-bold text-4xl text-[#11142D] mb-4'>Description</h3>
                <p className="leading-relaxed text-[#9A9AB0]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  <br /><br/>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo.
                </p>
                
                <h3 className='font-bold text-4xl text-[#11142D] my-14'>Reviews (2)</h3>
                <ReviewCard />
                <ReviewCard />
              </div>

              <div className='w-1/2 h-full pl-14'>
                <div>
                  <img alt="ecommerce" className="w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/560x1000" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>
      <TopItems />
      <div className='bg-gray-100 h-24'></div>
      </>
    );
  }
  
  export default ProductDetail;
  