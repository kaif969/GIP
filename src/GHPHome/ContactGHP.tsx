import ContactUs from "../components/Contact"

const contactUsData = [
    {
        number: 1,
        body: "Join the Graduate Hiring Program at Implica Global Corporation and start your career with a company that values your growth, nurtures your potential, and offers exciting opportunities for professional and personal development.",
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