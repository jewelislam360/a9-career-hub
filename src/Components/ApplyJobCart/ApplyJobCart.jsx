import React from 'react';
import { Link } from 'react-router-dom';

const ApplyJobCart = ({ data }) => {
    const { id, company, location, salary, logo, title, remote, full_time } = data;
    return (

        <div className=' w-[75%] mx-auto bg-[#ffffff75] py-5 px-7 border border-gray-100 rounded-xl cursor-pointer shadow-md md:flex gap-5 items-center justify-between'>
            <div className='md:flex gap-5 items-center'>
                <div className='rounded-2xl bg-slate-100 py-16 px-6'>
                    <img className='w-28 h-10' src={logo} alt="" />
                </div>
                <div>
                    <h1>{title}</h1>
                    <p>{company}</p>
                    <div className=' flex gap-3 my-2'>
                <div className='border rounded p-1 bg-sky-300'>{remote}</div>
                <div className='border rounded p-1  bg-sky-300'>{full_time}</div>
            </div>
                    <div className='flex mb-2'>
                        <div><img src="/public/images/Icons/Location Icon.png" alt="" /></div>
                        <div>{location}</div>
                        <div className='ml-12'> Salary: ${salary}</div>
                    </div>

                </div>

            </div>
            <div>

                <Link to={`/job/${id}`}><button className='btn btn-accent'>View Details</button></Link>
            </div>
        </div>

    );
};

export default ApplyJobCart;