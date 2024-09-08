import { Button } from "flowbite-react";
import { NumberAnimation } from "../../components/NumberAnimation";
import { OverallReviewBoard } from "../../components/OverallReviewBoard";
import { ReviewCard } from "../../components/ReviewCard";
import { useNavigate } from "react-router-dom";
import { useGetAllreviewsQuery } from "../../redux/features/review/reviewApi";
import { CustomLoader } from "../../components/CustomLoader";

export const ReviewSection = () => {
  const navigation = useNavigate();
  const ratingLimit = 5;
  const handleGoToReviews = () => {
    navigation("/reviews");
  };
  const {
    data: reviews,
    isLoading,
    isError,
    error,
  } = useGetAllreviewsQuery({ limit: 2, page: 1 });
  return (
    <div className=" flex flex-col items-center my-[70px]">
      <h2 className=" font-bold text-3xl underline underline-offset-2 decoration-sky-800 font-bebas  py-3">
        Reviews
      </h2>
      <div className=" flex flex-col lg:flex-row gap-3 ">
        {isLoading ? (
          <div>
            <CustomLoader />
          </div>
        ) : isError ? (
          <div className=" text-xl text-red-600 font-bold">
            Error occured while loading {JSON.stringify(error)}
          </div>
        ) : (
          reviews?.data?.map((review: any) => {
            return (
              <ReviewCard
                rating={review.rating}
                userName={review?.userID?.name}
                feedback={review?.feedback}
                ratingLimit={ratingLimit}
              />
            );
          })
        )}
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
