import TopItems from './../components/Home/TopItems'
import NewsletterCTA from './../components/Home/NewsletterCTA'
// import QuantityButton from '../components/ProductDetails/QuantityButton';
import { TextField } from '@mui/material';
import CartProductCard from '../components/Cart/CartProductCard';
import { Link } from 'react-router-dom';

function Cart() {
    return (
      <div className='bg-gray-100'>
        <div className='container pt-8'>
          <div className='font-bold flex text-[#9A9AB0] gap-4 py-12'>
            <p className='text-[#11142D]'>1. Shopping Cart</p>
            <p>2. Checkout</p>
            <p>3. Order Successed</p>
          </div>
          <h1 className='font-bold text-5xl text-[#11142D] mb-12'>My Cart</h1>
        </div>

        <div className='container flex'>
          <div className=' w-3/5'>
            
            <div>
              <CartProductCard />
              <CartProductCard />
              <CartProductCard />
            </div>
          </div>

          <div className='w-2/5 my-6 mx-4 px-6'>
            <div className='bg-white my-12 rounded py-6 px-10 flex flex-col items-left'>
              <h5 className='my-5 text-left w-full font-bold text-2xl'>Have a Coupon?</h5>
              <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                label="Search what you need"
                className="bg-white" 
                sx={{
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: "#F86338",
                    borderWidth: "2px",
                  },
                }}
              />
                <div className="flex gap-5 ">
                    <button className="inline-flex text-white bg-orange-500 border-0 py-3 px-6 focus:outline-none hover:bg-orange-600 rounded text-base font-semibold my-5 items-center">
                      Apply
                    </button>
                </div>
            </div>

            <div>
              <h5 className='font-bold text-2xl mb-6 w-full'>Cart Totals</h5>
              <div className='flex my-5'>
                <p className='font-bold w-1/3'>Subtotals</p>
                <p>$150</p>
              </div>
              <div className='flex my-5'>
                <p className='font-bold w-1/3'>Shipping</p>
                <p>Free Shipping</p>
              </div>
              <div className='flex my-5'>
                <p className='w-1/3'></p>
                <div className='flex justify-between w-2/3'>
                  <div><p>Shipping to Sydney</p></div>
                  <div><Link className='font-bold text-[#F86338]'>Change</Link></div>
                </div>
              </div>
              <div className='flex my-5'>
                <p className='font-bold w-1/3'>Total</p>
                <p>$350</p>
              </div>
            </div>

              <button className="w-full text-white bg-orange-500 py-3 px-6 focus:outline-none hover:bg-orange-600 rounded text-base font-semibold my-7 items-center">
                Checkout
              </button>
          </div>
        </div>
        <TopItems />
        <NewsletterCTA />
      </div>
    );
  }
  
  export default Cart;
  