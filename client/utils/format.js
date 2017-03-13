const number = (val) => {
  if (isNaN(val)) {
    return '--'
  }
  return Number(val).toLocaleString()
}

export default {
  number,
}
