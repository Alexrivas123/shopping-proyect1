
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ShopingCardContext } from '../../context';
import { ProductsCart } from '../cart/ProductCart';
import { totalPrice } from '../utilis/totalPrice';

const MyOrdenCart =()=> {
    const {
        ordersProduct
    }= useContext(ShopingCardContext)
    let{id}= useParams()

      const produtosById=() =>{
         const filterProductsbyId = ordersProduct.filter(item => item.id == id)
         return filterProductsbyId[0]?.product
      }
  const productlast = id ? produtosById() : ordersProduct.slice(-1)[0].product

    return(
       <>
       <section >
           <div className=' w-full h-full  '>
            <ProductsCart
              products={ productlast}/>
            </div>
           <div  className='flex justify-around mb-3 font-bold text-lg'>
             <span >Total Price:</span>
             $  {totalPrice(productlast)}
           </div> 
           <Link to='/'>
           <button className='w-60 bg-transparent mr-7 border text-white rounded-lg'>Cancel</button>
           </Link>
           <Link to='/my-orders'>
           <button className='w-60 bg-slate-300 text-black rounded-lg'>Payment</button>
           </Link>
          
           </section>
        </>
    )
}

export {MyOrdenCart};