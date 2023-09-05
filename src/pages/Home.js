import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Banner } from '../components/Banner'

export const Home = () => {
  return (
    <div style={{ display:'flex', height:'100%', flexDirection:'column', backgroundColor:'#14223B' }}>
        <Header/>
        <Banner/>
        <Footer/>

    </div>
  )
}
