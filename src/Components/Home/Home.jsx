import React from 'react';
import Benner from '../Benner/Benner';
import JobCatagoryList from '../JobCatagoryList/JobCatagoryList';
import { useLoaderData } from 'react-router-dom';
import AllJobs from '../AllJobs/AllJobs';

const Home = () => {
    const jobs =useLoaderData();
    return (
        <div>
            <Benner></Benner>
            <JobCatagoryList></JobCatagoryList>
            <div className='home-container w-[75%] mx-auto'>
            <h1>total data {jobs.length}</h1>
            <div className='job-container grid grid-cols-2 gap-8'>
            {
                jobs.map(job=><AllJobs
                key={job.id} 
                job={job}
                ></AllJobs>)
            }
            </div>

            </div>
            
            
        </div>
    );
};

export default Home;