import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Memberships from '../../components/Memberships/Memberships'
import MembershipsPlans from '../../components/MembershipsPlans/MembershipsPlans'
import ComparePlans from '../../components/ComparePlans/ComparePlans'

const Upgrade = () => {
    return (
        <div>
            <Header />
            <Memberships />
            <MembershipsPlans />
            <ComparePlans/>
            <Footer />
        </div>
    )
}

export default Upgrade