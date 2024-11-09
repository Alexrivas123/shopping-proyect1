import { useContext } from "react";
import { ShopingCardContext } from "../../context";
import { MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import { CategoriesItems } from "./categoriesItems";
import { PagesItems } from "./pagesitems";


const Navbar=()=>{
    const {
        count,
        openComponentCart,
        setSearchtitle
    }= useContext(ShopingCardContext)
    
    
    return(
        <>
         <nav className=" w-full h-20 flex  px-2  bg-slate-800 justify-between items-center fixed top-0 z-10">
        <h2 className="text-3xl font-bold ml-3" >Shoping Store</h2>
       <CategoriesItems/> 
       <div className="  flex  px-3 items-center rounded-md bg-slate-300" 
        onChange={(event)=>
        setSearchtitle(event.target.value)}>
         <MagnifyingGlassIcon className="size-6 text-black " />
         <input type="text" className=" outline-none w-96 h-10 bg-transparent text-black p-3" placeholder=" search Product" autoComplete='true' />
       </div> 
       <PagesItems/>
        <div className="flex gap-1 mr-4"> <ShoppingBagIcon onClick={openComponentCart} className="size-6 text-slate-300 cursor-pointer" />{count}</div>
       </nav> 
       </>
        
    )
}
export {Navbar};