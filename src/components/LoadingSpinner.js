//loadingSpinner.js
import React from "react";
import styled from "styled-components";

const SpinnerOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Spinner = styled.div`
  border: 8px solid #f3f3f3; /* Light gray */
  border-top: 8px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingSpinner = () => {
  return (
    <SpinnerOverlay>
      <Spinner />
    </SpinnerOverlay>
  );
};

export default LoadingSpinner;
