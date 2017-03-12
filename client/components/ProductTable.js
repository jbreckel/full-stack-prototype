import React from 'react'

import UpdateProduct from '../containers/modals/UpdateProduct'
import DeleteProduct from '../containers/modals/DeleteProduct'

const ProductTable = ({ categories, products }) => (
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
          const { id, name, purchasePrice, salePrice, categoryId } = product
          const category = categories.find(({ id: cid }) => cid === categoryId)
            || { name: 'empty' }
          return (
            <tr key={ id }>
              <td>{ category.name }</td>
              <td>{ id.substring(0, 5) }</td>
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
