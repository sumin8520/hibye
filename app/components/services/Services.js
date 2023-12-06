import { AiFillPushpin } from 'react-icons/ai'
import { TfiAngleDoubleRight } from 'react-icons/tfi'
import Link from 'next/link'

const Services = () => {
  return (
    <>
      <section className="max-w-screen-2xl m-auto px-4 py-10">
        <div className="flex flex-wrap items-center">
          {/* 첫 번째 줄 */}
          <div className="flex w-full">
            <LocationItem label="서울" link="/seoulpage" />
            <LocationItem label="강원" />
            <LocationItem label="경기" />
            <LocationItem label="경남" />
            <LocationItem label="경북" />
            <LocationItem label="광주" />
          </div>

          {/* 두 번째 줄 */}
          <div className="flex w-full">
            <LocationItem label="대구" />
            <LocationItem label="대전" />
            <LocationItem label="부산" />
            <LocationItem label="세종" />
            <LocationItem label="울산" />
            <LocationItem label="인천" />
          </div>

          {/* 세 번째 줄 */}
          <div className="flex w-full">
            <LocationItem label="전남" />
            <LocationItem label="전북" />
            <LocationItem label="제주" />
            <LocationItem label="충남" />
            <LocationItem label="충북" />
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
      <TfiAngleDoubleRight
        className="font-bold"
        style={{ fontSize: '1.5em', fontWeight: 'bold' }}
      />
      <span className="absolute top-0 left-0 w-0 h-1 duration-300 group-hover:bg-[#3369e7] origin-center group-hover:w-full"></span>
    </Link>
  </div>
)

export default Services
