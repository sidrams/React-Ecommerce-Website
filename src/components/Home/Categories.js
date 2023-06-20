import { Link, useMatch, useResolvedPath } from "react-router-dom"

function Categories() {
    return (
        <div>
        <ul className="flex justify-between my-14 mx-8 font-bold text-2xl text-[#9A9AB0]">
            <CustomLink to="">
                All Products
            </CustomLink>
            <CustomLink to="">
                Coats & Jackets
            </CustomLink>
            <CustomLink to="">
                Dresses
            </CustomLink>
            <CustomLink to="">
                Playsuit
            </CustomLink>
            <CustomLink to="">
                Short
            </CustomLink>
            <CustomLink to="">
                Skirt
            </CustomLink>
            <CustomLink to="">
                T-shirt
            </CustomLink>
        </ul>
    </div>
    );
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
  
export default Categories;
  