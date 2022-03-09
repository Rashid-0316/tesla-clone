import React from 'react'
import Section from "./Section";
import styled from 'styled-components';
function Home() {
  return (
    <Container>
      <Section
        title="Custom Order"
        description="Order now to get your custom model."
        bgImage="model-s.jpg"
        rightBtnText="Custom Order"
        leftBtnText="Existing Inventory"
        
      />
      <Section
        title="Custom Order"
        description="Order now to get your custom model."
        bgImage="model-x.jpg"
        rightBtnText="Custom Order"
        leftBtnText="Existing Inventory"
        
      />
      <Section
        title="Custom Order"
        description="Order now to get your custom model."
        bgImage="model-y.jpg"
        rightBtnText="Custom Order"
        leftBtnText="Existing Inventory"
        
      />
      <Section
        title="Solar Panels"
        description="Order now to get your custom model."
        bgImage="solar-panel.jpg"
        rightBtnText="Custom Order"
        leftBtnText="Existing Inventory"
        
      />
      <Section
        title="Accessories"
        description="Order now to get your custom model."
        bgImage="accessories.jpg"
        leftBtnText="Existing Inventory"
        
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`