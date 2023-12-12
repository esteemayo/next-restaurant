'use client';

import { useState } from 'react';

const AddProduct = () => {
  return (
    <div>
      <form>
        <h1 className='capitalize'>Add new product</h1>
        <div>
          <label htmlFor='title'>Title</label>
          <input type='text' name='title' />
        </div>
        <div>
          <label htmlFor='desc'>DEsc</label>
          <textarea name='desc' />
        </div>
        <div>
          <label htmlFor='price'>Price</label>
          <input type='number' name='price' />
        </div>
        <div>
          <label htmlFor='category'>Category</label>
          <input type='text' name='category' />
        </div>
        <div>
          <label htmlFor='options'>Options</label>
          <div>
            <input type='text' placeholder='Title' name='title' />
            <input type='number' placeholder='Price' name='additionalPrice' />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
