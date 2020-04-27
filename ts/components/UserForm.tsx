import React from 'react';
import IUser from '../states/IUser';
import {TextBox} from './TextBox';

export const UserForm: React.FC<IUser> = ({
  name
}) => {

  const onChangeText = (value: string) => {
    // tslint:disable-next-line: no-console
    console.log(value);
  };

  return (
    <div>
      <p>
        <TextBox
          label="ユーザー名"
          type="text"
          value={name}
          onChangeText={onChangeText}
        />
      </p>
    </div>
  );
};
