import React, { useEffect, useState } from "react";
import {
  Container,
  Heading,
  ChartContainer,
  MonthlyExpenseContainer,
  CurrentMonth,
  LastMonth,
  ChartBar,
  Bar,
  Day,
  HoverAmount,
} from "./Chart.styles";

import chartData from "../../utils/data.json";

const Chart = () => {
  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    const day = new Date()
      .toLocaleString("en-us", { weekday: "short" })
      .toLowerCase();
    setCurrentDay(day);
  }, []);

  return (
    <Container>
      <Heading>Spending - Last 7 days</Heading>
      <ChartContainer>
        {chartData.map(({ day, amount }, index) => (
          <ChartBar key={index}>
            <HoverAmount>{amount}</HoverAmount>
            <Bar
              amount={amount}
              isCurrentDay={currentDay === day ? true : false}
            />
            <Day>{day}</Day>
          </ChartBar>
        ))}
      </ChartContainer>
      <MonthlyExpenseContainer>
        <CurrentMonth>
          <p>Total this month</p>
          <p>$478.33</p>
        </CurrentMonth>
        <LastMonth>
          <p>+2.4%</p>
          <p>from last month</p>
        </LastMonth>
      </MonthlyExpenseContainer>
    </Container>
  );
};

export default Chart;
