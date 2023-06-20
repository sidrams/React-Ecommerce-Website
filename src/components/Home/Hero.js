import heroImage from '../heroImage.svg'

const Hero = ({title, title2, subtitle, subtitle2, button}) => {
    return (
        <>
        <div className='bg-white'>
            <section
                className="container hero text-gray-600 body-font flex pb-10" 
                style={{ 
                    backgroundImage: `url(${heroImage})`,
                    backgroundRepeat: 'no-repeat',
                    width:'100%'
                }}
            >
                <div className="container mx-auto flex  py-24 md:flex-row flex-col items-center ">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-40 md:pl-32 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-6xl text-6xl mb-4 font-medium text-gray-900 leading-[120%] sm:leading-[120%] tracking-[.03rem] sm:tracking-[.03rem]">
                            {title ? title : "Your Premium"}
                            <br className="hidden lg:inline-block"/> {title2? title2 : "Sound, Unplugged!"}
                        </h1>
                        <p className="mb-8 leading-relaxed mt-6">{subtitle? subtitle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit," }
                        <br /> {subtitle2 ? subtitle2 : "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} </p>
                        {
                            button == "true" ?
                            <div className="flex justify-center">
                                <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-base font-semibold mt-2">Find out more</button>
                            </div>
                            : ""
                        }
                        
                    </div>
                </div>
        </section>
        </div>
        
      </>
    );
  }
  
  export default Hero;
  