import { useState } from 'react'

const CourseSearch = ({ getSearchResults }) => {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch(`/api/courses/search?query=${query}`)
    const courses = await res.json()

    // 검색 결과가 없을 때
    if (courses.length === 0) {
      setError('검색 결과가 없습니다. 정확히 입력해주세요.')
      return
    }

    setError(null)

    getSearchResults(courses)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="지역 또는 가게명 ex)강원도 화천, 롯데리아....."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-blue-100 py-2 px-4 m-4 rounded-lg"
        />
        <button
          type="submit"
          className="p-2 m-2 text-white bg-blue-700 hover:bg-blue-800 rounded-lg"
        >
          찾기!
        </button>
      </form>

      {error && <div className="text-red-500">{error}</div>}
    </div>
  )
}

export default CourseSearch
