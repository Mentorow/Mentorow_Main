import React from 'react'
import { FaBook } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { HiMiniTrophy } from "react-icons/hi2";
import { Link } from 'react-router-dom';



function CourseCard(props) {
    return (<Link to={"item/"+props.title}>
        <div className="flex justify-center shadow-2xl shadow-slate-800 m-6">
          <div className="font-sen rounded-xl flex flex-col justify-center text-white dark:bg-zinc-900  bg-gradient-to-r from-[#7962FA] via-[#31266F] to-[#7962FA]  p-1">
          <div className="flex p-1  w-[280px] lg:w-[280px] md:w-[280px] sm:w-[380px] flex-col rounded-xl bg-[#000000]">
              <img
                className="h-[200px] lg:h-[150px] md:h-[200px] rounded-md mx-2 my-2 object-cover"
                alt=""
                src={props.imgsrc}
              />
              <div className="flex items-start gap-2 flex-col mx-2 md:mx-4">
                <h2 className="text-lg inline-block p-0 text-white mb-0 mt-0 pt-2">
                  {props.title}
                </h2>
                <div className="flex w-full flex-row items-start justify-between py-0 gap-3 md:gap-2 text-xs sm:text-sm md:text-[10px]">
                  <div className="flex items-center gap-1 sm:gap-1 md:gap-1">
                    <FaBook />
                    <p className="">Lesson : {props.lesson}</p>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <FaUserAlt />
                    <p>Student : {props.students}</p>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <HiMiniTrophy />
                    <p>{props.level}</p>
                  </div>
                </div>
                <button className="mb-4 text-white bg-black border-0 hover:cursor-pointer text-md">
              Know More
            </button>
          </div>
        
        </div>
      </div>
    </div>
    </Link>
  );
};

    
    


export default CourseCard