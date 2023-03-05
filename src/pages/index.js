import PersonalInfo from '@/components/PersonalInfo'
import Skills from '@/components/Skills'
import SocialNetworks from '@/components/SocialNetworks'
import Head from 'next/head'
import Title from "../components/Title"






export default function Home() {
  return (
    <>
      <Head>
        <title>Mariano Langge</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     

      <SocialNetworks/>
      <Title />
      <PersonalInfo/>
      <Skills />
   
    </>
  )
}
