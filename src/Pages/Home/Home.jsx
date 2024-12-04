import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
// import Carousel from '../../componets/Header/Carousel';
import { useLoaderData } from 'react-router-dom';
import Testimonial from './Testimonial ';
import WhyChooseUs from './WhyChooseUs';
import AboutSection from './Aboutsection';
import HowItWorks from './HowItWork';
import SimpleSlider from '../../componets/Header/Carousel';




const Home = () => {
    const eventData = useLoaderData()

    const authInfo = useContext(AuthContext)
    // console.log(authInfo);

    return (
        <div>
             {/* <SimpleSlider></SimpleSlider> */}
             
           <div className="mt-12">
           <AboutSection></AboutSection>
           </div>
        <WhyChooseUs></WhyChooseUs>
        <HowItWorks></HowItWorks>
        <Testimonial></Testimonial>
        </div>
    );
};

export default Home;