'use client'
import Hero from '../components/hero/Hero'
import Services from '../components/services/Services'
import Testimonial from '../components/testimonial/Testimonial'

const service = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero pageName="SERVICES" title="지역 선택 [광역시도]" />
      {/* Services Section */}
      <Services />
      {/* Testimonial Section */}
      <Testimonial />
    </>
  )
}

export default service
