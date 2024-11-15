import { useContext} from "react";
import { ShopingCardContext } from "../../context";
import { Bars3Icon } from "@heroicons/react/20/solid";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { MenuDesplegable } from "../menuDesplegable";

export const BtnMenu =( )=>{
   const {
      isMenu,
      setIsMenu
  }= useContext(ShopingCardContext)
  


   if(!isMenu){
    return <button onClick={()=>{setIsMenu(<MenuDesplegable/>)}}><Bars3Icon className="size-6 text-slate-300"/></button>    
   } else{
    return <button onClick={()=>{setIsMenu(false) }}><XMarkIcon className="size-6 text-slate-300" /></button> 
           
   }


  
  

}
 