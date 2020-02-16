module.exports = function countCats(matrix) {
    return matrix.reduce((allCatCounts, rows) =>
        allCatCounts + rows.reduce((catCountInRow, row) => catCountInRow + (row == '^^' ? 1 : 0), 0), 0);
};