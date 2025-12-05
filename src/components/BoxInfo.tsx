"use client";

import React from "react";
import {
  DefaultComponents,
  Divider,
  Typography,
} from "@nuam/common-fe-lib-components";

interface Row {
  label: string;
  value: string | number | React.ReactNode;
}

interface Column {
  title: string;
  rows: Row[];
}

interface BoxInfoProps {
  columns: Column[];
  title?: string;
  noBorder?: boolean;
  stacked?: boolean;
  centered?: boolean;
}

const classNames = (...classes: (string | false | undefined)[]) =>
  classes.filter(Boolean).join(" ");

const ColumnComponent: React.FC<{
  column: Column;
  stacked?: boolean;
  centered?: boolean;
}> = ({ column, stacked = false, centered = false }) => (
  <div
    className={classNames("flex-1 flex flex-col", centered && "items-center")}
  >
    {column.rows.map((row, rowIndex) => {
      const rowClasses = classNames(
        "pt-6 w-full flex",
        stacked ? "flex-col text-center" : "items-start",
        stacked ? "" : centered ? "justify-center" : "justify-between mb-1.5"
      );

      const valueClasses = classNames(
        stacked && "mt-1 mb-2",
        !stacked && !centered && "flex items-end justify-end w-4/6"
      );
      return (
        <React.Fragment key={rowIndex}>
          <div className={rowClasses}>
            <Typography
              variant="body1"
              className="font-bold"
              sx={{
                wordBreak: "break-word",
                overflowWrap: "break-word",
              }}
            >
              {row.label}
            </Typography>
            <Typography
              variant="body1"
              className={valueClasses}
              sx={{
                wordBreak: "break-word",
                overflowWrap: "break-word",
              }}
            >
              {row.value}
            </Typography>
          </div>
          {!stacked && <Divider />}
        </React.Fragment>
      );
    })}
  </div>
);

export const BoxInfo: React.FC<BoxInfoProps> = ({
  columns,
  title,
  noBorder = true,
  stacked = false,
  centered = false,
}) => {
  const gapClass = columns.length === 2 ? "gap-[24px]" : "gap-[72px]";
  const justifyClass = centered
    ? "justify-center"
    : columns.length === 2
    ? "justify-between"
    : "justify-around";

  const boxClass = classNames(
    "flex",
    gapClass,
    justifyClass,
    "border-none",
    noBorder
      ? "border border-white w-full rounded-md shadow-[0px_5px_5px_-2px_#00000033] px-6 pt-0 pb-6"
      : "pt-0 px-0 pb-6"
  );

  return (
    <div className="w-full">
      {title && (
        <Typography variant="h6" className="mb-[24px] font-Roboto">
          {title}
        </Typography>
      )}
      <DefaultComponents.Box className={boxClass}>
        {columns.map((column, colIndex) => (
          <ColumnComponent
            key={colIndex}
            column={column}
            stacked={stacked}
            centered={centered}
          />
        ))}
      </DefaultComponents.Box>
    </div>
  );
};
