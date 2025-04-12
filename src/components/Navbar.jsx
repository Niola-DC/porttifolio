// src/components/Navbar.jsx

import { Link } from "react-router-dom";
import Custom from "./Custom";
const navLinks = [
    {links: '/', nvName: 'Home'},
    {links: '/flor', nvName: 'Flor'},
    {links: '/services', nvName: 'Services'},
]

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="space-x-6">
            <ul>
                {navLinks.map((nav, index) =>{
                    <Link key={index} to={nav.links}><li>{nav.nvName}</li></Link>
                })}
            <Link to='/'><li>Home</li></Link>
            <Link to='/flor'><li>Flor</li></Link>
            </ul>
            <Custom buttonName="Click me" />
            <Custom buttonName="DO NOT CLICK" />

        </div>
      </div>
    </nav>
  );
};

export default Navbar;















{/* <NavLink
to="/contact"
className={({ isActive }) =>
  isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
}
>
Contact
</NavLink> */}
