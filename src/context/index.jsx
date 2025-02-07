import { createContext} from "react";
import React from "react";
import PropTypes from 'prop-types'

import { totalPrice } from "../component/utilis/totalPrice"
import { date } from "../component/utilis/date"
import {useItems} from "../component/useItem/index"
import { idRandom } from "../component/utilis/IdRandom";
const ShopingCardContext= createContext()

 const ShopingCardProvider =({children}) =>{
   ShopingCardProvider.propTypes = {
    children: PropTypes.node.isRequired,
  }
  const {items}= useItems()

  /** My account**/
  const [account, setAccount]= React.useState(false)
  

/** sign Out **/
  const [signOut, setSignOut]= React.useState(false)

  /** log In  **/
  const [userInforName, setUserInforName] = React.useState('')
    const [userInforPassword, setUserInforPassword] = React.useState('')
  
 /**  search for title  **/
 const [searchTitle, setSearchtitle]= React.useState('')
 const [filterItems, setFilterItems] = React.useState(null)

 const filterItemsByTitle =(items, searchTitle)=>{
  return items?.filter(item => item.title.toLowerCase().includes(searchTitle.toLowerCase()))
  } 
 /** filtr by category */
 const [isListCategories, setIsListCategories]= React.useState(false)
 const [filterCategory,setfilterCategory ] = React.useState(null)
 const filterItemsByCategory =(items, category)=>{
  return items?.filter(item => item.category.name.includes(category))
  } 


React.useEffect(() => {
  if(searchTitle){setFilterItems(filterItemsByTitle(items, searchTitle))};
  if(filterCategory){setFilterItems(filterItemsByCategory(items, filterCategory))};
  if(filterCategory && searchTitle){
    const itemByCategory = filterItemsByCategory(items, filterCategory)
    setFilterItems(filterItemsByTitle(itemByCategory, searchTitle))};
    if(!filterCategory && !searchTitle){ setFilterItems(null) };
  } , [items, searchTitle, filterCategory])

 /**  component show detail Product  **/
 const [showDetailCard, setShowDetailCard]= React.useState(false);
 const [showProduct ,setShowProduct] = React.useState({});
 const closeDetailCard = ()=>setShowDetailCard(false); 
 const openDetailCard =()=>setShowDetailCard(true)


/**  component show Cart Product  **/
const [showComponentCart, setShowComponentCart]= React.useState(false);
const [showProductCart, setShowProductCart] = React.useState([]);
const closeComponentCart = ()=>setShowComponentCart(false); 
const openComponentCart=()=>setShowComponentCart(true)
 
/**    show Order cart       **/
const [ addOrdersProduct, setAddOrdersProduct] = React.useState([])
/**     show orders /  status orders            **/
const [ ordersProduct, setOrdersProduct] = React.useState([])

/** menu desplegable for mobil */
const [isMenu, setIsMenu] = React.useState(false) 
const builderMyOrder=()=>{
const myOrder = {  
  'id':idRandom(),
'date': date(),
'product': showProductCart,
'totalPrice':totalPrice(showProductCart) ,
'unit': showProductCart.length
}
setOrdersProduct([...ordersProduct, myOrder]   )     
}


/**  count product cart  ***/
const [count, setCount]= React.useState(0);
React.useEffect(()=>{
     for (let i = 0; i <= showProductCart.length; i++) {
        setCount(i)
     }   
 },[showProductCart])
  
 function addProductMyOrder(){
    let listProductsCart= [...showProductCart]
    setAddOrdersProduct(listProductsCart)
    setShowProductCart([])
    closeComponentCart()
    builderMyOrder()

  }



 
    return(
        <ShopingCardContext.Provider
        value={{
            count,
            showDetailCard,
            showProduct,
            showComponentCart,
            showProductCart,
            addOrdersProduct,
            ordersProduct,
            filterItems,
            searchTitle,
            isListCategories,
            isMenu,
            account, 
            signOut, 
            userInforName, 
            userInforPassword,   
            setUserInforName,
            setUserInforPassword,
            setSignOut,
            setAccount,
             setIsMenu,
            setfilterCategory, 
            setSearchtitle,
            setOrdersProduct,
            setShowProductCart,
            setShowDetailCard,
            setCount,
            setShowProduct,
            closeDetailCard,
            openDetailCard,
            closeComponentCart,
            openComponentCart,
            addProductMyOrder,
            setIsListCategories
        }}>
            {children}
        </ShopingCardContext.Provider>
       
    )

}

 export {ShopingCardProvider, ShopingCardContext}