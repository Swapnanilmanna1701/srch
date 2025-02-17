import { ArrowUpRight, ThumbsUp } from "lucide-react";
import Image from "next/image";

const SimilarTopics = ({
  similarQuestions,
  handleDisplayResult,
  reset,
}: {
  similarQuestions: string[];
  handleDisplayResult: (item: string) => void;
  reset: () => void;
}) => {
  return (
    <div className="container flex h-auto w-full shrink-0 gap-4 rounded-lg border border-solid border-white bg-gradient-to-r from-pink-600 to-cyan-300 via-violet-500 p-5 lg:p-10">
      <div className="flex-1 divide-y divide-[#E5E5E5]">
        <div className="flex gap-4 pb-3 text-white">
          <ThumbsUp size={24} />
          <h3 className="text-base font-bold uppercase text-white">
            Similar topics:{" "}
          </h3>
        </div>

        <div className="max-w-[890px] space-y-[15px] divide-y divide-[#E5E5E5]">
          {similarQuestions.length > 0 ? (
            similarQuestions.map((item) => (
              <button
                className="flex cursor-pointer items-center gap-4 pt-3.5"
                key={item}
                onClick={() => {
                  reset();
                  handleDisplayResult(item);
                }}
              >
                <div className="flex items-center text-cyan-300">
                  <ArrowUpRight size={24} />
                </div>
                <p className="text-sm font-bold leading-[normal] text-white  text-left">
                  {item}
                </p>
              </button>
            ))
          ) : (
            <>
              <div className="h-10 w-full animate-pulse rounded-md bg-gray-300" />
              <div className="h-10 w-full animate-pulse rounded-md bg-gray-300" />
              <div className="h-10 w-full animate-pulse rounded-md bg-gray-300" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimilarTopics;
