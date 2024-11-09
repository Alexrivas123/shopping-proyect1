import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ShopingCardContext } from '../../context';
const DetailCard =()=> {
    const {
        showDetailCard,
        showProduct,
       closeDetailCard
    }= useContext(ShopingCardContext)

    return(
        <aside
         className={`w-80 h-auto fixed  p-2 top-2 right-6 z-20  flex-col bg-slate-900 bg-opacity-90 border rounded-lg border-black ${showDetailCard? 'flex' : 'hidden' }`}>
            <span>Detail</span>
            <button onClick={closeDetailCard}
            className=" absolute right-3 top-1"><XMarkIcon className="size-6" /></button>
            <figure className='w-11/12 h-auto m-2 justify-self-center  space-y-2 text-sm'>
                <img className='w-full h-52 rounded-md ' src={showProduct.images} alt={showProduct.title}/>
                <p className=' text-xl font-semibold'>{showProduct.title}</p>
                <p>Precio: ${showProduct.price}</p>
                <p> <span>Descripción:</span> {showProduct.description}</p>
                
            </figure>
        </aside>
    )
}

export {DetailCard};