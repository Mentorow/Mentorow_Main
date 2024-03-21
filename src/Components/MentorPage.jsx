import React from "react";
import { mentorDetails } from "../datas";
import linkedin from "/src/assets/linkedin.svg"

// SVG components with mentor images
const SVG1 = ({ mentorImage }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 880 589"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0L880 76.707L773.72 589H47.8261L0 0Z" fill="#9A7BFF" />
    <image href={mentorImage} width="100%" height="120%" y="-10%" />
  </svg>
);

const SVG2 = ({ mentorImage }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 880 589"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M880 0L0 76.707L106.28 589H832.174L880 0Z" fill="#91529B" />
    <image href={mentorImage} width="100%" height="120%" y="-5%" />
  </svg>
);

const SVG3 = ({ mentorImage }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 880 589"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0L880 76.707L773.72 589H47.8261L0 0Z" fill="#357965" />
    <image href={mentorImage} width="100%" height="120%" y="-20%" />
  </svg>
);

const SVG4 = ({ mentorImage }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 880 589"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M880 0L0 76.707L106.28 589H832.174L880 0Z" fill="#4F0147" />
    <image href={mentorImage} width="100%" height="120%" y="-5%" />
  </svg>
);

// MentorPage component
const MentorPage = () => {
  return (
    <>
      <div className="px-6 space-y-12 pt-24 flex flex-col justify-center">
        <div className="text-center ">
          <h1 className="inline-block font-bold text-4xl bg-gradient-to-r from-[#42b774] via-[#4598d2] to-[#de74ae] text-transparent bg-clip-text ">
            Our Mentors
          </h1>
          <p className="text-md">
            Get insider insights from industry experts to help you land your
            dream job with top companies
          </p>
        </div>
        {/* Render mentors */}
        <div className="space-y-10  md:space-y-0 md:space-x-10 py-4 2xl:py-20">
          {mentorDetails.map((mentor, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-full md:w-1/2 ">
                {index % 4 === 0 ? (
                  <SVG1 mentorImage={mentor.image} />
                ) : index % 4 === 1 ? (
                  <SVG2 mentorImage={mentor.image} />
                ) : index % 4 === 2 ? (
                  <SVG3 mentorImage={mentor.image} />
                ) : (
                  <SVG4 mentorImage={mentor.image} />
                )}
              </div>
              <div className="text-left mx-20  max-w-xs space-y-2 pt-4 md:w-1/2 ">
                <p
                  className={`font-bold text-xl md:text-3xl ${
                    index % 4 === 0
                      ? "text-[#9A7BFF]" // SVG1 background color
                      : index % 4 === 1
                      ? "text-[#91529B]" // SVG2 background color
                      : index % 4 === 2
                      ? "text-[#357965]" // SVG3 background color
                      : "text-[#4F0147]" // SVG4 background color
                  }`}
                >
                  {mentor.name}
                </p>
                <p className="font-bold text-lg">{mentor.position}</p>
                <p className="text-md text-left">{mentor.description}</p>
                <img className=""
                  width={20}
                  src={linkedin}
                  alt="linkedin icon"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MentorPage;