


const createAnAccout=( setAccount, form, handleSignIn, parsedAccount )=>{

 const formData= new FormData(form.current)
    const data= {
      name: formData.get('name'),
      email:formData.get('email'),
      password: formData.get('password')
    }
      if(!parsedAccount){
        const stringifiedAccount = JSON.stringify([data] )
        localStorage.setItem('account', stringifiedAccount)
      } else{
          const stringifiedAccount = JSON.stringify([...parsedAccount, data] )
        localStorage.setItem('account', stringifiedAccount)}

       
    setAccount(data)
    handleSignIn()
    

   }


   export {createAnAccout}