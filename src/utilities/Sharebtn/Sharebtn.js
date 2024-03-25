import React, { useState } from 'react'
import './shareBtn.css'
import { ShareSharp } from '@mui/icons-material'

const Sharebtn = () => {
    const [isOpen,setISOpen] = useState(false)

//     handleOpenShare = () => {
// console.log('ok')
//     }

  return (
   <>
   <div className='flex justify-center cursor-pointer items-center shadow-lg shadow-black w-12 h-12 bg-opacity-70 bg-white rounded-full border border-white'>
            <span><ShareSharp className='text-black'/> </span>
   </div>
   </>
  )
}


export default Sharebtn