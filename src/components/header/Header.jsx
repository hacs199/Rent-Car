import React from 'react';
import "./Header.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Ratio from 'react-bootstrap/Ratio';

const Header = () => {
  return (
    <Container>
      <Navbar expand="lg" className="light header">
        <Container>
        <div style={{ width: 100, height: 'left' }}>
       <Ratio aspectRatio="1x1">
        <embed type="image/svg+xml" src="src/assets/Designer.jpeg" />
        </Ratio>
       </div>
          <Navbar.Brand href="#">Rent Car</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );

}

export default Header
