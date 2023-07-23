export default function  profilePage({params}:any){

    return (
      <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2"> 
      <h1>Profile</h1>
      <br/>
      
      <p className="text-4xl">Profile Page
      
      <span className=" mx-5 p-2 rounded bg-red-600 rounded-lg"> {params.id}</span>
      </p>
      </div>
      
      </>
      
    )
  }
  