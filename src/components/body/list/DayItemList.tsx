import React from 'react';
import { Day, Item } from '../../../states/models';
import { List, ListItem } from '@material-ui/core';
import { applyComma } from '../../../util/string-util';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../../states/modules/itemListModule';

const ItemLine:React.FC<{element: Item}> = ({element}) => {
  const dispatch = useDispatch();
  return (
    <ListItem>
      {'・' + element.name + ', ¥' + applyComma(element.amount)}
      <button onClick={()=> {dispatch(deleteItem(element))}}>
        delete
      </button>
    </ListItem>
  );
};

const DayItemList: React.FC<{item: Day}> = ({item}) => {
  return (
    <div>
      {`${item.monthNum}/${item.date} 要素数 ${item.items.length}`}
      <List>
        {item.items.map(el =>
          <React.Fragment>
            <ItemLine element={el}/>
          </React.Fragment>
        )}
      </List>
    </div>
  );
};

export default DayItemList;
