import React, { useState } from 'react';
import Benner from '../Benner/Benner';
import JobCatagoryList from '../JobCatagoryList/JobCatagoryList';
import { useLoaderData } from 'react-router-dom';
import AllJobs from '../AllJobs/AllJobs';

const Home = () => {
    const jobs =useLoaderData();
    const [card, setCard]=useState([]);
    

    return (
        <div>
            <Benner></Benner>
            <JobCatagoryList></JobCatagoryList>
            <div className='home-container w-[75%] mx-auto'>
                <div className='text-center my-10'>
                <h1 className='font-bold text-4xl mb-3'>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
               
            <h1>total data {jobs.length}</h1>
            <div className='job-container grid grid-cols-2 gap-8'>
            {
                jobs.map(job=><AllJobs
                key={job.id} 
                job={job}
                ></AllJobs>)
            }
            </div>
            <div className='text-center mt-8'><button className='btn btn-accent'>SEE MORE</button></div>

            </div>
            
            
            
        </div>
    );
};

export default Home;