import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarCom = () => {
    return (
        <div>
            <Nav>
                <Container>
                    <Navbar>
                        <div className="site-logo-name">MW</div>

                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/product">Product</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                        </ul>

                        <div className="icons">
                            <i className="fas fa-cart-plus"></i>
                            <i className="fas fa-user"></i>
                        </div>
                    </Navbar>
                </Container>
            </Nav>


        </div>
    );
};

const Nav = styled.div `
  box-shadow: 0px 5px 6px 1px #000;
`

const Container = styled.div `
    max-width: 1200px;
    margin: auto;
   
   .wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
      grid-gap: 15px;
      padding-top: 50px;
   }
   
   .images {
      display: flex;
      align-items: center;
      justify-content: center;
   }
   
   img {
      height: 300px;
      cursor: pointer;
      transition: 0.5s ease-in-out;
    }

   img:hover {
      transform: translateY(-20px);
   }
`

const Navbar = styled.div `
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 15px 0;
  
  i {
    font-size: 30px;
    margin: 0 20px;
  }
  
  ul {
    display: flex;
    list-style: none;
  }
  
  a {
    font-size: 20px;
    margin: 0 15px;
    text-decoration: none;
  }
`

export default NavbarCom;