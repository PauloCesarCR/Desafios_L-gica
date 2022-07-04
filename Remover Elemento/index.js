const removeElement = (nums, val) => {
    while (nums.includes(val)){
        nums.splice(nums.indexOf(val),1);
    }
    console.log(nums)
};

removeElement([1,2,2,3,4,5],2)