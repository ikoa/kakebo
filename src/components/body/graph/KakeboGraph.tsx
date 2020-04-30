import React from 'react';

const KakeboGraph: React.FC<{
  year: number,
  month: number,
}> = ({
  year,
  month,
}) => {
  return (
    <div>
      {`${year}/${month}`}
      <br />
      <img src="test"/>
    </div>
  );
};

export default KakeboGraph;
