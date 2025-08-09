const removeFromArray = function(arr,...args) {
    let newarr=[]
    for(let i=0;i<arr.length;i++){
        if(!args.includes(arr[i])){
            newarr.push(arr[i]);
        }
    }
    return newarr
};

// Do not edit below this line
module.exports = removeFromArray;
