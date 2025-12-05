"use client";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  TimePicker as MaterialTimePicker,
  TimePickerProps,
} from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { NuamThemeWrapper } from "@/app/providers";

export const TimePicker = ({ ...props }: TimePickerProps) => {
  return (
    <NuamThemeWrapper>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MaterialTimePicker {...props} />
      </LocalizationProvider>
    </NuamThemeWrapper>
  );
};
