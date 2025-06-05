import BusinessConsulting from "../assets/Business Consulting.png"
import CorporateLegal from "../assets/Corporate Legal.png"
import Social from "../assets/Social Media Marketing.png"
import Digital from "../assets/Digital Marketing.png"
import Human from "../assets/Human Resources Management.png"
import Research from "../assets/Research & Development.png"
import Software from "../assets/Software Development.png"
import Data from "../assets/Data Analytics.png"
import AI from "../assets/Artificial Intelligence.png"


const WhyJoin= () => {
  const data = [
    {
      id: 1,
      title: "1. Business Consulting",
      img: BusinessConsulting,
    },
    {
      id: 2,
      title: "2. Corporate Legal",
      img: CorporateLegal,
    },
    {
      id: 3,
      title: "3. Social Media Marketing",
      img: Social,
    },
    {
      id: 4,
      title: "4. Digital Marketing",
      img: Digital,
    },
    {
      id: 5,
      title: "5. Human Resources Management",
      img: Human,
    },
    {
      id: 6,
      title: "6. Research & Development (R&D)",
      img: Research,
    },
    {
      id: 7,
      title: "7. Software Development",
      img: Software,
    },
    {
      id: 8,
      title: "8. Data Analytics",
      img: Data,
    },
    {
      id: 9,
      title: "9. Artificial Intelligence (AI)",
      img: AI,
    },
  ];
  return (
    <div className="bg-gradient-to-r from-[#141414] via-[#43192a] to-[#141414] text-white lg:py-8 lg:px-4">
      <div className="text-white text-3xl lg:text-[40px] font-bold font-['Nunito'] px-[16px] py-5 lg:px-[64px]">Why Join the Global Internship Program (GIP) ?<br /></div>
      <div className="text-white text-lg lg:text-xl font-medium font-['Nunito'] px-[16px] py-5 lg:px-[64px]">At Igc, we believe that real-world experience is crucial to academic growth. Our Global Internship Program (GIP) is designed to equip students with industry-relevant skills and prepare them for the global job market. Whether you’re a business student or a budding software developer, the GIP offers hands-on exposure to real-world projects and industry practices across various domains.<br /></div>
      <div className="text-white hidden md:block text-xl lg:text-2xl font-semibold font-['Nunito'] px-[16px] py-5 lg:px-[64px] lg:py-[24px]">The GIP provides internships in the following key domains:</div>
      {/* Mobile grid */}
     
      {/* Desktop grid */}
      <div className="px-[64px] hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col items-start space-y-4 text-center">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <img src={item.img} alt={item.title} className="w-[300px] h-[420px] object-cover " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyJoin;
