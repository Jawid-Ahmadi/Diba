import { useState } from "react";
import img1 from "../assets/login_imgs/asset 1.svg";
import img2 from "../assets/login_imgs/asset 2.svg";
import img3 from "../assets/login_imgs/asset 3.svg";
import img4 from "../assets/login_imgs/asset 4.svg";
import img5 from "../assets/login_imgs/asset 5.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
function LoginPage() {
  const [passShow, setPassShow] = useState(false);
  const [input, setInput] = useState(1);
  const [email, setEmail] = useState(false);

  function passToggle(event) {
    if (event == "show") {
      setPassShow(true);
    } else if (event == "hide") {
      setPassShow(false);
    }
  }

  function emailCheck(e) {
    const value = e.currentTarget.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(value);
    setEmail(isValid);
  }

  function changeInputs(e) {
    const id = e.currentTarget.getAttribute("id");
    parseInt(id);
    setInput(id);
  }

  function backPage() {
    if (input > 1) {
      setInput(input - 1);
    }
  }
  return (
    <section className="flex justify-center items-center min-h-[40px] md:min-h-[80vh] w-full font-poppins">
      <div className="md:flex w-[300px] sm:w-[400px] md:w-[700px] h-[250px] md:h-[400px] rounded-xl md:overflow-hidden ">

        <div className="relative bg-pink-300 md:w-1/2 md:rounded-tr-none md:rounded-tl-none rounded-tr-xl rounded-tl-xl">
          {/* <div className="absolute right-2 top-[38%]">
            {
              input == 1 ? <span className="block w-3 h-5 mb-1 bg-indigo-400 cursor-pointer z-2 rounded-full"></span>:<span className="block w-3 h-3 mb-1 bg-gray-300 cursor-pointer z-2 rounded-full"></span>
            }
            {
              input == 2 ?<span className="block w-3 h-5 mb-1 bg-indigo-400 cursor-pointer z-2 rounded-full"></span>:<span className="block w-3 h-3 mb-1 bg-gray-300 cursor-pointer z-2 rounded-full"></span>
            }
            {
              input == 3 ? <span className="block w-3 h-5 mb-1 bg-indigo-400 cursor-pointer z-2 rounded-full"></span>:<span className="block w-3 h-3 mb-1 bg-gray-300 cursor-pointer z-2 rounded-full"></span>
            }
            {
              input == 4 ? <span className="block w-3 h-5 mb-1 bg-indigo-400 cursor-pointer z-2 rounded-full"></span>:<span className="block w-3 h-3 mb-1 bg-gray-300 cursor-pointer z-2 rounded-full"></span>
            }
            {
              input == 5 ? <span className="block w-3 h-5 mb-1 bg-indigo-400 cursor-pointer z-2 rounded-full"></span>:<span className="block w-3 h-3 mb-1 bg-gray-300 cursor-pointer z-2 rounded-full"></span>
            }
          </div> */}
          <span className="absolute top-4 left-5 bg-green-300 px-2 py-2 text-primary cursor-default rounded-full">
            {input}
          </span>
          {input == 1 ? (
            <img src={img1} className="w-20 sm:w-40 h-40 sm:h-60 m-auto mt-10" alt="" />
          ) : (
            <></>
          )}
          {input == 2 ? (
            <img src={img2} className="w-20 sm:w-40 h-40 sm:h-60 m-auto mt-10" alt="" />
          ) : (
            <></>
          )}
          {input == 3 ? (
            <img src={img3} className="w-20 sm:w-40 h-40 sm:h-60 m-auto mt-10" alt="" />
          ) : (
            <></>
          )}
          {input == 4 ? (
            <img src={img4} className="w-20 sm:w-40 h-40 sm:h-60 m-auto mt-10" alt="" />
          ) : (
            <></>
          )}
          {input == 5 ? (
            <img src={img5} className="w-20 sm:w-40 h-40 sm:h-60 m-auto mt-10" alt="" />
          ) : (
            <></>
          )}

          <p className="text-center text-xl font-bold mt-5 text-primary mx-5">
            {input == 1 ? "Be good to your skin" : <></>}
            {input == 2 ? "Wash it twice everyday" : <></>}
            {input == 3 ? "Take care of it" : <></>}
            {input == 4 ? "Use our Products" : <></>}
            {input == 5 ? "& Be Beautiful!" : <></>}
          </p>
          <p className="text-center text-primary">
            Do You Have Already An Account ? <br />{" "}
            <Link className="text-blue-600" to="/sign_in">
              Sign In
            </Link>
          </p>
        </div>
        
        <form
          id="login_main_wrapper"
          className="after:hidden md:after:block before:top-40 md:before:top-auto relative overflow-hidden bg-white dark:bg-primary dark:text-white rounded-br-xl md:rounded-bl-none rounded-bl-xl md:rounded-tr-xl border md:border-t-pink-400 md:border-l-0 border-l-pink-400 border-r-pink-400 border-b-pink-400 text-primary h-full md:w-2/3 flex justify-center items-center"
        >
          <button
            type="button"
            onClick={backPage}
            className="absolute right-6 top-4 cursor-pointer z-1 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> back
          </button>
          <div>
            {input == "1" ? (
              <div className="relative text-center">
                <h1 className="font-bold text-xl sm:text-2xl mb-3">
                  Welcome to Diba Beauty
                </h1>
                <button
                  id="2"
                  onClick={changeInputs}
                  className="px-2 py-1 cursor-pointer hover:bg-blue-1 transition-all  bg-pink-300 rounded text-white mt-2"
                >
                  Get Started
                </button>
              </div>
            ) : (
              <></>
            )}

            {input == "2" ? (
              <div className="relative text-center">
                <input
                  className="outline-0 border-2 rounded px-2 py-1 focus:bg-blue-1 focus:text-white border-blue-1"
                  type="email"
                  id="email_input"
                  onChange={emailCheck}
                  placeholder="Your Email"
                  autoComplete=""
                />

                <button
                  disabled={!email}
                  id="3"
                  onClick={changeInputs}
                  className="disabled:bg-gray-400 px-2 py-1 block cursor-pointer hover:bg-blue-1 transition-all  bg-pink-300 rounded text-white mt-2"
                >
                  Next
                </button>
              </div>
            ) : (
              <></>
            )}

            {input == "3" ? (
              <div className="relative text-center">
                <div className="relative">
                  <input
                    className="outline-0 border-2 rounded px-2 py-1 focus:bg-blue-1 focus:text-white border-blue-1"
                    type={passShow ? "text" : "password"}
                    placeholder="Your Password"
                  />
                  {passShow ? (
                    <FaEyeSlash
                      onClick={() => passToggle("hide")}
                      className="dark:text-white cursor-pointer hover:text-xl hover:top-[8px] transition-all absolute top-[10px] right-2 text-primary"
                    />
                  ) : (
                    <FaEye
                      onClick={() => passToggle("show")}
                      className="dark:text-white absolute cursor-pointer hover:text-xl hover:top-[8px] transition-all top-[10px] right-2 text-primary"
                    />
                  )}
                </div>
                <button
                  id="4"
                  onClick={changeInputs}
                  className="px-2 py-1 block cursor-pointer hover:bg-blue-1 transition-all  bg-pink-300 rounded text-white mt-2"
                >
                  Next
                </button>
              </div>
            ) : (
              <></>
            )}

            {input == "4" ? (
              <div className="relative text-center">
                <img
                  src={img2}
                  className="w-30 h-30 rounded-full m-auto mb-4 border border-blue-1"
                  alt=""
                />
                <input
                  className="w-[200px] sm:w-auto outline-0 border-2 rounded px-2 py-1 focus:bg-blue-1 focus:text-white border-blue-1"
                  type="file"
                  placeholder="Your Email"
                />
                <button
                  id="5"
                  onClick={changeInputs}
                  className="px-2 py-1 block cursor-pointer hover:bg-blue-1 transition-all  bg-pink-300 rounded text-white mt-2"
                >
                  Next
                </button>
              </div>
            ) : (
              <></>
            )}

            {input == "5" ? (
              <div className="relative text-center">
                <img
                  src={img2}
                  className="w-30 h-30 rounded-full m-auto mb-2 border border-blue-1"
                  alt=""
                />
                <span className="block mb-2">*Name*</span>
                <input
                  className="outline-0 border-2 rounded px-2 py-1 focus:bg-blue-1 focus:text-white border-blue-1"
                  type="text"
                  placeholder="Your Name"
                />
                <button
                  id="5"
                  onClick={changeInputs}
                  className="px-2 py-1 block cursor-pointer hover:bg-blue-1 transition-all  bg-pink-300 rounded text-white mt-2"
                >
                  Finish
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
