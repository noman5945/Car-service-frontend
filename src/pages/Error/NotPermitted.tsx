export const NotPermitted = () => {
  return (
    <div className=" flex flex-col items-center lg:h-[700px] h-[500px]">
      <div className="flex flex-col items-center py-[30%] lg:py-[10%] px-7">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/ProhibitionSign2.svg/800px-ProhibitionSign2.svg.png"
          className=" w-[100px] h-[100px] lg:w-[250px] lg:h-[250px]"
        />
        <h1 className=" font-bold lg:text-4xl text-xl text-red-500">
          You are not permitted to enter this page
        </h1>
      </div>
    </div>
  );
};
