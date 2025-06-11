import ContactUs from "../components/Contact"

const contactUsData = [
    {
        number: 1,
        title: "Join Us at Implica Global Corporation",
        body: "At IGC, you’re not just joining a company, you’re becoming part of a global community of innovators, thinkers, and leaders shaping the future. We are committed to fostering a dynamic workplace where you can thrive, grow, and make a meaningful impact. If you're ready to take the next step in your career, join IGC and explore endless opportunities for professional growth, leadership, and innovation.",
    }
]

function ContactIGC() {
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

export default ContactIGC