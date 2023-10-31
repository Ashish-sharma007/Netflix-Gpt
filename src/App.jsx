import React, { useState } from 'react';

import Body from './components/Body';
import appStore from './utils/appStore';
import { Provider } from 'react-redux';
function Donut() {


  return (
    <Provider store={appStore}>
    <Body/>
 </Provider>
  );
} 

export default Donut;
