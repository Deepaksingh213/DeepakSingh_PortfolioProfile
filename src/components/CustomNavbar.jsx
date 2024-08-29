import React,{useState} from 'react';

import {  MdMenu  } from "react-icons/md";
import { Link } from "react-router-dom";
import MobileMenu from './MobileMenu';

const menuItems = [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: 'AboutUs', link: '/hero' },
    { id: 3, title: 'Skill', link: '/skills' },
    { id: 6, title: 'Projects', link: '/projects' },
    { id: 4, title: 'Services', link: '/services' },
    { id: 5, title: 'Contacts', link: '/contacts' }
];
const CustomNavbar = () => {
   
const [open, setOpen] = useState(false)


    return (
        <>
            <nav className='bg-gray-800'>
                <div className='container mx-auto flex justify-between items-center py-4 md:pt-4'>
                    {/* Logo section */}
                    <div className='flex items-center gap-2  font-bold'>
                        <p className='text-primary text-2xl'>P <span className='text-secondary text-xl'>ortfolio.</span></p>
                   
                       
                    </div>
                    {/* Link section */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center space-x-6 text-gray-400'>
                            {menuItems.map((menu) => (
                                <li key={menu.id}>
                                    <Link to={menu.link} className=' inline-block py-1 px-3 font-semibold hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] '>
                                        {menu.title}
                                    </Link>
                                </li>
                            ))}
                            {/* <button className='rounded-full text-2xl hover:bg-primary p-2 items-center flex'>
                              Resume
                            </button> */}
                        </ul>
                    </div>
                    {/* mobile section */}
                    <div className='md:hidden'>
                        <MdMenu onClick={()=>setOpen(!open)} className="text-4xl text-white"/>
                    </div>
                </div>
            </nav>
            <MobileMenu open={open}/>
        </>
    );
}

export default CustomNavbar;
