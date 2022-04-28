/**
 * @param {number[]} nums
 * @return {number}
* #136 https://leetcode.com/problems/single-number/
 */
var singleNumber = function(nums) {
  //   let duplicates = [];
  //   let single;
  //   for(let i = 0;i<nums.length;i++){
  //       if(nums.lastIndexOf(nums[i]) && nums.lastIndexOf(nums[i]) !== i){
  //           duplicates.push(nums[i])
  //       }else if(!duplicates.includes(nums[i])){
  //           single = nums[i]
  //       }
  //   }
  // return single
    let hashMap = {};
    for(let n of nums){
        if(hashMap[n]){
            hashMap[n] = hashMap[n] +1
        }else{
            hashMap[n] = 1
        }
    }
    for(let hash in hashMap){
        if(hashMap[hash] === 1){
            return hash
        }
    }
};
