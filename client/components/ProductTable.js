import React from 'react'

import UpdateProduct from '../containers/modals/UpdateProduct'
import DeleteProduct from '../containers/modals/DeleteProduct'

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
        products.map((product) => {
          const { id, name, purchasePrice, salePrice, category } = product
          const cname = category ? category.name : 'empty'
          return (
            <tr key={ id }>
              <td>{ cname }</td>
              <td>{ id }</td>
              <td>{ name }</td>
              <td>{ purchasePrice }</td>
              <td>{ salePrice }</td>
              <td><UpdateProduct product={ product }>{`Edit ${name}`}</UpdateProduct></td>
              <td><DeleteProduct product={ product }>{`Delete ${name}`}</DeleteProduct></td>
            </tr>
          )
        }
        )
      }
    </tbody>
  </table>
)

export default ProductTable
