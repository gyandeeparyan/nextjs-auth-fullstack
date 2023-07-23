"use client"

import Link from 'next/link'
import React, { useEffect } from 'react';
import {useRouter} from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';



export default function SignupPage(){

const router =useRouter();
const [buttonDisabled ,setButtonDisabled] =React.useState(true)
const [loading ,setLoading] =React.useState(false);


 const [user,setUser]=React.useState({
    email:"",
    password:"",
    username:""
 })

 const onSignup =async ()=>{

try{
setLoading(true)
const response =await axios.post("/api/users/signup",user);
console.log(response.data)
router.push("/login")
}
catch(error:any){
console.log(error);
toast.error(error.message)

}
finally{
setLoading(false)
}


 }

 useEffect(()=>{
 if(user.email.length >0 && user.password.length>0 
  && user.username.length >0){
  setButtonDisabled(false)
 }
 },[user])


    return (
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
          <h1 className='my-4 text-5xl font-mono font-extrabold'>
          {
            loading ? "Processing" : " Signup"
           }
          <hr />
         
          </h1>
          <div>
          <label className="" htmlFor="username">Username</label>
          <br />
          <input className="p-2 text-black rounded-lg"
          id="username"
          type="text"
          value={user.username}
          placeholder="username"
          onChange={(e) => setUser({...user,username:e.target.value})} />
        
         <br/>
         <label className="" htmlFor="username">Email</label>
          <br />
          <input className="p-2 text-black rounded-lg"
          id="email"
          type="email"
          value={user.email}
          placeholder="email"
          onChange={(e) => setUser({...user,email:e.target.value})} />
          <br/>

         <label className="" htmlFor="password">password</label>
          <br />
          <input className="p-2 text-black rounded-lg"
          id="password"
          type="password"
          value={user.password}
          placeholder="password"
          onChange={(e) => setUser({...user,password:e.target.value})} />
           <br/>
           <button 
           className="p-2  my-2 bg-slate-900 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
           onClick={onSignup}
           >
          {
            buttonDisabled ? "Signup Disabled" : "Signup"  
          }
           </button>

           <Link className='mx-5' href='/login'> Go to Login</Link>

          </div>
         

          
  
      </div>
    )
  }
  