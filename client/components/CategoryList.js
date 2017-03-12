import React from 'react'

const CategoryList = ({ categories, querySubscriptions: { loading } }) => (
  <div>
    {
      loading
        ? 'Loading'
        : (
          <ul>
            {
              categories.map(({ id, name }) => (
                <li key={id} >{ name }</li>
              ))
            }
          </ul>
        )
    }
  </div>
)

export default CategoryList
