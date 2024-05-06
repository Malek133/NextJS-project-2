import RegisterForm from "./RegisterForm"


const RegisterPage = () => {
  return (
    <div className='flex flex-col fix-height
    items-center justify-center py-2'>

      <h1 className="my-4 text-center text-4xl font-semibold text-slate-800">
        Creat New  Account</h1>
        <RegisterForm />
      
    </div>
  )
}

export default RegisterPage