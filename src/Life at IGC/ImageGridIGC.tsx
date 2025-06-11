import Opportunities from "../assets/Opportunities for Growth.png"
import Diversity from "../assets/Diversity, Equity & Inclusion (DEI).png"
import Balance from "../assets/Work-Life Balance.png"
import Making from "../assets/Making an Impact.png"



const allData = [
  {
    subtitle: "Opportunities for Growth",
    description: "At IGC, your career development is our priority. We provide tools, resources, and opportunities to help you thrive and advance in a growth-focused environment. With training programs, mentorship, and professional development, we support you in launching your career or expanding your skills for success.",
    image: Opportunities,
  },
  {
    subtitle: "Diversity, Equity & Inclusion (DEI)",
    description: "At IGC, we foster a diverse, equitable, and inclusive workplace where everyone feels empowered. Diversity drives innovation, creativity, and better decisions, strengthening our company. Employees from all backgrounds get equal opportunities to thrive, contribute unique perspectives, and grow in a supportive, inclusive environment.",
    image: Diversity,
  },
  {
    subtitle: "Work-Life Balance",
    description: "At IGC, we prioritize employee well-being by fostering a healthy work-life balance that enhances productivity and job satisfaction. We offer flexible working arrangements and well-being initiatives that support both physical and mental health, ensuring employees feel valued, supported, and empowered in their professional and personal lives.",
    image: Balance,
  },
  {
    subtitle: "Making an Impact",
    description: "At IGC, we believe in using our business as a force for good. Through our corporate social responsibility (CSR) initiatives and Implica Foundation, we are committed to making a positive impact on the communities we serve and the environment we share. We encourage all employees to get involved in our social impact programs, whether through volunteering, participating in sustainability initiatives, or supporting our charitable efforts.",
    image: Making,
  },
]

function ImageGridIGC() {
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
export default ImageGridIGC;