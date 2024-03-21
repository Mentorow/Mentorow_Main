import React from "react";

function TakeYourFirstStep() {
  return (
    <div className="text-center space-y-5 w-full bg-gradient-to-r from-[#7962FA]  to-[#31266f] py-16">
      <h1 className="text-3xl font-bold text-white">
        Take your first step for a great career
      </h1>
      <button style={{ boxShadow: "inset -7px 8px 30px rgba(0, 0, 0, 0.5)" }} className=" bg-gradient-to-r from-[#7962FA]  to-[#31266f] hover:bg-gradient-to-b hover:bg-transparent hover:from-[#31266f] hover:to-[#7962FA] pl-4 p-3 pr-4 rounded-lg text-[#fff]">
        ENROLL NOW
      </button>
    </div>
  );
}

export default TakeYourFirstStep;
