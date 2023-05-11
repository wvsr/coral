import React from 'react'
import ClassSegmentImage from '../public/Images/iPhone class segmentation.png'
import Image from 'next/image'
import PlayStore from '../public/download_button/Download on Google Play Store.png'
import AppStore from '../public/download_button/download-on-the-app-store.svg'
import Link from 'next/link'
function ClassSegmentation() {
  return (
    <section className='wrapper pt-14 md:pt-24 grid grid-cols-1 md:grid-cols-2 gap-6'>
      <div>
        <h2 className='heading-2'>
          Class Segmentation – target which students you want to reach
        </h2>
        <ul className='mt-9 list-disc ml-5 font-medium'>
          <li className='mb-3'>Students select their class group on sign up</li>
          <li className='mb-3'>
            Associations can choose which students to reach
          </li>
          <li className='mb-3'>Publish to everyone – or just a specific</li>
          <li className='mb-3'>
            target group See member engagement across class groups
          </li>
        </ul>
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
        <Image src={ClassSegmentImage} alt='class segmentation image' />
      </div>
    </section>
  )
}

export default ClassSegmentation
