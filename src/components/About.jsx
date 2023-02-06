import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
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
        <ScrollAnimation animateIn="fadeInUp">

        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        </ScrollAnimation>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
        <ScrollAnimation animateIn="fadeInLeft" >
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
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.1*1000} >
              <div className="text-justify leading-7 w-11/12 mx-auto mt-4" >
              <b>Here are a few highlights:</b>
<p>🔹 Full Stack web developer ,</p>
<p>🔹 Interactive Front End as per the design ,</p>
<p>🔹 Redux for state management,</p>
<p>🔹 Good at Data Structures and Algorithms,</p>
              </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.2*1000}>

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
                </ScrollAnimation>
              <br />
              <br />
              <ScrollAnimation animateIn="fadeInLeft" delay={0.3*1000} >
              <a target="_blank" href="https://drive.google.com/file/d/1DOW-990HrV3-6if9hzDT7M5aNI8diMdf/view?usp=sharing">
                <button className="btn-primary">Download CV</button>
              </a>
              </ScrollAnimation>
            </div>
          </div>
          <ScrollAnimation animateIn="fadeInRight" delay={0.2*1000} >

          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt="about image"
                className="w-full object-cover bg-cyan-600 rounded-xl"
                />
            </div>
          </div>
                </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
