/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


// Using hashtable; to store the complement of each element as the key and the index as the value. 
// We can then iterate over the array, and for each element, check if its complement is already in the hash table. 
// If it is, we have found the two elements that add up to the target, and we can return their indices. 
// If not, we add the element and its index to the hash table and continue iterating.
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}
