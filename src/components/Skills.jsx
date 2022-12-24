import React from "react";
import { SiRedux ,SiCss3 ,SiNodedotjs ,SiJavascript ,SiReact ,SiExpress ,SiChakraui ,SiTailwindcss, SiPostman, SiMongodb } from "react-icons/si"
import { FaHtml5 } from "react-icons/fa"
import { TbBrandNextjs } from "react-icons/tb"
import ScrollAnimation from "react-animate-on-scroll";

const Skills = () => {
  const skills = [
    {
      logo: <FaHtml5 />,
      level: "HTML",
      count: 0,
    },
    {
      logo: <SiCss3 />,
      level: "CSS",
      count: 0,
    },
    {
      logo: <SiJavascript />,
      level: "JavaScript",
      count: 0,
    },
    {
      logo: <SiReact />,
      level: "ReactJs",
      count: 0,
    },
    {
      logo: <SiRedux />,
      level: "Redux",
      count: 0,
    },
    {
      logo: <SiChakraui />,
      level: "Chakra-Ui",
      count: 0,
    },
    {
      logo: <SiTailwindcss />,
      level: "Tailwind",
      count: 0,
    },
    {
      logo: <SiNodedotjs />,
      level: "NodeJs",
      count: 0,
    },
    {
      logo: <SiExpress />,
      level: "ExpressJs",
      count: 0,
    },
    {
      logo: <SiMongodb />,
      level: "MongoDB",
      count: 0,
    },
    {
      logo: <TbBrandNextjs />,
      level: "Next js",
      count: 0,
    },
    {
      logo: <SiPostman />,
      level: "Postman",
      count: 0,
    },
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">

      <div className="mt-8 text-gray-100 text-center">
      <ScrollAnimation animateIn="fadeInUp" >
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" delay={0.2*1000} >
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl hover:bg-gray-900 shadow-lg shadow-blue-500/50"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                 {skill.logo}
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Skills;
