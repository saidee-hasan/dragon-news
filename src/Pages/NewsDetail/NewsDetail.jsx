import React from 'react'
import Header from './../ShereAble/Header';
import RightSideNav from './../ShereAble/RightSideNav/RightSideNav';
import Navbar from './../ShereAble/Navbar';
import { useLoaderData, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NewsDetail = () => {
    const {id} = useParams()
    const loadedData = useLoaderData()
    const data = loadedData.data
const mainDetails = data.find(data=> data._id === id)
console.log(mainDetails)

  return (
    <>
                <Helmet>
        <title>News Details | The Dragon News</title>
      </Helmet>
    <Header />
    <Navbar />
    <div className='grid sm:grid-cols-4 justify-center'>
<div className='sm:col-span-3 mx-2'>
<h3 className="text-neutral-700 text-xl font-semibold leading-[30px] my-2">Dragon News</h3>
<div className='bg-white rounded-[5px] border border-neutral-100 p-4'>
<img src={mainDetails.image_url} className=' w-full object-contain' alt="" />
<h3 className='my-2 text-justify font-bold text-neutral-700 text-xl pe-12'>{mainDetails.title}</h3>
<p className='text-neutral-500 text-base text-justify pe-2'>{mainDetails.details}</p>
</div>

<div className='w-full'>
    <p className='text-neutral-700 font-semibold text-xl mb-4 my-6'>Editors Insight</p>




    <div className="flex flex-wrap gap-4 lg:-m-3 p-2 justify-center">
    <div className="card bg-base-100 shadow-xl w-[266px]">
  <figure><img className='w-[267px] h-48 object-cover' src={data[10].thumbnail_url} alt="Hot News" /></figure>
  <div className="card-body -m-4">
    <h2 className="card-title">
      {data[10].title}
    </h2>
    <p>{data[10].details.slice(0,79)}...</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Regular News</div>
    </div>
  </div>
</div>



<div className="card bg-base-100 shadow-xl w-[266px]">
  <figure><img className='w-[267px] h-48 object-cover' src={data[6].thumbnail_url} alt="Hot News" /></figure>
  <div className="card-body -m-4">
    <h2 className="card-title">
      {data[6].title}
    </h2>
    <p>{data[6].details.slice(0,79)}...</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">International News</div>
    </div>
  </div>
</div>



<div className="card bg-base-100 shadow-xl w-[266px]">
  <figure><img className='w-[267px] h-48 object-cover' src={data[3].thumbnail_url} alt="Hot News" /></figure>
  <div className="card-body -m-4">
    <h2 className="card-title">
      {data[3].title}
    </h2>
    <p>{data[3].details.slice(0,79)}...</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Sports</div>
    </div>
  </div>
</div>


    
</div>
</div>
</div>


<div className='mx-auto'>
    <RightSideNav />
</div>
    </div>
    </>
    )
}

export default NewsDetail
