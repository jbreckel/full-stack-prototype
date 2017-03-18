import React from 'react'
import { shallow } from 'enzyme'

import ProductTable from '../../../client/components/ProductTable'

jest.mock('../../../client/containers/modals/UpdateProduct', () => 'UpdateProduct')
jest.mock('../../../client/containers/modals/DeleteProduct', () => 'DeleteProduct')

describe('ProductTable', () => {
  it('render', () => {
    const wrapper = shallow(
      <ProductTable
        products={[
          {
            id: 'id-1',
            name: 'name',
            purchasePrice: 14,
            salePrice: 15,
            category: {
              id: 'id',
              name: 'category',
            },
          },
          {
            id: 'id-2',
            name: 'name',
            purchasePrice: 14,
            salePrice: 15,
            category: null,
          },
        ]}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
