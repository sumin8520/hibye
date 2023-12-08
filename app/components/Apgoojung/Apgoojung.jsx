import Image from 'next/image'
import { IoIosCall } from 'react-icons/io'
import Link from 'next/link'

const WhyChooseUs = () => {
  const data = [
    {
      title: '땀땀',
      description: '베트남 쌀국수, 소곱창 쌀국수',
      additionalDescription:
        '서울특별시 강남구 압구정동 494 갤러리아 백화점 명품관 WEST 지하 1층 고메 494',
      icon: <IoIosCall />,
      extraDescription: '02-6905-3319',
      image: '/images/1st.jpg',
      link: 'https://map.naver.com/p/entry/place/1968953248?c=15.00,0,0,0,dh', // 추가된 링크
    },
    {
      title: '압구정의 하루일과',
      description: '와인바, 와인, 디저트',
      additionalDescription:
        '서울특별시 강남구 압구정동 369-1 현대상가 2동 101호',
      icon: <IoIosCall />,
      extraDescription: '02-547-6611',
      image: '/images/2nd.jpg',
      link: 'https://www.siksinhot.com/P/1115326#google_vignette', // 추가된 링크
    },
    // 추가적인 데이터 항목을 필요한 만큼 추가
  ]

  return (
    <>
      {data.map((item, index) => (
        <section
          key={index}
          className="flex max-w-screen-2xl m-auto px-8 py-5 flex-col lg:flex-row text-white justify-center overflow-x-hidden"
        >
          <div data-aos="fade-right" className="">
            <Image src={item.image} width={648} height={491} />
          </div>

          <div
            data-aos="fade-left"
            className="bg-[#133ea1f6] flex flex-col justify-center items-start lg:py-0 py-6 lg:px-14 px-2 w-full lg:w-2/4 gap-6 -mt-20 lg:-mt-0"
          >
            <div>
              <h2 className="text-[1.6rem] sm:text-[1.7rem] lg:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[2rem] leading-10 duration-200 text-white ">
                {item.title}
              </h2>

              <p className="text-[#ffffff80] mt-1">{item.description}</p>
            </div>

            <div className="flex gap-5">
              <div className="flex flex-col gap-1">
                <div>
                  {item.icon} <span>{item.extraDescription}</span>
                </div>

                <p className="text-[#ffffff80]">{item.additionalDescription}</p>
              </div>
            </div>

            <Link href={item.link}>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded">
                자세히 보기
              </button>
            </Link>
          </div>
        </section>
      ))}
    </>
  )
}

export default WhyChooseUs
