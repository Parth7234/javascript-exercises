const findTheOldest = function(arr) {
    for (let obj of arr){
        if(obj.yearOfDeath===undefined)obj.yearOfDeath=new Date().getFullYear()
    }
    return arr.reduce((currOldest,obj)=>{
        if(currOldest.yearOfDeath-currOldest.yearOfBirth>=obj.yearOfDeath-obj.yearOfBirth)return currOldest
        else return obj
    },arr[0])
};

// Do not edit below this line
module.exports = findTheOldest;
