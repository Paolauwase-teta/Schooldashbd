"use client";
import React from 'react'
import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', income: 4000, expenses: 2400 },
  { name: 'Feb', income: 3000, expenses: 1398 },
  { name: 'Mar', income: 2000, expenses: 9800 },
  { name: 'Apr', income: 2780, expenses: 3908 },
  { name: 'May', income: 1890, expenses: 4800 },
  { name: 'Jun', income: 2390, expenses: 3800 },
  { name: 'Jul', income: 3490, expenses: 4300 },
  { name: 'Aug', income: 3490, expenses: 4300 },
  { name: 'Sep', income: 3490, expenses: 4300 },
  { name: 'Oct', income: 3490, expenses: 4300 },
  { name: 'Nov', income: 3490, expenses: 4300 },
  { name: 'Dec', income: 3490, expenses: 4300 },
];

const FinanceChart = () => {
  return (
    <div className='bg-white rounded-lg h-full p-4 mb-3'>
      <div className='flex items-center justify-between mb-4'>
        <h1 className='text-black'>Finance</h1>
        <Image src='/moreDark.png' alt='' width={20} height={20}/>
      </div>

      <ResponsiveContainer width="100%" height={430}>
        <LineChart
          data={data}
          margin={{  right: 0, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke='#ddd' />
          <XAxis  dataKey="name" axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} tickMargin={10}/>
          <YAxis  axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} tickMargin={10} />
          <Tooltip />
          <Legend verticalAlign='top' align='center' wrapperStyle={{paddingTop:"10px",paddingBottom:"20px"}}/>
          <Line type="monotone" dataKey="income" stroke="#FFF8DC"  strokeWidth={5} />
          <Line type="monotone" dataKey="expenses" stroke="#E0F7FF" strokeWidth={5}/>
        </LineChart>
      </ResponsiveContainer>
      
    </div>
  )
}

export default FinanceChart;
