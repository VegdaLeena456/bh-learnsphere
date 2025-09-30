import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AddContext'
import{Line} from 'rc-progress'
import Footer from '../../components/student/Footer'

const MyEnrollment = () => {

  const {enrolledCourse, calculateCourseDuration, navigate} = useContext(AppContext)
 
  const [progressArray, setProgressArrays] = useState([
    {lectureCompleted: 2, totalLecture: 4},
    {lectureCompleted: 1, totalLecture: 5},
    {lectureCompleted: 3, totalLecture: 6},
    {lectureCompleted: 4, totalLecture: 4},
    {lectureCompleted: 0, totalLecture: 3},
    {lectureCompleted: 5, totalLecture: 7},
    {lectureCompleted: 6, totalLecture: 8},
    {lectureCompleted: 2, totalLecture: 6},
    {lectureCompleted: 4, totalLecture: 10},
    {lectureCompleted: 3, totalLecture: 5},
    {lectureCompleted: 7, totalLecture: 7},
    {lectureCompleted: 1, totalLecture: 4},
    {lectureCompleted: 0, totalLecture: 2},
    {lectureCompleted: 5, totalLecture: 5}
  ])

  return (
    <>
    <div className='md:px-36 w-full pt-10 '>
        <h1 className='text-2xl font-semibold text-gray-200'>My Enrollments</h1>
        <table className='md:table-auto table-fixed w-full mt-10 border border-gray-200/40 bg-purple-900/10 backdrop-blur-md'>
          <thead className='text-gray-900 border-b border-gray-200/30 text-sm text-left max-sm:hidden'>
            <tr>
              <th className='px-4 py-3 text-gray-300 font-semibold truncate'>Course</th>
              <th className='px-4 py-3 text-gray-300 font-semibold truncate'>Duration</th>
              <th className='px-4 py-3 text-gray-300 font-semibold truncate'>Completed</th>
              <th className='px-4 py-3 text-gray-300 font-semibold truncate'>Status</th>
            </tr>
          </thead>
        
        <tbody className='text-gray-400'>
          {enrolledCourse.map((course,index)=>(
            <tr key={index} className='border-b border-gray-200/30'>
              <td className='md:px-4 pl-2 py-3 flex items-center space-x-3 '>
                <img src={course.courseThumbnail} alt=""  className='w-14 sm:w-24 md:w-28'/>
                <div className='flex-1 '>
                  <p className='mb-1 max-sm:text-sm  text-gray-50' >{course.courseTitle}</p>
                  <Line  strokeWidth={2} percent={progressArray[index] ? (progressArray[index].lectureCompleted * 100 / progressArray[index].totalLecture) : 0} className='bg-gray-100 rounded-full'/>
                </div>
              </td>
              <td className='px-4 py-3 max-sm:hidden text-gray-200'>
                {calculateCourseDuration(course)}
              </td>
              <td className='px-4 py-3 max-sm:hidden text-gray-200'>
               {progressArray[index] && `${progressArray[index].lectureCompleted} / ${progressArray[index].totalLecture}`} <span>Lectures</span>
              </td>
              <td className='px-4 py-3 max-sm:text-right'>
                <button className='px-3 sm:px-5 py-1.5 dm:py-2 bg-blue-800 max-sm:text-xs text-white' onClick={()=>navigate('/player/' + course._id)}>
                  {progressArray[index] && progressArray[index].lectureCompleted / progressArray[index].totalLecture === 1 ? 'Completed' : 'On Going'} 
                  </button>
              </td>
            </tr>
          ) )}
        </tbody>
        </table>
    </div>

    <Footer />
    </>
  )
}

export default MyEnrollment