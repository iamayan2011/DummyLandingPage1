import * as React from "react";
import styled from "styled-components";

function ProgressBar2() {
  return (
    <ProgressBarContainer>
      <ProgressBarFill />
    </ProgressBarContainer>
  );
}

const ProgressBarContainer = styled.div`
  border-radius: 100px;
  border: 2px solid var(--Gradient-1, #38ef7d);
  max-width: 100%;
  padding: 6px;
  
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const ProgressBarFill = styled.div`
  border-radius: 100px;
  background: var(--Gradient-1, linear-gradient(270deg, #38ef7d 0%, #11998e 100%));
  width: 80%;
  max-width: 100%;
  height: 6px;
`;

export default ProgressBar2;