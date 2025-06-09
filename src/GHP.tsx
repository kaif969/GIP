import DropdownGHP from "./GHPHome/DropDownGHP"
import FAQghp from "./GHPHome/FAQSection"
import HeroSectionGHP from "./GHPHome/HeroSectionGHP"
import ImageGridGHP from "./GHPHome/ImageGridGHP"
import SliderSectionGHP from "./GHPHome/SliderSectionGHP"



function GHP() {
  return (
    <>
    <HeroSectionGHP/>
    <DropdownGHP/>
    <SliderSectionGHP/>
    <ImageGridGHP/>
    <FAQghp/>
    </>
  )
}

export default GHP