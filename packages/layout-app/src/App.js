import React from "react";
import { BrowserRouter } from "react-router-dom";
import LayoutContainer from './containers/layout/layout-container';

import './index.css'

export default ({ theme }) => {
  return (
    
      <div className="w-100">
        <LayoutContainer />
      </div>
    
  );
};
