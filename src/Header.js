import React from 'react'
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>
      <>
      
      <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="#home">
            <p><i class="fa-regular fa-2x fa-address-book fa-bounce"></i><strong 
            className='fs-4 ms-3 text-light'>CONTACTS</strong></p>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
    

    </div>
  )
}

export default Header