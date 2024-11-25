import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { ShopingCardContext } from '../../context';

const SignIn =()=> {
  const {
      account
  }= useContext(ShopingCardContext)
  const[view, setView ]= useState('user-infor')

const accountInLocalStorage = localStorage.getItem('account')
const parsedAccount = JSON.parse(accountInLocalStorage)
 const noAccountInLocalStorage =  parsedAccount ? Object.keys(parsedAccount).length === 0 : true
 const noAccountInLocalState = account ? Object.keys(account).length === 0 : true
 const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

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
      // crear cuenta de usuario
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
