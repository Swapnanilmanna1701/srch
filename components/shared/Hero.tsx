//import Image from "next/image";
import { FC } from "react";
import InputArea from "./InputArea";
import Orb from "@/components/orb";
//import ShinyText from "@/components/shineybutton";
import BannerButton from "@/components/button1"
type THeroProps = {
  promptValue: string;
  setPromptValue: React.Dispatch<React.SetStateAction<string>>;
  handleDisplayResult: () => void;
};

const Hero: FC<THeroProps> = ({
  promptValue,
  setPromptValue,
  handleDisplayResult,
}) => {
  const handleClickSuggestion = (value: string) => {
    setPromptValue(value);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <a className=""
        
      >
        <BannerButton />

      </a>
      <div className="" style={{ width: "100%", height: "500px", position: "relative" }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
      <h2 className="bg-gradient-to-r from-amber-500 via-orange-600 to-amber-500 bg-clip-text text-transparent pb-7 pt-2 opacity-100 saturate-200 text-center text-3xl font-semibold leading-[normal] lg:text-[64px] drop-shadow-2xl">
        Search smarter & faster
      </h2>

      {/* input section */}
      <div className="w-full max-w-[708px] pb-0">
        <InputArea
          promptValue={promptValue}
          setPromptValue={setPromptValue}
          handleDisplayResult={handleDisplayResult}
        />
      </div>

      {/* Suggestions section */}
      <div className="flex flex-wrap items-center justify-center gap-4 pb-[30px] lg:flex-nowrap lg:justify-normal mt-5">
        {suggestions.map((item) => (
          <div
            className="flex h-[35px] cursor-pointer items-center justify-center gap-[5px] border border-solid border-blue-400 border-b-blue-700 rounded-full bg-black px-4 py-2 bg-gradient-to-r from-blue-700 to-violet-300"
            onClick={() => handleClickSuggestion(item?.name)}
            key={item.id}
          >
            
            <span className="text-sm font-light leading-[normal] text-white">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Github link section */}
    </div>
  );
};

type suggestionType = {
  id: number;
  name: string;
  icon: string;
};

const suggestions: suggestionType[] = [
  {
    id: 1,
    name: "Photosynthesis process in plants",
    icon: "/img/icon _leaf_.svg",
  },
  {
    id: 2,
    name: "The benefits of weightlifting",
    icon: "/img/icon _dumbell_.svg",
  },
  {
    id: 3,
    name: "Einstein's theory of relativity",
    icon: "/img/icon _atom_.svg",
  },
];

export default Hero;
