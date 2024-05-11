import logo from "../assets/logo.png";
import NavLinks from "./NavLinks";


export default function Navbar(){
   return(
     <header className=" p-4 border-b-[1px] border-b-gray-700 backdrop-blur-lg sticky top-0 z-[20] flex-wrap flex w-full items-center justify-between">
       <div className="logo flex items-center text-white">
       <img src={logo} className="h-10 w-10 mr-2" alt="logo" />
        <p className="text-xl">VirtualR</p>
       </div>
       <NavLinks/>
     </header>
   )
}