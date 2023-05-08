import React, { useState } from "react";
import List from "./List";
import useSleeping from "@/hooks/useSleeping";
import useCurrentUser from "@/hooks/useCurrentUser";
import dayjs from "dayjs";
import { getDailyData } from "../../libs/getDailyData";
import { useEffect } from "react";

const Lists = () => {
  const { data: currentUser } = useCurrentUser();
  const [dailyData, setDailyData] = useState();
  const { data: sleeping } = useSleeping(currentUser && currentUser.id);
  // console.log(currentUser);

  useEffect(() => {
    if (sleeping) {
      setDailyData(getDailyData(sleeping));
    }
  }, [sleeping]);
  // console.log(dailyData);
  return (
    <div>
      {dailyData &&
        dailyData.map((d, i) => {
          return <List key={i} data={d} />;
        })}
    </div>
  );
};

export default Lists;
