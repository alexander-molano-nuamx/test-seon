export interface Row {
  label: string;
  value: string | number;
}

export interface Column {
  title: string;
  rows: Row[];
}

export interface GeneralData {
  columns: Column[];
}
