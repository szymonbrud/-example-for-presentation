import React from "react"
import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby";

const MainWrapper = styled.div`
  height: 100vh;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');
  font-family: 'Roboto', sans-serif;
  position: absolute;
  width: calc(100% + 7px);
  top: 0;
  left: -8px;

`;

const IndexPage = () => (
  <StaticQuery
        query={graphql`
          query{
            testapi {
              stronaGlownas{
                id 
                text
              }
            }
          }
        `}
        
        render={({testapi: {stronaGlownas}}) => (
          <>
            <MainWrapper>
              {stronaGlownas[0].text}
            </MainWrapper>
          </>
        )}
      />
)

export default IndexPage