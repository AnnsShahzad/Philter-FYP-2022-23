import {React, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import {CDBBox, CDBFooter, CDBLink, CDBContainer, CDBBreadcrumb, CDBIcon } from 'cdbreact';
import {Link} from 'react-router-dom';

function AddProduct() {

  const [product, addProduct] = useState({
    companyName:"",mfgDate:"",title:"",
    expDate:"",description:"",batch:"",
    distrributor:"",quantity:"", singleCost:""
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);

    name = e.target.name;
    value = e.target.value;

    addProduct({ ... product, [name]:value});
  }

  const storeProduct = async (e) => {
    e.preventDefault();

    const {companyName,mfgDate,title,expDate,description,batch,distrributor,quantity, singleCost} = product;

    const res = await fetch("/addProduct", {
      method:"POST",
      headers: {
        "Content-Type" : "product/json"
      },

      body: JSON.stringify({
        companyName,mfgDate,title,expDate,description,batch,distrributor,quantity, singleCost
      })
    });

    const data = await res.json();

    if (data.status === 422 || !data)
    {
      window.alert("New Product Addition Failed...");
      console.log("New Product Addition Failed...");
    } else{
      window.alert("Product Added Successfully.");
      console.log("Product Added Successfully.");
    }
  }

  return (
  
    <div className="container pb-5 col-md-8" style={{boxShadow: '1px 2px 9px #F4AAB9', borderRadius: 10}}>
      
      <form method='POST' className='mt-5 pt-5'>
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
            <input type="text" className='form-control' id='companyName' placeholder='Company Name' name='companyName' value={product.companyName} onChange={handleInputs} />
          </div>

          <label htmlFor="MFGdate" className='col-md-2 col-form-label'>MFG Date</label>
          <div className="col-md-3">
            <input onChange={handleInputs} type="date" className='form-control' id='MFGdate' name='mfgDate' value={product.mfgDate}   />
          </div>
        </div>

        <div className="form-group row d-flex justify-content-center mb-3">
          <label htmlFor="productTitle" className='col-md-3 col-form-label'>Product Title</label>
          <div className="col-md-3">
            <input onChange={handleInputs} type="text" className='form-control' name='title' id='productTitle' placeholder='Product Title' value={product.title} />
          </div>

          <label htmlFor="EXPdate" className='col-md-2 col-form-label'>EXP Date</label>
          <div className="col-md-3">
            <input onChange={handleInputs} type="date" className='form-control' id='EXPdate' name='expDate' value={product.expDate}  />
          </div>
        </div>

        <div className="form-group row d-flex justify-content-center mb-3">
          <label htmlFor="productDescription" className='col-md-3 col-form-label'>Description</label>
          <div className="col-md-3">
            <input onChange={handleInputs} type="text" className='form-control' id='productDescription' name='description' placeholder='Short Description' value={product.description} />
          </div>

          <label htmlFor="batchNumber" className='col-md-2 col-form-label'>Batch #</label>
          <div className="col-md-3">
            <input onChange={handleInputs} type="number" min='1' className='form-control' name='batch' id='batchNumber' value={product.batch}  />
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
            <input onChange={handleInputs} type="number" className='form-control' placeholder='Quantity of Products' id='productQuantity' name='quantity' value={product.quantity}  />
          </div>
        </div>

        <div className="form-group row d-flex justify-content-center mb-3">
          <div className="col-md-5">
          <input onChange={handleInputs} type="number" className='form-control' placeholder='Cost of Single Product' id='singleItemCost' name='singleCost' value={product.singleCost} />
          </div>

          
          <div className="col-md-5 mb-3 d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="button" class="btn btn-danger px-5 me-md-2">Reset Form</button>
            <button type="button" class="btn btn-success px-4 "  onClick={storeProduct}>Add Product</button>
          </div>
        </div>

      </form>
    </div>

  )
}

export default AddProduct;