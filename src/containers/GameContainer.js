import React, { Component } from 'react';
import Grid from '../components/Grid';
import Space from '../components/Space';

class GameContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      player: 1,
      winner: null
    }
    this.changePlayer = this.changePlayer.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.changePlayer = this.changePlayer.bind(this);
    this.saveToBoard = this.saveToBoard.bind(this);
  }




  onClickHandler(position) {
    console.log('Click!', position);
    this.saveToBoard(position);
    this.changePlayer();
  }

  changePlayer() {
    if (this.state.player === 1) {
      this.setState({player: 2})
    } else {
      this.setState({player: 1})
    }
  }

  // turnDecider(){
  //   console.log('I am turn decider');
  //   if (this.state.player === 1) {
  //     const marker = 'X'}
  //     else{
  //       const marker = 'O'
  //     }
  //   }

    saveToBoard(position) {
      console.log('Im trying to save on:', position);
      const arrayPositionX = position.x - 1;
      const arrayPositionY = position.y - 1;
      console.log(arrayPositionX, arrayPositionY);
      const newBoard = this.state.board;
      if (this.state.player === 1) {
        newBoard[arrayPositionX][arrayPositionY] = 'X'
      } else {
        newBoard[arrayPositionX][arrayPositionY] = 'O'
      }
      this.setState({board:newBoard})


    }


    render(){
      return (
        <div className="game-container">
          <Grid
            onClickHandler={this.onClickHandler}
          />
        </div>


      )
    }

  }

  export default GameContainer;
