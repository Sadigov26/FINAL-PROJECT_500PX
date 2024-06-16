import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Grants from '../../components/Grants/Grants'

const CommercialGrants = () => {
    return (
        <div style={{ width: "100%", gap: "120px", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <Grants/>
            <Footer />
        </div>
    )
}

export default CommercialGrants
