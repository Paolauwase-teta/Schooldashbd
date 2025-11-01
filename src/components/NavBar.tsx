import Image from 'next/image'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
        {/* Input field*/}
      <div className='hidden md:flex items-center gap-2 rounded-full text-xs ring-[1.5px] ring-gray-300 px-3 py-2'>
        <Image src="/search.png" alt="Search" width={20} height={20}/>
        <input type="text" placeholder="Search..." className='text-black w-[200px] bg-transparent p-1 outline-none' ></input>
      </div>

       {/* icon and profile */}
       <div className='flex items-center justify-center gap-4 w-full sm:justify-end'>
        <div className='bg-white rounded-full w-8 h-8 flex items=center justify-center cursor-pointer'>
             <Image src="/message.png" alt='profile' width={30} height={30}/>
        </div>
        <div className='bg-white rounded-full w-8 h-8 flex items-cente justify-center cursor-pointer relative ring-1  ring-gray-400'>
             <Image src="/announcement.png" alt='profile' width={30} height={30}/>
             <div className='bg-purple-600 absolute -top-3 -right-3 w-4 h-4 flex items-center justify-center rounded-full'>1</div>
        </div>
        
        <div className='flex flex-col'>
             <span className='text-sm font-medium text-gray-600'>John Doe</span>
             <span className='text-[10px] font-medium text-right text-gray-400'>Admin</span>
        </div>
        <Image src="/avatar.png" alt='avatar' className='rounded-full ' width={36} height={36}/>
       </div>
      
    </div>
  )
}

export default NavBar
