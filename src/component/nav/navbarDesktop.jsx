import { useContext} from "react";
import { NavLink } from "react-router-dom";
import { ShopingCardContext } from "../../context";
import { ChevronDownIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import { CategoriesItems } from "../itemsCategories/categoriesItems";





const NavbarDesktop=()=>{
    const {
        count,
        openComponentCart,
        isMenu,
        isListCategories,
        setIsListCategories,
        setSearchtitle,

    }= useContext(ShopingCardContext)
    const screenWidth = window.screen.width; 
    
    console.log(`Ancho de la pantalla: ${screenWidth}`); 
    
 
 console.log(isMenu)
    const listPages = [
        {to:'/', name: 'Alexrivas24@gmail.com'},
        {to:'/my-orders', name:'My Orders'},
        {to:'/sign-In', name:'Sign In'},
       ]
      

          const renderPages =  listPages.map(categories => 
        <li key={categories.name}> <NavLink to={categories.to}>{categories.name} </NavLink></li>)
  
        const renderinput = <section className="flex justify-between items-center">
         <div className=" w-auto h-auto mr-4 flex rounded-md ">
        <div className="w-32 h-10  flex gap-2 justify-center items-center border border-slate-300 rounded-tl-md rounded-bl-md bg-slate-900" 
        onClick={()=>{ !isListCategories ? setIsListCategories( <CategoriesItems/>) : setIsListCategories()}}>
        <span>categories</span>
         <ChevronDownIcon   className="size-5 text-slate-400" />
        </div>
       <div className="  flex  px-3 items-center rounded-tr-md rounded-br-md  bg-slate-300" 
        onChange={(event)=>setSearchtitle(event.target.value)}>
         <MagnifyingGlassIcon className="size-6 text-black " />
         <input type="text" className=" outline-none w-96 h-10 bg-transparent text-black p-3" placeholder=" search Product" autoComplete='true' />
       </div> 
       </div>
    <ul className="space-x-4 flex place-content-center gap-1">
     {renderPages}
    </ul>
   </section>
       
       
    return(
        <>
         <nav className=" w-full h-20  flex flex-col px-4 pt-5 bg-slate-800 justify-between items-center fixed top-0 z-10">
        <section className=" w-full flex items-center justify-between space-x-1">
        <h2 className=" max-sm:w-20 font-bold text-base   md:text-3xl  md:ml-3  " >Shopping Store</h2>
       {renderinput}
        
          <div className="relative"> 
            <ShoppingBagIcon onClick={openComponentCart} className="size-7 text-slate-300 cursor-pointer" />
            <span className=" w-4 text-sm text-center bg-black absolute bottom-4 left-4  rounded-lg">{count}</span>
            </div>
       </section>
    
       </nav> 
       
       </>
        
    )
}
export {NavbarDesktop};