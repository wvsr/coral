import React from 'react'
import CoralEventCalanderImage from '../public/Images/iPhone event calendar.png'
import Image from 'next/image'
import PlayStore from '../public/download_button/Download on Google Play Store.png'
import AppStore from '../public/download_button/download-on-the-app-store.svg'
import Link from 'next/link'
import TicketIcon from '../public/Icons/Ticket icon (tilted).svg'
import GroupIcon from '../public/Icons/Group icon.svg'
import BellIcon from '../public/Icons/Bell noticiation icon.svg'
import CalenderIcon from '../public/Icons/Event icon.svg'
import DiscoundIcon from '../public/Icons/Discount icon.svg'

function ForStudents() {
  return (
    <section className='wrapper pt-14 md:pt-24 grid grid-cols-1 md:grid-cols-2 gap-6'>
      <div>
        <h2 className='heading-2'>
          Coral for Students – find everything happening at campus in one place
        </h2>
        <ul className='mt-9 font-medium space-y-5'>
          <li className='flex gap-2'>
            <Image src={GroupIcon} width={24} alt='' /> Follow your favourite
            associations
          </li>
          <li className='flex gap-2'>
            <Image src={BellIcon} width={24} alt='' /> Get all news in a
            personalized inbox
          </li>
          <li className='flex gap-2'>
            <Image src={CalenderIcon} width={24} alt='' /> View all events
          </li>
          <li className='flex gap-2'>
            <Image src={TicketIcon} width={24} alt='' /> Buy tickets seamlessly
          </li>
          <li className='flex gap-2'>
            <Image src={DiscoundIcon} width={24} alt='' />
            Unlock student discounts
          </li>
        </ul>
        <p className='my-10'>
          You won’t miss anything with Coral! Find events, get notified of news,
          buy tickets, unlock discounts – all in one place. Download Coral for
          free and experience a simpler and richer student life!
        </p>
        <div className='flex gap-1 mt-6 items-start'>
          <Link href='' className='hover:scale-95'>
            <Image src={PlayStore} alt='Play store' width={160} />
          </Link>
          <Link href='' className='hover:scale-95'>
            <Image src={AppStore} alt='App store' className='mt-2' />
          </Link>
        </div>
      </div>
      <div className='md:w-4/5 h-auto flex justify-end items-end'>
        <Image src={CoralEventCalanderImage} alt='class segmentation image' />
      </div>
    </section>
  )
}

export default ForStudents
