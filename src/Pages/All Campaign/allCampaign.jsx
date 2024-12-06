import React from 'react';
import { useLoaderData } from 'react-router-dom';

const allCampaign = () => {
    const allCampaignData = useLoaderData()
    console.log(allCampaignData)
    return (
        <div>
            
        </div>
    );
};

export default allCampaign;