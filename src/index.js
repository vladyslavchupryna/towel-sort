module.exports = function towelSort (matrix) {
  return matrix?.reduce((arr, row, i) => i % 2 === 0 ? arr.concat(row) : arr.concat(row.reverse()),[]) || [];
}
