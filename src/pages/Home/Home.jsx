import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Looking from '../../components/Looking/Looking'
import BestEditor from '../../components/BestEditor/BestEditor'
import Banner from '../../components/Banner/Banner'
import PortfolioHome from '../../components/PortfolioHome/PortfolioHome'
import PortfolioHomeTwo from '../../components/PortfolioHomeTwo/PortfolioHomeTwo'

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
        </div>
    )
}

export default Home