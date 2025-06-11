
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Innovative from "../assets/Innovative Mindset.png"
import Collaborative from "../assets/Collaborative Work Environment.png"
import Inclusive from "../assets/Inclusive & Diverse.png"



const imageData = [
  { src: Innovative , alt: "Innovative Mindset", label: "Innovative Mindset",  },
  { src: Collaborative, alt: "Collaborative Work Environment", label: "Collaborative Work Environment", },
  { src: Inclusive, alt: "Inclusive & Diverse", label: "Inclusive & Diverse",},
]

const imageContainerClasses =
  "relative group overflow-hidden w-[273px] h-[406px] ";
const imageClasses =
  "w-full h-full object-cover";
const overlayClasses =
  "absolute top-0 left-0 w-full h-full flex  bg-transparent text-white text-xl font-bold  px-[20px] py-[20px]";


interface ImageCardProps {
  src: string
  alt: string
  label: string
  label1?: string
}

const ImageCard = ({ src, alt, label,}: ImageCardProps) => (
  <div className={imageContainerClasses}>
    {/* Image */}
    <img src={src} alt={alt} className={imageClasses} />

    {/* Visible Label */}
    <div className={overlayClasses}>{label}</div>

    {/* Hidden Label (Visible on Hover) */}
    <div
      className="absolute top-0 left-0 w-full h-full flex  bg-transparent text-white text-[0px] font-bold px-[20px] py-[20px]"
    >
      <p className="text-white px-4 py-2 rounded">
        {label}
        <br />
      </p>
    </div>
  </div>
)



const ImageGrid = () => {
  const sliderSettings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "15px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  }

  return (
    <div className="bg-white px-[16px] lg:px-[64px] sm:px-16  text-black">
      <h2 className="flex justify-start text-black text-3xl sm:text-5xl font-bold font-sans mb-6 pt-[26px] lg:pt-[47px]">Our Culture</h2>

       <p className='text-[20px] lg:text-[24px] pb-[25px]'>At IGC, we are more than just a company, we are a thriving global community built on innovation, collaboration, and diversity. Our inclusive workplace empowers professionals to contribute ideas, drive change, and excel in a dynamic, growth-oriented environment where every team member feels valued and supported.</p>
      
      
      {/* Mobile Slider */}
      <div className="md:hidden overflow-x-hidden pb-[37px]">
        <Slider  {...sliderSettings}>
          {imageData.map((image, index) => (
            <div key={index} className="px-[2px]">
              <ImageCard src={image.src} alt={image.alt} label={image.label} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] pb-[54px]">
        {imageData.map((image, index) => (
          <ImageCard key={index} src={image.src} alt={image.alt} label={image.label} />
        ))}
      </div>
    </div>
  )
}

export default ImageGrid