import Link from 'next/link'

//async function fetchCourses() {
//const response = await fetch('http://localhost:3000/api/courses')
// const courses = response.json()
//return courses
//}
const Courses = async ({ courses }) => {
  //const courses = await fetchCourses()
  return (
    <div className="grid grid-cols-6 gap-30">
      {courses?.map((course) => (
        <div
          key={course.id}
          className="bg-gray-200 p-4 m-4 rounded-lg"
          style={{ width: '200px', height: '300px' }}
        >
          <h2 className="font-bold text-xl">{course.title}</h2>
          <div className="flex justify-center items-center mb-4 mt-3">
            <img src={course.image} alt={course.title} />
          </div>
          <p className="mb-4">{course.description}</p>
          <Link
            href={course.link}
            target="_blank"
            className="py-2 px-4 bg-gray-700 hover:bg-gray-800 text-white rounded-lg mb-4"
          >
            자세히 보기
          </Link>
        </div>
      ))}
    </div>
  )
}
export default Courses
