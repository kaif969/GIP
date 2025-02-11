import Dropdown from '../components/DropDown'

interface DropdownItemProps {
    
    title: string
    content: string
    readMoreLink?: string
  }

  // Sample data for multiple dropdown items
const dropdownData: DropdownItemProps[] = [
    {
      
      title: "Q: Is the GIP a paid internship ?",
      content: "A: The Global Internship Program (GIP) is an academic, non-paid internship. The program focuses on providing students with valuable, hands-on experience and academic collaboration, helping them develop skills that are directly applicable to their future careers.",
    },
    {
     
      title: "Q: How many hours per week do I need to commit to the GIP ?",
      content: "A: Interns typically work between 20-30 hours per week, depending on the project requirements.",
    },
    {
     
      title: "Q: Is the internship fully remote ?",
      content: "A: Yes, the Global Internship Program is entirely remote, allowing you to work from anywhere in the world.",
    },
    {
      
      title: "Q: Is the GIP a paid internship ?",
      content: "A: The Global Internship Program (GIP) is an academic, non-paid internship. The program focuses on providing students with valuable, hands-on experience and academic collaboration, helping them develop skills that are directly applicable to their future careers.",
    },
  ]

  export default function DropdownHome() {
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