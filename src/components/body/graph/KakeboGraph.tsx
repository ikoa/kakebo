import React, { useState, useEffect } from 'react';
import * as chartjs from 'chart.js';
import { Line, ChartData } from 'react-chartjs-2';
import * as utils from './utils';
import { useSelector } from 'react-redux';
import { RootState } from '../../../states/rootReducer';

const KakeboGraph: React.FC<{
  year: number,
  month: number,
}> = ({
  year,
  month,
}) => {
  const {info, items} = useSelector((state: RootState) => state);
  const [data, setDate] = useState<ChartData<chartjs.ChartData>>(() => {
    const monthItem = utils.selectMonthItem(
      items.years,
      info.displayYear,
      info.displayMonth,
    );
    return monthItem === undefined ? {} : {
      labels : utils.createLabels(info.displayYear, info.displayMonth),
      datasets : utils.createDatasets(monthItem),
      option: {
        yAxes: [{
          ticks: {
            min: 0
          }
      }]
      }
    };
  });

  useEffect(()=> {
    const monthItem = utils.selectMonthItem(
      items.years,
      info.displayYear,
      info.displayMonth,
    );
    if (monthItem === undefined) return;
    setDate({...data,
      labels: utils.createLabels(info.displayYear, info.displayMonth),
      datasets : utils.createDatasets(monthItem),
    });
  }, [
    info, items,
  ]);
  return (
    <div>
      {`${year}/${month}`}
      <br />
      <Line data={data} />
    </div>
  );
};

export default KakeboGraph;
