export type Item = {
  id : number;
  name : string;
  amount : number;
  color : Color;
};

export const enum Color {
  Red = '#red',
  Blue = '#blue',
  Green = '#green',
};
