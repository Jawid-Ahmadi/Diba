import { Link } from 'react-router-dom'
import img from '../assets/not available.svg'
function NotAvailable() {
  return (
    <section className="w-full text-center font-poppins h-full flex justify-center items-center min-h-[80vh]">
      <div>
        <img className='w-150' src={img} alt="" />
        <h1 className='text-4xl font-bold'>Not Available Yet <br /> We Working On It</h1>
        <Link to='/' className='inline-block px-3 py-2 bg-red-1 text-white rounded mt-5'>Home Page</Link>
      </div>
    </section>
  )
}

export default NotAvailable