'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(description)
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ newTitle, newDescription }),
      })
      if (!res.ok) {
        throw new Error('Failed to update topic')
      }
      router.push('/iyoiyo')
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }
  return (
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
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          className="border border-slate-500 p-4"
          type="text"
          placeholder="제목"
          style={{ width: '500px', height: '50px' }}
        />

        <textarea
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          className="border border-slate-500 p-4 h-32"
          type="text"
          placeholder="식당 설명, 평가"
          style={{ width: '500px', height: '200px' }}
        />

        <button
          type="submit"
          className="bg-blue-800 text-white font-bold px-6 py-3 w-fit rounded-md"
        >
          댓글 수정
        </button>
      </form>
    </div>
  )
}
