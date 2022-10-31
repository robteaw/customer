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
  min-height: 100vh;
  height: 100%;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto 5rem auto;
  padding: 8rem 12%;
  input {
    margin: 0.6rem;
  }
`;
