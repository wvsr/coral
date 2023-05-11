import React from 'react'
import Link from 'next/link'
function Footer() {
  const productLinks = [{ text: 'Pricing', href: '' }]
  const supportLinks = [
    { text: 'Status', href: '' },
    { text: 'Conatact', href: '' },
  ]
  const companyLinks = [
    { text: 'Teams', href: '' },
    { text: 'Privacy', href: '' },
  ]
  return (
    <footer className='bg-primary text-white'>
      <article className='wrapper flex flex-wrap gap-y-8 md:gap-4 pt-12 justify-between '>
        <div>
          <p className='text-2xl md:text-5xl font-bold mb-8'>Coral</p>
          <p className='max-w-sm text-base font-medium'>
            Coral helps students stay engaged in campus life and student
            associations to more easily organize themselves, by bringing all
            activities at campus into one intuitive mobile app.
          </p>
        </div>
        <div className='md:w-auto w-full'>
          <h4 className='font-bold text-xl mb-2'>Products</h4>
          <ul>
            {productLinks.map((link, i) => {
              return (
                <li className='hover:text-gray-200' key={i}>
                  <Link href={link.href}>{link.text}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='md:w-auto w-full'>
          <h4 className='font-bold text-xl mb-2'>Companies</h4>
          <ul>
            {companyLinks.map((link, i) => {
              return (
                <li className='hover:text-gray-200' key={i}>
                  <Link href={link.href}>{link.text}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='md:w-auto w-full'>
          <h4 className='font-bold text-xl mb-2'>Suppors</h4>
          <ul>
            {supportLinks.map((link, i) => {
              return (
                <li className='hover:text-gray-200' key={i}>
                  <Link href={link.href}>{link.text}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </article>
      <div className='mt-10 border-t-2  wrapper flex flex-wrap py-7 text-center gap-y-3 flex-col md:flex-row justify-center md:justify-between'>
        <p>© 2023 Coral AB 559426-7865</p>
        <p>Torbjörn klockares gata 18A, Stockholm</p>
        <p>Social Media Logoas</p>
      </div>
    </footer>
  )
}

export default Footer
