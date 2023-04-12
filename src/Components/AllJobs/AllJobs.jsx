import React from 'react';
import { Link } from 'react-router-dom';

const AllJobs = ({job}) => {
    const {id, title, company, location, remote,full_time, job_responsibilities, educational_requirements,experiences, salary, description, date_posted, contact, logo}= job;


    
    return (
        <div className='border rounded p-10'>
            
            <img src={logo} alt="" />
            <h1 className='text-2xl font-bold my-3'>{title}</h1>
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
            <Link to={`/job/${id}`}><button className='btn btn-accent'>View Details</button></Link>
            
            
        </div>
    );
};

export default AllJobs;