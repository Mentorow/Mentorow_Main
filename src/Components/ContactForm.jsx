import React from "react";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { TfiLocationPin } from "react-icons/tfi";
import { MdOutlineMail } from "react-icons/md";

function ContactForm() {
  return (
    <div className="bg-black flex  justify-center items-center h-auto pt-20 pb-10">
      {/* card div */}
      <div className=" flex  justify-center items-start pt-10  bg-[#8f769f2b] h-[100%] w-[80%] rounded-xl ">
        <div className="flex flex-col md:flex-row items-center md:gap-10 w-[90%]">
          <div className=" w-[80%] md:w-2/3 space-y-6 py-8  ">
            <h1 className="text-4xl font-bold text-white [font-family:'Sen',Helvetica] ">
              Get in<span className="text-[#7962FA]"> Touch</span>
            </h1>
            <h1 className=" text-[12px] font-bold text-white [font-family:'Montserrat',Helvetica] ">
              Feel free to reach us with your queries
            </h1>
            {/* form from  */}

            <form className="flex flex-col" action="">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Name  *"
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#8f769f2b]  text-gray-100 leading-tight focus:outline-none focus:shadow-outline mb-4"
              />

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#8f769f2b]  text-gray-100 leading-tight focus:outline-none focus:shadow-outline mb-4"
                type="email"
                required
                placeholder="Email  *"
                name=""
                id=""
              />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#8f769f2b]  text-gray-100 leading-tight focus:outline-none focus:shadow-outline mb-4"
                type="number"
                required
                placeholder="Phone number  *"
                name=""
                id=""
              />
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#8f769f2b] text-gray-100 leading-tight focus:outline-none focus:shadow-outline mb-4"
                placeholder="Enquiry / Message"
                name=""
                id=""
              />

              <select
                id="dropdown"
                name="dropdown"
                className=" shadow appearance-noe border rounded w-full py-2 px-3 bg-[#8f769f2b]  text-white leading-tight focus:outline-none focus:shadow-outline mb-4"
              >
                <option value="" disabled selected>
                  How did you find us? 
                </option>
                <option className="text-black font-semi " value="option1">
                  Instgram
                </option>
                <option className="text-black" value="option2">
                  Youtube
                </option>
                <option className="text-black" value="option3">
                  other
                </option>
              </select>
              {/* button from */}
              <button className="bg-gradient-to-r from-[#9A7BFF] to-violet-950 hover:bg-violet-900 text-white font-bold py-2 mt-6 px-4 rounded-full focus:outline-none focus:shadow-outline h-12 w-full">
                SEND
              </button>
              {/* button to */}
            </form>
            {/* form to */}

            {/* contact strip from */}
            <div className="flex flex-col md:flex-row md:gap-5 space-y-3 pt-6 md:pt-2 justify-center items-center gap-6">
              <div className="flex flex-col md:flex-row text-center md:text-left justify-center items-center space-x-2 text-[27px]  text-white [font-family:'Montserrat',Helvetica] space-y-2">
                <LiaPhoneVolumeSolid className="text-3xl md:text-2xl" />

                <div className="flex flex-col text-[16px] md:text-[11px] ">
                  <h4 className="font-bold pb-2 md:pb-1">PHONE</h4>
                  <p className="font-normal">9745680111</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row text-center md:text-left justify-center items-center space-x-2 text-[27px]  text-white [font-family:'Montserrat',Helvetica] space-y-2">
                <TfiLocationPin className="text-3xl md:text-2xl" />
                <div className="flex flex-col  text-[16px] md:text-[10px]">
                  <h4 className="font-bold pb-2 md:pb-1">LOCATION</h4>
                  <p className="font-normal"> Everglow Business Center</p>
                  <p className="font-normal">
                    2nd Floor-Seaport-Airport Road,CSEZ.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row text-center  md:text-left justify-center items-center space-x-2 text-[27px]  text-white [font-family:'Montserrat',Helvetica] space-y-2">
                <MdOutlineMail className="text-3xl md:text-2xl" />
                <div className="flex flex-col  text-[16px] md:text-[10px]">
                  <h4 className="font-bold pb-2 md:pb-1">EMAIL</h4>
                  <p className="font-normal">contact@mentorow.com</p>
                </div>
              </div>
            </div>
            {/* contact strip to */}
          </div>
          <div className="py-10 w-full md:w-1/2 flex justify-center items-center">
            {/* map from */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.053578115898!2d76.3415503!3d10.012433300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d7118c0d549%3A0x24f1a5285508b05a!2sEverglow%20business%20centre!5e0!3m2!1sen!2sin!4v1709698509399!5m2!1sen!2sin"
              className="h-64 w-full md:h-[350px]  md:mb-[130px] rounded-xl"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
            {/* map to */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
