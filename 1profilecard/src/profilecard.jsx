import React from 'react'


function ProfileCard({Name='aishu',email='not assigned yet'}){

return(
  <div className=' bg-sky-400 mt' style={{marginTop:'2px'}}>
    <div className="text-white font-bold">
      <h1 className='text-3xl'>{Name}</h1>
      <p className='text-1xl'>{email}</p>
      </div>
  </div>
)
}


export default ProfileCard