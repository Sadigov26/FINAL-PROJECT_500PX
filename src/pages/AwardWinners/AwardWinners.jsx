import React from 'react'
import Header from '../../components/Header/Header'
import AwardHero from '../../components/AwardHero/AwardHero'
import Footer from '../../components/Footer/Footer'

const AwardWinners = () => {
    return (
        <div  style={{color:"black", width: "100%", gap: "80px", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <AwardHero />
            <Footer />
        </div>
    )
}

export default AwardWinners
