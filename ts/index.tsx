import React from 'react';
import ReactDom from 'react-dom';
import {UserForm} from './components/UserForm';

const container = document.getElementById('contents');

ReactDom.render(
    <UserForm name="a" />, container
);
