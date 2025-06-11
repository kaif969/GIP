import React from "react";

interface InfoBlockProps {
  image?: string;
  text: string;
  reverse?: boolean;
  hasImage?: boolean;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ image, text, reverse, hasImage = true }) => {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center w-full gap-5 my-6`}
    >
      {hasImage && image && (
        <div className="w-full lg:w-1/2">
          <img src={image} alt="Info Section" className="w-full h-auto" />
        </div>
      )}
      <div className={`w-full ${hasImage ? "lg:w-1/2" : "lg:w-full"} px-4`}>
        <p className="bg-[#130220] text-white text-lg lg:text-xl leading-relaxed p-4 lg:py-20">
          {text}
        </p>
      </div>
    </div>
  );
};

export default InfoBlock;
