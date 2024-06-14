import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import LicensingStarting from '../../components/LicensingStarting/LicensingStarting'

const Lisans = () => {
    return (
        <div style={{ width: "100%",gap:"100px", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <LicensingStarting />
            <Footer />
        </div>
    )
}

export default Lisans
