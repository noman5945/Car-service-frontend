import { useEffect, useState } from "react";

export const NumberAnimation = () => {
  const [number, setNumber] = useState(1);

  useEffect(() => {
    if (number < 5) {
      const interval = setInterval(() => {
        setNumber((prevNumber) => prevNumber + 1);
      }, 100); // Update every second

      return () => clearInterval(interval);
    }
  }, [number]);
  return (
    <div className=" p-4">
      <div className=" flex flex-col items-center">
        <h1 className=" font-bold text-4xl ">{number}</h1>
      </div>
    </div>
  );
};
