import React from 'react'
import './Referrals.css'
import Referral from './Referral'
import { Button } from '@material-ui/core'
function Referrals() {
    return (
        <div className="Referrals">
            <div className="Referrals__Header">
                <h2>Referrals:</h2>
            </div>
            <div className="Referrals__Posts">
                <Referral/>
                <Referral/>
                <Referral/> 
                <Referral/>

            </div>
            <div className="Referrals__Submit">
                <Button>Submit Referral</Button>
            </div>
        </div>
    )
}

export default Referrals
