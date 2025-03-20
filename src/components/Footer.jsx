import {FaPhone,FaFacebook,FaInstagram,FaEnvelope} from 'react-icons/fa6'
import feed_img from '../assets/Untitled-1 small.png'
import { useEffect, useRef, useState } from 'react';
function Footer() {
  const elementRef = useRef();
  const [isVisible,setIsVisible] = useState(false);

  useEffect(()=>{
    const observer = new IntersectionObserver(
      (entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.5,
      }
    );
    if(elementRef.current){
      observer.observe(elementRef.current)
    }

    return()=>{
      if(elementRef.current){
        observer.unobserve(elementRef.current)
      }
    }
  }, [])
  return (
    <section id='footer' ref={elementRef} className={`font-poppins mt-10 fade-in ${isVisible?'visible':''}`}>
      <h1 className='text-center my-40 text-5xl font-bold'>Instagram Feed</h1>
      <div className='relative'>
        <div className='absolute w-full flex justify-aroundleft-auto -top-10 md:-top-25'>
          <div className='m-auto flex '>
            <img className='w-40 md:w-50 lg:w-70 bg-indigo-300 rounded-2xl' src={feed_img} alt="Instagram feeds" />
            <img className='mx-10 w-40 md:w-50 lg:w-70 bg-indigo-300 rounded-2xl' src={feed_img} alt="Instagram feeds" />
            <img className='sm:block hidden w-40 md:w-50 lg:w-70 bg-indigo-300 rounded-2xl' src={feed_img} alt="Instagram feeds" />
          </div>
          {/* <img className='absolute w-80' src={feed_img} alt="Instagram feeds" />
          <img className='absolute w-80' src={feed_img} alt="Instagram feeds" /> */}
        </div>
        <div className='bg-primary text-white  md:flex justify-between items-center px-5 md:px-20 lg:px-40 py-40'>

          <div className='md:text-start text-center'>
            <h2 className='font-bold text-xl mb-5'>Contact With Email</h2>
            <p className='text-md'>Lorem ipsum dolor sit amet, <br />consectetur adipisicing elit. </p>
            <a id='Footer_a_tag' className='mt-5 w-35 overflow-hidden inline-flex items-center px-3 py-2 bg-pink-400 rounded-full' href="">
              <FaEnvelope className='mr-2'/>
              <div className='relative w-fit whitespace-nowrap'>
                <span className='transition-all absolute left-0 -top-3'>Contact Us</span>
                <span className='transition-all absolute left-0 top-3'>With Email</span>
              </div>
              </a>
          </div>

          <div className='md:text-start text-center  md:my-0 my-10'>
            <h2 className='font-bold text-xl mb-5'>Quick Contact</h2>
            <p  className='text-md'>Lorem ipsum dolor, sit amet consectetur <br />adipisicing elit. Ducimus dolor in</p>
            <div id='Footer_phone' className='relative inline-flex items-center mt-5'>
              <FaPhone className='relative mx-2 '/>
              <span className='relative'>+98786810417</span>
            </div>
          </div>

          <div className='md:text-start text-center'>
            <h2 className='font-bold text-xl mb-5'>Follow Us</h2>
            <div className='flex md:justify-start justify-center '>
              <a href="" className='text-3xl transition mr-5 hover:text-blue-500'><FaFacebook/></a>
              <a href="" className='text-3xl transition hover:text-orange-500'><FaInstagram/></a>
            </div>
          </div>

        </div>
        <div className='text-center mt-2'>
          <hr />
          <span className='my-2 block'>Copyright 2025 Diba Beauty | All rights reserved</span>
        </div>
      </div>
    </section>
  )
}

export default Footer