import Head from 'next/head'
import Body from '../components/Body'
import About from '../components/About'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Shaki | Fullstack Dev </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon.png" />
      </Head>
      <Body />
      <About />
      
    </div>
  )
}
