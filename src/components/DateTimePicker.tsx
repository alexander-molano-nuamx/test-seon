import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  DateTimePickerProps,
  DateTimePicker as MaterialDateTimePicker,
} from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/es";
import { NuamThemeWrapper } from "@/app/providers";

dayjs.locale("es");

export const DateTimePicker = ({ ...props }: DateTimePickerProps) => {
  return (
    <NuamThemeWrapper>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
        <MaterialDateTimePicker {...props} />
      </LocalizationProvider>
    </NuamThemeWrapper>
  );
};
