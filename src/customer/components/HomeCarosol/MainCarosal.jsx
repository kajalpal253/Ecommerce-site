import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarData } from './MainCarData';



const  MainCarosal = () => {
    //const navigate=useNavi
    const items =MainCarData.map((item ,index) => <img  key={index} className="w-full h-[550px] object-cover"   role='presentation' src={item.image} alt={`slide-${index}`}/>
);

    return (<AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />);
    

};

export default MainCarosal;