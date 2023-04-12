import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import AppliedJobs from '../AppliedJobs/AppliedJobs';
import { addToDb } from '../../utils/fackDb';

const JobDetails = () => {
    const data = useLoaderData();
    const {Id} = useParams();
    let jobs = {};
    if(data){
         jobs = data.find(job=> job.id == Id )
      
    }

    const {id, title, company, location, remote,full_time, job_responsibilities, educational_requirements,experiences, salary, description, date_posted, phone, email} = jobs;

   const exmple =(id)=>{
    addToDb(id)
   }
    
    
   
   
    return (

        <div>
            <div><h1 className='text-center py-20 text-4xl font-bold'>Job Details</h1></div>

            <div className='flex gap-5 flex-row w-[75%] mx-auto p-8'>
            <div className='flex flex-col basis-3/4 gap-3 text-lg'>
                <p><strong>Job Description:</strong> {description}</p>
                <p><strong>Job Responsibility: </strong> {job_responsibilities}</p>
                <p><strong>Educational:</strong> <br /> {educational_requirements}</p>
                <p><strong>Experience:</strong> <br /> {experiences}</p>
                <p><strong>Post Date:</strong> {date_posted}</p>
            </div>
            <div className=' bg-violet-100 p-5 flex flex-col gap-3 basis-1/4'>
                <h1 className='font-bold'>Job Details</h1>
                <hr className="h-[2px] bg-slate-300"></hr>
                <div className='flex gap-1 items-center'>
                    <div><img src="/images/Icons/Frame.png" alt="" /></div>
                    <div><p><strong>Salary: $</strong> {salary}</p></div>
                </div>
                <div className='flex gap-1 items-center'>
                    <div><img src="/images/Icons/Frame-1.png" alt="" /></div>
                    <div><p><strong>Job Title:</strong> {title}</p></div>
                </div>
               
                
                <h1 className='font-bold'>Contact Information</h1>
                <hr className="h-[2px] bg-slate-300"></hr>
                <div className='flex gap-1 items-center'>
                    <div><img src="/images/Icons/Frame-2.png" alt="" /></div>
                    <div><p><strong>Phone:</strong> {phone}</p></div>
                </div>
                <div className='flex gap-1 items-center'>
                    <div><img src="/images/Icons/Frame-3.png" alt="" /></div>
                    <div><p><strong>Email:</strong> {email}</p></div>
                </div>
                <div className='flex gap-1 items-center'>
                    <div><img src="/images/Icons/Frame-4.png" alt="" /></div>
                    <div><p><strong>Address:</strong> {location}</p></div>
                </div>
                


                <div>
                <button onClick={()=>exmple(id)}  className='btn btn-accent w-full'>Apply Now</button>
                </div>
                
            </div>
            
            
        </div>
        

        </div>
        
    );
};

export default JobDetails;