import { useState } from "react";
import { CustomTextArea } from "../../components/CustomTextArea";
import { Button, Rating, RatingStar } from "flowbite-react";
import toast from "react-hot-toast";

type ReviewFormProps = {
  userID?: string;
};
export const ReviewForm = ({ userID }: ReviewFormProps) => {
  const [feedback, setFeedback] = useState("");
  const [fill, setFill] = useState(0);
  const [rate, setRate] = useState(0);
  let rateLimit = 5;
  const handlePostReview = () => {
    if (feedback === "") {
      toast.error("Review field is empty");
      return;
    }
    if (rate === 0) {
      toast.error("Please Rate us :)");
      return;
    }
    const reviewData = {
      userID,
      rate,
      feedback,
    };
    console.log(reviewData);
  };
  return (
    <div className=" border border-sky-400 w-[400px] md:w-[600px] flex flex-col items-center my-3 shadow-md rounded-md">
      <h2 className=" font-semibold text-lg p-2">Post a Review</h2>
      <div className=" w-full p-3">
        <CustomTextArea
          title="Your Review"
          placeholder="Your Review"
          id="user-review"
          onChangeFunc={setFeedback}
          rows={6}
        />
      </div>
      <div className=" flex flex-row gap-2 font-lg">
        <p className=" font-bold ">Rate :</p>
        <Rating onMouseLeave={() => setFill(0)} size={"md"}>
          {Array.from({ length: rateLimit }).map((_, index) => {
            return (
              <RatingStar
                fillRule={"nonzero"}
                onMouseEnter={() => setFill(index + 1)}
                onMouseLeave={() => setFill(index - 1)}
                filled={index < fill || index < rate}
                onClick={() => setRate(index + 1)}
                className=" cursor-pointer"
              />
            );
          })}
        </Rating>
        <p>{rate}</p>
      </div>
      <div className=" my-3">
        <Button onClick={handlePostReview} className="w-[300px]">
          POST
        </Button>
      </div>
    </div>
  );
};
