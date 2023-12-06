'use client'

// Importing various components used in the Home component
import Hero from '../components/hero/Hero'
import Apgoojung from '../components/Apgoojung/Apgoojung'

// Defining the Home component as a default export
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        pageName="추천결과"
        title="서울 강남구 압구정동"
        bgColor="#ffffff"
      />
      <Apgoojung />
      {/* Recent Blog Section */}
    </>
  )
}
