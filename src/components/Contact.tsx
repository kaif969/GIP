// Code to display the black section on the page

interface ContactUsProps {
  title?: string;
  body?: string
}

const ContactUs = ({ title, body }: ContactUsProps) => {

  return (
    <div className="bg-black px-[16px] lg:px-[64px] py-[44px] text-white font-sans">
      <h1 className="text-[32px] lg:text-[40px] py-[25px] font-semibold">{title}</h1>
      <p className="text-[20px] lg:text-[24px] font-normal pb-[25px]">{body} <br />  </p>
    </div>

  )
}

export default ContactUs