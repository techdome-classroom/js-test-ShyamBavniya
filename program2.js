const decodeTheRing = function (s, p) {
  // Create a 2D array to store the DP results
  const m = s.length;
  const n = p.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
  
  // Initial condition
  dp[0][0] = true;
  
  // Handle patterns with leading '*' characters
  for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') {
          dp[0][j] = dp[0][j - 1];
      }
  }
  
  // Fill the DP table
  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
          if (p[j - 1] === '*') {
              dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
          } else if (p[j - 1] === '?') {
              dp[i][j] = dp[i - 1][j - 1];
          } else {
              dp[i][j] = dp[i - 1][j - 1] && s[i - 1] === p[j - 1];
          }
      }
  }
  
  // Return the result
  return dp[m][n];
};

// Examples to test the function
console.log(decodeTheRing("aa", "a"));    // False
console.log(decodeTheRing("aa", "*"));    // True
console.log(decodeTheRing("cb", "?a"));   // False
console.log(decodeTheRing("adceb", "*a*b")); // True
console.log(decodeTheRing("acdcb", "a*c?b")); // False

module.exports = decodeTheRing;