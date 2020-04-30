import React, { useState, useEffect, useLayoutEffect } from 'react';
import KakeboGraph from './graph/KakeboGraph';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../states/rootReducer';
import { addYear } from '../../states/modules/itemListModule';
import { Year, Day } from '../../states/models';
import KakeboForm from './form/KakeboForm';
import YearItemList from './list/YearItemList';

const KakeboBody: React.FC = () => {
  const {info, items} = useSelector((state: RootState) => state);

  return (
    <>
      <KakeboGraph
        year={info.displayInfo.displayYear}
        month={info.displayInfo.displayMonth}
      />
      <KakeboForm
        year={info.displayInfo.displayYear}
        initMonth={info.displayInfo.displayMonth}
      />
      {items.years.map(y =>
        <div key={y.ad}>
          {y.ad + '年'}
          <YearItemList item={y} />
        </div>
      )}
    </>
  );
};

export default KakeboBody;
