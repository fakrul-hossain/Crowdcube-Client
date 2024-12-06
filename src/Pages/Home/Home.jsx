import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
// import Carousel from '../../componets/Header/Carousel';
import { useLoaderData } from 'react-router-dom';

import SimpleSlider from '../../componets/Header/Carousel';
import AIFeaturesSection from './AIFeaturesSection';




const Home = () => {
    const eventData = useLoaderData()

    const authInfo = useContext(AuthContext)
    // console.log(authInfo);

    return (
        <div>
             <SimpleSlider/>
             <AIFeaturesSection/>
           <div className="mt-12">
           </div>
           <test/>
        </div>
    );
};

export default Home;