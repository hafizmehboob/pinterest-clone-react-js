import React from "react";
import styled from 'styled-components';
import Pin from './Pin';

function MainBoard(props){
   let { pins } = props;
    return (
       <Wrapper>
        <Container>
         { pins.map((pin, index) => {
             let { urls } = pin;
             return <Pin key={index} urls={ urls } />
         })}
        </Container>
       </Wrapper>
    );

}

export default MainBoard;

const Wrapper = styled.div`
   display:flex;
   width: 100%;
   height: 100%;
   margin-top: 15px;
   justify-content: center;
`

const Container = styled.div`
   width: 80%;
   column-count: 5;
   column-gap: 0;
   background-color: #fff;
`