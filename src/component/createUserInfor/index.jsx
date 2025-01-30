
import { useContext, useRef } from 'react';
import { ShopingCardContext } from '../../context';
import { Link} from "react-router-dom";
import { createAnAccout } from '../utilis/createAnAccount';
import { InitializeLocalStorage } from '../useLocalStorage';
const CreateUser = ()=>{
    const {setAccount,}= useContext(ShopingCardContext)
    const form = useRef(null)
    const{ handleSignIn, parsedAccount }= InitializeLocalStorage()
   
    return(  
    <form ref={form} className="space-y-4 w-80" >
     <div className="flex flex-col gap-1"> 
       <label htmlFor="name"> Your name:</label>
       <input className="h-8  pl-3 bg-transparent border rounded-md focus:outline-none" 
       type="text" id="name" name="name" defaultValue='' placeholder="Nombre"/>
     </div>
     <div className="flex flex-col gap-1">
       <label htmlFor="email">Your Email:</label>
       <input  className="h-8  pl-3 bg-transparent border rounded-md focus:outline-none" 
       type="text" id="email" name="email" defaultValue='' placeholder="email"/>
     </div>
     <div className="flex flex-col gap-1">
       <label htmlFor="password">password:</label>
       <input  className="h-8  pl-3 bg-transparent border rounded-md focus:outline-none" 
       type="text" id="password" name="password" defaultValue='' placeholder="*******"/>
     </div>
     <Link to='/'>
     <button className='w-full h-10 mt-4 bg-slate-300 text-center text-black rounded-lg'
     onClick={()=>{createAnAccout( setAccount, form, handleSignIn, parsedAccount )}}>creater</button>
     </Link>
     
   </form>)
 
 }

 export {CreateUser}