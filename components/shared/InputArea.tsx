//import Image from "next/image";
import { FC } from "react";
import TypeAnimation from "./TypeAnimation";
import { ArrowRight } from "lucide-react";
//import GradientFillButton from "../button";
import AIButton from "../button";
//import Input from "@/components/input"

type TInputAreaProps = {
  promptValue: string;
  setPromptValue: React.Dispatch<React.SetStateAction<string>>;
  handleDisplayResult: () => void;
  disabled?: boolean;
  reset?: () => void;
};

const InputArea: FC<TInputAreaProps> = ({
  promptValue,
  setPromptValue,
  handleDisplayResult,
  disabled,
  reset,
}) => {
  return (
    <form
      className="mx-auto flex h-[70px] w-full items-center justify-between rounded-3xl border border-blue-500 border-b-blue-600 bg- px-3 "
      onSubmit={(e) => {
        e.preventDefault();
        if (reset) reset();
        handleDisplayResult();
      }}
    >
      <input
        type="text"
        placeholder="Ask anything"
        className=" bg-transparent focus-visible::outline-0 my-1 w-full pl-5 font-light not-italic leading-[normal] text-[#1B1B16]/30 text-white outline-none focus-visible:ring-0 focus-visible:ring-offset-0 sm:text-xl"
        disabled={disabled}
        value={promptValue}
        required
        onChange={(e) => setPromptValue(e.target.value)}
      />
      <AIButton
        disabled={disabled}
        type="submit"
        
      >
        {disabled && (
          <div className="absolute inset-0 flex items-center justify-center">
            <TypeAnimation />
          </div>
        )}

        <ArrowRight size={24} className={`text-white ${disabled ? "invisible" : ""}`} />
      </AIButton>
    </form>
  );
};

export default InputArea;
