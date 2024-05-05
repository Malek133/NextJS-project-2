
import React from 'react'
      import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
const LoginPage = () => {
  return (
    <div className='flex flex-col
    items-center justify-center py-12'>
      <div className='border-2 border-black 
      rounded py-2 px-6'>
       
      <div>
      <div className="grid w-full max-w-sm items-center
       my-3 gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" 
      placeholder="Email" />
    </div>


    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Password</Label>
      <Input type="password" id="password" placeholder="****" />
    </div>
      </div>

      <div className='flex justify-between 
      items-center space-x-3 my-4'>
      <button className='bg-black text-white 
      rounded px-5 py-1 my-4'>
      Cancel
      </button>

      <button className='bg-black text-white 
      rounded px-5 py-1 my-4'>
      Connexion
      </button>
      </div>

     </div>
    </div>
  )
}

export default LoginPage
