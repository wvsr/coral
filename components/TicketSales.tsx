import React from 'react'
import TicketSaleImage from '../public/Images/iPhone ticket.png'
import Image from 'next/image'
import PlayStore from '../public/download_button/Download on Google Play Store.png'
import AppStore from '../public/download_button/download-on-the-app-store.svg'
import Link from 'next/link'
function ClassSegmentation() {
  return (
    <section className='bg-[#F7F7F7]'>
      <div className='wrapper pt-14 md:pt-24 grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-6 '>
        <div className='md:w-4/5 h-auto flex justify-end items-end order-2 md:order-1'>
          <Image src={TicketSaleImage} alt='class segmentation image' />
        </div>
        <div className='order-1 md:order-2'>
          <h2 className='heading-2'>
            Ticket Sales – seamlessly integrated and low fees
          </h2>
          <ul className='mt-9 list-disc ml-5 font-medium'>
            <li className='mb-3'>
              Buy and sell tickets directly in the Coral app
            </li>
            <li className='mb-3'>Free and paid events</li>
            <li className='mb-3'>€0.15 + 1.5% fee per paid ticket</li>
            <li className='mb-3'>Multiple ticket types per event</li>
            <li className='mb-3'>QR-codes to scan at the entrance</li>
            <li className='mb-3'>Attendee list and sales report</li>
            <li className='mb-3'>Event web link for external guests</li>
          </ul>
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
