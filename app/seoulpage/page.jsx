'use client'
import Hero from '../components/hero/Hero'
import Services from '../components/seoulpage/seoulpage'
import Testimonial from '../components/testimonial/Testimonial'

const service = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero pageName="SERVICES" title="지역 선택 [시군구]" />
      {/* Services Section */}
      <Services />
      {/* Testimonial Section */}
      <Testimonial />
    </>
  )
}

export default service
