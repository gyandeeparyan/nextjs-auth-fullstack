"use client"
import axios from"axios"
import Link from "next/Link"
import {useRouter} from "next/navigation"
import React,{useState} from "react"


export default function  userProfile(){
// eslint-disable-next-line react-hooks/rules-of-hooks
const router = useRouter();
const[data,setData]=useState("nothing")

const logout= async()=>{
try{

const logoutData = await axios.get('/api/users/logout')
console.log(logoutData)
router.push("/login");

}
catch(error:any){
  console.log(error);
console.log(error);

}


}

const getUserDetails = async () => {
  const res = await axios.get('/api/users/me')
  console.log(res.data);
  setData(res.data.data._id)
}

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen py-2"> 
    <h1>Profile</h1>
    <hr/>
    <p>Profile Page</p>
  
    <h2 className="p-1 rounded bg-gray-900">{data === 'nothing' ? "Nothing" : <Link href={`/profile/${data}`}>{data}
            </Link>}</h2>

    <button 
    onClick={logout}
    className="bg-slate-900 mt-4 p-2 text-white font-bold px-4 rounded-lg"> Logout</button>
    
    <button 
    onClick={getUserDetails}
    className="bg-green-900 mt-4 p-2 text-white font-bold px-4 rounded-lg"> Get User Details</button>
    </div>
    
    </>
    
  )
}
