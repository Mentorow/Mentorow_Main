import React from 'react'
import CourseEnroll from '../Components/CourseEnroll'
import AboutTheCourse from '../Components/AboutTheCourse'
import { InsideCourse } from '../Components/InsideCourse'
import TakeYourFirstStep from '../Components/TakeYourFirstStep'
import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Course_Details from "../Components/CourseDetails";
import Syllabus from '../Components/Syllabus'

function CoursesDescriptionPage() {
  const { title } = useParams();
  const datas = Course_Details.slice(0, 7);
  const [data, setData] = useState(datas);
  let course = datas.filter((data) => data.title == title);

  useEffect(() => {
    // console.log(datas);
    console.log("course is:" + course[0].title);
  }, [title]);
  return (
    <div>
        <CourseEnroll title={course[0].title} imgsrc={course[0].imgsrc}/>
        <AboutTheCourse details={course[0].details}/>
        <InsideCourse/>
        <Syllabus/>
        <TakeYourFirstStep/>
    </div>
  )
}

export default CoursesDescriptionPage