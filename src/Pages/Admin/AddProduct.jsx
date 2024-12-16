import React from 'react';


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
      <style>
        {`
        body {
    font-family: 'Poppins', Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f6f9;
    box-sizing: border-box;
  }

  .form-container {
    width: 100%;
    top: 53px;
    max-width: 876px;
    position: relative;
    margin: 46px auto;
    padding: 25px;
    background: linear-gradient(135deg, #ffffff, #f9f9f9);
    border-radius: 12px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}

  h2 {
    margin-bottom: 10px;
    font-size: 1.8rem;
    color: #333;
    text-align: center;
    font-weight: 600;
  }

  p {
    margin-bottom: 20px;
    color: #666;
    text-align: center;
    font-size: 0.95rem;
  }

  .form {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .form-group {
    flex: 1 1 calc(50% - 20px);
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .form-group.full-width {
    flex: 1 1 100%;
  }

  label {
    font-size: 0.9rem;
    color: #555;
    font-weight: 500;
  }

  input,
  textarea {
    width: 100%;
    padding: 12px 15px;
    font-size: 0.95rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: #fff;
    transition: 0.3s ease-in-out;
  }

  input:focus,
  textarea:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }

  .file-upload {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border: 2px dashed #ccc;
    border-radius: 6px;
    color: #999;
    cursor: pointer;
    transition: border-color 0.3s ease-in-out;
  }

  .file-upload:hover {
    border-color: #007bff;
  }

  .upload-text {
    font-size: 0.9rem;
    color: #666;
    margin-top: 10px;
  }

  .form-buttons {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
  }

  .btn-submit {
    flex: 1;
    background: #007bff;
    color: #fff;
    padding: 12px 20px;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
  }

  .btn-submit:hover {
    background: #0056b3;
  }

  .btn-cancel {
    flex: 1;
    background: #d9534f;
    color: #fff;
    padding: 12px 20px;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
  }

  .btn-cancel:hover {
    background: #c9302c;
  }

  @media (max-width: 768px) {
    .form {
      flex-direction: column;
    }

    .form-group {
      flex: 1 1 100%;
    }

    .form-buttons {
      flex-direction: column;
    }

    .btn-submit,
    .btn-cancel {
      width: 100%;
    }
  }

        `}
      </style>
      </div>
  );
}

export default AddProduct;
