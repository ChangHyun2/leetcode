/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const set = new Set();
  for (const n of nums) {
    if (set.has(n)) return true;
    set.add(n);
  }
  return false;
};
