import { useContext} from "react";
import { NavLink } from "react-router-dom";
import { ShopingCardContext } from "../../context";
import { ChevronDownIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import { CategoriesItems } from "../itemsCategories/categoriesItems";






const NavbarDesktop=()=>{
    const {
        count,
        openComponentCart,
        isListCategories,
        setIsListCategories,
        setSearchtitle,
        signOut,
        setSignOut,
    }= useContext(ShopingCardContext)
   
     const signOutInLocalStorage = localStorage.getItem('sign-out')
     const parsedSignOut = JSON.parse(signOutInLocalStorage)
     const isUserSignOut = signOut || parsedSignOut

       const handleSignOut=()=>{
        const stringifiedSignOut = JSON.stringify(true)
        localStorage.setItem('sign-out',stringifiedSignOut)
        setSignOut(true)
       }

          const renderView =()=>{ 
            if(isUserSignOut) {
                 return( <ul className="space-x-4 flex place-content-center gap-1">
            
             <li onClick={()=>handleSignOut()}> <NavLink to='/sign-In'>Sign out</NavLink></li>
           
          </ul>)
          
            } else{ 
                return(  <ul className="space-x-4 flex place-content-center gap-1">
             <li> <NavLink to='/'>Alexrivas24@gmail.com</NavLink></li>
             <li> <NavLink to='/my-orders'>My Orders</NavLink></li>
             <li onClick={()=>handleSignOut()}> <NavLink to='/sign-In'>Sign In</NavLink></li>
             <li> <NavLink to='/my-accuont'>account</NavLink></li>
          </ul>)
              
            }
          }
         
    return(
        <>
         <nav className=" w-full h-20  flex px-4 bg-slate-800 justify-between items-center fixed top-0 z-20">
        
        <h2 className=" w-20 font-bold  text-3xl  mx-3  " >Shopping Store</h2>
        <section className=" w-3/4 mx-4 flex justify-between items-center">
         <div className=" w-1/2 h-auto mr-4 flex rounded-md ">
        <div className="w-auto h-10  px-1 flex gap-2 justify-center items-center border border-slate-300 rounded-tl-md rounded-bl-md bg-slate-900" 
        onClick={()=>{ !isListCategories ? setIsListCategories( <CategoriesItems/>) : setIsListCategories()}}>
        <span>Categories</span>
         <ChevronDownIcon   className="size-5 text-slate-400" />
        </div>
       <div className=" w-3/4 flex  px-3 items-center rounded-tr-md rounded-br-md  bg-slate-300" 
        onChange={(event)=>setSearchtitle(event.target.value)}>
         <MagnifyingGlassIcon className="size-6 text-black " />
         <input type="text" className=" outline-none w-auto h-10 bg-transparent text-black p-3" placeholder=" search Product" autoComplete='true' />
       </div> 
       </div>
     {renderView()}
   </section>
        
          <div className=" relative"> 
            <ShoppingBagIcon onClick={openComponentCart} className="size-7 text-slate-300 cursor-pointer" />
            <span className=" w-4 text-sm text-center bg-black absolute bottom-4 left-4  rounded-lg">{count}</span>
            </div>
      
       </nav> 
       {isListCategories}
       </>
        
    )
}
export {NavbarDesktop};