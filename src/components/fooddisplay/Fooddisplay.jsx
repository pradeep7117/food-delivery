import React, { useContext } from 'react'
import { Storecontext } from '../../cONTEXT/Storecontext'



const Fooddisplay = () => {

   const {food_list} =useContext(Storecontext)

  return (
    <div>
      <div className="fooddisplay" id='food-display'>
        <h2>You can order your favorite food.</h2>
      </div>
    </div>
  )
}

export default Fooddisplay
