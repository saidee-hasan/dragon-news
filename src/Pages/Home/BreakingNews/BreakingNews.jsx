import Marquee from "react-fast-marquee";


const BreakingNews = () => {


  return (
    <div className="flex bg-zinc-100 p-2">
              <button className='btn hover:bg-rose-700 bg-rose-600 text-white text-xl font-medium leading-[30px]'>Breaking News</button>
              <Marquee className="me-2 text-neutral-700 text-lg font-semibold">
      Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
  </Marquee>
    </div>
  )
}

export default BreakingNews
