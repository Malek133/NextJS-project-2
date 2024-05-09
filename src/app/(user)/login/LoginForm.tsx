'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const LoginForm = () => {

  const router = useRouter();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const formSubmitHandler = async (e:React.FormEvent) => {
        e.preventDefault();
        if(email === "") return toast.error("Email is required");
        if(password === "") return toast.error("Password is required");
        router.replace('/')
        console.log({email,password})
    }

  return (
    <form  onSubmit={formSubmitHandler} className='flex flex-col 
    items-center justify-center py-3'>
      <div className='border-2 border-black 
      rounded py-2 px-6'>
       
      <div>
      <div className="grid w-full max-w-sm items-center
       my-3 gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" 
      placeholder="Email" value={email} 
      onChange={(e) => setEmail(e.target.value)} />
    </div>


    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Password</Label>
      <Input type="password" id="password" 
      placeholder="****" value={password} 
      onChange={(e) => setPassword(e.target.value)} />
    </div>
      </div>

      

      <button className='bg-black text-white 
      rounded px-5 py-1 my-4'>
      Connexion
      </button>
   

     </div>
    </form>
  )
}

export default LoginForm