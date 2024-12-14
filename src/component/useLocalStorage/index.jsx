
import { useContext } from 'react';
import { ShopingCardContext } from '../../context';
import { Navigate} from "react-router-dom";

const InitializeLocalStorage =() => {
    const { setSignOut, account, setAccount, signOut }= useContext(ShopingCardContext)

const accountInLocalStorage = localStorage.getItem('account')
const parsedAccount = JSON.parse(accountInLocalStorage)
 const noAccountInLocalStorage =  parsedAccount ? Object.keys(parsedAccount).length === 0 : true
 const noAccountInLocalState = account ? Object.keys(account).length === 0 : true
const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
  console.log(parsedAccount)
 const signOutInLocalStorage = localStorage.getItem('sign-out')
     const parsedSignOut = JSON.parse(signOutInLocalStorage)
   
     const isUserSignOut = signOut || parsedSignOut

     if(!accountInLocalStorage ){
 localStorage.setItem('account', JSON.stringify([]) )}
  
      if(!signOutInLocalStorage){
         localStorage.setItem('sign-out', JSON.stringify(false))
         
      } 
      
      const handleSignOut=()=>{
       const stringifiedSignOut = JSON.stringify(true)
       localStorage.setItem('sign-out',stringifiedSignOut)
       setAccount({})
       setSignOut(true)
      }
 const handleSignIn=()=>{
   const stringifiedSignOut= JSON.stringify(false)
   localStorage.setItem('sign-out', stringifiedSignOut)
   setSignOut(false)
    return <Navigate replace to='/'/>}

return{
   handleSignIn,
   handleSignOut,
   isUserSignOut,
   hasUserAnAccount,
   parsedAccount,

}

}

export {InitializeLocalStorage} 