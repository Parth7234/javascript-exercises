const sumAll = function(a,b) {
    if(typeof(a)!='number'||typeof(b)!='number')return 'ERROR'
    if(a<=0||b<=0)return "ERROR"
    if(Math.ceil(a)!=a||Math.ceil(b)!=b)return "ERROR"

    let sum=0;
    let mn=Math.min(a,b);
    let mx=Math.max(a,b);
    for(let i=mn;i<=mx;i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
