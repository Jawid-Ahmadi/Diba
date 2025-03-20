import p from "../assets/Untitled-2.png"
import p2 from "../assets/p12 small.png"
import { FaLeaf } from 'react-icons/fa6'
import { FaStar } from 'react-icons/fa6'
import { FaRegStar } from 'react-icons/fa6'
import { FaMinus,FaPlus,FaTruck,FaClock,FaArrowRightArrowLeft } from 'react-icons/fa6'
import { useState,useEffect,useRef } from "react"
import './styles/style.css'

function Hero1() {
  const [add,setAdd] = useState(0);
  const [first,setFirst] = useState(true);
  const [second,setSecond] = useState(false);
  const [third,setThird] = useState(false);
  function t(e){
    if(e == 1) {
      setFirst(true)
      setSecond(false)
      setThird(false)
    } else if (e == 2) {
      setFirst(false)
      setSecond(true)
      setThird(false)
    } else if (e == 3) {
      setFirst(false)
      setSecond(false)
      setThird(true)
    }
  }
  const addTo = ()=>{
    setAdd(add+1);
  }
  const unAddTo = ()=>{
    if(add != 0){
      setAdd(add - 1)
    }
  }
  
  const elementRef = useRef();
  const [isVisible,setIsVisible] = useState(false);

  useEffect(()=>{
    const observer = new IntersectionObserver(
      (entries)=>{
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2,
      }
    );
    if(elementRef.current){
      observer.observe(elementRef.current)
    }

    return()=>{
      if(elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  },[])
  
  return (
    <section ref={elementRef} className={`w-full dark:bg-primary dark:text-secondary text-primary grid grid-cols-1 md:grid-cols-2 fade-in ${isVisible ? 'visibleHero': '*:'}`}>
        <div className="lg:hidden">
          <div className="relative pt-30 xl:pl-50 pl-15">
            <div className="absolute right-5 z-10 text-4xl text-gray-400 ">
              {
              first 
              ? <i className="block w-4 h-7 cursor-pointer bg-primary rounded-full transition-all"></i> 
              : <i className="block w-4 h-4 cursor-pointer bg-secondary rounded-full hover:bg-primary transition-all" onClick={(()=>t(1))}></i>
              }
              {
              second 
              ? <i className="block w-4 h-7 cursor-pointer bg-primary my-3 rounded-full transition-all"></i>
              : <i className="block w-4 h-4 cursor-pointer bg-secondary my-3 rounded-full hover:bg-primary transition-all" onClick={(()=>t(2))}></i>
              }
              {
              third 
              ? <i className="block w-4 h-7 cursor-pointer bg-primary rounded-full transition-all"></i>
              : <i className="block w-4 h-4 cursor-pointer bg-secondary rounded-full hover:bg-primary transition-all" onClick={(()=>t(3))}></i>
              }
              
              
              
            </div>

            <i id="wrapper_sm" className="rounded-b-none "></i>
            {first ? <img loading="lazy" className="w-sm  md:right-5 z-1 relative transition-all" src={p} alt="" /> : <></>}
            {second ? <img loading="lazy" className="w-lg right-8 md:right-15 z-1 relative transition-all" src={p2} alt="" /> : <></>}
            {third ? <img loading="lazy" className="w-lg right-8 md:right-15 z-1 relative transition-all" src={p2} alt="" /> : <></>}
          </div>
        </div>

        <div className="mx-8 lg:mx-20 mb-20 mt-30 md:mt-10 lg:mt-20 z-3">
          <div className="dark:text-primary items-center px-4 py-2 bg-pink-100 inline-flex rounded-full">
            <FaLeaf className="mr-2"/>
            <span className="">Natural Products</span>
          </div>

          <h1 className="text-4xl lg:text-6xl mt-6 font-loud">Be good to your skin.</h1>
          <h1 className="text-2xl lg:text-4xl font-loud mb-5">You will wear it everyday for you.</h1>

          <div className="flex items-center lg:mb-10">
            <div className="flex items-center mr-4">
              <FaStar className="text-yellow-400 text-xl"/>
              <FaStar className="text-yellow-400 text-xl"/>
              <FaStar className="text-yellow-400 text-xl"/>
              <FaStar className="text-yellow-400 text-xl"/>
              <FaRegStar className="text-yellow-400 text-xl"/>
            </div>
            <span><span className="font-bold text-lg">29</span> Reviews</span>
          </div>

          <p className="font-bold text-gray-500 mb-3">Most dermatologists agree it is important to cleanse the face twice daily <br /> to get bacteria, dirt and pollutants off your skin</p>

          <div className="sm:flex md:block lg:flex items-center justify-between lg:mt-15">
            
            <span className="text-3xl lg:text-4xl font-bold">{first ? '$29.99':''}{second ? '$9.99':''} {third ? '$8.99' : ''}</span>
            <div className="flex items-center">
              <div className="dark:border-white text-xl flex items-center justify-between px-2 py-2 w-35 border border-primary rounded-full">
                
                <FaMinus className="dark:hover:text-pink-400 cursor-pointer text-gray-500 ml-4 hover:text-primary" onClick={unAddTo}/>
                <span className="font-bold select-none">{add}</span>
                <FaPlus className="dark:hover:text-pink-400 cursor-pointer text-gray-500 mr-4 hover:text-primary" onClick={addTo}/>
              </div>
              <button className="dark:border-white select-none text-xl font-bold ml-4 px-2 py-2 w-45 border border-primary rounded-full cursor-pointer hover:bg-primary hover:text-white">Add To Cart</button>
            </div>
          </div>
  
          <div className="sm:flex md:block lg:flex justify-between items-center mt-10">

            <div className="flex mt-5 items-center text-xl">
              <div className="flex justify-center items-center w-10 h-10 lg:w-15 mr-5 lg:h-15 rounded-full text-center bg-pink-200">
                <FaTruck className="dark:text-primary"/>
              </div>
              <span>Free Shipping</span>
            </div>

            <div className="flex mt-5 items-center text-xl">
              <div className="flex justify-center items-center w-10 h-10 lg:w-15 mr-5 lg:h-15 rounded-full text-center bg-pink-200">
                <FaClock className="dark:text-primary"/>
              </div>
              <span>24x7 Service</span>
            </div>

            <div className="flex mt-5 items-center text-xl">
              <div className="flex justify-center items-center w-10 h-10 lg:w-15 mr-5 lg:h-15 rounded-full text-center bg-pink-200">
              <FaArrowRightArrowLeft className="dark:text-primary"/>
              </div>
              <span>Free Return</span>
            </div>

          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative pt-30 xl:pl-55 pl:15 md:pl-30">
            <div className="absolute -left-7 z-10 text-4xl text-gray-400 ">
              {
              first 
              ? <i className="dark:bg-pink-400 block w-4 h-7 cursor-pointer bg-primary rounded-full transition-all"></i> 
              : <i className="block w-4 h-4 cursor-pointer bg-secondary rounded-full dark:hover:bg-pink-400 hover:bg-primary transition-all" onClick={(()=>t(1))}></i>
              }
              {
              second 
              ? <i className="dark:bg-pink-400 block w-4 h-7 cursor-pointer bg-primary my-3 rounded-full transition-all"></i>
              : <i className="block w-4 h-4 cursor-pointer bg-secondary my-3 rounded-full dark:hover:bg-pink-400 hover:bg-primary transition-all" onClick={(()=>t(2))}></i>
              }
              {
              third 
              ? <i className="dark:bg-pink-400 block w-4 h-7 cursor-pointer bg-primary rounded-full transition-all"></i>
              : <i className="block w-4 h-4 cursor-pointer bg-secondary rounded-full dark:hover:bg-pink-400 hover:bg-primary transition-all" onClick={(()=>t(3))}></i>
              }
              
              
              
            </div>
            <i id="wrapper" className="rounded-b-full"></i>
            {first ? <img loading="lazy" className="w-sm right-5 z-1 relative transition-all" src={p} alt="" /> : <></>}
            {second ? <img loading="lazy" className="w-lg right-10 z-1 relative transition-all" src={p2} alt="" /> : <></>}
            {third ? <img loading="lazy" className="w-lg right-10 z-1 relative transition-all" src={p2} alt="" /> : <></>}
            
          </div>
        </div>

    </section>
  )
}

export default Hero1