'use client'

import Hero from '../components/hero/Hero'
import Apgoojung from '../components/Apgoojung/Apgoojung'

export default function Home() {
  return (
    <>
      <Hero
        pageName="추천결과"
        title="서울 강남구 압구정동"
        bgColor="#ffffff"
      />
      <Apgoojung />
    </>
  )
}
