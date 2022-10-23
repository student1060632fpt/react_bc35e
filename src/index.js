import React from 'react';
import ReactDOM from 'react-dom/client';
import BaiTapHomeLayout from './components/BaiTapHomeLayout/BaiTapHomeLayout';
import Header from './components/Header';
import Product from './components/Product';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import DemoState from './State/DemoState';
//nhúng css
import './assets/css/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

//JSX
root.render(
  <div>
      {/* <BaiTapHomeLayout /> */}
      {/* <DataBinding /> */}
      {/* <HandleEvent /> */}
      <DemoState />
      <p className='color-red'>abc</p>
  </div>
)