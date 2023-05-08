import React, { useEffect } from "react";
import { useState } from "react";

const List = (props) => {
  // console.log(props);
  const [dateArr, setDateArr] = useState();
  useEffect(() => {
    function makeDateIntoArr(dateString) {
      const dateArray = dateString.split(",").map((str) => str.trim());
      const monthAndDay = dateArray[1].split(" ");
      dateArray.splice(1, 1, ...monthAndDay);
      return dateArray;
    }
    setDateArr(makeDateIntoArr(props.data[0]));
  }, [props.data]);
  // console.log(dateArr);
  return (
    <div className="flex items-center gap-3 mt-3 border-2 border-gray-400 border-solid mx-6 px-3 rounded-lg ">
      <div className="flex flex-col items-center justify-center py-2">
        <p className=" m-0">{dateArr && dateArr[0]}</p>
        <p className=" m-0 text-4xl text-red-300">{dateArr && dateArr[2]}</p>
        <p className=" m-0">{dateArr && dateArr[1]}</p>
      </div>
      <div className=" text-8xl text-red-300">|</div>
    </div>
  );
};

export default List;
