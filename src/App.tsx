import React from 'react';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import AsyncTest from './components/AsyncTest';

export const App = () => {
  return (
    <>
      <AsyncTest />
      <ItemForm />
      <ItemList />
    </>
  );
}
