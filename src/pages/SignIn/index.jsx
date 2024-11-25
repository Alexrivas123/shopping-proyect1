import { Link } from "react-router-dom";


const SignIn =()=> {
 
    return (
      <>
       <div className="  mt-4 flex flex-col space-y-3 " >
      <h1 className=" font-medium text-center text-xl my-3 ">Welcome</h1>
       <p>
         <span>Email : </span>
         <span>zambrano.edward123@gmail.com</span>
       </p>
       <p>
         <span>Password : </span>
         <span>*******</span>
       </p>
       <Link to='/'>
       <button className='w-full h-10 mt-3 bg-slate-300 text-center text-black rounded-lg'>Log In</button>
       </Link>
       <div className="text-center">
         <a className="font-light text-sm underline underline-offset-4" href="/"> Forgot my Password</a>
       </div>
       <button className='w-full h-10 disabled:bg-transparent disabled:text-white  text-center border  rounded-lg'>Sign Up</button>
      </div>
     </>
   
    )
  }
  
  export {SignIn};
