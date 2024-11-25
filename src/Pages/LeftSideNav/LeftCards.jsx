import img1 from '../../assets/1.png'
import img2 from '../../assets/3.png'
import img3 from '../../assets/2.png'
const LeftCards = () => {
  return (
    <div className='my-6 space-y-16 sm:p-0 p-16'>
      <div className='mx-2'>
        <img src={img1} alt="" className='mx-auto w-full' />
        <p className='text-neutral-700 text-xl font-semibold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
        <div className="flex justify-between my-2">
            <p className='text-neutral-600 text-base font-medium'>Sports</p>
            <p className='text-neutral-400 text-base font-medium'>Jan 4, 2022</p>
        </div>
      </div>
      <div className='mx-2'>
      <img src={img2} alt="" className='mx-auto w-full' />
        <p className='text-neutral-700 text-xl font-semibold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
        <div className="flex justify-between my-2">
            <p className='text-neutral-600 text-base font-medium'>Sports</p>
            <p className='text-neutral-400 text-base font-medium'>Aug 9, 2023</p>
        </div>
      </div>
      <div className='mx-2'>
      <img src={img3} alt="" className='mx-auto w-full' />
        <p className='text-neutral-700 text-xl font-semibold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
        <div className="flex justify-between my-2">
            <p className='text-neutral-600 text-base font-medium'>Sports</p>
            <p className='text-neutral-400 text-base font-medium'>Oct 2, 2023</p>
        </div>
      </div>



    </div>
  )
}

export default LeftCards
