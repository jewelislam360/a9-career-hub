import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Assignment 1',
    uv: 57,
    
    
  },
  {
    name: 'Assignment 2',
    uv: 45,
   
  },
  {
    name: 'Assignment 3',
    uv: 60,
    
  },
  {
    name: 'Assignment 4',
    uv: 59,

 },
  

 { 
    name: 'Assignment 5',
    uv: 60,
    
  },
  {
    name: 'Assignment 6',
    uv: 30,
    
  },
  {
    name: 'Assignment 7',
    uv: 48,
    
  },
  {
    name: 'Assignment 8',
    uv: 60,
    
  },
];

const Statistics = () => {
    return (
        <div className='w-[75%] mx-auto '>
            <h1 className='text-center py-20 text-4xl font-bold'>Statistics page</h1>
            
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>

        </div>
    );
};

export default Statistics;
