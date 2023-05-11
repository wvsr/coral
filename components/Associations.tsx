import React from 'react'
import AssociationsImage from '../public/Images/iPhone News Message.png'
import Image from 'next/image'
import Link from 'next/link'
import MailIcon from '../public/Icons/Mail icon (filled).svg'
import EventIcon from '../public/Icons/Event icon.svg'
import TicketIcon from '../public/Icons/Ticket icon (tilted).svg'
import DiscountIcon from '../public/Icons/Discount icon (filled).svg'
import MembershipIcon from '../public/Icons/Membership card icon.svg'

function ClassSegmentation() {
  return (
    <section className='bg-[#F7F7F7]'>
      <div className='wrapper pt-14 md:pt-24 grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-6 '>
        <div className='md:w-4/5 h-auto flex justify-end items-end order-2 md:order-1'>
          <Image src={AssociationsImage} alt='class segmentation image' />
        </div>
        <div className='order-1 md:order-2'>
          <h2 className='heading-2'>
            Coral for Associations – simplify all activities into one ad-free
            platform
          </h2>
          <ul className='mt-9 ml-5 font-medium space-y-5'>
            <li className='flex gap-2'>
              {' '}
              <Image src={MailIcon} width={24} alt='' /> Send SMS-like news
              messages
            </li>
            <li className='flex gap-2'>
              {' '}
              <Image src={EventIcon} width={24} alt='' /> Organize events
            </li>
            <li className='flex gap-2'>
              {' '}
              <Image src={TicketIcon} width={24} alt='' /> Sell tickets via the
              app
            </li>
            <li className='flex gap-2'>
              {' '}
              <Image src={DiscountIcon} width={24} alt='' /> List student
              discounts
            </li>
            <li className='flex gap-2'>
              {' '}
              <Image src={MembershipIcon} width={24} alt='' /> Issue digital
              membership cards
            </li>
          </ul>
          <p className='my-10'>
            No need to glue together multiple services or keep track of lots of
            passwords. Coral let’s you manage everything in one intuitive
            platform – specifically built for student organizations!
          </p>
          <div className='mt-12'>
            <Link href='' className='btn-primary mt-7'>
              Try coral for free
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClassSegmentation
