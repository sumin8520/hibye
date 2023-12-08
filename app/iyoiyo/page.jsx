'use client'
import Hero from '../components/hero/Hero'
import TopicsList from '../components/iyoiyo/TopicsList'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const service = () => {
  const data = [
    {
      image: '/images/33.jpg',
      seconimage: '/images/2222.jpg',
    },
  ]
  return (
    <>
      <Hero pageName="서울 마포구 마포대로" title="이요이요스시" />

      {data.map((item, index) => (
        <section
          key={index}
          className="flex max-w-screen-2xl m-auto px-8 py-5 flex-col lg:flex-row text-white justify-center overflow-x-hidden"
        >
          <div data-aos="fade-right" className="">
            <Image src={item.image} width={648} height={491} />
          </div>

          <div data-aos="fade-left" className="">
            <Image src={item.seconimage} width={648} height={491} />
          </div>
        </section>
      ))}

      <div className="flex items-center justify-center">
        <button className="mr-2 mt-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          자세히 보기
        </button>
        <Link href="/components/addTopic">
          <button className="ml-2 mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            댓글 작성
          </button>
        </Link>
      </div>

      <TopicsList />
    </>
  )
}

export default service
