/**
 * @param {number[]} nums
 * @return {number}
 https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/
 */
var removeDuplicates = function(nums) {
    let arr = nums;
let isExist = {};
for(let i=0;i < arr.length;i++){

    if(isExist[arr[i]]){
         arr.splice(i,1);
        --i;
    }else{
        isExist[arr[i].toString()] = i.toString();
    }
}
    return arr.length
};
