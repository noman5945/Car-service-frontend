import { Button, Label, RangeSlider } from "flowbite-react";
import { useState } from "react";

export const ServiceFilterSection = () => {
  const [duration, setDuration] = useState(50);
  const [price, setPrice] = useState(0);
  const [service, setService] = useState("");
  const handleFilter = () => {
    const query = {
      service,
      duration,
      price,
    };
    console.log(query);
  };
  return (
    <div className=" flex flex-col items-start justify-normal">
      <h2 className=" font-bebas font-bold text-center text-xl w-full">
        Filter
      </h2>
      <input
        className=" w-full h-[30px] rounded-md p-2 bg-sky-50 border-none"
        placeholder="Search by Service Name"
        onChange={(e) => setService(e.target.value)}
      />
      <div className=" py-3">
        <Label className=" text-lg">
          Duration: <span className=" font-bold">{duration}</span> (Hours){" "}
        </Label>
        <RangeSlider
          id="sm-range"
          sizing="md"
          slot="10"
          step={10}
          min={10}
          max={100}
          inputMode="decimal"
          width={500}
          className=" w-[280px]"
          onChange={(e) => setDuration(Number(e.target.value))}
        />
      </div>
      <div className=" py-3">
        <Label className=" text-lg">
          Price: <span className=" font-bold">{price}</span> (Taka){" "}
        </Label>
        <RangeSlider
          id="sm-range"
          sizing="md"
          slot="10"
          step={5}
          min={50}
          max={1000}
          inputMode="decimal"
          width={500}
          className=" w-[280px]"
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </div>
      <Button className=" mt-2" onClick={handleFilter}>
        Filter
      </Button>
    </div>
  );
};
