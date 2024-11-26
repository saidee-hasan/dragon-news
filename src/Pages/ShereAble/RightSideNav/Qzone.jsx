import React from 'react'
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const Qzone = () => {
  return (
<div className="mb-4 p-2 text-center me-2 bg-zinc-100">
      <h3 className='text-2xl mb-6 font-bold md:text-start md:ms-2'>Q-Zone</h3>
<div className='space-y-12'>
<img className='mx-auto' src={qZone1} alt="qZone1" />
<img className='mx-auto' src={qZone2} alt="qZone2" />
<img className='mx-auto' src={qZone3} alt="qZone3" />
</div>
    </div>
  )
}

export default Qzone
