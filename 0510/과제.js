function 평균구하기(x){
    let result = x.reduce((a,b) => a+b) / x.length
    return result
}

function 숫자콤마찍기(num){
    let str = num+'';
    let len = str.length;
    let point = len%3;
    let result = str.substring(0,point);
    console.log(result);
    for(let i = point; i<len; i+=3){
        if(result != ""){
            result += ",";
        }
        result += str.substring(i,i+3)
    }
    return result
}