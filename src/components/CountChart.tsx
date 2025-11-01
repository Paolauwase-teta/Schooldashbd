"use client";
import React from 'react'
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Total',
    count: 106,
    fill: 'white',
  },
  {
    name: 'Girls',
    count: 53,
    fill: '#C3EBFA',
  },
  {
    name: 'Boys',
    count: 53,
    fill: '#FAE27C',
  },
  
];

const CountChart = () => {
  return (
    <div className='w-full h-full bg-white p-4 rounded-xl relative'>
        {/*TITLE*/}
        <div className='flex justify-between items-center mb-1'>
            <h1 className='text-black'>Students</h1>
            <Image src='/moreDark.png' alt='' width= {20} height={20} />
        </div>
        {/*CHART */}
        <div className='w-full h-[340px]'>
          <ResponsiveContainer width="100%" height="100%">
    <RadialBarChart
      cx="50%"
      cy="50%"
      innerRadius="10%"
      outerRadius="100%"
      barSize={32}
      data={data}
    >
      <RadialBar  background dataKey="count" />
      {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" /> */}
    </RadialBarChart>
  </ResponsiveContainer>
  <Image src= '/maleFemale.png' alt='' width={60} height={60} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
        </div>
        {/*BOTTOM*/}
        <div className='flex justify-center gap-16'>
          <div className='flex flex-col gap-1 items-center'>
          <div className='w-5 h-5 rounded-full bg-lamaSky '></div>
          <h1 className='font-bold text-black'>1,234</h1>
          <h2 className='text-xs text-gray-300'>Boys(55%)</h2>
          </div>
        <div className='flex flex-col gap-1 items-center'>
          <div className='w-5 h-5 rounded-full bg-lamaYellow '></div>
          <h1 className='font-bold text-black'>1,234</h1>
          <h2 className='text-xs text-gray-300'>Girls(45%)</h2>
        </div>
        </div>
        
      
    </div>
  )
}

export default CountChart
