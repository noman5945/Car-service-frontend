import { Button } from "flowbite-react";
import { NumberAnimation } from "../../components/NumberAnimation";
import { OverallReviewBoard } from "../../components/OverallReviewBoard";
import { ReviewCard } from "../../components/ReviewCard";
import { useNavigate } from "react-router-dom";

export const ReviewSection = () => {
  const navigation = useNavigate();
  const handleGoToReviews = () => {
    navigation("/reviews");
  };
  return (
    <div className=" flex flex-col items-center my-[70px]">
      <h2 className=" font-bold text-3xl underline underline-offset-2 decoration-sky-800 font-bebas  py-3">
        Reviews
      </h2>
      <div className=" flex flex-col lg:flex-row gap-3 ">
        <ReviewCard />
        <ReviewCard />
      </div>
      <div className="  flex flex-col items-center w-full">
        <NumberAnimation />
        <div className=" relative p-3 my-[5px]">
          <h2 className=" font-light text-lg">Overall Rating</h2>
        </div>
        <OverallReviewBoard />
      </div>
      <div className=" p-4">
        <Button onClick={handleGoToReviews}>Check All Reviews</Button>
      </div>
    </div>
  );
};
