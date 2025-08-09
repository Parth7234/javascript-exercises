const leapYears = function(yr) {
    if(!Number.isInteger(yr))return 'ERROR'
    if(yr<0)return 'ERROR'
    if(yr%4==0){
        if(yr%100!=0)return true;
        if(yr%400==0)return true;
        return false;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
