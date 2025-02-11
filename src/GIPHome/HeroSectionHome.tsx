import HeroSection from '../components/HeroSection'
import HeroImage from '../assets/Hero Image.png'

interface HeroSectionProps{
    number: number,
    imageSrc: string,
    title: string,
    subtitle: string,
    body1: string,
    body2: string,
}

const HeroSectionData : HeroSectionProps[] =[
    {
        number: 1,
        imageSrc: HeroImage,
        title: "Shape Your Future with Practical Experience Globally",
        subtitle: "Careers / Global Internship Program (GIP)",
        body1: "The Global Internship Program (GIP) at Implica Global Corporation is a remote, flexible internship designed to bridge the gap between academic learning and real-world industry experience. This virtual internship offers hands-on training, global collaboration, and exposure to industry standards, helping students develop career-ready skills while balancing their studies.",
        body2: "With 3 to 6-month internships, participants gain mentorship, hands-on experience, and in-demand skills. Interns earn a completion certificate and recommendation letter, enhancing career prospects. Whether seeking a work-from-home internship with certification or a career-focused program, this offers practical experience. Apply now to start your global internship journey!",
    }
] 

function HeroSectionHome() {
  return (
    <div>
        {HeroSectionData.map(item => (
            <HeroSection key={item.number} {...item}/>
        ))}
    </div>
  )
}

export default HeroSectionHome