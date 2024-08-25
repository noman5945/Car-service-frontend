import { whyUsPoints, whyUsReason } from "../../constants";

export const WhyUsSection = () => {
  return (
    <section className="flex flex-col items-center  lg:mx-10">
      <div className="flex flex-col justify-center items-center p-4">
        <p className=" font-bold text-3xl underline underline-offset-2 decoration-sky-800 font-bebas">
          Why Choose Us?
        </p>
        <div className=" flex flex-col p-4">
          <p className=" font-light lg:text-lg text-base text-center">
            {whyUsReason}
          </p>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4  lg:w-[1000px]">
          {whyUsPoints.map((item) => {
            return (
              <div key={item.id} className="flex flex-col items-center">
                <img src={item.img} className=" w-[200px] h-[150px]" />
                <h2 className=" font-bold text-lg ">{item.title}</h2>
                <div className=" bg-sky-400 w-[50px] h-[3px] my-[10px]"></div>
                <p className=" text-center font-light">{item.reason}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
