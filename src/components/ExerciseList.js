import React, { Component } from 'react';
import uuid from 'uuid/v4';
import moment from 'moment';
import styled from 'styled-components';

import data from '../data';

class ExerciseList extends Component {
  state = {
    exerciseList: null,
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
      exerciseList: data,
      evenWeek,
      dayOrder,
    });
  }

  render() {
    const {
      exerciseList,
      evenWeek,
      dayOrder,
    } = this.state;

    // this line is making sure there are no null values in the state
    const isLoaded = !Object.keys(this.state).filter(key => this.state[key] === null).length;

    return isLoaded && (
      <StyledExerciseList days={dayOrder}>
        <ul>
          {Object.keys(exerciseList).map((day) => {
            const imgPath = require(`../assets/images/${exerciseList[day][evenWeek].imageId}.gif`); // eslint-disable-line

            return (
              <li key={uuid()}>
                <h2>{day.toUpperCase()}</h2>
                <h4>{exerciseList[day][evenWeek].name}</h4>
                <img src={imgPath} alt={exerciseList[day][evenWeek].name} />
                <p>{exerciseList[day][evenWeek].desc}</p>
              </li>
            );
          })}
        </ul>
      </StyledExerciseList>
    );
  }
}

const StyledExerciseList = styled.div`
  ul {
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
  li {
    list-style: none;
    width: 18%;
    &:nth-child(${props => props.days[0]}) { order: 1;}
    &:nth-child(${props => props.days[1]}) { order: 2;}
    &:nth-child(${props => props.days[2]}) { order: 3;}
    &:nth-child(${props => props.days[3]}) { order: 4;}
    &:nth-child(${props => props.days[4]}) { order: 5;}
  }
`;

export default ExerciseList;
