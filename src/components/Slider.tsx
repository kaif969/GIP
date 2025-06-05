import { useState } from "react";
import ArrowLeft from "../assets/arrow_left.png";
import ArrowRight from "../assets/arrow_right.png";


interface Slide {
    title: string;
    description: string;
    img: string;
}

interface SliderProps {
    slides: Slide[];
}

const Slider = ({ slides }: SliderProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <>
        {/* Navigation Buttons */}
        <div className="flex gap-3 justify-end items-center mb-4">
            <button
                onClick={handlePrev}
                className="w-10 hover:scale-125 transition-transform duration-300">
                <img src={ArrowLeft} alt="" />
            </button>
            <button
                onClick={handleNext}
                className="w-10 hover:scale-125 transition-transform duration-300">
                <img src={ArrowRight} alt="" />
            </button>
        </div>
      
                

        <div className="relative bg-[#141E32] text-white p-8 rounded-lg flex flex-col lg:flex-row justify-between items-center">

            {/* Header Section */}
            <div className="lg:w-[660px] flex flex-col justify-center gap-3 lg:gap-6">
                {/* Title */}
                <h3 className="text-xl font-semibold">{slides[currentSlide].title}</h3>
                <p className="text-white lg:text-xl lg:font-medium font-['Nunito'] lg:pr-[130px]">{slides[currentSlide].description}</p>
            </div>

            {/* Content Section */}
            <div className="flex lg:flex-row mt-4 justify-between items-end lg:justify-between">
                <img src={slides[currentSlide].img} alt={slides[currentSlide].title} className="w-full lg:w-[370px] lg:h-[396px] object-cover rounded-[18px]" />
            </div>
        </div>
        </>
       
    );
};

export default Slider;