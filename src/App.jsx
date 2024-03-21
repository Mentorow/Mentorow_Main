import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

import Navbar from "./Components/Navbar";
import Layout from "./Pages/Layout";
import Courses from "./Pages/Courses";
import MentorsSection from "./Pages/MentorsSection";
import ContactPage from "./Pages/ContactPage";
import AboutTheCourse from "./Components/AboutTheCourse";
import CoursesDescriptionPage from "./Pages/CoursesDescriptionPage";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path='item/:title' element={<CoursesDescriptionPage/>}/> 
          <Route path='courses/item/:title' element={<CoursesDescriptionPage/>}/>  {/* Course_item details page navigation */}
          <Route path="/mentors" element={<MentorsSection />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
