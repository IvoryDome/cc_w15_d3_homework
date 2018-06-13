import React, { Component } from 'react';

const Space = (props) => {

  const getSpacePosition = () => {
    const position =
    {
      x: props.x,
      y: props.y
    }
    return position;
  };

  const onSpaceClick = () => {
    props.onClickHandler(getSpacePosition());
  };

  return(
    <div className = "space" onClick={onSpaceClick}>X</div>
  );

}

export default Space;
