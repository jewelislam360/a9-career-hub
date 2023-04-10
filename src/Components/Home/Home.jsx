import React from 'react';
import Benner from '../Benner/Benner';
import JobCatagoryList from '../JobCatagoryList/JobCatagoryList';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const jobs =useLoaderData();
    return (
        <div>
            <Benner></Benner>
            <JobCatagoryList></JobCatagoryList>
            <h1>total data {jobs.length}</h1>
            
        </div>
    );
};

export default Home;