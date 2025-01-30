
import { CreateUser } from '../../component/createUserInfor';

const SignUp =()=> {
  
    return (
      <>
       <div className=" w-80  mt-4 flex flex-col  " >
      <h1 className=" font-medium text-center text-xl my-3 ">Welcome</h1>
      <CreateUser/>
      </div>
     </>
   
    )
  }
  
  export {SignUp};