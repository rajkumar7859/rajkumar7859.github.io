import React from "react";
import GitHubCalendar from "react-github-calendar";
// import {ReactTooltip} from "react-tooltip";
import { BsGithub } from "react-icons/bs";
import { BiTargetLock } from "react-icons/bi";
import ScrollAnimation from "react-animate-on-scroll";
// import GithubCal from "./GithubCal";
const  GithubStatus= () => {

  const selectLastHalfYear = (contributions) => {
            const currentYear = new Date().getFullYear();
            const currentMonth = new Date().getMonth();
            const shownMonths = 8;
        
            return contributions.filter((day) => {
              const date = new Date(day.date);
              const monthOfDay = date.getMonth();
        
              return date.getFullYear() === currentYear && monthOfDay > currentMonth - shownMonths && monthOfDay <= currentMonth;
            });
          };

  return (
    <section id="hireme" className="py-10 px-3 text-white">

<ScrollAnimation animateIn="fadeInUp" >
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Github Status</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      </ScrollAnimation>

       <div name="gitstats" className="bg-gradient-to-b to-gray-900  w-full text-white h-[100%] pt-10">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

        <div className="pb-8 ">
        <ScrollAnimation animateIn="fadeInLeft"   >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 hover:border-blue-500 duration-300">
            {"My Github Stats"} <BsGithub className="inline mb-2 ml-2 animate-bounce text-blue-400"></BsGithub>
          </p>
          <p className="py-6">Check out my works below</p>
        </ScrollAnimation>
          <div className="flex flex-col justify-center items-center gap-4">
             <ScrollAnimation animateIn="fadeInUp" delay={0.1*1000}>
            <div className="w-full grid grid-cols-1  md:grid-cols-2   md:grid-rows-2 gap-8 text-center justify-center ">
              <img
                className="w-[90%] mx-auto hover:shadow-bule-500 hover:scale-105 duration-150"
                title="🔥 Get streak stats for your profile at git.io/streak-stats"
                alt="rajkumar streak"
                src="https://streak-stats.demolab.com?user=rajkumar7859&theme=nightowl&border_radius=4.8&date_format=j%20M%5B%20Y%5D"
                />

              <img
                className="w-[90%] mx-auto hover:scale-105 duration-150"
                alt="rajkumar Github Stats"
                src="https://github-readme-stats.vercel.app/api?username=rajkumar7859&show_icons=true&count_private=true&theme=nightowl&border_radius=4.8&date_format=j%20M%5B%20Y%5D"
                />
              <img
                className="md:w-[40%] w-[90%] mx-auto md:col-span-2 hover:scale-105 duration-150"
                alt="rajkumar's Top Languages"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=rajkumar7859&langs_count=8&count_private=true&layout=compact&theme=nightowl&border_radius=4.8&date_format=j%20M%5B%20Y%5D"
                />
            </div>
                </ScrollAnimation>
            <br />
            <ScrollAnimation animateIn="fadeInUp" delay={0.3*1000} >

            <div className="w-[90%] border-2 flex-col justify-center items-center text-center sm:block hidden border-white rounded-md p-4 bg-[#112038]">
              <div className="flex justify-between">
              <BiTargetLock size={20} className='animate-spin-slow'></BiTargetLock>
                <h2 className="capitalize font-bold text-2xl text-purple-400 ">My contributions In GitHub </h2>
                <BiTargetLock size={20} className='animate-reverse-spin'></BiTargetLock>
              </div>
              <GitHubCalendar 
                style={{ width: "80%", margin: "auto", marginTop: "10px" }}
                color="#F15412"
                showWeekdayLabels={"true"}
                blockRadius={2}
                username="rajkumar7859" 
                blockSize={20} 
                fontSize={16} 
                >
                {/* <ReactTooltip delayShow={20} html /> */}
              </GitHubCalendar>
              <div className="flex justify-between">
              <BiTargetLock size={20} className='animate-spin-slow'></BiTargetLock>
                <h2 className="capitalize font-bold text-cyan-400"></h2>
                <BiTargetLock size={20} className='animate-reverse-spin'></BiTargetLock>
              </div>
            </div>
                </ScrollAnimation>
            <br/>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default GithubStatus;
