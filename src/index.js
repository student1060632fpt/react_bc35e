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
import RenderList from './RenderList/RenderList';
import ExRenderFilms from './RenderList/ExRenderFilms';
import DemoProps from './Props/DemoProps/DemoProps';
import ShoesApp from './Props/ShoesApp/ShoesApp';

const root = ReactDOM.createRoot(document.getElementById('root'));

//JSX
root.render(
  <div>
      {/* <BaiTapHomeLayout /> */}
      {/* <DataBinding /> */}
      {/* <HandleEvent /> */}
      {/* <DemoState /> */}
      {/* <RenderList /> */}
      {/* <ExRenderFilms /> */}
      {/* <DemoProps /> */}
      <ShoesApp />
  </div>
)