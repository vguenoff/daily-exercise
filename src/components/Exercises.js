import React, { Component } from 'react';
import uuid from 'uuid/v4';
import moment from 'moment';
import styled from 'styled-components';

import data from '../data';

class Exercises extends Component {
  state = {
    data: null,
  }

  componentDidMount() {
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    const evenWeek = 0;
    // const currentDay = moment().format('dddd').toLowerCase();
    const currentDay = 'wednesday';

    console.log(currentDay);

    return (
      <StyledExercises>
        <ul>
          {data &&
            Object.keys(data).map((day) => {
              const imgPath = require(`../assets/images/${data[day][evenWeek].imageId}.gif`); // eslint-disable-line

              return (
                <li key={uuid()}>
                  <h2>{day.toUpperCase()}</h2>
                  <h4>{data[day][evenWeek].name}</h4>
                  <img src={imgPath} alt={data[day][evenWeek].name} />
                  <p>{data[day][evenWeek].desc}</p>
                </li>
              );
            })
          }
        </ul>
      </StyledExercises>
    );
  }
}

const StyledExercises = styled.div`
  ul {
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
  li {
    list-style: none;
    width: 18%;
  }
`;

export default Exercises;
