import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../states/rootReducer';

const KakeboHeader: React.FC = () => {
  const f = useSelector((state: RootState) => state.items.f);
  return (
    <div>
      This is Header ==> {f}
    </div>
  )
};

export default KakeboHeader;
