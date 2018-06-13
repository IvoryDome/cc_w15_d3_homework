import React, { Component } from 'react';
import Space from './Space';

const Grid = (props) => {

  return(
    <div className="grid">
    <div className="row">
      <Space x="1" y="1" />
      <Space x="1" y="2"/>
      <Space x="1" y="3"/>
    </div>
    <div className="row">
      <Space x="2" y="1"/>
      <Space x="2" y="2"/>
      <Space x="2" y="3"/>
    </div>
    <div className="row">
      <Space x="3" y="1"/>
      <Space x="3" y="2"/>
      <Space x="3" y="3"/>
    </div>
  </div>
  )
}


export default Grid;
