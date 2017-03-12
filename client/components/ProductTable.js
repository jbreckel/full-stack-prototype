import React from 'react'

const ProductTable = ({ products }) => (
  <table>
    <thead>
      <tr>
        <th>Category</th>
        <th>ID</th>
        <th>Name</th>
        <th>Purchase price</th>
        <th>Sales price</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        products.map(({ id, name, purchasePrice, salePrice, category }) => (
          <tr key={ id }>
            <td>{ category.name }</td>
            <td>{ id.substring(0, 5) }</td>
            <td>{ name }</td>
            <td>{ purchasePrice }</td>
            <td>{ salePrice }</td>
            <td>Edit { name }</td>
            <td>Delete { name }</td>
          </tr>
        ))
      }
    </tbody>
  </table>
)

export default ProductTable
