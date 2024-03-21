import React, { useEffect, useState } from "react";

function CourseEnroll(props) {
  
  return (
    <div className="flex mt-20 mb-6 p-4 justify-center font-sen">
      <div className="flex flex-col justify-center items-center md:px-16 md:flex-row gap-8">
        <div className="space-y-6 md:w-1/2 ml-10">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            {props.title}
          </h1>
          <p className="text-lg">6 Months & 4 Projects </p>
          <button style={{ boxShadow: "inset -7px 8px 30px rgba(0, 0, 0, 0.5)" }} className="bg-gradient-to-r from-[#7962FA]  to-[#31266f] pl-4 p-3 pr-4 rounded-lg text-[#fff] hover:bg-gradient-to-b hover:bg-transparent hover:from-[#31266f] hover:to-[#7962FA]">
            ENROLL NOW
          </button>
        </div>
        <div className="w-full md:w-1/2 object-cover p-0 md:p-4 flex justify-center">
          <img
            className="rounded-2xl w-4/5 md:w-4/5 h-[300px] object-cover"
            src={props.imgsrc}
            alt=""
            
          />
        </div>
      </div>
    </div>
  );
}

export default CourseEnroll;
