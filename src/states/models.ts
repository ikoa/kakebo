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

const testDays: Day[] = [
  {
    ad: 2020,
    monthNum: 5,
    date: 4,
    items : [
      {
        id: 6,
        ad: 2020,
        monthNum: 5,
        date: 4,
        amount: 1300,
        name : 'hoge',
      },
      {
        id: 65,
        ad: 2020,
        monthNum: 5,
        date: 4,
        amount: 1300,
        name : 'hoge',
      },
      {
        id: 71,
        ad: 2020,
        monthNum: 5,
        date: 4,
        amount: 10050,
        name : 'hoge',
      },
    ]
  },
  {
    ad: 2020,
    monthNum: 5,
    date: 3,
    items : [
      {
        id: 6,
        ad: 2020,
        monthNum: 5,
        date: 3,
        amount: 300,
        name : 'hoge',
      },
      {
        id: 7,
        ad: 2020,
        monthNum: 5,
        date: 3,
        amount: 150,
        name : 'hoge',
      },
    ]
  },
  {
    ad: 2020,
    monthNum: 5,
    date: 2,
    items : [
      {
        id: 3,
        ad: 2020,
        monthNum: 5,
        date: 2,
        amount: 3000,
        name : 'hoge',
      },
      {
        id: 4,
        ad: 2020,
        monthNum: 5,
        date: 2,
        amount: 1500,
        name : 'hoge',
      },
    ]
  },
  {
    ad: 2020,
    monthNum: 5,
    date: 1,
    items : [
      {
        id: 1,
        ad: 2020,
        monthNum: 5,
        date: 1,
        amount: 1000,
        name : 'hoge',
      },
      {
        id: 2,
        ad: 2020,
        monthNum: 5,
        date: 1,
        amount: 1500,
        name : 'hoge',
      },
    ]
  },
];

const testMonth: Month = {
  ad: 2020,
  monthNum: 5,
  days: testDays,
};
