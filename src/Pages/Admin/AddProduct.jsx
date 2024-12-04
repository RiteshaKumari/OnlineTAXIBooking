import React from 'react';
import './AddProduct.module.css';

function AddProduct() {
  return (
    <div className="main-content">
      <div className="form-container">
        <h2>Product Add Category</h2>
        <p>Create a new product category and manage your inventory efficiently.</p>
        <form className="form" encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="categoryName">Category Name</label>
            <input type="text" id="categoryName" placeholder="Enter category name" />
          </div>
          <div className="form-group">
            <label htmlFor="categoryCode">Category Code</label>
            <input type="text" id="categoryCode" placeholder="Enter category code" />
          </div>
          <div className="form-group full-width">
            <label htmlFor="description">Description</label>
            <textarea id="description" placeholder="Enter description"></textarea>
          </div>
          <div className="form-group full-width">
            <label htmlFor="productImage">Product Image</label>
            <div className="file-upload">
              <input type="file" id="productImage" />
              <span className="upload-text">Drag and drop a file or click to upload</span>
            </div>
          </div>
          <div className="form-buttons">
            <button type="submit" className="btn-submit">
              Submit
            </button>
            <button type="button" className="btn-cancel">
              Cancel
            </button>
          </div>
        </form>
      </div>
      </div>
  );
}

export default AddProduct;
