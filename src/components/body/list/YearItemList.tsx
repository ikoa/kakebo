import React from 'react';
import { Year } from '../../../states/models';
import MonthItemList from './MonthItemList';

const YearItemList: React.FC<{item: Year}> = ({item}) => {
  return (
    <div>
      {item.months.map(m =>
        <React.Fragment key={m.monthNum}>
          <MonthItemList item={m} />
        </React.Fragment>
      )}
    </div>
  );
};

export default YearItemList;
