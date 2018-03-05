import React from 'react';
import { arrayOf, objectOf, number, string, shape } from 'prop-types';
import uuid from 'uuid/v4';
import styled from 'styled-components';

import Exercise from './Exercise';

const ExerciseList = ({
  dayOrder,
  list,
  evenWeek,
}) => (
  <StyledExerciseList days={dayOrder}>
    <ul>
      {Object.keys(list).map((day) => {
        const {
          name,
          imageId,
          desc,
        } = list[day][evenWeek];

        return (
          <Exercise
            key={uuid()}
            day={day}
            name={name}
            imageId={imageId}
            desc={desc}
          />
        );
      })}
    </ul>
  </StyledExerciseList>
);

ExerciseList.propTypes = {
  dayOrder: arrayOf(number).isRequired,
  list: objectOf(
    arrayOf(shape({
      name: string,
      desc: string,
      imageId: string,
      backgroundColor: string,
    })),
  ).isRequired,
  evenWeek: number.isRequired,
};

const StyledExerciseList = styled.div`
  ul {
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
  /* reordering every child based on the current day */
  li {
    &:nth-child(${props => props.days[0]}) { order: 1;}
    &:nth-child(${props => props.days[1]}) { order: 2;}
    &:nth-child(${props => props.days[2]}) { order: 3;}
    &:nth-child(${props => props.days[3]}) { order: 4;}
    &:nth-child(${props => props.days[4]}) { order: 5;}
  }
`;

export default ExerciseList;
