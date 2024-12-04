import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DonationItems from './DonationItems';

const DonationCampaign = () => {
    const campaignData = useLoaderData()
    return (
        <div>
                <div className=" mt-12 grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-5" data-aos="zoom-out-up" data-aos-duration="2000">
            
            {
                campaignData.map(campaign => <DonationItems
                    campaign={campaign}
                key={campaign.id}
                ></DonationItems>)
            }
        </div>
        </div>
    );
};

export default DonationCampaign;