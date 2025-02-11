import ProgramDuration from "../assets/Program Duration .png";
import WhoShouldApply from "../assets/Who Should Apply.png";
import HowToApply from "../assets/How to Apply .png";



const allData = [
    {
        subtitle: "Program Duration",
        description: "The Global Internship Program (GIP) is a remote, flexible internship lasting 3 to 6 months, allowing you to balance academic commitments while gaining career-ready skills. You’ll work on impactful projects, collaborate with global teams, and build a strong portfolio to stand out in today’s competitive job market.",
        image: ProgramDuration,
    },
    {
        subtitle: "Who Should Apply?",
        description: "We are looking for motivated, passionate students eager to learn and grow. If you're studying business, technology, data science, or other emerging fields, the GIP at Implica Global Co. is the perfect opportunity to gain hands-on experience while advancing your career.",
        image: WhoShouldApply,
    },
    {
        subtitle: "How to Apply",
        description: "Are you ready to take the next step in your career and gain meaningful experience? Apply for the Global Internship Program (GIP) today!",
        image: HowToApply,
    },
];



function ImageGrid() {
    return (
        <>
            <div className="grid lg:grid-cols-2 bg-black text-white">
                {allData.map((item) => (
                    <>
                        <div className="text-left px-[16px] lg:pl-[64px]">
                            <h3 className="text-[28px] font-bold lg:text-[40px] font-sans items-center pb-[10px] pt-[30px]">
                                {item.subtitle}
                            </h3>
                            <p className="text-xl font-normal lg:text-[28px] font-sans  w-full lg:w-[566px] items-center pb-[10px]">
                                {item.description}
                            </p>
                        </div>
                        {/* <div > */}
                        <img
                            src={item.image}
                            alt=""
                            className="w-full lg:h-[480px] h-auto object-cover"/>
                        {/* </div> */}
                    </>
                ))}
            </div>
        </>
    )
}
export default ImageGrid