import React from "react";
import aboutImg from "../assets/images/about.png";
const About = () => {
  const info = [
    { text: "DSA problem", count: "500" },
    { text: "Completed Projects", count: "04" },
    { text: "Coding hours", count: "1200" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              Analytical, Full Stack web developer
professional with real-time experience in
technical projects covering and capable to
create production-ready websites with
React Js, Redux on the frontend and Node
Js, Express Js on the backend, product
implementation, and technical support.
Special expertise in assessing risk and
translating innovative ideas into
technology solutions.
              </p>
              <div className="text-justify leading-7 w-11/12 mx-auto mt-4" >
              <b>Here are a few highlights:</b>
<p>🔹 Full Stack web developer ,</p>
<p>🔹 Interactive Front End as per the design ,</p>
<p>🔹 Redux for state management,</p>
<p>🔹 Good at Data Structures and Algorithms,</p>
              </div>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="./src/assets/Rajkumar_Vishwakarma_Resume.pdf" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt="about image"
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
