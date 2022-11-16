import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CDBBox, CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';
import analytics from './images/analysis.jpg';
import product from './images/product.png';
import dist from './images/dist.jpg';
import './Manufec.css';

function Manufec() {
  return (

    <div >
        <Container  >
            <Row >
                <h2 className='text-center' style={{textTransform:'uppercase', marginTop: 40, fontWeight: 'bold', textDecoration: 'underline'}}>Manufacturer Panel</h2>
            </Row>
        </Container>

        <Container>
            <Row xs={1} md={2} lg={3} className="justify-content-center">
                
                
                <Card className='mx-4' style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={analytics} />
                    <Card.Body>
                        <Card.Title>Analytics</Card.Title>
                    </Card.Body>
                </Card>
                
                <Card className='mx-4' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product} />
                    <Card.Body>
                        <Card.Title>Product</Card.Title>
                    </Card.Body>
                </Card>

                <Card className='mx-4' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={dist} />
                    <Card.Body>
                        <Card.Title>Distribution</Card.Title>
                    </Card.Body>
                </Card>
                
            </Row>
        </Container>

        <CDBFooter className='footer'>
            <CDBBox display="flex" justifyContent='center' >
                <small className="ml-2 mt-3">&copy; PHILTER, 2022-23. All rights reserved.</small>
            </CDBBox>
        </CDBFooter>

    </div>    
  )
}

export default Manufec