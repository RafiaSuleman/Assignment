import React from "react";

const center = () => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-flow-row">
      <div className="bg-white shadow-lg rounded-lg mt-[30px] px-10 py-10 h-fit">
        <div className="mb-[20px]">
          <h1 className="text-xl font-bold ">Categories</h1>
        </div>
          <ul>
            <li>
              <a
                href=""
                className="block p-2 px-3  mb-4 rounded font-medium hover:bg-indigo-100  bg-[#F3F4F6] text-black"
              >
                Category 1
              </a>
            </li>
            <li>
              <a
                href=""
                className="block p-2 px-3  mb-4 rounded font-medium hover:bg-indigo-100  bg-[#F3F4F6] text-black"
              >
                Category 2
              </a>
            </li>
            <li>
              <a
                href=""
                className="block p-2 px-3  mb-4 rounded font-medium hover:bg-indigo-100  bg-[#F3F4F6] text-black"
              >
                Category 3
              </a>
            </li>
            <li>
              <a
                href=""
                className="block p-2 px-3  mb-4 rounded font-medium hover:bg-indigo-100  bg-[#F3F4F6] text-black"
              >
                Category 4
              </a>
            </li>
          </ul>
        
      </div>

      <div className="col-span-2">
        <div className="  bg-white shadow-lg rounded-lg mt-[30px] px-10 py-10 ml-[20px]">
          <div>
            <h1 className="text-xl font-bold">Feature Content</h1>{" "}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="border border-zinc-100 h-48 rounded-lg px-4 py-2 bg-[#E5E7EB] flex justify-center items-center">
              Featured Image 1
            </div>

            <div className="border border-zinc-100 h-50 rounded-lg px-4 py-2 bg-[#E5E7EB] flex justify-center items-center">
              Feature Image 2
            </div>
          </div>
        </div>
        <div className="lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ml-[10px] flex flex-row">
          <div className="flex px-3 py-3">
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
              <img
                className="w-full"
                src="/sun.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! 
                </p>
              </div>
            </div>
          </div>
     
        <div className="flex px-3 py-3">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src="/sun.jpg" alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia
            </p>
        </div>
        
    </div>
</div>
<div className="flex px-3 py-3">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src="/sun.jpg" alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </p>
        </div>
    </div>
</div>
</div>
      </div>
    </div>
  );
};

export default center;
