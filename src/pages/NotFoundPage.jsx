import { Link } from 'react-router-dom'
import img from '../assets/404 not found.svg'
function NotFoundPage() {
  return (
    <section className="w-full text-center font-poppins h-full flex justify-center items-center min-h-[90vh]">
      <div>
        <img className='w-150' src={img} alt="" />
        <h1 className='text-6xl font-bold'>404 Not Found</h1>
        <Link to='/' className='inline-block px-3 py-2 bg-red-1 text-white rounded mt-5'>Home Page</Link>
      </div>
    </section>
  )
}

export default NotFoundPage