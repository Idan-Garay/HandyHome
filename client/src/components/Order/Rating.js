import React from "react";
import styled from "styled-components";

const ScoreBtn = styled.button`
  font-weight: bold;
  border-radius: 8px;
  font-size: 1em;
  border: none;
  height: 2.5em;
  width: 2.5em;
  background: #a3e5de;
  &:hover,
  &.active {
    background: #04c9aa;
    cursor: default;
    color: white;
  }
  &:hover {
    cursor: pointer;
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
  color: #c4c4c4;
  & > p {
    font-weight: 400;
  }
`;

const FiveScoreBtns = ({ rate, onClickRate, ratingName }) => {
  const scores = [1, 2, 3, 4, 5];

  return (
    <SpaceBetweenDiv>
      {scores.map((score, key) => (
        <ScoreBtn
          key={"score" + key}
          // eslint-disable-next-line eqeqeq
          className={score == rate ? "active" : ""}
          value={score}
          onClick={onClickRate}
          type="button"
          name={ratingName}
        >
          {score}
        </ScoreBtn>
      ))}
    </SpaceBetweenDiv>
  );
};

const StyledRating = styled.div`
  max-width: 20em;
  /* border: 1px solid black; */
  text-align: left;
  margin-bottom: 0.5em;
`;

const Rating = ({ ratingLabel = "Rating", ratingName, rate, onClick }) => {
  return (
    <StyledRating>
      <h4>{ratingLabel}</h4>
      <FiveScoreBtns
        rate={rate}
        onClickRate={onClick}
        ratingName={ratingName}
      />
      <SatisfiedLabels>
        <p>Not Satisfied</p>
        <p>Very Satisfied</p>
      </SatisfiedLabels>
    </StyledRating>
  );
};

export default Rating;
