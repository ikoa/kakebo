import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addYear, addMonth, addDate } from '../../../states/modules/itemListModule';
import { Day, Year } from '../../../states/models';
import { RootState } from '../../../states/rootReducer';

const KakeboForm: React.FC<{
  year: number,
  initMonth: number,
}> = ({
  year,
  initMonth,
}) => {
  const dispatch = useDispatch();
  // const {items} = useSelector((state: RootState) => state);

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

    setAmount(date.y);
    setName('');
  };

  return (
    <>
      <div>
        <input value={date.y} type="number" onChange={handleYearChange}/>
        <button onClick={() => {dispatch(addYear(date.y))}}>
          addY
        </button>
      </div>
      <div>
        <input value={date.m} type="number" onChange={handleMonthChange}/>
        <button onClick={() => {dispatch(addMonth({ad: date.y, monthNum: date.m}))}}>
          addM
        </button>
      </div>
      <div>
        <input value={date.d} type="number" onChange={handleDateChange}/>
        <button onClick={() => {dispatch(addDate({ad: date.y, monthNum: date.m, date: date.d}))}}>
          addD
        </button>
      </div>
    </>
  )
};

export default KakeboForm;
