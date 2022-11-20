import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CDBContainer, CDBBreadcrumb, CDBIcon } from 'cdbreact';
import {Link} from 'react-router-dom';

function AddDist() {
  return (



    



    <div className="container pb-5 col-md-8" style={{boxShadow: '1px 2px 9px #F4AAB9', borderRadius: 10}}>
      
      <form className='mt-5 pt-5'>
        <h2 className='text-center mb-1' style={{textTransform: 'uppercase', color: '#282828', fontWeight: 'bold'}}>Add Distributor</h2>

        <CDBContainer>
            <CDBBreadcrumb color="none" className="align-items-center mt-3 mb-4">
              <Link style={{ color: '#282828'}}  to='/'><li className="breadcrumb-item" >Manufacturer</li></Link>
              <CDBIcon className="mx-2 text-muted" fas icon="angle-double-right"/>
              <Link style={{color: '#282828'}}  to='/distributor'><li className="breadcrumb-item ">Distributor</li></Link>
              <CDBIcon className="mx-2 text-muted" fas icon="angle-double-right"/>
              <li className="breadcrumb-item active">Add Distributor</li>
              
            </CDBBreadcrumb>
        </CDBContainer>

        <div className="form-group row d-flex justify-content-center">
          <label htmlFor="distName" className='col-md-3 col-form-label'>Distributor Name</label>
          <div className="col-md-3">
            <input type="text" className='form-control' id='distName' placeholder='Distributor Name' />
          </div>

          <label htmlFor="region" className='col-md-2 col-form-label'>Assign Region</label>
          <div className="col-md-3">
            <select className='form-select mb-3' >
              <option value='' disabled selected hidden ></option>
              <option value='1'>Region 1</option>
              <option value='2'>Region 2</option>
              <option value='3'>Region 3</option>
              <option value='4'>Region 4</option>
            </select>
          </div>
        </div>

        <div className="form-group row d-flex justify-content-center mb-3">
          <label htmlFor="CNIC" className='col-md-3 col-form-label'>CNIC #</label>
          <div className="col-md-3">
          <input type="text" className='form-control'  data-inputmask="'mask': '99999-9999999-9'"  placeholder="XXXXX-XXXXXXX-X"  id='CNIC' required="" ></input>
          </div>

          <label htmlFor="address" className='col-md-2 col-form-label'>Address</label>
          <div className="col-md-3">
            <input type="text" className='form-control' id='address'  />
          </div>
        </div>

        <div className="form-group row d-flex justify-content-center mb-3">
          <label htmlFor="ID" className='col-md-3 col-form-label'>ID</label>
          <div className="col-md-3">
            <input type="text" className='form-control' id='ID' placeholder='Assign an ID to Distributor' />
          </div>

          <label htmlFor="age" className='col-md-2 col-form-label'>Age</label>
          <div className="col-md-3">
            <input type="number" min='18' max='70' className='form-control' id='age'  />
          </div>
        </div>

          
        <div className="col-md-5 mb-3 d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="button" class="btn btn-danger px-5 me-md-2">Reset Form</button>
            <button type="button" class="btn btn-success px-4 ">Add Distributor</button>
        </div>
        

      </form>
    </div>
  )
}

export default AddDist