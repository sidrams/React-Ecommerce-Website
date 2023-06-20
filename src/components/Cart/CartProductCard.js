import QuantityButton from "../ProductDetails/QuantityButton";

function CartProductCard() {
    return (
        <div className='flex mb-8'>
            <img alt="product" className="w-1/4 h-[200px] w-[200px] object-cover object-center rounded" src="https://dummyimage.com/200x200" />
            <div className='ml-10 mr-24 w-full'>
                <h5 className='font-bold text-2xl mb-4'>Tropical Playsuit</h5>
                <div className='flex justify-between w-3/4 mb-2 font-bold'>
                <p>Size:</p>
                <p>M</p>
                </div>
                <div className='flex items-center w-3/4 mb-2 font-bold justify-between'>
                <p>Quantity:</p>
                <QuantityButton />
                </div>
                <div className='flex justify-between items-center'>
                <p className='text-6xl text-[#F86338] font-bold'>$99</p>
                
                <div className="flex gap-5">
                    <button className="inline-flex bg-transparent text-orange-500 border-2 border-[#F86338] py-3 px-6 focus:outline-none hover:bg-gray-100  rounded text-base font-semibold my-10 items-center">
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 3H13V0H5V3H0V5H1.069L2.069 19H15.931L16.931 5H18V3ZM7 2H11V3H7V2ZM14.069 17H3.931L3.074 5H14.926L14.069 17Z" fill="#F86338"/>
                        <path d="M8 7H6V15H8V7Z" fill="#F86338"/>
                        <path d="M12 7H10V15H12V7Z" fill="#F86338"/>
                        </svg>
                    </button>
                    <button className="inline-flex bg-transparent text-orange-500 border-2 border-[#F86338] py-3 px-6 focus:outline-none hover:bg-gray-100  rounded text-base font-semibold my-10 items-center">
                        Wishlist 
                        <svg className='ml-3' width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0005 19.5709L2.51547 11.0859C1.39015 9.96075 0.757906 8.43462 0.757813 6.84328C0.757719 5.25194 1.38979 3.72574 2.51497 2.60043C3.64015 1.47511 5.16627 0.842867 6.75761 0.842773C8.34895 0.84268 9.87515 1.47475 11.0005 2.59993C12.1263 1.47602 13.6521 0.844777 15.243 0.844777C16.8338 0.844777 18.3596 1.47602 19.4855 2.59993C20.6089 3.72604 21.2398 5.25177 21.2398 6.84243C21.2398 8.43309 20.6089 9.95881 19.4855 11.0849L11.0005 19.5709ZM6.75747 2.84293C5.96626 2.8429 5.19282 3.07752 4.53496 3.5171C3.87711 3.95669 3.3644 4.5815 3.06168 5.3125C2.75895 6.04351 2.67982 6.84787 2.83429 7.62385C2.98876 8.39983 3.36989 9.11257 3.92947 9.67193L11.0005 16.7429L18.0715 9.67193C18.4776 9.27484 18.7945 8.7958 19.0011 8.2667C19.2077 7.7376 19.2992 7.17056 19.2696 6.60333C19.24 6.0361 19.09 5.48167 18.8294 4.97695C18.5688 4.47224 18.2038 4.0288 17.7585 3.67614C17.3132 3.32349 16.798 3.06971 16.247 2.9317C15.696 2.79369 15.122 2.7746 14.563 2.87571C14.0041 2.97683 13.4731 3.19582 13.0054 3.51812C12.5377 3.84042 12.144 4.25863 11.8505 4.74493L11.0005 6.11693L10.1505 4.74493C9.79958 4.15996 9.30187 3.67688 8.7067 3.3436C8.11153 3.01032 7.43957 2.83841 6.75747 2.84493V2.84293Z" fill="#F86338"/>
                        </svg>
                    </button>
                </div>
                
                </div>
            </div>
        </div>
    );
  }
  
  export default CartProductCard;
  