import Slider from "../components/Slider";
import Hands from "../assets/Hands-On Experience.png"
import Industry from "../assets/Industry Exposure.png"
import Flexible from "../assets/Flexible & Remote.png"
import Global from "../assets/Global Collaboration.png"
import Networking from "../assets/Networking Opportunities.png"


const SliderSection = () => {
    const slides = [
        {
            id: 1,
            title: "Hands-On Experience",
            description: "Develop practical, industry-relevant skillsthat directly apply to your future career. This hands-on internshipprovides real-world experience, preparing you for your next professional step with in-demand expertise.",
            img: Hands,
        },
        {
            id: 2,
            title: "Industry Exposure",
            description: "Gain real-world experience by working on live projects aligned with industry standards, giving you a deeper understanding of business operations in your field of study.",
            img: Industry,
        },
        {
            id: 3,
            title: "Flexible & Remote",
            description: "The GIP is remote, offering flexible work experience that fits your academic schedule, allowing students to gain valuable industry skills without disruption.",
            img: Flexible,
        },
        {
            id: 4,
            title: "Global Collaboration",
            description: "Collaborate with international teams, contribute to global projects, and gain cross-cultural experience, equipping you with the skills to succeed in today’s globalized workforce.",
            img: Global,
        },
        {
            id: 5,
            title: "Networking Opportunities",
            description: "Expand your professional network, connect with industry experts, and gain mentorship from experienced professionals who provide career guidance to help you navigate your professional growth.",
            img: Networking,
        },
    ];

    return (

        <div className="mx-[16px] my-[22px] md:mx-[60px] md:my-[32px] lg:mx-[64px] lg:my-[37px]">
            <h2 className="text-[28px] lg:text-[40px] font-bold text-black mb-4">
                Benefits of the Global Internship Program (GIP)
            </h2>
            <p className="text-black text-xl font-medium font-['Nunito'] pb-2 lg:pb-4">
                Our GIP is designed to not only provide students with real-world
                experience but also to foster personal and professional growth. Here
                are some key benefits of joining the program:
            </p>

            {/* Use the Slider Component */}
            <Slider slides={slides} />
        </div>

    );
};

export default SliderSection;
