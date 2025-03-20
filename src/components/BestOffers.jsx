import p from "../assets/p12 cut small.png"
import { useState,useRef,useEffect } from "react"
function BestOffers() {
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
        threshold: 0.2,
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
    <section ref={elementRef} className={`dark:text-white mt-10 md:mt-90 pt-10 text-center text-primary font-poppins fade-in ${isVisible ? 'visible': ''}`}>

      <h1 className="font-loud text-4xl mb-10">BEST OFFERS</h1>

      <div className="flex md:flex-row flex-col items-center justify-center ">

        <div className="relative card text-center my-2 w-[470px] mb-10 md:mb-0">
          <i className="absolute left-0 rounded-full bg-secondary " id="backdrop"></i>
          <a href="">
            <img src={p} className="relative transition-all hover:rotate-45 w-30 lg:w-45 m-auto" alt="" />
          </a>
          <h1 className="font-bold text-xl mb-3">Bath & Body</h1>
          <p className="text-md mb-3">Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet...sdfsfsfdsd</p>
          <span className="block font-bold text-2xl mb-3">$19.99</span>
          <button className="px-4 py-2 overflow-hidden text-white hover:text-black transition relative rounded-full cursor-pointer z-10" id="best_offers_btn">Read More</button>
        </div>

        <div className="relative card text-center my-2 w-[470px] mb-10 md:mb-0">
          <i className="absolute left-0 rounded-full bg-secondary " id="backdrop"></i>
          <a href="">
            <img src={p} className="relative transition-all hover:rotate-45 w-30 lg:w-45 m-auto" alt="" />
          </a>
          <h1 className="font-bold text-xl mb-3">Bath & Body</h1>
          <p className="text-md mb-3">Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet...sdfsfsfdsd</p>
          <span className="block font-bold text-2xl mb-3">$19.99</span>
          <button className="px-4 py-2 overflow-hidden text-white hover:text-black transition relative rounded-full cursor-pointer z-10" id="best_offers_btn">Read More</button>
        </div>

        <div className="relative card text-center my-2 w-[470px] mb-10 md:mb-0">
          <i className="absolute left-0 rounded-full bg-secondary " id="backdrop"></i>
          <a href="">
            <img src={p} className="relative transition-all hover:rotate-45 w-30 lg:w-45 m-auto" alt="" />
          </a>
          <h1 className="font-bold text-xl mb-3">Bath & Body</h1>
          <p className="text-md mb-3">Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet...sdfsfsfdsd</p>
          <span className="block font-bold text-2xl mb-3">$19.99</span>
          <button className="px-4 py-2 overflow-hidden text-white hover:text-black transition relative rounded-full cursor-pointer z-10" id="best_offers_btn">Read More</button>
        </div>

        

      </div>
      <br /><br />
    </section>
  )
}

export default BestOffers