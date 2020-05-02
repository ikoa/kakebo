import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../states/rootReducer';
import { Year } from '../../states/models';
import KakeboGraph from './graph/KakeboGraph';
import KakeboForm from './form/KakeboForm';
import YearItemList from './list/YearItemList';

const KakeboBody: React.FC = () => {
  const {info, items} = useSelector((state: RootState) => state);
  const [displayItem, setDisplayItem] = useState<Year | null>(() =>
    items.years.find(i => i.ad === info.displayYear) ?? null
  );

  useEffect(() => {
    setDisplayItem(items.years.find(i => i.ad === info.displayYear) ?? null);
  },[info, items]);

  return (
    <>
      <KakeboGraph
        year={info.displayYear}
        month={info.displayMonth}
      />
      <KakeboForm
        year={info.displayYear}
        initMonth={info.displayMonth}
      />
      {displayItem !== null &&
        <YearItemList item={displayItem} />
      }
    </>
  );
};

export default KakeboBody;
