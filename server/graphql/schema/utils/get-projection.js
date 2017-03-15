export default (fieldASTs) =>
  fieldASTs.selectionSet.selections.reduce((projections, selection) => ({
    ...projections,
    [selection.name.value]: 1,
  }), {})
