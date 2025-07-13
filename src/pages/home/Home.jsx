import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/explore/ExploreMenu'
import Fooddisplay from '../../components/fooddisplay/Fooddisplay'
const Home = () => {
  const[category,setCategory] = useState("all")
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
      <Fooddisplay/>
    </div>
  )
}

export default Home
