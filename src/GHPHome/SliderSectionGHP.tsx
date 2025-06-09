import Slider from "../components/Slider";
import Stability from "../assets/Stability.png"
import Comprehensive from "../assets/Comprehensive Development.png"
import CareerExploration from "../assets/Career Exploration.png"
import NetworkingMentorship from "../assets/Networking & Mentorship.png"


const SliderSectionGHP = () => {
    const slides = [
        {
            id: 1,
            title: "Stability & Security",
            description: "Graduates secure careers at Implica Global Corporation, a leading global organization, ensuring a stable, promising future. This stability provides confidence to focus on professional growth, skill development, and long-term career success.",
            img: Stability,
        },
        {
            id: 2,
            title: "Comprehensive Development Resources",
            description: "Graduates gain access to professional development tools, including training programs, mentorship, and career workshops, designed to support career growth, skill advancement, and long-term successwithin Implica Global Corporation.",
            img: Comprehensive,
        },
        {
            id: 3,
            title: "Career Exploration & Flexibility",
            description: "Graduates can explore diverse roles and departments at Implica Global Corporation, gaining career flexibility to align their skills, expertise, and passions, ensuring a tailored career path for long-term success.",
            img: CareerExploration,
        },
        {
            id: 4,
            title: "Networking & Mentorship",
            description: "Graduates gain networking opportunities and mentorship at Implica Global Corporation, connecting with industry professionals to build valuable relationships, gain career guidance, and develop skills for long-term professional success.",
            img: NetworkingMentorship,
        },
    ];

    return (

        <div className="mx-[16px] my-[22px] md:mx-[60px] md:my-[32px] lg:mx-[64px] lg:my-[37px]">
            <h2 className="text-[28px] lg:text-[40px] font-bold text-black mb-4">
               Graduate Hiring Program Benefits
            </h2>
            {/* Use the Slider Component */}
            <Slider slides={slides} />
        </div>

    );
};

export default SliderSectionGHP;
