import styled from "styled-components";

import Header from "./components/header/Header";
import Chart from "./components/chart/Chart";

const Container = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChartContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 1200px) {
    width: 40%;
  }

  @media (max-width: 900px) {
    width: 50%;
  }

  @media (max-width: 600px) {
    width: 80%;
  }
`;

const App = () => {
  return (
    <Container>
      <ChartContainer>
        <Header />
        <Chart />
      </ChartContainer>
    </Container>
  );
};

export default App;
