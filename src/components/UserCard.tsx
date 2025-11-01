import React from 'react'
import Image from 'next/image'
const UserCard = ({type}: {type: string}) => {
  return (
    <div className='flex flex-col justify-between odd:bg-lamaSky even:bg-lamaYellow rounded-2xl p-4 max-w-[240px] w-[230px] flex-1'>
      <div className='flex justify-between items-center mb-1'>
        <span className='text-[10px] bg-white px-2 py-1 rounded-full text-green-700'>2024/25</span>
        <Image src='/more.png' alt='' width={20} height={20}/>
      </div>
      <h1 className='text-2xl font-semibold my-4 text-black'>1,234</h1>
      <h2 className='font-medium text-gray-500 capitalize text-sm'>{type}</h2>
    </div>
  )
}

export default UserCard
