
import { useContext } from 'react';
import { ShopingCardContext } from '../../context';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { XMarkIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';



  const ProductMyOrders =()=> {
    const {
      ordersProduct,
      setOrdersProduct
    }= useContext(ShopingCardContext)

    function removeProduct(id){
      const filterProducts = ordersProduct.filter(item => item.id != id)
      setOrdersProduct(filterProducts)    
    } 

    return(
       <>
       <section  >
             { ordersProduct?.map((item)=>
       { return <div  key={item.id} className='w-80 h-20 place-items-center  relative pl-2 flex mb-3 border rounded-md'>
          <div> 
             <p className='text-sm'>{item.date}</p>
            <p>Articles: {item.unit}</p>
          </div>
          <p className='w-auto text-lg font-bold '>${item.totalPrice} </p>
          <Link to={`/my-order/${item.id}`}>  
          <ChevronRightIcon className='size-9 text-slate-300'/>
           </Link>
         
        
      
         <button  className=' absolute right-0 top-0' onClick={()=> removeProduct(item.id)}><XMarkIcon className=" size-5  text-slate-300"/></button>
            </div>})}
           
           </section>
        </>
    )
}

export {ProductMyOrders};