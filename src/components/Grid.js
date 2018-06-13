import React, { Component } from 'react';
import Space from './Space';
import GameContainer from '../containers/GameContainer'

const Grid = (props) => {

  return(
    <div className="grid">
    <div className="row">
      <Space x="1" y="1" onClickHandler={props.onClickHandler}/>
      <Space x="1" y="2" onClickHandler={props.onClickHandler}/>
      <Space x="1" y="3" onClickHandler={props.onClickHandler}/>
    </div>
    <div className="row">
      <Space x="2" y="1" onClickHandler={props.onClickHandler}/>
      <Space x="2" y="2" onClickHandler={props.onClickHandler}/>
      <Space x="2" y="3" onClickHandler={props.onClickHandler}/>
    </div>
    <div className="row">
      <Space x="3" y="1" onClickHandler={props.onClickHandler}/>
      <Space x="3" y="2" onClickHandler={props.onClickHandler}/>
      <Space x="3" y="3" onClickHandler={props.onClickHandler}/>
    </div>
  </div>
  )
}


export default Grid;
