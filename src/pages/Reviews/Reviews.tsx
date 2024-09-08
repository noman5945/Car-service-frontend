import { useState } from "react";
import { ReviewCard } from "../../components/ReviewCard";
import { ReviewForm } from "./ReviewForm";
import { Button, Pagination } from "flowbite-react";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import { TUser } from "../../types/user.type";
import { useNavigate } from "react-router-dom";
import { useGetAllreviewsQuery } from "../../redux/features/review/reviewApi";
import { CustomLoader } from "../../components/CustomLoader";

export const Reviews = () => {
  const ratingLimit = 5;
  const user = useAppSelector(selectCurrentUser) as TUser;
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: reviews,
    isError,
    error,
    isLoading,
  } = useGetAllreviewsQuery({ limit: 10, page: 1 });
  const navigate = useNavigate();
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  const GoToLoginPage = () => {
    navigate("/sign-in");
  };
  if (isError) {
    console.log(error);
  }
  console.log(reviews);
  return (
    <div className="flex items-center flex-col">
      <div className=" flex items-center flex-col p-4">
        <h2 className=" font-bold font-sans text-lg text-sky-600  lg:text-2xl">
          Reviews
        </h2>
        <div className=" bg-sky-400 w-[50px] h-[3px] my-[10px]"></div>
      </div>
      <div className=" flex flex-col items-center ">
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
      <div>
        <div>
          <Pagination
            currentPage={currentPage}
            onPageChange={onPageChange}
            totalPages={100}
          />
        </div>
      </div>
      {user === null ? (
        <>
          <Button className=" w-[500px] my-3" onClick={GoToLoginPage}>
            LOGIN TO POST A REVIEW
          </Button>
        </>
      ) : (
        <>
          <ReviewForm userID={user.userId} />
        </>
      )}
    </div>
  );
};
