import img from '../assets/prof.jpg'
import { useEffect, useRef, useState } from 'react';
import {FaQuoteRight} from 'react-icons/fa6'
function AboutUs() {
  const [move,setmove] = useState({});
  const [move2,setmove2] = useState({});
  const [move3,setmove3] = useState({});
  const [move4,setmove4] = useState({});
  const [move5,setmove5] = useState({});
  const [move6,setmove6] = useState({});
  function anim_move(e){
    let x = e.clientX;
    let y = e.clientY;
    setmove({
      "transform": `translateX(-${x/90}px) translateY(-${y/70}px)`,
    })
    setmove2({
      "transform": `translateX(-${x/30}px) translateY(-${y/50}px)`,
    })
    setmove3({
      "transform": `translateX(-${x/20}px) translateY(-${y/40}px)`,
    })
    setmove4({
      "transform": `translateX(${x/90}px) translateY(${y/70}px)`,
    })
    setmove5({
      "transform": `translateX(${x/30}px) translateY(${y/50}px)`,
    })
    setmove6({
      "transform": `translateX(${x/20}px) translateY(${y/40}px)`,
    })

  }

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
    <section id='aboutUs' ref={elementRef} onMouseMove={anim_move} className={`relative w-full font-poppins text-center bg-pink-300 text-primary p-20 sm:p-30 fade-in ${isVisible ? 'visible':''}`}>
      <div className='relative sm:block hidden'>

        <img loading="lazy" style={move} className='absolute -left-10 md:left-0 lg:left-10 xl:left-40 2xl:left-80 top-40 sm:top-10 md:-top-10 border-white border-2 w-20 h-20  lg:w-30 lg:h-30 rounded-full' src={img} alt="" />

        <img loading="lazy" style={move2} className='absolute -left-20 lg:left-5 xl:left-20 2xl:left-60 top-100 sm:top-60 md:top-40  border-white border-2 w-25 h-25  lg:w-40 lg:h-40 rounded-full' src={img} alt="" />

        <img loading="lazy" style={move3} className='absolute left-0 lg:left-40 xl:left-70 2xl:left-110 top-120 md:top-80 lg:top-80  border-white border-2 w-10 h-10  lg:w-20 lg:h-20 rounded-full sm:block hidden' src={img} alt="" />

        <img loading="lazy" style={move4} className='absolute -right-30 sm:-right-20 lg:right-10 xl:right-40 2xl:right-80 top-10 sm:top-10 md:-top-10  border-white border-2 w-30 h-30 lg:w-40 lg:h-40 rounded-full' src={img} alt="" />

        <img loading="lazy" style={move5} className='absolute -right-15 md:right-0 lg:right-5 xl:right-20 2xl:right-60 top-60 md:top-40  border-white border-2 w-20 h-20 lg:w-30 lg:h-30 rounded-full sm:block hidden' src={img} alt="" />

        <img loading="lazy" style={move6} className='absolute right-0 lg:right-40 xl:right-70 2xl:right-90 top-140 sm:top-120 md:top-80  border-white border-2 w-15 h-15 lg:w-20 lg:h-20 rounded-full' src={img} alt="" />
      </div>
      <h1 className="font-bold  mb-5 text-4xl">Trusted by Agencis <br /> & Store Owners</h1>
      <div className="dark:bg-primary dark:text-white sm:p-10 p-4 bg-white text-center sm:w-[400px] md:w-[600px] m-auto">
        <FaQuoteRight />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus cumque ea enim officia quis praesentium. Porro accusantium fugit praesentium deleniti mollitia dolore, consequatur odio at natus nemo dicta tenetur dolor! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dolorem aut, sint officia saepe fugit dicta et quia quae, quaerat, similique inventore consequatur est nihil perferendis ea dignissimos qui non?</p>
        <FaQuoteRight className='float-end'/>

      </div>
    </section>
  )
}

export default AboutUs