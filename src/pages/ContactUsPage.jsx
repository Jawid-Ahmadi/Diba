import Footer from "../components/Footer"
import { FaPaperPlane } from "react-icons/fa6"
import '../components/styles/send.css'
function ContactUsPage() {
  const send = (e)=>{
    const btn = e.currentTarget;
    btn.classList.add("active");
    setTimeout(() => {
      btn.classList.remove("active")
    }, 2000);
  }
  return (
    <>
      <section className="w-full flex justify-center p-10 font-poppins mt-10">
        <div className="bg-primary text-white p-20 rounded-2xl">
          <h1 className="text-center text-4xl font-bold mb-5">Contact Us</h1>
          <div className="md:flex justify-center items-center">
            <div>
              <label className="block mt-5" htmlFor="name">Name</label>
              <input className="border-2 border-white outline-0 rounded-sm mr-4 mt-2 px-2 py-1 hover:border-pink-300 focus:border-pink-300" type="text" id="name" placeholder="Your Name"/>
            </div>
            <div>
              <label className="block mt-5" htmlFor="email">Email</label>
              <input className="border-2 border-white outline-0 rounded-sm mr-4 mt-2 px-2 py-1 hover:border-pink-300 focus:border-pink-300" type="email" id="email" placeholder="Your Email" />
            </div>
          </div>
          <label className="block mt-5" htmlFor="text">Message</label>
          <textarea className="border-2 border-white  rounded-sm mr-4 outline-0 mt-2 px-2 py-1 w-full hover:border-pink-300 focus:border-pink-300" id="text" placeholder="Your Message"></textarea>
          <button id="send_btn" onClick={send} className="overflow-hidden px-5 py-2 bg-pink-300 text-primary rounded cursor-pointer border transition-all mt-2 float-end border-pink-300 hover:bg-primary hover:text-pink-300 flex items-center">Send <FaPaperPlane id="plane" className="ml-2"/></button>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ContactUsPage