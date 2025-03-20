import woman from "../assets/Untitled-1 small.png";
import prod from "../assets/prof.jpg";
import { FaArrowRight } from "react-icons/fa6";
import {useEffect,useRef,useState} from 'react'

function HeroNewArival() {
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
        threshold: 0.5,
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
    <section ref={elementRef} className={`newArival dark:text-white sm:my-40 font-poppins text-primary relative fade-in ${isVisible ? 'visible' : ''}` }>
      <div className="grid md:grid-cols-2 ">
        <div className="relative">
          <img
            id="img"
            src={woman}
            className="bg-indigo-400 rounded-r-full  relative z-2"
            alt=""
          />
          {/* <span className="absolute left-0 top-0 bg-indigo-400 w-full h-full"></span> */}
        </div>

        <div className="self-center ml-10 mt-5 md:mt-0">
          <h1 className="font-bold text-6xl font-loud ">New Arival</h1>
          <p className="mt-6 text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, ad
            aspernatur. Facere. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quas voluptatibus animi rem.
          </p>
          <button className="px-5 py-2 bg-primary rounded-full mt-6 text-white cursor-pointer ">
            View More
          </button>
        </div>
      </div>

      <div className="md:absolute sm:flex hidden sm:mx-0 mx-2 mt-5 lg:mt-0 lg:-bottom-90 xl:-bottom-70 right-0 xl:right-50 justify-center md:justify-start items-center z-2">
        <div className="mr-2 md:mr-10 bg-white rounded-3xl overflow-hidden drop-shadow-lg shadow-gray-700">
          <img className="w-40 h-40 lg:w-70 lg:h-70" src={prod} alt="" />

          <div className="dark:text-primary sm:flex justify-between items-center p-2 lg:p-4">
            <div className="text-sm lg:text-lg font-bold">
              <span className="block">Night Cream</span>
              <span>$23.99</span>
            </div>
            <button className="sm:w-auto w-full lg:text-2xl bg-indigo-400 text-white p-2 lg:p-3 cursor-pointer rounded-sm sm:mt-0 mt-2 sm:rounded-full">
              <FaArrowRight className="sm:m-0 m-auto"/>
            </button>
          </div>
        </div>

        <div className="mr-2 md:mr-10 bg-white rounded-3xl overflow-hidden drop-shadow-lg shadow-gray-700">
          <img className="w-40 h-40 lg:w-70 lg:h-70" src={prod} alt="" />

          <div className="dark:text-primary sm:flex justify-between items-center p-2 lg:p-4">
            <div className="text-sm lg:text-lg font-bold">
              <span className="block">Night Cream</span>
              <span>$23.99</span>
            </div>
            <button className="sm:w-auto w-full lg:text-2xl bg-indigo-400 text-white p-2 lg:p-3 cursor-pointer rounded-sm sm:mt-0 mt-2 sm:rounded-full">
              <FaArrowRight className="sm:m-0 m-auto"/>
            </button>
          </div>
        </div>

        <div className="md:mr-10 bg-white rounded-3xl overflow-hidden drop-shadow-lg shadow-gray-700">
          <img className="w-40 h-40 lg:w-70 lg:h-70" src={prod} alt="" />

          <div className="dark:text-primary sm:flex justify-between items-center p-2 lg:p-4">
            <div className="text-sm lg:text-lg font-bold">
              <span className="block">Night Cream</span>
              <span>$23.99</span>
            </div>
            <button className="sm:w-auto w-full lg:text-2xl bg-indigo-400 text-white p-2 lg:p-3 cursor-pointer rounded-sm sm:mt-0 mt-2 sm:rounded-full">
              <FaArrowRight className="sm:m-0 m-auto"/>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroNewArival;
