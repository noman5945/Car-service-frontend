import { ReviewCard } from "../../components/ReviewCard";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import { TUser } from "../../types/user.type";
import { ReviewForm } from "./ReviewForm";

export const Reviews = () => {
  const ratingLimit = 5;
  const { userId } = useAppSelector(selectCurrentUser) as TUser;
  console.log(userId);
  return (
    <div className="flex items-center flex-col">
      <div className=" flex items-center flex-col p-4">
        <h2 className=" font-bold font-sans text-lg text-sky-600  lg:text-2xl">
          Reviews
        </h2>
        <div className=" bg-sky-400 w-[50px] h-[3px] my-[10px]"></div>
      </div>
      <div className=" flex flex-col items-center ">
        <ReviewCard rating={4} ratingLimit={ratingLimit} />
        <ReviewCard rating={4} ratingLimit={ratingLimit} />
        <ReviewCard rating={3} ratingLimit={ratingLimit} />
        <ReviewCard rating={3} ratingLimit={ratingLimit} />
        <ReviewCard rating={2} ratingLimit={ratingLimit} />
      </div>
      <ReviewForm userID={userId} />
    </div>
  );
};
