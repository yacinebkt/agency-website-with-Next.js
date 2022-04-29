import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Works from '../components/Works/Works'
import Sponsors from '../components/Sponsors/Sponsors'
import Contact from '../components/Contact/Contact'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Agency Porto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <Header />
      <About />
      <Skills />
      <Works />
      <Sponsors />
      <Contact />

      
      
      {/* <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer> */}
    </div>
  )
}

export default Home
