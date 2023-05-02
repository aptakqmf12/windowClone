import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { TimeClock } from "@mui/x-date-pickers/TimeClock";
import dayjs from "dayjs";
import styled from "styled-components";

interface WidgetProps {
  component: any;
}

export default function Widget({ component }: WidgetProps) {
  const [value, setValue] = useState(null);

  return (
    <div.wrap>
      {/* <DatePicker
        value={value}
        label="Basic example"
        onChange={(newValue) => {
          setValue(newValue);
        }}
        // renderInput={(params) => <TextField {...params} />}
      /> */}

      {component}
    </div.wrap>
  );
}

const div = {
  wrap: styled.div`
    background-color: white;
    border-radius: 10px;
  `,
};
