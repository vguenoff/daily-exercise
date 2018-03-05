import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Exercise = ({
  day,
  name,
  imageId,
  desc,
  backgroundColor,
}) => {
  const imgPath = require(`../assets/images/${imageId}.gif`); // eslint-disable-line

  return (
    <StyledExercise bg={backgroundColor}>
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
  backgroundColor: string.isRequired,
};

const StyledExercise = styled.li`
  list-style: none;
  padding: 0 2%;
  background: ${props => props.bg};
  min-height: 95vh;

  @media (max-width: 414px) {
    padding: 0 5%;
  }

  h2 {
    color: yellow;
    background: #000;
    text-transform: uppercase;
    font-style: italic;
  }

  p {
    &::first-letter {
      font-size: 120%;
      font-style: italic;
    }
  }

  img {
    border-radius: 10px;
    box-shadow: 5px 5px 0 #000;
  }
`;

export default Exercise;
