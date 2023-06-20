import { Rating } from "@mui/material";
import { Link } from "react-router-dom";


const ProductCard = ({ products = [] }) => {
    return (
        <>
              {
                products.map((product) => {
                  console.log(product, 'product')
                  const { id, title, price, image, rating } = product;
                  return (
                    <Link to={`/products/${id}`} className='lg:w-1/2 bg-white lg:w-[420px] lg:h-[375px] m-2 flex flex-col justify-between text-center p-4'>
                        <div className="flex justify-end">
                            <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.83175e-06 6.00011C4.83175e-06 2.6864 2.6863 0.000111174 6 0.000111174H21C24.3137 0.000111174 27 2.6864 27 6.00011V16C27 19.3137 24.3137 22 21 22H6C2.68629 22 4.83175e-06 19.3137 4.83175e-06 16V6.00011Z" fill="#FFDDD3"/>
                                <path d="M12.9998 17.3809L7.34316 11.7243C6.59295 10.9742 6.17145 9.95674 6.17139 8.89585C6.17132 7.83495 6.5927 6.81749 7.34282 6.06728C8.09294 5.31707 9.11036 4.89557 10.1713 4.89551C11.2321 4.89545 12.2496 5.31682 12.9998 6.06694C13.7504 5.31767 14.7676 4.89684 15.8282 4.89684C16.8887 4.89684 17.9059 5.31767 18.6565 6.06694C19.4054 6.81769 19.826 7.83484 19.826 8.89528C19.826 9.95572 19.4054 10.9729 18.6565 11.7236L12.9998 17.3809ZM10.1712 6.22894C9.64369 6.22892 9.12806 6.38534 8.68949 6.67839C8.25092 6.97145 7.90911 7.38799 7.7073 7.87533C7.50548 8.36266 7.45273 8.8989 7.55571 9.41622C7.65868 9.93355 7.91277 10.4087 8.28582 10.7816L12.9998 15.4956L17.7138 10.7816C17.9846 10.5169 18.1959 10.1975 18.3336 9.84479C18.4713 9.49206 18.5323 9.11403 18.5126 8.73588C18.4929 8.35772 18.3928 7.98811 18.2191 7.65163C18.0454 7.31515 17.802 7.01952 17.5052 6.78442C17.2083 6.54932 16.8648 6.38013 16.4975 6.28813C16.1302 6.19612 15.7475 6.18339 15.3749 6.2508C15.0022 6.31821 14.6482 6.4642 14.3364 6.67907C14.0246 6.89394 13.7622 7.17274 13.5665 7.49694L12.9998 8.41161L12.4332 7.49694C12.1992 7.10697 11.8674 6.78491 11.4706 6.56272C11.0739 6.34054 10.6259 6.22593 10.1712 6.23028V6.22894Z" fill="#F3692E"/>
                            </svg>
                        </div>
                        <div>
                            <img alt={title} className="w-1/4 m-auto" src={image} />
                        </div>
                        <div>
                            <h5 className="font-bold text-2xl text-[#11142D] mb-1 truncate ">{title}</h5>
                            <Rating name="read-only" value={rating.rate} sx={{color: "#F86338", fontSize: "1.2rem"}} readOnly />
                            <p className="text-[#9A9AB0] text-sm">watchmenow</p>
                            <p className="text-[#F3692E] font-medium">${price}</p>
                        </div>
                    </Link>
                  )
                })
              }
          </>
      )
    // return (
    //   <div className='lg:w-1/2 bg-white max-w-[424px] max-h-[375px] m-2'>
    //     <div>
    //         <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <path fill-rule="evenodd" clip-rule="evenodd" d="M4.83175e-06 6.00011C4.83175e-06 2.6864 2.6863 0.000111174 6 0.000111174H21C24.3137 0.000111174 27 2.6864 27 6.00011V16C27 19.3137 24.3137 22 21 22H6C2.68629 22 4.83175e-06 19.3137 4.83175e-06 16V6.00011Z" fill="#FFDDD3"/>
    //             <path d="M12.9998 17.3809L7.34316 11.7243C6.59295 10.9742 6.17145 9.95674 6.17139 8.89585C6.17132 7.83495 6.5927 6.81749 7.34282 6.06728C8.09294 5.31707 9.11036 4.89557 10.1713 4.89551C11.2321 4.89545 12.2496 5.31682 12.9998 6.06694C13.7504 5.31767 14.7676 4.89684 15.8282 4.89684C16.8887 4.89684 17.9059 5.31767 18.6565 6.06694C19.4054 6.81769 19.826 7.83484 19.826 8.89528C19.826 9.95572 19.4054 10.9729 18.6565 11.7236L12.9998 17.3809ZM10.1712 6.22894C9.64369 6.22892 9.12806 6.38534 8.68949 6.67839C8.25092 6.97145 7.90911 7.38799 7.7073 7.87533C7.50548 8.36266 7.45273 8.8989 7.55571 9.41622C7.65868 9.93355 7.91277 10.4087 8.28582 10.7816L12.9998 15.4956L17.7138 10.7816C17.9846 10.5169 18.1959 10.1975 18.3336 9.84479C18.4713 9.49206 18.5323 9.11403 18.5126 8.73588C18.4929 8.35772 18.3928 7.98811 18.2191 7.65163C18.0454 7.31515 17.802 7.01952 17.5052 6.78442C17.2083 6.54932 16.8648 6.38013 16.4975 6.28813C16.1302 6.19612 15.7475 6.18339 15.3749 6.2508C15.0022 6.31821 14.6482 6.4642 14.3364 6.67907C14.0246 6.89394 13.7622 7.17274 13.5665 7.49694L12.9998 8.41161L12.4332 7.49694C12.1992 7.10697 11.8674 6.78491 11.4706 6.56272C11.0739 6.34054 10.6259 6.22593 10.1712 6.23028V6.22894Z" fill="#F3692E"/>
    //         </svg>
    //     </div>
    //     <div>
    //         <h5>Urbano Jacket</h5>
    //         <Rating name="read-only" value={5} sx={{color: "#F86338"}} readOnly />
    //         <p>watchmenow</p>
    //         <p>$99</p>
    //     </div>
    //   </div>
    // );
  }
  
  export default ProductCard;
  