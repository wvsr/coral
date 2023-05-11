import React, { useState } from 'react'
import Link from 'next/link'
import CoralLogo from '../public/Coral Logo.png'
import Image from 'next/image'
function Header() {
  const [showNav, setShowNav] = useState(false)
  return (
    <>
      <header className='wrapper py-2.5 flex items-center justify-between md:justify-normal gap-6'>
        <div className='logo'>
          <Image src={CoralLogo} alt='logo' width={130} />
        </div>
        <button
          className='block md:hidden p-2'
          onClick={() => setShowNav(!showNav)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 9h16.5m-16.5 6.75h16.5'
            />
          </svg>
        </button>
        <nav className='w-full hidden md:block'>
          <ul className='gap-4 flex'>
            <li>
              <Link href='' className='hover:text-primary'>
                Pricing
              </Link>
            </li>
            <li className='flex-1'>
              <Link href='' className='hover:text-primary'>
                Contact
              </Link>
            </li>
            <li>
              <Link
                href=''
                className='px-3 py-2.5 rounded-lg border-2 outline-none border-primary text-primary hover:bg-primary hover:text-white font-bold'
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link href='' className='btn-primary'>
                Start for free
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {showNav && (
        <div className='py-5 bg-[#F7F7F7] '>
          <ul className='space-y-4 wrapper'>
            <li>
              <Link href='' className='hover:text-primary'>
                Pricing
              </Link>
            </li>
            <li className='pb-2'>
              <Link href='' className='hover:text-primary'>
                Contact
              </Link>
            </li>
            <li>
              <Link
                href=''
                className='px-3 py-2.5 rounded-lg border-2 outline-none border-primary text-primary hover:bg-primary hover:text-white font-bold'
              >
                Sign in
              </Link>
            </li>
            <li className='pt-3'>
              <Link href='' className='btn-primary'>
                Start for free
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Header
