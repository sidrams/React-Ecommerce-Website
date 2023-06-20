import { Rating } from "@mui/material";

function ReviewCard() {
    return (
        <div className='flex mb-12'>
            <img alt="ecommerce" className="mr-5 rounded-full w-[64px] h-[64px] object-cover object-center rounded" src="https://dummyimage.com/64x64" />
            <div className='w-4/5'>
            <div className='flex items-center gap-3 mb-3'>
                <p className='font-bold text-2xl'>Alex Iwobi</p>
                <Rating name="read-only" value={5} sx={{color: "#F86338", fontSize: "1.5rem"}} readOnly />
            </div>
            <p className='text-[#9A9AB0] mb-4'>2 March 2021 at 06.30 pm</p>
            <div className='flex gap-2 mb-4'>
                <img alt="ecommerce" className=" w-[88px] h-[88px] object-cover object-center rounded" src="https://dummyimage.com/88x88" />
                <img alt="ecommerce" className=" w-[88px] h-[88px] object-cover object-center rounded" src="https://dummyimage.com/88x88" />
                <img alt="ecommerce" className=" w-[88px] h-[88px] object-cover object-center rounded" src="https://dummyimage.com/88x88" />
                <img alt="ecommerce" className=" w-[88px] h-[88px] object-cover object-center rounded" src="https://dummyimage.com/88x88" />
            </div>
            <p className='text-sm text-[#515151]'>
                Thank you for the article that was made, it really provides insight and knowledge that I didn't know before.
            </p>
            </div>
        
      </div>
    );
  }
  
  export default ReviewCard;
  