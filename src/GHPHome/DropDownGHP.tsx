import Dropdown from "../components/DropDown";
import Seamless from "../assets/Seamless Career Transition.png"
import ProfessionalDevelopment from "../assets/Professional Development.png"
import CompetitiveCompensation from "../assets/Competitive Compensation.png"
import OpportunitiestoWork from "../assets/Opportunities to Work.png"

interface DropdownItemProps {
  number: number;
  title: string;
  content: string;
  imageSrc: string;
}

const dropdownData: DropdownItemProps[] = [
  {
    number: 1,
    title: "1. Seamless Career Transition",
    content: `
            The Graduate Hiring Program provides a smooth transition for recent graduates, allowing them to move directly from academic life to a rewarding career at Implica Global Corporation. By providing structured support and training, we help graduates quickly adapt to the corporate world and thrive in their roles.
            <ul>
                <li>•  <strong>Mentorship & Support:</strong> Graduates receive guidance from experienced mentors who help them navigate their career journey within the company.</li>
                <li>•  <strong>Structured Onboarding:</strong>Our onboarding process ensures that graduates are well-prepared to contribute meaningfully from day one.</li>
                <li>•  <strong>Dynamic Work Environment:</strong> Join a fast-paced, innovative work culture where your ideas are valued, and you can make an immediate impact.</li>
            </ul>
        `,
    imageSrc: Seamless,
  },
  {
    number: 2,
    title: "2. Professional Development & Growth Opportunities",
    content: `<p>At Implica Global, we are committed to the continuous professional growth of our employees. Through our Graduate Hiring Program, new hires have access to various training programs, workshops, and career development resources designed to help them advance within the company.</p>
<ul>
    <li>•  <strong>Career Development Programs:</strong> Graduates can take advantage of ongoing training sessions, leadership development workshops, and skill-building programs.</li>
    <li>•  <strong>Internal Mobility:</strong> With the freedom to explore different roles and departments, graduates can identify areas of interest and expertise that align with their career goals.</li>
    <li>•  <strong>Personalized Growth Plans:</strong> Each graduate is provided with a tailored growth plan that supports their unique career aspirations and ensures long-term success within the company.</li>
</ul>`,
    imageSrc: ProfessionalDevelopment,
  },
  {
    number: 3,
    title: "3. Competitive Compensation & Comprehensive Benefits",
    content: `<p>We recognize the importance of ensuring financial well-being as graduates embark on their professional journeys. The Graduate Hiring Program offers competitive salaries, benefits, and comprehensive compensation packages to support a stable and promising start to their careers.</p>
<ul>
    <li>•  <strong>Competitive Salaries:</strong> Graduates receive competitive salaries that reflect the value they bring to Implica Global Corporation.</li>
    <li>•  <strong>Comprehensive Benefits:</strong> From health insurance to retirement plans, our benefits packages provide a solid foundation for long-term financial security and well-being.</li>
    <li>•  <strong>Performance-Based Incentives:</strong> Our graduates are rewarded for exceptional performance, with opportunities for bonuses and other incentives as they grow within the organization.</li>
</ul>`,
    imageSrc: CompetitiveCompensation,
  },
  {
    number: 4,
    title: "4. Opportunities to Work in Global Teams",
    content: `<p>Graduates in our Graduate Hiring Program collaborate with international teams, work on global projects, and gain valuable industry exposure across diverse markets. This real-world international experience equips them with critical skills to excel in a globalized economy and succeed in today’s competitive job market.</p>
<ul>
    <li>•  <strong>Cross-Department Collaboration:</strong> Graduates develop hands-on experience by working with various departments and cross-functional global teams on high-impact international projects. This collaboration enhances problem-solving abilities, fosters leadership skills, and provides direct exposure to global business operations.</li>
    <li>•  <strong>Global Perspective:</strong> At Implica Global Corporation, graduates work alongside industry experts, engage with global clients, and adopt international best practices. This global perspective prepares them for successful careers on the international stage, positioning them as future leaders in their fields.</li>
</ul>`,
    imageSrc: OpportunitiestoWork,
  },
];

export default function DropdownGHP() {
  return (
    <div className=" space-y-4 py-[20px] text-white bg-[#211827]">
      {/* {dropdownData.map((item) => ( */}
      <Dropdown
        heading="Why Join the Graduate Hiring Program ?"
        dropDownData={dropdownData}
      />
      {/* ))} */}
    </div>
  );
}
