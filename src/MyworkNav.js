import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const MyworkNav = ({setCurrentID, currentId}) => {

  const [myworknav, setMyworknav] = useState([
    {
      id: '1',
      itemName: 'All',
      itemSelected: true,
      itemLink: '/',
      itemInnerCount: 12
    },
    {
      id: '2',
      itemName: 'Web design',
      itemSelected: false,
      itemLink: '/webdesigns',
      itemInnerCount: 6
    },
    {
      id: '3',
      itemName: 'Mobile app',
      itemSelected: false,
      itemLink: '/mobileapp',
      itemInnerCount: 4
    },
    {
      id: '4',
      itemName: 'Branding',
      itemSelected: false,
      itemLink: '/brandings',
      itemInnerCount: 2
    }
  ])
  const handleclick = (id) => {

    const newMyworknav = myworknav.map(item =>
      item.id === id ? { ...item, itemSelected: true } : { ...item, itemSelected: false }
    );
    setMyworknav(newMyworknav);

    const newCurrentId = currentId.map(item =>
      item.id === id ? { ...item, itemSelected: true } : { ...item, itemSelected: false }
    );
    setCurrentID(newCurrentId);
  };

  return (
    <div className='myworknav'>
      {
        myworknav.map(item => (
      <div key={item.id} className={item.itemSelected ? "myworknavitems selected" : "myworknavitems"}>
        <span onClick={() => handleclick(item.id)}>{item.itemName}</span>
        <span>{item.itemInnerCount}</span>
      </div>
        ))
      }
      
    </div>
  )
}

export default MyworkNav
