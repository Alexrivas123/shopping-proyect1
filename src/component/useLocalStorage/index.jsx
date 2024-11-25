
// import React from 'react'

const initializeLocalStorage =() => {
const accountInLocalStorage = localStorage.getItem('account')
const signOutInLocalStorage = localStorage.getItem('sign-Out')
 const parsedAccount = !accountInLocalStorage ? {} : JSON.parse(accountInLocalStorage)
 const parsedSignOut = !signOutInLocalStorage ? false : JSON.parse(signOutInLocalStorage)

 if(!accountInLocalStorage ){
    localStorage.setItem('account', JSON.stringify({})) 
 } 

 if(!signOutInLocalStorage){
    localStorage.setItem('sign-Out', JSON.stringify(false))
   
 } 


  
}

export {initializeLocalStorage} 