import { useState } from "react";


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

        <div className="relative bg-[#1B2535] text-white p-6 rounded-lg flex flex-col items-start">



            {/* Header Section */}
            <div className="w-full flex justify-between items-center">
                {/* Title */}
                <h3 className="text-xl font-semibold">
                    {slides[currentSlide].title}
                </h3>


                {/* Navigation Buttons */}
                <div className="flex space-x-2">
                    <button
                        onClick={handlePrev}
                        className="bg-black text-white p-2 rounded-full hover:bg-gray-700">
                        &#8592;
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-black text-white p-2 rounded-full hover:bg-gray-700">
                        &#8594;
                    </button>
                </div>
            </div>

            {/* Content Section */}

            <div className="flex flex-col lg:flex-row mt-4 justify-center items-start lg:justify-between">
                <p className="text-white lg:text-xl lg:font-medium font-['Nunito'] lg:pr-[130px]">{slides[currentSlide].description}</p>
                <img src={slides[currentSlide].img} alt={slides[currentSlide].title} className="lg:w-[370px] lg:h-[396px] h-[396px] object-cover rounded-[18px]" />
            </div>
        </div>
    );
};

export default Slider;