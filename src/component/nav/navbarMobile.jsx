import { useContext} from "react";
import { ShopingCardContext } from "../../context";
import {  MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import { BtnMenu } from "../utilis/btnMenu";

const NavbarMobile=()=>{
    const {
        count,
        openComponentCart,
        isMenu,
        setSearchtitle,
    }= useContext(ShopingCardContext)   
       
    return(
        <>
         <nav className=" w-full  h-auto flex  flex-col px-2  bg-slate-800 justify-between items-center ">
        <section className=" w-full flex items-center justify-between space-x-1">
        <h2 className=" max-sm:w-20 font-bold text-base   md:text-3xl  md:ml-3  " >Shopping Store</h2>
        <div className=" w-auto h-8 px-1 flex justify-center items-center rounded-md   bg-slate-300" 
        onChange={(event)=>setSearchtitle(event.target.value)}>
         <MagnifyingGlassIcon className="size-4 text-black " />
         <input type="text" className=" outline-none w-32 h-8 bg-transparent text-black p-3" placeholder=" search Product" autoComplete='true' />
       </div> 
         <BtnMenu/>
          <div className="relative md:mr-4"> 
            <ShoppingBagIcon onClick={openComponentCart} className="size-7 text-slate-300 cursor-pointer" />
            <span className=" w-4 text-sm text-center bg-black absolute bottom-4 left-4  rounded-lg">{count}</span>
            </div>
       </section>
        {isMenu} 
       </nav> 
       
       </>
        
    )
}
export {NavbarMobile};