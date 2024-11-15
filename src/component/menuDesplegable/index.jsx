
import { useContext} from "react";
import { ShopingCardContext } from "../../context";
import { CategoriesItems } from "../itemsCategories/categoriesItems"
import { NavLink } from "react-router-dom";
import { ChevronDownIcon } from '@heroicons/react/24/solid'


const MenuDesplegable=()=>{
    const {
        isListCategories,
        setIsListCategories,
    }= useContext(ShopingCardContext)
    const listPages = [
        {to:'/my-orders', name:'My Orders'},
        {to:'/sign-In', name:'Sign In'},
       ]
       const renderPages =  listPages.map(categories => 
        <li key={categories.name}> <NavLink to={categories.to}>{categories.name} </NavLink></li>)

return (
     <section className= "w-full  h-auto  flex  flex-col px-2  border-t relative bg-slate-800  ">
        <div className="w-full flex mt-5 space-x-1">
            <img className=" w-14 h-14 rounded-lg" 
            src="https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-220.jpg" 
            alt="foto prfil" />
            <span>edward.zambrano12@gmail.com</span>
        </div>
    
    <div className="w-32 h-10  flex gap-2 items-center" 
        onClick={()=>{ !isListCategories ? setIsListCategories( <CategoriesItems/>) : setIsListCategories()}}>
        <span>Categories</span>
         <ChevronDownIcon   className="size-5 text-slate-400" />
        </div> 
        <div className=" w-full h-auto">
         {isListCategories}
        </div>
    <ul className="space-y-4 place-content-center gap-1">
     {renderPages}
    </ul>
   </section>
)
}

export {MenuDesplegable}