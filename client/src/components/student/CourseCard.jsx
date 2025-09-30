import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AddContext";
import { Link } from "react-router-dom";


const CourseCard = ({ course }) => {

  const {currency, calculateRating} = useContext(AppContext)

  return (
    <Link to={'/course/' + course._id} onClick={()=> scrollTo(0,0)} className="border border-gray-400 pb-6 overflow-hidden rounded-lg bg-white">
      <img className="w-full" src={course.courseThumbnail} alt="" />
      <div className="p-3 text-left">
        <h3 className=" font-semibold text-blue-950 text-sm" >{course.courseTitle}</h3>
        <p className="text-blue-600">BH LearnSphere</p>
        <div className="flex items-center space-x-2">
          <p className="text-gray-200">{calculateRating(course)}</p>
          <div className="flex text-blue-200"> 
            {[...Array(5)].map((_, i) => (
              <img key={i} src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} alt="" className="w-3.5 h-3.5" />
            ))}
          </div>
          <p className="text-blue-200">{course.courseRatings.length}</p>
        </div>
        <p className="text-base font-semibold text-blue-950">{currency}{(course.coursePrice - course.discount * course.coursePrice/100).toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default CourseCard;
