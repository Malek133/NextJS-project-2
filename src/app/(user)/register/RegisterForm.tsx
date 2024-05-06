'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react';
import { toast } from 'react-toastify';

const RegisterForm = () => {
    const [email,setEmail] = useState('');
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');

    const formSubmitHandler = async (e:React.FormEvent) => {
        e.preventDefault();
        if(email === "") return toast.error("Email is required");
        if(password === "") return toast.error("Password is required");
        if(userName === "") return toast.error("userName is required");
        
        console.log({userName,email,password})
    }

  return (
    <form onSubmit={formSubmitHandler}
    className='border-2 border-black 
    rounded py-2 px-6'>
     
    <div>
    <div className="grid w-full max-w-sm items-center
     my-3 gap-1.5">
    <Label htmlFor="username">UserName</Label>
    <Input type="username" id="username" 
    placeholder="username" value={userName} 
    onChange={(e) => setUserName(e.target.value)} />
  </div>

    <div className="grid w-full max-w-sm items-center
     my-3 gap-1.5">
    <Label htmlFor="email">Email</Label>
    <Input type="email" id="email" 
    placeholder="Email"  value={email} 
    onChange={(e) => setEmail(e.target.value)} />
  </div>


  <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor="password">Password</Label>
    <Input type="password" id="password" 
    placeholder="****" value={password} 
    onChange={(e) => setPassword(e.target.value)} />
  </div>
    </div>
  
    <button className='bg-black text-white 
    rounded px-5 py-1 my-4'>
    Conexion
    </button>
 
   </form>
  )
}

export default RegisterForm
