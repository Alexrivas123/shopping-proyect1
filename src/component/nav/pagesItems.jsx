import { NavLink } from "react-router-dom";

const PagesItems = ()=>{
   const listPages = [
    {to:'/', name: 'Alexrivas24@gmail.com'},
    {to:'/my-orders', name:'My Orders'},
    {to:'/singnIn', name:'Singn In'},
   ]
  

    return(
        <>
        <ul className="space-x-4 flex place-content-center gap-1">
       {listPages.map(categories => 
    <li key={categories.name}> <NavLink to={categories.to}>{categories.name} </NavLink></li>
  )}
  </ul>
   </>
        
    )
}
export {PagesItems};