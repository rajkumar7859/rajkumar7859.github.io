import React from "react";
import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {FiMail } from "react-icons/fi"
import {ImWhatsapp } from "react-icons/im"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notifyError, notifySuccess } from "./Toaster";



let initState = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
 
  const contact_info = [
    { logo: <FiMail />, text: "rajkumarvishwakarma7859@gmail.com" },
    { logo: <ImWhatsapp />, text: "8600366788" },
  ];


  const [data, setData] = useState(initState);

  const send = Boolean(data.email) && Boolean(data.name) && Boolean(data.message);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };


  const formSubmit = (e) => {
    e.preventDefault();
    if (!send) {
      // alert("Please Fill The All Input Feilds")
      notifyError()
    } else {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
      fetch("https://getform.io/f/83489b13-e41c-4b04-9432-bcd169e9c828", {
        method: "POST",
        body: formData,
      }).then(() => setData({ name: "", email: "", message: "" }));
      // alert("Message Has Been Sent Successfully");
      notifySuccess()
    }
  };


  return (
    <section id="contact" className="py-10 px-3 text-white">

      <div className="text-center mt-8">
      <ScrollAnimation  animateIn="fadeInUp" delay={0.1*1000}>
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay={0.2*1000} >

        <div
          className="mt-16 flex md:flex-row flex-col
          gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
          >
          <form  onSubmit={formSubmit} className="flex flex-col flex-1 gap-5">
            <input onChange={handleChange} type="text" placeholder="Your Name" value={data.name} name="name" />
            <input onChange={handleChange} type="Email" placeholder="Your Email Address" value={data.email} name="email" />
            <textarea onChange={handleChange} placeholder="Your Message" name="message" rows={10} value={data.message} ></textarea>
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
              key={i}
              className="flex flex-row  
              text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                {contact.logo}
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
            </ScrollAnimation>
      </div>
      <ToastContainer  position="top-center" autoClose={10000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </section>
  );
};

export default Contact;
