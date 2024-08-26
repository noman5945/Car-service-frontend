import { NumberAnimation } from "../../components/NumberAnimation";
import { ReviewCard } from "../../components/ReviewCard";

export const ReviewSection = () => {
  return (
    <div className=" flex flex-col items-center my-[70px]">
      <h2 className=" font-bold text-3xl underline underline-offset-2 decoration-sky-800 font-bebas  py-3">
        Reviews
      </h2>
      <div className=" flex flex-col lg:flex-row gap-3 ">
        <ReviewCard />
        <ReviewCard />
      </div>
      <NumberAnimation />
      <div className=" relative p-3 my-[10px]">Overall Rationg</div>
    </div>
  );
};
