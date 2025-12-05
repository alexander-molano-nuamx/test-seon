"use client";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  DatePickerProps,
  DatePicker as MaterialDatePicker,
} from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/es";
import { NuamThemeWrapper } from "@/app/providers";

dayjs.locale("es");

export const DatePicker = ({ ...props }: DatePickerProps) => {
  return (
    <NuamThemeWrapper>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
        <MaterialDatePicker {...props} />
      </LocalizationProvider>
    </NuamThemeWrapper>
  );
};
