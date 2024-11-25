import { useRoutes } from 'react-router-dom';
import { Home } from '../Home';
import { MyAccuont } from '../MyAccuont';
import { MyOrder } from '../MyOrder';
import { MyOrders } from '../MyOrders';
import { SignIn } from '../SignIn';
import { NotFount } from '../NotFound';

const AppRoutes = ()=>{
    let routes =useRoutes([
     {path:'/', element:<Home/>},
     {path: '/:category', element:<Home/> },
     {path:'/my-accuont', element:<MyAccuont/>},
     {path:'/my-order/product-cart', element:<MyOrder/>},
     {path:'/my-order/:id', element:<MyOrder/>},
     {path:'/my-orders', element:<MyOrders/>},
     {path:'/sign-In', element:<SignIn/>},
     {path:'', element:<NotFount/>},
   
   ])
   return routes
 }
 
 export {AppRoutes};