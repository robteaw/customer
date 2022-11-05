import React from "react";
import Customer from "./Customer";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Customer />
    </Container>
  );
}

const Container = styled.div`
  color: #fff;
  background-color: #8b0000;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto 5rem auto;
  padding: 8rem 12%;
  input {
    width: 100%;
    max-width: 10rem;
    padding: 0.75rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
  }
  button {
    color: #000;
    background-color: #ffd700;
    font-size: 1rem;
    font-weight: bold;
    min-width: 3rem;
    margin: 0 0.25rem;
    padding: 0.75rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    &:hover {
      color: #fff;
      background-color: #1e90ff;
    }
  }
`;
