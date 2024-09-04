import { Rating } from "flowbite-react";
import defaultUser from "../assets/default-user.png";
type ReviewCardProps = {
  rating: number;
  ratingLimit: number;
};
export const ReviewCard = ({ rating, ratingLimit }: ReviewCardProps) => {
  return (
    <div className=" block rounded-md shadow-md p-4 w-[300px] lg:w-[600px]">
      <div>
        <img src={defaultUser} className=" rounded-full h-[100px] w-[100px]" />
      </div>
      <h1 className=" font-bold text-lg">User</h1>

      <div className=" flex flex-row gap-2">
        <Rating>
          {Array.from({ length: ratingLimit }).map((_, index) => {
            return <Rating.Star filled={index < rating} />;
          })}
        </Rating>
        <div className=" mx-1">
          <p className=" font-bold text-lg">{rating}</p>
        </div>
      </div>
      <p className=" font-light text-base  h-[50px]">feedback</p>
    </div>
  );
};
