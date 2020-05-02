import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addYear, addMonth, addDate, addItem } from '../../../states/modules/itemListModule';
import { Day, Year, Item } from '../../../states/models';
import { RootState } from '../../../states/rootReducer';
import { DatePicker } from '@material-ui/pickers';
import {Input} from '@material-ui/core';

const KakeboForm: React.FC<{
  year: number,
  initMonth: number,
}> = ({
  year,
  initMonth,
}) => {
  const dispatch = useDispatch();
  const {items} = useSelector((state: RootState) => state);

  const [date, setDate] = useState<{y:number,m:number,d:number}>({
    y: year,
    m: initMonth,
    d: new Date().getDate(),
  });
  const [amount, setAmount] = useState<number | ''>('');
  const [name, setName] = useState<string>('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate({...date, y : Number(e.target.value)});
  }

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate({...date, m : Number(e.target.value)});
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate({...date, d : Number(e.target.value)});
  };

  const handleSubmit = () => {
    const newItem: Item = {
      ad: date.y,
      monthNum: date.m,
      date : date.d,
      id : new Date().getTime(),
      name,
      amount : amount === '' ? 0 : amount,
    };

    dispatch(addItem(newItem));
    setAmount('');
    setName('');
  };
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54'),
  );
  const handleDateChange2 = (date: Date | null) => {
    setSelectedDate(date);
  };
  return (
    <>
      <div>
        <input value={name} type="text" onChange={handleNameChange}/>
        <input value={amount} type="number" onChange={handleAmountChange}/>
        <button onClick={handleSubmit}>
          addItem
        </button>
      </div>
    </>
  )
};

export default KakeboForm;
