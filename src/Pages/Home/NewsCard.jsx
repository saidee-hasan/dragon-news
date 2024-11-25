import React from "react";
import { FaEye, FaStar, FaStarHalf } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  const { title, details, total_view, rating, image_url, author,_id } = news;

  return (
    <div className="w-full px-2 shadow-sm">
      <div className="flex justify-between items-center px-2 mx-2 py-2 bg-zinc-100 rounded-tl-[5px] rounded-tr-[5px] border border-zinc-100">
        <div className="flex gap-2">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src={author.img} alt="" />
            </div>
          </div>
          <div>
            <h3 className="text-neutral-700 text-base font-semibold">
              {author.name}
            </h3>
            <h2 className="text-neutral-500 text-sm">
              {author.published_date}
            </h2>
          </div>
        </div>
        <div></div>
      </div>

      <div className="bg-white rounded-lg mb-5">
        <img
          className="rounded-t-lg mx-auto p-2"
          src={image_url}
          alt=""
        />
        <div className="p-4">
          <a href="#">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
              {title}
            </h5>
          </a>
          {details.length > 200 ?
            <p className="text-neutral-500 text-base mb-3">{details.slice(0,200)} <Link to={`/news/${_id}`} className="text-green-700
            text-base
            font-bold">Read more...</Link></p>
          :
          <p className="text-neutral-500 text-base mb-3">{details}</p>
          }
        
        </div>
        <hr />
        <div className="flex justify-between py-3 px-1 mx-2">
          <h3 className="flex gap-2 items-center">
            <div className="flex text-xl text-orange-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            {rating.number}
          </h3>

          <div
            className="tooltip hover:tooltip-open tooltip-top"
            data-tip={`${total_view} views`}
          >
            <p className="flex items-center">
              <FaEye className="me-2" />
              {total_view}
            </p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default NewsCard;
