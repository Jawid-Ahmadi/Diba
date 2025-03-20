import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { FaX, FaMinus, FaPlus } from "react-icons/fa6";
import img from "../assets/p12 small.png";
import { ModalContext } from "../layouts/MainLayout";
import { useContext} from "react";
import { Link } from "react-router-dom";
function Cart() {
  let { active } = useContext(ModalContext);

  return active ? (
    <div className=" absolute top-0 left-0 flex justify-center items-center w-full h-full backdrop-blur-lg z-11 font-poppins text-primary">
      <div className=" shadow-black shadow-xl rounded-xl overflow-hidden grid grid-cols-3 w-[800px] h-[420px]">
        <div className=" bg-primary text-white col-span-2 p-5">
          <div className="flex justify-between items-center mb-3">
            <h1 className="font-bold text-lg">Shopping Cart</h1>
            <span>3 items</span>
          </div>

          <div>
            <ul id="Cart_ul" className="overflow-y-scroll h-[303px]">
              <hr />
              <li className="flex justify-between items-center pr-3">
                <img className="w-25" src={img} />
                <div>
                  <span className="block" id="type">
                    P_Type
                  </span>
                  <span>P_Name</span>
                </div>
                <div className="flex items-center">
                  <FaMinus className="cursor-pointer" />
                  <span className="mx-2 w-5 h-6 text-center border ">1</span>
                  <FaPlus className="cursor-pointer" />
                </div>
                <span>$Price</span>
                <button className="cursor-pointer">
                  <FaX />
                </button>
              </li>

              <hr />
              <li className="flex justify-between items-center pr-3">
                <img className="w-25" src={img} />
                <div>
                  <span className="block" id="type">
                    P_Type
                  </span>
                  <span>P_Name</span>
                </div>
                <div className="flex items-center">
                  <FaMinus className="cursor-pointer" />
                  <span className="mx-2 w-5 h-6 text-center border ">1</span>
                  <FaPlus className="cursor-pointer" />
                </div>
                <span>$Price</span>
                <button className="cursor-pointer">
                  <FaX />
                </button>
              </li>

              <hr />
              <li className="flex justify-between items-center pr-3">
                <img className="w-25" src={img} />
                <div>
                  <span className="block" id="type">
                    P_Type
                  </span>
                  <span>P_Name</span>
                </div>
                <div className="flex items-center">
                  <FaMinus className="cursor-pointer" />
                  <span className="mx-2 w-5 h-6 text-center border ">1</span>
                  <FaPlus className="cursor-pointer" />
                </div>
                <span>$Price</span>
                <button className="cursor-pointer">
                  <FaX />
                </button>
              </li>
            </ul>
          </div>

          <button className="flex items-center mt-5">
            <FaArrowLeft className="mr-2" />
            <Link to='/shop' className="cursor-pointer">Back to Shop</Link>
          </button>
        </div>

        <div className="bg-pink-300 text-black p-5">
          <h1 className="font-bold text-lg mb-3">Summary</h1>

          <hr />
          <div className="flex items-center justify-between my-3">
            <span>Items 3</span>
            <span>$100.0</span>
          </div>

          <label className="block my-4" htmlFor="shipping">
            Shipping
          </label>
          <select
            className="w-full bg-secondary px-2 py-1 outline-0"
            name=""
            id="shipping"
          >
            <option value="Default">Default</option>
          </select>

          <div className="mt-3">
            <label className="my-4 block" htmlFor="give_code">
              Give Code
            </label>
            <div className="relative flex items-center mb-4 bg-secondary">
              <input
                className="outline-0 px-2 py-1 w-[90%]"
                type="text"
                placeholder="Enter Your Code"
                id="give_code"
              />
              <FaArrowRight className="absolute top-2 right-2" />
            </div>
          </div>

          <hr />
          <div className="mt-3 flex justify-between mb-3">
            <span>Total Price</span>
            <span>$1020</span>
          </div>

          <button className="bg-primary text-white w-full py-2 mt-4 rounded cursor-pointer">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default Cart;
