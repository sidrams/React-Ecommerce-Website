import SearchBar from "../SearchBar";

const Filters = ({ categories = [] }) => {
    return (
      <div className="pr-8">
        <SearchBar />
        {/* price filter */}
        <div className="mb-10">
            <div className="flex justify-between items-center py-6 my-2  border-b border-[#E0E0E0]">
                <p className="font-bold text-[#11142D] text-2xl">Price</p>
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0V6.469L6 11.469V18.618L12 15.618V11.469L18 6.469V0H0ZM16 2V4H2V2H16ZM10 10.531V14.382L8 15.382V10.531L2.562 6H15.438L10 10.531Z" fill="#11142D"/>
                </svg>

            </div>
            <div className="flex justify-between">
                <p>Range</p>
                <p>$5-$20</p>

            </div>
        </div>
        <div >
            <div className="flex justify-between items-center py-6 my-2  border-b border-[#E0E0E0]">
                <p className="font-bold text-[#11142D] text-2xl">Product Categories</p>
            </div>
            <ul>
                {
                    categories.map((category, index) => {
                        return (
                            <li className="flex justify-between items-center py-2">
                                <div>
                                    <p className="font-bold capitalise">{categories[index]}</p>
                                </div>
                                <div>
                                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.861816 1.13798L5.72382 5.99998L0.861816 10.862L1.80448 11.8046L7.60915 5.99998L1.80448 0.195312L0.861816 1.13798Z" fill="black"/>
                                    </svg>

                                </div>
                            </li>
                        )
                        
                    })
                }
                
                
            </ul>

        </div>
        <div>
            <div className="flex justify-between items-center py-6 my-2  border-b border-[#E0E0E0]">
                <p className="font-bold text-[#11142D] text-2xl">Featured Products</p>    
            </div>
            
            <ul>
                
                <li className="flex items-center text-[#11142D] py-4">
                    <div>
                        <img src="https://dummyimage.com/80x80" alt="product-image" className="rounded-md" />
                    </div>
                    <div className="pl-4">
                        <p className="font-bold">Tropical Playsuit</p>
                        <p className="text-[#F86338] text-sm font-medium">$100</p>
                    </div>
                </li>
                <li className="flex items-center text-[#11142D] py-4">
                    <div>
                        <img src="https://dummyimage.com/80x80" alt="product-image" className="rounded-md" />
                    </div>
                    <div className="pl-4">
                        <p className="font-bold">Tropical Playsuit</p>
                        <p className="text-[#F86338] text-sm font-medium">$100</p>
                    </div>
                </li>
                <li className="flex items-center text-[#11142D] py-4">
                    <div>
                        <img src="https://dummyimage.com/80x80" alt="product-image" className="rounded-md" />
                    </div>
                    <div className="pl-4">
                        <p className="font-bold">Tropical Playsuit</p>
                        <p className="text-[#F86338] text-sm font-medium">$100</p>
                    </div>
                </li>
                <li className="flex items-center text-[#11142D] py-4">
                    <div>
                        <img src="https://dummyimage.com/80x80" alt="product-image" className="rounded-md" />
                    </div>
                    <div className="pl-4">
                        <p className="font-bold">Tropical Playsuit</p>
                        <p className="text-[#F86338] text-sm font-medium">$100</p>
                    </div>
                </li>
                <li className="flex items-center text-[#11142D] py-4">
                    <div>
                        <img src="https://dummyimage.com/80x80" alt="product-image" className="rounded-md" />
                    </div>
                    <div className="pl-4">
                        <p className="font-bold">Tropical Playsuit</p>
                        <p className="text-[#F86338] text-sm font-medium">$100</p>
                    </div>
                </li>
                <li className="flex items-center text-[#11142D] py-4">
                    <div>
                        <img src="https://dummyimage.com/80x80" alt="product-image" className="rounded-md" />
                    </div>
                    <div className="pl-4">
                        <p className="font-bold">Tropical Playsuit</p>
                        <p className="text-[#F86338] text-sm font-medium">$100</p>
                    </div>
                </li>
                
            </ul>

        </div>
      </div>
        
    );
  }
  
  export default Filters;
  