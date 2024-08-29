import { Spinner } from "flowbite-react";

export const CustomLoader = () => {
  return (
    <div className=" p-3 w-full ">
      <Spinner aria-label="Large spinner example" size="lg" />
    </div>
  );
};
