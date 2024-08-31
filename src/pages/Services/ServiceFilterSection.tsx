import { Button, Label, RangeSlider, Select } from "flowbite-react";
import { useState } from "react";

type FilterProps = {
  onFilterButtonClick: (filter: any) => void;
};
export const ServiceFilterSection = ({ onFilterButtonClick }: FilterProps) => {
  const [duration, setDuration] = useState(100);
  const [price, setPrice] = useState(1000);
  const [service, setService] = useState("");
  const [sort, setSort] = useState("");
  const handleFilter = () => {
    const query: any = {
      duration,
      price,
    };
    if (service) {
      query.name = service;
    }
    if (sort) {
      query.sort = sort;
    }

    onFilterButtonClick(query);
  };
  return (
    <div className=" flex flex-col items-start justify-normal">
      <h2 className=" font-bebas font-bold text-center text-xl w-full">
        Filter
      </h2>
      <div className="  grid grid-cols-1 lg:grid-cols-2 p-2 gap-2">
        <div className=" w-full">
          <div className="mb-2 block">
            <Label htmlFor="name" value="Search by Name:" />
          </div>
          <input
            id="name"
            className=" w-full h-[41px] rounded-md p-2 bg-sky-50 border-none"
            placeholder="Search by Service Name"
            onChange={(e) => setService(e.target.value)}
          />
        </div>
        <div className=" w-full">
          <div className="mb-2 block">
            <Label htmlFor="sort" value="Sort By:" />
          </div>
          <Select id="sort" onChange={(e) => setSort(e.target.value)}>
            <option value={"price"}>Price</option>
            <option value={"duration"}>Duration</option>
          </Select>
        </div>
      </div>
      <div className=" py-3">
        <Label className=" text-lg">
          Duration: <span className=" font-bold">{duration}</span> (Hours){" "}
        </Label>
        <RangeSlider
          id="sm-range"
          sizing="md"
          slot="10"
          value={duration}
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
          value={price}
          step={5}
          min={0}
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
