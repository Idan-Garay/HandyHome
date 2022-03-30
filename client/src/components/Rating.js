import React, { useState } from "react";
import styled from "styled-components";

const ScoreBtn = styled.button`
  font-weight: bold;
  border-radius: 8px;
  font-size: 1em;
  border: 1px solid black;
  height: 2.5em;
  width: 2.5em;
  background: #aedfff;
  &:hover {
    background: #0495f6;
    cursor: pointer;
  }
  &.active {
    background: #0495f6;
    cursor: default;
  }
`;

const SpaceBetweenDiv = styled.div`
  display: flex;
  column-gap: 5px;
  max-width: 15em;
`;

const SatisfiedLabels = styled(SpaceBetweenDiv)`
  justify-content: space-between;
  max-width: 13.5em;
  font-weight: bold;
  color: #c4c4c4;
`;

const FiveScoreBtns = ({ rate, onClickRate }) => {
  const scores = [1, 2, 3, 4, 5];

  return (
    <SpaceBetweenDiv>
      {scores.map((score, key) => (
        <ScoreBtn
          key={"score" + key}
          className={score == rate ? "active" : ""}
          value={score}
          onClick={onClickRate}
        >
          {score}
        </ScoreBtn>
      ))}
    </SpaceBetweenDiv>
  );
};

const StyledRating = styled.div`
  max-width: 20em;
  border: 1px solid black;
  text-align: left;
`;

const Rating = ({ ratingLabel = "Rating" }) => {
  const [rate, setRate] = useState(0);
  const onClickRate = (e) => {
    setRate(e.target.value);
  };

  return (
    <StyledRating>
      <h4>{ratingLabel}</h4>
      <FiveScoreBtns rate={rate} onClickRate={onClickRate} />
      <SatisfiedLabels>
        <p>Not Satisfied</p>
        <p>Very Satisfied</p>
      </SatisfiedLabels>
    </StyledRating>
  );
};

export default Rating;
