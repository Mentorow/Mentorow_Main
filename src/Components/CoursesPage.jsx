import React from "react";
import { useEffect, useState } from "react";
import Course_Details from "./CourseDetails";
import CourseCard from "./CourseCard";
import { ImSearch } from "react-icons/im";
import ReactPaginate from "react-paginate";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";

const CoursesPage = () => {
  const datas = Course_Details.slice(0, 7);
  const [data, setData] = useState([]);
  const [searchdata, setSearchdata] = useState("");
  const [filterdata, Setfilterdata] = useState(datas);
  const [language, setlanguage] = useState("");
  const [lesson, setLesson] = useState("");

  // pagination

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5; // Number of items to display per page

  const pageCount = Math.ceil(filterdata.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  const totalPages = Math.ceil(filterdata.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filterdata.slice(startIndex, endIndex);
  const isNextButtonDisabled = currentPage === totalPages;

  useEffect(() => {
    setData(datas);
  }, []);

  const reset = () => {
    setSearchdata("");
    setlanguage("");
    setLesson("All");
  };
  const makeChange = (e) => {
    const field = e.target.value.toLocaleLowerCase();
    setSearchdata(field);
  };

  useEffect(() => {
    let filteredData = datas;

    if (searchdata) {
      filteredData = filteredData.filter((item) =>
        item.title.toLowerCase().includes(searchdata.toLowerCase())
      );
    }

    if (language) {
      filteredData = filteredData.filter((item) => item.title === language);
    }

    if (lesson && lesson !== "All") {
      filteredData = filteredData.filter(
        (item) => item.lesson.toString() === lesson
      );
    }

    Setfilterdata(filteredData);
  }, [searchdata, language, lesson]);

  //  className="translate-x-8 translate-y-3 text-lg text-[#7962fa] "
  return (
    <div className="py-24 bg-black">
      <h1 className="text-center text-white text-4xl font-bold">Courses</h1>
      <form className="my-8">
        <div className="relative flex justify-center">
          <ImSearch className="translate-x-8 translate-y-3 text-xl md:text-lg text-[#7962fa] " />
          <input
            onChange={makeChange}
            placeholder=" Find a course"
            className={`py-2 border-2 bg-transparent text-white border-[#7962FA] outline-none 
         text-md rounded-full block
           w-[628px] md:w-[528px] p-2.5 px-10 placeholder:text-sm shadow-xl`}
          />
        </div>
      </form>
      <div className="flex flex-wrap gap-6 md:space-x-8 md:gap-12 lg:gap-28 justify-center pb-6 sm:pb-12 ">
        <div className="w-[280px] md:w-[200px] flex text-center ">
          <div className="w-[130px] md:w-[180px] text-white h-10 bg-[#7962FA] rounded-l-full pt-2.5 pl-2 pr-3 md:text-[14px] text-center">
            Reader level
          </div>
          <select
            className="rounded-r-full w-[150px] bg-black  text-white border-r-2 border-t-2 border-b-2 border-[#7962FA] pl-3 pr-3 outline-none"
            onChange={(e) => setLesson(e.target.value)}
            value={lesson}
          >
            <option>All</option>
            <option>7</option>
          </select>
        </div>
        <div className="w-[280px] md:w-[200px]  flex text-center">
          <div className="w-[180px] text-white h-10 bg-[#7962FA] rounded-l-full pt-2.5 pl-2 pr-3 md:text-[14px]">
            Language{" "}
          </div>
          <select
            className="rounded-r-full w-[150px] bg-black  text-white border-r-2 border-t-2 border-b-2 border-[#7962FA] pl-3 pr-3 outline-none"
            onChange={(e) => setlanguage(e.target.value)}
            value={language}
          >
            <option>All</option>
            <option>Digital Marketing</option>
            <option>MERN Stack Development</option>
            <option>Python Full Stack</option>
          </select>
        </div>
        <div className="w-[280px] md:w-[200px]">
          <button
            className="w-full text-white h-10 bg-[#7962FA] rounded-full"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>

      {/* <button onClick={makeChange} >Search</button> */}
      {filterdata.length > 0 ? (
        <div className=" text-center flex flex-wrap flex-row justify-center md:gap-6">
          {currentItems.map((data) => (
            <CourseCard
              key={data.index}
              index={data.index}
              title={data.title}
              lesson={data.lesson}
              imgsrc={data.imgsrc}
              students={data.students}
              level={data.level}
            />
          ))}
        </div>
      ) : (
        <h2 className="text-white text-center">Not found!!!</h2>
      )}

      <ReactPaginate
        previousLabel={
          <span className="w-10 h-10 flex items-center justify-center bg-white text-[#7962fa] rounded-full">
            <BiSolidChevronLeft />
          </span>
        }
        nextLabel={
          <span className="w-10 h-10 flex items-center justify-center bg-white text-[#7962fa] rounded-full">
            <BiSolidChevronRight />
          </span>
        }
        breakLabel={<span className="mr-4">...</span>}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="flex items-center justify-center gap-3 mt-6"
        activeClassName="bg-[#7962fa] shadow-2xl shadow-slate-800 text-2xl"
        pageClassName="block w-10 h-10 border border-solid flex items-center text-md justify-center rounded-full p-2"
        nextLinkClassName={isNextButtonDisabled ? 'text-gray-400 cursor-not-allowed' : 'text-blue-500 font-bold'} // Add your Tailwind CSS classes
        nextClassName={isNextButtonDisabled ? 'cursor-not-allowed' : ''} // Add your Tailwind CSS classes
        disabledClassName={'opacity-50 cursor-not-allowed'} // Add your Tailwind CSS classes
      />
    </div>
  );
};

export default CoursesPage;
