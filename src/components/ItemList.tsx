import React from 'react';
import {useSelector} from 'react-redux';
import { RootState } from '../states/rootReducer';

const ItemList: React.FC = () => {
  const {items} = useSelector((state: RootState) => state.items);

  return(
    <div >
      {items.map((item, index) =>
        <React.Fragment key={index}>
          {item.name}
        </React.Fragment>
      )}
    </div>
  );
}

export default ItemList;
