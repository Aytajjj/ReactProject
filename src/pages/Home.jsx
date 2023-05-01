import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Watches from './Watches'

const Home = () => {
  return (
    <div>

        <Header />
        <Main />
        <Watches />
        <Footer />
    </div>
  )
}

export default Home