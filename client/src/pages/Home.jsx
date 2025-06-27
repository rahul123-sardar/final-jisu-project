import React from 'react'
import Carouselslider from '../components/Carouselslider'
import Cardlist from '../components/Cardlist'
import citydata from '../data/citydata'
import Datatable from '../components/Datatable'

const Home = ({searchterm}) => {
  const filtereddata = citydata.filter(x=>x.title.toLowerCase().includes(searchterm.toLowerCase()));
  return <>
  <Carouselslider/>
  <h2 className='mt-4'>City Zones</h2>
  <Cardlist data={filtereddata}/>
  <h2 className='mt-4'>Zone Status</h2>
  <Datatable data={citydata}/>
  </>
}

export default Home