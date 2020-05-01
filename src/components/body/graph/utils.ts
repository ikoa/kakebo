import { Month, Year } from '../../../states/models';
import * as chartjs from 'chart.js';


export const createLabels = (
  year: number,
  month: number
):string[] => {
  const lastDay: number = new Date(year, month, 0).getDate();
  const labels: string[] = [];
  let day;
  for (day = 1; day <= lastDay; day++) {
    labels.push(`${month}/${day}`);
  }
  return labels;
};

const createData = (monthItem: Month): number[] => {
  const lastDay: number = new Date(monthItem.ad, monthItem.monthNum, 0).getDate();
  const data: number[] = [];
  let day: number;
  for (day = 0; day < lastDay; day++) {
    let sum = 0;
    monthItem.days.forEach(d => {
      if (d.date === (day+1)) {
        d.items.forEach(i => {
          sum += i.amount;
        });
      }
    });
    data.push(sum);
  }
  return data;
};

export const createDatasets = (monthItem: Month): chartjs.ChartDataSets[] => {
  return [
    {
      label: 'その日の浪費',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderDash: [],
      borderDashOffset: 0.0,
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#eee',
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: createData(monthItem),
    }
  ]
};

export const selectMonthItem = (
  years: Year[], ad: number, monthNum: number,
): Month | undefined => {
  const targetY: Year | undefined = years.find(y => y.ad === ad);
  if (targetY === undefined) return undefined;

  const targetM: Month | undefined = targetY.months.find(m => m.monthNum === monthNum);
  return targetM;
};
