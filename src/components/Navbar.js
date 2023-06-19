import { Link, useMatch, useResolvedPath } from "react-router-dom"
import phone from '../icons/phone.svg'
import shipping from '../icons/truck.svg'
import cart from '../icons/cart.svg'
import wishlist from '../icons/wishlist.svg'
import notifications from '../icons/notifications.svg'
import profile from '../icons/profile.svg'
import SearchBar from "./SearchBar"

export default function Navbar() {
  return (
    <nav className="nav">
        <div className="justify-between flex p-8 h-24 px-16">
            <Link to="/" className="site-title">
                Dealerz.
            </Link>
            <ul className="help-links">
                <li>
                    <Link>
                        <img src={phone} className="inline-block h-5 w-5 mx-1" alt="phone-icon" />
                        Call Center
                    </Link>
                </li>
                <li>
                    <Link>
                        <img src={shipping} className="inline-block h-5 w-5 mx-1" alt="phone-icon" />
                        Shipping & Returns
                    </Link>
                </li>
            </ul>
        </div>
        <div className="justify-between flex bg-gray-100 px-16 py-2 h-24">
            <ul className="">
                <CustomLink to="/Shop">Shop</CustomLink>
                <CustomLink to="/">Promo</CustomLink>
                <CustomLink to="/">About</CustomLink>
                <CustomLink to="/">Blog</CustomLink>
            </ul>
            <SearchBar />
            <ul className="">
                <CustomLink to="/">
                    <img src={wishlist} className="inline-block h-6 w-6 mx-1" alt="wishlist-icon" />
                </CustomLink>
                <CustomLink to="/">
                    <img src={profile} className="inline-block h-6 w-6 mx-1" alt="cart-icon" />
                </CustomLink>
                <CustomLink to="/">
                <img src={notifications} className="inline-block h-6 w-6 mx-1" alt="notification-icon" />
                </CustomLink>
                <CustomLink to="/">
                <img src={cart} className="inline-block h-6 w-6 mx-1" alt="cart-icon" />
                </CustomLink>
            </ul>
        </div>
      
      
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}