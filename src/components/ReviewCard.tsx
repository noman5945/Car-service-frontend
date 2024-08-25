import defaultUser from "../assets/default-user.png";
export const ReviewCard = () => {
  return (
    <div className=" block rounded-md shadow-md p-4 w-[300px] lg:w-[400px]">
      <div>
        <img src={defaultUser} className=" rounded-full h-[100px] w-[100px]" />
      </div>
      <h1 className=" font-bold text-lg">User</h1>
      <p className=" font-light text-base">feedback</p>
      <p>Rating</p>
    </div>
  );
};
