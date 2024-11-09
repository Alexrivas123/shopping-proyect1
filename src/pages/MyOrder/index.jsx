import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { MyOrdenCart } from "../../component/myOrdenCart";
import { Link } from "react-router-dom";


const MyOrder =()=> {
 
    return (
    <>
    <section className=" flex flex-col">
      <div className="flex items-center gap-6 place-self-center" >
        <Link to='/my-orders'>
        <ChevronLeftIcon className="size-6  text-slate-300" />
        </Link>
        <h2 className="font-bold text-center my-8 text-lg md:text-1xl "> My Order </h2>
      </div>
   
      <MyOrdenCart/>
    </section>
    
    </>
     
    )
  }
  
  export {MyOrder};