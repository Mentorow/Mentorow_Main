import { IoStarOutline } from "react-icons/io5";
import { FaRegFile } from "react-icons/fa";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { FiLoader } from "react-icons/fi";

export const InsideCourse = () => {
  const learn = [
    {
      icon: <IoStarOutline />,
      title: "Mentor",
      description:
        "Get certified with our premium courses and get started on your journey to a brand new career altogrether",
    },
    {
      icon: <FaRegFile />,
      title: "Certifications",
      description:
        "Get certified with our premium courses and get started on your journey to a brand new career altogrether",
    },
    {
      icon: <MdOutlinePersonAddAlt />,
      title: "Students Community",
      description:
        "Get certified with our premium courses and get started on your journey to a brand new career altogrether",
    },
    {
      icon: <FiLoader />,
      title: "Live session",
      description:
        "Get certified with our premium courses and get started on your journey to a brand new career altogrether",
    },
  ];

  return (
    <div className=" max-w-[1200px] mx-auto px-10">
      <div className=" flex flex-col justify-start">
        <h1 className="text-3xl sm:text-4xl  leading-[2] my-[0.6em] ">
          <b className="py-[10px] px-[15px]">Why learn with us</b>
        </h1>

        <div className=" flex flex-wrap py-[10px]">
          {learn.map((data) => (
            <div key={data.title} className="md:w-[50%] w-screen p-[10px] h-[25%]">
              <i className="text-blue-800 text-2xl">
                {data.icon}
              </i>
              <h1 className="text-[1.6em] md:text-[1.73em] my-[0.5em]">
                {data.title}
              </h1>
              <p className="text-[1.07em] mb-[16px] leading-[2]">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};