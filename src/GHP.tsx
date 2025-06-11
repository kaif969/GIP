import DropdownGHP from "./GHPHome/DropDownGHP"
import FAQghp from "./GHPHome/FAQSection"
import HeroSectionGHP from "./GHPHome/HeroSectionGHP"
import ImageGridGHP from "./GHPHome/ImageGridGHP"
import SliderSectionGHP from "./GHPHome/SliderSectionGHP"
import ContactGHP from "./GHPHome/ContactGHP"


function GHP() {
  return (
    <>
    <HeroSectionGHP/>
    <DropdownGHP/>
    <SliderSectionGHP/>
    <ImageGridGHP/>
    <FAQghp/>
    <ContactGHP/>
    </>
  )
}

export default GHP