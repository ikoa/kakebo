import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../states/rootReducer';
import { Item } from '../../states/models';
import { applyComma } from '../../util/string-util';
import { deleteItem } from '../../states/modules/itemsModule';

const ItemLine: React.FC<{item: Item}> = ({
  item,
}) => {
  const dispatch = useDispatch();
  const handleDeleteItem = () => {
    dispatch(deleteItem(item));
  }

  return (
    <ListItem>
      <ListItemText>
        {item.name} { '¥ ' + applyComma(item.amount) + ' -'}
        <button onClick={handleDeleteItem}>
          del
        </button>
      </ListItemText>
    </ListItem>
  );
}

const ItemList: React.FC = () => {
  const {items} = useSelector((state: RootState) => state.items);

  return(
    <div >
      <List>
        {items.map((item, index) =>
          <React.Fragment key={index}>
            <ItemLine item={item} />
          </React.Fragment>
        )}
      </List>
    </div>
  );
}

export default ItemList;
