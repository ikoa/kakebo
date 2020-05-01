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
    },
    addItem(state: State, action: PayloadAction<Item>) {
      const item = action.payload;
      const targetY = state.years.find(y => y.ad === item.ad);

      // Yearから新たに作成
      if (targetY === undefined) {
        return {
          ...state,
          years : [
            ...state.years,
            {
              ad : item.ad,
              months : [
                {
                  ad : item.ad,
                  monthNum : item.monthNum,
                  days : [
                    {
                      ad : item.ad,
                      monthNum : item.monthNum,
                      date : item.date,
                      items : [item]
                    }
                  ]
                }
              ]
            }
          ],
        }
      }

      const targetM = targetY.months.find(m => m.monthNum === item.monthNum);

      // Monthから新たに作成
      if (targetM === undefined) {
        const newMonth: Month = {
          ad : item.ad,
          monthNum : item.monthNum,
          days : [{
            ad : item.ad,
            monthNum : item.monthNum,
            date : item.date,
            items : [item],
          }]
        };
        const updatedYear: Year = {
          ...targetY,
          months : [
            newMonth,
            ...targetY.months
          ]
        };
        const updatedYears: Year[] = state.years.map(y => {
          return y.ad === updatedYear.ad ? updatedYear : y;
        });

        return {
          ...state,
          years : updatedYears
        };
      }

      const targetD = targetM.days.find(d => d.date === item.date);

      // Dayから新たに作成
      if (targetD === undefined) {
        const newDay: Day = {
          ad: item.ad,
          monthNum : item.monthNum,
          date : item.date,
          items : [item],
        };

        const updatedMonth: Month = {
          ...targetM,
          days : [
            newDay,
            ...targetM.days
          ],
        };
        const updatedMonthList: Month[] = targetY.months.map(m => {
          return m.monthNum === updatedMonth.monthNum ? updatedMonth : m;
        });

        const updatedYear: Year = {
          ...targetY,
          months : updatedMonthList,
        }

        const updatedYears: Year[] = state.years.map(y => {
          return y.ad === updatedYear.ad ? updatedYear : y;
        });

        return {
          ...state,
          years : updatedYears,
        }
      }

      // すでに同じitemがある場合は何も作成しない
      if (targetD.items.find(i => i.id === item.id)) return;

      // 指定されたDayを更新
      const updatedDay: Day = {
        ...targetD,
        items : [item, ...targetD.items]
      };
      const updatedMonth: Month = {
        ...targetM,
        days : targetM.days.map(d => {
          return d.date === item.date ? updatedDay : d;
        }),
      };

      const updatedMonthList: Month[] = targetY.months.map(m => {
        return m.monthNum === action.payload.monthNum ? updatedMonth : m;
      });
      const updatedYears : Year[] = state.years.map(y => {
        return y.ad === action.payload.ad ? {...y, months : updatedMonthList} : y;
      });
      return {
        ...state,
        years : updatedYears,
      }
    },
    deleteItem(state: State, action: PayloadAction<Item>) {
      const item = action.payload;
      const targetY = state.years.find(y => y.ad === item.ad);
      if (targetY === undefined) return;
      const targetM = targetY.months.find(m => m.monthNum === item.monthNum);
      if (targetM === undefined) return;
      const targetD = targetM.days.find(d => d.date === item.date);
      if (targetD === undefined) return;
      const updatedItems: Item[] = targetD.items.filter(i => i.id !== item.id);
      const updatedDay: Day = {
        ...targetD,
        items : updatedItems
      };
      const updatedMonth: Month = {
        ...targetM,
        days : targetM.days.map(d => {
          return d.date === item.date ? updatedDay : d;
        }),
      };
      const updatedMonthList: Month[] = targetY.months.map(m => {
        return m.monthNum === action.payload.monthNum ? updatedMonth : m;
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

const createNewYearAndUpdeteMonth = (
  years: Year[] ,targetY: Year, item: Item
):Year[] => {
  const newMonth: Month = {
    ad : item.ad,
    monthNum : item.monthNum,
    days : [{
      ad : item.ad,
      monthNum : item.monthNum,
      date : item.date,
      items : [item],
    }]
  };
  const updatedYear: Year = {
    ...targetY,
    months : [
      newMonth,
      ...targetY.months
    ]
  };
  const updatedYears: Year[] = years.map(y => {
    return y.ad === updatedYear.ad ? updatedYear : y;
  });

  return updatedYears;
};

export const {
  addYear,
  addMonth,
  addDate,
  addItem,
  deleteItem,
} = itemListModule.actions;

export default itemListModule;
