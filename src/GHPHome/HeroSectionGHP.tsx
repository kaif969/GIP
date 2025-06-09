import heroImg from "../assets/hero_img_ghp_edit.png";

const HeroSectionGHP = () => {
  return (
    <>
      <section className="relative h-screen bg-cover bg-center text-black  mt-[50px]">
        {/* Background Image */}
        <img
          src={heroImg}
          alt="GHP Hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Text Content */}
        <div className="relative z-20 flex flex-col justify-start h-full px-4 sm:px-8 md:px-16 max-w-7xl mx-auto my-11">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 mt-6 lg:mt-20 max-w-3xl lg:max-w-full">
            Careers / Graduate Hiring Program (GHP)
          </h1>
          <p className="text-base sm:text-lg md:text-2xl font-light max-w-2xl">
            Your Path to a Thriving Career at Implica Global Co.
          </p>
        </div>
      </section>
      <div className="bg-[#130220] text-white px-[16px] lg:px-[64px] py-[64px] text-[20px] lg:text-[24px]">
        <p>
          At Implica Global Corporation (IGC), we invest in future talent by
          recruiting and nurturing the next generation of professionals. Our
          Graduate Hiring Program helps talented graduates from partner
          universities transition seamlessly from academia to a global career.
          This career development program provides hands-on experience,
          professional mentorship, and essential skills to shape future industry
          leaders.
        </p>
        <br />
        <p>
          Graduates in our innovation-driven environment gain real-world
          exposure, work on impactful projects, and receive continuous
          professional development. This structured pathway equips them with
          in-demand skills for career success.
        </p>
      </div>
    </>
  );
};

export default HeroSectionGHP;
