import React from 'react'
import Carouselslider from '../components/Carouselslider'
import Cardlist from '../components/Cardlist'
import citydata from '../data/citydata'
import Datatable from '../components/Datatable'

const Home = () => {
  return <>
  <Carouselslider/>
  <h2 className='mt-4'>City Zones</h2>
  <Cardlist data={citydata}/>
  <h2 className='mt-4'>Zone Status</h2>
  <Datatable data={citydata}/>
  </>
}

export default Home