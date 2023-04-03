import Head from 'next/head'
import Image from 'next/image'
import FirstPage from './First-Page'
import SecondPage from './Second-Page'
import ThirdPage from './Third-Page'
import Footer from './Footer'
import {Spacer } from "@nextui-org/react";

export default function Home() {

  
  return (
    <>
      <Head>
        <title>Refoundation</title>
        <meta name="description" content="A Hackathon non-profit" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <FirstPage />
          <Spacer y={5} />
          <SecondPage />
          <Spacer y={5} />
          <ThirdPage />
          <Spacer y={5} />
          <Footer />
      </main>
    </>
  )
}
