import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Looking from '../../components/Looking/Looking'
import BestEditor from '../../components/BestEditor/BestEditor'
import Banner from '../../components/Banner/Banner'
import PortfolioHome from '../../components/PortfolioHome/PortfolioHome'
import PortfolioHomeTwo from '../../components/PortfolioHomeTwo/PortfolioHomeTwo'
import PortfolioHomeThree from '../../components/PortfolioHomeThree/PortfolioHomeThree '
import CommunityHome from '../../components/CommunityHome/CommunityHome'
import Footer from '../../components/Footer/Footer'

const Home = () => {

    
    return (
        <div>
            <Header />
            <Hero />
            <Looking />
            <BestEditor />
            <Banner />
            <PortfolioHome />
            <PortfolioHomeTwo />
            <PortfolioHomeThree />
            <CommunityHome />
            <Footer />
        </div>
    )
}

export default Home