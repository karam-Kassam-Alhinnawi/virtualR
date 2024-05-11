import { useState } from "react";

const navItems = [
    { label: "Features", href: "#features" },
    { label: "Workflow", href: "#workflow" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
];

const NavLinks = () => {
    return(
        <>
        {navItems.map(item => <a className="text-white" href={item.href}>
        <li className="px-4 text-xl text-white list-none">{item.label}</li>
        </a>)}
        </>
    )
}

export default function Nav(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }

   return(
     <>
     <nav className="w1/2 flex justify-end">
      <div className="hidden w-full md:flex justify-between">
      <NavLinks/>
      </div>
      <button className="md:hidden text-white" onClick={toggleNavbar}>
        {isOpen ? "X" : "="}
      </button>
      
     </nav>

     <div className="buttons hidden flex-col lg:flex lg:flex-row">
       <button className="text-white border rounded border-white mr-8 px-4 py-2 transition-all duration-1000 hover:bg-gradient-to-r from-orange-500 to-red-800 hover:border-none">Sign In</button>
       <button className="text-white bg-gradient-to-r from-orange-500 to-red-800 rounded px-4 py-2">Create an account</button>
       </div>    

     {isOpen && (
        <div className="flex basis-full flex-col items-center mt-8 text-white">
            <NavLinks/>
            <div className="buttons flex flex-col mt-5">
           <button className="text-white border mb-4 rounded border-white p-2 transition-all duration-1000 hover:bg-gradient-to-r from-orange-500 to-red-800 hover:border-none">Sign In</button>
            <button className="text-white bg-gradient-to-r from-orange-500 to-red-800 rounded p-2">Create an account</button>
           </div>
          </div> 
     )}
     </>
   )
}