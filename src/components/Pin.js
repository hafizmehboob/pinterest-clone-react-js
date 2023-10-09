import React from "react"
import styled from 'styled-components'
import { Button } from "@mui/material";
import SavePinsData from './SavePinsData';
function Pin(props) {
   let { urls } = props;
   return (
      <Wrapper>
         <Container>
            <div>
               <SavePinsData/>
               <Button variant="save">Save</Button>
            </div>
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
   position: relative;
   img{
      width: 100%;
      display: flex;
      cursor: zoom-in;
      border-radius: 16px;
      object-fit: cover;
   }
   > div{
      position: absolute;
      top: 0px;
      padding:10px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: calc(100% - 10px);
   }
   > div > button{
      background-color: #e60023;
      border-radius: 25px;
      color: #fff;
      padding: 9px 15px;
      &:hover{
         background-color: #000;
      }
   }
   
`