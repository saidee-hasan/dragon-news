import { useEffect, useState } from "react"
import axios from 'axios';
import Header from '../ShereAble/Header'
import Navbar from '../ShereAble/Navbar'
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSideNav from '../ShereAble/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews/BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';



const Home = () => {
const news = useLoaderData()
const newsData = news.data


const [category, setCategory] = useState([])
const [newses, setNewses] = useState(newsData)




useEffect(() => {
  axios.get("categories.json")
    .then((res) => setCategory(res.data))
    .catch(err => {
     console.log(err.message);
     
});
}, [])


const sortingCategory = (categoryId) => {
let ourData = false;
newses.forEach((news) =>{
  if (categoryId === news.category_id){
    ourData = true;
  }
}
);
if(ourData){
  const data = newses.filter((ele) => ele.category_id === categoryId)
  setNewses(data)
}
setNewses(newsData)
};





  return (
    <>
   <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <div className='grid md:grid-cols-4 mx-auto'>
        <div>
          <LeftSideNav sortingCategory={sortingCategory} category={category} />
        </div>
        <div className='md:col-span-2'>
          <h1 className='text-neutral-700 text-xl font-semibold mb-4'>Dragon News Home</h1>
{newses.map(news => <NewsCard key={news._id} news={news} />)}

        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>

    </>
  )
}

export default Home
