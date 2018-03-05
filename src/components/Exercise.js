import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Exercise = ({
  day,
  name,
  imageId,
  desc,
}) => {
  const imgPath = require(`../assets/images/${imageId}.gif`); // eslint-disable-line

  return (
    <StyledExercise>
      <h2>{day}</h2>
      <h4>{name}</h4>
      <img src={imgPath} alt={name} />
      <p>{desc}</p>
    </StyledExercise>
  );
};

Exercise.propTypes = {
  day: string.isRequired,
  name: string.isRequired,
  imageId: string.isRequired,
  desc: string.isRequired,
};

const StyledExercise = styled.li`
  padding: 2%;
  width: 20%;
  list-style: none;
  h2 {
    color: yellow;
    background: #000;
    text-transform: uppercase;
  }
`;

export default Exercise;
