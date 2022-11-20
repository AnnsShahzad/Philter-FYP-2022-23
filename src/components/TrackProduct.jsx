import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CDBContainer, CDBBreadcrumb, CDBIcon } from 'cdbreact';
import add_product from './images/add_product.jpg';
import track_product from './images/track_product.jpg';
import { Link } from 'react-router-dom';

function TrackProduct() {
  return (
    <div>
      <Container  >
          <Row >
              <h2 className='text-center ' style={{textTransform:'uppercase', marginTop: 40, fontWeight: 'bold', textDecoration: 'underline'}}>Track Products</h2>
          </Row>
      </Container>

      <CDBContainer>
          <CDBBreadcrumb color="none" className="align-items-center mt-3 mb-4">
              <Link style={{ color: '#282828'}}  to='/'><li className="breadcrumb-item" >Manufacturer</li></Link>
              <CDBIcon className="mx-2 text-muted" fas icon="angle-double-right"/>
              <Link style={{color: '#282828'}}  to='/Product'><li className="breadcrumb-item ">Products</li></Link>
              <CDBIcon className="mx-2 text-muted" fas icon="angle-double-right"/>
              <li className="breadcrumb-item active">Track Product</li>
              
          </CDBBreadcrumb>
      </CDBContainer>

      <Container >
        <table className="table table-bordered thead-dark table-striped rounded">
          <thead className="table-dark">
            <tr>
              <th scope="col">Serial #</th>
              <th scope="col">Product Title</th>
              <th scope="col">Distributor</th>
              <th scope="col">Quantity</th>
              <th scope="col">Batch No.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">01</th>
              <td>Panadol</td>
              <td>Distributor 1</td>
              <td>890</td>
              <td>246</td>
            </tr>

            <tr>
              <th scope="row">02</th>
              <td>Sitaglomet</td>
              <td>Distributor 2</td>
              <td>891</td>
              <td>244</td>
            </tr>

            <tr>
              <th scope="row">03</th>
              <td>Motilium</td>
              <td>Distributor 3</td>
              <td>892</td>
              <td>222</td>
            </tr>
            
          </tbody>
        </table>

        
      </Container>



        
    </div>
  )
}

export default TrackProduct;