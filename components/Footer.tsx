import {FaTwitter, FaLinkedin, FaInstagram} from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-white dark:bg-gray-800 text-black dark:text-white mt-10'>
      <footer className="p-10 font-[sans-serif] tracking-wide">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="lg:flex lg:items-center">
          <Link href='/'>
            <img src="/logo.png" alt="logo" className="w-52" />
          </Link>
        </div>

        <div className="lg:flex lg:items-center">
          <ul className="flex space-x-6">
            <li>
              <FaInstagram className='hover:text-gray-300' size={35} />
            </li>
            <li>
              <FaTwitter className='hover:text-gray-300' size={35} />
            </li>
            <li>
              <FaLinkedin className='hover:text-gray-300' size={35} />
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/" className="hover:text-gray-300 text-sm">Email</Link>
            </li>
            <li>
            <Link href="/" className="hover:text-gray-300 text-sm">Phone</Link>
            </li>
            <li>
            <Link href="/" className="hover:text-gray-300 text-sm">Address</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Information</h4>
          <ul className="space-y-4">
            <li>
            <Link href="/" className="hover:text-gray-300 text-sm">About Us</Link>
            </li>
            <li>
            <Link href="/" className="hover:text-gray-300 text-sm">Terms & Conditions</Link>
            </li>
            <li>
            <Link href="/" className="hover:text-gray-300 text-sm">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      <p className='text-gray-500 dark:text-gray-400 text-sm mt-10'>© 2024<Link href='https://www.thetorontosaunaco.com' target='_blank'
        className="hover:underline mx-1">DDW Web Dev Services</Link>All Rights Reserved.
      </p>
    </footer>
    </div>
  )
}

export default Footer
