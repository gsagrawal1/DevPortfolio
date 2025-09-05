import React, { useEffect, useState } from 'react'

const UserData = () => {

    const API_URL = "http://localhost:3500/users";
  const [userDataList, setUserData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        setUserData(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className='userdata'>
    <table border={2}>
        <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Name</th>
            <th>Email</th>
            <th>Description</th>
            <th>Interests</th>
        </tr>
        {userDataList.map(item => (
            <tr key={item.id}>
            <td className='IdCell'>{item.id}</td>
            <td className='dateCell'> {item.filledDate}</td>
            <td className='nameCell'>{item.name}</td>
            <td className='emailCell'>{item.email}</td>
            <td className='descCell'>{item.description}</td>
            <td className='interestCell'>{item.interests}</td>
        </tr>
        ))}
       
    </table>
    </div>
  )
}

export default UserData
