import { TrashIcon } from "@heroicons/react/24/solid";

const ProductsCart = ({products, removeProduct })=>{
   
   
    if(!removeProduct) { 
        
        return(
        products.map(item => { 
        return <div className="w-60 h-24 mx-2 my-2 flex justify-between " key={item.id}>
          <img className="w-1/3 h-full rounded-md" src={item.images?.[0]} alt={item.title}/>
           <p className=" w-1/3  text-sm  font-medium ">{item.title}</p>
           <p  className=" w-auto font-bold">${item.price}</p>
           </div>
       }) )} else {

        return (
    products.map(item => { 
     return <div className="w-60 h-24 mx-2 my-2 flex justify-between " key={item.id}>
       <img className="w-1/3 h-full rounded-md" src={item.images?.[0]} alt={item.title}/>
        <p className=" w-1/3  text-sm  font-medium ">{item.title}</p>
        <p  className=" w-auto font-bold">${item.price}</p>
        <button  onClick={()=> removeProduct(item.id)}><TrashIcon className=" size-6 text-slate-300"/></button>
        </div>
    })
)
       }



    }
export {ProductsCart};