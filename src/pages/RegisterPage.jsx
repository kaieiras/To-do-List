import '../output.css'

export default function LoginPage() {
    return(
        <div className='bg-[white] w-4/12 min-h-[75vh] md:h-[75vh] shadow-md rounded-[30px] mx-auto my-10 flex-col md:flex-nowrap justify-between gap-3 p-6'>
           <h1 className='text-center mx-auto text-4xl'>Faça login ou crie uma conta</h1>
           <div className='flex flex-wrap justify-between gap-3 p-6'>
            
            <div className='bg-slate-100 w-[50vh] shadow-md m-auto h-[40vh] rounded-md p-5'>
             <form action="" className=''>
             <input 
              type="text" 
              placeholder="Email" 
              className=" border w-full border-zinc-500 rounded-md px-4 py-2 font-medium "
            />
             <input 
              type="text" 
              placeholder="Senha" 
              className=" my-3 border w-full border-zinc-500 rounded-md px-4 py-2 font-medium "
            />
            <div className='border-b-2 border-slate-300 w-[40vh] mx-auto my-8'></div>
            <input 
              type="button" 
              placeholder="Senha" 
              value={"Entrar"}
              className=" my-5 shadow bg-[rgb(23,166,166)] hover:bg-[#149292] text-white w-full rounded-md px-4 py-2 font-medium "
            >
            </input>
            <input 
              type="button" 
              placeholder="Senha" 
              value={"Criar Conta"}
              className=" bg-[rgb(28,231,55)] shadow hover:bg-[rgb(21,180,42)] text-white w-full rounded-md px-4 py-2 font-medium "
            >
            </input>
           </form>  
            </div>
            
           </div>
           
        </div>
    )
}