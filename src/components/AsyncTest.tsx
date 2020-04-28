import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../states/rootReducer';
import { fetchQiita } from '../states/modules/apiTestModule'

const AsyncTest: React.FC = () => {
  const dispatch = useDispatch();
  const apitest = useSelector((state: RootState) => state.apitest);

  return (
    <div>
      This is AsyncTest
      <br />
      <input />
      <br />
      {/* <img src={apitest.url} alt="cat"/> */}
      {apitest.res}
      <button onClick={() => dispatch(fetchQiita())}>
        CALL
      </button>
    </div>
  );
}

export default AsyncTest;
