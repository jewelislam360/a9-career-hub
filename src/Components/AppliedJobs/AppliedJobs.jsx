import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utils/fackDb';
import ApplyJobCart from '../ApplyJobCart/ApplyJobCart';



const AppliedJobs = () => {
    <div><h1 className='text-center py-20 text-4xl font-bold bg-[#DEE0FE]'>Applied Jobs</h1></div>
    
    
    const [job, setJob] = useState([]);

    useEffect (()=>{
        fetch('job.json')
        .then(res=> res.json()) 
        .then(data=>setJob(data))

    },[])
  const [card, setCard]=useState([])
    useEffect (()=>{
        let jobid = getShoppingCart()
        let jobCart=[];
        for(const id in jobid){
            const cart = job.find(data=>data.id==id)
            if(cart){
                jobCart.push(cart)
            }
        }
        setCard(jobCart)
    },[job])
   

    return (
        <div>
            {
                card.map((data)=><ApplyJobCart
                key={data.id}
                data={data}

                ></ApplyJobCart>)
            }
            
        </div>
    );
};

export default AppliedJobs;