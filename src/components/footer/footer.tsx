import React from 'react'

const footer = () => {
  return (
    <div className='flex justify-center sm:justify-between items-center flex-wrap px-0 px-[20px] py-[16px] bg-white rounded-lg mt-[30px]'>
      <h1>@ 2024 Layout. All rights reserved.</h1>
      <div>
      <ol className='list-none ml-[5px] flex gap-9 text-center flex-wrap justify-center item-center'>
        <li><a href='#'>Privacy Policy</a></li>
        <li><a href='#'>Terms Of Service</a></li>
        </ol>
      </div>
      
    </div>
  )
}

export default footer
