import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Since the Square components no longer maintain state, the Square components receive values from the Board component and inform the Board component when they’re clicked.
// In React terms, the Square components are now controlled components. The Board has full control over them.
// class Square extends React.Component {
//     render() {
//       return (
//         <button 
//           className="square"
//           onClick={() => this.props.onClick()}
//         >
//           {this.props.value}
//         </button>
//       );
//     }
//   }

// Function components are a simpler way to write components that only contain a render method and don’t have their own state.
// Function components are less tedious to write than classes, and many components can be expressed this way.
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
  
  class Board extends React.Component {
    // React components can have state by setting this.state in their constructors
    // this.state should be considered as private to a React component that it’s defined in
    constructor(props) {
      // All React component classes that have a constructor should start with a super(props) call
      super(props);
      // State of the entire Board. Since state is considered to be private to a component that defines it, we cannot update the Board’s state directly from Square.
      // Instead, we’ll pass down a function from the Board to the Square, and we’ll have Square call that function when a square is clicked
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
      };
    }

    // In React, it’s conventional to use handle[Event] for the methods which handle events
    handleClick(i) {
      // we call .slice() to create a copy of the squares array to modify instead of modifying the existing array
      const squares = this.state.squares.slice();
      // returns true if the square is already occupied or game is already won
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      // setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state
      this.setState({ 
        squares: squares,
        xIsNext: !this.state.xIsNext,
      });
    }

    renderSquare(i) {
      // pass a prop called value to Square. Passing props is how information flows in React apps, from parents to children.
      return (
        <Square 
          value={this.state.squares[i]}
          // pass down the function from the Board to the Square
          // In React, it’s conventional to use on[Event] names for props which represent events => so we use onClick here
          onClick={() => this.handleClick(i)}
        />
      );
    }
  
    render() {
      const winner = calculateWinner(this.state.squares);
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
