import { Link } from 'react-router-dom';
import { User, ClipboardList, Zap } from 'lucide-react';
import { BsGithub } from 'react-icons/bs';

export default function Nav() {
  return(
    <>
      <nav className="bg-[#1B3C59] w-screen mx-auto flex justify-between gap-3 p-2 ">
         <Link to={'/'}>
           <h1 className='flex gap-2 text-white font-medium text-2xl p-2'>STAY HARD<Zap/></h1>
         </Link>
         <div className='flex justify-end gap-3'>
           <Link to={'https://github.com/kaioxavierz'} className='bg-[#ffff] hover:bg-[#dddddd]  font-bold rounded-lg text-[#001C40] flex justify-center p-3 gap-2'>
           <BsGithub size={25}/>
         </Link>
         <Link to='/' className='bg-[#ffff] hover:bg-[#dddddd] font-bold rounded-lg text-[#001C40] flex justify-center p-3 gap-2'>
           <ClipboardList />
         </Link>
         <Link to='/register' className='bg-[#ffff] hover:bg-[#dddddd] mr-5 font-bold rounded-lg text-[#001C40] flex justify-center p-3 gap-2'>
           <User />
         </Link>
         </div>
      </nav>
      <div className="w-10/12 my-10 m-auto border-b-2 border-[#001C40]"></div>
    </>
  )
}