const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  function dfs(x, y) {

    if (x < 0 || x >= rows || y < 0 || y >= cols || grid[x][y] === 'W') {
      return;
    }

    grid[x][y] = 'W';

    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  }

  let islandCount = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 'L') {  
        islandCount++;
        dfs(i, j);  
      }
    }
  }

  return islandCount;
};
const grid = [
  ["L","L","W","W","W"],
  ["L","L","W","W","W"],
  ["W","W","L","W","W"],
  ["W","W","W","L","L"],
];

console.log(getTotalIsles(grid));

module.exports = getTotalIsles;