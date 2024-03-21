import React from "react";
import mentorow from "../assets/logo.png";

function AboutTheCourse(props) {
        
  return (
    <div className="flex mt-20 mb-6  bg-gradient-to-r from-[#7962FA]  to-[#31266f] p-4">
      <div className="flex flex-col justify-center items-center px-16 md:flex-row gap-6 ">
        <div className="space-y-2 md:w-1/2">
          <div className="flex gap-4">
            <h1 className="text-3xl text-white  font-bold tracking-wide ">
              About the Course
            </h1>
          </div>
          <p className=" text-white mr-2 pt-2 text-lg leading-6 font-normal md:line-clamp-5">
           
            "{props.details}"
           
          </p>
        </div>
        <div className="w-full md:w-1/2 object-cover p-0 md:p-4">
          <div className="w-full h-[350px] bg-black flex justify-center items-center  rounded-3xl ">
            <img className="object-cover" src={mentorow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTheCourse;
