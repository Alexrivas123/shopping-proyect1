
import { useContext } from 'react';
import { ShopingCardContext } from '../../context';
import { CreateUserInfor } from "../../component/createUserInfor";
import { LogIn } from '../../component/logIn';

const SignIn =()=> {
  const {
      view
  }= useContext(ShopingCardContext)

    const renderView = ()=> view === 'creater-user-infor' ? <CreateUserInfor/> : <LogIn/>
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
