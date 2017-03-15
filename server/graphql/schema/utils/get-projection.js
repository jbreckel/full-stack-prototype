// from https://github.com/sitepoint-editors/graphql-nodejs/blob/master/graphql/get-projection.js

export default (fieldASTs) =>
  fieldASTs.selectionSet.selections.reduce((projections, selection) => ({
    ...projections,
    [selection.name.value]: 1,
  }), {})
