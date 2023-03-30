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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
          <FirstPage />
          <Spacer y={18} />
          <SecondPage />
          <Spacer y={18} />
          <ThirdPage />
          <Spacer y={18} />
          <Footer />
        
      </main>
    </>
  )
}
