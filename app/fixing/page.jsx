import Image from 'next/image'
const fixing = () => {
  return (
    <>
      {/* Section containing an image and a text box */}

      <section className="flex items-center justify-center h-screen flex-col">
        <Image
          data-aos="fade-center"
          src="/images/coming.jpg"
          width={400}
          height={200}
          alt="Coming soon Image"
        />

        {/* Text content */}
        <p
          className="text-[#113ea1] text-center border-20"
          style={{
            fontSize: '20px',
          }}
        >
          아직 페이지가 준비중에 있습니다!
        </p>
      </section>
    </>
  )
}

export default fixing
