import React from 'react'
import NewsIcon from '../public/Icons/Mail icon (filled).svg'
import GroupIcon from '../public/Icons/Group icon.svg'
import TicketIcon from '../public/Icons/Ticket icon (tilted).svg'
import EventIcon from '../public/Icons/Event icon.svg'
import DiscountIcon from '../public/Icons/Discount icon.svg'
import MemberIcon from '../public/Icons/Members.svg'
import Image from 'next/image'
import HeroImage from '../public/HeroImage.png'
import HeroBracket from '../public/Icons/Large Bracket (for website).svg'
import HeroBracketSmall from '../public/Icons/Small bracket (for mobile).svg'

function Hero() {
  return (
    <section className='bg-[#F7F7F7] '>
      <div className='wrapper py-14 md:py-20 block md:flex gap-6'>
        <div className='space-y-7 w-full md:w-3/5'>
          <h1 className='text-4xl lg:text-5xl max-w-lg font-bold'>
            Your All-In-One Student Union App
          </h1>
          <p className='max-w-lg leading-6'>
            Students stay engaged in campus life, and student associations
            organize everything more easily.
          </p>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg'>
            <div className='bg-white px-4 py-2 rounded-lg no-underline flex gap-3 justify-center hover:scale-95 duration-200'>
              <Image src={NewsIcon} width={26} alt='' /> News
            </div>
            <div className='bg-white px-4 py-2 rounded-lg no-underline flex gap-3 justify-center hover:scale-95 duration-200'>
              <Image src={GroupIcon} width={26} alt='' /> Associations
            </div>
            <div className='bg-white px-4 py-2 rounded-lg no-underline flex gap-3 justify-center hover:scale-95 duration-200'>
              <Image src={EventIcon} width={26} alt='' /> Events
            </div>
            <div className='bg-white px-4 py-2 rounded-lg no-underline flex gap-3 justify-center hover:scale-95 duration-200'>
              <Image src={TicketIcon} width={26} alt='' /> Tickets
            </div>
            <div className='bg-white px-4 py-2 rounded-lg no-underline flex gap-3 justify-center hover:scale-95 duration-200'>
              <Image src={MemberIcon} width={26} alt='' /> Members
            </div>
            <div className='bg-white px-4 py-2 rounded-lg no-underline flex gap-3 justify-center hover:scale-95 duration-200'>
              <Image src={DiscountIcon} width={26} alt='' /> Discount
            </div>
          </div>
          <Image alt='' src={HeroBracket} />
          <p className='pb-6'>
            All in one ad-free platform, just for your school.
          </p>
        </div>
        <div className='w-full md:w-2/5 grid place-items-center'>
          <Image alt='' src={HeroImage} className='w-8/12' />
        </div>
      </div>
    </section>
  )
}

export default Hero
