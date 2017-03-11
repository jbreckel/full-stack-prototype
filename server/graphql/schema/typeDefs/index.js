import schema from './schema.graphql'
import query from './query.graphql'
import mutation from './mutation.graphql'
import product from './product.graphql'
import category from './category.graphql'

export default `
${schema}
${query}
${product}
${mutation}
${category}
`
