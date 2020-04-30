import React from 'react';
import { Month } from '../../../states/models';
import DayItemList from './DayItemList';

const MonthItemList:React.FC<{item: Month}> = ({item}) => {
  return (
    <>
      {`${item.monthNum}月`}
      <br />
      {item.days.map(d =>
        <React.Fragment key={d.date}>
          <DayItemList item={d}/>
        </React.Fragment>
      )}
    </>
  );
};

export default MonthItemList;
