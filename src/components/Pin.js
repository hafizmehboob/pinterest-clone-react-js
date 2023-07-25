import React from "react"
import styled from 'styled-components'
function Pin(props){
   let { urls } = props;
    return(
       <Wrapper>
         <Container>
            <div></div>
            <img src={urls?.regular} alt="Pins" />
         </Container>
       </Wrapper>
    );
}
export default Pin;

const Wrapper = styled.div`
   display: inline-flex;
   padding: 5px;
`

const Container = styled.div`
   display: flex;
   align-items: center;
   box-sizing: border-box;
   cursor: pointer;
   width: auto;
   img{
      width: 100%;
      display: flex;
      cursor: zoom-in;
      border-radius: 16px;
      object-fit: cover;
   }
`