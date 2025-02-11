import ContactUs from "../components/Contact"

const contactUsData = [
    {
        number: 1,
        title: "Join the Global Internship Program (GIP) and start building the career of your dreams with Implica global Co.",
        body: "Experience the future of work, learn from industry leaders, and prepare for a global career—all from the comfort of your home. Apply now to start your remote internship journey!",
    }
]

function ContactUsHome() {
  return (
    <div>
        {contactUsData.map(data=>(
          <div className="flex">
          
          <ContactUs key={data.number} {...data}/>
          
          </div>
        ))}
    </div>
  )
}

export default ContactUsHome