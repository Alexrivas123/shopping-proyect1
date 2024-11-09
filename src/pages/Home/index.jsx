
import { Card } from "../../component/card";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopingCardContext } from "../../context";
import {useItems} from "../../component/useItem/index"


const Home =()=> {
    let { category} = useParams();
  const {filterItems, setfilterCategory} = useContext(ShopingCardContext)
   const {items}= useItems()
    setfilterCategory(category)

   const renderView = filterItems?.length > 0 ? 
    filterItems?.map(item =>{ return <Card key={item.id} data={item}/> })
   :
    items?.map(item =>{ return <Card key={item.id} data={item}/> })

   return (
   
     <section >
       <div>
          <h2 className="font-bold text-center mt-8 mb-5 text-lg md:text-2xl"> Exclusive Products </h2>
       </div> 
       <div className=" max-w-screen-lg grid gap-3 place-items-center  grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" >
         {renderView}
       </div>
      </section>

    )
  }
  
  export {Home};