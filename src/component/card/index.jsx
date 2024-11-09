import { useContext } from "react";
import { ShopingCardContext } from "../../context";
import {buttonAddCart} from "../utilis/buttonAddCart"



const Card = (data)=>{
        
        const {  
            showProductCart,
            setShowProduct,
            setShowProductCart,
            openComponentCart,
            closeDetailCard,
            openDetailCard
            }= useContext(ShopingCardContext)
        
        const showComponentCart = () =>{
            setShowProductCart( [...showProductCart, data.data ]  )
            openComponentCart()
            closeDetailCard()
        }
    
   
    const mostrarProductCard = ()=>{
        setShowProduct(data.data)
        openDetailCard() 
         setTimeout(() => {
            closeDetailCard()
          },4000);
    }
    
    
    return(
        
       <article className=" w-full  max-w-52  h-56 my-2 rounded-lg " >
        <figure className="w-full h-4/5  relative">
            <span className="absolute bottom-0 left-0 w-20 h-5 text-center m-1 bg-white text-xs text-black rounded-full ">{data.data.category.name}</span>
            <img className=" w-full h-full rounded-tr-xl rounded-tl-xl " src={data.data?.images[0]} alt={data.data.title}  onClick={mostrarProductCard} />
           {buttonAddCart( showComponentCart, showProductCart, data.data.id)}
        </figure>
        <div className=" w-full h-1/4 bg-slate-800 text-xs md:text-sm flex place-items-center justify-between gap-1 rounded-br-xl pt-1 px-2 rounded-bl-xl">
            <span>{data.data.title}</span>
            <span className=" text-lg font-semibold">${data.data.price}</span>
        </div>
       </article>
    )
}
export {Card};