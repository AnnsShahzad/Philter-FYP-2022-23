import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import {CDBBox, CDBFooter, CDBLink, CDBContainer, CDBBreadcrumb, CDBIcon } from 'cdbreact';
import {Link} from 'react-router-dom';

function AddProduct() {
  return (
  
    <div className="container pb-5 col-md-8" style={{boxShadow: '1px 2px 9px #F4AAB9', borderRadius: 10}}>
      
      <form className='mt-5 pt-5'>
        <h2 className='text-center mb-1' style={{textTransform: 'uppercase', color: '#282828', fontWeight: 'bold'}}>Add Product</h2>

        <CDBContainer>
            <CDBBreadcrumb color="none" className="align-items-center mt-3 mb-4">
              <Link style={{ color: '#282828'}}  to='/'><li className="breadcrumb-item" >Manufacturer</li></Link>
              <CDBIcon className="mx-2 text-muted" fas icon="angle-double-right"/>
              <Link style={{color: '#282828'}}  to='/Product'><li className="breadcrumb-item ">Products</li></Link>
              <CDBIcon className="mx-2 text-muted" fas icon="angle-double-right"/>
              <li className="breadcrumb-item active">Add Product</li>
              
            </CDBBreadcrumb>
        </CDBContainer>

        <div className="form-group row d-flex justify-content-center mb-3">
          <label htmlFor="companyName" className='col-md-3 col-form-label'>Company Name</label>
          <div className="col-md-3">
            <input type="text" className='form-control' id='companyName' placeholder='Company Name' />
          </div>

          <label htmlFor="MFGdate" className='col-md-2 col-form-label'>MFG Date</label>
          <div className="col-md-3">
            <input type="date" className='form-control' id='MFGdate'  />
          </div>
        </div>

        <div className="form-group row d-flex justify-content-center mb-3">
          <label htmlFor="productTitle" className='col-md-3 col-form-label'>Product Title</label>
          <div className="col-md-3">
            <input type="text" className='form-control' id='productTitle' placeholder='Product Title' />
          </div>

          <label htmlFor="EXPdate" className='col-md-2 col-form-label'>EXP Date</label>
          <div className="col-md-3">
            <input type="date" className='form-control' id='EXPdate'  />
          </div>
        </div>

        <div className="form-group row d-flex justify-content-center mb-3">
          <label htmlFor="productDescription" className='col-md-3 col-form-label'>Description</label>
          <div className="col-md-3">
            <input type="text" className='form-control' id='productDescription' placeholder='Short Description' />
          </div>

          <label htmlFor="batchNumber" className='col-md-2 col-form-label'>Batch #</label>
          <div className="col-md-3">
            <input type="number" min='1' className='form-control' id='batchNumber'  />
          </div>
        </div>

          <h5 style={{textTransform: 'uppercase', color: '#282828', fontWeight: 'bold', marginLeft: 30}}>Information</h5>

        <div className="form-group row d-flex justify-content-center mb-3">
          <div className="col-md-5">
            <select className='form-select mb-3' >
              <option selected >Distributor</option>
              <option value='1'>Distributor 1</option>
              <option value='2'>Distributor 2</option>
              <option value='3'>Distributor 3</option>
              <option value='4'>Distributor 4</option>
            </select>
          </div>

          
          <div className="col-md-5 mb-3">
            <input type="number" className='form-control' placeholder='Quantity of Products' id='productQuantity'  />
          </div>
        </div>

        <div className="form-group row d-flex justify-content-center mb-3">
          <div className="col-md-5">
          <input type="number" className='form-control' placeholder='Cost of Single Product' id='singleItemCost'  />
          </div>

          
          <div className="col-md-5 mb-3 d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="button" class="btn btn-danger px-5 me-md-2">Reset Form</button>
            <button type="button" class="btn btn-success px-4 ">Add Product</button>
          </div>
        </div>

      </form>
    </div>

  )
}

export default AddProduct;