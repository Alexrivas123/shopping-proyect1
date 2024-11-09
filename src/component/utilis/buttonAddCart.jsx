
import { PlusIcon } from '@heroicons/react/20/solid'
import { CheckIcon } from '@heroicons/react/20/solid'

export const buttonAddCart =(showComponentCart, showProductCart, id)=>{

   const filterProduct = showProductCart.filter(item => item.id === id).length > 0;
   
   return (
   filterProduct? 

   <button className=" w-6 h-6 absolute top-0 right-0 m-2 z-10 rounded-full  bg-black text-xs text-center text-black"
    > <CheckIcon className="size-6 text-white" /></button>
    :  
    <button className=" w-6 h-6 absolute top-0 right-0 m-2 z-10 rounded-full  bg-white text-xs text-center text-black"
    onClick={()=> showComponentCart()}> <PlusIcon className="size-6  text-black" /></button>
   )
  

}
 