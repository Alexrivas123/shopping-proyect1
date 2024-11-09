
import React from "react";

const useItems= ()=>{
 const [items, setItems] = React.useState(null);

   async function fetchData(url) {
       const res = await fetch(url)
         const data = await res.json()
         return data
   }
   
    React.useEffect(() => {
         (async ()=> {
            try{
             const products = await fetchData('https://api.escuelajs.co/api/v1/products')
              setItems(products)
        }catch (err){console.log(err)}
        })();
    } , [])

  
    return{
        items,
    }

}
export {useItems};