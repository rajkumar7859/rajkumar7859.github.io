import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Tata_1mg from "../assets/images/project-1.png";
import tripBook from "../assets/images/project-2.png";
import GearBest from "../assets/images/project-3.png";
import netmeds from "../assets/images/project-4.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { BsGithub } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";

const Project = () => {
  const projects = [
    {
      img: Tata_1mg,
      name: "Tata 1mg",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://myreactflix.netlify.app",
    },
    {
      img: tripBook,
      name: "Tripbook.com",
      github_link: "https://github.com/rajkumar7859/strong-cover-1612",
      live_link: "https://tripbook.vercel.app/",
    },
    {
      img: GearBest,
      name: "GearBest.com",
      github_link: "https://github.com/jayvaish/GearBest",
      live_link: "https://luxury-raindrop-e6b139.netlify.app/",
    },
    {
      img: netmeds,
      name: "Netmeds.com",
      github_link:
        "https://github.com/lalitk1997/Construct-Project-Netmeds.com",
      live_link: "https://luminous-jelly-c4e3d7.netlify.app/landing.html",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3 justify-between">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      // className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      GitHub <BsGithub className="inline mb-2 ml-2 text-[1.5rem] animate-bounce text-blue-400"></BsGithub>
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      // className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live <TiDocumentText className="inline mb-2 ml-2 text-[1.5rem] animate-bounce text-blue-400" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={"n"} alt="projectpng" />
        </div>
      </div>
    </section>
  );
};

export default Project;


// {
//         screenShot:tata1mg,
//         title:" ",
//         deploy:" ",
//         github:"",
//         description:"Tata 1mg is an online pharmacy website where all types of medicine and health and care products are available.",
//     },
//     {
//         screenShot:gearbest,
//         title:" ",
//         deploy:"",
//         github:"",
//         description:"GearBest is an online home, appliances and electronic, etc shopping website.",
//     },
//     {
//         screenShot:netmads,
//         title:"",
//         deploy:"",
//         github:"https://github.com/lalitk1997/Construct-Project-Netmeds.com",
//         description:"Netmeds is an online pharmacy website where all types of medicine and health and care products are available.",
//     },
//     {
//         screenShot:interntheory,
//         title:"Interntheory",
//         deploy:"google.com",
//         github:"https://github.com/rajkumar7859/reach-value-9973/tree/master/interntheory.com",
//         description:"Interntheory is an online education, jobs, and internships platform where you get all professional jobs and internships and you will get multiple online courses also and many more.",
//     },