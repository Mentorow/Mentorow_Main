import React from "react";

const Syllabus = () => {
  const Topics = [
    {
      title:
        "Introduction to python, Features, Application, Download & Installation",
    },
    { title: "Command Line Arguments & Python Comments" },
    { title: "Introduction to data types in python - List" },
    {
      title:
        "Tuple Introduction, Constructor, Accessing tuple, Indexing & Slicing",
    },
    {
      title:
        " Loop through tuple, Using enumerate( ), join( ), List comprehension",
    },
    {
      title:
        " Introduction to Dictionary, Creating & Accessing nested dictionary, Using delete functions",
    },
    {
      title:
        "Introduction to Set, Append set values, update & remove set values, Boolean concept",
    },
    { title: "Python operators - Arithmetic, Comparison" },
    {
      title:
        " Python Operators - Assignment, Logical, Identity, Membership, Bitwise",
    },
    { title: "Python Loop - While & For loop, Pattern printing" },
    { title: "Control Statements - If, If else, Continue, Pass, Match" },
    { title: " Date & Time in python, Files in I/O" },
    { title: "Functions & Modules , Functions in python" },
    { title: "Function & Modules - Local & Global variables, Math & Random" },
  ];
  return (
    <div className=" flex flex-col p-8 lg:p-28 justify-center bg-black">
      <h1 className="text-white text-center text-3xl mb-8 font-light">
        {" "}
        COURSE CURRICULUM
      </h1>
      <div className=" p-5 bg-gray-100 rounded-t-md">
        <div className="bg-gray-200 shadow-inner p-3">
          <h1 className="text-black text-3xl">Python Full Stack</h1>
        </div>
        <div className="bg-white border rounded-sm p-4"></div>
      </div>

    
{Topics.map((topics,index) => (
  
         <div key={index} className="bg-white border-t border-b-gray-300 p-4">
    <p className="text-black">{topics.title}</p>
  </div>

    
 
))}
</div>

  );
};

export default Syllabus;