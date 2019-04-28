import React from "react"
import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby";

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
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