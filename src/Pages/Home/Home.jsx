import { useEffect, useState } from "react";
import axios from 'axios';
import Header from '../ShereAble/Header';
import Navbar from '../ShereAble/Navbar';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSideNav from '../ShereAble/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews/BreakingNews';
import { Outlet, useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const Home = () => {
  const news = useLoaderData();
  const newsData = news.data;

  const [category, setCategory] = useState([]);
  const [newses, setNewses] = useState(newsData);

  useEffect(() => {
    axios.get("categories.json")
      .then((res) => setCategory(res.data))
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  const sortingCategory = (categoryId) => {
    const data = newsData.filter((ele) => ele.category_id === categoryId);
    setNewses(data.length > 0 ? data : newsData); // Reset to original data if no match
  };

  return (
    <>
      <div>
        <Header />
        <BreakingNews />
        <Navbar />
        <div className='grid md:grid-cols-4 mx-auto'>
          <div className="">
            <LeftSideNav sortingCategory={sortingCategory} category={category} />
          </div>
          <div className='md:col-span-2'>
            <h1 className='text-neutral-700 text-xl font-semibold mb-4'>Dragon News Home</h1>
            {newses.map(news => <NewsCard key={news._id} news={news} />)}
            <Outlet />
          </div>
          <div className=""> {/* Fixed position styles for RightSideNav */}
            <RightSideNav />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;