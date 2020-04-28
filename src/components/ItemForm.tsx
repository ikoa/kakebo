import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../states/modules/itemsModule';
import { Color } from '../states/models';

const ItemForm: React.FC = () => {

  const dispatch = useDispatch();

  const [color, setColor] = useState<Color>(Color.White);
  const [amount, setAmount] = useState<number | ''>('');
  const [name, setName] = useState<string>('');

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const c: Color = Color.White;
    setColor(c);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleSubmit = () => {
    dispatch(addItem({
      id : Date.now(),
      name,
      amount : (amount !== '') ? amount : 0,
      color,
    }));

    setAmount('');
    setName('');
  }

  return (
    <>
      <select onChange={handleColorChange}>
        <option value={Color.White}>白</option>
        <option value={Color.Blue}>青</option>
        <option value={Color.Green}>緑</option>
        <option value={Color.Red}>赤</option>
      </select>
      <input value={name} type="text" onChange={handleNameChange}/>
      <input value={amount} type="number" onChange={handleAmountChange}/>
      <button onClick={handleSubmit}>
        ボタン
      </button>
    </>
  )
};

export default ItemForm;
