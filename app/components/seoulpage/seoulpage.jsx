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
            <LocationItem label="강남구" link="/inseoulpage" />
            <LocationItem label="강북구" />
            <LocationItem label="강서구" />
            <LocationItem label="관악구" />
            <LocationItem label="광진구" />
            <LocationItem label="구로구" />
          </div>

          {/* 두 번째 줄 */}
          <div className="flex w-full">
            <LocationItem label="금천구" />
            <LocationItem label="노원구" />
            <LocationItem label="도봉구" />
            <LocationItem label="동대문구" />
            <LocationItem label="동작구" />
            <LocationItem label="마포구" />
          </div>

          {/* 세 번째 줄 */}
          <div className="flex w-full">
            <LocationItem label="서대문구" />
            <LocationItem label="서초구" />
            <LocationItem label="성동구" />
            <LocationItem label="성북구" />
            <LocationItem label="송파구" />
            <LocationItem label="양천구" />
          </div>

          {/* 네 번째 줄 */}
          <div className="flex w-full">
            <LocationItem label="영등포구" />
            <LocationItem label="용산구" />
            <LocationItem label="은평구" />
            <LocationItem label="종로구" />
            <LocationItem label="중구" />
            <LocationItem label="중랑구" />
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
