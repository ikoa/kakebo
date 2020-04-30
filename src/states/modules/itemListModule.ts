import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Year, Day, Month, Item } from '../models';

type State = {
  f : string;
  years : Year[];
};

const initialState: State = {
  f : 'test',
  years : [],
};

 const initialState2: State = {
   f : 'OK',
   years: [
    {
      ad: 2020,
      months: [
        {
          ad : 2020,
          monthNum : 4,
          days : [
            {
              ad : 2020,
              monthNum : 4,
              date : 29,
              items : [
                {
                  id : 1,
                  ad : 2020,
                  monthNum : 4,
                  date : 29,
                  name : 'hoge',
                  amount : 1000,
                },
                {
                  id : 2,
                  ad : 2020,
                  monthNum : 4,
                  date : 29,
                  name : 'fuga',
                  amount : 2000,
                },
              ]
            },{
              ad : 2020,
              monthNum : 4,
              date : 28,
              items : [
                {
                  id : 3,
                  ad : 2020,
                  monthNum : 4,
                  date : 28,
                  name : 'piyo',
                  amount : 10,
                },
              ]
            }
          ],
        },
      ],
    }
   ],
};

const itemListModule = createSlice({
  name : 'years',
  initialState,
  reducers : {
    addYear(state: State, action: PayloadAction<number>) {
      if (state.years.find(y => y.ad === action.payload)) return;
      return {
        ...state,
        years : [...state.years, {
          ad : action.payload,
          months : [],
        }]
      }
    },
    addMonth(state: State, action: PayloadAction<{ad:number, monthNum: number}>) {
      const targetY = state.years.find(y => y.ad === action.payload.ad);
      if (targetY === undefined) return;
      if (targetY.months.find(m => m.monthNum === action.payload.monthNum)) return;

      const updatedY: Year = {
        ...targetY,
        months : [
          {
            ad : action.payload.ad,
            monthNum : action.payload.monthNum,
            days : [],
          },
          ...targetY.months
        ]
      }

      const updatedYears: Year[] = state.years.map(y => {
        return y.ad === action.payload.ad ? updatedY : y;
      })

      return {
        ...state,
        years : updatedYears
      }
    },
    addDate(state: State, action: PayloadAction<{ad: number, monthNum: number, date: number}>) {
      const targetY = state.years.find(y => y.ad === action.payload.ad);
      if (targetY === undefined) return;
      const targetM = targetY.months.find(m => m.monthNum === action.payload.monthNum);
      if (targetM === undefined) return;
      if (targetM.days.find(d => d.date === action.payload.date)) return;

      const updatedM: Month = {
        ...targetM,
        days : [
          {
            ad : action.payload.ad,
            monthNum : action.payload.monthNum,
            date : action.payload.date,
            items : [],
          },
          ...targetM.days,
        ],
      };
      const updatedMonthList: Month[] = targetY.months.map(m => {
        return m.monthNum === action.payload.monthNum ? updatedM : m;
      });
      const updatedYears : Year[] = state.years.map(y => {
        return y.ad === action.payload.ad ? {...y, months : updatedMonthList} : y;
      });
      return {
        ...state,
        years : updatedYears,
      }
    }
  }
});

export const {
  addYear,
  addMonth,
  addDate,
} = itemListModule.actions;

export default itemListModule;
