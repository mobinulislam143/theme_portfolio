import React, { useRef, useState } from "react";
// import GoogleMapReact from 'google-map-react';
import { Link } from "react-router-dom";
import { IoArrowRedoCircle } from "react-icons/io5";
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import clicksond from '../../assets/clicksound.mp3'
import useSound from 'use-sound';





const Contact = () => {
  const [play] = useSound(clicksond)


  const [message, setMessage] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    play()


    const name = formRef.current.from_name.value.trim();
    const email = formRef.current.from_email.value.trim();
    const userMessage = formRef.current.message.value.trim();

    if (!name || !email || !userMessage) {
      toast.error("Please fill in all fields!");
      return; // Stop the form submission
    }

    setMessage(true);
    emailjs
      .sendForm(
        'service_78u6hyn',
        'template_u6748rs',
        formRef.current,
        'riMlUvx_eS5ivAWtU'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          toast.error("An error occurred, please try again.");
        }
      );

    e.target.reset();
  }



  return (
    <div className="h-[600px] card bg-bg_tertiary shadow-lg rounded-md  overflow-y-auto overflow-x-hidden">

        
        <div className="p-5">
          <h1 className="text-text_color_light text-xl font-bold">
            Get <span className="text-bg_secondary">in touch</span>
          </h1>
        </div>
        <hr />

      
        <div className="px-4 pb-5">
          <form ref={formRef} onSubmit={handleSubmit}>


            <div className="flex items-center gap-2 py-5">
              <input type="text" name="from_name" placeholder="Full Name" className="border-0 focus:outline-none  h-10 outline-none text-bg_secondary bg-bg_primary hover:shadow-md hover:shadow-bg_secondary px-3 w-full border-b focus:border-b-2 focus:border-bg_secondary transition-all" />
              <input type="email" placeholder="e-mail" name="from_email" className="border-0 focus:outline-none h-10 outline-none text-bg_secondary bg-bg_primary hover:shadow-md hover:shadow-bg_secondary px-3 w-full border-b focus:border-b-2 focus:border-bg_secondary transition-all" />
            </div>
          
            <textarea placeholder="Your message" name="message"
              className="border-0 focus:outline-none outline-none text-bg_secondary placeholder-gray-500 border-b w-full bg-bg_primary hover:shadow-md hover:shadow-bg_secondary px-3 focus:border-b-2 focus:border-bg_secondary transition-all" id=""></textarea>

            <hr />
            <button type="submit" className="text-lg flex items-center gap-2 text-text_color_light hover:text-bg_secondary py-3 cursor-pointer">Send message <IoArrowRedoCircle /></button>
            {message && <span>Message sent successfully</span>}

          </form>
        </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Contact;
