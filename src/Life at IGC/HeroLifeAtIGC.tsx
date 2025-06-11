import HeroImg from "../assets/Hero_lifeAtIGC.png"
import vectorart from "../assets/vector_art.png"


const HeroLifeAtIGC = () => {
  return (
    <section className="w-full mt-[50px]">
      {/* Top Image Section */} 
      <div className="relative w-full">
        <img
          src={HeroImg}
          alt="Life at IGC"
          className="w-full lg:h-auto object-cover h-[527px]"
        />

        {/* Center Text Block - Overlayed */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[50%] sm:w-[80%] md:w-[30%] lg:w-[20%] xl:w-[20%] px-4 py-6 bg-white rounded-t-lg shadow-xl text-center">
          <h2 className="lg:text-4xl text-3xl font-bold font-['Nunito'] text-fuchsia-800">
            Life <span className="text-fuchsia-800 lg:text-4xl text-3xl font-light font-['Nunito']">at </span><span>IGC</span>
            <div className="outline outline-1 outline-fuchsia-800 "></div>
          </h2>
        </div>
      </div>
     <div className="flex flex-col items-center lg:items-end justify-end text-black text-center lg:text-5xl text-3xl font-extrabold font-['Nunito'] px-14 pt-14 lg:px-56 lg:pt-14 lg:pb-24">Where Innovation Meets Opportunity
     <img src={vectorart} alt="" className="w-[50%] pt-1 lg:w-[30%] lg:h-[40%]"/>
     </div></section>
  );
};

export default HeroLifeAtIGC;
