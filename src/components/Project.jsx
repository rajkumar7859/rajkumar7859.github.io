import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Tata_1mg from "../assets/images/project-1.png";
import tripBook from "../assets/images/project-2.png";
import GearBest from "../assets/images/project-3.png";
import netmeds from "../assets/images/project-4.png";
import projectSide from "../assets/images/projectSide.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { BsGithub } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import ScrollAnimation from "react-animate-on-scroll";
const Project = () => {
  const projects = [
    {
      img: Tata_1mg,
      name: "Tata 1mg ",
      description:"It’s a indivisible project where I have show my creativity along with frontend and backend integration its Fully Responsive booking web application that allows you to book medicine and health related thing. In this website you can filter, sort hotels by price, rating and reviews.",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://myreactflix.netlify.app",
    },
    {
      img: tripBook,
      name: "Tripbook.com",
      description:"It’s a group project where we've used Next.JS to make the TripBook.com with our creativity along with frontend and backend integration its Fully Responsive booking web application that allows you to book hotels, flights and car rental. In this website you can filter, sort hotels by price, rating and reviews.",
      github_link: "https://github.com/rajkumar7859/strong-cover-1612",
      live_link: "https://tripbook.vercel.app/",
    },
    {
      img: GearBest,
      name: "GearBest.com",
      description:"It’s a group project where we've used HTML ,CSS , & js with our creativity along with frontend and backend integration. In this website you can filter, sort hotels by price, rating and reviews.",
      github_link: "https://github.com/jayvaish/GearBest",
      live_link: "https://luxury-raindrop-e6b139.netlify.app/",
    },
    {
      img: netmeds,
      name: "Netmeds.com",
      description:"It’s a group project where I have show my creativity along with frontend and backend integration it's allows you to book medicine and health related thing. In this website you can filter, sort hotels by price, rating and reviews.",
      github_link:
        "https://github.com/lalitk1997/Construct-Project-Netmeds.com",
      live_link: "https://luminous-jelly-c4e3d7.netlify.app/landing.html",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <ScrollAnimation animateIn="fadeInUp" >
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      </ScrollAnimation>
      <br />
      <ScrollAnimation animateIn="fadeInLeft" delay={0.2*1000} >
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative ">
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
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl ">
                  <img src={project_info.img} alt="" className="rounded-lg hover:shadow-bule-500 hover:scale-105 duration-150" />
                  <h3 className="text-xl mt-4">{project_info.name}</h3>
                  <p className="text-sm " >{project_info.description}</p>
                  <div className="flex gap-3 justify-between my-4">
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
                      Live <TiDocumentText  className="inline mb-2 ml-2 text-[1.5rem] animate-bounce text-blue-400" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg  ml-4">
          <img src={projectSide} alt="projectpng" className="w-full object-cover bg-cyan-600 rounded-xl" />
        </div>
      </div>
</ScrollAnimation>
    </section>
  );
};

export default Project;
