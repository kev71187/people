import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
export default class Header extends Component {
  render() {
    return (

    <Navbar>
       <Navbar.Header>
         <Navbar.Brand>
             <img  src="http://people.ai/app/themes/people/dist/../assets/images/svg/text-logo.svg" alt="People.ai"/>
         </Navbar.Brand>
       </Navbar.Header>
       <Nav>

       </Nav>
     </Navbar>
    )
  }
}
