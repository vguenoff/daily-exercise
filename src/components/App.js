import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import data from '../data';

import ExerciseList from './ExerciseList';

class App extends Component {
  state = {
    list: null,
    evenWeek: null,
    dayOrder: null,
  }

  componentDidMount() {
    // the exercises are different based on that if it's even or odd week
    const evenWeek = (moment().week() % 2 === 0) ? 0 : 1;

    // the exercise order is based on the current day
    // and dynamically set in the styled component with flexbox
    const currentDay = Number(moment().format('d'));
    const dayOrder = ((day) => {
      switch (day) {
        case 1:
        default:
          return [1, 2, 3, 4, 5];
        case 2:
          return [2, 3, 4, 5, 1];
        case 3:
          return [3, 4, 5, 1, 2];
        case 4:
          return [4, 5, 1, 2, 3];
        case 5:
          return [5, 1, 2, 3, 4];
      }
    })(currentDay);

    this.setState({
      list: data,
      evenWeek,
      dayOrder,
    });
  }

  render() {
    // this line is making sure there are no null values in the state
    const isLoaded = !Object.keys(this.state).filter(key => this.state[key] === null).length;

    return isLoaded && (
      <StyledApp>
        <nav>
          <span>Daily Exercise</span>
        </nav>
        <ExerciseList {...this.state} />
      </StyledApp>
    );
  }
}

const StyledApp = styled.div`
  nav {
    display: flex;
    background: #000;
    margin: 0;
    min-height: 5vh;
    padding: 0;
    display; block;
  }
  span {
    align-self: center;
    padding: 0 2%;
    color: yellow;
    font-weight: bold;
    width: 50%;

    @media (max-width: 414px) {
      padding: 0 5%;
    }
  }

`;

export default App;
