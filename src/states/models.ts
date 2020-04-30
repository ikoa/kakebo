export type Item = {
  id : number;
  ad: number;
  monthNum: number;
  date: number;
  name : string;
  amount : number;
};

export type Year = {
  ad: number;
  months: Month[];
};

export type Month = {
  ad: number;
  monthNum: number;
  days : Day[];
};

export type Day = {
  ad: number;
  monthNum: number;
  date: number;
  items: Item[];
};

export type DisplayInfo = {
  displayYear: number;
  displayMonth: number;
};
