import Dropdown from '../components/DropDown'

interface DropdownItemProps {
    
    title: string
    content: string
    readMoreLink?: string
  }

  // Sample data for multiple dropdown items
const dropdownData: DropdownItemProps[] = [
    {
      
      title: "Q: How long is the Graduate Hiring Program ?",
      content: "A: The Graduate Hiring Program offers full-time positions with a structured onboarding and career development plan. The program is designed for recent graduates looking for a long-term career at Implica Global Corporation.",
    },
    {
     
      title: "Q: Is the program open to international candidates ?",
      content: "A: Yes, we welcome applications from international candidates who meet the eligibility requirements.",
    },
    {
     
      title: "Q: What support is provided during the program ?",
      content: "A: Graduates are assigned mentors, receive regular feedback, and have access to various professional development resources to ensure their success.",
    },
    {
      
      title: "Q: What are the benefits of joining the program ?",
      content: "A: Graduates benefit from competitive compensation packages, mentorship, training programs, and the opportunity to work in a dynamic, global environment.",
    },
  ]

  export default function FAQghp() {
    const basePath = ''
    const dropDownDataWithLinks = dropdownData.map(item => ({
      ...item,
      readMoreLink: item.title.toLowerCase().includes('')? item.readMoreLink : `${basePath}/${item.readMoreLink}`,
    }))
  return (
    <div className="text-white space-y-4 py-[20px] bg-[#211827]">
        <Dropdown heading="Frequently Asked Questions (FAQs)" dropDownData={dropDownDataWithLinks}/>
    </div>
  )
}