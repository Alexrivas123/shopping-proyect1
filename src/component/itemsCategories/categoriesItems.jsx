import { NavLink } from "react-router-dom";
const CategoriesItems = ()=>{

   const listCategories = [
    { to: '/', name: 'all', },
    { to: '/Clothes', name: 'Clothes', },
    { to: '/Electronics', name: 'Eletronics', },
    { to: '/Furniture', name: 'Furniture', },
    { to: '/Shoes', name: 'Shoes', },
    { to: '/Miscellaneous', name: 'Miscellaneous', },
    { to: '/Change title', name: 'Change title', },
   ]
  
  
    return(
        <>
        <article className="   w-72 h-28 mb-3 max-md:border-t max-md:border-b  lg:w-52 lg:h-screen lg:fixed md:top-20 lg:left-0 lg:z-20 md:p-5 lg:mr-4 bg-slate-800 ">
        <ul className="   grid grid-cols-2  lg:flex  lg:flex-col  lg:gap-3 md:ml-8 ">
       {listCategories.map(categories => 
    <li key={categories.name}> <NavLink className='hover:border-b-2' to={categories.to}>{categories.name} </NavLink></li>
  )}
  </ul>
  </article>
   </>
        
    )
}
export {CategoriesItems};