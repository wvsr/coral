import React from 'react'
import NewsChannel from '../public/Images/iPhone News channels.png'
import Image from 'next/image'
import PlayStore from '../public/download_button/Download on Google Play Store.png'
import AppStore from '../public/download_button/download-on-the-app-store.svg'
import Link from 'next/link'
function ClassSegmentation() {
  return (
    <section className='wrapper pt-14 md:pt-24 grid grid-cols-1 md:grid-cols-2 gap-6'>
      <div>
        <h2 className='heading-2'>
          The News Inbox – never lose information in news feeds
        </h2>
        <div className='space-y-6'>
          {' '}
          <p className='mt-10'>
            {`Information easily gets lost in news feeds. `}
          </p>
          <p>
            {`Coral’s`} News Inbox lets associations{' '}
            <b>send news messages with as high open rates as SMS.</b>
          </p>
          <p>
            Associations can create multiple one-to-many channels for different
            purposes. Students can then explore all news channels at campus,
            choose which ones to follow, and get all campus news in one clean
            place!
          </p>
        </div>

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
        <Image src={NewsChannel} alt='class segmentation image' />
      </div>
    </section>
  )
}

export default ClassSegmentation
