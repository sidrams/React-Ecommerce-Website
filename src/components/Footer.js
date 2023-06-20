import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div className="bg-white">
            <div className="container py-24 flex">
                <div className="lg:w-1/3">
                    <img alt="feature" class="object-cover object-center h-full w-full" src="https://dummyimage.com/360x360" />
                </div>
                <div className="lg:w-1/3 flex flex-col justify-between px-12">
                    <div>
                        <Link to="/" className="font-bold text-[64px] text-[#F86338]">
                            Dealerz.
                        </Link>
                        <ul className="help-links">
                            <li className="my-4">
                                <Link className="font-bold">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li className="my-4">
                                <Link className="font-bold">
                                    Terms and Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-bold">@2020 TanahAir Studio. All rights reserved.</p>
                    </div>
                </div>
                <div className="flex justify-end lg:w-1/3 gap-4">
                    <Link className="bg-[#F86338] w-10 h-10 flex items-center justify-center rounded-3xl">
                        <FontAwesomeIcon icon={faYoutube} style={{color: "#ffffff", width: "25px",height: "25px", }} />
                    </Link>
                    <Link className="bg-[#F86338] w-10 h-10 flex items-center justify-center rounded-3xl">
                        <FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff", width: "25px",height: "25px", }} />
                    </Link>
                    <Link className="bg-[#F86338] w-10 h-10 flex items-center justify-center rounded-3xl">
                        <FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff", width: "25px",height: "25px", }} />
                    </Link>
                    <Link className="bg-[#F86338] w-10 h-10 flex items-center justify-center rounded-3xl">
                        <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff", width: "25px",height: "25px", }} />
                    </Link>
                </div>
                
                
            </div>
        </div>
        
    );
  }
  
  export default Footer;
  