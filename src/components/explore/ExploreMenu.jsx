import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

// Correctly destructure props here
const ExploreMenu = ({category, setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Hungry for something new? Discover and get food and products delivered from the best local stores, all in one place.</p>
      {/* Corrected typo: exolre -> explore */}
      <div className="explore-menu-list">
        {
          menu_list.map((item, index) => {
            return (
              // Corrected typo: exolre -> explore
              <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
                <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
              </div>
            )
          })
        }
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu