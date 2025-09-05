import React, { useEffect } from 'react'

const Viewmore = ({colorchange}) => { 
  return (
    <div className={colorchange ? "viewmore changecolor" :"viewmore"}>
      <div className="spinDiv">
        <span>View more</span>
        <div className="actualspin"></div>
      </div>
    </div>
  )
}

export default Viewmore
