import { useContext } from "react";

import { ShopingCardContext } from "../../context";
import {DetailCard} from "../detailCard"
import { AppRoutes } from "../../pages/app/AppRoutes";
import { SetCart } from "../cart/index";

const Layout = () =>{
    const {
      isListCategories
    }= useContext(ShopingCardContext)
  
  
   return(
    <section className="w-full h-full mt-20  flex justify-center">
        {isListCategories}
        <AppRoutes/>
        <DetailCard/>
        <SetCart/>
    </section> )
}
   
export {Layout};