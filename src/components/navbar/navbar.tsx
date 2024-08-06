import React from 'react'

const navbar = () => {
  return (
    <div className =  "overflow-hidden">
      <nav className="flex justify-center sm:justify-between items-center flex-wrap px-0 sm:px-[90px] py-[16px] bg-white rounded-lg">
       <div><h1 className="text-[#9333EA] font-bold text-[25px]"> Navbar</h1></div>
      <div >
        <ol className="list-none ml-[5px] flex gap-9 text-center flex-wrap justify-center item-center ">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ol>
      </div>
      </nav>
      </div>
  )
}

export default navbar
