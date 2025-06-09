import WhoShouldApply from "../assets/Who Should Apply_ghp.jpg"
import HowtoApply from "../assets/How to Apply_ghp.jpg"


const allData = [
  {
    subtitle: "Who Should Apply?",
    description: "We are looking for ambitious, motivated, and innovative graduates from partner universities who are ready to take on new challenges and make a real-world impact. If you are passionate about driving change, learning from industry experts, and growing within a global organization, the Graduate Hiring Program is the perfect opportunity to advance your career.",
    image: WhoShouldApply,
  },
  {
    subtitle: "How to Apply",
    description: "Ready to start your career with Implica Global Corporation? Apply to our Graduate Hiring Program today and take the first step towards a successful, rewarding career in a leading global company.",
    image: HowtoApply,
  },
]

function ImageGridGHP() {
  return (
    <>
      <div className="flex flex-col bg-gradient-to-l from-slate-600 to-slate-900 text-white">
        {allData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}>
            {/* Text Section */}
            <div className="w-full lg:w-1/2 text-left px-4 lg:px-16 py-8 flex items-center">
              <div>
                <h3 className="text-[28px] font-bold lg:text-[40px] font-sans pb-4">
                  {item.subtitle}
                </h3>
                <p className="text-xl lg:text-[28px] font-normal font-sans max-w-[566px] pb-4">
                  {item.description}
                </p>
                {index === 1 && (
                  <button className="mt-4 px-16 py-3 bg-[#683FEA] text-white font-semibold rounded-3xl hover:bg-[#7051d8af] transition-all">
                    Apply Now
                  </button>
                )}
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <img
                src={item.image}
                alt={item.subtitle || "image"}
                className="w-full lg:h-[480px] h-auto object-cover"/>
              </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default ImageGridGHP;
