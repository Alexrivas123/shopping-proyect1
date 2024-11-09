
import {DetailCard} from "../detailCard"
import { AppRoutes } from "../../pages/app/AppRoutes";
import { SetCart } from "../cart/index";

const Layout = () =>{
  
  
  
   return(
    <section className="w-full h-full mt-20  flex justify-center">
        <AppRoutes/>
        <DetailCard/>
        <SetCart/>
    </section> )
}
   
export {Layout};