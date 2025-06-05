import { useState } from 'react'
import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronDown } from 'lucide-react'


// Define the structure of each dropdown item
interface DropdownItemProps {
  heading: string,
  dropDownData: Array<{
    title: string
    content: string
  }>
}

// DropdownItem component
const Dropdown = ({ heading, dropDownData }: DropdownItemProps) => {
  // Initialize an array to track the state of each collapsible item
  const [openIndex, setOpenIndex] = useState<number | null>(null); // null means no item is open

  // Function to handle opening and closing of individual collapsible items
  const handleToggle = (index: number) => {
    // If the same item is clicked, close it (toggle behavior), otherwise open the clicked item
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <h1 className="flex justify-start px-[16px] lg:px-[64px] font-bold mx-auto text-[32px] lg:text-[48px]">{heading}</h1>
      <div className="max-w-full  lg:w-full px-[16px] lg:px-[64px] mx-auto mb-4 font-sans">
        {dropDownData.map((data, index) => (
          <Collapsible.Root
            className="w-full"
            open={openIndex === index} // Only open the item if the index matches `openIndex`
            onOpenChange={() => handleToggle(index)} // Toggle the item's open/close state
          >
            <Collapsible.Trigger className="flex text-start items-start lg:items-center justify-between mx-auto w-full bg-[#211827] text-white shadow-sm focus:outline-none border-b-2 border-slate-300 mt-3">
              <span className="text-[20px] lg:text-[32px] font-medium py-[10px]">
                {data.title}
              </span>
              <ChevronDown
                className={`w-9 h-9 transition-transform duration-200 border-2 border-slate-500 rounded-[20px] ${openIndex === index ? 'transform rotate-180' : ''}`}
              />
            </Collapsible.Trigger>
            <Collapsible.Content className="mt-2 p-4 bg-[#211827] rounded-lg shadow-sm ">
              <div className="flex flex-col lg:flex-row">
                <div className="flex-grow"><div className="dropdown-content text-[18px]" dangerouslySetInnerHTML={{ __html: data.content }} />
                </div>
              </div>
            </Collapsible.Content>
          </Collapsible.Root>
        ))}
    </div >
    </>
  );
};

export default Dropdown;