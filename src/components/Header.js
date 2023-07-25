import React, { useState } from "react";
import styled from 'styled-components';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { IconButton } from "@mui/material";
import SearchIcon  from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TextsmsIcon from '@mui/icons-material/Textsms';
import Avatar from '@mui/material/Avatar';
import Hafiz from '../images/hafiz.jpg'

    function Header(props){
         const [input, setInput] = useState("");
         const [headerStatus, setHeaderStatus] = useState('');
         const onSearchSubmit = (e) => {
         e.preventDefault();
         props.onSubmit(input); 
    }
    
    document.addEventListener("scroll", (event) => {
      window.scrollY > 100 ? setHeaderStatus('fixedHeader') :  setHeaderStatus('chohan');
    });

    return(
      <Wrapper className={headerStatus}>
         <LogoWrapper>
          <IconButton>  <PinterestIcon /> </IconButton>
         </LogoWrapper>
         <HomePageButton>
            <a href='/'>Homepage</a>
         </HomePageButton>
        <FollowingButton>
          <a href='/'>Following</a>
        </FollowingButton>
        <SearchWrapper>
            <SearchBarWrapper>
                <IconButton>
                  <SearchIcon />
                </IconButton>
                <form>
                  <input type="text" onChange={(e) => setInput(e.target.value)} placeholder="Search" />
                  <button type="submit" onClick={onSearchSubmit}></button>
                </form>
            </SearchBarWrapper>
         </SearchWrapper>
         <IconsWrapper>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
            <IconButton>
              <TextsmsIcon />
            </IconButton>
            <IconButton>
              <Avatar alt="Hafiz" src={Hafiz} sx={{ width: 30, height: 30 }} />
            </IconButton>
            <IconButton>
              <KeyboardArrowDownIcon />
            </IconButton>
         </IconsWrapper>
      </Wrapper>
    );
}
export default Header;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
  position: fixed;
  width: 100%;
  top: 0;
`;
const LogoWrapper = styled.div`
    .MuiSvgIcon-root{
        color: #e60023;
        font-size: 32px;
        cursor: pointer;
    }
`
const HomeButtons = styled.div`
      display:flex;
      align-items: center;
      justify-content: center;
      height: 48px;
      min-width: 123px;
      border-radius: 24px;
      cursor: pointer;
`
const HomePageButton = styled(HomeButtons)`
    background-color: rgb(17, 17, 17);
    a{
      text-decoration: none;
      color: white;
      font-weight: 700;
    }
`
const FollowingButton = styled(HomeButtons)`
    background-color: white;
    a{
      text-decoration: none;
      color: #000;
      font-weight: 700;
    }
    &:hover{
      background-color: #e1e1e1;
    }
`
const SearchWrapper = styled.div`
   flex: 1; 
`
const SearchBarWrapper = styled.div`
    background-color: #efefef; 
    display: flex;
    height: 48px;
    width:100%;
    border-radius: 50px;
    border:none;
    padding-left: 10px;

    form{
      display: flex;
      flex: 1;
    }

    form > input {
      background-color: transparent;
      border:none;
      width:100%;
      margin-left: 5px;
      font-size: 16px;

    }
     form > button {
      display:none;
     }
     input:focus{
      outline: none;
     }
     input:active{
      outline: none;
     }
`
const IconsWrapper = styled.div`
   margin-left: 15px;
 `