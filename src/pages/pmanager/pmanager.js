import React, { useState } from 'react';
import {
  useGetAllProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} from './apiSlice';

function ProductManagement() {
  const { data: products, isLoading, isError } = useGetAllProductsQuery();
  const [newProduct, setNewProduct] = useState({});
  const [editedProduct, setEditedProduct] = useState({});
  
  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const handleCreateProduct = async () => {
    try {
      await createProduct(newProduct);
      setNewProduct({});
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleUpdateProduct = async (productId) => {
    try {
      await updateProduct({ id: productId, updatedProduct: editedProduct });
      setEditedProduct({});
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await deleteProduct(productId);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading products.</p>;
  }

  return (
    <div>
      <h1>Product Management</h1>
      <h2>Create Product</h2>
      <input
        type="text"
        placeholder="Name"
        value={newProduct.name || ''}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={newProduct.price || ''}
        onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
      />
      <button onClick={handleCreateProduct}>Create</button>

      <h2>Edit Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <input
              type="text"
              value={editedProduct.name || ''}
              onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })}
            />
            <input
              type="number"
              value={editedProduct.price || ''}
              onChange={(e) => setEditedProduct({ ...editedProduct, price: parseFloat(e.target.value) })}
            />
            <button onClick={() => handleUpdateProduct(product.id)}>Update</button>
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductManagement;
