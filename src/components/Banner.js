import React from 'react'
import { SearchBooking } from './SearchBooking'

export const Banner = () => {
  return (
    <div style={{ display:'flex', width:'100%', height:'500px' ,backgroundSize:'100% 100%',
     alignItems:'center', 
     backgroundImage:'url(https://th.bing.com/th/id/R.c4dc9987b344fc4c2340de9b0722811e?rik=rzqa5tnkGrP6Wg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fHD-World-Travel-Desktop-Background.jpg&ehk=60mu9TPugnh12tUiz6SyEe%2brVNlWp1FaEu5OMf6oIig%3d&risl=&pid=ImgRaw&r=0)'}}>
    <SearchBooking/>
    </div>
  )
}
