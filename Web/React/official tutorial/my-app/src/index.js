import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Since the Square components no longer maintain state, the Square components receive values from the Board component and inform the Board component when they’re clicked.
// In React terms, the Square components are now controlled components. The Board has full control over them.
class Square extends React.Component {
    render() {
      return (
        <button 
          className="square"
          onClick={() => this.props.onClick()}
        >
          {this.props.value}
        </button>
      );
    }
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
      };
    }

    // In React, it’s conventional to use handle[Event] for the methods which handle events
    handleClick(i) {
      // we call .slice() to create a copy of the squares array to modify instead of modifying the existing array
      const squares = this.state.squares.slice();
      squares[i] = 'X';
      this.setState({ squares: squares });
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
      const status = 'Next player: X';
  
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
  