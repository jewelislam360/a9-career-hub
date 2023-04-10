import React from 'react';

const JobCatagoryList = () => {
    return (
        <div className='w-[75%] mx-auto mt-32'>
            <h1 className='text-5xl text-center mb-3'>Job Category List</h1>
            <p className='text-base text-center mb-7'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-4 gap-5	'>
                <div className=' bg-slate-300 p-10 rounded-lg'>
                    <img src="/public/images/Icons/accounts 1.png" alt="" />
                    <h1 className='text-xl'>Accounts & Finance</h1>
                    <p className='text-base'>300 Jobs Available</p>
                </div>
                <div className=' bg-slate-300 p-10 rounded-lg'>
                    <img src="/public/images/Icons/chip 1.png" alt="" />
                    <h1 className='text-xl'>Creative Design</h1>
                    <p className='text-base'>100+ Jobs Available</p>
                </div>
                <div className=' bg-slate-300 p-10 rounded-lg'>
                    <img src="/public/images/Icons/business 1.png" alt="" />
                    <h1 className='text-xl'>Marketing & Sales</h1>
                    <p className='text-base'>150 Jobs Available</p>
                </div>
                <div className=' bg-slate-300 p-10 rounded-lg'>
                    <img src="/public/images/Icons/social-media 1.png" alt="" />
                    <h1 className='text-xl'>Engineering Job</h1>
                    <p className='text-base'>240 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default JobCatagoryList;