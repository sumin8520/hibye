'use client'
import Hero from '../components/hero/Hero'
import Services from '../components/inseoulpage/inseoulpage'
import Testimonial from '../components/testimonial/Testimonial'

const service = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero pageName="SERVICES" title="지역 선택 [읍면동]" />
      {/* Services Section */}
      <Services />
      {/* Testimonial Section */}
      <Testimonial />
    </>
  )
}

export default service
