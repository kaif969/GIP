
interface HeroSectionProps {
  number: number,
  imageSrc: string,
  title: string,
  subtitle: string,
  body1: string,
  body2?: string,
  body3?: string
}

function HeroSection({imageSrc, title, subtitle, body1, body2, body3}: HeroSectionProps) {
  return (
    // <div>HeroSection</div>
    <>
        <div className="relative min-h-screen bg-cover bg-center bg-gray-900 text-white  mt-[50px]">

        <div className="absolute inset-0 bg-black brightness-50 opacity-7 0">
            <img src={imageSrc} alt="" className="h-screen w-full object-cover" /> 
        </div>
        <div className='relative z-10 px-[15px] lg:px-[162px] pt-[68px]'> 
          <div className='flex flex-row  border-b-2 border-slate-500 w-full'>
            {/* <img src="" alt="" className='max-h-[50px] lg:max-h-[100px] brightness-100' /> */}
            <div className="text-white text-[32px] lg:text-[40px] font-light font-['HP Simplified W01 Light']">{subtitle}</div>
            {/* <span className="text-white text-[30px] lg:text-[40px] pl-[10px] font-hpSimplified">A.I.</span>  */}
            <p className='flex items-center text-[22px] lg:text-[55px] '></p>
          </div>
            <h1 className="text-[30px] lg:text-[64px] font-['Nunito'] pt-[20px]">{title}</h1>
        </div>
        </div>
        <div className="bg-[#130220] text-white px-[16px] lg:px-[64px] py-[64px] text-[20px] lg:text-[24px]">
            <p>{body1} <br /> <br /> {body2} <br /><br />{body3}</p>
        </div>
    </>
  )
}

export default HeroSection