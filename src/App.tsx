import React from 'react';
import ItemList from './components/item-list/ItemList';
import ItemForm from './components/ItemForm';

export const App = () => {
  return (
    <>
      <ItemForm />
      <ItemList />
    </>
  );
}
