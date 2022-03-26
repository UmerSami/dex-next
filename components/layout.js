import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Footer from './Footer'
import Navbar from './Navbar'
export default function Layout({ children }) {
return (
    <>
    <Head>
        <title>Pokédex</title>
        <link rel="icon" href="/favicon.png" />
    </Head>
    <div className='bg-gradient-to-r from-red-50 to-green-50 via-blue-50 min-h-screen'>
      <Navbar/>
      <div>
          {children}
      </div>
       <Footer></Footer>
    </div>
   </>
    );
}
