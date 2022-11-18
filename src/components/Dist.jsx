import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CDBContainer, CDBBreadcrumb, CDBIcon } from 'cdbreact';
import addDist from './images/add_dist.jpg';
import trackDist from './images/track_dist.jpg';
import { Link } from 'react-router-dom';

function Dist() {
  return (
    <div >
        <Container  >
            <Row >
                <h2 className='text-center' style={{textTransform:'uppercase', marginTop: 40, fontWeight: 'bold', textDecoration: 'underline'}}>Distributor</h2>
            </Row>
        </Container>

        <CDBContainer>
            <CDBBreadcrumb color="none" className="align-items-center mt-3">
              <Link style={{ color: '#282828'}}  to='/'><li className="breadcrumb-item" >Manufacturer</li></Link>
              <CDBIcon className="mx-2 text-muted" fas icon="angle-double-right"/>
              <li className="breadcrumb-item active">Distributor</li>
            </CDBBreadcrumb>
        </CDBContainer>

        <Container>
            <Row xs={1} md={2} lg={3} className="justify-content-center">
                
                <Link style={{textDecoration: 'none', color: '#282828'}} to='/addProduct' >
                    <Card className='mx-4' style={{ width: '18rem'}}>
                        <Card.Img variant="top" src={addDist} />
                        <Card.Body>
                            <Card.Title>Add Distributor</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>

                <Card className='mx-4' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={trackDist} />
                    <Card.Body>
                        <Card.Title>Track Distributor</Card.Title>
                    </Card.Body>
                </Card>
                
            </Row>
        </Container>

    </div>
  )
}

export default Dist