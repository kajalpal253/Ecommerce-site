import React from 'react'
import MainCarosol from '../../components/HomeCarosol/MainCarosal'
import HomeSectionCarosal from '../../components/HomeSectionCarosal/HomeSectionCarosal';
import { Menskurta } from '../../../Data/Menskurta';

const HomePage = () => {
  return (
    <div>
      <MainCarosol/>
      <div className=' space-y-10 py-20 flex  flex-col justify-certer px-5 lg:px-10'>
        <HomeSectionCarosal Data={Menskurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarosal Data={Menskurta}  sectionName={"Women's collection"}/>
        <HomeSectionCarosal Data={Menskurta}   sectionName={"Shoes"}/>
        <HomeSectionCarosal  Data={Menskurta}   sectionName={"Decorative items"}/>
        <HomeSectionCarosal Data={Menskurta}   sectionName={"Kids Section"}/>
      </div>
    </div>
  )
}

export default HomePage;
