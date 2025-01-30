import { Link } from "react-router-dom";
import { useContext} from 'react';
import { ShopingCardContext } from '../../context';
import { InitializeLocalStorage } from "../useLocalStorage";


const LogIn =()=>{
    const {
      userInforName, 
      userInforPassword,  
      // account,
      setUserInforName,
      setUserInforPassword, }= useContext(ShopingCardContext)
    const{ handleSignIn, renderPage }= InitializeLocalStorage()
    
   
    const handleinforName =(e)=>{
      setUserInforName(e.target.value)
    }
   
    const handleinforPassword =(e)=>{
      setUserInforPassword(e.target.value)
    }
     
     
   return(
         <div className=" space-y-5">
 
      <div className="flex flex-col gap-1">
         <label >Your Email:</label>
         <input  className="h-8  pl-3 bg-transparent border rounded-md focus:outline-none"
         type="text" id="email" name="email"  placeholder="email"
         onChange={handleinforName}/>
         
       </div>
       <div className="flex flex-col gap-1">
         <label htmlFor="password">password:</label>
         <input  className="h-8  pl-3 bg-transparent border rounded-md focus:outline-none" 
         onChange={handleinforPassword}
         type="text" id="password" name="password"  placeholder="*******"/>
       </div>
   
    <Link to={renderPage} >
    <button className='w-full h-10 mt-4 bg-slate-300 text-center text-black rounded-lg'
    onClick={()=>handleSignIn()}
     disabled={!userInforName && !userInforPassword }
     >Log In</button>
     </Link>
    <div className="text-center">
      <a className="font-light text-sm underline underline-offset-4" href="/"> Forgot my Password</a>
    </div>
    <Link to='/sign-Up'>
    <button className='w-full h-10 disabled:bg-transparent disabled:text-white  text-center border  rounded-lg'
    >Sign Up</button>
    </Link>
    </div>)
  }

  export {LogIn};