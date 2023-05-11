import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ClassSegmentation from '@/components/ClassSegmentation'
import TicketSale from '@/components/TicketSales'
import NewsInbox from '@/components/NewsInbox'
import Associations from '@/components/Associations'
import ForStudents from '@/components/ForStudents'
import Hero from '@/components/Hero'
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ForStudents />
      <Associations />
      <NewsInbox />
      <TicketSale />
      <ClassSegmentation />
      <Footer />
    </main>
  )
}
