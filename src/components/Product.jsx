import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CDBBox, CDBFooter, CDBLink, CDBContainer, CDBBreadcrumb, CDBIcon } from 'cdbreact';
import add_product from './images/add_product.jpg';
import track_product from './images/track_product.jpg';
import dist from './images/dist.jpg';
import './Manufec.css';

function Product() {
  return (
    <div >
        <Container  >
            <Row >
                <h2 className='text-center' style={{textTransform:'uppercase', marginTop: 40, fontWeight: 'bold', textDecoration: 'underline'}}>Products</h2>
            </Row>
        </Container>

        <CDBContainer>
            <CDBBreadcrumb color="none" className="align-items-center mt-3">
              <li className="breadcrumb-item" >Manufacturer</li>
              <CDBIcon className="mx-2 text-muted" fas icon="angle-double-right"/>
              <li className="breadcrumb-item active">Products</li>
            </CDBBreadcrumb>
        </CDBContainer>

        <Container>
            <Row xs={1} md={2} lg={3} className="justify-content-center">
                
                
                <Card className='mx-4' style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={add_product} />
                    <Card.Body>
                        <Card.Title>Add Product</Card.Title>
                    </Card.Body>
                </Card>
                
                <Card className='mx-4' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={track_product} />
                    <Card.Body>
                        <Card.Title>Track Product</Card.Title>
                    </Card.Body>
                </Card>
                
            </Row>
        </Container>


        <CDBFooter className='footer'>
            <CDBBox display="flex" justifyContent='center' >
                <small >&copy; PHILTER, 2022-23. All rights reserved.</small>
            </CDBBox>
        </CDBFooter>

    </div>
  )
}

export default Product