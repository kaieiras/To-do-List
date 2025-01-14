import { Link } from 'react-router-dom';
import { CircleUser, ClipboardList } from 'lucide-react';


export default function Nav() {
    return(
      <>
        <nav className=" w-10/12 mx-auto my-5 flex justify-end gap-3 ">
        <Link to='/' className='bg-[#7B44F2] font-bold rounded-md text-white flex justify-center p-3 gap-2'>
          <ClipboardList />
          sobre
        </Link>
        <Link to='/register' className='bg-[#7B44F2] font-bold rounded-md text-white flex justify-center p-3 gap-2'>
          <CircleUser />
          register
        </Link>
        
        </nav>

        <div className="w-10/12 m-auto border-b-2 border-navColor"></div>
       </>
    )
}