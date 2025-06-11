import InfoBlock from "../components/InfoBlock";
import IGC1 from "../assets/IGC1.png"
import IGC2 from "../assets/IGC2.png"

const LifeAtIGCSection = () => {
  return (
    <section className="">
      <div className="">
        <InfoBlock
          image={IGC1}
          text={`At Implica Global Corporation (IGC), we believe that the success of our organization is driven by the passion, creativity, and dedication of our people. We pride ourselves on fostering a vibrant, dynamic, and inclusive work environment where every team member is empowered to grow, innovate, and make a real impact.`}
          hasImage={true}
          reverse
        />

        <InfoBlock
          image={IGC2}
          text={`At IGC, we offer a dynamic work environment that fosters career development, diversity, and collaboration. Our culture drives personal growth, professional excellence, and global impact. Whether in technology, consulting, or management, you'll learn from industry experts, work on impactful projects, and develop leadership skills in an innovation-driven workplace.`}
          hasImage={true}
        />
      </div>
    </section>
  );
};

export default LifeAtIGCSection;
