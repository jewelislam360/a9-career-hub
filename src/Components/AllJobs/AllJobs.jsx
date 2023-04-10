import React from 'react';

const AllJobs = ({job}) => {
    const {id, title, company, location, remote,full_time, job_responsibilities, educational_requirements,experiences, salary, description, date_posted, contact,logo}= job;
    return (
        <div className='border p-10'>
            
            <img src={logo} alt="" />
            <h1 className='text-2xl font-bold my-3'>{title}</h1>
            <p>{company}</p>
            <div>
                <div>{remote? "remort": "Ontime"}</div>
                <div></div>
            </div>
            <div className='flex mb-2'>
                <div><img src="/public/images/Icons/Location Icon.png" alt="" /></div>
                <div>{location}</div>
                <div className='ml-12'> Salary: ${salary}</div>
            </div>
            
            <button className='btn btn-accent'>Star Applying</button>
        </div>
    );
};

export default AllJobs;