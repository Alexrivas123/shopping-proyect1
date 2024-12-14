import { Link } from "react-router-dom";
import { useContext} from 'react';
import { ShopingCardContext } from '../../context';
import { InitializeLocalStorage } from "../useLocalStorage";


const LogIn =()=>{
    const {setView, 
      userInforName, 
      userInforPassword,   
      setUserInforName,
      setUserInforPassword, }= useContext(ShopingCardContext)
    const{ handleSignIn}= InitializeLocalStorage()
    
   
    const handleinforName =(e)=>{
      setUserInforName(e.target.value)
    }
   
    const handleinforPassword =(e)=>{
      setUserInforPassword(e.target.value)
    }
console.log(userInforName)
   
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
   
    <Link to='/'>
    <button className='w-full h-10 mt-4 bg-slate-300 text-center text-black rounded-lg'
    onClick={()=>handleSignIn()}
     disabled={!userInforName && !userInforPassword }
     >Log In</button>
    </Link>
    <div className="text-center">
      <a className="font-light text-sm underline underline-offset-4" href="/"> Forgot my Password</a>
    </div>
    <button className='w-full h-10 disabled:bg-transparent disabled:text-white  text-center border  rounded-lg'
    onClick={()=>setView('creater-user-infor')}
    >Sign Up</button>
    </div>)
  }

  export {LogIn};