import { BsArrowRight } from 'react-icons/bs'
import { AiFillPushpin } from 'react-icons/ai'
import Link from 'next/link'

const Services = () => {
  return (
    <>
      <section className="max-w-screen-2xl m-auto px-4 py-10">
        <div className="flex flex-wrap items-center">
          {/* 첫 번째 줄 */}
          <div className="flex w-full">
            <LocationItem label="개포동" />
            <LocationItem label="논현동" />
            <LocationItem label="대치동" />
            <LocationItem label="도곡동" />
            <LocationItem label="삼성동" />
            <LocationItem label="세곡동" />
          </div>

          {/* 두 번째 줄 */}
          <div className="flex w-full">
            <LocationItem label="수서동" />
            <LocationItem label="신사동" />
            <LocationItem label="압구정동" link="/Apgoojung" />
            <LocationItem label="역삼동" />
            <LocationItem label="율현동" />
            <LocationItem label="일원동" />
          </div>

          {/* 세 번째 줄 */}
          <div className="flex w-full">
            <LocationItem label="자곡동" />
            <LocationItem label="청담동" />
          </div>
        </div>
      </section>
    </>
  )
}

const LocationItem = ({ label, link = '#' }) => (
  <div
    data-aos="fade-up"
    data-aos-delay="100"
    className="w-2/4 lg:w-1/6 relative border border-solid border-gray-400 h-[250px] flex flex-col justify-center pl-8 hover:text-[#3369e7] duration-300 cursor-pointer group"
  >
    <Link href={link}>
      <AiFillPushpin className="text-4xl items-center" />
      <span className="text-lg text-center font-bold my-6 block">{label}</span>
      <BsArrowRight className="font-bold" />
      <span className="absolute top-0 left-0 w-0 h-1 duration-300 group-hover:bg-[#3369e7] origin-center group-hover:w-full"></span>
    </Link>
  </div>
)

export default Services
