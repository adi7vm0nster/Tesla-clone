import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  return (
    <Container>
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImage="model-3.jpg"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImage="model-y.jpg"
      />
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImage="model-s.jpg"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImage="model-x.jpg"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        backgroundImage="solar-panel.jpg"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        backgroundImage="solar-roof.jpg"
      />
      <Section
        title="Accessories"
        description=""
        leftBtnText="Show Now"
        backgroundImage="accessories.jpg"
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
