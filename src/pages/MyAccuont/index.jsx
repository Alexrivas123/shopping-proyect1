import { InitializeLocalStorage } from "../../component/useLocalStorage";



const MyAccuont =()=> {
  const{parsedAccount }= InitializeLocalStorage()
  
    
        return(  
        <form  className="space-y-4 w-80" >
         <div className="flex flex-col gap-1"> 
           <label htmlFor="name"> Your name:</label>
           <input className="h-8  pl-3 bg-transparent border rounded-md focus:outline-none" 
           type="text" id="name" name="name" 
           defaultValue={parsedAccount.name}
            placeholder="Nombre"/>
         </div>
         <div className="flex flex-col gap-1">
           <label htmlFor="email">Your Email:</label>
           <input  className="h-8  pl-3 bg-transparent border rounded-md focus:outline-none" 
           defaultValue={parsedAccount.email}
           type="text" id="email" name="email"  placeholder="email"/>
         </div>
         <div className="flex flex-col gap-1">
           <label htmlFor="password">password:</label>
           <input  className="h-8  pl-3 bg-transparent border rounded-md focus:outline-none" 
           defaultValue={parsedAccount.password}
           type="text" id="password" name="password"  placeholder="*******"/>
         </div>
       
         <button className='w-full h-10 mt-4 bg-slate-300 text-center text-black rounded-lg'
         >Edit</button>
      
       </form>)
     
     }
  
  export {MyAccuont};