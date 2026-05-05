import React from 'react'
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


function PortFolio() {
  return (
    <div>
        <div className='sticky top-0 z-50 bg-black text-white h-20 flex space-x-42'>
          <h1 className='mx-10 my-1 text-green-800 font-bold text-5xl'>Sujith. </h1>
          <div className=' mx-50 py-3 flex space-x-8'>
          <p className='hover:text-green-300 text-3xl' >ABOUT</p>
          <p className='hover:text-green-300 text-3xl'>SKILLS</p>
          <p className='hover:text-green-300 text-3xl'>PROJECT</p>
          <p className='hover:text-green-300 text-3xl'>CONTACT</p>
          </div>
          <h2 className='font-bold text-black bg-green-300  mx-20 my-4 text-center h-10 w-30 border-5 rounded-xl'>HIRE ME</h2>
        </div>
        <section className='bg-gray-900 py-30'>
          <div className='mx-40  flex space-x-7'>
          <h1 className=' text-9xl text-white font-bold'>Hi I'm </h1> <h1 className=' text-green-400 text-9xl font-bold'>Sujith Kumar</h1>
         </div> 
         <div className='my-5'>
          <p className='justify-items-center text-gray-300 text-center text-4xl '>Crafting digital experiences through elegant code and high-</p>
          <p className='text-center text-gray-300 text-4xl '>performance Ui design</p>
          </div>
          <div className=' mx-90 my-10  flex  text-center '>
            <p className='cursor-pointer hover:text-black bg-green-300 text-2xl mx-20 my-3 py-3 px-10 h-15 w-60 rounded-xl'>View my work</p>
            <p className=' cursor-pointer text-white  bg-black text-2xl mx-20 my-3 py-3 px-10 h-15 w-50 rounded-xl'>Let's Talk</p>
          </div>
        </section>
        <section className='flex bg-black'>
          <div className='mx-40'>
          <h1  className='my-5 text-white text-3xl font-bold'>ABOUT ME</h1>
          <div className='py-5'>
          <p  className='text-white text-2xl ms'>Iam a passionate with over 5 years of experience building modern web applications.
            I specialize in turning complexproblems into simple ,beautiful,and inuitive designs. </p>
            </div>
            <div className='my-10 rounded-xl bg-gray-900 shadow-lg h-30 w-150'>
            <p className='font-bold text-xl text-green-800'>Education</p>
            <p className='text-white text-xl'>B.E in Electronics and Communication Engineering</p>
            <p  className='text-white font-bold text-xl'>Anna Uiversity .2020-2024</p>
            </div>
        </div>
        <div className='flex space-x-5 mr-30 py-15'>
        <div className='text-center my-10 px-10 h-30 w-60 rounded-xl bg-gray-900 shadow-lg'>
<p className='font-bold text-5xl text-green-800'>50+</p>
<p className='text-white text-xl'>PROJECTS DONE</p>
        </div>
        <div className='text-center my-10 px-10 h-30 w-60 rounded-xl bg-gray-900 shadow-lg'>
<p className='font-bold text-5xl text-green-800'>12</p>
<p className='text-white text-xl'>AWARD WON</p>
        </div>
        </div><hr />
        </section>
        <section className='bg-gray-800 h-100 '>
          <h1 className=' text-white font-bold text-3xl mx-160'>My Teck Stack</h1>
        <div  className='mx-50 my-20 flex space-x-30'>
          <div className='hover:translate-y-1 text-center py-6 h-40 w-40 rounded-yl bg-black shadow-lg '>
          <FaReact className='mx-10 text-7xl text-center text-sky-400' />
          <p className='my-2 font-bold text-white '>React.js</p>
        </div>
          <div className='hover:translate-y-1 text-center py-6 h-40 w-40 rounded-xl bg-black shadow-lg'>
          <IoLogoJavascript className='mx-10 text-7xl text-center text-sky-400' />
          <p className='my-2 font-bold text-white '>JavaScript</p>
        </div>
          <div className=' hover:translate-y-1 text-center py-6 h-40 w-40 rounded-xl bg-black shadow-lg'>
          <FaNodeJs className='mx-10 text-7xl text-center text-sky-400' />
          <p className='my-2 font-bold text-white '>Node.js</p>
        </div>
          <div className='hover:translate-y-1 text-center py-6 h-40 w-40 rounded-xl bg-black shadow-lg'>
         <RiTailwindCssFill className='mx-10 text-7xl text-center text-sky-400' />
          <p className='my-2 font-bold text-white '>Tailwind</p>
        </div>
          <div className='hover:translate-y-1 text-center py-6 h-40 w-40 rounded-xl bg-black shadow-lg'>
          <FaGithub className='mx-10 text-7xl text-center text-sky-400' />
          <p className='my-2 font-bold text-white '>Github</p>
        </div>
        </div>
        </section>
        <section className='bg-black h-180'>
          <h1 className='py-10 mx-15 font-bold text-4xl text-white'>Featured Projects</h1>
          <div className='my-10 mx-70 flex space-x-10'>
            <div>
            <p className='hover:text-green-600  text-green-400 bg-green-200 text-9xl w-80 h-50 text-center rounded-xs '>01</p>
             <div className='bg-gray-900 w-80 h-80 rounded-xs'>
            <p className='cursor-pointer text-white mx-4 py-8 text-xl font-bold'>Fintech Dashboard</p>
            <p className='text-white  mx-4 text-xl'>A high performance financial traking system with
               realtime analytics and dark mode UI</p>
               
            <div className='cursor-pointer mx-2 flex space-x-4'>
              <p className='text-center my-4 border-1 rounded-xl w-20 text-white'>React.js</p>
              <p className='text-center my-4 border-1 rounded-xl w-10 text-white'>D3.js</p>
              </div>
              <div className='cursor-pointer'>
                <p className='hover:underline mx-4 flex text-green-700'>View Github<FaArrowRight className='mx-2 my-1.5'/></p> 
            </div>
          </div>
          </div>
          <div>
           <p className='hover:text-green-600 bg-green-200  text-green-400 text-9xl w-80 h-50 text-center rounded-xs '>02</p>
             <div className='cursor-pointer bg-gray-900 w-80 h-80 rounded-xs'>
            <p className='text-white mx-4 py-8 text-xl font-bold'>E-Commerce SaaS</p>
            <p className='text-white  mx-4 text-xl'>Scalable market place solutions featuring 
              Stripe integration and headless CMS architecture</p>
               
            <div className='cursor-pointer mx-2 flex space-x-4'>
              <p className='text-center my-4 border-1 rounded-xl w-20 text-white'>Next.js</p>
              <p className='text-center my-4 border-1 rounded-xl w-15 text-white'>Tailwind</p>
              </div>
              <div>
                <p className='hover:underline mx-4 flex text-green-700'>View Github<FaArrowRight className='mx-2 my-1.5'/></p> 
            </div>
          </div>
          </div>
          <div>
           <p className='hover:text-green-600 text-green-400 bg-green-200 text-9xl w-80 h-50 text-center rounded-xs '>03</p>
             <div className='cursor-pointer bg-gray-900 w-80 h-80 rounded-xs'>
            <p className='text-white mx-4 py-8 text-xl font-bold'>AI Vision App</p>
            <p className='text-white  mx-4 text-xl'>Mobile-first web application utilizing
               TensionFlow.js for real time object detection</p>
            <div className='cursor-pointer mx-2 flex space-x-4'>
              <p className='text-center my-4 border-1 rounded-xl w-20 text-white'>Python</p>
              <p className='text-center my-4 border-1 rounded-xl w-15 text-white'>FastAPI</p>
              </div>
              <div>
                <p className='hover:underline mx-4 flex text-green-700'>View Github<FaArrowRight className='mx-2 my-1.5'/></p> 
            </div>
          </div>
          </div>
          </div>
        </section>
        <section className='bg-gray-900 h-160'>
          <h1 className='animate-bounce text-white py-10 text-5xl mx-140'>GET IN TOUCH</h1>
           <div  className='animate-bounce mx-50 my-20 flex space-x-30'>
          <div className='text-center py-6 h-60 w-80 rounded-xl bg-black shadow-lg'>
          <MdOutlineMail className='mx-30 text-7xl text-center text-green-900' />
          <p className='my-2 font-bold text-white '>Email</p>
          <p className='my-2 text-md text-white' >Sujithkumar12172002@gmail.com</p>
        </div>
        <div className='text-center py-6 h-60 w-80 rounded-xl bg-black shadow-lg'>
          <FaPhoneAlt className='mx-30 text-7xl text-center text-green-900' />
          <p className='my-2 font-bold text-white '>Phone</p>
          <p className='my-2 text-md text-white' >+91 7708634123</p>
        </div>
        <div className='text-center py-6 h-60 w-80 rounded-xl bg-black shadow-lg'>
          <CiLocationOn className='mx-30 text-7xl text-center text-green-900' />
          <p className='my-2 font-bold text-white '>Location</p>
          <p className='my-2 text-md text-white' >Therku Karungulam,Tvl-627114</p>
        </div>
        </div>
        <div className='mx-150 flex space-x-5'>
          <FaGithub className='text-5xl'/>
          <FaLinkedin className='text-5xl' />
          <FaSquareTwitter className='text-5xl' />
        </div>
        </section>
        <footer className='px-120 py-9 bg-black text-white h-20'>
          <p className='font-bold text-xl'>@2026 SUJITH KUMAR.BUILT WITH TAIWIND & PASSION</p>
        </footer>
    </div>
  )
}

export default PortFolio