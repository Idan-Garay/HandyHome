import React from "react";
import styled from "styled-components";

const ScoreBtn = styled.button`
  font-weight: bold;
  border-radius: 8px;
  font-size: 1em;
  border: 1px solid black;
  height: 2.5em;
  width: 2.5em;
  &:hover {
    background-color: #0495f6;
    cursor: pointer;
  }
  background: ${(props) => (props.isActive ? "#0495f6" : "#aedfff")};
`;

const SpaceBetweenDiv = styled.div`
  display: flex;
  column-gap: 5px;
  max-width: 15em;
`;

const SatisfiedLabels = styled(SpaceBetweenDiv)`
  justify-content: space-between;
  max-width: 13.5em;
`;

const FiveScoreBtns = () => {
  const scores = { 1: false, 2: false, 3: false, 4: false, 5: false };
  let prevKey = -1;

  const scoreClick = (keyName) => {
    if (prevKey !== -1) scores[prevKey] = false;

    scores[keyName] = true;
    prevKey = keyName;
  };

  return (
    <SpaceBetweenDiv>
      {Object.entries(scores).map(([key, isActive]) => (
        <ScoreBtn
          key={"score" + key}
          isActive={isActive}
          onClick={() => {
            scoreClick(key);
          }}
        >
          {key}
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
  return (
    <StyledRating>
      <h4>{ratingLabel}</h4>
      <FiveScoreBtns />
      <SatisfiedLabels>
        <p>Not Satisfied</p>
        <p>Very Satisfied</p>
      </SatisfiedLabels>
    </StyledRating>
  );
};

export default Rating;
