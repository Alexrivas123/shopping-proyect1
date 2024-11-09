import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopingCardContext } from '../../context';
import { ProductsCart } from './ProductCart';
import { totalPrice } from '../utilis/totalPrice';

const SetCart =()=> {
    const {
        closeComponentCart,
        showComponentCart,
        showProductCart,
        setShowProductCart,
        addProductMyOrder
    }= useContext(ShopingCardContext)

    function removeProduct(id){
        const filterProducts = showProductCart.filter(item => item.id != id)
        setShowProductCart(filterProducts)    
      } 
   
   
    return(
        <aside
        className={`w-80 h-auto max-h-screen fixed  p-2 top-2 right-6 z-20  flex-col bg-slate-900 bg-opacity-90 border  rounded-lg border-black  ${showComponentCart? 'flex' : 'hidden' }`}>
             <span>My Orden</span>
            <button onClick={ closeComponentCart}
           className=" absolute right-3 top-1"><XMarkIcon className="size-6" /></button>
           <div className=' w-full h-full overflow-y-scroll'>
            <ProductsCart
              products={showProductCart}
              removeProduct={removeProduct}
            />
            </div>
           <div >
             <span className='mx-9'>Total Price:</span>
             $  {totalPrice(showProductCart)}
           </div>
           <Link to='/my-order/product-cart'>
           <button  onClick={addProductMyOrder} className='w-72 bg-slate-300 text-black rounded-lg'>Ckeckout</button>
           </Link>
           
        </aside>
    )
}

export {SetCart};