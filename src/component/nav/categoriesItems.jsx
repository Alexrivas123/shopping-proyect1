import { NavLink } from "react-router-dom";
const CategoriesItems = ()=>{

   const listCategories = [
    { to: '/', name: 'all', },
    { to: '/Clothes', name: 'Clothes', },
    { to: '/Electronics', name: 'Eletronics', },
    { to: '/Furnitures', name: 'Furnitures', },
    { to: '/Shoes', name: 'Shoes', },
    { to: '/Others', name: 'Others', },
   ]
  

    return(
        <>
        <ul className="space-x-2 flex place-content-center ">
       {listCategories.map(categories => 
    <li key={categories.name}> <NavLink className='hover:border-b-2' to={categories.to}>{categories.name} </NavLink></li>
  )}
  </ul>
   </>
        
    )
}
export {CategoriesItems};