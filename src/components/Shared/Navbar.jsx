import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=" bg-white z-10 shadow-sm">
            <div className='py-4 px-4 border-b-[1px] rounded-md'>
                <div>
                    <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
                        <Link className="text-2xl font-bold hidden md:block">Technext</Link>
                        <div className='text-black font-semibold'>
                            <Link className='pe-5'>Home</Link>
                            <Link >All Info</Link>
                        </div>
                        <button className="btn btn-outline btn-access border-0 border-b-4 bg-gradient-to-r from-slate-500 via-slate-400 to-amber-100 mt-4 text-black">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;