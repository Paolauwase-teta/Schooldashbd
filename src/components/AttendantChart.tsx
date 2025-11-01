"use client";
import React from 'react'
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 40,
    absent: 24,

  },
  {
    name: 'Tues',
    present: 30,
    absent: 18,
  },
  {
    name: 'Wed',
    present: 20,
    absent: 98,
    
  },
  {
    name: 'Thurs',
    present: 27,
    absent: 39,
  },
  {
    name: 'Fri',
    present: 18,
    absent: 48,
  },
  
];

const AttendantChart = () => {
  return (
    <div className='bg-white rounded-lg h-full p-4 mb-3'>
        <div className='flex items-center justify-between '>
            <h1 className='text-black'>Attendance</h1>
            <Image src='/moreDark.png' alt='' width={20} height={20}/>
        </div>
      
      <div className='mb-3 flex justify-center items-center top-0'>
  <ResponsiveContainer width="100%" height={430} >
  <BarChart
    data={data}
    barSize={20}
    margin={{ bottom: 25, right: 2, left: 0, top : 10 }}
  >
    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
    <XAxis dataKey="name"  axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false}/>
    <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
    <Tooltip  contentStyle={{ borderRadius: "5px", borderColor:"lightgray" , width: "120px" }} />
    <Legend  verticalAlign='top' align='left' wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}}/>
    <Bar dataKey="present" fill="#FAE27C" activeBar={<Rectangle fill="#FFF8DC" stroke="#3B82F6" />}   legendType='circle'  radius={[10,10,0,0]}/>
    <Bar dataKey="absent" fill="#C3EBFA" activeBar={<Rectangle fill="#E0F7FF" stroke="#8B5CF6" />}  legendType='circle' radius={[10,10,0,0]} />
  </BarChart>
  </ResponsiveContainer>
      </div>


     
    </div>
  )
}

export default AttendantChart
