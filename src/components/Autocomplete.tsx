import React from "react";
import {
  AutocompleteProps,
  AutocompleteRenderInputParams,
  InputAdornment,
  Autocomplete as MaterialAutocomplete,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { NuamThemeWrapper } from "@/app/providers";

interface IOption {
  id: number;
  name: string;
  [key: string]: string | number;
}

interface IAutocompleteProps<TInputOption> {
  options: TInputOption[] | IOption[];
  searchKeys: string[];
  label?: string;
  labelKey?: string;
  valueKey?: string;
  onChange?: (value: TInputOption) => void;
  textFieldProps?: TextFieldProps;
}

type TAutocompleteProps = Omit<
  AutocompleteProps<unknown, boolean, boolean, boolean>,
  "options" | "renderInput" | "onChange"
>;

type IRenderInput = {
  renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode;
};

type TNuamAutocompleteProps<TInputOption> = IAutocompleteProps<TInputOption> &
  TAutocompleteProps &
  IRenderInput;

export const Autocomplete = <TInputOption,>({
  label,
  options,
  labelKey = "label",
  valueKey = "value",
  onChange,
  searchKeys,
  textFieldProps,
  ...props
}: TNuamAutocompleteProps<TInputOption>) => {
  const handleChange = (_: React.SyntheticEvent, value: unknown) => {
    onChange?.(value as TInputOption);
  };

  const optionsByKey = React.useMemo<
    Record<typeof valueKey, TInputOption | IOption>
  >(
    () =>
      (options || []).reduce((acc, item) => {
        return {
          ...acc,
          [(item as IOption)[valueKey]]: item,
        };
      }, {}),
    [options, valueKey, labelKey]
  );

  const getOptionLabel = (optionValue: unknown) => {
    if (!optionValue || !props?.value) {
      return "";
    }

    const selectedOption = optionsByKey[String(optionValue)] as IOption;

    return (selectedOption?.[labelKey] as string) || "";
  };

  const filterOptions = (
    options: unknown,
    { inputValue }: { inputValue: string }
  ) => {
    return (options as IOption[]).filter((option) =>
      searchKeys.some((key) => {
        const fieldValue = option[key as keyof IOption];

        return (
          typeof fieldValue === "string" &&
          fieldValue.toLowerCase().includes(inputValue.toLowerCase())
        );
      })
    );
  };

  return (
    <NuamThemeWrapper>
      <MaterialAutocomplete
        options={options}
        getOptionLabel={getOptionLabel}
        renderInput={(params) => (
          <TextField
            {...params}
            {...textFieldProps}
            label={label}
            slotProps={{
              input: {
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              },
            }}
          />
        )}
        filterOptions={filterOptions}
        onChange={handleChange}
        renderOption={(props, item) => (
          <li {...props}>
            <span>{(item as IOption)[labelKey]}</span>
          </li>
        )}
        {...props}
      />
    </NuamThemeWrapper>
  );
};
