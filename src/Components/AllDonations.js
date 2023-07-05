import React from 'react';
import donations from './DonationData.json'
import {useSelector} from 'react-redux';
// בדף הראוטר: הרשאת פתיחה רק למנהל בלבד

export default function AllDonations() {
    const donations=useSelector(state=>state.donations);
        return (
            //    donations&&
             <div className="div1">
                {
                    
                    donations.map((x, index) => (
                        <div id="divAllDonations" key={index}>
                            <p>{x.userName} שם התורם</p>
                            <p>{x.prizeName} שם פרס</p>
                            <p>{x.ticketsNum} מספר כרטיס</p>
                            <p>{x.donationSum} סכום תרומה</p>
                            <p>{x.date} תאריך תרומה</p>
                        </div>
                    ))
                }
             </div>
   )
}
