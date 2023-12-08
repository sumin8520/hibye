'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Hero from '../hero/Hero'
import Link from 'next/link'

export default function AddTopic() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title || !description) {
      alert('Title and description are required.')
    }
    try {
      const res = await fetch('http://localhost:3000/api/topics', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      })
      if (res.ok) {
        router.push('/')
        router.refresh()
      } else {
        throw new Error('Failed to create a topic')
      }
      router.push('/iyoiyo')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Hero pageName="서울 마포구 마포대로" title="이요이요스시" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', // 화면 높이 전체를 차지하도록 설정
        }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="border border-slate-500 p-4"
            type="text"
            placeholder="제목"
            style={{ width: '500px', height: '50px' }}
          />

          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="border border-slate-500 p-4 h-32"
            type="text"
            placeholder="식당 설명, 평가"
            style={{ width: '500px', height: '200px' }}
          />

          <button
            type="submit"
            className="bg-blue-800 text-white font-bold px-6 py-3 w-fit rounded-md"
            onClick={handleSubmit}
          >
            댓글 추가
          </button>
        </form>
      </div>
    </>
  )
}
