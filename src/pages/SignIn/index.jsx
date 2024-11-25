import { Link } from "react-router-dom";
import { useContext, useRef, useState } from 'react';
import { ShopingCardContext } from '../../context';

const SignIn =()=> {
  const {
      account
  }= useContext(ShopingCardContext)
  const[view, setView ]= useState('user-infor')
  const form = useRef(null)

const accountInLocalStorage = localStorage.getItem('account')
const parsedAccount = JSON.parse(accountInLocalStorage)
 const noAccountInLocalStorage =  parsedAccount ? Object.keys(parsedAccount).length === 0 : true
 const noAccountInLocalState = account ? Object.keys(account).length === 0 : true
 const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

 const createAnAccout=()=>{
  const formData= new FormData(form.current)
  const data= {
    name: formData.get('name'),
    email:formData.get('email'),
    password: formData.get('password')
  }
  console.log(data)
 }

    const renderLogIn =()=>{
      return(
           <div className=" space-y-5">
        <p>
        <span>Email : </span>
        <span>{parsedAccount?.email}</span>
      </p>
      <p>
        <span>Password : </span>
        <span>{parsedAccount?.password}</span>
      </p>
      <Link to='/'>
      <button className='w-full h-10 mt-4 bg-slate-300 text-center text-black rounded-lg'
       disabled={!hasUserAnAccount}>Log In</button>
      </Link>
      <div className="text-center">
        <a className="font-light text-sm underline underline-offset-4" href="/"> Forgot my Password</a>
      </div>
      <button className='w-full h-10 disabled:bg-transparent disabled:text-white  text-center border  rounded-lg'
      disabled={hasUserAnAccount}
      onClick={()=>setView('creater-user-infor')}
      >Sign Up</button>
      </div>)
    }
    const renderCreateUserInfor = ()=>{
       return(  
       <form ref={form} className="space-y-4 w-80" >
        <div className="flex flex-col gap-1"> 
          <label htmlFor="name"> Your name:</label>
          <input className="h-8  pl-3 bg-transparent border rounded-md focus:outline-none" 
          type="text" id="name" name="name" defaultValue={parsedAccount?.name} placeholder="Nombre"/>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Your Email:</label>
          <input  className="h-8  pl-3 bg-transparent border rounded-md focus:outline-none" 
          type="text" id="email" name="email" defaultValue={parsedAccount?.name} placeholder="email"/>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">password:</label>
          <input  className="h-8  pl-3 bg-transparent border rounded-md focus:outline-none" 
          type="text" id="password" name="password" defaultValue={parsedAccount?.password} placeholder="*******"/>
        </div>
        <Link to='/'>
        <button className='w-full h-10 mt-4 bg-slate-300 text-center text-black rounded-lg'
        onClick={()=>createAnAccout()}>creater</button>
        </Link>
        
      </form>)
    
    }

    const renderView = ()=> view === 'creater-user-infor' ? renderCreateUserInfor() : renderLogIn()
    return (
      <>
       <div className=" w-80  mt-4 flex flex-col  " >
      <h1 className=" font-medium text-center text-xl my-3 ">Welcome</h1>
      {renderView()}
      </div>
     </>
   
    )
  }
  
  export {SignIn};
