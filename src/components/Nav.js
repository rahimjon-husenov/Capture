import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';


const Nav = () => {
  const history = useHistory();
  const activePath = history.location.pathname;
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/"> About us</Link>
        
        </li>
        <li>
          <Link to="/work"> Our Work</Link>
          
        </li>
        <li>
          <Link to="/contact"> Contact Us</Link>
        
          
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  height: 150px;
  min-height: 10vh;
  display: flex;
  margin-top:-10px;
  justify-content: space-between;
  align-items: center;
  background: #282828;
  position: sticky;
  z-index: 2;
  width: 95vw;
  margin-left: 2vw;
  ul {
    display: flex;
    list-style: none;
    margin-left: -20px;
    margin-bottom: 30px;
  }
  li {
    padding-left: 1rem;
    position: relative;
    font-size: 1.5rem;
    transition: 0.3s;
  }
  li:hover{
    background-color: green;
    border: 1px solid green;
    padding: 3px;
  }
  a {
    color: white;
    text-decoration: none;
  }
  #logo {
    font-size: 2rem;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif     ;
    font-weight: lighter;
  }
  @media (max-width: 1500px) {
    flex-direction: column;
    
    ul {
      
      justify-content: space-around;
      width: 98%;
      li {
        padding: 0;
      }
    }
  }
`;


export default Nav;
